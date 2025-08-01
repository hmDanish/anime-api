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

async function extractStreamingInfo(id, name, type) {
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
    return { streamingLink, servers };
  } catch (error) {
    console.error("An error occurred:", error);
    return { streamingLink: null, servers: [] };
  }
}
export { extractStreamingInfo };
