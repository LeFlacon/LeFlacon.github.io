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

var precacheConfig = [["10336297/index.html","d881fd13ad179d8512870ab990a30fcb"],["1076b80c/index.html","56b28e0ccbf27fc76ae6262077f27510"],["10a23843/index.html","a757a863547045d98dce324e44c6a887"],["10f322b7/index.html","2fd8e720f92163b1eecbd9d232e885bc"],["1109bacf/index.html","07536546855b1537e0fa473ea2e1e2cc"],["12fb71da/index.html","679a276d606524810ce599308e87f1df"],["15885f20/index.html","4753d69f23cdb4b37dd7182f0608fbf3"],["15c1232b/index.html","8b0a541207e7b45d7e68267bb412d86f"],["16236ee/index.html","7081036e17ed0bd564dd73f02aaf7223"],["163226ed/index.html","3789c2cf4a63fad497dcc90010bfa147"],["18f146f5/index.html","2495b77134b14ad6d30991a0a442a2a9"],["19356a39/index.html","60830d5ea00dc71a5cc762056511dd36"],["1d6b220a/index.html","d69eb2b33dd44741aa6583d1511993df"],["1f726e05/index.html","1c52b9bd19fac7d0639966a5464f189c"],["205f0ecd/index.html","dd88dec2169beeb211bde367d4f38c50"],["216acbe1/index.html","9b31f6d97b04b98ad80b24ffec71db04"],["223d29ea/index.html","47e7b16718572eb950670b00824bd4f9"],["22830a9e/index.html","e9bc1ff17e141686fbacede9778f81d0"],["23c9f6c3/index.html","cbe8375dd1701770dd84de43ef5c6737"],["276c2267/index.html","bd43eae43ce3f9162393f663ad8aace0"],["276c371d/index.html","2f2df41850592bb8d4234636ccf07d90"],["29b25bed/index.html","15aaf4dc164cd3cc14a6d1dcfe836c68"],["2c002055/index.html","e797e7fc86b3697479b2a360353f943f"],["2d3ae01/index.html","d2ae948e00fc3dec493fb50f38494c22"],["2d58815c/index.html","447a19cfd747f07efa7968473a55d24d"],["2e9cbb0/index.html","6697735b7b5a44320754bacfb0de18f9"],["304f1fc6/index.html","ddc3f54cc8d64e9a576c60c70a303aab"],["33eb241b/index.html","783b7a41bdbd0c96cb5f7e085d2a3d4c"],["340b38ab/index.html","c189fafa5be67112fd5e983a404ee5dd"],["34784cdc/index.html","ac3bc894c487e82082e23b7b2b582530"],["34822d81/index.html","f24e20ca4687da6987b6a8b68bebf600"],["34ddef5a/index.html","854f06f69f18ba4b991778e8045b5c46"],["34f920df/index.html","5f1491e363c9b391df2d8d0a39c15dec"],["3697a1c/index.html","76eb81d6ce405f20d3e86ba58e3cc81d"],["37192e8b/index.html","2bca58aee6860192290a377b5c13c256"],["37630519/index.html","3a6a4152ffc8e250c173580b61fa48e4"],["3a23cc5c/index.html","9087484191c887627cebb3e916069ebb"],["3c67f84b/index.html","abeb4a392f931ee9c6a67c0a9b1c78ed"],["3ca6f02/index.html","89fc38f49f2bd1ba256e30bb19c24003"],["3d8d44b2/index.html","098fd8bdbffa1737021acc95b47a7705"],["3fb087ea/index.html","bd72c3e1680e52444ea731d68ba9179a"],["404/index.html","9273048f6d8e8b898ce3ff24a1388a71"],["40687d49/index.html","24643db6ec07a959d628144415ad1933"],["40d6aa63/index.html","c7fc9750e1c6e1b1a73c8eaa07430487"],["40f7970d/index.html","06862d461dc37f4cbfe12e192f1ad441"],["41d56d9c/index.html","20752c99219ecd5b6c6d16e950054836"],["41f5723f/index.html","2d0a8f11d63e6225913c50af39801b71"],["420f3cff/index.html","5ce3a6c194dcdd119b59206c41fddef4"],["42b4455d/index.html","9e3bca7d7de1e8431579dd94e3c96f79"],["42c39770/index.html","a924d3d9b9d2ebafc903e37476b4b5c1"],["438d787/index.html","8116c2764a85fac878a25e3e6c4a2702"],["455762c8/index.html","d50d966b16ec7ea7a53f54e3c9e44bc2"],["47a64668/index.html","66036c210c9f2f6914ae263842c2d502"],["4a010063/index.html","60b4feff8de761542c4f3a7c19bff488"],["4b67d3c8/index.html","1b3e7e7672f09a2ceac608b0819cb153"],["50df051/index.html","bd7e8ea4959e99016cf9b4dfd4c215d9"],["52580325/index.html","696014f3ca53d33becdeef558a19ea45"],["52b56662/index.html","dc41be883fd591a20b90c82294636f81"],["52e47f72/index.html","40c9475841c6f0e9ee984377baa68b73"],["531fe264/index.html","013738653d7a6f026435b15c8b89ccb3"],["560387bb/index.html","567027aeb88fe7f550e3f81baad40a1e"],["561c553e/index.html","4e522197a162a74c79b68a36b3e4a8e2"],["56954db8/index.html","e695993de06f6a14930999245ec58f0e"],["57427b30/index.html","83aeaba8af6268466ff32f855dba54ee"],["589bd519/index.html","8506dbbc54449726d2a11950ca7b809c"],["59d4cd0/index.html","06d07f7c93fdf86c95b937b328faead8"],["59f6b91c/index.html","b6f5600d29ef392fbeb6ced473edf12f"],["5a29f513/index.html","8b6ab989aea7f179681ba445ddfc7f74"],["5a4c73da/index.html","8d1065a7671104cd38eed2eeac22f92b"],["5b7386c2/index.html","b7d6fbc9f9ac854311207ce5115d7693"],["5c6528a4/index.html","115dad1a8fdebec3b8a0251e5c61405c"],["5c944241/index.html","c84c2c5a7b4a73a3d3b71abd6b4472ca"],["5f826ba6/index.html","da6c53a84d62a4bedcc10d8636d180c6"],["5fc91746/index.html","c32f03aa1804fb9f33ba89e89b999380"],["60992a21/index.html","eec04810642b6d814fd9f572d7dd686e"],["61030f3f/index.html","31f445e666a9a29edb44ac9d2e08eaf6"],["61acc2f3/index.html","91f81eb26c5b41a1f1fa2ded7a5a7440"],["61e3cbc/index.html","808b07c3dcbbc1efeddf5e65e776cbe9"],["62f8e345/index.html","bcd81996d62ddae12cc7cc166e8f6e7b"],["63dfb318/index.html","32c0fbfe307a6279f68692825ead4668"],["650f0a27/index.html","b4f952e24fd8222719ad794977961003"],["655cb7bd/index.html","df9b4296a1b23ea452b20322ba34e02d"],["659aa8d8/index.html","5258245d1af0317cc464c758258293b5"],["65c1781f/index.html","3e6fd960ab3a1f0339082579913eaf7f"],["66dd1680/index.html","63245c2353c34fe7b5a7a62e783b79be"],["67dc8b75/index.html","502d58cfa9c20501b83f4c5d93701cdf"],["68903b21/index.html","8a4ca5396a166e4ef6ee49c7cc83bb39"],["68a46f0b/index.html","332d2a9efa69c88b00ec6038719c1e17"],["68e48a7a/index.html","f8824b9452e7fa383b538e6ef874f399"],["6a2b981f/index.html","2dd66436d27435548390261e5bcfbc1a"],["6a4cab08/index.html","d4bd8cc2b66dc77d8efaaa7c5a6ed263"],["6a5982f6/index.html","cff4a5f3299efb5c1f64df6578c2ecd6"],["6bb0247a/index.html","abd0e4c541804571c6550f5bd916ee7f"],["6bcdcc46/index.html","7d2a135f8af2c52ec66e7c9efa3189d6"],["6e572fe1/index.html","701ac7c3348133b7f67ae2d587a8036f"],["6e6d7226/index.html","1fc7dbb55c7cdbccd3b3a428232ea0fa"],["6ed0cc8f/index.html","65d4cf589f4c2f96dd87bd7eeb06593b"],["6f66f8f8/index.html","5a7d00e4f8c9a50b70c9ddf93e26c50c"],["6f6ab2c9/index.html","ca39079063521905b65e4b8cb0b32e4e"],["6f93207a/index.html","537f85324278cf8b3b07035d75484dc2"],["70032e53/index.html","4d386059f7ce6f90ef02ec98d88ee16a"],["71a9f0a2/index.html","e774d6f7ec05c58658657935c838af62"],["73d62e33/index.html","4d9819beaa6cdf95b716fc47821cf0fb"],["773303aa/index.html","832807c77cb90ca7756257e3afdfb024"],["783cca3a/index.html","f03d122b1b69e75320418e9bf802c167"],["784bc526/index.html","df23b9efc49d13e2a1a415d392cb6bdc"],["7a72e0ec/index.html","a0eb4a90dea53f59034cf94eec455c16"],["7becbf63/index.html","2418a9d48433ecb96d8069fd5306a71c"],["7d2b0472/index.html","ee722c0df48963c60b0482367ce4dff9"],["7dfc273b/index.html","201dcb81bfba5897e22abfb9381d7698"],["7e7621ef/index.html","963ebf8f2b381e1ee963ef52f15f5aae"],["7e7c23c2/index.html","48929a6ec5a6ed36d3f3231df13180b2"],["7eacad98/index.html","6bcff9234d1c42008be85a523c4af5b6"],["7ecca125/index.html","cabbffc7ff927b079345efc5ee41f53e"],["7ee1bb3b/index.html","ad15021933077cf2e188ad4b8defc9d4"],["7f6818b1/index.html","1ba7bbfc3306504f95ba2b6c9b9a6bc6"],["835a9757/index.html","98cf4f08c525dc4f3db86c5d1aac0448"],["83978c3d/index.html","d8e7e71c02452e50b0f61ca619ce1bcb"],["8434b274/index.html","7e6ec3daf77ee7e3a7921cdd55b26084"],["84b8f7c6/index.html","63b38fb95cb9b4be758f24438e5ccc80"],["84babd30/index.html","d439dc1c9315a069e70ef09e7b48638b"],["86eadb67/index.html","4a5c6a51374813d95a3c515ae370f325"],["891ad037/index.html","d4830058c74ad678fd2c885af75c76a6"],["894818a5/index.html","1e2c79b0dbd407a31b6f082dc992d04f"],["8b10921e/index.html","516bc5e7ad4b3a243bcefd9133f6971d"],["8b8f3dfd/index.html","d0592fea9631f55438ba8291d4d2e71a"],["8c5ac577/index.html","42e7936502df2cd13bfb00623bf5e9a5"],["8e5f1388/index.html","f93ef87bec72b82cfd6f223c5d981e70"],["944a2722/index.html","95ffa8b6d163f106d045b4187b20b652"],["94b377b3/index.html","1fe6b52b29e122752d48efe9cd355523"],["9562e52/index.html","f9d32efd3bf2b1fe8578b2c2b17c5e80"],["96c4a6fd/index.html","30c7a48b27b14850027114ca7887cd5b"],["98ac8a82/index.html","cbf7668e00374bd8ebfcc34e280b9ce2"],["99dc77d/index.html","9a8bdb5b4187d78abde9fd503b43ec26"],["9a99eb64/index.html","2c307b16714a064c2fa339d492fcf98d"],["9ac96b1d/index.html","74bf91185f1340883f01a3538596524a"],["9c66e3e3/index.html","2da5d94971b36a0391b1de341e06b51b"],["9c67c163/index.html","8cd5c1d915a0d1e51a7eb7e723fb9bf5"],["9ee158e1/index.html","8a60ddc32af51590c4ae08a8c42ab59f"],["9f1d8b77/index.html","c0ed9e86911d72cb1292d4f1ee7f6904"],["9fb00d50/index.html","534c9719ea7739ee8057dd418b85517f"],["9fe4182d/index.html","a2947405a5645ce974aaa18bc9c5c138"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["a0e37ddb/index.html","4e7d903684079e0ceb84342e0e0b76cb"],["a1e708e2/index.html","a58c7a0ba418bed57068efc4c56abaf3"],["a20ca391/index.html","b282d4327c5f4a1bb4f795386409fb53"],["a2c7bf23/index.html","44d1359259fd605b8a5e63b41f010242"],["a4b21e43/index.html","5cc2427be6090bbf5b2292c9e44b99bd"],["a5bf9421/index.html","4f6012c883474a407542d85aaac2148b"],["a678482f/index.html","8f7a8257dca6053f58e1a7a38df3fa26"],["a74119db/index.html","f15d086b1d80a59d87a1727cc6a447ca"],["a8a3dabc/index.html","ecec37c43d57986a5f5f979c1aafdb47"],["a8a8763e/index.html","49cf9394ec2f728e2aabe944fd4dc77b"],["aba8e35b/index.html","39a0641d31c145a4ac2fba6f65d08a6f"],["ada46a5d/index.html","a9932a20ea1281479e227aba323b192a"],["archives/2018/08/index.html","3be2d3d772126fca15bd6f38d6f3ff4a"],["archives/2018/08/page/2/index.html","efe2883b148c0f15b638e971bbee5d72"],["archives/2018/08/page/3/index.html","4fd56c873383d0d2ee39f81f9ef250f1"],["archives/2018/08/page/4/index.html","5f3708583468c4722191bbf992cad138"],["archives/2018/08/page/5/index.html","2d8ce3894af388501f4ddebb0143a112"],["archives/2018/08/page/6/index.html","0deef05d66296d2230e3674126398bd1"],["archives/2018/08/page/7/index.html","3539aacfe4722dfbce7169761602ae8c"],["archives/2018/09/index.html","6453c12bd815b54bc2e89100e4bc43f0"],["archives/2018/09/page/10/index.html","3ba5be705e41785cebd29b437ce9dde1"],["archives/2018/09/page/2/index.html","d8de0426559be7f213dd1ee93ecb89e8"],["archives/2018/09/page/3/index.html","fb52628928733ea4f0a8581933360e5c"],["archives/2018/09/page/4/index.html","f04d756f6bb4bdd984fda0cb50b1d557"],["archives/2018/09/page/5/index.html","ce4d2bd5f53d8fb3c1c325f411cb8f31"],["archives/2018/09/page/6/index.html","7862ebca7caecc65b1fa2a0e32170457"],["archives/2018/09/page/7/index.html","1a14086ec0217dcb2b4fdd61573c3a7f"],["archives/2018/09/page/8/index.html","ce420ae9ced19e833708d052c9c119ea"],["archives/2018/09/page/9/index.html","d343a1b6a484e6f0f9aa68723b6d7857"],["archives/2018/10/index.html","ade9e3aeb0a6932b09f214385849c314"],["archives/2018/10/page/2/index.html","1ba90150d109ef696c889461c54c5a69"],["archives/2018/10/page/3/index.html","35e8d111ec870ab6515bf0450567d7ef"],["archives/2018/10/page/4/index.html","6899315d28d16e3ee59163b7d84f2829"],["archives/2018/10/page/5/index.html","be345e5ea44a8c1a3adfa110546d6108"],["archives/2018/10/page/6/index.html","f197b4425d3f83f8b0ddd19c9ae40623"],["archives/2018/10/page/7/index.html","9e6efd3cf0cfc609f5a29af9162061bd"],["archives/2018/10/page/8/index.html","4a576673bb86347cce015de68c72ec2d"],["archives/2018/11/index.html","8c8b171ae1e3ca1c40d6a9293234ed82"],["archives/2018/index.html","8fdfda973149fd48a0b56cec572e500e"],["archives/2018/page/10/index.html","69e8c90725adb39c2842852baa746c0c"],["archives/2018/page/11/index.html","6bb1aed422cfeb5e6632bdfdd512060c"],["archives/2018/page/12/index.html","02317ee91ad168e1b300b607730bfdb7"],["archives/2018/page/13/index.html","19b9736013e356eb347d00664d8d20b0"],["archives/2018/page/14/index.html","2b0fd121eda07ee4c8dc8baae6a6ba06"],["archives/2018/page/15/index.html","f453ed5aed4ed41492edf2a6cd6022f4"],["archives/2018/page/16/index.html","6c02d11c55ad96f70923f0db8db2bbe7"],["archives/2018/page/17/index.html","ceaae405f1344e86fa9fac1978d39a4d"],["archives/2018/page/18/index.html","fb9c8ed60fb83a24d774a284d64c3679"],["archives/2018/page/19/index.html","81789a1e5b08acedc2a7b5375e36a098"],["archives/2018/page/2/index.html","5d4b184f25133aea20fed710e4668927"],["archives/2018/page/20/index.html","fb8fec20a6222aa263d17e15aac7bb70"],["archives/2018/page/21/index.html","34b91793ed536a0475915f4eb2f95c0b"],["archives/2018/page/22/index.html","f006aee5ee7d1f33e7b28add22107427"],["archives/2018/page/23/index.html","3a22f6240b8774eb4e963b222c5909fc"],["archives/2018/page/24/index.html","5984416d110a2c7d0c0f42fb3ec4d4d0"],["archives/2018/page/25/index.html","7ac6e3cc61c5f9d908c4f65c33d07c13"],["archives/2018/page/3/index.html","b66200b5544100771af3a933434876ae"],["archives/2018/page/4/index.html","71017b064f12531fe24f61975617b48c"],["archives/2018/page/5/index.html","38715cf992053365ebacd649a4037431"],["archives/2018/page/6/index.html","806c8cd53f0484d47ddc8ee69509eb38"],["archives/2018/page/7/index.html","34ada46a816d2de278e685d364a812b0"],["archives/2018/page/8/index.html","89ca0d1f85540746a5decb42ef0323f8"],["archives/2018/page/9/index.html","94108499868438c34010b91fae9e8d5c"],["archives/index.html","5844bc87d172f676d5f0e3cbf8c4e819"],["archives/page/10/index.html","c74cd59a0de90eacdcceae3e1e5fcf1b"],["archives/page/11/index.html","b52a21a276ebd6221fcc2f1e512193c9"],["archives/page/12/index.html","9af0a3d3e5b6c91af25914c5d80e8f64"],["archives/page/13/index.html","3f522f50e1ec61e646c3d7c3e1ed5a70"],["archives/page/14/index.html","ce2ecc4521793bd8cda421f6358b4534"],["archives/page/15/index.html","3c5170aff42036222047d0f7fe150e8c"],["archives/page/16/index.html","86fc65853d9a84a6a7963108396849f8"],["archives/page/17/index.html","9dc3249d0d6a046a266fae1e4927536c"],["archives/page/18/index.html","02a3cf3cfc1a962613966de6f3c59e87"],["archives/page/19/index.html","267470c956cc28786b1f684a9ce4e17e"],["archives/page/2/index.html","024074c67b7b275dd73263a5e302425f"],["archives/page/20/index.html","f5bfc3d5acc3ea604115ab6a7d47ff5f"],["archives/page/21/index.html","d17862dd98ed918daadecb84d178d757"],["archives/page/22/index.html","3eaf37b64c95c1a3d633e3bbae934e2c"],["archives/page/23/index.html","228a3d6e6f73f788c268be2545594bcd"],["archives/page/24/index.html","865848343bd0233a711c3565741977bc"],["archives/page/25/index.html","563675e6ebc656c4f92d734e17082989"],["archives/page/3/index.html","44b45724dae068cd98740aaf4db31128"],["archives/page/4/index.html","01b4d50276e3e4bf9e6e2c7479c3d6da"],["archives/page/5/index.html","44d45f9fd6e70886b55c49d870f98df1"],["archives/page/6/index.html","0ff31d844653db6c63ab9679250091cd"],["archives/page/7/index.html","a4479295d0a95a25f719a6365511e250"],["archives/page/8/index.html","fb356814dd5c68098f0fce8a56770e23"],["archives/page/9/index.html","ea170cf1aee3888ce46abc88e7e51126"],["b01398e8/index.html","28a00ca62becead681a986a1ddd069b9"],["b4c7585b/index.html","29a0fa1277466599a6f26c339093b6ba"],["b513d267/index.html","7dca5d2299c0024b2ee2a78ac9bcfd70"],["b67f2784/index.html","1022ac0eb9422a737afee4b8ca2fc848"],["b6db0c64/index.html","471d8aed7e8d0575307a7b8a4db0b141"],["b8d3ced1/index.html","03f0c2aab03f2a64486ee7de71b7d53c"],["b972d127/index.html","883393b5b0e0b648457a9de603055fd2"],["ba46f35b/index.html","b1cf3bb0193ddb9f3a4cf27b80fdb3a4"],["baidu_verify_DfMf5XqJUb.html","4d9579a40d9f7dd1eea139404e303fb6"],["bb4502fa/index.html","8ebd1221df379a2f9fcff54c35bca4f7"],["bb984cd4/index.html","17605ac2f31720f53bc2575ca451b715"],["be3871f5/index.html","c18f5b1904af691c8befdc83870cbc72"],["be97bbf9/index.html","dd3a58e548947cafc6e6e214a0bb1a5b"],["bef6deea/index.html","9460e73b959f0833cd015d73bc7ae668"],["c02d18a7/index.html","94c15e3e8e20d331f48a09f0098b3673"],["c0d275b3/index.html","47157c0e1f6c225ac882ff1a44816d4c"],["c1989cb5/index.html","9fba3f14c1ea88b80481b1de07162fac"],["c2176cf3/index.html","88e69870b3e545f63ad6412d2104e4ac"],["c2424f60/index.html","b0482031fe9520c846319ac64eede2e8"],["c2af3f7c/index.html","700290bde136c9cf28f7d1a89a5db872"],["c3fd1e79/index.html","3254e7ed496dd353b95b96faeeb51855"],["c40a717a/index.html","c610218f961b1609c01a19ede4aeae69"],["c5057eab/index.html","f3f87c76fb17ff362b1c56c40df7992b"],["c746a48a/index.html","0d0b2bb3aa53418ae8dbfc597c452491"],["ca3f6ac0/index.html","0c508076bdf37a2426925cdc9243e873"],["categories/dp/index.html","b6016a5e4ead4263202ae2be4c921234"],["categories/dp/page/2/index.html","28fd21237749c08b36aff955593cb29e"],["categories/dp/page/3/index.html","adc85020c1518b77abfaf98406368d9d"],["categories/hexo/index.html","ed6f6fc4e97c04bf4e2f6e076da6e330"],["categories/index.html","8d02b341166613a95b48c9ded4eb3293"],["categories/java/index.html","724ce2daf8b2725798f7da032bf6b67d"],["categories/java/page/2/index.html","feab4e418dab99a220ce5bbcfaf15d0e"],["categories/java/page/3/index.html","f7b9ff96782e22fff9ab383642bf1ff0"],["categories/love-peace/index.html","2c1db2e11098931b0c3c87e420246b55"],["categories/二分/index.html","60e2892e9fcc02b52c23db64ebb2edb2"],["categories/博弈论/index.html","d4fc70656bced7f0e024d77670e07b05"],["categories/博弈论/page/2/index.html","0f7fd299a057280e62211cccca1ad2a1"],["categories/博弈论/page/3/index.html","6bb04fbbb2fa125011a02bada794dc1c"],["categories/图论/index.html","6fc61b5109ed0840e15aee59d4e314ca"],["categories/图论/page/2/index.html","11aa51ebf604a946273da92858b4a4eb"],["categories/图论/page/3/index.html","ba5df6bf1e2fce98f17772e1629d5bf4"],["categories/搜索/index.html","4534b73c54a6c71d6242fbe82a89c85a"],["categories/数据结构/index.html","326b600650876ee9e9739b093ac06277"],["categories/数论/index.html","eb3f1d0ebd7b3ca0ac93c7a5a3c13ed0"],["categories/数论/page/2/index.html","93d70eb24ddc39ae3337283dd6641234"],["categories/数论/page/3/index.html","b135240036af8c8d1141a1a7965a8e3b"],["categories/数论/page/4/index.html","db77798af1456949bdf944e81450027d"],["categories/数论/page/5/index.html","fc0b05e190f6274fc19919ddafd1974e"],["categories/数论/page/6/index.html","d7a094725d5d106f5637194159b640c5"],["categories/机器学习/index.html","a02ca4fb9a6b471b5d351d4ad46f0b26"],["categories/杂/index.html","b1703f4c7e208260537605b7c0b45163"],["categories/杂/page/2/index.html","6b8a09c9dee77b627d8280e0f7a9cb29"],["categories/杂/page/3/index.html","81a6aa86ae37266a074864b6e9d4f9a4"],["categories/模拟/index.html","902a90a3b1b8db3ade93e9e97feeaa42"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","edb8e976a480978b68c68eb4c24f9d4b"],["categories/计算几何/index.html","5759ff8df444caad83912f001ec67829"],["categories/贪心/index.html","9ba1ad396ec795e234284c6d8a94768e"],["categories/贪心/page/2/index.html","b22791ed334d984919cae6c64a5c682a"],["categories/题解/index.html","2d21c80502bf47cb9b67ccac13d493f6"],["cb821a33/index.html","daeb7b14f0d1dfb1e198035ec7dd277d"],["cbd59ef1/index.html","1be3a7f5e70b5e6401c1a88e90e1c5ae"],["cd27113b/index.html","e14f6084457c743218698ac00c48d7a1"],["cdd10d6d/index.html","cfc2eff284c03adb8da4e60dc23b295b"],["cf682b8e/index.html","a5cea833b1a49758dae7fc756b7046b2"],["cfe28c6a/index.html","ebf8865561c71774263e34c374404d79"],["css/main.css","99f61f1e2b03d1286fe01c338897c4aa"],["d0f16a5f/index.html","9f7c4cb293fffe80280b2a29c69e3b5d"],["d2c81766/index.html","0f68997624770a8726e431055531e9be"],["d2d140b5/index.html","da2363a00ffe509b96c23d6afc9d6ff1"],["d34e925e/index.html","93309b1ef326538955f6d3ec967f5983"],["d377a60d/index.html","ab65503d6d7a8f346c720cd957ea3e12"],["d5042e55/index.html","41d1934a068da08d024c139498024379"],["d51ad0f1/index.html","f67075aa7a9fa375d5995d984a2308fc"],["d655b5fc/index.html","646c783e7d5201040a405cc5a9762f3a"],["d67f02ad/index.html","810614b81c4a0c2156ebd4f2d003795d"],["d6ce1fc2/index.html","81db9e098cf85af5375b38d68c45810e"],["d6da51a9/index.html","aa84cd48d28f32b623ab063bdd592625"],["d7ffbd1c/index.html","52471f03620e6f655578c9b2604797b9"],["d971ae59/index.html","10ee4d3930ed7e5963aece46d255312e"],["dbf07d5c/index.html","e54464b535c8cecb2ca9050af1b56129"],["dd1d064a/index.html","bff4f41c8eaba4f454892a2e8ebaa73e"],["dd814372/index.html","c445de6000650820f03acc270879da14"],["ddee45d/index.html","35102dd2b1ddeae0ef0dc7a627aeb273"],["de762ff3/index.html","992f70ebb2ea2c89ce0ddbf223008e4a"],["df82d1f8/index.html","8664523a0b91c1475e37fe772356f819"],["e10dd693/index.html","77d42b93b0f0ae3ec89d5ac75ce3b5ac"],["e1d4a8b4/index.html","5bfc8439ca5092a4b33860781c6dc456"],["e31679e2/index.html","dec61cc6f662c39ff15ce4043b38d303"],["e4c2cc13/index.html","30361e01bb5173a77327c52f095a8274"],["e4d2c7ba/index.html","b6c86e9a4fd17d834204315848c00c67"],["e5ffcbea/index.html","5cc100c244d00bdd0ec0e19031002a38"],["e612ace7/index.html","0c75687cc1d0039df3847503727c7a99"],["e73bae86/index.html","b2739ca714808ef39ba96a23034bb98c"],["e7a0c86b/index.html","db186b32d5c8eefeda2f673f88ec4510"],["e7b555f8/index.html","9706dd309509344fa91eb43b3dfaddad"],["e81fda88/index.html","07cd6ae5ebebf15c831a8095c7866105"],["e85a11e8/index.html","859ee65049a43ccf1143236ba2613936"],["e86890fb/index.html","ad221bd9bab8d2f4e03fcc90090905dc"],["e98fffcf/index.html","382ac8e2783bf42bdc75715901e0461f"],["e9da39f8/index.html","3820867f0b1705beae02cfc15b48ea01"],["eb18b91b/index.html","fb0d2bc0d60644a2838b261e14fa462a"],["eba1fb1b/index.html","a82a18a85bb96611276ef0770ed419db"],["ec404005/index.html","8df75c376499c9768ce530020cb12ded"],["ec4e8b99/index.html","44c021098dc5379b93b01d09b65403b9"],["ec8b12a4/index.html","3867f70c03df6353ff533043c0a44c0a"],["ef2a130f/index.html","9b09489a8b82bb96baa47109bbe27a8b"],["f0565075/index.html","b4ec0b1d06aa2febc51cdb467aded959"],["f0d0bafc/index.html","a571c15d423a753e42948850311fe9e4"],["f0e39cec/index.html","42ca52361ef3d3320e0ad5bad11f0ce7"],["f1a4e5b1/index.html","8cc68d18bd914e1ea46c6d3caf6aa4a2"],["f1aab9cf/index.html","2b1b9637e24dc7262c68ae8cd6f14d90"],["f292e0b8/index.html","54005dde8d07ce8375b51ecb4d7b385c"],["f32e27dd/index.html","e694d5c1c476a34ce1869dd350ee45f4"],["f47c306c/index.html","bef03ef82457d04f71119abe47cd8311"],["f6227d77/index.html","636c3fcc168e6b7ac9562e1ae3eab67b"],["f699b617/index.html","fcbbbd45b9514432b0d37a6b61118e5f"],["f715085c/index.html","b483e93f8947bfc0aaeb7289619165a9"],["f7f1f3b6/index.html","8c81ef98b859e8bb95be49ca1eb17ed0"],["f8170462/index.html","27ef39cb029a3a55006f5ebc4300f574"],["f8eca34c/index.html","c898acfcc114f9f41c173b7a06e624a8"],["f9161795/index.html","d6cc0892e09c3feddb0ef837739a2df1"],["f9c3ad7f/index.html","89b42acb59eea334161e7fbae3428e5e"],["fa5f812b/index.html","8e55c9fd6c82432d5c26fc25ce7be83b"],["fab7cb46/index.html","e5921e5316924c26c1a96dd9918dfd3e"],["fb0210e3/index.html","0ed7f2b3aa259a8dd879a2b664a35d30"],["fc584b3/index.html","01f71af312589634ff3ca1bb2c268c33"],["ff888e9d/index.html","5e489affbd27383afbe677b3e70fc1aa"],["ff9df0f5/index.html","49a6f781fefab47ef4a7ef6f67eec9af"],["ffac8316/index.html","28c3a9d3e3120523bd4995b7acf2f062"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","21aca7f3aff6f59ac477194837277977"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","4cc403294abdaff480395719d0de7367"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","0ff28a8eb0f7e11f273fe9da79e29381"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","af2a27359126519a8a7d24ae063b74b0"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","fc77b88527e938408c94b6f989197f93"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","48515f2173e27476de3a72c5745bb66c"],["page/11/index.html","e3a9397b1654454a44bd1953c465b50b"],["page/12/index.html","83386a86c8a7bb527954020ca48c486f"],["page/13/index.html","5f72b55aa4f44600a8e438594d1a1673"],["page/14/index.html","c9065451220d47f9c968981c85e6b83a"],["page/15/index.html","c71bc9dea4b26448eb928171e895d080"],["page/16/index.html","d7cb5d0e4f3291c5a4d5a1e5e80389e7"],["page/17/index.html","6d6ace6cd250a7c7263da7aa54896524"],["page/18/index.html","b5cf14912a730ff12a71de3cf099b96d"],["page/19/index.html","dec21a6f2b24ae90e2a13afaeb2ddee2"],["page/2/index.html","9da6d246bf9d2908548f8df6e87577f3"],["page/20/index.html","f4322dc69ee4325045f9c8e8403f26cf"],["page/21/index.html","ea8cc3130b3565793e2f91fb90233bf3"],["page/22/index.html","b10bd1e76ac737de3b68a8d48cdab857"],["page/23/index.html","6657ddcf167ec4c944c196f399bcbc6f"],["page/24/index.html","4f7f4c581bdeeee2f83120c9dd9829ca"],["page/25/index.html","ec67baf3274265c455032ede4fd6700a"],["page/3/index.html","847c2c4387f85491d6ff72107e97fa4a"],["page/4/index.html","2cac02c99811b929dede575b1cc92d05"],["page/5/index.html","49dc428141a86f8e4e855f40a5aa2a95"],["page/6/index.html","3642d1d581d48cd86fc1c250c9224a17"],["page/7/index.html","0c3f2a7d92b5165115255b3cbafddcc7"],["page/8/index.html","b28943acb5faba64ac58862660d5ea54"],["page/9/index.html","deccced526753f7fb04d55d72fa18d03"],["something/css/index.css","a26eb29138b01de0374e5e5f0ef2cb46"],["something/index.html","55ad89a5fd33d12800444b4b492de297"],["something/js/main2048.js","65edecd4a470eeefcabc6a5bbcca87b9"],["something/js/showanimation2048.js","d17d55c85634f199cefe9119ee0ed981"],["something/js/support2048.js","e23221d71dbca087ef9b970bdbe697b3"],["tags/Floyd周期检测/index.html","3e77e7617099edded9dcb8a957e81839"],["tags/IDA/index.html","65d08136dc16b289e853b511cd55e30d"],["tags/Manacher/index.html","6799a24b113415c28dc7a875b2663f12"],["tags/Pollard-Rho算法/index.html","5a5f77519f803f4a8ad0c48114f288c3"],["tags/Python/index.html","523d17c9f04d1031d8c4a1cb165aa6e2"],["tags/api/index.html","72262d1bd2f772211b31bb67ef514e30"],["tags/bfs/index.html","2cf180d4f2c18f25d97d7ee6d8fab601"],["tags/bsgs算法/index.html","897d49a598002a1039aa01ab1c2d7a49"],["tags/cf/index.html","3ab0996efff977909e83775fee6a54b8"],["tags/css/index.html","9184be2645106badc55f27637f7c0a5a"],["tags/dfs/index.html","c01fa2be61ae47f719cde9cd6e2d4c38"],["tags/dijkstra/index.html","438e00da08a8586760277a2d56c6f252"],["tags/dp/index.html","4739243d23450f63facd5465d866481e"],["tags/dp/page/2/index.html","dda2d598fc9fedc020049f696131d5d5"],["tags/dp/page/3/index.html","9f2dd36d9895407fbe492fc09205d77b"],["tags/gcd/index.html","28c86b40a33aa42f5e5c80040e58afca"],["tags/hexo/index.html","35fea1bf15c6b1c3089cb73558880a18"],["tags/index.html","c11b03ffa02cf59c2d916238a98b3418"],["tags/java高精度/index.html","99dd9db1647f01343ef979a95179e759"],["tags/java高精度/page/2/index.html","195fe531ba3f74cb95cb94fd39e7a18c"],["tags/java高精度/page/3/index.html","5cb8b7e7becc8dab44fe5fa349602a06"],["tags/k-means/index.html","8476ab04ce49d86b26937544be377695"],["tags/kruskal/index.html","ec1fe86e38e1b0026adbd1d83ab1ca49"],["tags/lcs/index.html","dd00b240b0c607cdcd26d347863c2bbf"],["tags/leancloud/index.html","f5afefe81561a1404d6962c812113071"],["tags/live2d/index.html","d52185e554d9132aafd07618858227cc"],["tags/mac-OS/index.html","b2401d48bde0da6177b62de0317b0f88"],["tags/prim/index.html","cf6cb98f327f49800ee9c5100c928efe"],["tags/revolvermaps/index.html","720054ba7ef880acf82e2dcad98ddb09"],["tags/rmq/index.html","150f5e84b474ee23e42e4672bc8dc591"],["tags/sg函数/index.html","9658ffdb480d0a260182b3c26b256c31"],["tags/stl/index.html","b493e5654efc92298d26946cb4f75708"],["tags/三分/index.html","420ab4a0f57131b69170026e3a4ff44b"],["tags/中国剩余定理/index.html","b879f8c1bf64eaa36941f1970b368b39"],["tags/二分/index.html","207b58381bfcb5afe54f7893fb1785fe"],["tags/二分图/index.html","471f819514e601ee2d550c6a416ae6e0"],["tags/作业/index.html","5b9dc04e349806818852fbd417906dd1"],["tags/全排列/index.html","c6ff47c6b772a010612e8619acd88111"],["tags/分割平面/index.html","5450d9fc1a9821f9fe9c53b9e902dfd5"],["tags/分数规划/index.html","1f2699b28388a4d7f2b5d14cb401afaf"],["tags/前缀和/index.html","53a6c6b0de45e4d8fd6fc97c8f76f7fc"],["tags/勒让德定理/index.html","9e5477bc06bb9c38f496980832b03252"],["tags/匈牙利算法/index.html","6df3f5fb9de1861a9775ed73611e9a02"],["tags/博弈论/index.html","f5ebe2e35ecd1df82bde08531d3cf7e2"],["tags/卡特兰数/index.html","33af2f3ff7299fd9d078f726d2fe436b"],["tags/卢卡斯定理/index.html","03e38a7cf5dc646d38e2c682271292c6"],["tags/原根/index.html","863ae98b08c5009ffbea97a7c4fdbb7f"],["tags/四平方和定理/index.html","a4c857566394c2b262d45dec7bbc08bd"],["tags/埃筛素数/index.html","5c8053bb87b0ec20a3a643f5a1286e45"],["tags/威佐夫博弈/index.html","9607ca038face6c2e2947218ae7bdadd"],["tags/字符串/index.html","f6444efb44499ea4c75cc9a3ce46b315"],["tags/容斥/index.html","971222e217bddb79c0912f5f0f2dce8b"],["tags/尼姆博弈/index.html","487b401761eb5af03eafbd52bf457500"],["tags/巴什博弈/index.html","d3f1c6ad246954c65b38a4405950c662"],["tags/并查集/index.html","766efa382dd774e3a11283947c58f2ab"],["tags/归并排序/index.html","1f265674a2f190535b4f3ab403257c90"],["tags/循环结/index.html","954496956869510dc8658fa9fe8df4c8"],["tags/微信/index.html","14680800136aa93bcbfe943ff74f4c26"],["tags/快速幂/index.html","0fa4d5deeb848d52ecad340cc9baa2e3"],["tags/思维/index.html","d6b5ffc09d9a17fc934781c7c6ec7ea1"],["tags/思维/page/2/index.html","fa2d723c6b9c0002726d2e1d24defb74"],["tags/扩展欧几里得/index.html","3d8bba5ca79cfb26fb0be40ae17b8eb2"],["tags/拓扑排序/index.html","f1523da5eb322c987f409a82866b474c"],["tags/推公式/index.html","b8e56fc586da6f15264da655cb64a30a"],["tags/推公式/page/2/index.html","96d4c806de53c3c2110143adacc438f2"],["tags/推公式/page/3/index.html","62fcf1ac505a734fa113cb60bcdbda63"],["tags/数根/index.html","7a4058824f7d8a8528cbf36b1c1b9ff8"],["tags/数组加倍/index.html","39461eff6d2a0ba1c5a8410e55f64a53"],["tags/数论/index.html","201cc805d7024d49017f3e0aeb0a1e5a"],["tags/斐波那契/index.html","47c5913d14d4f74faffd76001c463633"],["tags/斐波那契/page/2/index.html","350943cf921e300fefcf840f8965d6d9"],["tags/斯特林公式/index.html","ba636073a572b72f3692a2c3b9cde7f6"],["tags/斯特林数/index.html","b76e7e970d82a70f347311f6069833f4"],["tags/最小生成树/index.html","6bc1382ba6239e019bcb5c91bb2a80ff"],["tags/构造/index.html","b253a94399c1c4ac78d0ff27e993fe3a"],["tags/枚举/index.html","0e6dd25ab061c931dba3cbba3be93611"],["tags/树状数组/index.html","b1a9bd00f0a3ec0f87c11b1fdb39a70b"],["tags/模拟/index.html","d084b84fe5d416297a0dada74bdc24f5"],["tags/欧拉公式/index.html","36f33da63c12b546a1b624cb80a64135"],["tags/欧拉函数/index.html","05c8ff16c975621390ca963397656400"],["tags/欧拉路径/index.html","fbe77b92082be50167626fb9a8335bd1"],["tags/汉诺塔/index.html","97977bb4f2418dc349a513cda9f07f13"],["tags/海伦公式/index.html","8bf2916c2fb38c7a3f679ee9779f6032"],["tags/生日悖论/index.html","a8fbd1ad108f77936a26fd8f6221ca1f"],["tags/矩阵快速幂/index.html","17c79c515f9e212ffeea655038fbd861"],["tags/离散化/index.html","29663cf2efa1008ee24e102ef41c170d"],["tags/米勒罗宾/index.html","01225e391585a9d8cc296492a4d91ab4"],["tags/约瑟夫环/index.html","3913b23044d84fce6a65defd06ae8962"],["tags/线性基/index.html","e802967b133ef27e28dd4874fee8715e"],["tags/线段树/index.html","1d4634d93f304962297bbdb8f8226dda"],["tags/组合数/index.html","7a6475b6ffbf8042704d1069485ab2b5"],["tags/组合游戏/index.html","f634b2fe32b8aece49f42381af9b5b4d"],["tags/背包/index.html","d4e21cf0d82cfe831affdb849c6f6cdc"],["tags/莫比乌斯函数/index.html","dffb157783ec9426a5d34aa4a141c292"],["tags/计算几何/index.html","e42037e4abcacb5dec2a2c0dc1fdd041"],["tags/贪心/index.html","dcf671392d0d76214d559586c6804710"],["tags/贪心/page/2/index.html","8f78d53c1ff0ce58e944dac66a964d3c"],["tags/贪心/page/3/index.html","db0c47359207037b8c5a35f41ebead0e"],["tags/逆元/index.html","4efbf8c07c455968b5af84fb9a92bb79"],["tags/阶/index.html","7cfcea4e346598e5e7cb21a3738c0526"],["tags/鸽巢原理/index.html","0641f7a0cccfb4a43e60b99af7adc37c"],["tags/黄金分割数/index.html","5eefd515a80ae48f3497db9632752664"]];
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







