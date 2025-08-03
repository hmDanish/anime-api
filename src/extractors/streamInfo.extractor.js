import axios from "axios";
import * as cheerio from "cheerio";
import { v1_base_url } from "../utils/base_v1.js";
// import decryptMegacloud from "../parsers/decryptors/megacloud.decryptor.js";
// import AniplayExtractor from "../parsers/aniplay.parser.js";
import { decryptSources_v1 } from "../parsers/decryptors/decrypt_v1.decryptor.js";

export async function extractServers(id) {
  try {
    const resp = await axios.get(
      `https://${v1_base_url}/ajax/v2/episode/servers?episodeId=${id}`
    );
    const $ = cheerio.load(resp.data.html);
    const serverData = [];
    $(".server-item").each((index, element) => {
      const data_id = $(element).attr("data-id");
      const server_id = $(element).attr("data-server-id");
      const type = $(element).attr("data-type");

      const serverName = $(element).find("a").text().trim();
      serverData.push({
        type,
        data_id,
        server_id,
        serverName,
      });
    });
    return serverData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function extractStreamingInfo(id, name, type, input) {
  try {
    const servers = await extractServers(id.split("?ep=").pop());
    let requestedServer = servers.filter(
      (server) =>
        server.serverName.toLowerCase() === name.toLowerCase() &&
        server.type.toLowerCase() === type.toLowerCase()
    );
    if (requestedServer.length === 0) {
      requestedServer = servers.filter(
        (server) =>
          server.serverName.toLowerCase() === name.toLowerCase() &&
          server.type.toLowerCase() === "raw"
      );
    }
    if (requestedServer.length === 0) {
      throw new Error(
        `No matching server found for name: ${name}, type: ${type}`
      );
    }
    const streamingLink = await decryptSources_v1(
      id,
      requestedServer[0].data_id,
      name,
      type
    );

    // const streamingLink = "null"

    if (!streamingLink || streamingLink === "null") {
      console.warn("⚠️ Primary decryption failed, using fallback stream API...");

      const fallbackUrl = `https://vimal.shoko.fun/api/stream?id=${encodeURIComponent(
        input
      )}&server=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`;
      
      const fallbackResp = await axios.get(fallbackUrl);

      let result = fallbackResp?.data?.results
      const streamUrl = fallbackResp?.data?.results?.streamingLink?.link?.file;
      console.log("🔄 Fallback streaming link:", streamUrl);

       const PROXY_BASE = "http://64.23.163.208:8080";
      //  const PROXY_BASE = "http://127.0.0.1:8080";

       const proxyLink = `${PROXY_BASE}/m3u8-proxy?url=${encodeURIComponent(
         streamUrl
       )}`;
      
      result.streamingLink.link.file = proxyLink;  
      
      return result;
    }
      

    return { streamingLink, servers };
  } catch (error) {
    console.error("An error occurred:", error);
    return { streamingLink: null, servers: [] };
  }
}
export { extractStreamingInfo };
