'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "58b6a7dde2a474a05f93ac6635e10652",
"assets/AssetManifest.json": "368644fb7ad203a248ccf0ba7c0ffeef",
"assets/assets/music/arijit/Darkhast.mp3": "8ac59ed4ee8f06c2972b35f348a027c8",
"assets/assets/music/arijit/Kalank.mp3": "2f8485f60709f9101f07c2c0ceaf1002",
"assets/assets/music/arijit/mila_to_hai_na.mp3": "30ed9693800810d950a8f9bbc5cbbc02",
"assets/assets/music/arijit/Raabta.mp3": "9872625e7e33ead9033acccc47a8ee6d",
"assets/assets/music/arijit/suraj_dooba.mp3": "34d0fbcc119ec2817a0cce26491bb232",
"assets/assets/music/arijit/vo_din_bhi.mp3": "c7253573869cda0ca7852fd00ec9c06c",
"assets/assets/music/armaan/dilmehotum.mp3": "a99063af357ce9165199dbf620f87fdb",
"assets/assets/music/armaan/hawaen.mp3": "e6cdd3a1ccde3f3bd678bbe140c75822",
"assets/assets/music/armaan/humnahi.mp3": "b45aa97475dc568fd1bdb8a234112789",
"assets/assets/music/armaan/humnashe.mp3": "81d16613cc9df55769faf5dd4b5b22c5",
"assets/assets/music/armaan/itnisibaathai.mp3": "0429f7f5963f786eb257ec930456402b",
"assets/assets/music/armaan/sauaasmano.mp3": "f9343f87e3438cd7cfec6c37c201412d",
"assets/assets/music/atif/Dekhte%2520Dekhte.mp3": "33b19c77ff649a521f6363f46b6128d7",
"assets/assets/music/atif/Le%2520Ja%2520Tu%2520Mujhe.mp3": "ff26739eff418c09ee8f76a880d53391",
"assets/assets/music/atif/O_sathi.mp3": "448b95e2c5e8499895d9202b31e86635",
"assets/assets/music/atif/Tera%2520Hone%2520Laga%2520Hoon.mp3": "37e13670c4aec09ca628c45e7c513088",
"assets/assets/music/atif/Tere%2520Bin.mp3": "04d83760e24c524b305cc303fc7ff604",
"assets/assets/music/atif/Toota%2520Jo%2520Kabhi%2520Tara.mp3": "e36f6b47bbef05862b35281f431dd53a",
"assets/assets/music/guru/aajsajeya.mp3": "790d1877cd14bfae9b03b92c599dbbc4",
"assets/assets/music/guru/bolna.mp3": "c3805cf1cc61c5ed9e4585d6012a41dc",
"assets/assets/music/guru/budhusaman.mp3": "a0ca54f5f1264e03932bcc221aeee67f",
"assets/assets/music/guru/dekhlena.mp3": "cdb8ea9a4cfa71ae67ece1fe04a2913d",
"assets/assets/music/guru/Firecracker.mp3": "6cddd0795a08c76a85cac0810b9923c1",
"assets/assets/music/guru/girlineedyou.mp3": "5f3a9586f468e458b8bbfd15e091de7b",
"assets/assets/music/jubin/bahotaae.mp3": "d1fef4b8c74795b26b82174e78f3f3bd",
"assets/assets/music/jubin/diljaniye.mp3": "206425fd80ae786e155c622757fd9b33",
"assets/assets/music/jubin/gamhaiyakhusi.mp3": "f7470e0769f1e6b1671b51a8f966f4b9",
"assets/assets/music/jubin/halkihalkisi.mp3": "11ab58a0daf43199c70faac4214790bd",
"assets/assets/music/jubin/humnavamere.mp3": "2867efa9e9119c30c50a83f4427b6c76",
"assets/assets/music/jubin/tamo.mp3": "370ffb1aae8f2535973c3698496f8632",
"assets/assets/music/justin/baby.mp3": "ec2e7ccd78711c41d95aa68b21d11380",
"assets/assets/music/justin/chorikiya.mp3": "ce27f0893da86d20a9df73da1e012336",
"assets/assets/music/justin/Kabhi%2520Yaadon%2520Mein%2520.mp3": "4987e45054742ba1541f2a6903b696c2",
"assets/assets/music/justin/Kaise%2520Hua%2520-%2520Kabir%2520Singh.mp3": "5c11a79a9f2d56fbbc5e071370828786",
"assets/assets/music/justin/Kaun%2520Tujhe%2520(M.S.%2520Dhoni%2520-%2520The%2520Untold%2520Story)%2520320Kbps.mp3": "894c97e022315f90ecdfb73badc017ca",
"assets/assets/music/justin/TumMile.mp3": "edb25e719c5167c7d53edc1d228b0f04",
"assets/assets/rive/cat.riv": "1ca61c041fe9c8bce7976d1124216e6d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "534c46e7b1ff1a4f2d009bdb890fa4a1",
"assets/images/arijit_singh.png": "2d350a948fc104864848bffccb2b5d17",
"assets/images/armaan_malik.png": "6356c3fd56eca0d0322e8651a98f7474",
"assets/images/atif_asalm.png": "17351774fcaec040debab2e34bbfcf2a",
"assets/images/guru_randhawa.png": "b13f052a94908d7cfb3e17d2601e9caf",
"assets/images/jubin_nautiyal.png": "a065c2220b0f177128012c61a2302a09",
"assets/images/justin_beiber.png": "53089bf182940a4238710ea63c845ef9",
"assets/images/lottie.json": "105df9f4033567553ab23c5be1216e05",
"assets/images/moving_eye.riv": "512f5b963355e397e6d1fc9d724cc3e1",
"assets/images/spotify.png": "2fbcd2797921fafe2960013ab83dcd93",
"assets/NOTICES": "d16776666f3f0b6e349645e9d482df1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd86f3c6942029c8fa7db870fbe42a17",
"/": "cd86f3c6942029c8fa7db870fbe42a17",
"main.dart.js": "d7d6543957ea21b8b5aff9234059ad6c",
"manifest.json": "0863a6e75b1269e6f1088906a1603112",
"version.json": "dc02b4d7e2115543a9e1f34ff2f9690f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
