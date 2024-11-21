'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2a725a2a3dfe4b80e07a19bbb3706c5b",
".git/config": "d3a1cfd32a75a3d1576043e852fbdc7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b0ea11f36696b59196aaeb8e363a3cb8",
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
".git/index": "88c63af741c5be87905254c3c9451f2a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f014a680b00b5132534476b563fd90e",
".git/logs/refs/heads/main": "1c54f9152f6417db36c30b1a3e044669",
".git/logs/refs/remotes/origin/main": "ccb4bb19a3b0ebc9accfd9dab5cd33d2",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/dc1ece3ed58e8f8864cbdff40c5733a918d417": "8a226177a5455504c629bcb5794e202b",
".git/objects/03/6e2f844b237ed20fdb5e740512593517e69dd6": "f1a50e277d27912294f2eeee6cdb9d48",
".git/objects/07/a789be43c567a6e85d25e8c37cdf4d63fb817a": "453df908a078e8b8f110e77b63c92ebb",
".git/objects/08/6370f3aac7ac459d1b2b21f2a6b08fc7fbeb47": "16b9f0ff2347da0d274f03abf0f55989",
".git/objects/09/109904ac56e9cc55af1a6f8fd1f76a1e90bb05": "3606cf2fb47d9713307693bd59a6154b",
".git/objects/09/7f0a8977a299c7974bd0b8344de1161ee6c76a": "114c2e54d8644d9a954332ed2780e5d1",
".git/objects/09/ae5cc196153adae0040cf4a6bebb031f0f10cf": "272f8cee2f0e52c61ec3ca8311533936",
".git/objects/0e/4e06b3ca631d06049f22cae8966cdb88e3fb49": "5c048f0f56f9d2746a729fd86b91e93c",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1c/a8e11521bbf22e40139fcbd641a6aaeaf51ce8": "24265f0d6447480026875acbee1e5e5a",
".git/objects/1d/365a3d292952117edd829c75865c3748107b59": "0e0043babfde8ed3a23d4c5c7e5c5ba0",
".git/objects/1d/579d79c40391cf64db1744e5cb12b53c5adcd9": "7bc159fc6a20427108c6a34fecdc103d",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/8f8e8ef871d48c5db857b483c3227b56e7ec2a": "854b8f00e35bce8f18875a1586327021",
".git/objects/1f/cb7ea00aaf71ca4e9952728a20fc2ee297ded8": "f9878a6e42d605576a12553bfe20de2f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/96fd6841af480b26cebc9015360b55ddecfe12": "d68dfb34f9d2d6309cf623ae63e0c855",
".git/objects/21/c318078720c21eec83beb4452d46642f13ad85": "82d5095958287b6eab8ed1b8e3e8b12b",
".git/objects/22/aa7dbd5c5677b9a0b8ac2867508cbf5e34c487": "2fcb9826f54aca10d3d50025330fca88",
".git/objects/22/beff877380950e3c8e9455cbfbb251678da408": "617d19af5e1bdb88b78570cde6be6c83",
".git/objects/25/4b42ca20b0b3889dbe1aeeb012c945a22c4af2": "018c22e7a670b2ee0d583ce4cc388f75",
".git/objects/26/55c3abc493452c14fcc6029d0095f6fa5c2944": "1c7e0df5d8388a46fff6c5176f62c596",
".git/objects/27/932cc8f08e4cf13b7b4a42de1dd4093d62c1a5": "f5ca83bbcc339b1d9481c5b3a9d710e2",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/879a7bfcc97436a222a277065fff2f96d54a67": "921c78a77e1ee8795f1d452f4444d358",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/911dda3dd3852d0650d21f1f3dacda41a5ba5e": "58027a1d8e507c6a95afb4fbab97ce16",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/f29efd15e5d163a3decee7c65abf625729439f": "04888fdc7fce0295526bc67773ba9954",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c69c1ddc5778ceefcce866a5629c8e3256c822": "b79841fd19eb1bf43d64ce48004096d7",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4b/8f25fc5d058ef5610b763b056a4f63df6c438a": "f91fce6c9ec0c58d9567209b6dcd9c8b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/3eb8f29070abb84a8e0a8fe33b2356a4635861": "baed41e704a3d7a17dd64bffba45ac53",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/7c0c52ba1a695040ff7a61404b92d7573148ab": "fa28c968312763d6240f8f8579ab90bb",
".git/objects/57/7a835c02bd7e13d3a386eaa61f6159b189a72d": "93a5ccab58e7923ae7c2de51ee96c972",
".git/objects/57/c346d9330ddffceb1a4ad7758d2b78d3cf83e4": "fa3f092289863601d84ba6abe5b74e73",
".git/objects/5c/5c365599748425e72cee474bafc10530738b5e": "2e0253920eae4b100f2c2cdbb1677a5d",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/9783abfb7ae08155c9eec4dcc1ba90b0852871": "6a88ef21d115cd7f7f398ba10a1beded",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/e91641229e27bee206fdef0895ecdf3276a52f": "ef6ba2b083884d2c6b56e10d281c3e68",
".git/objects/6f/78924cf503d9100e2335bb6252afb552c3cd36": "022425484fc9b078a274eaf6f73c310e",
".git/objects/73/fec56da5d4152e02998cd910216657a7bbb7b2": "f9562547fc381a900b551336261b10f3",
".git/objects/76/3262cf4ce07840725c3dcd6f4ecd1b72a1559c": "5ebd6eb8fbc3b5ac94c184e9c7ffe8ef",
".git/objects/78/eb6db6ecfcb2cc57e60262bd3857d4f1fbf97d": "1729e4701b2cb2d3660cb01c74529e20",
".git/objects/7b/4b55c6b06fe24c066a6ba3422d3f818b6612b2": "f7f83944498ba8904ef8e223842e709c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/f5cc19e36648ecdbd74bba8381a97d0c548905": "fae8a16081d1d8bd4cb1385fde9f1782",
".git/objects/81/3e251ca8198ee97c03995025c7c8105f6ba409": "865306489242a58269adce1cf986e7cc",
".git/objects/82/1df944aac115626edefcbd1ac7eb6b3b26cb7b": "7cd31a9667a6b15015a03f06826eeaad",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/87/4c39eb79ff41aef1bde2024727e073eb0550f1": "520ffb5b7a5a63a0e17ce3e388d85aca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/2c01c643cddf6b74bbe3986524abbf67001127": "865e25c20c67b88babbede0ca8f040d0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/21cad0f3cca3a91e5783d1b96732ff4adb2694": "f432b1109d920c2e0128c7b811d2a683",
".git/objects/97/eb03b02d13e8c47a76abbd23f9b042227a4e85": "5f5374d3b2aa20eb0cd082dd779e92c1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/1642660756d58ee18a3ce40a1902b2a6648f2c": "1f27925c3490f2e8dbd4bca227ac86bf",
".git/objects/9c/f79cb75123ccba640740a53add4640c524feb3": "95a0c05404a88bfa9422fb2efcd446e1",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/a3a9ad5ee6862f14ba1499255fdf1a55f5dc38": "7ac29cee7617e761326df9d0698527c9",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a6/428e825d3370af3f4db3dbcaef83dd5fdadf12": "24004552f3669ac698decedbe618857e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/af/f44f93a72832b5ecd367208ee3a3629c569bb3": "37b91db409452ee2e77810b11029c1f6",
".git/objects/b5/472fb7a83f372528664356fc1390bf2fc35974": "22e1a5da632cbb472befe75ec1da7ab2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/46706e382feed39c3489d90811607df0269a60": "e3c2976e6e49d23d9ec3cb113da113ea",
".git/objects/bd/871310cfc4b1243ec90fd93b2f08b08c834a42": "116999a33423042369b490fe4fb64ec5",
".git/objects/be/20d27f0460c486f5bf2a7122427eb8eb1210b8": "b5b610adf69f6260aa90749b449c9e5d",
".git/objects/c2/61b02b6a6b384770967afb3716d53c22cf018a": "b7682b5c7d38423252af2869585a188e",
".git/objects/c2/ca5571b9559c3f7302e1ff9e4f361854a49c83": "abd8745eb3f9769124fee099852b5dbf",
".git/objects/c2/debe2529965d5dac50c155b220d68b21a5cb14": "d078ee47c9ad09248eac4b11d2f5bef2",
".git/objects/c6/2fa228ce08f903fc5706f8921ba4e473e774ef": "60fea322bc9f5d627f48699a074622c1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/815c542235fd4eb44d5de7d73a67a875370075": "7522eb9362ec9aeafd5d39d5bb329a0d",
".git/objects/cf/dc0f29afa081469048b48fdf3ab63ae7e3e891": "b2d85cd37ccf54fdd826fa9ffe8c62bf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/60ac648d7c37cd990f0cc1803cca42a06d6d12": "9847be6de6257b787d1596b140ecb34f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c7a65c80178f0950c2d7e6dea46032f4e11b98": "8fa0eed606c7f92185205a8d3407d0da",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/20340f163fd886a6ac6efbdd35b29558904961": "983720505df34aaf08b4693ba1ebf9e4",
".git/objects/de/322c59894e5d301fb49ecb4ab6d47e1d14a344": "e945a3e0d9b5c3cece2020189d533c18",
".git/objects/de/756f8938f929517f75d696ff0e2fe5d9ff3a06": "37dee3387daddca703aada1cec605295",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/6aeda156569042d98dc25392c215ca1be46f5f": "f0bbc1f00ffc90f4adf4fb053f04963d",
".git/objects/e4/be0fdd4b4a0e0eddbb9494f7cd37d953eb73b3": "af2b6f325c672cd1fc232c1aa44b675d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/35e30b8019d907f13f624a5391146953f20e9f": "42f92d785abbecf00e16e1d3413027d1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/322aeb36193a5552bcd6169506a26b517325ee": "56b24eff4291a93884d301524d28ff01",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f8/74e0ac9a271788bfd4f0cd9bae2d7d8b1650d3": "12df041552dddface0535640ee6ad82f",
".git/objects/f8/8a59f66e04b1f5213d6936c869c99cab3a7877": "12dedfab58b5e15c062c7eebcd156607",
".git/objects/f9/31c1c9f41a015045961d580424781df3f21bdf": "98bf869283919e8db1f75c0b92447310",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/ORIG_HEAD": "735bbc5dbe7b9834ea7eaf884ec9bfd8",
".git/refs/heads/main": "735bbc5dbe7b9834ea7eaf884ec9bfd8",
".git/refs/remotes/origin/main": "735bbc5dbe7b9834ea7eaf884ec9bfd8",
"assets/AssetManifest.bin": "ab174192caf94c702ff8245cf79c0d3a",
"assets/AssetManifest.bin.json": "da8502c575c4f995824bcac4d54efc69",
"assets/AssetManifest.json": "af41c79daaf2abd99a41728fbfe3f1d8",
"assets/assets/images/Geschenk.jpg": "a9af03c17a7d1342a04bff3ee9d06c05",
"assets/assets/images/Scooter_luki.png": "e22908f8ad0e66c57440558100e7aa90",
"assets/assets/music/Scooter.mp3": "c6090987a72197167adc0a07a21ed56a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "aa0fb4d9040045b1123eefc4fb642d50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "c8e7aa09bf7d9ee0471c04b162cfb236",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92027633dedc3bece3550b3d0a0a5d6c",
"/": "92027633dedc3bece3550b3d0a0a5d6c",
"main.dart.js": "df7a2e75ac9dac06314796473780b49c",
"main.dart.mjs": "2a3132216ae7b34f2f6de92ed392533d",
"main.dart.wasm": "b0e5e8da704e1b0821384b6d3943aca3",
"manifest.json": "04c380253b69bb29da11309faed4228f",
"version.json": "2f07bf105a9c765e446264e8c0045071"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
