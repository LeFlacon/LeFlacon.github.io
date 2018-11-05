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

var precacheConfig = [["10336297/index.html","8d54a87ed1da34b5e5179eda75918b7a"],["1076b80c/index.html","ef7a2bd1955a6e3a02b665971419448c"],["10a23843/index.html","a852d64bdd0da2e381d11a8202a67886"],["10f322b7/index.html","436acdfd70dba4321077c17c0bad758e"],["1109bacf/index.html","0657fea9e99183a208f378994ef4efa0"],["12fb71da/index.html","82295a6d0a85a0e66c482a7d4419a38c"],["15885f20/index.html","5ad3d9820a441acdb7125b9ccd127fac"],["15c1232b/index.html","be80a78a10e4c1151d6e96d81b178127"],["16236ee/index.html","66f585bf613efe7f224f3f54209aab0a"],["163226ed/index.html","a1357f02792a8aa6711240b09b5f6727"],["18f146f5/index.html","f1e10c2f4af24705339fbcca32d87587"],["19356a39/index.html","b9c48dc292dcb5bb23a51d831235609d"],["1d6b220a/index.html","f139d0f8e37258a18ca9c3cbf25457ff"],["1f726e05/index.html","deafbbb2b920f00d03427a7b764c301b"],["205f0ecd/index.html","0cc81e7bbd00753b353347927a9f5a44"],["216acbe1/index.html","21188b1eebc97003f720bb4b29d052e5"],["223d29ea/index.html","5031e021223d2025df6f4549ff86b4f0"],["22830a9e/index.html","8bfa1b00ea79c3a340d7a0e6ccb7a5e9"],["23c9f6c3/index.html","10d69a8a0c7aec9632d81cfa97c9cbd9"],["276c2267/index.html","30de8d0b9f9ee05878e4d4e121b9a8e4"],["276c371d/index.html","64583008efdf388814158a172f681421"],["29b25bed/index.html","b0a2d2db3153b55b03cf70bb19977eb4"],["2d3ae01/index.html","43e6220153f13f5006c9358f8bf4ddfc"],["2d58815c/index.html","b74308e78652c4e9cad264f939e0860e"],["2e9cbb0/index.html","c49c0216733d3dae754ddbe24843e6b3"],["304f1fc6/index.html","09fc08078e52d1b8d3e27b10df6b23bb"],["33eb241b/index.html","6e80a0029c92b92b54d0efb8d38e033b"],["340b38ab/index.html","8d15ea57bfcd0eba4fe0ecebfb88432a"],["34784cdc/index.html","1e73f45369f82d8c7b0d63b6e6ca12fd"],["34822d81/index.html","da2964389a32404526513b5a99988605"],["34ddef5a/index.html","26b9928c5a619349d192134026781cfd"],["34f920df/index.html","4fbcce17f4d0d13cb1e2f7cce0054774"],["3697a1c/index.html","6382327e43c039db8344587823c55407"],["37192e8b/index.html","53daf8d8242fa7e852166591b05dbee1"],["37630519/index.html","bf877801ade52fb8dc467e6203f17bba"],["3a23cc5c/index.html","1283553d691bcf4ef0f760663a7afd0a"],["3c67f84b/index.html","fc3e64847e362329a6b83938df15e0d0"],["3ca6f02/index.html","55a372133962d87f0f8993095a6610b5"],["3d8d44b2/index.html","b9e7254f4d8c6a41e9105371d8395b8e"],["3fb087ea/index.html","f1a34e6925f09f9f03cf5ed22d9fc39b"],["404/index.html","8cae89b1c7d5549b5337041ac740cca6"],["40687d49/index.html","7614c454a7ae47e78d3bdf6855e34faf"],["40d6aa63/index.html","2564febf29e5abcca0e468d5b5add8ce"],["40f7970d/index.html","86913f0a820d7e9e0219e8b49937bbba"],["41d56d9c/index.html","55e4da92d27fd2327af60066f1e7c7ed"],["41f5723f/index.html","48a9f52514ff80b5e55198988debeb49"],["420f3cff/index.html","fa092e229927ff7c25867e6d2215968d"],["42b4455d/index.html","69f2204cf8ff7a09a68fd6c5bde256d8"],["42c39770/index.html","3edaf06ba1fc2b0bff3346c640363764"],["438d787/index.html","53909cc0ab756dbf665afed3000264d4"],["455762c8/index.html","414ca07b943460def2a7dc0b580e20d5"],["47a64668/index.html","73b5847f2dcbe4311c3baa85a0c33d3a"],["4a010063/index.html","9825384a5712f14b23d9dbe9fff426ff"],["4b67d3c8/index.html","5a8594ad4b136a90db68104a7b90e18d"],["50df051/index.html","fd9fc32da64975263ee5fa1de8996d31"],["52580325/index.html","bc56fadf13fdee3e8ac3168854100a16"],["52b56662/index.html","d931f89fa3f30b2a28da7bbbeb38fa78"],["52e47f72/index.html","53c98a2f84d39755fe90560afeec4b2a"],["531fe264/index.html","6678581c76122d939aac8dcb5b0bee5a"],["560387bb/index.html","93f79df9d353f89a5ee896be34839c53"],["561c553e/index.html","caa190845d5d5da1bdda495de88c19a4"],["56954db8/index.html","d2af9486127b9aee3d642ab6beaf9a4f"],["57427b30/index.html","efe68f5cec139b76f3b5d52029461fb0"],["589bd519/index.html","25e61d68c2d232e52307a89d40004f97"],["59d4cd0/index.html","274d4e352a54891fc5ff9bbdbf18d276"],["59f6b91c/index.html","db3b1949b211e8449beeec9d4d7584c4"],["5a29f513/index.html","61eafc4c212c034ae189e8ea4edb54ca"],["5a4c73da/index.html","5ccdd9e85f31595133f4a0f74cd4840a"],["5b7386c2/index.html","bc4c6084fb2b5cc58862972a916b550f"],["5c6528a4/index.html","98f2d9a98584450a38d6157220f77cd0"],["5c944241/index.html","7b5791174e1e42a0a0cb4e163bf886cd"],["5f826ba6/index.html","a80798bf3a7a26a1611592df93ac7f33"],["5fc91746/index.html","b3259c97165769d7e10dc72f0ed3ef54"],["60992a21/index.html","11931302d7fc7f979b89f3dab09edeca"],["61030f3f/index.html","d07b605cf8084af04d058fc7473faa96"],["61acc2f3/index.html","60bcb9c2552d9cedce8c3ee12ce719ab"],["61e3cbc/index.html","4516d1135e1bc3ec795e1d9be3dc9676"],["62f8e345/index.html","42051808c393f3c3d54e4df4b23f95d9"],["63dfb318/index.html","ec6599523b83bd056a85682d3c6a2979"],["650f0a27/index.html","83c038bfc16260f8ee7b077782efe2cb"],["655cb7bd/index.html","7208ffc244f3f3b64c9835822c8303d0"],["659aa8d8/index.html","50143b9bc6c9bb32e7d092141c8e8625"],["65c1781f/index.html","7bc6f4a17cdc4be6908c8810d0f8885f"],["66dd1680/index.html","90c1ba118995e0d007dc8143331536a9"],["67dc8b75/index.html","85282ee96c0bc3aca70bbecde33b1d1e"],["68903b21/index.html","f8d590c2c8ac58612616901f0909646d"],["68a46f0b/index.html","1d33d6397b31f6d43859eb03084c0a88"],["68e48a7a/index.html","eec4b6681fc3d6fc29a2cba52da254bc"],["6a2b981f/index.html","790a1f239c2bb3275f8a27c879fdddec"],["6a4cab08/index.html","fe11ccfb53a54a67413628b6fec0a480"],["6a5982f6/index.html","96e132e6533c7e2688dcc9dc0f613f8d"],["6bb0247a/index.html","4650c7308994b2aa55127cb90cd1c175"],["6bcdcc46/index.html","87d392b98a09dd1991de63bc5036f5aa"],["6e572fe1/index.html","c22f7fc59bafd4fe5b34dfadda488764"],["6e6d7226/index.html","f9dba92158865ff409153d38b51f2220"],["6ed0cc8f/index.html","59c4dc7f9daec35acff998b359593084"],["6f66f8f8/index.html","b89f163841b413edaa33c52af3c23435"],["6f6ab2c9/index.html","41d5619fb182e024efea6b5dea2128fb"],["6f93207a/index.html","fe4d9a8e1d960f8d8adb2bd6bbdbc230"],["70032e53/index.html","77735ebb0c65e12748e6f4f35e31269a"],["71a9f0a2/index.html","d34cea37d4a74fa378ae5a7a1462bd01"],["73d62e33/index.html","725702f476063f9e69802db59501ca51"],["773303aa/index.html","c9ba45a97f05454d6023bb33e9f91f4a"],["783cca3a/index.html","24216b2f0c8862973736dc87461c1cc7"],["784bc526/index.html","c0abfc9d0ef389cc5326c5638995ad63"],["7a72e0ec/index.html","21d797e537d8f4830eb05a79e3a8ae31"],["7becbf63/index.html","39ed9a1282832d982beb496db86dd536"],["7d2b0472/index.html","48ceb90a35ec18e1633aa11d53e2d755"],["7dfc273b/index.html","17fc3239bf49c01ee85a993d9882d332"],["7e7621ef/index.html","a6aa5c78c3f2b6bc2709b91561e12d16"],["7e7c23c2/index.html","6e5aa389b3af5825117daff948800da9"],["7eacad98/index.html","778fef0c95da56089e612f58f8119cb3"],["7ecca125/index.html","49fda72e2335fa81e86a91b631519b5f"],["7ee1bb3b/index.html","0629fb168a04f6aa9404b4170ea9244e"],["7f6818b1/index.html","d66a12439effb2e00d338e2cdeaa01c6"],["835a9757/index.html","e7c38cc8d063eb457652c6b95ddcb8ed"],["83978c3d/index.html","803888e6020468373686f6a12170e12f"],["8434b274/index.html","7b5b26efcc0f854bacbea5d651658340"],["84b8f7c6/index.html","081eeff81b257124e7dece797aafef0c"],["84babd30/index.html","2318fa55b854cc618e1a670ab9955ad2"],["86eadb67/index.html","64ed97fb740c1eb4859fd723a2b23663"],["891ad037/index.html","362acf59ce4eed1f176ce07ccaca193d"],["894818a5/index.html","a71270e65713cca727d47b92e4f1d144"],["8b10921e/index.html","d24b54143858dc57846d271ab68e06e1"],["8b8f3dfd/index.html","af3d17aab4e73db0f2920826310c89fc"],["8c5ac577/index.html","00bba6edbaf957e696c29a2b92725728"],["8e5f1388/index.html","b08da2d2b38d7deb853cefc8aa461cb6"],["944a2722/index.html","253d8e64ae19bbcc92313908058e7a07"],["94b377b3/index.html","8bf68cf04df866f87ab7a55e051e85ca"],["9562e52/index.html","d328d2c514d698b21d1241d067c432e6"],["98ac8a82/index.html","71a74b4c31d8ffa683dd345bb527f0a7"],["99dc77d/index.html","f89328f9550c8c4fad3f1c3fc1396607"],["9a99eb64/index.html","5c27fc3a02589c798976ee753c91ab10"],["9ac96b1d/index.html","764e4976dbe95d175ff4c4073120cc7a"],["9c66e3e3/index.html","103b1fc427ec6d35d9a9607c250ee6e3"],["9c67c163/index.html","e595fcc1f5b339ffdf59eab77512ed52"],["9ee158e1/index.html","2683e16bcd861fede95dc4c61403b0c5"],["9f1d8b77/index.html","7b99adb3cfaae3c4a4fcf8bb6a10dfa2"],["9fb00d50/index.html","0888ac88461340abd0e9fa0090be4447"],["9fe4182d/index.html","b8375acc236c7b149820fa6c89935e23"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["a0e37ddb/index.html","8c620dc053a9ca29c464a4be9e7d8dfe"],["a1e708e2/index.html","13879a18d0e8accd0220e95d4f755853"],["a20ca391/index.html","e31bb7ba0cf07ca3d2d19189f99c9344"],["a2c7bf23/index.html","89aabcc3296ed3f7f534b19d19036b9a"],["a4b21e43/index.html","255dca00770fe23bbca81df29649299c"],["a5bf9421/index.html","6abd347ad3a3214ae4d5647a34d91537"],["a678482f/index.html","08c030e32e102c605fc0d341e21235b5"],["a74119db/index.html","29a6970bd0349da368398782039fdd68"],["a8a3dabc/index.html","9158f693ee026fb34c79d84ec965ed1d"],["a8a8763e/index.html","50b7546e5825a1bc3615fe67006cba91"],["aba8e35b/index.html","3bd9c296c61610343529d2e73fd45747"],["ada46a5d/index.html","dffef837452078d6918aef5504ce0b9b"],["archives/2018/08/index.html","a52a1df70c26b9ee0044c0a07d50fc1b"],["archives/2018/08/page/2/index.html","a20be6efe290041a9234fbfbd7afa831"],["archives/2018/08/page/3/index.html","f3a9eaab806ef944bdb65f1be403084c"],["archives/2018/08/page/4/index.html","1afd83072fe81b821be2d9a59e01f2d2"],["archives/2018/08/page/5/index.html","b222973e4650f685885700fab0bf6fc4"],["archives/2018/08/page/6/index.html","c182ed88dc90060503f03cfa6119aaff"],["archives/2018/08/page/7/index.html","6b2761ccea964d179d201d099ae74041"],["archives/2018/09/index.html","553fce52e8be4aed48ab746769a444c3"],["archives/2018/09/page/10/index.html","f6fce96c25b2a673410c0814d21e31f7"],["archives/2018/09/page/2/index.html","d799fc003e1511a32b2b5a4ee3b6d88c"],["archives/2018/09/page/3/index.html","c89eaa1ae7970d0225c30dea6ff586fa"],["archives/2018/09/page/4/index.html","b442a8c6e664a353cbe7ab1499e1b977"],["archives/2018/09/page/5/index.html","26d30b1db06d6ca7cbe41c4035e20273"],["archives/2018/09/page/6/index.html","5b475de556ac5dcfab92b3e3bf7a7eb6"],["archives/2018/09/page/7/index.html","621f74242e82c1e315d69e2da1708faa"],["archives/2018/09/page/8/index.html","ae049718dc1d2887be932407cb5fc05a"],["archives/2018/09/page/9/index.html","ce75e62b069791d81588d4ca946b7fbf"],["archives/2018/10/index.html","9f35d724c83fd56a2c11823ee2b8ce0c"],["archives/2018/10/page/2/index.html","82aca37ef46ba1f970bc92990816c342"],["archives/2018/10/page/3/index.html","2842057b2d8ea6aebdce9646b438580a"],["archives/2018/10/page/4/index.html","b2bd046c3348f4739fd5a13d39148876"],["archives/2018/10/page/5/index.html","373352eb0108df684aa22c2b62e8b052"],["archives/2018/10/page/6/index.html","c441d635fc0a4a963997872216341768"],["archives/2018/10/page/7/index.html","1dcba8aac2a1b2387dcfef14f19bf7cb"],["archives/2018/10/page/8/index.html","3de1fd90ebd4ecb4855af4e148971e4f"],["archives/2018/11/index.html","713e5f04c9a6a8847d037796a6230e39"],["archives/2018/index.html","e0dc988b0beed4cc082c2222156c1682"],["archives/2018/page/10/index.html","078ce0c53351ec711dfc0517c6a17f59"],["archives/2018/page/11/index.html","a2bf40f0b0007d5434570ff79d8bfcf0"],["archives/2018/page/12/index.html","517d90d24f583af6e8d5890dbaccb0a3"],["archives/2018/page/13/index.html","fbdf7f1c760e3038208bc8cae9d95b37"],["archives/2018/page/14/index.html","4471e1cf9e91b312eeabc2d2d6838bc5"],["archives/2018/page/15/index.html","ae7196ea8ab64fce902682fc1aee4813"],["archives/2018/page/16/index.html","5971439b5e4062d391049e6ba70f1bb6"],["archives/2018/page/17/index.html","697bd3e00da875586454a27d5e6148bb"],["archives/2018/page/18/index.html","c2e881a0a1f50855a664d4fcf16e8a09"],["archives/2018/page/19/index.html","26a10df4a6dd723eccdf6f9a08d22ad2"],["archives/2018/page/2/index.html","3a1149632bb9c937130f6b1dbd7d831b"],["archives/2018/page/20/index.html","2f629c7c143a07eaab3a5c68f3fa500c"],["archives/2018/page/21/index.html","739e995c9dff9a467d1fd0fcb0315686"],["archives/2018/page/22/index.html","dcf0830387abcbdf20c2d378be713828"],["archives/2018/page/23/index.html","756a407037553ec4cd81bba26d7c4397"],["archives/2018/page/24/index.html","f096532fa413528eced64360aff38783"],["archives/2018/page/25/index.html","b41fa9f0ac645278cf23ba51924e0a4d"],["archives/2018/page/3/index.html","2a9ab515ab4d1b402f6d7bb993147467"],["archives/2018/page/4/index.html","bcee5564ff23706aa7f4ce8755a9c448"],["archives/2018/page/5/index.html","d81e7fc2177db8ff03377e870aee3e5b"],["archives/2018/page/6/index.html","00ba477f82faf91056d443c9996a74c3"],["archives/2018/page/7/index.html","f005a78902a9dfb10c49d783aa3e8b2a"],["archives/2018/page/8/index.html","ce8899110c181dda824eec783394ee32"],["archives/2018/page/9/index.html","5f4b10a0f76daae71897d183f2e4c8ac"],["archives/index.html","74ed41a7038c87c911bd583b7db9ef40"],["archives/page/10/index.html","7dec7b69f4cd8354f2f0fda3d155167e"],["archives/page/11/index.html","bd7d23ce216b9e0714de60c2fec617d7"],["archives/page/12/index.html","b172b34bc22f87f8fac7aa3e71be1d14"],["archives/page/13/index.html","d28ae187433efd546e8afb0389183b05"],["archives/page/14/index.html","c5648860d8f52196e5959e6845f68574"],["archives/page/15/index.html","5752b36e2ed5ef7546a79a3f6a9a978b"],["archives/page/16/index.html","5198ad09489773773729715b7cf38b2f"],["archives/page/17/index.html","66f0839b84b32e69a06a309959c5c6a7"],["archives/page/18/index.html","6e3352d86d8e655b48fa06b328af4895"],["archives/page/19/index.html","e0eb9e118f9e7474818a45ba04a4f9f1"],["archives/page/2/index.html","f00030e6026c07cf4adaac830a14522c"],["archives/page/20/index.html","bb22beaf2684f5e396ade77eacb915b3"],["archives/page/21/index.html","6f64c687deb2b2559309b2fe06e268ee"],["archives/page/22/index.html","e448acbf2e796a247ba99787a01ea931"],["archives/page/23/index.html","b30a78417237e4b5fc15088794816f51"],["archives/page/24/index.html","b9553eeb94d08b7b829cd1889b6d2b2d"],["archives/page/25/index.html","7bbe5d45510c6e75e5b3c30f30f74608"],["archives/page/3/index.html","3b9b33fa59b92b525020814532fa6e09"],["archives/page/4/index.html","0b5672f0e98c76f8b43ef1f41dc3e3b5"],["archives/page/5/index.html","da03d549785c0db1c206837eb26b2c60"],["archives/page/6/index.html","4dc7d66ac46709ae1e243ba759256b37"],["archives/page/7/index.html","7f92bbe3e2c92c7c14fd71fd53df543a"],["archives/page/8/index.html","5aca84eb139cf93f4392da3cce84f3b2"],["archives/page/9/index.html","b5c55026d80fdf523efbdd90b937c837"],["b01398e8/index.html","947c46767db64f698faa63c25be2b873"],["b4c7585b/index.html","21761df8388703a4819b96a68c8fe061"],["b513d267/index.html","83644eabccb38c4f7b88a09b312cb0c3"],["b67f2784/index.html","bee886d2c574e2617733cf32dbcaef21"],["b6db0c64/index.html","3250d885b281d3676f1c2f8a0baeb1a7"],["b8d3ced1/index.html","165479df47bdd01a1673c628deb080af"],["b972d127/index.html","4c4c8e14d9213878456881bf8f76c9b0"],["ba46f35b/index.html","795223a6a9b1edcaf1de696135fdac0d"],["baidu_verify_DfMf5XqJUb.html","b59b6982613d5a465330d10ba1c956b2"],["bb4502fa/index.html","1da8423f27f6c1065807da6ff1a302cc"],["bb984cd4/index.html","f4e8554c6b1e6b3d7c5ff5d68b67c5a1"],["be3871f5/index.html","cbf7bb7d1048dae0408fc65f3a0674b0"],["be97bbf9/index.html","a2982ea9d318b80270e4532e59c96907"],["bef6deea/index.html","e8acb8e528b12809694d07621891319d"],["c02d18a7/index.html","834ceac6f723a0737a78a01f7da3d120"],["c0d275b3/index.html","747fdc559ce5e233e4f7ba20d307e747"],["c1989cb5/index.html","fa3c509f18417aa323a57dd451fc91d9"],["c2176cf3/index.html","bb136757ce03709db35bafe6de771f26"],["c2424f60/index.html","a9385f7188ff1ea98032c1e84f44aab1"],["c2af3f7c/index.html","a62788fdf7b1fc1dbd7af73cd4c47206"],["c3fd1e79/index.html","f44a21fccc0100cd2a18ba2faa99c4b4"],["c40a717a/index.html","73c435fe338b12700f702ec57fe232ec"],["c5057eab/index.html","15a1fbec1ddb90c5c99c9383f7f25585"],["c746a48a/index.html","903cb7a59f4545a963aa0c948a125424"],["ca3f6ac0/index.html","efd6d8a329eecead2757dd4043b0c896"],["categories/dp/index.html","f1f4f539f37d9dc382f19ee9e6b69b91"],["categories/dp/page/2/index.html","fe824e4bc3b654e787f5eccb6826276d"],["categories/dp/page/3/index.html","7263bcd0ef55377f523d7021fc5aaae4"],["categories/hexo/index.html","4854bb9eb1b9103ed44e5c230ea588c9"],["categories/index.html","7e6a0e8f8411a73064217a0c3b902744"],["categories/java/index.html","62e74edadcc96b274023a384fbedf594"],["categories/java/page/2/index.html","e8b3e96c41f16fd9fa7a852641b54ec2"],["categories/java/page/3/index.html","60c0abcb46b01e04bd164e25a4776288"],["categories/love-peace/index.html","6b1cf8d2ff4d9cdf997715e1f7a0dccc"],["categories/二分/index.html","4e05e052dd0706398ace98cd45a538d4"],["categories/博弈论/index.html","916eb2ca5cb40e14b5a6cecf7eb83bf5"],["categories/博弈论/page/2/index.html","1a4a22a5ae86333be45d130170d0f082"],["categories/博弈论/page/3/index.html","8d215de6df0e7dde2e4b79bdea22f546"],["categories/图论/index.html","9581237343ba35e3d7fd4058ecb3faa8"],["categories/图论/page/2/index.html","88da4cd42d2aebdfef2cde1ab47713c5"],["categories/图论/page/3/index.html","8fcd35f651605daa29dfc9bdf0696b6b"],["categories/搜索/index.html","3740f15df282793b7d622b50ade7c978"],["categories/数据结构/index.html","6873fc908fb56ad421e8c998fd940e83"],["categories/数论/index.html","1ef4f2ed09e3f229b8945b58aad8787b"],["categories/数论/page/2/index.html","e74eb1ff50f32c47813b648ea6c88fe3"],["categories/数论/page/3/index.html","97bcc77cd169519480ccacab50e28592"],["categories/数论/page/4/index.html","9d7c12d5f48397fcf249ada8b7911ea8"],["categories/数论/page/5/index.html","44c09616d3bd13835d6fbd9fc8d5b0ee"],["categories/数论/page/6/index.html","884bfa68aab29541d9646018ed219766"],["categories/机器学习/index.html","b967253644486bf7368f1bbb0fba78fd"],["categories/杂/index.html","cf5ab9b6fa6eeded78c4fde1d96dc60c"],["categories/杂/page/2/index.html","e7ed92f13c1e54e3055311e7ae295820"],["categories/杂/page/3/index.html","10172fbead673cf2a008f5d474895f39"],["categories/模拟/index.html","dda1e2b2fac33e599ed0a5abbb84d637"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","c6dd5936d56b890c4d27aee6d87518f8"],["categories/计算几何/index.html","459d5a0348f4401662e11dd39bd7e3a9"],["categories/贪心/index.html","2f14d37f28667c0783adcf11b20de304"],["categories/贪心/page/2/index.html","3222bc701332c8053827d716a07bb412"],["categories/题解/index.html","118e905d1dd327ef185fe79f69baea84"],["cb821a33/index.html","e63024935dfecfc882eaccd75e9ae755"],["cbd59ef1/index.html","3c68cdc6e271f16aae593712dba358ed"],["cd27113b/index.html","32e585b2a37a7ab31a4b20eab34aa13a"],["cdd10d6d/index.html","1e2e2e655f6209a074e2e3056c7896ea"],["cf682b8e/index.html","4c9ab72d1f2950bcfa949759479290e8"],["cfe28c6a/index.html","c8d5cf55a8189d1b31eb0edd8530b845"],["css/main.css","212792a8a5a39c5e76d0880ac7c085df"],["d0f16a5f/index.html","15d4e54aa40bcf4bdeee037a22ae0d5d"],["d2c81766/index.html","9ce4a87316ab57b382a9c04def2d269b"],["d2d140b5/index.html","bd02a0e055f555383ce48b5c330fbb7d"],["d34e925e/index.html","c422f7664d37bbdf845605214448fa2a"],["d377a60d/index.html","9b2353d12bf9ebd15df4d17f56e4e497"],["d5042e55/index.html","5d7dcd1ff17a29f8fd01c1265f69422f"],["d51ad0f1/index.html","01faf1121408c0d514bbc60e3f4b179e"],["d655b5fc/index.html","da3ce6f54009893c97ed203099cc093e"],["d67f02ad/index.html","41f0e2960ce91b5a6bec21500f2ac0aa"],["d6ce1fc2/index.html","cbbd3891246a5628b221833d368a65b0"],["d6da51a9/index.html","02a1f3d6b7e954cc3d367f9e457d0cf8"],["d7ffbd1c/index.html","7992176b1785cb9e5e8079f9ff20d67a"],["d971ae59/index.html","58c6125547fb7be41f1ee3e81f9b3e43"],["dbf07d5c/index.html","60cdcb78f9d3f5834acd2482283c9f28"],["dd1d064a/index.html","c11d6d2c54817685c362091328b2c3f2"],["dd814372/index.html","50814d42871726ff4b1590929da4e64f"],["ddee45d/index.html","e737865805ef040358825845b4abce43"],["de762ff3/index.html","2b2481136d811a38aba73c1f8f403a74"],["df82d1f8/index.html","6214bec13974a277945148e682b28371"],["e1d4a8b4/index.html","1664f85a79fa71f5283751a1c46da6d8"],["e31679e2/index.html","789d9f02ba2ff2e92c315a18b2f6d639"],["e4c2cc13/index.html","628ed81e29d4c97e61af5b1432521200"],["e4d2c7ba/index.html","ec706bad8d9705a751ced8087c67b20c"],["e5ffcbea/index.html","924089d546d814c1cfb32c03b9759d0a"],["e612ace7/index.html","4859481675903feb1dd76696898246b2"],["e73bae86/index.html","0075adaf330c3479bd76b675bb8a5d19"],["e7a0c86b/index.html","3f8ed95119a0c17a8b8a8a5f3150731d"],["e7b555f8/index.html","2f6a39e2179f5727fee8636115419ea1"],["e81fda88/index.html","d5b8607280c994df157cc38711278ab3"],["e85a11e8/index.html","82f0c2e80c6a5e072173213b5a2cbc1e"],["e86890fb/index.html","604ef49727ac0bdf16aa456ea7b9b332"],["e98fffcf/index.html","4f7e8baded73d368fd61e86f270d262f"],["e9da39f8/index.html","1ef82d45b95ae16929960bef0024f881"],["eb18b91b/index.html","43dafe958a4398fcd85943c1f0876275"],["eba1fb1b/index.html","8a6698a6f63927da01eaf56bb841a215"],["ec404005/index.html","a400f578c0f00ab3998431d69330b13c"],["ec4e8b99/index.html","19eacd1c3019eeb3948cde557033d60d"],["ec8b12a4/index.html","10e022ef84452399082642365eeca13e"],["ef2a130f/index.html","c6f8958f6e183914f576fa1f18cca6ea"],["f0565075/index.html","9aabda27f61aea0c60436f9675a665f7"],["f0d0bafc/index.html","3ee90ff4063660a56a5248e85621fcc5"],["f0e39cec/index.html","4702d3e31aba3bbe0a541cbf2a6c150e"],["f1a4e5b1/index.html","9ecd8fa64381b9c4789a2e547ce7fef7"],["f1aab9cf/index.html","ae22da1a0aba0307fa268003e31ff347"],["f292e0b8/index.html","651b1a04800ce90c1b8c19c600045fb9"],["f32e27dd/index.html","474cdc733ee9a4d0cd0b28f559143f61"],["f47c306c/index.html","6f97b800026750b3c7697ee9d10931ce"],["f6227d77/index.html","950c88b78d9d4493f8b33ed70e6eb470"],["f699b617/index.html","1e91076818ff5e28a74fc287405a9713"],["f715085c/index.html","a4d1bd7b3851a54f1de2adc520bb2197"],["f7f1f3b6/index.html","b8e0890d062358518b61744151c69c15"],["f8170462/index.html","77da1d1c04bb8c532408399ae4b77661"],["f8eca34c/index.html","e663a7002733c9234bfc1cd0abc93144"],["f9161795/index.html","5f8c4251a1b7cdf67db2847304dfc471"],["f9c3ad7f/index.html","db98e8326f5e6d9c912360f3871c65c4"],["fa5f812b/index.html","a4bb242d8ac8d03344a823eca745f5f7"],["fab7cb46/index.html","9c206c634684aee0f2024066435ca904"],["fb0210e3/index.html","c07e127e29352ea4b65cffa351bbc51f"],["fc584b3/index.html","6ac2e738394d7e04438a84e0c8741ac6"],["ff888e9d/index.html","358729e08a5b475edc90c7d7a07ffaa4"],["ff9df0f5/index.html","77d6283b7d265c965995d0bb779cc130"],["ffac8316/index.html","6b2fb2acd15d78eeea97e6496d73ce8a"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","be959632a0ee3aeecf5a4a332c43bbac"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","0099b5dcdddfc322dfeaaeff50ea6641"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e6db41212ec3d25af7a5e163648b93f3"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","91bd3f9f6cded1de1747c7085bea00c2"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","6948600bdb4b6ba68794add764a45620"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","6d14a24412d186778e9652566b53cd64"],["page/11/index.html","27f28fe7df37970c46eed2043f0e8517"],["page/12/index.html","23313973a66708cc1898cd8ad2e3ad48"],["page/13/index.html","3bcca4dc6464ae0c0be6c671aa430d58"],["page/14/index.html","2ce7d71c422171bec00028ac0d183680"],["page/15/index.html","039a3ae390add64ba4b057f7a2af7bfd"],["page/16/index.html","1a712eda0d136a304df7c8bedf41df8d"],["page/17/index.html","fb1bdf38e7d073e806f236f6a9cc206e"],["page/18/index.html","975ffbf161381518027e139f54a38a12"],["page/19/index.html","800f7c21c706fa5e047aae366c62cc2c"],["page/2/index.html","e4a2c1c5cdd3ab45781d2d5156adb8af"],["page/20/index.html","0195724dc18ff1cd624812c2f36325fd"],["page/21/index.html","f9cba72df61052ea69914bffcfc268fb"],["page/22/index.html","4a664935a1a82bcc0f1c7b1a0f1df10d"],["page/23/index.html","9e2a338274ce28435d11f3d902a04385"],["page/24/index.html","9c4fee7da3d212768dabbe3f0433c6a8"],["page/25/index.html","6af1f0c752ff1e694471b4ca4844dfa0"],["page/3/index.html","066a0533c8d789da94ed69c9b2f15663"],["page/4/index.html","9e2cdfe3e587ea6e9585b5e8043bd48d"],["page/5/index.html","1fb278ea3228f3d6848528f4d5544598"],["page/6/index.html","b1291aea44908f6b6f6786140fc5983d"],["page/7/index.html","cb9c20f93a93c594b65d9d86e6fc61ea"],["page/8/index.html","7c49f4970e5ea871383a46805fc32902"],["page/9/index.html","9edd59095fa7783756ff1c3893ab20f2"],["something/css/index.css","a26eb29138b01de0374e5e5f0ef2cb46"],["something/index.html","f5e5ae7abc3e4ba6c2db1dd39249d4da"],["something/js/main2048.js","65edecd4a470eeefcabc6a5bbcca87b9"],["something/js/showanimation2048.js","d17d55c85634f199cefe9119ee0ed981"],["something/js/support2048.js","e23221d71dbca087ef9b970bdbe697b3"],["tags/Floyd周期检测/index.html","5de23d6ca97d8ed229ddda8c96f7d970"],["tags/IDA/index.html","a94bb5ed9a433468f941493baf96ab48"],["tags/Manacher/index.html","d1607cb0113f4ccf4eef01616d2aff63"],["tags/Pollard-Rho算法/index.html","02eeea91c476b666c4b32cb311b7f6b9"],["tags/Python/index.html","7ed2614b8ddc3817f53174c5fb1ef7a5"],["tags/api/index.html","e586611cad703ed3ad51c0500f3a018a"],["tags/bfs/index.html","1b3c15bf69a0e47c92b79855f3aaf5f3"],["tags/bsgs算法/index.html","fcf228a68647377c49ba3f4b8b9de12d"],["tags/cf/index.html","e01d84e4e26561f1253b91291743e0e1"],["tags/css/index.html","5ffa3950016045d192d5191156b4d3c2"],["tags/dfs/index.html","55956426266c464421e40a644b535e76"],["tags/dijkstra/index.html","3b0d97a700819ea284e6f83282e46d0b"],["tags/dp/index.html","3fc5148fc591acb6974b4ce4e4b63b7c"],["tags/dp/page/2/index.html","2429585139c6988a31e66c32fdb7f755"],["tags/dp/page/3/index.html","62d82a11c0c8cb179b4e60a973e697e9"],["tags/gcd/index.html","be4f2d1c7771b3b78fec06242856b1e0"],["tags/hexo/index.html","e76d4e71db4c7e0355ce5cf940f53126"],["tags/index.html","3abef7063034a2a60d64dd4bed11fd36"],["tags/java高精度/index.html","f3286ff50a2a355dd6d272098a89c6a8"],["tags/java高精度/page/2/index.html","500ac15ec9228bae3bbdd0ad6a5d32a7"],["tags/java高精度/page/3/index.html","328db1d200a0960be2b59027153189c8"],["tags/k-means/index.html","8e7b3c6170a2a6bd6da97bcf6ec12fb3"],["tags/kruskal/index.html","ed09e26906ccba7590c24df4f2caee18"],["tags/lcs/index.html","e0191df0b0aeff2d61a74852653eeec8"],["tags/leancloud/index.html","067e778f18bfe5c0336462e7b4623dbf"],["tags/live2d/index.html","78281f349a6120fe78101e8b56fb052d"],["tags/mac-OS/index.html","c698e3c6e2e20859857b3a4c42a8238f"],["tags/prim/index.html","e65ec18a005699aadd831dc0b9f8c2e8"],["tags/revolvermaps/index.html","2cb39934e39d4ac071d2f3591c1e8931"],["tags/rmq/index.html","73bf748a24d66aa8f78916f0457fcfc3"],["tags/sg函数/index.html","cc075a37edb43cbbe04e3a3ebba961f3"],["tags/stl/index.html","4a6456e6cfc9a2d39ae90b2cb1bf747d"],["tags/三分/index.html","588913520f0212d2b1cc6e385b4369c4"],["tags/中国剩余定理/index.html","f5bd81b9d7a957796ac6ea9221bb252f"],["tags/二分/index.html","4e5dd5824dde317f9a3350ea2427514b"],["tags/二分图/index.html","494a19428030cd59678a16bc6472f0a6"],["tags/作业/index.html","31c85a2a5ca5aea5c799a31bc2e58569"],["tags/全排列/index.html","ad2dad9613e5ddd02792bf3caf99b37b"],["tags/分割平面/index.html","f8406ff24fa3643c67e0ad62be85d9d2"],["tags/分数规划/index.html","06ff65d259367d58fa4cf7040f721bac"],["tags/前缀和/index.html","6954d4d4da67d6bf5fae584767e90d23"],["tags/勒让德定理/index.html","aff80c95e547038dda0ce926b89a2916"],["tags/匈牙利算法/index.html","fd1e8f4e5c2e09b2ae4ca6273ab54ccd"],["tags/博弈论/index.html","09f060869b63838fbca1cd387474c747"],["tags/卡特兰数/index.html","7b88207dac2f9167a4d93f3cbbbd4754"],["tags/卢卡斯定理/index.html","72feecfae7ef38bed6e935b16eba37e5"],["tags/原根/index.html","0bbf334bc0e85a96d5fd4807acc633ea"],["tags/四平方和定理/index.html","6d8d728bdb9ada42ba49e7b6ce98c3ba"],["tags/埃筛素数/index.html","7768c61c299f85374f15f0aba0653b54"],["tags/威佐夫博弈/index.html","e99d0806d247c4b6fd62c32aa1fc4a31"],["tags/字符串/index.html","8fe79161fee75e13b88761ea1bb741b3"],["tags/容斥/index.html","4ca7b30e80ec56e9b2ba50e592e6544a"],["tags/尼姆博弈/index.html","eee3547ca52df78697c25f6388af6423"],["tags/巴什博弈/index.html","86d600a18ff05ff6286e50bd07baef27"],["tags/并查集/index.html","614d86f9ff87c9a2b729ab9f3d715aa9"],["tags/归并排序/index.html","4c7ffed40ca2db36b16ee1fa37d220f8"],["tags/循环结/index.html","233deafbcf6664cfe82f77baba1547db"],["tags/微信/index.html","aed45b1894a190c2876ef604b6459869"],["tags/快速幂/index.html","7bc6918716a42808f369c70ae2593bad"],["tags/思维/index.html","d7db03b27ed796bcc50ee9e1ff93b064"],["tags/思维/page/2/index.html","8668ce2c8a08cfccab9a75b6801e0052"],["tags/扩展欧几里得/index.html","e0eb9bd796a96279c267677c662196bc"],["tags/拓扑排序/index.html","7412077e85082487aada1ea02e4b2a15"],["tags/推公式/index.html","47311b2fd1f3aa627de94b39af78e39c"],["tags/推公式/page/2/index.html","ed5117b545cdf877d586f34e72cc3993"],["tags/推公式/page/3/index.html","b1c343c1b5520039a27a76acc9e08022"],["tags/数根/index.html","785361dd94f0707a6a702c515bb4b9f1"],["tags/数组加倍/index.html","7a20ae1bc37372a42234b9a58fbd2096"],["tags/数论/index.html","390f4856774dfcb4ca54b09e17a2e2fe"],["tags/斐波那契/index.html","7eebe89ba315e3fda164474baa6e3ac2"],["tags/斐波那契/page/2/index.html","16059e1491747942dacb1d7d1f5d4fe9"],["tags/斯特林公式/index.html","dcfd609815e0bebde81a5d96c6dee0e0"],["tags/斯特林数/index.html","afb7e47b0070021c49e63f817833a621"],["tags/最小生成树/index.html","1474e2b2783bf9cc29760f6767a133ac"],["tags/构造/index.html","4a7b2e9e45318d6def7427bb8f6c8ca1"],["tags/枚举/index.html","a5286aec80c2c3c497dd85fe46053e3d"],["tags/树状数组/index.html","eddf872ba980f44408fe00583185f5f7"],["tags/模拟/index.html","1e2040f2e8313fba07a18cd218d9105d"],["tags/欧拉公式/index.html","d2c99bf1a1e83361722285133c1d5b77"],["tags/欧拉函数/index.html","780f679546094a68662a0261c380bfd5"],["tags/欧拉路径/index.html","4d63d6f6f80e86a2ab5a1af7e5a360c3"],["tags/汉诺塔/index.html","05088db9b66b2e80e3c4546dd1fca339"],["tags/海伦公式/index.html","e306694ea5b1bcef8baf2ca1394c193e"],["tags/生日悖论/index.html","2ab63a8f934bb6561dd7c08a725a995a"],["tags/矩阵快速幂/index.html","ce89d53be077cf249f2425f1920eb4f1"],["tags/离散化/index.html","011c1155f7de4f87afdfcf153a431101"],["tags/米勒罗宾/index.html","08e6d02b35e3f75eb66ab86d86d69030"],["tags/约瑟夫环/index.html","de2570c0e348da8475813055998118ca"],["tags/线性基/index.html","037aa8626e3ebe963312aa4a937884ea"],["tags/线段树/index.html","d5487a57ba4939c7d15d21b8760d9d31"],["tags/组合数/index.html","62ab460956eec0318c7ca0d6fc8757dc"],["tags/组合游戏/index.html","12529df373367093ce7de0b59d5ba3b7"],["tags/背包/index.html","057de045ba66acd88aecbe3ba67bdcd4"],["tags/莫比乌斯函数/index.html","ce9f884e7dabec9284920b32b671de60"],["tags/计算几何/index.html","26f40b57070523b3e008f8e9245715b5"],["tags/贪心/index.html","a8d967610184e7a094100e6abdc87f28"],["tags/贪心/page/2/index.html","038cb96961b4168b0678dc72bd8788f9"],["tags/贪心/page/3/index.html","e874c0ecf96231a90fd0e6371707b637"],["tags/逆元/index.html","ffc337d63837dd0282cc6571cd284d48"],["tags/阶/index.html","e37bd1893f56dc7fee2df5c8b153fd15"],["tags/鸽巢原理/index.html","d7259a3e64ae187abf65d0940717c4e7"],["tags/黄金分割数/index.html","4fb09afc431d4fabf144a288da389642"]];
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







