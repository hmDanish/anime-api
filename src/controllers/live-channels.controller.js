// const liveTvChannels = [
//     {
//         "id": "OnePiece.us@SD",
//         "title": "One Piece",
//         "logo": "https://i.imgur.com/XsvbAWR.png",
//         "stream_url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6380c94947c72b0007ee9a13/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=8e06d815-1f2c-11ef-86d8-5d587df108c6&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=011422f0-e50a-4334-9bb5-b01fe7684ef5"
//     },
//     {
//         "id": "Naruto.us",
//         "title": "Naruto",
//         "logo": "https://i.imgur.com/M8X3Kvc.png",
//         "stream_url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5da0c85bd2c9c10009370984/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a29f8-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=bbd39836-427d-4099-82bb-28b34f88aa35"
//     },
//     {
//         "id": "PlutoTVAnime.us@Italy",
//         "title": "Pluto TV Anime Italy (720p)",
//         "logo": "https://i.imgur.com/bvbn8pa.png",
//         "stream_url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/612375086abc84000738fc03/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain={APP_DOMAIN}&samsung_app_name={APP_NAME}&us_privacy=1YNY"
//     },
//     {
//         "id": "AnimeVision.es",
//         "title": "Anime Vision (1080p)",
//         "logo": "https://i.imgur.com/pUpKznl.png",
//         "stream_url": "https://d1ujfw1zyymzyd.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-a6fukwkbxmex8/live/fast-channel-animevision-64527ec0/fast-channel-animevision-64527ec0.m3u8"
//     },
//     {
//         "id": "SpacetoonArabic.ae",
//         "title": "Spacetoon Arabic (1080p)",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Spacetoon_logo.png",
//         "stream_url": "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-spacetoon/d8382fb9ab4b2307058f12c7ea90db54/index.m3u8"
//     },
//     {
//         "id": "ToonamiAftermath.us@East",
//         "title": "Toonami Aftermath East (480p)",
//         "logo": "https://i.imgur.com/aSjhZK7.png",
//         "stream_url": "http://api.toonamiaftermath.com:3000/est/playlist.m3u8"
//     },
//     {
//         "id": "YuGiOh.us@SD",
//         "title": "Yu-Gi-Oh!",
//         "logo": "https://i.imgur.com/Tl6aW2u.png",
//         "stream_url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/642d4493aa2d690008f0a03f/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=1b21d081-4b81-11ef-a8ac-e146e4e7be02&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1ca5a27f-794c-41ee-b51a-6fbe1b093d0b"
//     },
//     {
//         "id": "AnimeVisionClassics.es",
//         "title": "Anime Vision Classics (1080p)",
//         "logo": "https://i.imgur.com/aYptdKX.png",
//         "stream_url": "https://d82pyvmcw2kdc.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-swfivzrzwamaq/live/fast-channel-animevisionclassics-efc8dc6d/fast-channel-animevisionclassics-efc8dc6d.m3u8"
//     },
//     {
//         "id": "",
//         "title": "Mr. Bean Anime (1080p)",
//         "logo": "",
//         "stream_url": "https://amg00627-amg00627c28-rakuten-uk-3984.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanukcc-rakutenuk/playlist.m3u8"
//     },
//     {
//         "id": "",
//         "title": "Wasabi la chaîne anime",
//         "logo": "",
//         "stream_url": "https://amg01796-amg01796c3-rakuten-uk-2555.playouts.now.amagi.tv/playlist/amg01796-fastmediafast-wasabii-rakutenuk/playlist.m3u8"
//     }
// ]


// export const getLiveTvChannels = async (req, res) => {
//     try {

//         const response = {
//             "success": true,
//             "result": liveTvChannels
//         }
//         return res.json(response); // Return the desired structure
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ error: "An error occurred" });
//     }
// };

// export default getLiveTvChannels;


const liveTvChannels = [
  {
    id: "3ABNKids.us",
    title: "3ABN Kids",
    logo: "https://i.imgur.com/SUPQAok.png",
    stream_url: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "ADNTVPlus.fr@SD",
    title: "ADN TV+",
    logo: "https://i.imgur.com/HQZQyWt.png",
    stream_url: "https://d3b73b34o7cvkq.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-gz2sgqzp076kf/adn.m3u8",
    lang: "fr",
    country: "France"
  },
  {
    id: "AnimationShowChannel.cn",
    title: "Animation Show Channel",
    logo: "https://i.imgur.com/Ul1pjUN.png",
    stream_url: "http://180.213.174.225:9901/tsfile/live/1034_1.m3u8?authid=0&key=txiptv&playlive=1",
    lang: "zh",
    country: "China"
  },
  {
    id: "Animax.in",
    title: "Animax [Geo-blocked]",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Animaxlogo-20160701.png",
    stream_url: "https://amg02159-kcglobal-amg02159c1-samsung-in-521.playouts.now.amagi.tv/playlist/amg02159-kcglobal-animax-samsungin/playlist.m3u8",
    lang: "en",
    country: "India"
  },
  {
    id: "AnimeAllDay.us",
    title: "Anime All Day",
    logo: "https://i.imgur.com/bYZtd0G.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26a781-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6903cfae-183e-4d3b-a482-b7acf38ce356",
    lang: "en",
    country: "United States"
  },
  {
    id: "AnimeVision.es",
    title: "Anime Vision (1080p)",
    logo: "https://i.imgur.com/pUpKznl.png",
    stream_url: "https://d1ujfw1zyymzyd.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-a6fukwkbxmex8/live/fast-channel-animevision-64527ec0/fast-channel-animevision-64527ec0.m3u8",
    lang: "es",
    country: "Spain"
  },
  {
    id: "AnimeVisionClassics.es",
    title: "Anime Vision Classics (1080p)",
    logo: "https://i.imgur.com/aYptdKX.png",
    stream_url: "https://d82pyvmcw2kdc.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-swfivzrzwamaq/live/fast-channel-animevisionclassics-efc8dc6d/fast-channel-animevisionclassics-efc8dc6d.m3u8",
    lang: "es",
    country: "Spain"
  },
  {
    id: "AnimeZoneTV.do",
    title: "Anime Zone TV (480p)",
    logo: "https://i.imgur.com/AHaXlCh.png",
    stream_url: "http://animezonetv.net/hls/stream.m3u8",
    lang: "es",
    country: "Dominican Republic"
  },
  {
    id: "BBCFourCBeebies.uk@HD",
    title: "BBC Four/CBeebies (1080p)",
    logo: "https://i0.wp.com/cleanfeed.thetvroom.com/media/2022/06/freeview-bbc-four-cbeebies-202206-001-01.png",
    stream_url: "https://viamotionhsi.netplus.ch/live/eds/bbc4cbeebies/browser-HLS8/bbc4cbeebies.m3u8",
    lang: "en",
    country: "United Kingdom"
  },
  {
    id: "BBCThreeCBBC.uk@HD",
    title: "BBC Three/CBBC (1080p)",
    logo: "https://svgmix.com/uploads/8a9370-cbbc-bbc-three.svg",
    stream_url: "https://viamotionhsi.netplus.ch/live/eds/bbc3cbbc/browser-HLS8/bbc3cbbc.m3u8",
    lang: "en",
    country: "United Kingdom"
  },
  {
    id: "AlanBeckerTV.us@SD",
    title: "Becker",
    logo: "https://yt3.googleusercontent.com/ytc/AOPolaSk8jLwTPTZ9tnSWr0coUk1-VJLYQCi2muftdUyHw=s100-c-k-c0x00ffffff-no-rj",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/630348a54c48ce00077eb6c7/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=1b1ca065-4b81-11ef-a8ac-e146e4e7be02&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=c5b43dd2-234d-4338-9a94-c40967ccbed6",
    lang: "en",
    country: "United States"
  },
  {
    id: "KMBYLD5.us",
    title: "Blues TV",
    logo: "https://i.imgur.com/px0CSti.png",
    stream_url: "https://2-fss-2.streamhoster.com/pl_138/205510-3094608-1/playlist.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "DisneyJr.tr",
    title: "Disney Jr. (1080p) [Geo-blocked]",
    logo: "https://www.dsmart.com.tr/api/v1/public/images/kanallar/disneyjr.png",
    stream_url: "https://saran-live.ercdn.net/disneyjunior/index.m3u8",
    lang: "tr",
    country: "Turkey"
  },
  {
    id: "DreamWorksChannelAsia.us@Vietnam",
    title: "DreamWorks Channel Asia Vietnam (1080p)",
    logo: "https://hls.mskycdn.online/logo/dreamworks.png",
    stream_url: "https://tv.ddns.vn/tv/dreamworks/index.m3u8",
    lang: "vi",
    country: "Vietnam"
  },
  {
    id: "DreikoTV.pa",
    title: "DreikoTv (720p) [Not 24/7]",
    logo: "https://i.imgur.com/k8U0e0b.png",
    stream_url: "https://cloudvideo.servers10.com:8081/8138/index.m3u8",
    lang: "es",
    country: "Panama"
  },
  {
    id: "EnerGeek.cl",
    title: "EnerGeek (720p) [Not 24/7]",
    logo: "https://cdn.energeek.cl/logos/Marca-512.png",
    stream_url: "https://backend.energeek.cl/webtv/egretroweb/index.m3u8?token=ZZDemoIPTVGH",
    lang: "es",
    country: "Chile"
  },
  {
    id: "ExtremaKidsTV.cr@HD",
    title: "Extrema Kids TV [Not 24/7]",
    logo: "https://www.vivalivetv.com/public/files/shows/0/1/3027-294x165-FFFFFF.jpg",
    stream_url: "https://627bb251f23c7.streamlock.net:444/ExtremaKids/ExtremaKids/playlist.m3u8",
    lang: "es",
    country: "Costa Rica"
  },
  {
    id: "GamingTV.us@France",
    title: "Gaming TV",
    logo: "https://i.imgur.com/Og6LBFc.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f8eccd81062c300078a11df/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=8e050353-1f2c-11ef-86d8-5d587df108c6&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1020d719-457b-4030-b4a2-b5301461d381",
    lang: "en",
    country: "France"
  },
  {
    id: "Geekdot.br",
    title: "Geekdot (720p)",
    logo: "https://i.imgur.com/jML1u4O.png",
    stream_url: "https://stream.ichibantv.com:3764/hybrid/play.m3u8",
    lang: "pt",
    country: "Brazil"
  },
  {
    id: "GikTVMX.mx",
    title: "GikTVMx (480p)",
    logo: "https://i.imgur.com/Gwz78jZ.png",
    stream_url: "https://pistream.ddns.net/hls/stream.m3u8",
    lang: "es",
    country: "Mexico"
  },
  {
    id: "GoldenEagleCartoon.cn",
    title: "Golden Eagle Cartoon",
    logo: "https://i.imgur.com/xfVHrKQ.png",
    stream_url: "http://1.24.190.98:10080/hls/51/index.m3u8",
    lang: "zh",
    country: "China"
  },
  {
    id: "GooderNationChannel32.us@West",
    title: "Gooder Nation Channel 32 (720p) [Not 24/7]",
    logo: "https://i.imgur.com/7bHiavg.png",
    stream_url: "https://ssh101stream.ssh101.com/akamaissh101/ssh101/channel32/playlist.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "GraphiteHD.us@West",
    title: "Graphite HD (720p) [Not 24/7]",
    logo: "https://i.ibb.co/v6Lgng1s/Graphite-HD-Logo.png",
    stream_url: "https://live20.bozztv.com/giatv/giatv-gooderisgooder/gooderisgooder/chunks.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "JapanimTV.be",
    title: "Japanim TV (1080p)",
    logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/6b97e19f-4243-4d48-b794-ff8cf54d795f-profile_image-300x300.png",
    stream_url: "https://foxkidstv.be:3369/stream/play.m3u8",
    lang: "fr",
    country: "Belgium"
  },
  {
    id: "JiangxiChildrensChannel.cn",
    title: "Jiangxi Children's Channel",
    logo: "https://www.tvchinese.net/uploads/tv/jxtv6.jpg",
    stream_url: "https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv6.m3u8",
    lang: "zh",
    country: "China"
  },
  {
    id: "Kanade.cl",
    title: "Kanade (1080p)",
    logo: "https://static.kanade.cl/assets/img/profilepic_512px.png",
    stream_url: "https://backend.energeek.cl/webtv/kanadeweb/index.m3u8?token=ZZDemoIPTVGH",
    lang: "es",
    country: "Chile"
  },
  {
    id: "KuriakosKids.pt",
    title: "Kuriakos Kids (1080p)",
    logo: "https://i.imgur.com/SRX6EPY.png",
    stream_url: "https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8",
    lang: "pt",
    country: "Portugal"
  },
  {
    id: "Lupinthe3rd.us@SD",
    title: "Lupin the 3rd",
    logo: "https://i.imgur.com/Wopu3y9.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/63b5964d1bdba1000712521f/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=2c7af0e6-35fc-11ef-a031-2b5d494037a2&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=ceff1aa0-cebb-4159-99d2-7b38b17807a8",
    lang: "en",
    country: "United States"
  },
  {
    id: "MagicKids.ar",
    title: "Magic Kids (486p)",
    logo: "https://i.imgur.com/CMImqQY.png",
    stream_url: "https://magicstream.ddns.net/magicstream/stream.m3u8",
    lang: "es",
    country: "Argentina"
  },
  {
    id: "MCN6MusicChannel.us",
    title: "MCN6 Music Channel (1080p) [Not 24/7]",
    logo: "https://i.imgur.com/j6IiysJ.png",
    stream_url: "https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "MoviesforGamers.us",
    title: "Movies for Gamers",
    logo: "https://i.imgur.com/aqjzEkb.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6008ddf24ef92b00079d61cf/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a02e3-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=2f37e9d8-bdac-4d46-949d-ccfbf76dd6e0",
    lang: "en",
    country: "United States"
  },
  {
    id: "Multimania.lv",
    title: "Multimania (Latvia) (576p)",
    logo: "https://i.imgur.com/J9Lwc0T.png",
    stream_url: "https://void.greenhosting.ru/Multimania_Mpeg4/index.m3u8",
    lang: "lv",
    country: "Latvia"
  },
  {
    id: "Naruto.us",
    title: "Naruto",
    logo: "https://i.imgur.com/M8X3Kvc.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5da0c85bd2c9c10009370984/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a29f8-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=bbd39836-427d-4099-82bb-28b34f88aa35",
    lang: "en",
    country: "United States"
  },
  {
    id: "Naruto.us@Austria",
    title: "Naruto",
    logo: "https://i.imgur.com/M8X3Kvc.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65d5fc39a25d5e00082895c4/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=1b1f1164-4b81-11ef-a8ac-e146e4e7be02&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=91b30c33-90e6-47e3-95e6-a297bd00e5df",
    lang: "en",
    country: "Austria"
  },
  {
    id: "Naruto.us@Canada",
    title: "Naruto",
    logo: "https://i.imgur.com/M8X3Kvc.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/642be2939189ce0008916c21/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=2c7b3f03-35fc-11ef-a031-2b5d494037a2&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=0f83fe69-e624-47e7-9e5e-670cb73840f2",
    lang: "en",
    country: "Canada"
  },
  {
    id: "Naruto.us@Germany",
    title: "Naruto",
    logo: "https://i.imgur.com/M8X3Kvc.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65d5fc39a25d5e00082895c4/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=84ae2b56-4b92-11ef-aece-533610f1ea34&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=624d6e59-b964-41c4-8e12-4ec9c07d66e8",
    lang: "de",
    country: "Germany"
  },
  {
    id: "OnePiece.us@SD",
    title: "One Piece",
    logo: "https://i.imgur.com/XsvbAWR.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6380c94947c72b0007ee9a13/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=8e06d815-1f2c-11ef-86d8-5d587df108c6&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=011422f0-e50a-4334-9bb5-b01fe7684ef5",
    lang: "en",
    country: "United States"
  },
  {
    id: "Pingviin.ee",
    title: "Pingviin (576p)",
    logo: "https://i.imgur.com/b6xupqO.png",
    stream_url: "https://void.greenhosting.ru/PingviinEE_Mpeg4/index.m3u8",
    lang: "et",
    country: "Estonia"
  },
  {
    id: "Pingviins.lv",
    title: "Pingvīns (576p) [Geo-blocked]",
    logo: "https://i.imgur.com/hfXoJIY.png",
    stream_url: "https://void.greenhosting.ru/PingvinsLV_Mpeg4/video.m3u8",
    lang: "lv",
    country: "Latvia"
  },
  {
    id: "PlutoTVAnimeAccion.us",
    title: "Pluto TV Animé Acción (684p)",
    logo: "https://i.imgur.com/S31utcQ.png",
    stream_url: "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e6a4d875d7ccf0007cc2cf1/master.m3u8?advertisingId=&appName=web&appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&app_name=web&clientDeviceType=0&clientID=6fbead95-26b1-415d-998f-1bdef62d10be&clientModelNumber=na&deviceDNT=false&deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&deviceLat=19.4358&deviceLon=-99.1441&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=88.0.4324.150&marketingRegion=VE&serverSideAds=false&sessionID=b8e5a857-714a-11eb-b532-0242ac110002&sid=b8e5a857-714a-11eb-b532-0242ac110002&userId=",
    lang: "es",
    country: "United States"
  },
  {
    id: "Pro100TV.ru",
    title: "Pro100TV",
    logo: "https://i.imgur.com/YfQEflM.png",
    stream_url: "https://sirius.greenhosting.ru/Pro100tvRu/video.m3u8",
    lang: "ru",
    country: "Russia"
  },
  {
    id: "RetroCrush.us@SD",
    title: "RetroCrush (1080p)",
    logo: "https://i.imgur.com/M40b4YI.png",
    stream_url: "https://cineverse.g-mana.live/media/ac7cff3c-5bc3-4745-ac4d-56aadb586d00/profile/1/profileManifest.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "SouthPark.us@Canada",
    title: "South Park",
    logo: "https://i.imgur.com/qA3KsTh.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62bdb1c5e25122000798ac79/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=2c7c0253-35fc-11ef-a031-2b5d494037a2&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=67f014c4-f66e-4860-a7d5-9e9de1cab501",
    lang: "en",
    country: "Canada"
  },
  {
    id: "SouthPark.us@France",
    title: "South Park",
    logo: "https://i.imgur.com/qA3KsTh.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/618e34ac4a270700077b1f32/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=8e0662e4-1f2c-11ef-86d8-5d587df108c6&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=0d7bbd81-5b0c-45a3-b97c-c2ac8161fb85",
    lang: "fr",
    country: "France"
  },
  {
    id: "SpacetoonArabic.ae",
    title: "Spacetoon Arabic (1080p)",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Spacetoon_logo.png",
    stream_url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-spacetoon/d8382fb9ab4b2307058f12c7ea90db54/index.m3u8",
    lang: "ar",
    country: "United Arab Emirates"
  },
  {
    id: "TigueritoTV.do@HD",
    title: "Tiguerito TV (720p) [Not 24/7]",
    logo: "https://dominicanchannels.com/wp-content/uploads/tigueritos-tv.jpg",
    stream_url: "https://ss2.tvrdomi.com:1936/tigueritostv/tigueritostv/playlist.m3u8",
    lang: "es",
    country: "Dominican Republic"
  },
  {
    id: "ToonamiAftermath.us@East",
    title: "Toonami Aftermath East (480p)",
    logo: "https://i.imgur.com/aSjhZK7.png",
    stream_url: "http://api.toonamiaftermath.com:3000/est/playlist.m3u8",
    lang: "en",
    country: "United States"
  },
  {
    id: "XilamTV.fr",
    title: "XilamTV (1080p)",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_k6spR1AVLZ0ISqrFP-Z9JeBMHPpAc9T-pmFlG6_lSkNw=s160-c-k-c0x00ffffff-no-rj",
    stream_url: "https://xilam-animation-1-fr.samsung.wurl.tv/playlist.m3u8",
    lang: "fr",
    country: "France"
  },
  {
    id: "XtremaCartoons.ar",
    title: "Xtrema Cartoons",
    logo: "https://i.imgur.com/X2d8y4e.png",
    stream_url: "https://stmv6.voxtvhd.com.br/xtremacartoons/xtremacartoons/playlist.m3u8",
    lang: "es",
    country: "Argentina"
  },
  {
    id: "YuGiOh.us@SD",
    title: "Yu-Gi-Oh!",
    logo: "https://i.imgur.com/Tl6aW2u.png",
    stream_url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/642d4493aa2d690008f0a03f/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=1b21d081-4b81-11ef-a8ac-e146e4e7be02&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1ca5a27f-794c-41ee-b51a-6fbe1b093d0b",
    lang: "en",
    country: "United States"
  },
  {
    id: "Multimania.ru",
    title: "Мультимания (576p)",
    logo: "https://i.imgur.com/abh8ZBA.png",
    stream_url: "https://sirius.greenhosting.ru/MultimaniaRu/tracks-v1a1/mono.m3u8",
    lang: "ru",
    country: "Russia"
  },
  {
    id: "Solnce.ru",
    title: "Солнце",
    logo: "https://i.imgur.com/HCefxaK.png",
    stream_url: "http://tv.mediacdn.ru/live/solntse/playlist.m3u8",
    lang: "ru",
    country: "Russia"
  },
  {
    id: "YouManCartoonChannel.cn",
    title: "优漫卡通 (576p)",
    logo: "https://i.imgur.com/GZInf2W.png",
    stream_url: "http://183.207.249.15/PLTV/4/224/3221225933/index.m3u8",
    lang: "zh",
    country: "China"
  }
];

const languageOptions = [
  { code: "ar", name: "Arabic" },
  { code: "de", name: "German" },
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "et", name: "Estonian" },
  { code: "fr", name: "French" },
  { code: "lv", name: "Latvian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "tr", name: "Turkish" },
  { code: "vi", name: "Vietnamese" },
  { code: "zh", name: "Chinese" }
];


const countryOptions = [
  "Argentina",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Costa Rica",
  "Dominican Republic",
  "Estonia",
  "France",
  "Germany",
  "India",
  "Latvia",
  "Mexico",
  "Panama",
  "Portugal",
  "Russia",
  "Spain",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam"
];


// Helper: normalize strings for case-insensitive compare
const norm = (s) => (typeof s === "string" ? s.trim().toLowerCase() : "");

// Helper: parse comma-separated or repeated query params to array of normalized strings
const toList = (param) => {
  if (!param) return [];
  if (Array.isArray(param)) return param.flatMap((p) => String(p).split(",")).map(norm).filter(Boolean);
  return String(param).split(",").map(norm).filter(Boolean);
};

// Main API: supports page, pageSize, language/lang/laguage, and country filters
export const getLiveTvChannels = async (req, res) => {
  try {
    // Query params
    const pageRaw = parseInt(req.query.page, 10);
    const sizeRaw = parseInt(req.query.pageSize || req.query.pagesize, 10);

    // Accept "language", "lang", or the typo "laguage"
    const langList = toList(req.query.language || req.query.lang || req.query.laguage);
    const countryList = toList(req.query.country || req.query.countries);

    // Defaults & guards
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const pageSize = Number.isFinite(sizeRaw) && sizeRaw > 0 ? Math.min(sizeRaw, 100) : 24;

    // Filtering
    const filtered = liveTvChannels.filter((ch) => {
      const matchLang = langList.length ? langList.includes(norm(ch.lang)) : true;
      const matchCountry = countryList.length ? countryList.includes(norm(ch.country)) : true;
      return matchLang && matchCountry;
    });

    // Pagination
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.min(page, totalPages); // clamp page if it's too large
    const start = (safePage - 1) * pageSize;
    const end = start + pageSize;
    const result = filtered.slice(start, end);

    // Respond with useful metadata
    const response = {
      success: true,
      page: safePage,
      pageSize,
      total,
      totalPages,
      hasPrevPage: safePage > 1,
      hasNextPage: safePage < totalPages,
      avalableFIlters:{
        language: languageOptions,   // normalized codes requested
        country: countryOptions,
      },
      appliedFilters: {
        language: langList,   // normalized codes requested
        country: countryList, // normalized country names requested
      },
      result
    };

    return res.json(response);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ success: false, error: "An error occurred" });
  }
};

export default getLiveTvChannels;

/*
Examples:

/api/live?page=1&pageSize=12
/api/live?page=2&pagesize=10&language=en
/api/live?language=en,fr&country=United%20States,France
/api/live?lang=es&country=Mexico
/api/live?laguage=zh  // typo supported

Notes:
- language filter expects ISO codes from your data (en, es, fr, …).
- country filter expects the country names from your data (e.g., "United States", "France").
- Both language and country accept multiple values via comma-separated strings or repeated keys.
- pageSize is capped at 100 to avoid very large responses.
*/
