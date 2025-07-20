import axios from "axios";
import CryptoJS from "crypto-js";
import { v1_base_url } from "../../utils/base_v1.js";
import { fallback_1, fallback_2 } from "../../utils/fallback.js";

export async function decryptSources_v1(epID, id, name, type) {
  try {
    const [{ data: sourcesData }, { data: key }] = await Promise.all([
      axios.get(`https://${v1_base_url}/ajax/v2/episode/sources?id=${id}`),
      axios.get("https://raw.githubusercontent.com/itzzzme/megacloud-keys/refs/heads/main/key.txt"),
    ]);

    const ajaxLink = sourcesData?.link;
    if (!ajaxLink) throw new Error("Missing link in sourcesData");

    const sourceIdMatch = /\/([^/?]+)\?/.exec(ajaxLink);
    const sourceId = sourceIdMatch?.[1];
    if (!sourceId) throw new Error("Unable to extract sourceId from link");

    const baseUrlMatch = ajaxLink.match(/^(https?:\/\/[^\/]+(?:\/[^\/]+){3})/);
    if (!baseUrlMatch) throw new Error("Could not extract base URL from ajaxLink");
    const baseUrl = baseUrlMatch[1];

    let decryptedSources = null;
    let rawSourceData = {};

    try {
      const { data } = await axios.get(`${baseUrl}/getSources?id=${sourceId}`);
      rawSourceData = data;

      const encrypted = rawSourceData?.sources;
      if (!encrypted) throw new Error("Encrypted source missing");

      const decrypted = CryptoJS.AES.decrypt(encrypted, key.trim()).toString(CryptoJS.enc.Utf8);
      if (!decrypted) throw new Error("Failed to decrypt source");

      decryptedSources = JSON.parse(decrypted);
    } catch (decryptionError) {
      try {
        const fallback = name.toLowerCase() === "hd-1" ? fallback_1 : fallback_2;

        const { data: html } = await axios.get(
          `https://${fallback}/stream/s-2/${epID}/${type}`,
          {
            headers: {
              Referer: `https://${fallback_1}/`,
            },
          }
        );

        const dataIdMatch = html.match(/data-id=["'](\d+)["']/);
        const realId = dataIdMatch?.[1];
        if (!realId) throw new Error("Could not extract data-id for fallback");

        const { data: fallback_data } = await axios.get(
          `https://${fallback}/stream/getSources?id=${realId}`,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );

        decryptedSources = [{ file: fallback_data.sources.file }];
        rawSourceData.tracks = fallback_data.tracks ?? [];
        rawSourceData.intro = fallback_data.intro ?? null;
        rawSourceData.outro = fallback_data.outro ?? null;
      } catch (fallbackError) {
        throw new Error("Fallback failed: " + fallbackError);
      }
    }

    const rawLink = decryptedSources?.[0]?.file ?? ""; const headers = {};
    
   
if (rawLink.includes("tubeplx")) {
      headers.Referer = "https://vidwish.live/";
    } else if (rawLink.includes("dotstream")) {
      headers.Referer = "https://megaplay.buzz/";
    }

    headers["User-Agent"] =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36";

    const PROXY_BASE = "http://64.23.163.208:8080";
    // const PROXY_BASE = "https://proxy-app-65pgd.ondigitalocean.app";
    // const PROXY_BASE = "http://127.0.0.1:8080";
    const proxyLink = `${PROXY_BASE}/m3u8-proxy?url=${encodeURIComponent(
      rawLink
    )}&headers=${encodeURIComponent(JSON.stringify(headers))}`;  
    
    console.log({rawLink, proxyLink});
    

    return {
      id,
      type,
      link: {
        file: proxyLink,
        type: "hls",
      },
      tracks: rawSourceData.tracks ?? [],
      intro: rawSourceData.intro ?? null,
      outro: rawSourceData.outro ?? null,
      server: name,
    };
  } catch (error) {
    console.error(`Error during decryptSources_v1(${id}):`, error.message);
    return null;
  }
}
