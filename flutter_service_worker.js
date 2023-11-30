'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6e51fc82fed724c744660bc669b18333",
"assets/AssetManifest.json": "bfb6c64fc5aae64a75d1b8d70fbfa230",
"assets/assets/images/advents_image_1.jpg": "fae7baeb6a64b34419d736b903b7d2e6",
"assets/assets/images/advents_image_10.jpg": "950c96c5b4ec0cbfe1b2b6eddeaed979",
"assets/assets/images/advents_image_11.jpg": "b345bf6e32e12e1ac027eebc7c04bbe9",
"assets/assets/images/advents_image_12.jpg": "df05d388382c64e0ac5dffd5cab05372",
"assets/assets/images/advents_image_13.jpg": "5a5e0c0094aeaeb401d306eb17a5f1bd",
"assets/assets/images/advents_image_14.jpg": "3528b82636fcd4f6de79190de29c848e",
"assets/assets/images/advents_image_15.jpg": "29366f87a949c85426ca5f8eb091f508",
"assets/assets/images/advents_image_16.jpg": "f08e12a7d3089da2799bd7375710263e",
"assets/assets/images/advents_image_17.jpg": "5ba49844edd4b7f1593aef8bcd8141b0",
"assets/assets/images/advents_image_18.jpg": "c6c9c993219eb5530698dfb9dd926d89",
"assets/assets/images/advents_image_19.jpg": "fd01cb58df0cb1bb976e7a5aa9ab5baf",
"assets/assets/images/advents_image_2.jpg": "214d47ae68cc3fec64256a025ddd6a16",
"assets/assets/images/advents_image_20.jpg": "9cd97a3f0252a6b0b25676bc43464f02",
"assets/assets/images/advents_image_21.jpg": "3d8310d329d58d7d3a3f45503f019e68",
"assets/assets/images/advents_image_22.jpg": "b07597cb8e9ef19a116468df2498d1b1",
"assets/assets/images/advents_image_23.jpg": "13172888dbe67a5e54290f8a164a683b",
"assets/assets/images/advents_image_24.jpg": "e118bff0a0ebe93dfa2de5d3d95a570c",
"assets/assets/images/advents_image_3.jpg": "84f17b7728f4a5b967b8a4168c81667d",
"assets/assets/images/advents_image_4.jpg": "328b1f021cd1f81f64a7d46da4a3aa2b",
"assets/assets/images/advents_image_5.jpg": "f21eed08d260d47a55720f2530d0c495",
"assets/assets/images/advents_image_6.jpg": "b296b6a48bb7db880a87bf10ef2cec96",
"assets/assets/images/advents_image_7.jpg": "2e170ae8a1ef967125a52c4e851cb3c0",
"assets/assets/images/advents_image_8.jpg": "15de6166f70ed9284d051ac7a4d360ca",
"assets/assets/images/advents_image_9.jpg": "ed8b321ae0faa1fcb60954d1ee7071fc",
"assets/assets/images/background_image.jpg": "5faa54b367a0ee50d4209422430182d4",
"assets/assets/images/open_door.jpg": "1e062f3e47ae2597c96d8b7619ebab24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a1ab3899be23066cdc69ef670b7a7d3d",
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
"index.html": "41c2eb21b3289adb584fe73ca2363ede",
"/": "41c2eb21b3289adb584fe73ca2363ede",
"main.dart.js": "d49db56f9b0ffa41f82210f83131edc3",
"manifest.json": "04c380253b69bb29da11309faed4228f",
"version.json": "2f07bf105a9c765e446264e8c0045071"};
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
