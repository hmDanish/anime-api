import axios from "axios";
import { v1_base_url } from "../../utils/base_v1.js";

export async function decryptSources_v1(epID, id, name, type) {
  try {
    // const [{ data: sourcesData }, { data: key }] = await Promise.all([
    //   axios.get(`https://${v1_base_url}/ajax/v2/episode/sources?id=${id}`),
    //   axios.get("https://raw.githubusercontent.com/itzzzme/megacloud-keys/refs/heads/main/key.txt"),
    // ]);
    const { data: sourcesData } = await axios.get(
      `https://${v1_base_url}/ajax/v2/episode/sources?id=${id}`
    );
    const ajaxLink = sourcesData?.link;
    if (!ajaxLink) throw new Error("Missing link in sourcesData");

    const sourceIdMatch = /\/([^/?]+)\?/.exec(ajaxLink);
    const sourceId = sourceIdMatch?.[1];
    if (!sourceId) throw new Error("Unable to extract sourceId from link");

    const baseUrlMatch = ajaxLink.match(/^(https?:\/\/[^\/]+(?:\/[^\/]+){3})/);
    if (!baseUrlMatch)
      throw new Error("Could not extract base URL from ajaxLink");
    const baseUrl = baseUrlMatch[1];
    const iframeURL = `${baseUrl}/${sourceId}?k=1&autoPlay=0&oa=0&asi=1`;

    // const { data: rawSourceData } = await axios.get(
    //   `https://decrypt.zenime.site/extract?embed_url=${iframeURL}`
    // );
    // const decryptedSources = rawSourceData.data;

    const decryptedSources = await fetchDecryptedDataWithRetry(
      `https://decrypt.zenime.site/extract?embed_url=${iframeURL}`
    );

    // const rawLink = decryptedSources?.sources[0]?.file ?? "";

    const rawLink = decryptedSources?.sources?.[0]?.file;
    if (!rawLink)
      throw new Error("No HLS stream URL found in decrypted sources");


    const headers = {
      Referer: "https://megacloud.blog/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    };

    const PROXY_BASE = "https://critics-isa-revenues-cowboy.trycloudflare.com";

    const proxyLink = `${PROXY_BASE}/m3u8-proxy?url=${encodeURIComponent(
      rawLink
    )}&headers=${encodeURIComponent(JSON.stringify(headers))}`;

    return {
      id,
      type,
      link: {
        file: proxyLink,
        type: "hls",
      },
      tracks: decryptedSources?.tracks ?? [],
      intro: Array.isArray(decryptedSources?.intro)
        ? { start: decryptedSources?.intro[0], end: decryptedSources?.intro[1] }
        : null,
      outro: Array.isArray(decryptedSources?.outro)
        ? { start: decryptedSources?.outro[0], end: decryptedSources?.outro[1] }
        : null, 
      iframe: iframeURL,
      server: name,
    };
  } catch (error) {
    console.error(`Error during decryptSources_v1(${id}):`, error.message);
    return null;
  }
}


async function fetchDecryptedDataWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const { data: raw } = await axios.get(url);
      if (raw?.data) return raw.data;
    } catch (err) {
      console.warn(`Retry ${i + 1}/${retries} failed:`, err.message);
    }
    await new Promise((res) => setTimeout(res, delay));
  }
  throw new Error("Failed to get decrypted data after retries");
}

