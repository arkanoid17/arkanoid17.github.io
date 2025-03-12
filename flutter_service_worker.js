'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "357b57e8a08e2287bb4cfc9c12c3b30c",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "64e23f58945a7a8b1fa2e018134c28c6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "7b02d7d5808732fa98deea3f4454ac74",
"assets/NOTICES": "cbe4d206384425f33142fb91ccfbbba8",
"assets/FontManifest.json": "7957016d0d48c8c99e64a6c4eabedeca",
"assets/AssetManifest.bin.json": "8bf0b51ed4dfd7f20f452a5d60368c30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "49c9b41a7ea1e0431d130bad3f3b03e6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6471b17ec0b1debeb2d4ffd1373793fa",
"assets/fonts/MaterialIcons-Regular.otf": "b8e56fa08d0bfddde402a7c1ad96ef56",
"assets/assets/images/myschoolap.png": "cdf194fb5dba37e1d9f50ca5e9bfec30",
"assets/assets/images/recipe_ss4.jpeg": "0acff290b2fb4dfbc9320a00037f1d2d",
"assets/assets/images/portfolio-5.png": "f7abd2621f9f24fd37f993f55a26b3b2",
"assets/assets/images/portfolio-4.png": "062334e7bd80060b2978f40a8cd9c6d4",
"assets/assets/images/portfolio-1.png": "c1ef0b42b87002774fb3c1906b967baa",
"assets/assets/images/recipe_ss5.jpeg": "1b0d36a60d65b544f4de49a2c5aab356",
"assets/assets/images/vajra_logo.jpg": "123ca45d87dc6cdc60a5b7b8f8103a3d",
"assets/assets/images/ic_recipe.png": "e0f51129a9f551a36cd1bf375d14531e",
"assets/assets/images/portfolio-3.png": "b7ed8df2f4f7569c012435c0b6929753",
"assets/assets/images/portfolio-2.png": "c971144295dd305cfe5ea02c0419f54b",
"assets/assets/images/ic_cloudedz.jpeg": "c33d8244fd2a1fde74c34f81be9e77e2",
"assets/assets/images/ic_linked_in.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/images/recipe_ss2.jpeg": "ee9bafbe3e1dc59efffbf7dc0567f154",
"assets/assets/images/ic_leetcode.svg": "7e00565d6248995f0e867a7a15249aef",
"assets/assets/images/galaxy_logo.jpg": "6b04e2885e44462b98a03111b4696f9a",
"assets/assets/images/recipe_ss3.jpeg": "3bd29447b7f0906805f33981182638bb",
"assets/assets/images/me.jpeg": "36342ac37d727a0af4730e8668e50e5b",
"assets/assets/images/recipe_ss1.jpeg": "1f4573ba30bdc090b4ab2fc7e13bc9b4",
"assets/assets/images/ic_neevan.jpeg": "654508b87d1017db88cd467c6ee0be9e",
"assets/assets/images/ic_email.svg": "f84dc1983c6167a84ab8faf32c850e40",
"assets/assets/images/thriwin_logo.jpeg": "e03df9ade1e3363218f54aa5fd147ecf",
"assets/assets/images/ic_gmail.svg": "48aa0a2253e3a4ca865eda9e4a67b56e",
"assets/assets/images/recipe_ss6.jpeg": "3632931fba39c90b136791d693d9c46c",
"assets/assets/images/ic_github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/images/ic_github_bw.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "1e6f2d32ab9876b49936181f9c0b8725",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
