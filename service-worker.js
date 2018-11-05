/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["10336297/index.html","18afe76108a0c00de4209de7f4eb271f"],["1076b80c/index.html","3d76a858ed18ad89edcf9fd70e0e8d10"],["10a23843/index.html","515d32582065884d1a8c3d01587e1daa"],["10f322b7/index.html","03240ed315ea90958c2e2fc04b843068"],["1109bacf/index.html","1e58f88e6a667c242bd9764edde58e6e"],["12fb71da/index.html","9898989a2e41af32017929c4711675f3"],["15885f20/index.html","d8c8f3afac5531e6b8840498351dac5f"],["15c1232b/index.html","0cd6778ff8c93bc1f037a0024eeee267"],["16236ee/index.html","628119abd15bf2edd537ce0f176ffcb6"],["163226ed/index.html","ad8f6e82f60e2eda52e3a73c3ebb8a13"],["18f146f5/index.html","6fee3958f5f6f81edf78ad45cdbc0040"],["19356a39/index.html","fffd57cf192badfc9a5e4ca011c9978e"],["1d6b220a/index.html","6b44d0d51101a6841d09aa27c495d1cc"],["1f726e05/index.html","f5693aeec1b4b83df24f31ef60baeffc"],["205f0ecd/index.html","3c94a4ad7b71c755d4f228bd6e4ff455"],["216acbe1/index.html","baf34b5850298e3db7830a4a7acc78e5"],["223d29ea/index.html","ca2b175d29faeaf68dbbf4d1b183285f"],["22830a9e/index.html","3c218a6d5c1a06879801b82a536e843f"],["23c9f6c3/index.html","c72b9761e27e05cfe1f849107e62285b"],["276c2267/index.html","95586203bdd579b9defa6c3d3c0e6180"],["276c371d/index.html","bbc067089d3004b840b8a3849bc349c2"],["29b25bed/index.html","7bcb4c109fea9e8859dbfa676bff80a1"],["2d3ae01/index.html","0be879f1980a0de66d706b9af4447699"],["2d58815c/index.html","6f657d4e7d00ff549249e0be0a04055f"],["2e9cbb0/index.html","e439aa0cb0421e178e2c11613dc7cd6e"],["304f1fc6/index.html","e4ef5ed62a5206fccf2369a79a8f1d98"],["33eb241b/index.html","7c872a190110abe0e90e1bc8ce3f93a3"],["340b38ab/index.html","4fb0b463795e2e728cf809edde3fdd28"],["34784cdc/index.html","c62c08d94b53666cc0c9314a6f0a0cb9"],["34822d81/index.html","a2717b4d02c00712b941bff07d17cf6e"],["34ddef5a/index.html","1e6818a50dc5baf50fc58bb45b0586dd"],["34f920df/index.html","4415be461215243f719173d9e81467a5"],["3697a1c/index.html","0f747414110339d5acaeeb77550e397f"],["37192e8b/index.html","34625fd5fd974d8677bedf0faf1e10f1"],["37630519/index.html","59f0c19e240d8207abda419b3c433b34"],["3a23cc5c/index.html","6a97a0d03c66f71f4244f51dd2f47ac5"],["3c67f84b/index.html","9acf75a25fcf8d95370e81b4d6f43be8"],["3ca6f02/index.html","7043fa70a4d69f725c40064b216c768c"],["3d8d44b2/index.html","2e34c1727994dcad41584cc22e68fbe3"],["3fb087ea/index.html","80ea3030b404504f5b47f581999f63b7"],["404/index.html","b052a947fdccaacc6bea6638911dddf1"],["40687d49/index.html","be6234491c5c3d7de7b8a814a1f3d746"],["40d6aa63/index.html","b9cda9ae4915114a03afbde6bf2542ee"],["40f7970d/index.html","2854efaa8e3d0ae4f22c1255aff9a00a"],["41d56d9c/index.html","f9b043685fac197372d9aa623f16aec2"],["41f5723f/index.html","2f8b0260720965dc93c9a8c4535eecc5"],["420f3cff/index.html","1c495e009ac18dd89a330122d398443b"],["42b4455d/index.html","a728e2525dcac7db31e43e3c0f9fe89f"],["42c39770/index.html","a9f7ed760bc6b34dcc5707e273f15048"],["438d787/index.html","6af49050506235725dfaac88659bd5fd"],["455762c8/index.html","1b7b55a9e93f4bbd61405a19864618b7"],["47a64668/index.html","4a4045596249b4749b49d46d0ef32e8c"],["4a010063/index.html","071973248b02effe56e63d0490e47974"],["4b67d3c8/index.html","f94630ed0dfd9344513e491ff9e76c5a"],["50df051/index.html","f6aa2b4df5a593e398da8431cca307e4"],["52580325/index.html","bf29fd456e64e9cc4e5c59fe0b83a7fc"],["52b56662/index.html","9e427c1927ee302b40f92321839a4cbe"],["52e47f72/index.html","fb171d095b9f40d27200e160ca55cf66"],["531fe264/index.html","65ed81151cf7be381ce177fa29b7dbc2"],["560387bb/index.html","09eb8b7f47b640fd7c1d34aba20154aa"],["561c553e/index.html","7571a9e5ebe5bdb9b86017d3cfde1a04"],["56954db8/index.html","4ac7d98183a1adcd8e36616ba6318b54"],["57427b30/index.html","59ac6e243a8fe2b7da0707aebb8bddd9"],["589bd519/index.html","e2977f7c0a17f14d5181237fad858729"],["59d4cd0/index.html","94968b8ec5adb13f8636da572fe2c44d"],["59f6b91c/index.html","f3aa9e9f049b166dc5c8f708f9d851a5"],["5a29f513/index.html","949f0681d7d11b35a7025a25cdf53bcb"],["5a4c73da/index.html","c3e40e7bf8a8a6a907941bfd546d355c"],["5b7386c2/index.html","fe10a72ee8decf1462a9e73d14d72c2e"],["5c6528a4/index.html","046a2b0edba28ed9f4e41149e203ba93"],["5c944241/index.html","1a29eab651ad028a7c897765cdbd51e1"],["5f826ba6/index.html","ade88b01f160236be68f829209b81750"],["5fc91746/index.html","7824b5c14d810bb3da3eb222a6b64bc2"],["60992a21/index.html","01755492b43bd9292b1b8c83ecb2865e"],["61030f3f/index.html","bf1b750f29651114d2e7d695321f901e"],["61acc2f3/index.html","673e16fbdf0c92034035663e16e6631b"],["61e3cbc/index.html","9f39daf86f6efb128f631babf612505a"],["62f8e345/index.html","269dc8b45c98874200e2f344ba96d277"],["63dfb318/index.html","e52885b99b1242e56284355b894e83e7"],["650f0a27/index.html","f2fcea148b7cca7140807609007b3d42"],["655cb7bd/index.html","154093fafbd9d10b72e1d6b765888fb0"],["659aa8d8/index.html","2990ebcc696af4c0ab7bb59216536a4f"],["65c1781f/index.html","bc1bef390f0c18a767dd9d5c96b16fd3"],["66dd1680/index.html","1a81e17f5ef56288b57193b681071af7"],["67dc8b75/index.html","4c4732f64d0dd3b093465590adf9de66"],["68903b21/index.html","78ac42e00d290d35796da11fbad09e24"],["68a46f0b/index.html","b30071206afd47bfe2ec1b9d7249e1c3"],["68e48a7a/index.html","dc977b3ac2cef055c528a4a20c2cae20"],["6a2b981f/index.html","b045e48e12215f9473fc18d492fa55b0"],["6a4cab08/index.html","5966e508affe2bbe54d07feee74c51bd"],["6a5982f6/index.html","82bf3657241edc7392ba7f0117a84bc6"],["6bb0247a/index.html","bda97d6ad4ada0817d03343e0f3f4893"],["6bcdcc46/index.html","80f3932bdee6111d82362de0128960e1"],["6e572fe1/index.html","7e235b0758b76101ce81e6b6f99afdef"],["6e6d7226/index.html","92adaa54ae29ccf02bb059611804ac60"],["6ed0cc8f/index.html","35817f11c9ceaa68733ee86557937eab"],["6f66f8f8/index.html","e5e94b7a9974f0ecf046b5d355b7b6f3"],["6f6ab2c9/index.html","30943862d43671231893dbd01461cf24"],["6f93207a/index.html","423ba4ed5402b5f0bf5fe1a162b18abb"],["70032e53/index.html","42e0cccc867d1eccb817df4f03203f8f"],["71a9f0a2/index.html","8049a5addb2dac040ae4c4cb2cab74ee"],["73d62e33/index.html","19633c4f1870765abfb34049eeb56b4e"],["773303aa/index.html","4abb3a2ad9f51514e5d04bbc24d8fcd4"],["783cca3a/index.html","57a79ce3524e67be4707dff1aa05c5a1"],["784bc526/index.html","5fe8b7462e54818c2d3803d5e66e9d06"],["7a72e0ec/index.html","da2a8401ff477a2929ef5f8d8cc2332b"],["7becbf63/index.html","eb433dc4adf93ae5b45025616de374a9"],["7d2b0472/index.html","7f9132198d9b7cadd7fc2188898cc6dd"],["7dfc273b/index.html","c1013e0f6721c8d465cd9de4448c64fa"],["7e7621ef/index.html","ac102700ead8b739649be6195465a7ce"],["7e7c23c2/index.html","f977b1965729ac150e75f9862bce1494"],["7eacad98/index.html","b33ab01057ce8d0cc77c72e40d575b6c"],["7ecca125/index.html","15b4683a08075f46234ef361e4d333bd"],["7ee1bb3b/index.html","d3f800db18bf37692a9f7460d90b3707"],["7f6818b1/index.html","a6f061d611a70c8a717fdec3ec094c9f"],["835a9757/index.html","ed920ae47d0121b62145f15eaaa6379e"],["83978c3d/index.html","7d82f0a760879e908ab0a6372ecb1f36"],["8434b274/index.html","d69e026a0658c27abb56b7c994aafcb2"],["84b8f7c6/index.html","d81628b353fb9133104b86784dc47d17"],["84babd30/index.html","a3e38b49cb4a4bb3d27911747b9d769b"],["86eadb67/index.html","3e5b3b6c0477232a2654b861d93c0f62"],["891ad037/index.html","7eb6bda9c1479af04dc59f6ac3e31196"],["894818a5/index.html","39c3549660cc9140cb20e64f42dc1f3f"],["8b10921e/index.html","7b29c9a111c7fda2546c5c9b87521160"],["8b8f3dfd/index.html","232063cb161f75070e4ac8b8e7e7bbce"],["8c5ac577/index.html","619c06ba458c627a8b2aea276c8cab3d"],["8e5f1388/index.html","740bcd5be0a3fc92e77d095fec671822"],["944a2722/index.html","8117ae7ae1ece0976bce0cde1015570c"],["94b377b3/index.html","a674ded6d1bd6bd9f7368821be5f31c6"],["9562e52/index.html","70cb80535594fefa9511d69307ef3dbe"],["98ac8a82/index.html","5527269f5fc8a1b43f362d56c6022d20"],["99dc77d/index.html","392e9d4781e52cf595e42ed934712c6a"],["9a99eb64/index.html","5f6a8560fd638ffe45750d4410c1bf5f"],["9ac96b1d/index.html","bff362dafeb6162be2fad25efbc67be2"],["9c66e3e3/index.html","dd64312735662411972f36c229af363b"],["9c67c163/index.html","d7a55227764b96add3ed016e0c717a78"],["9ee158e1/index.html","4759baceb29f602131f77ef2688d80ba"],["9f1d8b77/index.html","22860be5d400b2ef7c7b0e5d163c22e6"],["9fb00d50/index.html","e31b282230ec91528dbb0fd5cc250b33"],["9fe4182d/index.html","45b5d5113b2eba1c081e7b7165484ab0"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["a0e37ddb/index.html","5b23de02edcaa8faa0fa0dc3820a6bbb"],["a1e708e2/index.html","004d6b035ec2a911806d50456d834a66"],["a20ca391/index.html","1622819efe58d0aa62831443425a1d77"],["a2c7bf23/index.html","ef24514a7997ac219d91d4143bbbfa13"],["a4b21e43/index.html","29b6aa6a6fcb91c438cc964acac1c7a2"],["a5bf9421/index.html","08ab8734577f116ba0b8e42b8a96bd10"],["a678482f/index.html","d9388ffd99b5543472a90154b844825b"],["a74119db/index.html","842ec8f2fd6b50c06f80dacba7de8661"],["a8a3dabc/index.html","0aaa5390a0d75cf7127f5d860cd546f0"],["a8a8763e/index.html","44cf3490db8259750c0bdcfb6324938d"],["aba8e35b/index.html","8dc28363bf8f23a5a54c808bd877d987"],["ada46a5d/index.html","c4144b745c14ffafb0add515524d6c27"],["archives/2018/08/index.html","0984d4ca31cfd09b928f166730f5ca3b"],["archives/2018/08/page/2/index.html","76c58c67f7ef3fa98d791f4cef883cb8"],["archives/2018/08/page/3/index.html","ebe58a7f8dcdd32fba926cede079a243"],["archives/2018/08/page/4/index.html","cb0d4f225d1cd365a45e6eb36d4c4697"],["archives/2018/08/page/5/index.html","b29dd1d244220d7b873fa5ae82758556"],["archives/2018/08/page/6/index.html","d82416b944fb684af9787d023cffee17"],["archives/2018/08/page/7/index.html","143a680be34f2a65e918858b4aa63523"],["archives/2018/09/index.html","d3cfd46fad0b0da2cc8407b00a65432f"],["archives/2018/09/page/10/index.html","5b29027249c0f024d6e091bf99fd9327"],["archives/2018/09/page/2/index.html","e7b2508fcfe26be23eb96572082cc877"],["archives/2018/09/page/3/index.html","88f925f083e9c1985e54c9f91ca93122"],["archives/2018/09/page/4/index.html","a347eeb771b3c56486e44472105d71d5"],["archives/2018/09/page/5/index.html","bf54d9e509dc04738b4708c5a3aa2f4a"],["archives/2018/09/page/6/index.html","11739a6e5802cdb0ed8873639f7ab3d4"],["archives/2018/09/page/7/index.html","438800e19f9aa718ace7aa90e2e3d3e2"],["archives/2018/09/page/8/index.html","b4e0f9b56232aa9aec0987702f43b9be"],["archives/2018/09/page/9/index.html","e876d701df22fd62af3c836b789a7db3"],["archives/2018/10/index.html","3ee5bad7967b38f409b3ab75b95d9583"],["archives/2018/10/page/2/index.html","7736c74631a2744d6c9c761ccc24f4d1"],["archives/2018/10/page/3/index.html","453469455fccf673dabaec0b826ec3fb"],["archives/2018/10/page/4/index.html","04feaf81d609e8a883fb4bb2498d1428"],["archives/2018/10/page/5/index.html","7ee99e1ede41bba2a754e0b6b5665c19"],["archives/2018/10/page/6/index.html","4240214f9149c668a489ba3970199721"],["archives/2018/10/page/7/index.html","4a255e5772f95fbb8e6434b9af952e12"],["archives/2018/10/page/8/index.html","3cdbb195c57ad9c5b9de0933ac242a3a"],["archives/2018/11/index.html","a02c44bfeeecd40159553918b91e1930"],["archives/2018/index.html","b04fe29aad1d147afe1530db7e9fd089"],["archives/2018/page/10/index.html","cd17cb430f52ac9be3c5975d9f3d7bd9"],["archives/2018/page/11/index.html","ed6ebc3072c2c7941e4372bbe3a1b63c"],["archives/2018/page/12/index.html","5d22cfa08d6d0b00807668a065d21437"],["archives/2018/page/13/index.html","267105e2e8380a3d173e434d3e6ec8d9"],["archives/2018/page/14/index.html","dc27b86d5488cef150c4c35d93578d96"],["archives/2018/page/15/index.html","7619c585d91a7a67e9d886e453d40f4e"],["archives/2018/page/16/index.html","ce4999e39aebd098779371385c7f8488"],["archives/2018/page/17/index.html","6ba2c1543f264fa98f527f2cf3e8a8fb"],["archives/2018/page/18/index.html","ab68b559c3f98a4ab0a5c47c2bca2b0b"],["archives/2018/page/19/index.html","f9be10bac3b55a412b95b69f509804ac"],["archives/2018/page/2/index.html","649644026812ef3e06ebb77fe62f0828"],["archives/2018/page/20/index.html","f1a87f20f99d6c4cadcbe1e47fdfdc6d"],["archives/2018/page/21/index.html","8d71f7786dba69a9eaacf382a30243e7"],["archives/2018/page/22/index.html","fa827412d71783bbe397f574e4239bfd"],["archives/2018/page/23/index.html","beedb18fb9e028ee697b16b010693b6e"],["archives/2018/page/24/index.html","0bd3daf2ce58aec31446150d5d7829c3"],["archives/2018/page/25/index.html","b41744cc9b94aa1ec2db88b5edfd670b"],["archives/2018/page/3/index.html","63da32e3015c5458b9bc2638539930a5"],["archives/2018/page/4/index.html","6812065ea2349e50a31ea4ac4f1293fb"],["archives/2018/page/5/index.html","f8af03b2487ccc818f4cef83d17967c0"],["archives/2018/page/6/index.html","f27ecc12ae737643e6955bd659d91963"],["archives/2018/page/7/index.html","38f16d0f9aa28bfe5bc235f62bbdfc4d"],["archives/2018/page/8/index.html","e3787088c4bc1a1f50a90c543d8e2223"],["archives/2018/page/9/index.html","779d907cfd6098745125b5a68ab6a919"],["archives/index.html","b9bea82f74fa7dde51674952eff604be"],["archives/page/10/index.html","ef3bd5d700a2473b78d5b604309e2660"],["archives/page/11/index.html","cf3709b42e7a07e800fb8364a07c1367"],["archives/page/12/index.html","e3978100222ca91477cfc5070ccd907e"],["archives/page/13/index.html","305e1b7dc83b4605d0a8fd97bd5852fa"],["archives/page/14/index.html","7342586a5abba0d88fde978cb32a6a12"],["archives/page/15/index.html","daadd7824903981bd6aad057108a24a3"],["archives/page/16/index.html","b1ee0f3e82fada6e4d84d06ee3374dcf"],["archives/page/17/index.html","d207b55285907fe89cdddefffd30b47e"],["archives/page/18/index.html","eb99a35a04385324d28f78f29a60afd8"],["archives/page/19/index.html","7f2c86bda3cc4af1680fbb3b98cedd85"],["archives/page/2/index.html","de9606961e9577e76e47343a01733c5b"],["archives/page/20/index.html","e59a751b161c4d82b1e1ab80740ff648"],["archives/page/21/index.html","d8acd0ee033af8aa47f53e524d75b401"],["archives/page/22/index.html","041b7f74837fc104cfd910d8bf3e2d5e"],["archives/page/23/index.html","47845b7e89a747c510da155e92ac0bc5"],["archives/page/24/index.html","59d307213039ee8f289ebcc497956edc"],["archives/page/25/index.html","7170c7c5a08a1d073546b3e646d1bfdc"],["archives/page/3/index.html","b7c28ea98cb132b788cfe53d141ecb22"],["archives/page/4/index.html","9e4868da35082b027001fe530424c5ed"],["archives/page/5/index.html","7198e23e58078c27cb68f53536a2f99a"],["archives/page/6/index.html","ba6f70e530059108b84817a858c6145d"],["archives/page/7/index.html","310c98f138acbef720ec371aab7db250"],["archives/page/8/index.html","f38c4ee1b0073050d5680a7615f81798"],["archives/page/9/index.html","5828d13044b913326e14cd9a95e2da4b"],["b01398e8/index.html","f2cefedf703fe94379b9f34c552b30bb"],["b4c7585b/index.html","f1453ab586209a2b571c9ebcbdf3cb59"],["b513d267/index.html","60aa6ef44fcb5761683bce44622bc47c"],["b67f2784/index.html","dcd5fb18641d5b558c33a4b0b7c44a08"],["b6db0c64/index.html","a846d3ad5c3e2d4e87919fdc401688f0"],["b8d3ced1/index.html","359d4614aa8e8c73ac745aa932f4f0b0"],["b972d127/index.html","05f0c37a2ed754ff26ee6a830c8d8a58"],["ba46f35b/index.html","96ed1ae5a949465212c1fd6f69e8f363"],["baidu_verify_DfMf5XqJUb.html","25e2663003e9a08291ef17b50da925ec"],["bb4502fa/index.html","f97827ca7fde44aab1d8469545588f70"],["bb984cd4/index.html","e7f7fbc5ff440689fbbeeb7f2f6ca51e"],["be3871f5/index.html","cefb6bba853f2543870193ab5f0a1ed7"],["be97bbf9/index.html","9b8e6c5210c6627a89a2a46efd399062"],["bef6deea/index.html","23768da1d486ff570cc98c6fb3b18de4"],["c02d18a7/index.html","c8016a9614d7824d8408d4a9004d5dc9"],["c0d275b3/index.html","c9602f3ffa6718fa85315bcdbaa66f61"],["c1989cb5/index.html","ba916983e432e0a4fe9c3529294cb5a4"],["c2176cf3/index.html","b9b0c2447c516910b94ab3f244bd3121"],["c2424f60/index.html","2ca543cff4e32c3951a5b414e499df61"],["c2af3f7c/index.html","4a81e02ad8e95ded9ab814c5005677ff"],["c3fd1e79/index.html","63b31007dbc7f4ffe48e0476b94a73cb"],["c40a717a/index.html","76465cbc2a62e0c828cd6d5404cbebaa"],["c5057eab/index.html","5fb705902aef4aa7c3365fa3da1d47e3"],["c746a48a/index.html","fbb33a5774fd40ae8a2acd6224a4549c"],["ca3f6ac0/index.html","273ea1b34ca33e9f2ca3267a2d0c40c7"],["categories/dp/index.html","efbfad7f4ae2ceb8f17a8c95f252bda9"],["categories/dp/page/2/index.html","7080f9bb39d49d012b986432e9c1c238"],["categories/dp/page/3/index.html","a872e66454a98747cf210f9b0b466917"],["categories/hexo/index.html","960239109b630cc30d50e211ae85bb69"],["categories/index.html","717b56ba4a44e76dfa8ea758b917ed85"],["categories/java/index.html","d4e73ab24d80fe95b866fc80f4fb57b8"],["categories/java/page/2/index.html","33e459be4f693ad6bdd33bc7b41a370d"],["categories/java/page/3/index.html","a23e7d8a8e9985141e074d311c5315d9"],["categories/love-peace/index.html","4bf75c3631516a4dc50f837c26528849"],["categories/二分/index.html","f22798602153ad302a9c5403be44d383"],["categories/博弈论/index.html","2c4ddccc9a6426ae94cfdb3ffad0a738"],["categories/博弈论/page/2/index.html","d785f12925f5e0c0522bae7f46a17b1b"],["categories/博弈论/page/3/index.html","68d9d39746b3ff833774fc4b37b69b63"],["categories/图论/index.html","5d10930bafb0fba04baec820b12f5c17"],["categories/图论/page/2/index.html","bfcb74a5fe6035fad862843ecc9b5641"],["categories/图论/page/3/index.html","b8eedb257aaddd1ce72350f5bbd5c215"],["categories/搜索/index.html","0d12c6418879d284ced4b100db186ab7"],["categories/数据结构/index.html","94bd3f539e6709fbefe1a3627ea57bf4"],["categories/数论/index.html","905832ee87362986c43902f480714378"],["categories/数论/page/2/index.html","d9487a8763d5959a92864696ab41fa6c"],["categories/数论/page/3/index.html","ebfcf52068b277a5bcf702f5cd41241f"],["categories/数论/page/4/index.html","9da5995c0a7fd0ed3272a8235865f0a0"],["categories/数论/page/5/index.html","8b1d128b3a7de7954b6cb93c6c0b41cc"],["categories/数论/page/6/index.html","ea5b6d4e51b99cfe55284cb089ea58ba"],["categories/机器学习/index.html","466cd4e2416f85f172ef78699371851f"],["categories/杂/index.html","ddac76aef277426abeb32cab649c5673"],["categories/杂/page/2/index.html","5dba84798f7681f6a9807b8fa8d7611e"],["categories/杂/page/3/index.html","dfd83090d92aa75c099cd5e94f388c75"],["categories/模拟/index.html","43f3fbda7c27a56e8679b99326f6d022"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","ece7f572d2e0119f6d123be8530acdda"],["categories/计算几何/index.html","5fdf40efa969a98144cb173c7f42c5b1"],["categories/贪心/index.html","64f2faffbd9d4044522148afe176fa5a"],["categories/贪心/page/2/index.html","fbe1c1ef55b4550f2595a77278928c55"],["categories/题解/index.html","c0f13b80dc45c6ad74a0e674b00edfb4"],["cb821a33/index.html","555b8187cc7cf671ea3e71a32cb30d17"],["cbd59ef1/index.html","b7ed3a8651431040510fc0624754c0a5"],["cd27113b/index.html","66e241c4a0c266bdaa578fbd12a0d94a"],["cdd10d6d/index.html","7f9a6207ab58d7e9ce6cfb05b9b2d502"],["cf682b8e/index.html","1c5ee662868c4cb89afecdc29bab51c0"],["cfe28c6a/index.html","4144f116a63b73155d748ef04d229a4f"],["css/main.css","74544cf4346324b017179361328f572f"],["d0f16a5f/index.html","8254f7ffa856438b49616d9459b79b6e"],["d2c81766/index.html","d30907be3bd99588245a1d3535e21f98"],["d2d140b5/index.html","2505b07ec22f3f300c749dff72de44ef"],["d34e925e/index.html","8526b4f0cb19c5c966b8cbb1c47a9680"],["d377a60d/index.html","2a6a12e7db83b159cd1e3632908518bf"],["d5042e55/index.html","b7f0ecacd8f8acfb361b8fb81de3d972"],["d51ad0f1/index.html","36bfca8ecd12ec0cb6031b848b29e70e"],["d655b5fc/index.html","0f11b5afc7487a981e3808c5438936c1"],["d67f02ad/index.html","0ec84815bae290fddd434a9317f1d0ec"],["d6ce1fc2/index.html","fa1fb02b52e21ca88cc916f01084a8b1"],["d6da51a9/index.html","7918149392f0aa4256b9438d3919591a"],["d7ffbd1c/index.html","430d4ba1ec9c7894604d89294e22e1b8"],["d971ae59/index.html","00aa671a3c22651a4921e7931af06287"],["dbf07d5c/index.html","a1f04ba293d3a314f3afdbbba8573e63"],["dd1d064a/index.html","204dae9415e0d371ef568e8dc34f249d"],["dd814372/index.html","4d7e306b1b95c4c9beb24d0672a76e22"],["ddee45d/index.html","0086c14a52a6f945d23256bf64b8a036"],["de762ff3/index.html","f83ade013803e5c6440767ab4509a1b0"],["df82d1f8/index.html","1005eb529b90309beaf5ce2c4b7885e9"],["e1d4a8b4/index.html","5dc7f65e0e2f011c86a16e46fb9ee250"],["e31679e2/index.html","d30d74655e6ec307c75f1348365f7a5b"],["e4c2cc13/index.html","9fb7fc2c805cf20fac51eab77693ef3f"],["e4d2c7ba/index.html","416601db3f24a82095a7cd1a52b2dc77"],["e5ffcbea/index.html","c2519aa565aaa33bb3d6e0690076c14b"],["e612ace7/index.html","8332e3b87933f4f309361e79f4e151ae"],["e73bae86/index.html","deca60f0f710cd37f44f346892e9b1ac"],["e7a0c86b/index.html","7c080305e66024fe7e09a324816c6f98"],["e7b555f8/index.html","acd5073abcebe775504203229e1ba80b"],["e81fda88/index.html","bc79f81572812d29e923dfc243a43f62"],["e85a11e8/index.html","464dcf6b7d4f8889d008e0ef0563a937"],["e86890fb/index.html","0610fb9da15db11b630b7c5f244fc549"],["e98fffcf/index.html","9597f8b4ec4842617fa4d81c38ca2b64"],["e9da39f8/index.html","f5ee264358235b9c3083f9874e2d954b"],["eb18b91b/index.html","994196255dc0fe08878047d2f81900ae"],["eba1fb1b/index.html","05cfa151422dc1ec506936e737ef04dc"],["ec404005/index.html","bfb65bdb129ad61b166c7104c73651dc"],["ec4e8b99/index.html","c7bde6d4c0c6d289383044c2cd47f5ba"],["ec8b12a4/index.html","ff472d5554332d9ba5031987eb47d997"],["ef2a130f/index.html","332085c4cdab2aa61ec325cbb5bfa76f"],["f0565075/index.html","52fc1a189a05595b348c4c06dda4b612"],["f0d0bafc/index.html","912e40b590a475812042a99f6af5986c"],["f0e39cec/index.html","fec6430d70ae1723c68e66fde1fd371e"],["f1a4e5b1/index.html","1f1ecee7938a598a65501351198e4e91"],["f1aab9cf/index.html","df887b6fdf95ae288e86e54c8a486767"],["f292e0b8/index.html","ce4e243a9ac68122638e4a3bf1d34bca"],["f32e27dd/index.html","dff7bb6ffb54f6741c50ef60e1ec9724"],["f47c306c/index.html","6bff95bf1335f7134bec438a3036573a"],["f6227d77/index.html","1b0dc734e527db378cbdbada7da17dbb"],["f699b617/index.html","8d286a79a18d24077618b86d5649aec9"],["f715085c/index.html","d31cabbfbe6a81a82c382db23ffdb0e7"],["f7f1f3b6/index.html","03505384f7ca57aa751d78733f48c17f"],["f8170462/index.html","f27a5ceda09ee0238533ea7ba2b60bfb"],["f8eca34c/index.html","253a08e0344287ce45e916336a65dd16"],["f9161795/index.html","4020713e099f37c8bc06aa11e2b1b315"],["f9c3ad7f/index.html","c72ef2a787acfd6d0814d34be319da4c"],["fa5f812b/index.html","4c098e60a3d8ccd2f2d851e1d33e2b71"],["fab7cb46/index.html","4b4672af85db4a4082310d9188a1caf8"],["fb0210e3/index.html","7d799705a7489faa5d0488b0a8320987"],["fc584b3/index.html","dcefbe2775deaa60ea8ad7b3a7768106"],["ff888e9d/index.html","996c9f1e078e42361126aa0343ba16c3"],["ff9df0f5/index.html","c08cf95e13b6dae315d6c15b72b2741a"],["ffac8316/index.html","e9e2e992037615b985b3987976cfb27a"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","703b44447df5be1a3c6e10c3a03bd4a0"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","43345522307287bb62533b5b364681a4"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e3b95bf01ffb5d7b568f519cc1027d4b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","b7cf68a4b915122dca8eac18f409053c"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","24553d6c25d06e270a16e09c1877ca3b"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","bd30548922f0eec1a49b9de678fe8acb"],["page/11/index.html","687b667bfc1f82f75967c8f1439e5dc4"],["page/12/index.html","386e0c7b5fe45e077da37f7b127bb28d"],["page/13/index.html","d7ee6dcaffc58f008edcdf53bc47261a"],["page/14/index.html","737ad2a125196bf14cc19754a651c225"],["page/15/index.html","fd6bb33cd9c08cac76415881cc2492c7"],["page/16/index.html","419b8066c84340b65d6caf795859e137"],["page/17/index.html","7ae56bb89817fbe722d67d13c783519b"],["page/18/index.html","32e10c07361b521ea2ac730a36320995"],["page/19/index.html","8d6b278fad10030f2b46ae32f91d499f"],["page/2/index.html","2c2bfe1b5b3fe1cab5528f916a9a636d"],["page/20/index.html","18c67539cdea821fbd68f6ecce25bd66"],["page/21/index.html","8706145866e28600155c403ad64bbf5d"],["page/22/index.html","ac43091e3d3b3f81ae8ae28f4403e59e"],["page/23/index.html","78c555b748173c08ad9e48c36ace7b32"],["page/24/index.html","b6344a49b0ebc8a9acc7cd0377b99361"],["page/25/index.html","9568389c5bd8f88ca5d0bb831e92bf16"],["page/3/index.html","d6263904a1369857857742a03fca228f"],["page/4/index.html","6182a9003f834f1c408105ebaf22882e"],["page/5/index.html","23d1ea73ed0987443af12e19c333d754"],["page/6/index.html","855f1a8762ff508105d6103b78a163cd"],["page/7/index.html","ded12d4547fd9b084dc4bb99b485e4ef"],["page/8/index.html","66a8b8d56c899b7d9e92f3958dff46ce"],["page/9/index.html","3024be647e5ff34acff7ca4581ce93a3"],["tags/Floyd周期检测/index.html","40693a11e8b3eabcffc01f5ea4214ea1"],["tags/IDA/index.html","cf60b01af6ae045b9468327221e8199a"],["tags/Manacher/index.html","e0d0051a238c3bf80503d6e3ad388229"],["tags/Pollard-Rho算法/index.html","f94f16559c5439e36eaacd347349606f"],["tags/Python/index.html","c244195988e4a903a375a82a63034213"],["tags/api/index.html","9b712ccd4d9fa12922103e67b3b82073"],["tags/bfs/index.html","270d62e1c0016027079a6380ed1c88fc"],["tags/bsgs算法/index.html","af40ff907beb13c2abd4f71c540bd5e9"],["tags/cf/index.html","b2275fd114b1fc4b9ca02f11c8321d22"],["tags/css/index.html","c8f3189a1b614c3068e936fdac79fe0a"],["tags/dfs/index.html","1fa634c0cb44d6ee29ab3981dc97595b"],["tags/dijkstra/index.html","64c8fed65dcb7b469f0e2fe691a73bd8"],["tags/dp/index.html","1097283bbb1ea7e1739ff66469210d2d"],["tags/dp/page/2/index.html","8a9662170b4390d754ea4c4000df17ad"],["tags/dp/page/3/index.html","c0dad5237bea08daf04706e2c5c97add"],["tags/gcd/index.html","d58f3e3120ad4d232be4f97b5d588134"],["tags/hexo/index.html","822325c80d95b8cc477b4672a26db8c2"],["tags/index.html","a65f95d85cd49b6328512459e65cc3de"],["tags/java高精度/index.html","a6336b9b982fe0fbb92e28c1f7fc01a3"],["tags/java高精度/page/2/index.html","58d0df6a4bae5015bbef2f88cbfd59fd"],["tags/java高精度/page/3/index.html","c43f584dd14913ea92b6b869acdf0dd3"],["tags/k-means/index.html","265674cdaac73108ea544debf45b0699"],["tags/kruskal/index.html","9a084784043e2b0ab19828c7cb5d1f4e"],["tags/lcs/index.html","9b7dc437640204d044da101e025fe4fd"],["tags/leancloud/index.html","affd4f1308d54a52b85918c59419c7ee"],["tags/live2d/index.html","a9a1e968308ca87b01c4a4ebde2fe001"],["tags/mac-OS/index.html","ceb068077b0c6f8f3bab9b2115f6c340"],["tags/prim/index.html","26824059e028260b23d65a600128edde"],["tags/revolvermaps/index.html","2dd1306588e1b795fe48d19f126cd2ee"],["tags/rmq/index.html","73eaaa9c1362e9070a3f507c9f698d68"],["tags/sg函数/index.html","9b50faddbaf06644713ca8c486a4d234"],["tags/stl/index.html","5a789e523296a1dcebe34881f5648250"],["tags/三分/index.html","98b8a14079446ab1c65407cb20d2486c"],["tags/中国剩余定理/index.html","f2778c6f6af4ebfdef9d35dd0959c993"],["tags/二分/index.html","36d458a22500b3ecd930cbadcfa9d18b"],["tags/二分图/index.html","6ad78773618e4460f387c83964b5dc89"],["tags/作业/index.html","748d8d2549d38deb35e3c8fa1ffe574c"],["tags/全排列/index.html","cca69216984e5143a26276c5afeac8ed"],["tags/分割平面/index.html","c912f736b2c50568a8722bf568eee003"],["tags/分数规划/index.html","ebed30f6b05e50fef821dbe0c20cf093"],["tags/前缀和/index.html","de4b67190cf9899835c48fc5e9099a59"],["tags/勒让德定理/index.html","7ee80b5b0daa33f4fea18ed77a81c182"],["tags/匈牙利算法/index.html","00e5ee51c3c32a11a0faa09a5a77f140"],["tags/博弈论/index.html","9de00301a31f95e80b03b000b847b14b"],["tags/卡特兰数/index.html","777b0a5bb1491906d3b1f4959dc04cda"],["tags/卢卡斯定理/index.html","4b07d18a58d05422de0bd45c6b1d690c"],["tags/原根/index.html","0183d699271ac1da4a5818e927dc7ae9"],["tags/四平方和定理/index.html","4d3e697b69a45f2cea85d19469aab8eb"],["tags/埃筛素数/index.html","967941f652e0881003c41a0bd6bb1a5c"],["tags/威佐夫博弈/index.html","91e172c3f531ba7c9d8a31a8212e56d4"],["tags/字符串/index.html","bd26090195631e490f5a89b4dbc63c2b"],["tags/容斥/index.html","91d206d3724ab191c73c14cf49936996"],["tags/尼姆博弈/index.html","ccbd9c8d3a810f76e3e6744d21d97e92"],["tags/巴什博弈/index.html","0db4d26eeaf8867ee34ea20d2995622a"],["tags/并查集/index.html","5f987c99036b0eee3a4a8a27f6324573"],["tags/归并排序/index.html","0bc02de08107f8f21b2c105db478aa26"],["tags/循环结/index.html","328dcbeff3242381df1b2ebf65d1018a"],["tags/微信/index.html","cd86b86f2a2ab6f38d7fb58732eb5837"],["tags/快速幂/index.html","c7b81cd7186e401b532f60bd67634a01"],["tags/思维/index.html","c25c9888d30165c2a287ace34bbc727a"],["tags/思维/page/2/index.html","bcf9145139832584e93909fccb3631f2"],["tags/扩展欧几里得/index.html","ac455dcf1c430ad06b46a8fe227f0ac6"],["tags/拓扑排序/index.html","ae9b93ed86afa43d5e8b258091ac20e0"],["tags/推公式/index.html","490cc738e421949fc55914f809603764"],["tags/推公式/page/2/index.html","bfa91eece0f6eb46201e240bd1b68320"],["tags/推公式/page/3/index.html","d6e62d48d4fbfe6c66f6fb23578edd86"],["tags/数根/index.html","cfda03eb3977a29f72cc6c0e613272d2"],["tags/数组加倍/index.html","e408b8fd1eeeb3cb359d38e701295216"],["tags/数论/index.html","6ac5a12f582596f718605291dedfb006"],["tags/斐波那契/index.html","68ed6ead07afe7cfb34ca0e56e0f037e"],["tags/斐波那契/page/2/index.html","56cabf74f4f62bc80f66dfdde6d6f318"],["tags/斯特林公式/index.html","fab903fca1d4b24c7ace82518aa29dba"],["tags/斯特林数/index.html","9eabed44c6dfc6d1008ee6d2ca2cac7e"],["tags/最小生成树/index.html","9143db996fd39ddc5148505317deda6a"],["tags/构造/index.html","5c88cfbd2b374ddc56279608379e7238"],["tags/枚举/index.html","55266345741936c9d41ada88fa95e7ef"],["tags/树状数组/index.html","d0fe41eec380a756437f82e1225b5304"],["tags/模拟/index.html","373cd99894d56d46353537dc5411e3ef"],["tags/欧拉公式/index.html","e2683333e79b6b01b3aca906e13f2cd7"],["tags/欧拉函数/index.html","87e54013bf39c0fbcd54dbd6dc935030"],["tags/欧拉路径/index.html","c46dc2f224c05dc6d33a71e6618ee0df"],["tags/汉诺塔/index.html","f5baf61bc65ef4412e6f0b1fa1627e37"],["tags/海伦公式/index.html","428816a5b60a71582859b615a713d00a"],["tags/生日悖论/index.html","bffb35b0f77254d7c3e8dcc45c278e54"],["tags/矩阵快速幂/index.html","48c641f322e4e073672e6bcec9761362"],["tags/离散化/index.html","c90b37a1b2220f4b63bace4d180ef745"],["tags/米勒罗宾/index.html","8f4583ce2884578f000542f1e5e2a827"],["tags/约瑟夫环/index.html","2cc4b6c23c647886155802640e7661f5"],["tags/线性基/index.html","3ee572b0441e6536ba1a5ead7e822005"],["tags/线段树/index.html","a98a508333568b87090ad44c2e6f4060"],["tags/组合数/index.html","862260cf5124daeab63965db17927f4f"],["tags/组合游戏/index.html","18aab94ce916d5799dccccaae4a81790"],["tags/背包/index.html","a34c9226b8e26652b345170c5caa771c"],["tags/莫比乌斯函数/index.html","4638fa74554a3fe1550bf11f428eb24a"],["tags/计算几何/index.html","f71b29a5a4ca3c27e700c36f0884d00c"],["tags/贪心/index.html","df136255294eb87adefbac2512c48d75"],["tags/贪心/page/2/index.html","d8d342d07c6b743cbc8c4c83a8ab2149"],["tags/贪心/page/3/index.html","a766470b4be5d2a4db21027077746d27"],["tags/逆元/index.html","2f194d066adf9268b530e454e5edf313"],["tags/阶/index.html","2f03df0ae09e1c4234a0f05b1f767889"],["tags/鸽巢原理/index.html","2532ad4e35d8a21c7961efdafa778143"],["tags/黄金分割数/index.html","7c66c9e56b3f9fa1cc7152ff048e3cd5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







