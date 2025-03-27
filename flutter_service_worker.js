'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2095d51a1ff70a82cad5495bd932aca4",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "807a6b8459f78bfca1d47e10f5d63177",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "23113a82906a2adf7b7c895669850875",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/aa1328129b76f80e05dfe6b1670f746965370d": "a01d259d12f6e1a9ab169ec1d7095e1a",
".git/objects/03/0f5a3109957720127ed321db10e0faa4f7661b": "52f3cdf7ee0e721bf5a94a1ddb091908",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/23997ec9f28e10634bb43072edc3e3718b6d6a": "fed0adfc1ed5c7b79c820cc81ec65494",
".git/objects/67/162f38bf68e3b043cb0860e4ba66170d8f3182": "2a2f1fdd3d76229b61f86436d17cf165",
".git/objects/93/3bf22f4388c89702115c1eeef3ccd0b258828c": "aaaa444529851716be9e72eed8b08b96",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9c/6b13d676327ca0a4dbe0a322685bd79c653d06": "67fb6496e0d356f57001ec2e3de2b5be",
".git/objects/02/d74102af0c9ea5c803d0fdefcc49cee5b7e26a": "e38bbdcbbd920170061e2eeec1383cfa",
".git/objects/b2/b4aa6268ebdda450ba640ddb69fadebcad0330": "5a7d7f5ac910baee77bf2274e2d5cb12",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/4863fb2d7a71ec73df44023a655c8c03db4689": "08f31ecf85f6c75680d5fa76ab90831c",
".git/objects/bb/f53b985bc0008e09d51a93fb3c75bca07713f5": "846090c9d970405bd7df1e10e42a00c3",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/61a2dafa5084d913d49a16f2abda5fd9a2a5d2": "41c76448681ab74e073b105301d61b81",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/29e984895d8ff4442fe7bdce1ed4dc754730ca": "b1752d2154478a6b9d06498cbb941b7d",
".git/objects/bc/1b14a8f513caae4e8d6533c3e98beee9342e75": "c76c6c4efba82056279ab08987416943",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/977ce25629d1d5dad9294f868f8c1c334802e4": "26179eed59808f00c6d39785cd3407bb",
".git/objects/fd/b4d45e6ec1404ca3f9befda26efe62589e5b6d": "f4d67d7fc6a1905b28bc4ab7ba976f00",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/a7090acee52aa36a10fe8ce62f4cae2815bf85": "4245becb18981cf6e02ddcb1f5c71b61",
".git/objects/cf/acc06b7dced32892d0a550890e61ed4669fafb": "e1652796d55a4c4cc472074602f123e6",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/850a1bf1fced9cca51edbf004bf71addf4de61": "88aefb2eac1ae7f5e6f285e0aabf5784",
".git/objects/4e/b879be1a487c2f1d2b5238bc58408c52d1eb59": "f98a4e02a5749bf5c447c4f452c5d3fc",
".git/objects/89/133043c490b39d8ac86731ebc8f4c910e8297a": "34b72a8579eaa034bde6295ba68ec8ee",
".git/objects/45/edda75b9ec56130466f9311fbab5ee425ef452": "c3a70131a1dc2b0ce8833d91db528c59",
".git/objects/1f/0950ea2b98489c3997cdf6341000eae7ec2bad": "cab1744d2b0e760502e4c4b893583575",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/7e/95dc24917320fd4c01ab3d06b87c15736d88a8": "b9421ea14af3ec0b16a872ce7182f59e",
".git/objects/4c/c45ff8d502d2ac11c10b6407f98d29c00be539": "58375e5d1b4e79ea2428f54344779512",
".git/objects/86/96cc569e1cbf15ec9add0c6adeee7e44530668": "2b25cc03f6d6ccaca834b4f96600db1d",
".git/objects/2a/b858874144f4a60204558fd2a753760e9dac61": "48a8b2606cbd03506c8d0b8426fd2ab6",
".git/objects/2a/e639041881cf12889ef5cb13b44a3903e2f861": "745ce5659394c22a48764241dc7c9c2d",
".git/objects/2f/34802468d0812518ab33db0f3b13c18be89f5c": "f5fb9d3e57d4fb71d7b5057d89118fc0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/cc27f541ccb963783bc051fedc18354bc28c56": "43c36830bfee733e4426c2ec29e16833",
".git/objects/6e/e97b889596da4b427f4230fe5ccf1b0a098de7": "215f5cda7eeb0c332acf3e1db32af270",
".git/objects/9a/bca1bcc34cedd5e99874516ab260327e89b114": "e6a13ac42376ebf8acc37cc32af6da95",
".git/objects/36/acdb23a2fefa8231e5d6d5f5f41cad08cd1f88": "e6f3210ff4852c964c37a7e7200f1aa1",
".git/objects/09/1b694ce84937bfd49bd15253cfcfe28412c395": "459ab6f4179f3b07b87f1f05a39e44b6",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/b9e045c55a9809d24fd0980867b3218f130ee3": "f9c0276b63de5eb5a59ba0d839d0764a",
".git/objects/62/3497de60c1675c4944573e1b0da9b2198e0db8": "88a4bb50375793dc24ec3853556d7377",
".git/objects/54/fbb83e8c125be14fde1b07254f5265800aa3e2": "ee0d334ae31999cbb9408851c2c1a0e4",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/3f/348341cb5b76e13dbed0555a58e964d71f8613": "457bf88de0a6a6e3a9d97b25852df5f2",
".git/objects/08/59b1864e6031519321962bf7a024d0308d0ba9": "ae1ce85db664f506e214a4c917fa2a9e",
".git/objects/08/fd48f8a7cde9cea9705d0f39582f783cfc99ee": "f65e1927c852b7ce58a2c8ee882f51ab",
".git/objects/6c/85c8c91ac035746be49db319d57f659e5f8b86": "42f6fcdf71968ccb5753528873e125eb",
".git/objects/97/b0bd5e77caf8b9a748494d0e21f49e9429061c": "b67f43f4740e51dc79e22625eef7a70f",
".git/objects/90/8bd2f2fe1f1036692c74d7d4e9a7aafc7290cc": "10640ee807b4f3bd74975424edf26fcf",
".git/objects/d3/9431563dffbcf15eddf1bbfa3812a6f323d691": "6b1aace06d0e54b117bd02d71ba1a5fd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/af8aea0a2d1a3a7b1c68c5fe2122380dc0ec79": "02da85196996f289bae7fb9f66e96013",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e4ceaf6e6ab6e4d6f9add2c409e65c4722c9ef": "efc3fb3b812271c910fd641f6bbda25b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/f8b49ca56b17413a7f85f92cfe0257a73a8229": "dc4b508a53a600bebf9abb240ada07cf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/ff/79fd27081b234aa2ce8b771c388ff259d736b6": "6d28ae0eaa7f2c3404647a08fc9bcb14",
".git/objects/41/c31990efd0444ba1cc0bb48d009f4f436784c6": "f6eb9e7b978ac7349472073283732744",
".git/objects/77/7fec7b6411f43d4583e95d9be62cfd10af6ff9": "d46c0d0780b2dad2bc7ef96993474f21",
".git/objects/15/536e5c2ad0b18acb44b9d84905706d97e88b39": "3196868d548cbb22291fb137de4a3dbb",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/71/e522c0f4de610c170adbd89b57b90afa42a9fa": "c4075ad8f5e1c304b9480f77c35e3904",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/13/cb975e0a0461178b88ad09fdc85106c3689bf0": "1cd8d07c80bf40642ee5559cf5f0675a",
".git/objects/22/05b1c21ee339cbcac36fc5f2e16be60f9f8b06": "ec68aa7428bd0dfb8137b9653a966e4b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80a2d92f87e792130918c6427d5e06b9",
".git/logs/refs/heads/master": "80a2d92f87e792130918c6427d5e06b9",
".git/logs/refs/remotes/origin/master": "2e6d975ad32845f6dea766058b1b7fc3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e6636ff99cbbd09c4578210a1ad59110",
".git/refs/remotes/origin/master": "e6636ff99cbbd09c4578210a1ad59110",
".git/index": "d12b58a82a92e48d59904f2c6a64c2b7",
".git/COMMIT_EDITMSG": "0db03d1a172272e5cf8dbb42f339dd07",
"assets/AssetManifest.json": "7d354fc77132770591163631b22b74bb",
"assets/NOTICES": "d063f45b4e48a8d82f9135b55e7c235d",
"assets/FontManifest.json": "7957016d0d48c8c99e64a6c4eabedeca",
"assets/AssetManifest.bin.json": "c525ab3e883739d7f400aafac2534ab0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "49c9b41a7ea1e0431d130bad3f3b03e6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e3f470a310071098fcd360dc46f32e94",
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
"assets/assets/images/portfolio_app_cover.png": "e63c3a33b90993a0a8e3eeb0c76a75f0",
"assets/assets/images/ic_linked_in.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/images/ic_linked_in.png": "bdb9aec47c3bd209948da337c180b555",
"assets/assets/images/recipe_ss2.jpeg": "ee9bafbe3e1dc59efffbf7dc0567f154",
"assets/assets/images/ic_leetcode.svg": "7e00565d6248995f0e867a7a15249aef",
"assets/assets/images/galaxy_logo.jpg": "6b04e2885e44462b98a03111b4696f9a",
"assets/assets/images/recipe_ss3.jpeg": "3bd29447b7f0906805f33981182638bb",
"assets/assets/images/ic_github.png": "d599cf56e2ddd61e76574179f8c13973",
"assets/assets/images/me.jpeg": "36342ac37d727a0af4730e8668e50e5b",
"assets/assets/images/recipe_app_cover.png": "082590e195656018d7b8a4a179512af3",
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
