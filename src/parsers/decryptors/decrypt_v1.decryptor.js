import axios from "axios";
import { v1_base_url } from "../../utils/base_v1.js";

export async function decryptSources_v1(epID, id, name, type) {
  let iframeURL = ""; // So we can log it even in the catch block

  try {
    // console.log(`🔍 Fetching sources for ID: ${id}`);
    const { data: sourcesData } = await axios.get(
      `https://${v1_base_url}/ajax/v2/episode/sources?id=${id}`
    );

    // console.log("✅ sourcesData fetched:", sourcesData);

    const ajaxLink = sourcesData?.link;
    if (!ajaxLink) throw new Error("❌ Missing link in sourcesData");
    // console.log("🔗 ajaxLink:", ajaxLink);

    const sourceIdMatch = /\/([^/?]+)\?/.exec(ajaxLink);
    const sourceId = sourceIdMatch?.[1];
    if (!sourceId) throw new Error("❌ Unable to extract sourceId from link");
    // console.log("🧩 Extracted sourceId:", sourceId);

    const baseUrlMatch = ajaxLink.match(/^(https?:\/\/[^\/]+(?:\/[^\/]+){3})/);
    if (!baseUrlMatch)
      throw new Error("❌ Could not extract base URL from ajaxLink");
    const baseUrl = baseUrlMatch[1];
    // console.log("🌐 Extracted baseUrl:", baseUrl);

    iframeURL = `${baseUrl}/${sourceId}?k=1&autoPlay=0&oa=0&asi=1`;
    // console.log("🖼️ iframeURL:", iframeURL);

const decryptURL = `https://decrypt.zenime.site/extract?embed_url=${encodeURIComponent(
  iframeURL
    )}`;
    // console.log("🔐 Calling decrypt API:", decryptURL);

    const decryptedSources = await fetchDecryptedDataWithRetry(decryptURL);

    // console.log("✅ decryptedSources received:", decryptedSources);

    const rawLink = decryptedSources?.sources?.[0]?.file;
    if (!rawLink)
      throw new Error("❌ No HLS stream URL found in decrypted sources");

    console.log("🎞️ rawLink:", rawLink);

    const headers = {
      Referer: "https://megacloud.blog/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    };

    // const PROXY_BASE = "http://64.23.163.208:8080"; // Add http:// or https:// here
    const PROXY_BASE = "https://tssm3u8proxy.me"

    // const PROXY_BASE = "http://127.0.0.1:8080";

    const proxyLink = `${PROXY_BASE}/m3u8-proxy?url=${encodeURIComponent(
      rawLink
    )}`;


    // console.log("🚀 Final proxyLink:", proxyLink);

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
    console.error(`❌ Error during decryptSources_v1(${id}):`, error.message);
    // console.log("📦 iframeURL at error time:", iframeURL);
    return null;
  }
}

async function fetchDecryptedDataWithRetry(url, retries = 3, delay = 3000) {
  for (let i = 0; i < retries; i++) {
    try {
      // console.log(`🔁 Attempt ${i + 1} to fetch: ${url}`);
      const { data: raw } = await axios.get(url);
      if (raw?.data) {
        console.log(`✅ Success on attempt ${i + 1}`);
        return raw.data;
      } else {
        // console.warn(`⚠️ Attempt ${i + 1} returned empty data`);
      }
    } catch (err) {
      // console.warn(`❗ Retry ${i + 1}/${retries} failed:`, err.message);
    }
    await new Promise((res) => setTimeout(res, delay));
  }
  throw new Error("🔥 Failed to get decrypted data after all retries");
}
