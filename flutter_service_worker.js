'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2d7a13904784a3576c8a9fcd2624390b",
".git/config": "d3a1cfd32a75a3d1576043e852fbdc7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d58c4149e7e96ac4eba38b2532d879a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ca69f94c37ab120f4fa6d772ebc64730",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c89ed4be8ee2d7a85190a43081d378db",
".git/logs/refs/heads/main": "e2351c64ec0b26e07991037e2adad313",
".git/logs/refs/remotes/origin/main": "ca8c8021eaba4421614636bdc1e22459",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/dc1ece3ed58e8f8864cbdff40c5733a918d417": "8a226177a5455504c629bcb5794e202b",
".git/objects/03/6e2f844b237ed20fdb5e740512593517e69dd6": "f1a50e277d27912294f2eeee6cdb9d48",
".git/objects/07/a789be43c567a6e85d25e8c37cdf4d63fb817a": "453df908a078e8b8f110e77b63c92ebb",
".git/objects/09/109904ac56e9cc55af1a6f8fd1f76a1e90bb05": "3606cf2fb47d9713307693bd59a6154b",
".git/objects/09/ae5cc196153adae0040cf4a6bebb031f0f10cf": "272f8cee2f0e52c61ec3ca8311533936",
".git/objects/0e/4e06b3ca631d06049f22cae8966cdb88e3fb49": "5c048f0f56f9d2746a729fd86b91e93c",
".git/objects/1d/365a3d292952117edd829c75865c3748107b59": "0e0043babfde8ed3a23d4c5c7e5c5ba0",
".git/objects/21/c318078720c21eec83beb4452d46642f13ad85": "82d5095958287b6eab8ed1b8e3e8b12b",
".git/objects/22/aa7dbd5c5677b9a0b8ac2867508cbf5e34c487": "2fcb9826f54aca10d3d50025330fca88",
".git/objects/27/932cc8f08e4cf13b7b4a42de1dd4093d62c1a5": "f5ca83bbcc339b1d9481c5b3a9d710e2",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/911dda3dd3852d0650d21f1f3dacda41a5ba5e": "58027a1d8e507c6a95afb4fbab97ce16",
".git/objects/3e/f29efd15e5d163a3decee7c65abf625729439f": "04888fdc7fce0295526bc67773ba9954",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c69c1ddc5778ceefcce866a5629c8e3256c822": "b79841fd19eb1bf43d64ce48004096d7",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4b/8f25fc5d058ef5610b763b056a4f63df6c438a": "f91fce6c9ec0c58d9567209b6dcd9c8b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/7a835c02bd7e13d3a386eaa61f6159b189a72d": "93a5ccab58e7923ae7c2de51ee96c972",
".git/objects/57/c346d9330ddffceb1a4ad7758d2b78d3cf83e4": "fa3f092289863601d84ba6abe5b74e73",
".git/objects/5c/5c365599748425e72cee474bafc10530738b5e": "2e0253920eae4b100f2c2cdbb1677a5d",
".git/objects/6d/e91641229e27bee206fdef0895ecdf3276a52f": "ef6ba2b083884d2c6b56e10d281c3e68",
".git/objects/6f/78924cf503d9100e2335bb6252afb552c3cd36": "022425484fc9b078a274eaf6f73c310e",
".git/objects/73/fec56da5d4152e02998cd910216657a7bbb7b2": "f9562547fc381a900b551336261b10f3",
".git/objects/76/3262cf4ce07840725c3dcd6f4ecd1b72a1559c": "5ebd6eb8fbc3b5ac94c184e9c7ffe8ef",
".git/objects/81/3e251ca8198ee97c03995025c7c8105f6ba409": "865306489242a58269adce1cf986e7cc",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/87/4c39eb79ff41aef1bde2024727e073eb0550f1": "520ffb5b7a5a63a0e17ce3e388d85aca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/21cad0f3cca3a91e5783d1b96732ff4adb2694": "f432b1109d920c2e0128c7b811d2a683",
".git/objects/97/eb03b02d13e8c47a76abbd23f9b042227a4e85": "5f5374d3b2aa20eb0cd082dd779e92c1",
".git/objects/9c/f79cb75123ccba640740a53add4640c524feb3": "95a0c05404a88bfa9422fb2efcd446e1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b5/472fb7a83f372528664356fc1390bf2fc35974": "22e1a5da632cbb472befe75ec1da7ab2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/46706e382feed39c3489d90811607df0269a60": "e3c2976e6e49d23d9ec3cb113da113ea",
".git/objects/c2/61b02b6a6b384770967afb3716d53c22cf018a": "b7682b5c7d38423252af2869585a188e",
".git/objects/c2/debe2529965d5dac50c155b220d68b21a5cb14": "d078ee47c9ad09248eac4b11d2f5bef2",
".git/objects/c6/2fa228ce08f903fc5706f8921ba4e473e774ef": "60fea322bc9f5d627f48699a074622c1",
".git/objects/cd/815c542235fd4eb44d5de7d73a67a875370075": "7522eb9362ec9aeafd5d39d5bb329a0d",
".git/objects/cf/dc0f29afa081469048b48fdf3ab63ae7e3e891": "b2d85cd37ccf54fdd826fa9ffe8c62bf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/60ac648d7c37cd990f0cc1803cca42a06d6d12": "9847be6de6257b787d1596b140ecb34f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/20340f163fd886a6ac6efbdd35b29558904961": "983720505df34aaf08b4693ba1ebf9e4",
".git/objects/de/756f8938f929517f75d696ff0e2fe5d9ff3a06": "37dee3387daddca703aada1cec605295",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/35e30b8019d907f13f624a5391146953f20e9f": "42f92d785abbecf00e16e1d3413027d1",
".git/objects/f8/74e0ac9a271788bfd4f0cd9bae2d7d8b1650d3": "12df041552dddface0535640ee6ad82f",
".git/objects/f8/8a59f66e04b1f5213d6936c869c99cab3a7877": "12dedfab58b5e15c062c7eebcd156607",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "1466fe4efa6bdf196d13e885361ebbf4",
".git/refs/remotes/origin/main": "1466fe4efa6bdf196d13e885361ebbf4",
"assets/AssetManifest.bin": "6e51fc82fed724c744660bc669b18333",
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
"index.html": "652f79c26a33d64d41d94aa1d41198b6",
"/": "652f79c26a33d64d41d94aa1d41198b6",
"main.dart.js": "310c840e69cfa5caa8d60125db48ff17",
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
