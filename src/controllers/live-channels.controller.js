const liveTvChannels = [
    {
        "id": "OnePiece.us@SD",
        "title": "One Piece",
        "logo": "https://i.imgur.com/XsvbAWR.png",
        "stream_url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6380c94947c72b0007ee9a13/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=8e06d815-1f2c-11ef-86d8-5d587df108c6&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=011422f0-e50a-4334-9bb5-b01fe7684ef5"
    },
    {
        "id": "Naruto.us",
        "title": "Naruto",
        "logo": "https://i.imgur.com/M8X3Kvc.png",
        "stream_url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5da0c85bd2c9c10009370984/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a29f8-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=bbd39836-427d-4099-82bb-28b34f88aa35"
    },
    {
        "id": "PlutoTVAnime.us@Italy",
        "title": "Pluto TV Anime Italy (720p)",
        "logo": "https://i.imgur.com/bvbn8pa.png",
        "stream_url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/612375086abc84000738fc03/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain={APP_DOMAIN}&samsung_app_name={APP_NAME}&us_privacy=1YNY"
    },
    {
        "id": "AnimeVision.es",
        "title": "Anime Vision (1080p)",
        "logo": "https://i.imgur.com/pUpKznl.png",
        "stream_url": "https://d1ujfw1zyymzyd.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-a6fukwkbxmex8/live/fast-channel-animevision-64527ec0/fast-channel-animevision-64527ec0.m3u8"
    },
    {
        "id": "SpacetoonArabic.ae",
        "title": "Spacetoon Arabic (1080p)",
        "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Spacetoon_logo.png",
        "stream_url": "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-spacetoon/d8382fb9ab4b2307058f12c7ea90db54/index.m3u8"
    },
    {
        "id": "ToonamiAftermath.us@East",
        "title": "Toonami Aftermath East (480p)",
        "logo": "https://i.imgur.com/aSjhZK7.png",
        "stream_url": "http://api.toonamiaftermath.com:3000/est/playlist.m3u8"
    },
    {
        "id": "YuGiOh.us@SD",
        "title": "Yu-Gi-Oh!",
        "logo": "https://i.imgur.com/Tl6aW2u.png",
        "stream_url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/642d4493aa2d690008f0a03f/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=1b21d081-4b81-11ef-a8ac-e146e4e7be02&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1ca5a27f-794c-41ee-b51a-6fbe1b093d0b"
    },
    {
        "id": "AnimeVisionClassics.es",
        "title": "Anime Vision Classics (1080p)",
        "logo": "https://i.imgur.com/aYptdKX.png",
        "stream_url": "https://d82pyvmcw2kdc.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-swfivzrzwamaq/live/fast-channel-animevisionclassics-efc8dc6d/fast-channel-animevisionclassics-efc8dc6d.m3u8"
    },
    {
        "id": "",
        "title": "Mr. Bean Anime (1080p)",
        "logo": "",
        "stream_url": "https://amg00627-amg00627c28-rakuten-uk-3984.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanukcc-rakutenuk/playlist.m3u8"
    },
    {
        "id": "",
        "title": "Wasabi la chaîne anime",
        "logo": "",
        "stream_url": "https://amg01796-amg01796c3-rakuten-uk-2555.playouts.now.amagi.tv/playlist/amg01796-fastmediafast-wasabii-rakutenuk/playlist.m3u8"
    }
]

export const getLiveTvChannels = async (req, res) => {
    try {

        const response = {
            "success": true,
            "result": liveTvChannels
        }
        return res.json(response); // Return the desired structure
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "An error occurred" });
    }
};

export default getLiveTvChannels;
