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

var precacheConfig = [["1076b80c/index.html","a3cca1327651b1c1bbb5caad7d86273e"],["10a23843/index.html","17e3276bf31507f1cc5d0dea0a6d9d29"],["10f322b7/index.html","fcb501a4f87cb609ce7402a1e9071a9b"],["1109bacf/index.html","5f00b62f3ed21ddb64fc1987d8407783"],["12fb71da/index.html","6e42a6df8b07aaac531a630e500f7a4a"],["15885f20/index.html","dd1f69db2d048805d4519b9d8c0c02b2"],["15c1232b/index.html","767c45221045b3b36656f18cc5b8d5ac"],["16236ee/index.html","5609bc3a346e497137026ba4d5f4b404"],["163226ed/index.html","f90b54d9e0daf3346fc225bad470feb4"],["18f146f5/index.html","6317f38bee254e53f98fc6da88917806"],["19356a39/index.html","fb8fbf60ca241c015efb239d9fc345a1"],["1d6b220a/index.html","14a65a5cb8d2825df7ef5023b845ee1b"],["1f726e05/index.html","b46f4d97eaf6887feb7f4bb9b8838f49"],["205f0ecd/index.html","79ae7ef85af461075a1898a266c07c26"],["216acbe1/index.html","ef60e1dbcc5e104df3587ee23a46c1c6"],["223d29ea/index.html","d1f561d098f372c805af4a6081ce7e11"],["22830a9e/index.html","c7f9a446229430dc41107afb2c3c2828"],["23c9f6c3/index.html","35d447cb09aa5bc731e3cbb126f65d62"],["276c2267/index.html","18f55c58b83fd77e22816b746d83b1b8"],["276c371d/index.html","4073afe08e4bab6b4c03666a93151885"],["29b25bed/index.html","993ef2bbc8ebfae78b9625b756e1d81b"],["2d3ae01/index.html","3b85d2ba735e5d9ecfe5be91f4985b24"],["2d58815c/index.html","827f6da77cd1ddc2923f55bff314c783"],["2e9cbb0/index.html","d1d60e0c961697d10dab74eb4fa3defc"],["304f1fc6/index.html","edc2cd2bd935a0e0176b6a77a5abf9ad"],["33eb241b/index.html","5e0e7530ef94af9024e26e4acda7a7d6"],["340b38ab/index.html","e3b52ed872c1869ffe7c218819183e77"],["34784cdc/index.html","34bc20ea327e1dba94004592841f8326"],["34822d81/index.html","147bf9708db7d965daf2b2f1ab623b2b"],["34ddef5a/index.html","65be828fab2c345539e4eb8c0a47a781"],["34f920df/index.html","340e547fdd52e52a77b041220e99d63c"],["3697a1c/index.html","e403bed7f6a445475959f3e6a2bc6f7b"],["37192e8b/index.html","6c8cbeec77daed2cc1a301a3d1ccf480"],["37630519/index.html","c1e98c1ef2c303940c64a1faa39deb16"],["3a23cc5c/index.html","064ad2107950456e596f5c9056e844f6"],["3c67f84b/index.html","2f07949f26043230e5b4f317bf19d25a"],["3ca6f02/index.html","3f1c63c24553e3833133e771bec0c5d2"],["3d8d44b2/index.html","10d6ee1a2c403e57b27f20016ef23856"],["3fb087ea/index.html","56b2e27ac0dc0c59a82cfdc30d476d27"],["404/index.html","eb5ddcf7f465bea77ca277e5b5a76d32"],["40d6aa63/index.html","318c4f632f433f337f6ef4fb755beb3f"],["40f7970d/index.html","8c4fa242cb8878f68774f38042178811"],["41d56d9c/index.html","0bf5838fae750525c6764aff1fe79a8f"],["41f5723f/index.html","533bae486f1b0a2428a982abc2b45258"],["420f3cff/index.html","12c763f888bd34800f8461f4aa3c444a"],["42b4455d/index.html","b0ce8f9e9c48b8abc7b83ac40c2ebfa1"],["42c39770/index.html","08ae8dcee04a40573b1fefb5e2c6e0bb"],["438d787/index.html","2b22c25e9e9f37c71be8dc6dd25cf75e"],["455762c8/index.html","01fc7ae47bc94efa233e0103f4f48344"],["47a64668/index.html","e325195ddf58f98fb27c32b134d8f1d7"],["4a010063/index.html","f27518dad76ac6a460ca08b48984dc81"],["4b67d3c8/index.html","e058c15df5144be1083fd443160af747"],["50df051/index.html","3cf1fe2c2204d1b7a468e3d4e556043d"],["52580325/index.html","fc596acfeea6afdeea842223d008db24"],["52b56662/index.html","ac7e6cf8f755101cc109d119ad5d5cee"],["52e47f72/index.html","d194055e8607b12c11fa2c9287d39878"],["531fe264/index.html","94571b02ebce1fe9a512be41e1722623"],["560387bb/index.html","426a14053f5db2cb335d870597d58af4"],["561c553e/index.html","0db323885ea04bb9a69ee5ac785df468"],["56954db8/index.html","b4f92da05898354cb1090aff2cfb96a5"],["57427b30/index.html","ea77f97103473736a4ce093f664089db"],["589bd519/index.html","fb2e4388047af9523d7b6fed52fb29c1"],["59d4cd0/index.html","bc1197ff72c851be912fba8cbb52ceee"],["59f6b91c/index.html","0fd385e38d496a8bd9851a453f18eace"],["5a29f513/index.html","35216101c49ee58ad27638a6893ad461"],["5a4c73da/index.html","6028b166d2674b44ac2ac831c277c1c9"],["5b7386c2/index.html","1259919646ca7cadb749c182b5bd9261"],["5c6528a4/index.html","5962a87cb909c60b0a4ff8bac2d2d240"],["5c944241/index.html","199786c1d9b3454a8fe3cbb595d5a3ac"],["5f826ba6/index.html","0a739ba42762068a778588603b99d31f"],["5fc91746/index.html","eab8b669f615eb268ef689c0d4c12222"],["60992a21/index.html","45526f9727e6f3fe4314577a549d4ec7"],["61030f3f/index.html","34a2b6581f1709871a1f6d93448b8846"],["61acc2f3/index.html","8c2f2bd01d5e9c5f8a73338c1b49da08"],["61e3cbc/index.html","e87eba16626f4f2cf7100a32164c041c"],["62f8e345/index.html","f0a9f46a79b8c6920ec7900ed3e36210"],["63dfb318/index.html","bc0d38ea93c189d8e5da31004d62da57"],["650f0a27/index.html","627b9be39542fd6bc1aac872bf35ee5f"],["655cb7bd/index.html","cb147387179603313e4976c983debe4d"],["659aa8d8/index.html","0f0096eebd84808cb9653d9c5d0ced9d"],["65c1781f/index.html","590b3bf7fbe408505a710e28fcbb3d18"],["66dd1680/index.html","acdb8ee112205cddd9d4e5d8357bcc75"],["67dc8b75/index.html","c297f773958acc173c8f07b08a812dc9"],["68903b21/index.html","c955e3bb19d17970243a4a128daf095c"],["68a46f0b/index.html","1cf1efcff7aeb8749c6ce0f891d6f637"],["68e48a7a/index.html","1a0cdbac10a8745d54f678b73265767a"],["6a2b981f/index.html","0f336e3fef716f714560ce2c6d459cf0"],["6a4cab08/index.html","352cc2db35199f9cc781070b7efe6a3c"],["6a5982f6/index.html","55833ce422f308811510f1f491e75aa0"],["6bb0247a/index.html","e67e0a974aa8babd91da8fb77cd28a44"],["6bcdcc46/index.html","d523d72db50c8f2f9b1dda36e0da8b22"],["6e572fe1/index.html","1e1c54a24b4db73d000f441464f9dbb9"],["6e6d7226/index.html","ed11bb962958f153e946203b4564b46a"],["6ed0cc8f/index.html","94e0eaae60d00c17c143489b6929f957"],["6f66f8f8/index.html","c8fe4f0674553b6939aa4f9edbfca07e"],["6f6ab2c9/index.html","515961a97d6e599270b35903554e8b6d"],["6f93207a/index.html","e64c679d5234297926f905d42df56066"],["70032e53/index.html","227ca01f474de2ef36d4382c380f6cfb"],["71a9f0a2/index.html","3c7adfbf0c676c939c454bc16d352d04"],["73d62e33/index.html","0d2498068c8f83a8ae70acd3c1b237eb"],["773303aa/index.html","0787d0592113c3686e795e0a4b432aa9"],["783cca3a/index.html","6ef5506a5716f654fda3b932c6783e1a"],["784bc526/index.html","b1512f029b1ece1fd6588bb033cf0821"],["7a72e0ec/index.html","d2b293aa84ce0536dbacb28e736e5caf"],["7becbf63/index.html","57bdd1c12a7a968bcd5533224c206ed2"],["7d2b0472/index.html","216987f81d706b2b0ea88b138c7f9953"],["7dfc273b/index.html","86250107ccfbd46cf332d0a91cf75968"],["7e7621ef/index.html","4e8784c2bc7c1155af1977a97f407f0d"],["7e7c23c2/index.html","9ba07ec40c72f9fdef51d74bbc87cd5a"],["7eacad98/index.html","d04a5e142ce9a32fc02204384c2a53fe"],["7ecca125/index.html","ad4329041d451dbb2d94a24dbb318cce"],["7ee1bb3b/index.html","c9d67aaf1c2ec5db92794383f38a6539"],["835a9757/index.html","66ea0faea6d14aa710f3aa4fb55632cb"],["83978c3d/index.html","595ff5d2e077a7ccc703460f8ccc2a85"],["8434b274/index.html","b8efe1e8152c056d86d6223e1b96ebd3"],["84b8f7c6/index.html","b40910b249d19da69a032244d3ad2ca9"],["84babd30/index.html","add1639892231339ef31d60de833d627"],["86eadb67/index.html","337febf1674ebc177b5e3009a2a18c47"],["891ad037/index.html","d2f5b2949525569a56db4cb8d6c16727"],["894818a5/index.html","f82d0e8c945a4fb9cab0e130ccb43d30"],["8b10921e/index.html","035d7aeb38d0de95b7ad49407fdde04f"],["8b8f3dfd/index.html","59d12d065c4b5a320d551f93b7aeb663"],["8c5ac577/index.html","2527c342aee694e836a5cce0c572730b"],["8e5f1388/index.html","c8f0858535e64265763d125dc00cc635"],["944a2722/index.html","0712609e47c2ee1e6e4f1474d893e943"],["94b377b3/index.html","290de6719adf6106255fc7984037913f"],["9562e52/index.html","2847e6a5123b9f2682f21ee50623d318"],["98ac8a82/index.html","f39501c4bfd35eac3478aec80c42499b"],["99dc77d/index.html","a533f1293bde8ac8322b424fea4ffbc5"],["9a99eb64/index.html","e0ca691cc177d47e6ee0489ad0e9557f"],["9ac96b1d/index.html","24bb159a822b86ad36c79d1c047b0ac5"],["9c66e3e3/index.html","827db1ef50d5753d6d004d4b58ddfd59"],["9c67c163/index.html","d41a6ca900c508409925a981780d4d32"],["9ee158e1/index.html","9c5b255d6a2b91fbae6b1e4163c8ed55"],["9f1d8b77/index.html","465343ac9eba9ff91e41780cf84e085b"],["9fb00d50/index.html","edd15d85c505cd294fb0dd09cdb7c8b1"],["9fe4182d/index.html","96b1679409a1bd74263ab87ce4a7cfd1"],["a0e37ddb/index.html","6f202a25c4b524fb4ec0933fa4f29746"],["a1e708e2/index.html","9387ec6cd11542afc13dd5753062cba5"],["a20ca391/index.html","3114714a237dcdd50842ff0ef6ddf554"],["a2c7bf23/index.html","21d80c9d44401e668a1d84282833d388"],["a4b21e43/index.html","69e962140ea36451b0d41603cbdcd59d"],["a5bf9421/index.html","2ea90d40de73377870a52e6e2654a5eb"],["a678482f/index.html","5291637b270e27fb7d2604742589768b"],["a74119db/index.html","444da780d69f2e080b0cd4eb62f288e8"],["a8a8763e/index.html","163e50c4c6ed58c34aee8b513723775b"],["aba8e35b/index.html","5720c89bff2f1597bae24f0e698e6335"],["ada46a5d/index.html","2d964256401b684371e37738c81e089f"],["archives/2018/08/index.html","aedbd3908559c6cea839c21cdff7d937"],["archives/2018/08/page/2/index.html","03ee4d8cf31bfa70ca634a248b202ce5"],["archives/2018/08/page/3/index.html","395bbb9098ac02353918c544809be0df"],["archives/2018/08/page/4/index.html","1cd07f450a4cf4727f4b70564ff185c4"],["archives/2018/08/page/5/index.html","2e01b36f2af7c507ec9a815db7da6ab5"],["archives/2018/08/page/6/index.html","6a64b5c8ed36ad7477b662c7fc7d745c"],["archives/2018/08/page/7/index.html","643d9756c606342408030b46802f0ee4"],["archives/2018/09/index.html","faf0f871ca294b8a6d0ec030324c5147"],["archives/2018/09/page/10/index.html","39a73e4e8374cee56f010e5ddfea482d"],["archives/2018/09/page/2/index.html","3c9bf537a6605d43351799cc1756a740"],["archives/2018/09/page/3/index.html","92c7aaf99d52c74f67665ad7c242f015"],["archives/2018/09/page/4/index.html","7bd93709e463d304576d19c385a7b455"],["archives/2018/09/page/5/index.html","b08d68402ea1323e07a9086b0153f12e"],["archives/2018/09/page/6/index.html","b1005f296179753ddc24cb9ee287c706"],["archives/2018/09/page/7/index.html","2256fc1a7e60954645da8eff3e4aa458"],["archives/2018/09/page/8/index.html","ffb6d075e4a8b9699d72f84242674481"],["archives/2018/09/page/9/index.html","f3d4130e3507354a7477ae6181215538"],["archives/2018/10/index.html","82ff642e793f8272a1a93f552eebc71e"],["archives/2018/10/page/2/index.html","19324c3b055b8ff8af52b822bb2ff8cd"],["archives/2018/10/page/3/index.html","4a65f23674f8b6c4b38e19dd877b428b"],["archives/2018/10/page/4/index.html","31e6339162ec779f19c358845928c009"],["archives/2018/10/page/5/index.html","40d6d300c5d382f17e66477d77f5303c"],["archives/2018/10/page/6/index.html","3acff609547614124d495d4b76cb8994"],["archives/2018/10/page/7/index.html","e0bbac524cd12d2444849d5d4e23fe9b"],["archives/2018/10/page/8/index.html","0ee50f8576e154058715da8cdf547436"],["archives/2018/index.html","2caa24b72bd415acdc93fbfb7d54a74b"],["archives/2018/page/10/index.html","914733eeee48bb84e139302c3ab3ceaf"],["archives/2018/page/11/index.html","5c382a605bd44a630ed7dcf3507f0d15"],["archives/2018/page/12/index.html","1164b214b5387bc0e787c48093198e67"],["archives/2018/page/13/index.html","9b0b1ffa57f8ecd184e0babc26bc9097"],["archives/2018/page/14/index.html","78a0df7c7cec7538213b47f25bf2b194"],["archives/2018/page/15/index.html","1a6fb1153ac8a33e2a5fce2737e95c84"],["archives/2018/page/16/index.html","cb4c2f171a526faa503b0c3f650ab2c0"],["archives/2018/page/17/index.html","b2bb78a807a165f8504c6085204b7463"],["archives/2018/page/18/index.html","93f1bd030ce22dbd02c2aed4787bc49f"],["archives/2018/page/19/index.html","5a43d637fb6ac28985b73b2770376a5d"],["archives/2018/page/2/index.html","079cee5dc01dd68f3e233568474ba327"],["archives/2018/page/20/index.html","a689c07e8e4c6775f62e2d210d461a2b"],["archives/2018/page/21/index.html","24f2465730caad1100df6f55ec67fc78"],["archives/2018/page/22/index.html","bde2dde8effcd09782ab5e126fbbb5c6"],["archives/2018/page/23/index.html","987bac8f37ea3202b79a05e5087e5042"],["archives/2018/page/24/index.html","f5d5a6510c7121a31ad951a8e9d5fc8a"],["archives/2018/page/3/index.html","dd1d031b764de5cd305ed1d718a436b8"],["archives/2018/page/4/index.html","d6f92d601443bca3c05c4a035ea9d42d"],["archives/2018/page/5/index.html","131e843a19447b4b7df9542a8b18dfe4"],["archives/2018/page/6/index.html","2f2cf92d46ab1a5d4df6482a56b75480"],["archives/2018/page/7/index.html","83a98378a529e83e414fb30b94c64730"],["archives/2018/page/8/index.html","6b5fd66cd9bd101700814fb695d75fe5"],["archives/2018/page/9/index.html","5c1447a195a465aeac9e3ba745142422"],["archives/index.html","5d619d84518ce0696eac37a1b6e731d4"],["archives/page/10/index.html","a1cd9cbb48f8ee14fda9ae1000b467c8"],["archives/page/11/index.html","6f162f45ada4b2b92547a7b07db88ad4"],["archives/page/12/index.html","f7abf2b79e73879d79243df442389985"],["archives/page/13/index.html","784537c9b902372ef90a347739a7226d"],["archives/page/14/index.html","cde688aebbb2e712c3d2418b1c6cf678"],["archives/page/15/index.html","37e338f24b6358969c0ca76b2b4e1142"],["archives/page/16/index.html","f06bca50c78f52a65f0bf19ab20fdc45"],["archives/page/17/index.html","6f739ac1ae50bc620651067e11779075"],["archives/page/18/index.html","68eae7b463c10772ee6757947ff72216"],["archives/page/19/index.html","0a1045c98a558e0ebb9c983724cac7f5"],["archives/page/2/index.html","209d4ee02332dcc0d8469b2e5867a850"],["archives/page/20/index.html","8e7a0a8428831bb74ff3a4469d5c15e5"],["archives/page/21/index.html","dc7befcd69fc647ece6e8396e8e7d604"],["archives/page/22/index.html","40c7b361f3f0afcad8feec674d444d44"],["archives/page/23/index.html","1bde287879ffbfe97073b33b2620dd01"],["archives/page/24/index.html","5758ec9cf31df0de9fb02894c3399bf2"],["archives/page/3/index.html","1740957a8afb1a4d85291d9ecf6d0af9"],["archives/page/4/index.html","68293828fa38352b238f3c4006d3bd58"],["archives/page/5/index.html","44e837c0107256023b351ff40d0ff74a"],["archives/page/6/index.html","d64eaa2dd5ab78724b6703c15b303c5c"],["archives/page/7/index.html","a19f8c0cead59a1a814c5f87605697b6"],["archives/page/8/index.html","ad6b36f456623050eaa5b6f87d13d66d"],["archives/page/9/index.html","2f63d3262005f2cf25e7043a4523dbaa"],["b01398e8/index.html","5caef62d4ecdcd5c78fb0ac61f531432"],["b4c7585b/index.html","f3670a32dd1399f196bcd33b9155eae7"],["b513d267/index.html","49d3d19830dce03e7c8ebe4815fa07f5"],["b67f2784/index.html","3b6870f48c318a83ad1f8e323f1810b2"],["b6db0c64/index.html","f94d4d6f2e635e4077175976aab40114"],["b8d3ced1/index.html","ce8a000e9a9f3d838200262f33976539"],["b972d127/index.html","57984dd46dd2bd1c38c1039cd3e08286"],["ba46f35b/index.html","668346c1fe0c36ebbb690ec1712962d1"],["baidu_verify_DfMf5XqJUb.html","7eac37f050774e5b2393c4fea1b770f3"],["bb4502fa/index.html","8814afae068816463d241e442bee9510"],["bb984cd4/index.html","6d81be9a695404ef6a8c9637e80b7424"],["be3871f5/index.html","2d18ed9657a3b7aadfc2f8ab8d9c041b"],["be97bbf9/index.html","5a37b41215f2c54d86e25e4fafcab3de"],["bef6deea/index.html","512c0a39780965c64bb66e686407afa5"],["c02d18a7/index.html","dc172a7e917c7c23849f25195a7033f5"],["c0d275b3/index.html","8cf7c1e46bbbb9b36117c520c646a002"],["c1989cb5/index.html","3177c369a0c1672a25664af2fc30588d"],["c2176cf3/index.html","d48f44fbb1f22951bb3b3a8307d822c6"],["c2424f60/index.html","3907f8c29e43dae1ddfc2afc6467f5b5"],["c2af3f7c/index.html","7846fa9582a19337fc49dc48ebb180b8"],["c3fd1e79/index.html","8010a9720759f6f9cfdedd0df25851cf"],["c40a717a/index.html","0bd756c660dc71baa91a3f2e42039903"],["c5057eab/index.html","9d017f875502e2afb59e8339b47027a3"],["c746a48a/index.html","9a8f3e214210d742a353e14bd0559b0c"],["ca3f6ac0/index.html","89d4ec53457e6e9e7c8262c6e9e71af5"],["categories/dp/index.html","8aaa80868570d4309647af59636bf981"],["categories/dp/page/2/index.html","c705f8f27b604891d8df958a9789999e"],["categories/dp/page/3/index.html","6547560a1c32eb76e6c9de6e3d15c30a"],["categories/hexo/index.html","eb04824fca96c52d9ad909683b13cda1"],["categories/index.html","49f9ad1d7f35122e604703e203daa722"],["categories/java/index.html","20e6a2c4206de8101cf49b3e8a7f5d89"],["categories/java/page/2/index.html","1ac3cb4fc7667e5429552121d8050f28"],["categories/java/page/3/index.html","5821915336758f12fc13e6c0d43c0542"],["categories/love-peace/index.html","6ef23ed029c0514b7789ed679dfe6934"],["categories/二分/index.html","cbb38545bfce7012b8d9bd2f17cb227a"],["categories/博弈论/index.html","aa4863f9bc7c0e5125468592167a6fa9"],["categories/博弈论/page/2/index.html","77244137d33b6df8b994890685f69c31"],["categories/博弈论/page/3/index.html","2b2719aa6610fe3cc918eef468909db1"],["categories/图论/index.html","d1288086b351db1215ce412ae7b6a5fd"],["categories/图论/page/2/index.html","50ef682681efb87f07fc61a401c61a12"],["categories/图论/page/3/index.html","cd6d8eb11f24b5b0386cecdde39b8ea3"],["categories/搜索/index.html","a19d28592a97dd3a3dfc1ef9666d6ddf"],["categories/数据结构/index.html","bd7e48046d131e4a9ca60fc81273cafd"],["categories/数论/index.html","6a4709690f502c813d1870d510d91268"],["categories/数论/page/2/index.html","135a3393c639c1538f693025138c9ac9"],["categories/数论/page/3/index.html","277f9a593c6579dec59804ec1b74f4af"],["categories/数论/page/4/index.html","feefaca19c76f10f2972beeb12548300"],["categories/数论/page/5/index.html","beeb9a1e56598b1c2daf2d078790eeaa"],["categories/数论/page/6/index.html","79aaf350a6c8fd801a5f353322cb227b"],["categories/机器学习/index.html","3ed2ff888060f460c3481551380f7106"],["categories/杂/index.html","59922f5d1e213c92281b9a0ed6251052"],["categories/杂/page/2/index.html","0a2fe2822a04e3920f2c664228bfca03"],["categories/杂/page/3/index.html","4c15f48ebc9ae531b3c2e5ce26bb446e"],["categories/模拟/index.html","6983a4116ba5480b4db1fbfe4702417d"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","2c20d62c54127d00c9e55da4f907dc5b"],["categories/计算几何/index.html","3737127a2aa84f8bf7c916cbc8530560"],["categories/贪心/index.html","8bba7c33614d94cbb1187e1dab56fa9d"],["categories/贪心/page/2/index.html","9f174c61dc7c8a3a3ff865874b390d5f"],["categories/题解/index.html","4cdc16d3800af7f9da40047be92cfced"],["cb821a33/index.html","6093dd23cf8f1117320a58998360f3c1"],["cbd59ef1/index.html","c2d98545d86d6dd77dfbb3ca6f3dfa74"],["cd27113b/index.html","594c72d0abff9f81395d41f748762ded"],["cdd10d6d/index.html","c8d13d973082d4725307d6a611e47911"],["cf682b8e/index.html","67ce886c3d7b53e9de832fb1f9e7690c"],["cfe28c6a/index.html","b5fc7933fc072c66528fcf4d3b15cd86"],["css/main.css","593be20ba80ef47e56cc04147d22e5a1"],["d0f16a5f/index.html","d2f9204069c531f274f5f5c096ce735e"],["d2c81766/index.html","fd331d902e576ca11ac430318af82d71"],["d2d140b5/index.html","df8a904c445b4b56ae4f86314a21a019"],["d34e925e/index.html","078a864220c9e3c35f912ac0e43a250f"],["d377a60d/index.html","fa1a583326a32917b7e6aee0e699cb73"],["d5042e55/index.html","9f219e99180b86a8cc824a9c3e929848"],["d51ad0f1/index.html","f61f84edf603968bed55c1509c2a3008"],["d655b5fc/index.html","bbbba03138ffff1828f10ea3716166a3"],["d67f02ad/index.html","41481ae9adeb5498203183a66da5f193"],["d6ce1fc2/index.html","4f12988dae00af1cddd52dd431814822"],["d6da51a9/index.html","983eb734d0dab6df5880d2ba16fae872"],["d7ffbd1c/index.html","a98ff99fc0cb70ddcc4116f4e2c2abc1"],["d971ae59/index.html","e252006af8f5aa64770fd21667f26446"],["dbf07d5c/index.html","fbbbf64c5e7d171f27d45a6f3bf73806"],["dd1d064a/index.html","329efb233eeffc686047d0d22d395597"],["dd814372/index.html","738be9f13d00b5209000c1987d16f006"],["ddee45d/index.html","8153c7eace7f6e06736bdfc16cf50f79"],["de762ff3/index.html","62533d5d873237edff6a75a9a92c7687"],["df82d1f8/index.html","8a63be546d0b1b902f33d14efe36829e"],["e1d4a8b4/index.html","fda9ca5fc75f2dac09a94d095703ab2a"],["e4c2cc13/index.html","da71c8dd17e2ed7b1ea3d59bd982bf05"],["e4d2c7ba/index.html","8e9e02e817f5eac3f50910273161fffa"],["e5ffcbea/index.html","eaf6b71322a3c32c88d365d21255f821"],["e612ace7/index.html","a06d26b524023bf2d1ee8443ed6d331f"],["e73bae86/index.html","dde9cb78296f57373998a0930c0c3e34"],["e7a0c86b/index.html","68246fb2411a1ca6c0e9a0b068b38b2c"],["e7b555f8/index.html","fa942a6eb2c0303a69816db4f267e6b2"],["e81fda88/index.html","66110c1e6fbbd7ae5469ea83a72f3d4f"],["e85a11e8/index.html","5ca22eb30e27b65f35e4f442f74f4b91"],["e86890fb/index.html","706169a68e6a506e007acebe9e2825fb"],["e98fffcf/index.html","2391c09ecae8887d1b79404cec50f155"],["e9da39f8/index.html","1e797e5304d784708276455a0571d8b2"],["eb18b91b/index.html","6d4fc5cf678f177b700f676dad875939"],["eba1fb1b/index.html","02cd422deabb78d4c3df8339155402e0"],["ec404005/index.html","17e319561ff480c10c18453df226ddc7"],["ec4e8b99/index.html","be9c9d844506de4941c281f6d6c44a76"],["ec8b12a4/index.html","247cb3a9ba28c15d3bff0fa351cd2bf1"],["ef2a130f/index.html","5f51dc03b8f26ed1a22cfb1558e20c9e"],["f0565075/index.html","559eaf1873ed8916c2aad28e76e55179"],["f0d0bafc/index.html","b14d0fc1aa0580d9a215553dff13dfdb"],["f0e39cec/index.html","7f13625923b8c6e6f5562b2d17b73453"],["f1a4e5b1/index.html","a1fb5b186871cb6be96d5e5b9959319d"],["f1aab9cf/index.html","c617adae999d37f9c4d5dd0a0460a378"],["f292e0b8/index.html","17d08ab12c3a4d09b7068cc344000595"],["f32e27dd/index.html","2bf8845b2294475867be76d28cde6c20"],["f47c306c/index.html","2f62f2090c7e58d8ba4fd5f6c1412edc"],["f6227d77/index.html","1cb2ebee8f916c6772c1cceded0f9c7c"],["f699b617/index.html","7afc6944cd8874acffb5e44fd3791fba"],["f715085c/index.html","f19f98330d30781b461b6b14defb2989"],["f7f1f3b6/index.html","10855402cd85a4343f4c11fa3dadf078"],["f8170462/index.html","9af4d8e8fcc08dd9e64617f2657c2f0c"],["f8eca34c/index.html","883f8b9b7939f7de333c56beb76eabdf"],["f9161795/index.html","6f92d33de982dd425c27f4d3834aee01"],["f9c3ad7f/index.html","cb82732e4c506e3fe477a5f876162fb7"],["fa5f812b/index.html","896c6b1cdc9de1f8a15ff3998e643271"],["fab7cb46/index.html","5ecf531d6e94ab1649c0b05f98968dd1"],["fb0210e3/index.html","3721529efede34e6e4d554891371659c"],["fc584b3/index.html","14a166cdc7092d8f17dcbb8b65c54f13"],["ff888e9d/index.html","e249250b4aebf75d4d6ad4ac849bd474"],["ff9df0f5/index.html","3aee780ab6525e21b445a136e3aacbb0"],["ffac8316/index.html","e6e73b495e803a25fe68bfe56bc7b2de"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","38097f0b0034b385025d1c8ca5d9dbd9"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","9c11c91770066e0440f0211e01124d1a"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","0de7e639d3ab05877942717733c1a58d"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lemu_demo.html","6ef98a61b06ee19d629edc1e9086d23a"],["lib/fancybox/README.html","bc0b54f67cd12998af810a71b96b52cb"],["lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/pace/README.html","d795a2ee3314455225adc310536afb38"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","cdd71ea7d56556883235322d3768f533"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","48a9d1fd34e1a84d56fb97f9030e9606"],["page/11/index.html","b7249c73d9d8ad565bfcc9aae36b7e7a"],["page/12/index.html","a05e54cfcaf7260db7bf15e7fab04efb"],["page/13/index.html","22d77af691061650d30526723ec64e55"],["page/14/index.html","0d2750ae629085ebd347e229310b369e"],["page/15/index.html","7b761d3901351563b41d016aa59d6bda"],["page/16/index.html","fdf4cc84333b13df2a1fb0e2446d62c8"],["page/17/index.html","2b65a764fdbfd641f77b6682fde0168b"],["page/18/index.html","aae08e964aefd222c29960e5ba932854"],["page/19/index.html","02a5383a6e011d4c95ad6910e45305ca"],["page/2/index.html","bfdaf2016abb47e0eadfbb21ddb40f49"],["page/20/index.html","e6e8ad8b112d74c5926e94cbfe29cff5"],["page/21/index.html","22017f2d55c25cda345bc64fdb0d4b6d"],["page/22/index.html","bba4e9e34fabf61d1f26240c5b666640"],["page/23/index.html","094f1c8fa837c62f4a0a33dd8fdbd860"],["page/24/index.html","11561207113f684804a1ba9dc90104f9"],["page/3/index.html","51f3ae5c7404a148177bbd270faec9ef"],["page/4/index.html","b102926eb8c33757925c5b29ef7a6ebb"],["page/5/index.html","37b9eec3c4fde38e465cb6aee51b5cc3"],["page/6/index.html","4a6cfa34e52d14159ff852cacb3dc3c1"],["page/7/index.html","b41277f92d07ca210102aa3614cde049"],["page/8/index.html","3ed1cf6f440f66901fd178f442725540"],["page/9/index.html","c7dc5adca17f59992b956b87a95e117c"],["tags/Floyd周期检测/index.html","f8b2c0edbe6542f91c7ed35cf82bbe34"],["tags/IDA/index.html","4dad528383eb98d6c8d32258ccb79761"],["tags/Manacher/index.html","a835deacd5929f9ff33d5a6ce42a4462"],["tags/Pollard-Rho算法/index.html","19548ab427b1e79f7dbc13bbd83c15da"],["tags/api/index.html","8b6cf80d5bf633c178e8c3ffce13931a"],["tags/bfs/index.html","52df088c6d322ca76ca885103ab4d694"],["tags/bsgs算法/index.html","3864c79c6578eb46e15577d9cc350820"],["tags/cf/index.html","c2d892a3c0453e1bc9dd4f5ccb0d306f"],["tags/css/index.html","ad6851c01514c0ed20686fa0c349fa20"],["tags/dfs/index.html","2c48232ef09da5ca4f3d4cc4420d6e27"],["tags/dijkstra/index.html","6dcb7f660fc08579e49a2376fe56e78e"],["tags/dp/index.html","930174dab7d185a30ab590a0b667b4bd"],["tags/dp/page/2/index.html","8314b1766d57697d9b29d1925101a5f7"],["tags/dp/page/3/index.html","c57b77ef15ab08e28e2f69db5899346a"],["tags/gcd/index.html","918b9b4972bf15f111be378fa83b2ab2"],["tags/hexo/index.html","5684fe1b7ab1d0e373a51afbe7069eaa"],["tags/index.html","4b262e04fb3fd16529b8e70ccb352c39"],["tags/java高精度/index.html","63b11ddc6d8c8387057e5090d594cf2c"],["tags/java高精度/page/2/index.html","cfea815f176223f8c60d97a8ae9e14be"],["tags/java高精度/page/3/index.html","4fc4963f531b0cec7edf5dec1a5031c1"],["tags/k-means/index.html","fba6073d2d9cc758159adb1f80d8b4d6"],["tags/kruskal/index.html","7f11c8bfd2a4e9743cb1af1cdf944eb9"],["tags/lcs/index.html","cb202b5b27341edb5a2e28bc333f0ffd"],["tags/leancloud/index.html","b33367b3601b65352547cf407cf702df"],["tags/live2d/index.html","bef7927e73da7452f23dd5ed5413b5aa"],["tags/mac-OS/index.html","5799379c4d7c8a675d2c392950c0fe5b"],["tags/prim/index.html","5225008b34f9a23e4ec0338affbda1f8"],["tags/python/index.html","c6976ee209a8c0c84fee2112d1a624d7"],["tags/revolvermaps/index.html","fb5fbc73e103c99df57f58521a5aaa9f"],["tags/rmq/index.html","8c6310da018190cb0040822408de6566"],["tags/sg函数/index.html","08dbcdcb8949ff687126e137e3c97e36"],["tags/stl/index.html","fc48da201e09002c42e1a41cc177f5bb"],["tags/三分/index.html","2a7d8333d4696570797a1ad33965dc5b"],["tags/中国剩余定理/index.html","1ca031b813dbcb49b4bdb68b8db1427f"],["tags/二分/index.html","f7e35365a629bb83cbefe62907671f48"],["tags/二分图/index.html","1f8303266892d18b870d4258e8e42024"],["tags/作业/index.html","7f213a6a9e1930760dca6ef3ebdd376b"],["tags/全排列/index.html","a57aba9bcbb8305fa559c28dc8aca1e2"],["tags/分割平面/index.html","c12e00e36d3aa563d80f9193e8da8343"],["tags/分数规划/index.html","ffd44fa36ea8b4a3cede67e35fcc0c00"],["tags/前缀和/index.html","73458ad61d25744d22b5d8efb0d6baa5"],["tags/勒让德定理/index.html","42c3520fd86d173c1ada360cd6e088c7"],["tags/匈牙利算法/index.html","52e936a9013d51d5595eef084515bf8d"],["tags/博弈论/index.html","b4c3dde04e066fe5219c6996d522d1c5"],["tags/卡特兰数/index.html","368099a2ff74b274b3663a7556b23ec5"],["tags/卢卡斯定理/index.html","f57a5f23fa42b0ec515c6935cf3112fa"],["tags/原根/index.html","d61f4b4cd06cdeabfed6d5582addee74"],["tags/四平方和定理/index.html","e69f22df5cc2b0bb7b63b0908f47fef3"],["tags/埃筛素数/index.html","ffdc6f65c68e0eb0ecf60dfb56243bf8"],["tags/威佐夫博弈/index.html","862f5d406fbb178adcc7a2f580ec2854"],["tags/字符串/index.html","e24e16dce340613aa3be9b2da46483bc"],["tags/容斥/index.html","c3b4f778f377eab7682638de1227cc5d"],["tags/尼姆博弈/index.html","ae9c647328a4518f09b1b437a2656c83"],["tags/巴什博弈/index.html","d298d8680f479393e38a62e8a62214db"],["tags/并查集/index.html","b26a263a0a2c6ee5c6904dd74e70073d"],["tags/归并排序/index.html","863d50e801bf983d5878be6b4f0c30f7"],["tags/循环结/index.html","9ba456220caffe86127f97e5cdc5c32c"],["tags/微信/index.html","7f34d935f70d4b3808e4355805276afb"],["tags/快速幂/index.html","4d26edbdde8005f15d5c16bdd0796f0a"],["tags/思维/index.html","52acf38b180eac9d341558692534106f"],["tags/思维/page/2/index.html","ddf44c038702d2c378cd0f7cb095ad18"],["tags/扩展欧几里得/index.html","94efd57d727faf7364f8e6bc6fdeac08"],["tags/拓扑排序/index.html","c66f061889f2d5434651048dcc4bd94e"],["tags/推公式/index.html","6a3e2c37b5285030b3141f9b5a70461a"],["tags/推公式/page/2/index.html","3079f08e6a1816ec34ce26ec67fc90ec"],["tags/推公式/page/3/index.html","64949d55cc5ebccf1351f0037ed6b629"],["tags/数根/index.html","dac41cae8e307fb8bc760da939b32aa9"],["tags/数组加倍/index.html","eccd4422b50df262490a045ed1a3e8ed"],["tags/数论/index.html","978e18fe850693fb61355aa5299eaf5d"],["tags/斐波那契/index.html","ddb78ddfa15d0f651be80c6fcf360b27"],["tags/斐波那契/page/2/index.html","d8fe099fe131f561b308b303efcf52bc"],["tags/斯特林公式/index.html","7d8a58d5d75ae58a0898ad8635f8b37b"],["tags/斯特林数/index.html","aeda46d5b7bde4a999c6125c722f4871"],["tags/最小生成树/index.html","cd1a4845893e7fdbd3798bf4231ac9b3"],["tags/构造/index.html","801269ab58661cd8fc8034e6c45f1805"],["tags/枚举/index.html","a46bbbf464a11eddcb678625a2a22151"],["tags/树状数组/index.html","4b32bb44f126716858b23b94ec0262d0"],["tags/模拟/index.html","08124274409e52f7a9f9ea201c8b2308"],["tags/欧拉公式/index.html","031bd81464071dce6c3dad891562899f"],["tags/欧拉函数/index.html","c66cac617da13dc250e6b4272619d7d0"],["tags/欧拉路径/index.html","54f6e3f8746a43eca34ef11ae1e6341d"],["tags/汉诺塔/index.html","904731e06bd4f6c76103e1459e2d84c9"],["tags/海伦公式/index.html","4f0e23ead1460aba93b50f5fed859d4a"],["tags/生日悖论/index.html","4ac9cca271dc8d3aa49e09a5fa71e6ec"],["tags/矩阵快速幂/index.html","3736de589062655a48ab61add1e5093d"],["tags/离散化/index.html","91aa3a95bb38f3b493d61e7e9abea04f"],["tags/米勒罗宾/index.html","9d7b231d1dacb3af307f4bc421be66de"],["tags/约瑟夫环/index.html","0f76df714d4c4de277858b52040682cd"],["tags/线性基/index.html","2b0940c61ebc3dc92276b82c3bfab0b3"],["tags/线段树/index.html","7b7f644aa4e4e2e51ed0bd4a6db6a33d"],["tags/组合数/index.html","02ab47aa3b396f115b06dc4cbeac8ae9"],["tags/组合游戏/index.html","bacac12215b277dd05fab2ec06121aaf"],["tags/背包/index.html","3a96947a2f80c6d60a419805db73e3e3"],["tags/莫比乌斯函数/index.html","cf6d3c6d274b2026f8da27bf1210eff9"],["tags/计算几何/index.html","f46659ba036357a57f2708403b1d0dc0"],["tags/贪心/index.html","e0910ac8ce96d1704f4524a3dfa03696"],["tags/贪心/page/2/index.html","ee9d3c232a97129bfe82e23d15e879ad"],["tags/贪心/page/3/index.html","ae5fba052b31fd78cba918fcd11383fb"],["tags/逆元/index.html","10f677b2d1e836931a1e7bbc345e4ae1"],["tags/阶/index.html","929cb157093042b8b5d353c06a04a81a"],["tags/鸽巢原理/index.html","d264631691981acd04ae359436b5ecfa"],["tags/黄金分割数/index.html","ba0a69c03df13a0b5c86f353bfb3f7ff"]];
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







