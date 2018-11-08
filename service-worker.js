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

var precacheConfig = [["10336297/index.html","d8e9e8a1c8ba960b1e57c214e8838d1b"],["1076b80c/index.html","b880a1a0e3e02e13eb5bd0be68f074ed"],["10a23843/index.html","2deb3aefa215a93832ef689b5b2f77f1"],["10f322b7/index.html","db35708b064af78670b1f70f17636ac4"],["1109bacf/index.html","ee1974d2fe4c0ff2c91e035c8d0cbcb2"],["12fb71da/index.html","06b7d7c16c4b851521c623d2d8b9a0f4"],["15885f20/index.html","74737fba6de5993468c5f76f88bfab41"],["15c1232b/index.html","cc0c8b5b7823849e9fa0c078b8167838"],["16236ee/index.html","3ea709f38652101b9cade0f66b9af310"],["163226ed/index.html","e6a9eb220ec0305e69fb949357fc0838"],["18f146f5/index.html","70efeecd813b42cfb65dec0c8b0c26a1"],["19356a39/index.html","dd21785fb338601288f260f5f2957850"],["1d6b220a/index.html","d7fb1de76acb2c09ad2dc0e54790d90e"],["1f726e05/index.html","40f4050b4e934f1f3f277b661bde9361"],["205f0ecd/index.html","1ad21b5eb79ce93e2459d2f3f98f9989"],["216acbe1/index.html","55ccf53deaea62ba7d39cde6574d5e23"],["223d29ea/index.html","63c1d6ae1b71ef814f2a03a7210e50ce"],["22830a9e/index.html","fe7924865b5817e38c7a775df9ad5d48"],["23c9f6c3/index.html","e2486c29d7993fa36e9b724677c7a39f"],["276c2267/index.html","950d61046f9ece01a5aa2a9b4c6b9020"],["276c371d/index.html","dcd0601bde0db32cbdd05047361e3a46"],["29b25bed/index.html","6979f20db63d4fe5ddc36f0e062874cd"],["2c002055/index.html","346ff98c0bda96c2a42391583bdfa2c6"],["2d3ae01/index.html","4db401f577814cb12c21dd0d56b511fc"],["2d58815c/index.html","c5af43bc73cb311082c6a353eda89d6d"],["2e9cbb0/index.html","b1afa15e81571157cbb1a9361fbd2c00"],["304f1fc6/index.html","d68d9f343a66cd4233e7b7e846103d26"],["33eb241b/index.html","19769ff9450424015c928799f34ff557"],["340b38ab/index.html","61ff9270faa8bb8c221b14944b257e62"],["34784cdc/index.html","ba4a47588ac3f60f7e6aa5885f6338d2"],["34822d81/index.html","ccb7fc308750acc9d84e0eed5185cb7d"],["34ddef5a/index.html","82f0702d65951ba7d2c14f09887c3db9"],["34f920df/index.html","cbd5fa87117055011d0102dfe83f1a84"],["3697a1c/index.html","7859cc03a24a8932e378741f21c9a765"],["37192e8b/index.html","0699ec5c24128e9caf84836477dd274b"],["37630519/index.html","6ec72ffbf4044f6f3b5c34f0d4863a2f"],["3a23cc5c/index.html","6723975aa43ad560b6fdb7db6eec594d"],["3c67f84b/index.html","b071b3618f553cba14e2f0086579db6b"],["3ca6f02/index.html","9ea8868ba284597176d6ec61799935a4"],["3d8d44b2/index.html","d325b70a486f8d5d68ca98419768b547"],["3fb087ea/index.html","52f73fe8fb1aed99f9203983b2762ae0"],["404/index.html","38b12449a3580eb706bf65db15bbbb74"],["40687d49/index.html","b3a42a6a33f7acb4a0d07f7a38c96a5a"],["40d6aa63/index.html","a988e765a1360adc6722abc46aff7631"],["40f7970d/index.html","706d4ef21197d3a08c810919a60fedf1"],["41d56d9c/index.html","28c0273bfef190a5aed23f4b4cef630e"],["41f5723f/index.html","138b9bd54036d25327cc19e2f507eb9e"],["420f3cff/index.html","30f3b6ac49905902cc7be75deee1667e"],["42b4455d/index.html","3ebc16c40141d253b7c45755071cb017"],["42c39770/index.html","ba9667c37641315f303a77c2ec146c7d"],["438d787/index.html","026c1ac332347a2531006620d3bb883c"],["455762c8/index.html","83880b66ce67edaf4bc70aa545c03199"],["47a64668/index.html","78c8e2d44eb22aef2daa39feb23ac7e1"],["4a010063/index.html","4e90ba17d89dfc48a83b105b486c2106"],["4b67d3c8/index.html","cb009f4f240d6a8bf7b0b3498aff195b"],["50df051/index.html","432cc4db840e14258d50f4e0586b1556"],["52580325/index.html","02e82ff10acc5c6c6c6979eba8a4a5ec"],["52b56662/index.html","c3143541826908aec9a3d740cae6e79b"],["52e47f72/index.html","8d9cc6f207c9e6ccda019ec082f6ba84"],["531fe264/index.html","309ded6325d9f08c49b8e1b8c3b5f682"],["560387bb/index.html","328d480e4f53633edb9e260e35a432d9"],["561c553e/index.html","730d3701f840bd5ca496a66858ec1c9e"],["56954db8/index.html","69cc0678d7caf3c9691cb75b596a049b"],["57427b30/index.html","b49a4472764080108c8c938f847981f9"],["589bd519/index.html","100a2d7d849a90c201f0f9c854dd1f5c"],["59d4cd0/index.html","139ee0f2b9b8e7cfff8929211b9c2fa1"],["59f6b91c/index.html","22030f7860b4a24d8024a467f9eb8224"],["5a29f513/index.html","0b617e3afa90ee339602fee5c6f4f50e"],["5a4c73da/index.html","b13265dd07ea9fe38bfbaa4b3318f4df"],["5b7386c2/index.html","cc1a6d4ef9cc44b010cd528b209d5ef4"],["5c6528a4/index.html","83bbcff5588d1e895342b03d05f9f96f"],["5c944241/index.html","80b154273c853cdde28c17226bbd1979"],["5f826ba6/index.html","d3faee772bba9eebfdc2dd3d0af887af"],["5fc91746/index.html","7675beb8395a0c951bd571ba7e142ae8"],["60992a21/index.html","b17f4bf6cd769653ae3e308820fa7672"],["61030f3f/index.html","a96b47f3d219fbfad7a248c254bd8570"],["61acc2f3/index.html","3a596b2d4dc05ceedff70ca831c20a7e"],["61e3cbc/index.html","46a2d4de37711a67d787f5a15cbd71cd"],["62f8e345/index.html","be8ee0bda34ed068d34debe9bc592122"],["63dfb318/index.html","30dd908f1570c344c3e6c1ead999421f"],["650f0a27/index.html","073e4f6f6da9f462b3debab4bf3c0cea"],["655cb7bd/index.html","97db3b90e1f0e172babbeb2e5a6d27b9"],["659aa8d8/index.html","5b6b23271204c035c80282feb5af2433"],["65c1781f/index.html","df47e1c765422bcad2c21d2474d1b235"],["66dd1680/index.html","cd8acf9e13449e782bc08329d38d5e45"],["67dc8b75/index.html","800ce5d55354f7af12341e0d1a407989"],["68903b21/index.html","b24b3853573931c89dadf774ab436054"],["68a46f0b/index.html","20b620fc00b3bd0dacc4dc8f4ecfb5ab"],["68e48a7a/index.html","ddc4f30a733effce1b3f799a6c9bb392"],["6a2b981f/index.html","3383853a96cff80f7f6579b1b1e92260"],["6a4cab08/index.html","470943f1aceb475ef3a14e4aa9f0d524"],["6a5982f6/index.html","f9108d8781e3a30482f9abd169aca137"],["6bb0247a/index.html","d1528f041cec3facdeded7dbe8640d31"],["6bcdcc46/index.html","7f8ac37157ecf51ef9e93054c4d6089c"],["6e572fe1/index.html","b3c7418e4d7b445d2a78a286201fe35d"],["6e6d7226/index.html","5f8316eedb290ea8d3d1b1c02850c3f2"],["6ed0cc8f/index.html","c27902fa24bbb9e2f571b1a26a0d9982"],["6f66f8f8/index.html","da44086fabe9ec953c03b0c98cfa86f6"],["6f6ab2c9/index.html","54959d5d7dbd1f1c37a18d8c3d2ea195"],["6f93207a/index.html","22f74282b24a9042a0717a9d541791d0"],["70032e53/index.html","1e2ce8660a5187f683ec081e6036f816"],["71a9f0a2/index.html","cf4abf7af4dc5d50ebf6503a91af706c"],["73d62e33/index.html","2689a86210115f30168085093b2c520c"],["773303aa/index.html","db6f2cd7a039090f1a73194a90d17600"],["783cca3a/index.html","2ff4ee522b6125eecbbc794f38b15825"],["784bc526/index.html","5cca718ab8746e15f5237789400d0590"],["7a72e0ec/index.html","5a9e1e355d41977cf37b5291c20281ff"],["7becbf63/index.html","cf7fd12ee6c158fad959b2c1fb4c2920"],["7d2b0472/index.html","88c5cdf0d55e9bf2cea746de79685e40"],["7dfc273b/index.html","5948ff95801de85e4cb2cf82f059d41f"],["7e7621ef/index.html","e77fb1382752beb76b1b77918565862a"],["7e7c23c2/index.html","4071edfb99e311867f3bcb875b67f1ed"],["7eacad98/index.html","c147b64cfd971ddfea31d12672a4443d"],["7ecca125/index.html","dfa33d9e21767165b5a3c6abb39e66f3"],["7ee1bb3b/index.html","84d5e6a16802f873952b7fa4b9dc7262"],["7f6818b1/index.html","b11cba3252ee3764b5df284463a11d1b"],["835a9757/index.html","b89dcd00965ce151371930ad2e076843"],["83978c3d/index.html","2b48b228a37a9e15df71176571a58d67"],["8434b274/index.html","3ca55f3b22f6a6ecad7fdc93b45700a3"],["84b8f7c6/index.html","2d597d881f7f669a2ebdd7f6b2036af0"],["84babd30/index.html","a8488af4813a4e6fe01d8adfa799f2e9"],["86eadb67/index.html","b7e435ea1611f51eada538614b0eca41"],["891ad037/index.html","f47eb7dc61cf0c465b2cbebf66a3bd1a"],["894818a5/index.html","b69cea67a38fb1b4d571cb10a6ab0d43"],["8b10921e/index.html","5fe9b70958160e20dd44774d4099a4c2"],["8b8f3dfd/index.html","6c9741aaf2c013d4b8635288c2d3bc15"],["8c5ac577/index.html","8d43f1a95183e9e287417127ddc4bd30"],["8e5f1388/index.html","4873a7b9c6e6d17cc76a5f76fad8f21b"],["944a2722/index.html","4d61f410972376cff58234bd67b13d43"],["94b377b3/index.html","ffb3a8ae73c5995df94fe3249165b853"],["9562e52/index.html","35933aa4a448b3bdf80ef98f92304b77"],["96c4a6fd/index.html","1b76654334e193d209d3cd9a0565defe"],["98ac8a82/index.html","aaf060c3d62cc08ea0164c3fb075933e"],["99dc77d/index.html","565251426839524720c862b7d08fc9dd"],["9a99eb64/index.html","fd6250feceaed70206df1e6f3da0bb7b"],["9ac96b1d/index.html","f3239f9a4a7872b8676a98c1b5bfc999"],["9c66e3e3/index.html","04006b20a316022bc509b61527496a90"],["9c67c163/index.html","b804ceeb7e2b691c0e8a41de6c002f96"],["9ee158e1/index.html","c94926b49932a7ab99198bd17e99126f"],["9f1d8b77/index.html","5efdd2a4db6533096a2bce55a81ce415"],["9fb00d50/index.html","c514847ecfb65ea3d3617c70923c05a1"],["9fe4182d/index.html","8ee0c27d2dcf81caa90a4d35208f6c96"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["a0e37ddb/index.html","670dcdd3f2fa97ad2d257f366744029b"],["a1e708e2/index.html","0077ac6db5dee3efe41e19ee9625ddbb"],["a20ca391/index.html","e02728acc18f05271cf9e4b541f1e6c6"],["a2c7bf23/index.html","30e4171c3c72d80c5fc411a5aa3a8418"],["a4b21e43/index.html","0a144e1a13d5d0797fb54def1d67ea82"],["a5bf9421/index.html","6db0dbed84ee31546eef371f7b202dff"],["a678482f/index.html","2cee79f20d1afecec01162e375b662c6"],["a74119db/index.html","367b31d92874f60311ef978ca0532b2d"],["a8a3dabc/index.html","4386a693405474737a7c61b7090c7ddf"],["a8a8763e/index.html","ae12a2c9737cbbacb1e4bcee80c6ff7d"],["aba8e35b/index.html","056ed7f2520171609198888b19e6047f"],["ada46a5d/index.html","73efede4a87f86cc0fdb5d024d111de1"],["archives/2018/08/index.html","aafe73551216526141db4518e8914af0"],["archives/2018/08/page/2/index.html","cc3d94e99b9c7459bb12c171cca88613"],["archives/2018/08/page/3/index.html","a6a0e3b05b032bb9068a41049cf87d5c"],["archives/2018/08/page/4/index.html","bb6edd1470ac0f2e308e10e3390f4d2b"],["archives/2018/08/page/5/index.html","827e209b927f2c32b9e80eacf2673475"],["archives/2018/08/page/6/index.html","ea33fdd0194e9f08be9c77502601a138"],["archives/2018/08/page/7/index.html","e6faa2603643c29bf34c75f53961e07e"],["archives/2018/09/index.html","fcdd563c3f133be799c029984bcee9a2"],["archives/2018/09/page/10/index.html","0fbb338d1ebed6093634c2e2caa2f497"],["archives/2018/09/page/2/index.html","9ff9e1e75e436da295814c62a73a0a7b"],["archives/2018/09/page/3/index.html","bbfead1f7d9c4b9f208f4568d3599ee8"],["archives/2018/09/page/4/index.html","fc1b5cc8e869a30c0cde12ba279fa020"],["archives/2018/09/page/5/index.html","496d5c501a5aed81482387484b9b6d3f"],["archives/2018/09/page/6/index.html","b5b5bce012bc6a2492fadb3480801744"],["archives/2018/09/page/7/index.html","7dbf26b631170700543d3ebbb06e3d36"],["archives/2018/09/page/8/index.html","8fedebe1c076425c8e025e3d67146c96"],["archives/2018/09/page/9/index.html","6ac85bfb2fc9eeb0104fe70b6368e259"],["archives/2018/10/index.html","c3a4435da74f985350e4d0512b446d54"],["archives/2018/10/page/2/index.html","34cac9c7c3ef1c0d604e6f954c2ea924"],["archives/2018/10/page/3/index.html","8fb1fe0618e47631f41ce0fb8cd5557a"],["archives/2018/10/page/4/index.html","1803f78a20acdbb6e31bcce7ce4f8c3c"],["archives/2018/10/page/5/index.html","f3dfc40faff7c5cc270c71e04c8ad69f"],["archives/2018/10/page/6/index.html","de0c59c930b0834bc4201766f6837dcc"],["archives/2018/10/page/7/index.html","ac48db1426f09c780cee9b484955eb40"],["archives/2018/10/page/8/index.html","f5797b272a54ba9d652aae76e07398b8"],["archives/2018/11/index.html","1b9cf4ef7552aa5d61e4b441b04227b6"],["archives/2018/index.html","f62e6261d765be973eaf2e7ae88aa246"],["archives/2018/page/10/index.html","7179e5af1d2d5aca21d75d125ed798c4"],["archives/2018/page/11/index.html","3a391b8b2d4cfb6c59669747664f0c2c"],["archives/2018/page/12/index.html","1f506adb557efdb2f59f623a2f485a8e"],["archives/2018/page/13/index.html","ba18904e626d0ffa46e779c30082fc19"],["archives/2018/page/14/index.html","a09ddba0eae38e901d6eb98d0a478ade"],["archives/2018/page/15/index.html","1ded2e5ae0a7ecc3ecc90a9648f87cf4"],["archives/2018/page/16/index.html","e3a6af56863adcc2b9338fa049325cf4"],["archives/2018/page/17/index.html","7d8afcc934ce240ec2c13623f587a69a"],["archives/2018/page/18/index.html","3452bf2df859c58d3fcece929b5fff8a"],["archives/2018/page/19/index.html","a9fbe12604455ad2bcde15087e828953"],["archives/2018/page/2/index.html","6e6001be5396bd2a649aa3fb3a5d5cd9"],["archives/2018/page/20/index.html","e3aa8f1593fad85013644f6721d29a8e"],["archives/2018/page/21/index.html","cc2fdb3812b689e344dda3b6497f21d3"],["archives/2018/page/22/index.html","88813f5ce1d3740401a5233bfaf2825b"],["archives/2018/page/23/index.html","c810b8c6072ad33aa67c13fbe40b0ae9"],["archives/2018/page/24/index.html","14a0c3fd8c3a149044b734ba0f9c66f0"],["archives/2018/page/25/index.html","203c0f02243627dd189c389cac801703"],["archives/2018/page/3/index.html","2a3d006de801a57617a442f8d9dcb92a"],["archives/2018/page/4/index.html","2d7a3a6aaeb20cd5111661205fe47c8e"],["archives/2018/page/5/index.html","d5d6cf26ba30e071a888b70259d5c27e"],["archives/2018/page/6/index.html","66310d49f425ec347da431ed08119cd5"],["archives/2018/page/7/index.html","5a55af0b75cd4acd9cbbd4e0cff3a475"],["archives/2018/page/8/index.html","416188c1e5eb81e37dfddb49343cf036"],["archives/2018/page/9/index.html","dbbd189ff0cf6d870ac3693508ece25c"],["archives/index.html","51526ad808407b0e73fcf6eaa440b368"],["archives/page/10/index.html","c9ae5fb6f9c72679a97b926fbe601da6"],["archives/page/11/index.html","ba5c42a62c305edbc72fdbb26f78ad8f"],["archives/page/12/index.html","0eb83d1a095dc48a741ffd7be2d1a15d"],["archives/page/13/index.html","21c1c93156e0d4be2fe2b1a818f23377"],["archives/page/14/index.html","dabc52a1af2bbc33315a2bc1cdb5c1b3"],["archives/page/15/index.html","820c541423fd1c789f2894c076166ec1"],["archives/page/16/index.html","85186b178f3af417c910ec2e6dc7ffe2"],["archives/page/17/index.html","2c642edcfcc5c58c2287e5cb92af6e8e"],["archives/page/18/index.html","39ef654292457d2541ea9185f7782a80"],["archives/page/19/index.html","516c5c51961cbb6ef57c95deaf58821c"],["archives/page/2/index.html","ff1575967694e74749688e8b3e5d8584"],["archives/page/20/index.html","5cbdcba1b02fdc6d60350fe485033fd8"],["archives/page/21/index.html","2d5af7eb41f9095f675b795e878892cf"],["archives/page/22/index.html","05d47f989b9568464f50dc80cc5749bb"],["archives/page/23/index.html","3de96303d1abd11e22f9c73c59718710"],["archives/page/24/index.html","5f91062a171d37b700928e78b6bcc320"],["archives/page/25/index.html","d56b772fae1c3152d8cdf909cfe0589e"],["archives/page/3/index.html","769428b50e70591c96aa2f3103686b15"],["archives/page/4/index.html","03e9bc6e390704381fbda354376a1e31"],["archives/page/5/index.html","0ee3660399a7589b43863ac1e92902db"],["archives/page/6/index.html","17e6336755ea49761db5410617347c48"],["archives/page/7/index.html","d08288e3e6b92edb7705c1d730254520"],["archives/page/8/index.html","e1a48806cada44759b22ab57e91f7faa"],["archives/page/9/index.html","c74f6422e91931b282ec1811dd453004"],["b01398e8/index.html","1088b77f643d11011f3538c33d7d7cd0"],["b4c7585b/index.html","4af15cbfe969764810f0b331c24e9c41"],["b513d267/index.html","3380bb193c85cf7770b4106d8af78182"],["b67f2784/index.html","093e673484218cf7b2e615d9c811fcf1"],["b6db0c64/index.html","105f633d6711b596febe9d5d6ed22c5f"],["b8d3ced1/index.html","915c41cf3393a61201aa45da8f18fe2f"],["b972d127/index.html","edbf07888673c1f9a8ee308abdc7a13a"],["ba46f35b/index.html","2b5da60a0b816775348b3878ef115e1b"],["baidu_verify_DfMf5XqJUb.html","62e052168d5deb65189d2ff561b55fa4"],["bb4502fa/index.html","a669a23c694d9b78986f47fa8b65e52e"],["bb984cd4/index.html","567f3bda6dae07ee5a16746e5e6662ad"],["be3871f5/index.html","806eef9f24a1fd670d33c10d5e7ab12d"],["be97bbf9/index.html","9540c416da6c52f9f7bf5f0bb0e987ca"],["bef6deea/index.html","3af4b5a54c21c465ec20a91e6d9b3935"],["c02d18a7/index.html","2c3d23223c4bf20b7a1be5039e6d1c6f"],["c0d275b3/index.html","9d5c5a189ee82a7ebfe57e87cdf1b8aa"],["c1989cb5/index.html","b0690867081502ab14fa3d6d6347f69c"],["c2176cf3/index.html","61d6a0fdd0ecfeb8c9d508688ffd3978"],["c2424f60/index.html","c345560674f7b8f04c947c12348ba759"],["c2af3f7c/index.html","58da2bd0ba8669b3bce5a0974e236e64"],["c3fd1e79/index.html","29f8adbf68ae8454f462f80d2a0394fa"],["c40a717a/index.html","1b48039e6aea1f32b7d53ed4708f7d60"],["c5057eab/index.html","74ef8a60f58aeca2090647ba7cf8bf0c"],["c746a48a/index.html","efe3fb67d2815d34a74c91e084b4d862"],["ca3f6ac0/index.html","719d275cf9ceb1b38043d30c64109f60"],["categories/dp/index.html","3ec0b1f11572606d7c6f55f9d05c6ecb"],["categories/dp/page/2/index.html","aacd40a004f83653077c9edcb2ba3721"],["categories/dp/page/3/index.html","5acff61196fec18941b67980e189013b"],["categories/hexo/index.html","c589ecc120b5b5e9a4c4f93ce38ae5bd"],["categories/index.html","26082005380e5f1b8dd792752224e996"],["categories/java/index.html","157dee27039fb0096dc40fcfaf44fd87"],["categories/java/page/2/index.html","19e463a01019abefc4d4e86fb9cdc838"],["categories/java/page/3/index.html","cee6988473e3db4967efe94b323ca251"],["categories/love-peace/index.html","f57f62f63bb88eca92b76b30be5d561c"],["categories/二分/index.html","f7e84399ef2d9e41318748e62c1aa786"],["categories/博弈论/index.html","437ba3d4e1bb97e3fb2f0dc84642da76"],["categories/博弈论/page/2/index.html","ae46b226435505f74eaccee679da8cd4"],["categories/博弈论/page/3/index.html","bbbafc8c120d26b4c36a59b7637922f5"],["categories/图论/index.html","20a529b7ccf90958c609940413fd22e5"],["categories/图论/page/2/index.html","0d2a3faf110260f871aa2a41e71bc240"],["categories/图论/page/3/index.html","3872e2fd6068c662daf763005399abff"],["categories/搜索/index.html","5493f6187bc9fe9369f246fdf162483c"],["categories/数据结构/index.html","b743b81c068ff324fbf1d1e205cdd150"],["categories/数论/index.html","b74823f0be3999857823bd6510732d0c"],["categories/数论/page/2/index.html","382a72e3c23f885a58ed7a2bc34d0e32"],["categories/数论/page/3/index.html","af4905cc4111dd7f6eb74dac9bca0014"],["categories/数论/page/4/index.html","1d402743dccb6e3eca101917cc91d090"],["categories/数论/page/5/index.html","417aa4b639559026ed4d1408e7e2a31e"],["categories/数论/page/6/index.html","7422201e1984af0a88a7336149daf6ae"],["categories/机器学习/index.html","472607946e931868ab429933c5f3bb52"],["categories/杂/index.html","4ddc8a8a626e95d29a368fcf1980c7e9"],["categories/杂/page/2/index.html","9ea63fe92ebd42b9b2d46e59c7303929"],["categories/杂/page/3/index.html","526347f5a0f383fc84c4488a6c73b9ef"],["categories/模拟/index.html","d535c51f8d4ee1431fc0ae764e68ed12"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","07e87acdd2f117a8e02fc683fbc417a7"],["categories/计算几何/index.html","f4c98337159d4687e3821905a97a590b"],["categories/贪心/index.html","01613363cae008cdd4636e933ae9c683"],["categories/贪心/page/2/index.html","52515a497a6efc6914695cac4f563efb"],["categories/题解/index.html","a345ed231d818c92b9d7ffb320e70559"],["cb821a33/index.html","14aebaf47c39e73aa62ebb464552848f"],["cbd59ef1/index.html","ed87fab91de7d8953061d3733f7a5832"],["cd27113b/index.html","b113a4e22c2a2f036a0441062ccf58d8"],["cdd10d6d/index.html","cc5b245ddeb9a4c78570bc9ad8e18ed6"],["cf682b8e/index.html","5911a8d9780c9a32d1d17d2828d44b0d"],["cfe28c6a/index.html","5acaf172249bde8257285ebf14b734d8"],["css/main.css","115f0bf8fc8d51acb2ee1184c092d3b1"],["d0f16a5f/index.html","3e0a392e01734768df8c09803e8e19be"],["d2c81766/index.html","12c2659e2253a7d4c01adbda29c202a4"],["d2d140b5/index.html","2c58f3843dc9bab7ffdacbf1474f4f60"],["d34e925e/index.html","2ade274f3dafc0e0f35fdcf4a889958c"],["d377a60d/index.html","b7155e7f649ed6302f3c1a3e572334fd"],["d5042e55/index.html","d365e6993ee68b5c78686b5105d55724"],["d51ad0f1/index.html","7f47c6c41a40bf5a7f46e039cac84d89"],["d655b5fc/index.html","b2c41e0c2c99d7e7a03d0e8930507153"],["d67f02ad/index.html","68ff7d4bca7ba208482d6df7c494219c"],["d6ce1fc2/index.html","408924d63fb5ffb14894a58dfa80491f"],["d6da51a9/index.html","56e233b4cf51770cc330466c8942f54b"],["d7ffbd1c/index.html","e77f96ebb4e092c53dc2e3916d9ac7fa"],["d971ae59/index.html","c882f78cc19312d94ac91b4c17351a9b"],["dbf07d5c/index.html","836cc6ba586a32e3991b03048fd377d0"],["dd1d064a/index.html","34e76dafb6ccb19524a74e178f48410f"],["dd814372/index.html","4c97ba946f118cf9a4bb8f407603bb4e"],["ddee45d/index.html","ec6d5fb7b3e64c2f47b264b63bed7901"],["de762ff3/index.html","698b45289c5d39feb4e71b013aa66671"],["df82d1f8/index.html","4d16d98cc1f773e4a541541ccb1d17ab"],["e1d4a8b4/index.html","9b24950ffa3b21f3f925a5c4415cc919"],["e31679e2/index.html","10fe7a036f1847dada05f8111f3313af"],["e4c2cc13/index.html","d82f44296d9f72548575e2ff755f1d9d"],["e4d2c7ba/index.html","c39bd8304df04ed82f7d39e2950a7ad2"],["e5ffcbea/index.html","f5948999f13c9043ad77c19b4dd982c1"],["e612ace7/index.html","47f3cb02a5ad7c86e449ffddd2d5493c"],["e73bae86/index.html","8dab704f8e2943a8405ec1c24d08e44a"],["e7a0c86b/index.html","4e18df8babe3ac54a05fe4ebe5375724"],["e7b555f8/index.html","4ef43b9e154ee742d6c25b45c22ccdb5"],["e81fda88/index.html","009a4a42d4bfd8e13f27c104f699f707"],["e85a11e8/index.html","c83b2c84c5a1dde6e9e713421ab88f81"],["e86890fb/index.html","7009d91e9224b0d471ebc16ab6e2075d"],["e98fffcf/index.html","276a96a845191c78250d36a7d7a2c051"],["e9da39f8/index.html","0e1fc03b35caef5b4742a054019c0b6a"],["eb18b91b/index.html","16684c285e5fcffcdceffcc60b632aad"],["eba1fb1b/index.html","1d979d071dc5fc374c21b17d18ae3f80"],["ec404005/index.html","7811a4c48739842c759e9f05583b4d09"],["ec4e8b99/index.html","740944978c5e8e5fc1de2780ac643493"],["ec8b12a4/index.html","aca9867e72fc203ba4933045a1180dab"],["ef2a130f/index.html","a00ae68e23a07f118fcca991084ceabd"],["f0565075/index.html","ffb2a3d46e0b721828ba57ed34d5705e"],["f0d0bafc/index.html","56f5c600403d2d0793032af0ac5532b9"],["f0e39cec/index.html","aa14972ec88da491cbc9794c449ddaf9"],["f1a4e5b1/index.html","a79f42a84e8a673985de53cfbd383a33"],["f1aab9cf/index.html","a2b73653622b75c6642dd72568ea32fa"],["f292e0b8/index.html","ff41ec095d283050839e295069a27c4f"],["f32e27dd/index.html","99ddf9b4f67995ee4210593e6b2bf1bd"],["f47c306c/index.html","a41c6d80564ffc948c49ba97f1602344"],["f6227d77/index.html","5afffad5869b600872a5cde2199ed101"],["f699b617/index.html","176084e5eeed01a1a42ccfe0e4edf67a"],["f715085c/index.html","c4ba0aff709cb0387554727ba4eba580"],["f7f1f3b6/index.html","fc6c156d415b26d9816c618d6239b7c6"],["f8170462/index.html","d4d9509cd13cb9e488045e68c464b122"],["f8eca34c/index.html","0f68751c5e417da8e97feeb7fcca7687"],["f9161795/index.html","0fdfbb6f72ebf07e5d9a76df3ce08e1c"],["f9c3ad7f/index.html","e76f1c46b3607c5d756c965e0121812c"],["fa5f812b/index.html","09705b7fdc34c1d0b0d597ebae0f4a5e"],["fab7cb46/index.html","e185f0e2297344f3f651bf0b8ab3926a"],["fb0210e3/index.html","64ffb362b8cc99d89a796593a23460de"],["fc584b3/index.html","85d8ba655d68dab134e772436b4e86ac"],["ff888e9d/index.html","11c4caef958a5f8d7e3295e4f6273bbf"],["ff9df0f5/index.html","e0c92ece9bcc5ecaa3322f04dc890f21"],["ffac8316/index.html","fb92adf2eeec59e198b84d1e53573de8"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","77424420001eef5fa23b185e33905eeb"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","7e0eec2f5c48f792de7fee7c1d4c9439"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","241f250bbedb34300dbdd5ea3922986a"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","07dcec8e4e5a277957956be9c1f92f1e"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","3ab070e2a88e93a051248e1055ccd899"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","b164c712ed20ad0f1fc634fa2db9d4df"],["page/11/index.html","9a8f5e5fdf9617c5d98a2e41db266f2d"],["page/12/index.html","d02379a409dac138a40e369760dd9756"],["page/13/index.html","b82ccf05d5ea63ff9b0bcd5e0552f3b0"],["page/14/index.html","3d1ff4111eb2bd718a367cb1fdc2d605"],["page/15/index.html","883c0a24e5011c528306d3b083cec8a0"],["page/16/index.html","1e921b0956b61884fd71ef724a571383"],["page/17/index.html","cef903d3247e2f9769922bd8a20d3768"],["page/18/index.html","dfc74d2e4a76e5e3e80729c177a56fee"],["page/19/index.html","fb0b7e3121d4212027c8c48b5a8cf17c"],["page/2/index.html","125067cd6d1485b2e9cf9828ab6c26e9"],["page/20/index.html","25b0b1836b00bd2cddad3ae2c6c6ec2f"],["page/21/index.html","4d90afcb247e9dbc6a7611064d42b145"],["page/22/index.html","c6f07d3568568d04591c55218e070090"],["page/23/index.html","a5ed259f7dbba7dec3fa715d007a50f6"],["page/24/index.html","b33c6f0c8d9620c8877e5a0e01012b37"],["page/25/index.html","dfb48540b5ade45edb8732aae21d6ac9"],["page/3/index.html","3a464a211149c8fb14705ad3131fe464"],["page/4/index.html","3e11654bc468fe3673ebf66af9e4a53f"],["page/5/index.html","9c12ac3d55ab1eda306284d5bbbe1ce2"],["page/6/index.html","adb241297704d704aa91e045c4e23892"],["page/7/index.html","86813f6aaf192b5f7d04a1aadee8b37d"],["page/8/index.html","63a5d2a23c10e1a0eadd118260a59ecc"],["page/9/index.html","d7841682dda487f8bfecc9d33ab42a68"],["something/css/index.css","a26eb29138b01de0374e5e5f0ef2cb46"],["something/index.html","cb426c074c84854c43a2b20a18b7347d"],["something/js/main2048.js","65edecd4a470eeefcabc6a5bbcca87b9"],["something/js/showanimation2048.js","d17d55c85634f199cefe9119ee0ed981"],["something/js/support2048.js","e23221d71dbca087ef9b970bdbe697b3"],["tags/Floyd周期检测/index.html","55d8afdd2cc39a8dbe1a363aac01e070"],["tags/IDA/index.html","5de782cad523573f96529b38d44af297"],["tags/Manacher/index.html","2388b1b58844ab7295267dc0e5f16d61"],["tags/Pollard-Rho算法/index.html","352645be55d4a5a7d15bb9e3a5f93ad8"],["tags/Python/index.html","96c80fb83acabcb50a1ecd1cd605e745"],["tags/api/index.html","f90c87ce25167fa5246a6b10fdee9284"],["tags/bfs/index.html","fc9a4dd2a796685585b493fb566452e0"],["tags/bsgs算法/index.html","570884142c5dde81550b7ad5c0d286db"],["tags/cf/index.html","3226b6d9862bff954904f8ef000ac1ff"],["tags/css/index.html","ce9183d2db52ea692069206b251a29ff"],["tags/dfs/index.html","f4665fcf76be177a67d938d4d4cffd4f"],["tags/dijkstra/index.html","53e3edfef57d78a7b260c47eb8e7fd4b"],["tags/dp/index.html","3422aa046c259d93444ba64c836e4fec"],["tags/dp/page/2/index.html","86fc8b48d5834e498e3722a53153dfe6"],["tags/dp/page/3/index.html","e17414f99a04f4780f457485de78b6bc"],["tags/gcd/index.html","9795bc318df8c6506a69dcea836d9ec5"],["tags/hexo/index.html","8f3828f064e3bfdf0ce81a4fbb032b6a"],["tags/index.html","dfd73891746037afc4593cb97ba84312"],["tags/java高精度/index.html","369b477c85f90705f2d0058db1ef04ba"],["tags/java高精度/page/2/index.html","7ae93de3a0bb63f71efde06add7a4644"],["tags/java高精度/page/3/index.html","cc501cc71c5cdbf86cfe3bd4ada504b5"],["tags/k-means/index.html","4a1981fc5c75ae076e06519ae419ca48"],["tags/kruskal/index.html","a8b5621abc71e91c943c038d59635397"],["tags/lcs/index.html","2442a0a11c6bc68f8057822288335921"],["tags/leancloud/index.html","63eae2e3bfc1de0cdc21a0f35f4e379f"],["tags/live2d/index.html","fe306e512db366692791eb4067ae18d9"],["tags/mac-OS/index.html","ee02f6ffd3c830f976154f8977b11abd"],["tags/prim/index.html","37c5622016a26b4f7092aba8d0106a3c"],["tags/revolvermaps/index.html","5de276ae274aa5b9888ae6c051c12c54"],["tags/rmq/index.html","0df2d88188e626e98a19e6d2a3ad1d82"],["tags/sg函数/index.html","86f6db8023647e6e081ad833f0c8c4b2"],["tags/stl/index.html","efc246023e0c202261be2aa024e8fda2"],["tags/stl/page/2/index.html","ea25ed2eacd24953b0188a1e4f6a8237"],["tags/三分/index.html","93c6a46096377c1a05c065f9bf0bbc21"],["tags/中国剩余定理/index.html","2a62b9d36d3c42b45ffb2c5ee59fe22a"],["tags/二分/index.html","27d5e9955d41e9b662c845a0f999f36a"],["tags/二分图/index.html","154c2648e4da8ad37ecaf387731c0897"],["tags/作业/index.html","c5d102afe2678eb2432cfbf78e30ddda"],["tags/全排列/index.html","e471aa65c8381c3a0da2e2ac2264bdb9"],["tags/分割平面/index.html","d0f44b1858d1f825619ee6aa8d30431e"],["tags/分数规划/index.html","86c84b2f6f990142e4f15a3e428fbfcc"],["tags/前缀和/index.html","36e0e24d3abefc87e4d07e8656558e4c"],["tags/勒让德定理/index.html","f8258b065f16a88bd9d4881b330a44de"],["tags/匈牙利算法/index.html","c239c9272d4d0e0f89819e0e0c4b1454"],["tags/博弈论/index.html","32caea868d50e5ed336d313c37de8ac3"],["tags/卡特兰数/index.html","4848c1653a903fb695fb3a8f2bd1003f"],["tags/卢卡斯定理/index.html","d68ef65a9e897d8b6b10a4b9bc71754c"],["tags/原根/index.html","8429750641e5287c6e2c88430fc57101"],["tags/四平方和定理/index.html","b77fddf3df49160b5d9574726e81ba81"],["tags/埃筛素数/index.html","7bffbc5fc83e80756abdd04be4d95f4c"],["tags/威佐夫博弈/index.html","1b4a10da3da7fe7ff3207a53600ebfd2"],["tags/字符串/index.html","6f0e23bcad15a76905762f8fbd465b96"],["tags/容斥/index.html","d4a7c78898952e90de670ebcdf992679"],["tags/尼姆博弈/index.html","49faff0427fc7261a158b9c479ee1c06"],["tags/巴什博弈/index.html","1bbdf067e16b4df0cb28dc8d4843d5ab"],["tags/并查集/index.html","5ff07ed0942be8a5eb9eae6b494315b5"],["tags/归并排序/index.html","6253e19b0fd9c3a73e2d980cdafe3f2a"],["tags/循环结/index.html","6d0c401f0cb5050e053e74c90d3c489a"],["tags/微信/index.html","7ec0cd519e03545a608db783745d2b06"],["tags/快速幂/index.html","3d59b876d12a212fd8c3ec9fdc3ff3b3"],["tags/思维/index.html","0e29d1f11046731478cb7b292c1716f8"],["tags/思维/page/2/index.html","cfbdbdfe7f8b12a0b1ef05bfecc6483b"],["tags/扩展欧几里得/index.html","8b3601fe056c9b6dbdb27dede249dbac"],["tags/拓扑排序/index.html","0954f3241177b00eb4045c53630f0408"],["tags/推公式/index.html","5c41face39ff8af40925a03df3bcb4fa"],["tags/推公式/page/2/index.html","76e63af6087101ad83d6a2779347d1a0"],["tags/推公式/page/3/index.html","dde60acb6f30840a1d2f8e198070078e"],["tags/数根/index.html","acac558a0b3376558bfe0d7bb2fdb876"],["tags/数组加倍/index.html","d48cd96f7af50761d1a940dbe6999ef0"],["tags/数论/index.html","201c56a5456b181fb67eb77417ab1c36"],["tags/斐波那契/index.html","1f32b6a577c4a6c0874f4943b2fd7427"],["tags/斐波那契/page/2/index.html","0444108522df8cd3d257c43354b74b6f"],["tags/斯特林公式/index.html","cc1506fdc2784bed980019571f560ee8"],["tags/斯特林数/index.html","4a3e273166148d11feb1b76194737eeb"],["tags/最小生成树/index.html","19554697bc78a0df4e46217860df325c"],["tags/构造/index.html","efad9b3981391b8a709174724a2c8a81"],["tags/枚举/index.html","572745da304f01a2981d5d653a6df347"],["tags/树状数组/index.html","febe6e46d1a30b48a810576e02267460"],["tags/模拟/index.html","10db2729d52f80326e46c85d75569a9c"],["tags/欧拉公式/index.html","13b592fe6db7a6baffdb690b0bbf6f8c"],["tags/欧拉函数/index.html","dbe1464c4cad354696d886c5fd711d0f"],["tags/欧拉路径/index.html","a9324ca3a2e7afff51baeb166844036d"],["tags/汉诺塔/index.html","7fbbb60a2f241130c227735b024e26f9"],["tags/海伦公式/index.html","5f59beb86c6168a59b5305f9a3e049c1"],["tags/生日悖论/index.html","885705e9c0cc9318875957aa52b8abee"],["tags/矩阵快速幂/index.html","5ae9daaef4f0b9c70e6f23f5e3aa0937"],["tags/离散化/index.html","b6df115a01d048070366d3c42568c45f"],["tags/米勒罗宾/index.html","fd9f12801b2bdda8335ad41a9110e546"],["tags/约瑟夫环/index.html","c989853015ea4ce329c3a8998cea9bb6"],["tags/线性基/index.html","a6dfa9b4d6582c235c73e513f70bcf03"],["tags/线段树/index.html","f689703742e52f7556a0f35392fcd2f1"],["tags/组合数/index.html","98b1ad6c11710f34e43b06c340491353"],["tags/组合游戏/index.html","a9687680d7abc2b584d357c7ea7a0772"],["tags/背包/index.html","5d4404d46275e019bc45bb74b2d302f5"],["tags/莫比乌斯函数/index.html","f25ad43ec6b89893238790cc0d5426f3"],["tags/计算几何/index.html","51db1d46d0d3ac7a7e19bef89872583c"],["tags/贪心/index.html","37663090a31483871f31ceae077b10a3"],["tags/贪心/page/2/index.html","3e2c0beb318e07c93aef79ea66e74c88"],["tags/贪心/page/3/index.html","6beace8af733ec100894cd1c197cdc67"],["tags/逆元/index.html","0d90d42933e78a46115bc8205e4a45e0"],["tags/阶/index.html","466112ee824d1e80638f8c8c365ee57a"],["tags/鸽巢原理/index.html","783fd530ac02205ebb6c0374e16ac2e2"],["tags/黄金分割数/index.html","d224b1c30741e51b80b81c37a83ee36d"]];
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







