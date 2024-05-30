'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ea25a4ad5dcfdbf9dcef46d00ae69d8",
".git/config": "a8ca9257435e125f4729d4bdf064247e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dd8343d7a0c7e74b5d9900697b9fc65f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee3c877ff4bb3bd751f311f7c30bfa6e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e1f82196207ca21d6890e8bfc5e0641",
".git/logs/refs/heads/main": "0f8446b2ad5a233492349323866340c8",
".git/logs/refs/heads/master": "e1db4e1687016d0f3575a071d743c413",
".git/logs/refs/remotes/origin/main": "53251dd1aad4cd1d84f603dd626363cc",
".git/objects/03/4d23ff7d6d4370531d36816de1b62cc5f6d301": "a8d518f70323146310b1010b38720649",
".git/objects/04/495f19c62aba421d21ed985b1e540adc60fdb8": "e9a1fdea0819b440449ade74c44f30dc",
".git/objects/05/0b74e14fd19238b4e9eb60cc28e4cf656a4f60": "6574cdd147196317792e645b422ba4be",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/3ad9c5c0260623d626a2dad4d64a86b2e4d4b0": "48412ccf5993ce28321274e400c9f225",
".git/objects/14/a5186205f26de491e857192a5ea884f55bf349": "a8a804b2ac2f522a79a4b96f85d1f104",
".git/objects/15/d88860b51d938dec0ab622e876f9035c6294f1": "0d3145a9177096bbffa5028334706f6d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/33/1458b04f4918eacfb27331eb249878c56b1bb5": "64fef793c755acf008874d1f91ff3ff3",
".git/objects/34/15d7b24f03c0efeef0514ee423216894d765bc": "38942f0a0903663d281ce05cb9aa6060",
".git/objects/35/19167649d7f532e22e8f27c12226e777b1292e": "48a26473921274b30ac1835ccd542487",
".git/objects/36/5073b6fc294fffde9101592ebe150d985656e4": "4a901bfd0a93628484cee8829a52649d",
".git/objects/3b/f3ab61e88284361c69984f1f6dc765a5386289": "f7afef48c97d7e299d2ea4cfb770792f",
".git/objects/40/43f532f49f5186d98c2b85bd09facedb76109c": "1a2d2ac42d31bb65b187f21f69c89ea9",
".git/objects/43/60c74192b413b3ab9ae6be0dc96d6728a848cd": "7d449cb2939705b58a5a27c81cce7105",
".git/objects/43/6c366aad907a0d79e00ed34ed3b68c52d818ce": "51f961139fed9aaaf519876685d44b67",
".git/objects/44/5727a188efc29f58c21cd6436f76bb35015006": "cb28558ad518f5ebef29aaa65ea7d51f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/3c594683eb20e59f09092dee36a48835c2230c": "cebf061d7435621d3189cfc5d8f88a4e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/4f15c09b3f3e012f83e4c8a03bd551a12fe964": "f8707c08ae8c39f87a397fa706f72a17",
".git/objects/5b/916ddebd9fba6539906d22133c9ed8717a025b": "4884c724bc4bf299d7fd7379ae1a8537",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/4325edb9a1ced3bc550be533b1c5649ca0d5a4": "d67245ae99d4d81a012eea9efc116f59",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/27ae72543f25c6385c3032dbb1cf875a5f3cab": "a4a624b6e00dc343887cfac025ca9945",
".git/objects/74/4966cccedfc048e97ff1ec632d49822fa15b5e": "7c5315d227603f8eaa9bc01f314783ee",
".git/objects/80/45121670f9180c461df470f6a67cc6c817d3a2": "1ca04bc0bb93d3ac79c3f0d7a5d3292f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/baf936c1e9e69cd962da3cdc8c7d2bcff983fb": "d39d14350674b3a5e5281c6d668f8640",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ebb9c202cc699979adc3123613fdaaa76fcab4": "53576b6dd4abcdf3820c9cc29bebb90c",
".git/objects/8c/f3778b38da9b517310587b0dc53f3c81c90485": "23b329f637120e3155becd8a931b66b9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/f5f3fa26be8c888e3cccd589a6dd8e13da99d1": "191e9c17cdaa80bbd5ac4a12fbada9b2",
".git/objects/9d/b7c67d531b666a6b60d33c5591c608c0fa1bec": "370e6e12cb99529408d22eaa87c97e3b",
".git/objects/a2/085011b5bae316f137f2ea4759d48f1129c857": "bf67f97f9ff24dd733fb74bce5685f79",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a3/3494eccd581f78adea0582b51a9af2698f172c": "ca826f51719ee93b85105c0ecd1ee2fd",
".git/objects/a3/420bbc8e2e3b9c74e3e6bb39173de706d65d4a": "7c196941253688a09c38dc9389e1ce67",
".git/objects/aa/4840110d4d012d216e0d1d0d5479ff24035221": "9acfdc1036b99ea7f5a5b0c7825aa8ad",
".git/objects/ad/43d688e43bd4af90188dcee999c95136fab6dd": "a610de8ba43500991dceca23a0a46393",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/3deb67b9fb5fbf2b066b1711e2f04fa2438856": "9e7f36968c2d990a1013b1a685ea73b4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/9dff43edff94a7d2e7fc37883dabfbfeada861": "089df4f91ece1b982431d764af779a8a",
".git/objects/be/208193caffe15c51499a679d92a2d8072af3cb": "02e62a8c2369cab67f232f7c3f1144c7",
".git/objects/c4/b30618ee8fd5d6795966c7c16e1893a79e289e": "55226dcc75d8cd97ca460e2b751855c0",
".git/objects/c5/3d8bb41ca648135c1033a06216e8abcfe74374": "4f80bdd7652baa4b5d74f1b26435da07",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/1c6586c9671e024ec8a7d05f53c48f6808b7e3": "1f01e2a853b887171066675fcc809dda",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/45c85a67424c6cd10413a47190f1b243cf9cba": "821e2087d57fc26898c9be37d04e74b2",
".git/objects/d2/aad3f28651c4dfad8323f2ceb8e998732b49ca": "4fcdefa4c1c11ddf405b7a1c012a0386",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/49389bac2659e4358a390f735524ddf0a84ae6": "2e14ecb135dea5675cc2cfe7148f421e",
".git/objects/e1/7bc611bad4ac231172746389f685afb30028b3": "bf753df5be94f5f0e39d189f7b972f5a",
".git/objects/e7/fd4957b6f5a926473d82ab89372580bcd87d0d": "d0da5bed0dac56284e78c5d02e58d9fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/015775320d0a25a5f3b897f72dd312d85323ac": "1fb9ba2549ea30f43d4f0945e48b5221",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/a066cc3b7368dd5f67f07842f3739ea1d120cb": "9792663c4e5f842d91d1db26695bf626",
".git/objects/f5/d2e69239f027aa34a2d36bcbc1d71d2cbbe0c1": "141e3e5a3f0e812c6b39293a682fe025",
".git/objects/f9/c648e4acce3925e1f81d28e07db61c108ca1ca": "473ed9ea6c185d1175ec125a42eaa32e",
".git/ORIG_HEAD": "0e5df7892722421ca808c9023a7f79d9",
".git/refs/heads/main": "628acd916e47a313cb1aeb95ddb9a9b3",
".git/refs/heads/master": "5be9a8ba2177fb10dd0cae8e085fa711",
".git/refs/remotes/origin/main": "628acd916e47a313cb1aeb95ddb9a9b3",
"assets/AssetManifest.bin": "270768c4e737c15c9ddcf14704fbe311",
"assets/AssetManifest.bin.json": "6bb5e5e8f7d529e46da06f55536f4f36",
"assets/AssetManifest.json": "ad41485a32519aa6ee67e756ced0fe6e",
"assets/audio/click.mp3": "307aa3a1cdcbedfb886d4f0683ac230c",
"assets/audio/click_sound.wav": "89d7d084cbabf3a64285b29b2c840ddc",
"assets/audio/mouse_click.wav": "fe3cf20a961c12fa92c76ea0687a3b39",
"assets/FontManifest.json": "66adcb444204369f19c3d4b493730ae4",
"assets/fonts/DSMarkerFelt.ttf": "7c57d888eccd037559fe637b107e10b2",
"assets/fonts/MaterialIcons-Regular.otf": "080835486f934240cc9aacdfc3ced717",
"assets/fonts/Play-Regular.ttf": "a83df317dd89c7dd5388a152a26b2236",
"assets/images/bg.jpg": "b8e272869e37b48b558ca7da06866671",
"assets/images/bg_cover.jpg": "734b8644e8b16ab3ddc5a7ee45539e38",
"assets/images/bingo.png": "208b6e0b7dfb456b31f4bdd9eb6418e1",
"assets/images/logo.jpeg": "e2917c30b4b936e5b455f10bd261885d",
"assets/images/welcome_page.jpg": "223aa46b69d9d9ecddbef08cc8ec0818",
"assets/NOTICES": "095003f86deb2291769480fc5df51083",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1a2a6e6e2048bd2f591e1a2131919683",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7887910248679087289a37af85bb746",
"/": "c7887910248679087289a37af85bb746",
"main.dart.js": "c81a567776eee498639043b219d7ef49",
"manifest.json": "a2ff543fce50a31efd3a4b4d177d11f6",
"README.md": "b20358f262ce1cce11618e8143ecbd87",
"version.json": "04ae50f054e1cb35399813b51274d334"};
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
