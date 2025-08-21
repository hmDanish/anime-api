import axios from "axios";
import CryptoJS from "crypto-js";
import { v1_base_url } from "../../utils/base_v1.js";
import { fallback_1, fallback_2 } from "../../utils/fallback.js";
import extractToken from "../../helper/token.helper.js";
import { v4_base_url } from "../../utils/base_v4.js";

export async function decryptSources_v1(epID, id, name, type) {
  try {
    // const [{ data: sourcesData }, { data: key }] = await Promise.all([
    //   axios.get(`https://${v1_base_url}/ajax/v2/episode/sources?id=${id}`),
    //   axios.get("https://raw.githubusercontent.com/itzzzme/megacloud-keys/refs/heads/main/key.txt"),
    // ]);
    const { data: sourcesData } = await axios.get(
      // `https://${v1_base_url}/ajax/v2/episode/sources?id=${id}`,
      `https://${v4_base_url}/ajax/episode/sources?id=${id}`,
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
    const { data: rawSourceData } = await axios.get(
      `${baseUrl}/getSources?id=${sourceId}`,
    );
    const decryptedSources = rawSourceData;

    const rawLink = decryptedSources?.sources[0]?.file ?? "";

    const PROXY_BASE = "https://tssm3u8proxy.me"
    // const PROXY_BASE = "http://127.0.0.1:8080";


    const proxyLink = `${PROXY_BASE}/m3u8-proxy?url=${encodeURIComponent(
      rawLink
    )}`;

    return {
      id,
      type,
      link: {
        file: rawLink,
        // file: proxyLink,
        type: "hls",
      },
      tracks: decryptedSources.tracks ?? [],
      intro: decryptedSources.intro ?? null,
      outro: decryptedSources.outro ?? null,
      iframe: iframeURL,
      server: name,
    };
  } catch (error) {
    console.error(`Error during decryptSources_v1(${id}):`, error.message);
    return null;
  }
}
