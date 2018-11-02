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

var precacheConfig = [["1076b80c/index.html","4a4d2aa764d0c72d931cc53efc84a93a"],["10a23843/index.html","14eb6219fb54b740c48e1a2e7833c47e"],["10f322b7/index.html","0bdaf2f6af15299537750604f56c4f35"],["1109bacf/index.html","7698e0d6bda98ceb826322eb1bd13287"],["12fb71da/index.html","62b826a7b0cdc65aa21daf24fe36ab54"],["15885f20/index.html","23629160d1ac0b56fad3aa1b5c162101"],["15c1232b/index.html","4b080ba29958a01311fbb7d9f27f4d67"],["16236ee/index.html","7e3c1920af3c1855c0951bfee23e0b14"],["163226ed/index.html","01f6742dba6d8be76ffa9e6607d3249f"],["18f146f5/index.html","52aadaf2b9503a42606fe9dfa4a8bf32"],["19356a39/index.html","02286c4e5ce61d431b6e6b357cc0c682"],["1d6b220a/index.html","9c6a9f9f58f80132cab35fa275a446df"],["1f726e05/index.html","1764e41e801acf70a6c3ce4b28d9399c"],["205f0ecd/index.html","022ccd1c11e5cd5d129388bc0d0de2d7"],["216acbe1/index.html","375717a69ecd630511c0054b779f32c6"],["223d29ea/index.html","4d14261acf58503bec68a1471705f2b5"],["22830a9e/index.html","3d8bc54e842a6df12b2c64ad5a89aaee"],["23c9f6c3/index.html","d9c915dae9e4beaf500607571f27b68a"],["276c2267/index.html","188e1436471fa697c986622860e713d2"],["276c371d/index.html","b6fa789126348b16c91139d759a217b2"],["29b25bed/index.html","21e6189336acf0c7121cccbae2549b87"],["2d3ae01/index.html","ffb3e9846bbd270f53a4b2ea6f20bef8"],["2d58815c/index.html","3b4689582e3021a3d42cb14ba551e2c2"],["2e9cbb0/index.html","3ebd17a3a757be678ef9188537edb04b"],["304f1fc6/index.html","8238a6e25571571015680333187522d8"],["33eb241b/index.html","0abf1e8aeb6321f8fbe7ba23e833af15"],["340b38ab/index.html","43eefcbd7a02c3ffac6f51eeae4a1e46"],["34784cdc/index.html","f577e937841c2f5c2ae6d784fef92b89"],["34822d81/index.html","179ae6dd2320c4a4039a0d5278063f34"],["34ddef5a/index.html","493de86fe7081369db3460d636220a29"],["34f920df/index.html","3316c3dcd322899d056baad645424b58"],["3697a1c/index.html","891a3e9f84faea4a3eea7e0e1b69425f"],["37192e8b/index.html","4d0a895473bd0373c170c3a4cfa02527"],["37630519/index.html","fdb611abebde3233d5d7029f3fcab476"],["3a23cc5c/index.html","33c12cce78370f52ad6541ad1a7e541e"],["3c67f84b/index.html","55a90dfb2088479c22fa7bf03582cd0a"],["3ca6f02/index.html","35f82f39b28c2e7efa4aca1ed9a472b8"],["3d8d44b2/index.html","8003a93ace9bd7be46c3af8986615c57"],["3fb087ea/index.html","f5f0ab32a3c853874a4e84fce5f1a2bb"],["404/index.html","5840fdb4b2fef4f1eeac1dfdc805e94c"],["40687d49/index.html","0635c8e06a5a651dc975030d1b3fabfd"],["40d6aa63/index.html","3e4e67dfce724452c8a8aa5f6ef2c985"],["40f7970d/index.html","cfa0443834f36da48d37f1245427b384"],["41d56d9c/index.html","501d12841daace8cebe60a7752f7fdcc"],["41f5723f/index.html","88c22f8d48752fca110debe8d82501e1"],["420f3cff/index.html","0f2282564121c95a746d001e598910e3"],["42b4455d/index.html","1f81b10d723fc024abbad633ba0595ae"],["42c39770/index.html","34cf96c5f7e7a11fe609b4468fe3730c"],["438d787/index.html","c4b07031fba997bc4441516ca6d5c1e3"],["455762c8/index.html","b751b442cd95c94557ac681b60bf700c"],["47a64668/index.html","4a315c309c623940af6a9cab87bab55d"],["4a010063/index.html","89ab38d8cefec29aa2ff4176322ad867"],["4b67d3c8/index.html","73a7fa79f45399ee93212058d54334be"],["50df051/index.html","d68e51f02730131c291aa4e6f4abd0a8"],["52580325/index.html","c9b72b01378e41e1b6f806b830f05ff1"],["52b56662/index.html","bf2bc1077e1568231ef5b0cbefc2fa91"],["52e47f72/index.html","0404d86ae43ddc0343712b0db06ad24d"],["531fe264/index.html","1a7dd08b9f910f261c11ff713539b2ad"],["560387bb/index.html","26fd9469da3169d5aa294c19ae395a5f"],["561c553e/index.html","784b43a75c48b8e9b7e425705eef39f7"],["56954db8/index.html","bf41300c5eb2d533e26cd6ff2b6b6d1e"],["57427b30/index.html","a9ce1d787b1567d2d31ed577b161edc5"],["589bd519/index.html","fd73ff4dbde8f669fa8a17ae96d3cd2a"],["59d4cd0/index.html","8748b968ec4705585619418a88562d2f"],["59f6b91c/index.html","fa481abf1b68c8b52f08dd5466c271df"],["5a29f513/index.html","b8117327be3649d1bb0982afa0e211a3"],["5a4c73da/index.html","6713e7dfbdf972e11099c9e9801ad367"],["5b7386c2/index.html","38b99cd24940764521f438ce2a500c11"],["5c6528a4/index.html","fc96b964ff2024a419f55e0997a09584"],["5c944241/index.html","8f9c7081608a41d2c68ddf69a6d580e3"],["5f826ba6/index.html","338c8310b395058201e91426f3df1ce5"],["5fc91746/index.html","c7dacdcad70d77545070c0c9e0ebfa67"],["60992a21/index.html","967664d35dab071c2334185eb7f88558"],["61030f3f/index.html","5168efb429e9c8d1589f0ca1bee457fd"],["61acc2f3/index.html","877a8ed5975e36b19f49287cd6f6c501"],["61e3cbc/index.html","8076891b642c9bf07628216f44c27db7"],["62f8e345/index.html","b275842677ad42845797af8e412a86e0"],["63dfb318/index.html","78a31605c2b04aae476c8c85652179d9"],["650f0a27/index.html","cb24b76659315eda7d6833c3d6c14826"],["655cb7bd/index.html","38adb16a23ccc1a5619c87004b1a5f8a"],["659aa8d8/index.html","85f5f4c24fb00055bbd8d4fa00e64f57"],["65c1781f/index.html","30e1585882c0fe4bf0b568f66a6004fa"],["66dd1680/index.html","1bfa4b7b39cc352e2534f12a19c0646d"],["67dc8b75/index.html","a0194b18efb4bdc7e3a859be069f899b"],["68903b21/index.html","ca8bae9e4d011dad2f15f6d89ef394dc"],["68a46f0b/index.html","75f32687eb2cf1ef01c84abf188a7913"],["68e48a7a/index.html","6efb9d1e25165cc0fdd1f42d4fd9929a"],["6a2b981f/index.html","b71bb65b42fd542b454600e2b89e7697"],["6a4cab08/index.html","6e94fa467c0af631f52a31851d6caaed"],["6a5982f6/index.html","4269481075a8bba5fcd9804aac9dd9da"],["6bb0247a/index.html","2b3f0af674233ad7f62c6399d07b6c6e"],["6bcdcc46/index.html","0552bd3a89ea98beb10fef9c3118e145"],["6e572fe1/index.html","0764bbf0e277c49745d69fc08bce6c80"],["6e6d7226/index.html","3fc9081fd04ac5692af4ea991ee9f648"],["6ed0cc8f/index.html","d51894f53a441ae16987d03cc09b8ed1"],["6f66f8f8/index.html","00d6bda2a6e3d4de77e77390f139cae6"],["6f6ab2c9/index.html","1bf2195400f43ded86a9e8bfa7724570"],["6f93207a/index.html","66d976877dc58a38f9a061a153ea1dee"],["70032e53/index.html","f34e79d7daa6831322e82b22a66b0d4b"],["71a9f0a2/index.html","870c3cde46070a64ff6d5118bdf1e97e"],["73d62e33/index.html","84f681931e0768411985f99e53984835"],["773303aa/index.html","f8c05f277567796570afdec99113f026"],["783cca3a/index.html","31a23aae3792c05b6e7dd9d9b732e77c"],["784bc526/index.html","3c78b906bb5671abc77c70e06d4a7b5a"],["7a72e0ec/index.html","92d3150bb79fdf5b16f35907b40d5030"],["7becbf63/index.html","6554a5d38b9de2d2be42c806fd508ec7"],["7d2b0472/index.html","55ab533ecc27ad2ed3fe0c7f7cbde938"],["7dfc273b/index.html","d5ef1e09f66137dbaee77ed83a27504a"],["7e7621ef/index.html","990997ed85b3d232cff0126a19649554"],["7e7c23c2/index.html","89c8580d0390295939aeffe09e611623"],["7eacad98/index.html","9beb7901977cb2195b7e32404c1007e0"],["7ecca125/index.html","9a3221f17f1c3630fa1a66f8ae58a136"],["7ee1bb3b/index.html","0827fbd2fd41b803f587423f6d56a83c"],["835a9757/index.html","aa48c087a30c95f78be05e5fbe76918e"],["83978c3d/index.html","3f4eddbbdc90224f9923abd6abe0a858"],["8434b274/index.html","504acf88ca8b5721fb1b0a3dc3b8c415"],["84b8f7c6/index.html","89316e80b4e398456e84faf200d92768"],["84babd30/index.html","647dcb55c5f56d2e0491e08826efb13c"],["86eadb67/index.html","3338adf7a0b203237aafc7a4891408ae"],["891ad037/index.html","81149d4f7850316609ee297d1507fa1e"],["894818a5/index.html","9cdea64d4760be7275021e384134dacc"],["8b10921e/index.html","1f9dd105384b7d9e2851ba3dc04eb6c5"],["8b8f3dfd/index.html","4b5a3e4bae7f22db30ff8843cb4e4702"],["8c5ac577/index.html","771443cc7fa128c3058ad11211b37483"],["8e5f1388/index.html","e12e20f1cfddfcbf1d83904b751cacf9"],["944a2722/index.html","76687770e72aece15270d8563ba286f0"],["94b377b3/index.html","00696765e3bb6d50b05cf24ebc16d23d"],["9562e52/index.html","a1a781f610e5e78f096072916c23cf8b"],["98ac8a82/index.html","11733708305fb721cebf5e013134c6aa"],["99dc77d/index.html","6d2399b2a2ae7e5539c3e26ddda43296"],["9a99eb64/index.html","27769d93975289bbc576c648a6c87123"],["9ac96b1d/index.html","e35e2922565711cfb435fa8dabfa10f4"],["9c66e3e3/index.html","07dea76e72711ed625c700ed580c9adf"],["9c67c163/index.html","ba2c4ef49f7733f09fad948870e807cb"],["9ee158e1/index.html","27fbf2871ddd190989d3b26ce574b679"],["9f1d8b77/index.html","4c3e08df9a7d1e7de1ce7529ecacc866"],["9fb00d50/index.html","e0f161da7f525870906f7bb292a566bb"],["9fe4182d/index.html","1f2487fd49846a772dacb07b265e23ae"],["a0e37ddb/index.html","e34363637a296c1c040dd9a61cfab690"],["a1e708e2/index.html","e470b0e8415ca4ce39424de37d973ca6"],["a20ca391/index.html","4bcb65aa46bf7558327428305ce46f0d"],["a2c7bf23/index.html","2398dd004a666fd08fef80bd792b5deb"],["a4b21e43/index.html","41795254cb1beee2ff761f039bea17a1"],["a5bf9421/index.html","b1d8ee7a5acd7bdf2320189d39c16615"],["a678482f/index.html","5f2462ea23d37f245ddd6906a1a0ac25"],["a74119db/index.html","f72f1a13f99cd6d8592458b0f94ad049"],["a8a3dabc/index.html","18e1a025a72c2c08bc5d3a67989bf529"],["a8a8763e/index.html","8e830ae84dfdfc628f80724f71e95b16"],["aba8e35b/index.html","169e5fb57d29679e92647670083bedd2"],["ada46a5d/index.html","5b15dbace2718ce1258183f7b8be8fcd"],["archives/2018/08/index.html","65e7538eed4b509388dfcd6957eb812f"],["archives/2018/08/page/2/index.html","d21a8bd0681c350e2419d37fbccd3eee"],["archives/2018/08/page/3/index.html","48c8a79969bc5959d019000833a7a8a5"],["archives/2018/08/page/4/index.html","7804485219d2363ccdc968ee58d00b8f"],["archives/2018/08/page/5/index.html","fe0192c30443de6c3522fc29c51701f9"],["archives/2018/08/page/6/index.html","8cd43c4f6518d227f8802eda045e0e5c"],["archives/2018/08/page/7/index.html","15c84ef3c491b5e5609cb6d5a199342d"],["archives/2018/09/index.html","6030e713ccb6af299f43a450f8683fcc"],["archives/2018/09/page/10/index.html","477e886312e95bac9897bd033b2af83a"],["archives/2018/09/page/2/index.html","7372ec667ab94713571a282bf6f5ea41"],["archives/2018/09/page/3/index.html","2002d9abe6e6e002a8b37e7ce3b3326f"],["archives/2018/09/page/4/index.html","265cb4d5f2c2064f0df255fc9d7734a1"],["archives/2018/09/page/5/index.html","984cfa50ea3e58da1a7b1fcdd6590dcc"],["archives/2018/09/page/6/index.html","44ce1a2b163df0fbf46ed90aefa17fc3"],["archives/2018/09/page/7/index.html","667dd580b3697b79d00796a313d3d9bb"],["archives/2018/09/page/8/index.html","16d5de8a83a480be73418dd1723ca148"],["archives/2018/09/page/9/index.html","45d1801de553597007180d009d2fd4dd"],["archives/2018/10/index.html","2eccc089d70fee22000f520c69601d84"],["archives/2018/10/page/2/index.html","ebd5c5a81cdd4e65a546897ccb4d2c82"],["archives/2018/10/page/3/index.html","4e1dfc352612ef09198f389caf1e8cf2"],["archives/2018/10/page/4/index.html","21ed8f1c8175b7bee3536da667c14e6c"],["archives/2018/10/page/5/index.html","34c7f96b20f2a9a505169067d30cbddf"],["archives/2018/10/page/6/index.html","0b8668d02aa0323c156bdf07dd63bef1"],["archives/2018/10/page/7/index.html","ae194a193b6f3f7795f26d8fc33034c8"],["archives/2018/10/page/8/index.html","9f5b4e628ce5e9142b716fb9a10a5a59"],["archives/2018/11/index.html","67b3c22c396a4731471ceef5e7650500"],["archives/2018/index.html","aed2f6a643a38ab107eadee81eedef0e"],["archives/2018/page/10/index.html","b556aa517464ebb8ed364ea01934337f"],["archives/2018/page/11/index.html","c4577beebbd41a7b3abf57911fb654a8"],["archives/2018/page/12/index.html","dbba687a87b143ac0c9b55d55072436d"],["archives/2018/page/13/index.html","1ee26198dfd661a894e12ff30bd05955"],["archives/2018/page/14/index.html","8793ba4aad4c5959928a383f5350c7b6"],["archives/2018/page/15/index.html","03ec6db0d8dc8ac166b68a4c3082aaea"],["archives/2018/page/16/index.html","b2eae7f30dcad242467c34e6cedc7211"],["archives/2018/page/17/index.html","adb93458685aa4e9920a298df1b5d8f0"],["archives/2018/page/18/index.html","ddb2b52a2992ee5fe97cfd20c4ffbf63"],["archives/2018/page/19/index.html","ee7c9f379a00c0a5319856687e79fc5d"],["archives/2018/page/2/index.html","25c6855f9d30e30573e485442e9dbbde"],["archives/2018/page/20/index.html","affedfc90f0cd226e34801e187e5cffb"],["archives/2018/page/21/index.html","e5d39724f02e1b024be982acedb3cb23"],["archives/2018/page/22/index.html","fd43fd309fd4c408adc17ec7857c1d95"],["archives/2018/page/23/index.html","ccfc8dd14e123faa041589dd8057fa05"],["archives/2018/page/24/index.html","c87abc09badf7323da4a3eefcf443085"],["archives/2018/page/25/index.html","9a05993e2e0210d095a963f61f23f8ab"],["archives/2018/page/3/index.html","06317b7a81473594af27d325551a4ea2"],["archives/2018/page/4/index.html","ed8c20175bddfa01723421c8763910ce"],["archives/2018/page/5/index.html","17b58812a53fce499cf47d497ec9892e"],["archives/2018/page/6/index.html","c3a0957687280c780ca54251f4d31e22"],["archives/2018/page/7/index.html","35dc950d874ff3bfc5ca28253707f00f"],["archives/2018/page/8/index.html","d308d2828305bcdd8d9939738da351b7"],["archives/2018/page/9/index.html","ea6396ce88c55cb1dc4a38993400a405"],["archives/index.html","478ebf50f5b56bcfba7d43f25b35e565"],["archives/page/10/index.html","f30ce745f8d00f35e548e9e3f77f461c"],["archives/page/11/index.html","e2ab1943b044fd212250428bdf876f13"],["archives/page/12/index.html","4c44d7082570d498ff671ebb04f96972"],["archives/page/13/index.html","423eb25ed8a384d9a0fab1e1771d159e"],["archives/page/14/index.html","2ad1f81c96b1e9f4076de7e3e1edd20c"],["archives/page/15/index.html","f571ae6569a8716fde97415ea0512a08"],["archives/page/16/index.html","5f4bc7cb6b2a3e6209c15bf882d9816d"],["archives/page/17/index.html","3f5cdc0a4007bf0c04eec01936710faa"],["archives/page/18/index.html","7b7e4d67479f9043c8d1f761aa3c48ec"],["archives/page/19/index.html","a8021f82f9d0f7752c3e8024b70f5fc7"],["archives/page/2/index.html","01e8d08be6f9672a8239f6a336965624"],["archives/page/20/index.html","639843f9d0062fef84944276eecab078"],["archives/page/21/index.html","683203fcb8155c1f8569aa675f58aeab"],["archives/page/22/index.html","1a900f10e789625a8e1f6ba1aa3989b1"],["archives/page/23/index.html","e30a360433d53dc2622b178addda219d"],["archives/page/24/index.html","0231ff1023629b4e5c3bb5a5a6368208"],["archives/page/25/index.html","98f2d9c4e5fc12369721b76ce3be2adf"],["archives/page/3/index.html","f291ccb83f7d81777a9ae936e870cf56"],["archives/page/4/index.html","ede1d0024cb7489355e956cf4a01f8db"],["archives/page/5/index.html","29a0bf2a5fcbddf633e80e5caa67f111"],["archives/page/6/index.html","6ae0b778aea5e1409c127e99029162ba"],["archives/page/7/index.html","bbf382e6c239a5114039bde619f026bb"],["archives/page/8/index.html","2129caae91b92fc47a8cf1927c5bf2f0"],["archives/page/9/index.html","4af5b01684b4021482626d5cbf86ed9d"],["b01398e8/index.html","394f144c41f653033653fd148991347d"],["b4c7585b/index.html","1a7705a4e9c892a5dcc7f0ed8682edc4"],["b513d267/index.html","6a945d7ddc4d5ed9e4c6777fdb636ea0"],["b67f2784/index.html","6957ba56ac07c173ce60dc83994a7a4c"],["b6db0c64/index.html","212b7abcd480da77985b9323a1512974"],["b8d3ced1/index.html","d5678bd040a8df601943cb6808a09e37"],["b972d127/index.html","b282fef5687f36cc5e46594b2e831964"],["ba46f35b/index.html","f970d215509932bb7c99311d433a1ec4"],["baidu_verify_DfMf5XqJUb.html","4d211f23b66c53694336a32733208e01"],["bb4502fa/index.html","95b95c160934b3a6d04d473e96b06b2c"],["bb984cd4/index.html","29f5f9ff50f84bd3a587c17b3721e165"],["be3871f5/index.html","5a92ace13f84d2fe06618e17c01460e4"],["be97bbf9/index.html","1a67def31f864084d41074db1723e12e"],["bef6deea/index.html","f60b0b29826dd16e364b98b75ed78e1e"],["c02d18a7/index.html","fbf365b4e4007b5a09d3cf08009acbd0"],["c0d275b3/index.html","bdfa47d3f140e20d5e45e6f7e346c4a7"],["c1989cb5/index.html","eb33afcf843b3c0ec643c914c92d7cfc"],["c2176cf3/index.html","6d3743ed901aa91df208da4fc5c712b9"],["c2424f60/index.html","a069316af8bd526d53ca365ca08fc49e"],["c2af3f7c/index.html","17d7fad9c8e3f2c1cacecf6ff0d95e49"],["c3fd1e79/index.html","cb32150be2edc1ab63bc29f78bc6d181"],["c40a717a/index.html","e4bad95f8d1cf2ab3d5b58bd42215e81"],["c5057eab/index.html","5b140e3cdd09e0ce5f561ca0f4d0541a"],["c746a48a/index.html","047f6b50f133b41559ac13b2c3ec91c3"],["ca3f6ac0/index.html","8b8aabd533641d0b3e0c7a75594819f4"],["categories/dp/index.html","318c16585d2d097545d0634b983a5bca"],["categories/dp/page/2/index.html","7943baea265699a3de47ca4101c76d50"],["categories/dp/page/3/index.html","27d3853d444ddf98196ded2a41ebfa3c"],["categories/hexo/index.html","4d8feb79c7b2bea2633074dfccd1b9f8"],["categories/index.html","c3c38da5c1cc52d668ee94e535720314"],["categories/java/index.html","12b180f89634563418daaf90746959ad"],["categories/java/page/2/index.html","22bec77aa4578d5ed1552723269a284b"],["categories/java/page/3/index.html","e96b0c8d42cbd624e2354126a422f9f5"],["categories/love-peace/index.html","09125e6e53f90fe2b370ed486ce42cc4"],["categories/二分/index.html","d06c448cb8d2f60c080a2d0cdb7c3179"],["categories/博弈论/index.html","10372047186e1f26b6b4b8c5f2b9c8a5"],["categories/博弈论/page/2/index.html","331136d5507ec0c7c3ae76d46f39aaa7"],["categories/博弈论/page/3/index.html","09c395529d6f2f9dcea373d356b11671"],["categories/图论/index.html","a27a4771d41db0f8d82269eda74ff656"],["categories/图论/page/2/index.html","b9c403f3a69b5c88b4e21c2057d6ac4e"],["categories/图论/page/3/index.html","cbe796793b89af7cdead93ff60682fae"],["categories/搜索/index.html","c13bb4dc654f8348503b9516c265dbd9"],["categories/数据结构/index.html","b8d1aca947cd3f37f4bfe2169a0f39cf"],["categories/数论/index.html","57599b4f53c724f5850c460ca160f8f9"],["categories/数论/page/2/index.html","8977b4490b09b5108dff0b978904a70a"],["categories/数论/page/3/index.html","45da29387734da3e562ff7dcac2988bc"],["categories/数论/page/4/index.html","c94f20f1af697233ccd55eee5482c9e9"],["categories/数论/page/5/index.html","3ee0eecca7e7e32f71aecf78dfee7630"],["categories/数论/page/6/index.html","cf85fca7f151b6187b278440e2ab6c10"],["categories/机器学习/index.html","965fce00cb5d768dd12ba8b9847b80ba"],["categories/杂/index.html","21b5bb71df36255aaaf21a021f8aa8ae"],["categories/杂/page/2/index.html","7397cbbba8343d5626dd6f4b117524d7"],["categories/杂/page/3/index.html","141799beb613d88212768c9155caae17"],["categories/模拟/index.html","ad03b4855567a5a40d70ee49ec1bd58f"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","23a9d6297a0da5d0599db2ab0bb08275"],["categories/计算几何/index.html","f3e46de893f8f5058682dc32c3d44899"],["categories/贪心/index.html","4a2b9cf687e80c55047d180e30ddf607"],["categories/贪心/page/2/index.html","64f19619054eb7edc3104979a320aff0"],["categories/题解/index.html","7b5f73fb04dd5c4799e6e99bd00f9016"],["cb821a33/index.html","18340692e1e8fdab2e0298efbb088834"],["cbd59ef1/index.html","b1a6cea14146973515c4361994f06ff2"],["cd27113b/index.html","9de0ed09ce592deda495ed44f0c2c43a"],["cdd10d6d/index.html","3dad2d7d2ba55b20c9c2e94de33c9a68"],["cf682b8e/index.html","ee3d3f8bd91f8d972c4c41304b7fb01d"],["cfe28c6a/index.html","2eae3f1fba364fcb512aa7f217c1818e"],["css/main.css","99a94882536429d31c2cb40ae0521de8"],["d0f16a5f/index.html","3bf9c8fba35719b29d4962875713f32d"],["d2c81766/index.html","70b247557e196b34e4588ee7496b28cb"],["d2d140b5/index.html","5f5bb545e70f1572a49664691b75d132"],["d34e925e/index.html","e1a932b75b04c246b3c12f2551f7d796"],["d377a60d/index.html","0088f22ccdc88add30c6819a42d8e650"],["d5042e55/index.html","eca6b534e9b33f3a1232b44d4fd29763"],["d51ad0f1/index.html","7b5291c50566931d5ca68d3d8960a8ec"],["d655b5fc/index.html","0a6828ce6e9f17d255d437ced2168a82"],["d67f02ad/index.html","792f874fae343fb7880c15658eb3df04"],["d6ce1fc2/index.html","49aea7be8ecba9997ca09365c0017879"],["d6da51a9/index.html","08e677d4f8706d1ca3e53946c0fea04a"],["d7ffbd1c/index.html","7b0c4379be471e835a89c4d9e39a0327"],["d971ae59/index.html","f85e6d50eac3252c59f9cd2f48629668"],["dbf07d5c/index.html","17e43f7d714681b1b2b202a2712fc549"],["dd1d064a/index.html","2ec7709a75dc6609a002e061acc11c94"],["dd814372/index.html","f60f0d3d0ec5dfb411ca7fe204b44eb5"],["ddee45d/index.html","e650c1c2c084b5c17d8d3c7d7b4e630b"],["de762ff3/index.html","cdcca4e2796200540d4085c79750bf7f"],["df82d1f8/index.html","50343acdeaad01306f09b5b56438947b"],["e1d4a8b4/index.html","018f44742fd5a7e0b83cd76dda97c541"],["e31679e2/index.html","303e06ed31d74249f0e7eed196b3edb0"],["e4c2cc13/index.html","bc68b6743412d024b8d5a611b2c826d4"],["e4d2c7ba/index.html","4560129ff0a5a220ee013572900596d3"],["e5ffcbea/index.html","0eef6da5d12f77ccaf66911463dc2150"],["e612ace7/index.html","82d219c9549664a9e734b2cfc8027c59"],["e73bae86/index.html","1230eaf1a0014e73d5ec03c498854a5c"],["e7a0c86b/index.html","0ff1a66740736f181fe63c748fec12de"],["e7b555f8/index.html","1057701510961075e150241a9da1c028"],["e81fda88/index.html","bc7478aba73721efdfa6a738ee168843"],["e85a11e8/index.html","e552688faa5e0f4ca8e4fa36a9af3492"],["e86890fb/index.html","5c4d0b2e4c214928cedce63e9a45d525"],["e98fffcf/index.html","0acc6be574640c6906352f9a025ad58a"],["e9da39f8/index.html","0fa6c056477dfeecc27a98ba6f3e5c40"],["eb18b91b/index.html","799e93ffdc451b053832f2582dccc5ef"],["eba1fb1b/index.html","f5a68f833f739a4b39ee8a2ae2e54720"],["ec404005/index.html","5dcb0aae02f9ee10add1fbf024c0128f"],["ec4e8b99/index.html","aa740d2225bcfc0b124f1e7dc6c4e9f5"],["ec8b12a4/index.html","84f368a2104491a379d34746d1af88ce"],["ef2a130f/index.html","e44f0387d9f85cb301fbe89bd83286d0"],["f0565075/index.html","7b181a0fa16c824e4e7a2ad788e7fd79"],["f0d0bafc/index.html","4627b2b8790980d7fccd337a329d005a"],["f0e39cec/index.html","4654345e3b68bcc59c394204378631f9"],["f1a4e5b1/index.html","0907ba0b3d95eceeb0641fc69693b151"],["f1aab9cf/index.html","917fff123da9bc0ab2eb88ea805ceea3"],["f292e0b8/index.html","7550e843593da9ab1e06e3b453e14633"],["f32e27dd/index.html","850bdd06bd34328afd40fbea9aad537d"],["f47c306c/index.html","69f57ab8155ce2f0a8c068394d026c17"],["f6227d77/index.html","3c95149c45c5ad03301e934d1050f8a2"],["f699b617/index.html","ed18fa230415a8182617257096f2e385"],["f715085c/index.html","bde345bfb75188d9f2ec89973719a7bf"],["f7f1f3b6/index.html","ea2ceff0644530c5f01b23a0b82905e6"],["f8170462/index.html","cba5ce1bb32e23b853084431181b6fe4"],["f8eca34c/index.html","47f5a73b9903015d58d421073bc1f95c"],["f9161795/index.html","0647b3211d0eb62bc8b40d6defd53c29"],["f9c3ad7f/index.html","77659a8c68731ac05aa7838a3acddc66"],["fa5f812b/index.html","bee7ffc2c433c078c86c50a82798ecf6"],["fab7cb46/index.html","ec8f247d6b19c26d41ce61cbb83a284a"],["fb0210e3/index.html","bc7ec8130e80be75e50df61d26cfa72f"],["fc584b3/index.html","c5d68ce839414d12e6aefd89def1de55"],["ff888e9d/index.html","1cfc945d4804525989da2f825b6d2c06"],["ff9df0f5/index.html","d2f2499fc593d373d8877f6a3311ece7"],["ffac8316/index.html","4107dfbe3574504aadce344dcff910dd"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","3f1f628f10b60bb0fc022d5991e746dd"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","775bfd6bfd8396bacc6ce4df214edaa9"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","ffd82deba4a26a10c2c74b09deb2772d"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lemu_demo.html","676d30c0ce4e89fb3be5b14cc0f4f170"],["lib/fancybox/README.html","bc0b54f67cd12998af810a71b96b52cb"],["lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/pace/README.html","d795a2ee3314455225adc310536afb38"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","e0fbc47bb0d6bd99303e3ee5526ddc7d"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","d80b4a7aa53e0c995c404dfe290b5b22"],["page/11/index.html","1b855bae7694fb866e40697f8681b45a"],["page/12/index.html","c529d5cc8dcc0bd0f8262b7731da760b"],["page/13/index.html","2b13d9c0faa490a2c8362e5f23dc1520"],["page/14/index.html","6df3e9c4b11a35f23098b297e18b7dab"],["page/15/index.html","18df786ff7a0e3e098526736d6a3e09b"],["page/16/index.html","b1cb708f37ddafd87818fa174f77aace"],["page/17/index.html","f0ecbf2230df7cbdcdceb0960103ef28"],["page/18/index.html","7ba835c1b9ee92c87f2b8323001c507e"],["page/19/index.html","57f072d594897a55158c20eb62811e81"],["page/2/index.html","41eb19a05857340ef3cda457fe9346f6"],["page/20/index.html","aa47fe0535a42a3465f550719bb1f3d0"],["page/21/index.html","f4d15b186c93f8ea4b7b637497ff3e59"],["page/22/index.html","83c1be96e88199fa0ea493e81c409400"],["page/23/index.html","ce7af8059bfbfaf5803854ab56bf68a0"],["page/24/index.html","44a2a0231aa5d05abad27050b1250d16"],["page/25/index.html","2df9fe459e47761d2bea43027b53e88c"],["page/3/index.html","6824690d44f449d1c6b9e670f8cb19f0"],["page/4/index.html","ddd31e97ae053145bb501cd863361915"],["page/5/index.html","9a23f790364379ee79a174f1efb0cbb0"],["page/6/index.html","5f0b6113f461c1ff8d67fc75f3311ca4"],["page/7/index.html","5d9fc00e57e7c5dd9743f29666c0f009"],["page/8/index.html","b781c52ca97a3a925358960f263392b5"],["page/9/index.html","264cadc700e871a54c0ba7c9d2351250"],["tags/Floyd周期检测/index.html","b90ac649d67ac08863ee14638e5f7702"],["tags/IDA/index.html","a56c8031fd21a20dd2cba720fc020ad3"],["tags/Manacher/index.html","5803c15ba637b3caaae5ec3b1585178a"],["tags/Pollard-Rho算法/index.html","d6f87b36edd6e04e82353677a2c7017c"],["tags/Python/index.html","7bce8c19344a9e5658acf6c84a103498"],["tags/api/index.html","859b6823997576bb4da5809c3928b2a3"],["tags/bfs/index.html","7f53af0af97f99d60a497f268b0d2d7a"],["tags/bsgs算法/index.html","82f33cf6605969fda702a0431234d6cf"],["tags/cf/index.html","7e85f78bc2163c6891ad62e6f0f1b208"],["tags/css/index.html","2f89f3cbfda573c969a83220e2c8d11d"],["tags/dfs/index.html","a5436d54aa54fcc617f6ef35a3365993"],["tags/dijkstra/index.html","cd7b869dac754dec3c0f8cc3750455b1"],["tags/dp/index.html","f6a1b471ec9d2368abe37ae41967901c"],["tags/dp/page/2/index.html","d1d7a800ea139485e5a17da34cdc7a8f"],["tags/dp/page/3/index.html","a4ca44457e79da4e8e73d3aae2e49d7b"],["tags/gcd/index.html","0d496c0306eb69e8f740f98a348024e2"],["tags/hexo/index.html","6ce38c0780f8b9b3a2fcc97837c24c4a"],["tags/index.html","84688d18a5c22f878d20a4175f8e4d3b"],["tags/java高精度/index.html","9b8cc3ad4e44985a55fdbe9a8648a136"],["tags/java高精度/page/2/index.html","b8cea8fd438d4d1c820c9e3cf5568b42"],["tags/java高精度/page/3/index.html","c545aca050856b81c0c9cfa828e09711"],["tags/k-means/index.html","5a50bca384987a58fee8d45deabceaea"],["tags/kruskal/index.html","753083179703e0462b94263569d8e6e4"],["tags/lcs/index.html","54b5448e97496e09e09c7f4c670fd8a3"],["tags/leancloud/index.html","a6ee4cc50f5b4223cf855a80f199a09a"],["tags/live2d/index.html","dbfa7345fd992b2d26edfec21aec57f0"],["tags/mac-OS/index.html","f38ba400e8d8c605268fadbde46d653e"],["tags/prim/index.html","93deb6b7c51883cb72173e64b5ac149e"],["tags/revolvermaps/index.html","30fc9ad47991a163a42691ed97710a62"],["tags/rmq/index.html","2945f5fd35a8c1443dbc6f9e7e5f16f5"],["tags/sg函数/index.html","bbdcf9daddce50b5085cbd48a7f0c291"],["tags/stl/index.html","9572f813397458b447bf1034b064e932"],["tags/三分/index.html","43e435d9d96c625c54c32a7262046076"],["tags/中国剩余定理/index.html","ea2ae9c7bc029fa49cc87cd0286e81fe"],["tags/二分/index.html","7e598efe183ef6950a26e5acb5676523"],["tags/二分图/index.html","129c6bb38a8800974b6f19e9cbb70f0b"],["tags/作业/index.html","7eaaf7c7ec54a3e878264e03f599eb8f"],["tags/全排列/index.html","60247fe4dea66a8c15ab4525d33a181f"],["tags/分割平面/index.html","eaef2e817055d00017442a455cedd76e"],["tags/分数规划/index.html","6b3b3cb27f9309e5bb992d19aa92b4ff"],["tags/前缀和/index.html","2610b71b2fb9a099457912ab4c385719"],["tags/勒让德定理/index.html","86439489085852afc74f4f2db3500cb9"],["tags/匈牙利算法/index.html","dcb9f73633e8735b3593aa7b9ac60b17"],["tags/博弈论/index.html","bc38119f8cbd88b1806e3d67838c94c4"],["tags/卡特兰数/index.html","5a5a113ff5bcf4888804458860aeea1b"],["tags/卢卡斯定理/index.html","34e6f931ed657b9b0c8ef0e19ca5eb17"],["tags/原根/index.html","e94e4babd33e4b94ec671afab7c0adb2"],["tags/四平方和定理/index.html","89e122a8d46b8a6945ef20caeab4c707"],["tags/埃筛素数/index.html","0ef617ecdb346adddea68a98da93b71f"],["tags/威佐夫博弈/index.html","a75a0459a7ab45303187d113cbf86e03"],["tags/字符串/index.html","17368b78925d8a0c0f96e1a79352a89a"],["tags/容斥/index.html","77bb99444f99b2944a651eeb53b6196c"],["tags/尼姆博弈/index.html","6356124c39ff4d8aafe1b91fb41eb07f"],["tags/巴什博弈/index.html","a5830865793af95b95f5d216263d8a2c"],["tags/并查集/index.html","66101a0d9d7bfdb963961155f057800c"],["tags/归并排序/index.html","f749ae1ebbac0942b60808585a537574"],["tags/循环结/index.html","f0a65429ec9b4561144d621f0e24df6f"],["tags/微信/index.html","347dd5ca6da8774312358332b61511d4"],["tags/快速幂/index.html","a21b3ddf0be3acd6bac215503990e92e"],["tags/思维/index.html","b89379a9af90d05ea9925b7f6a69ca82"],["tags/思维/page/2/index.html","7fd1937f522b7bf31414cafb5af0303b"],["tags/扩展欧几里得/index.html","b9d0a53a4f33eb2dc678647317ccab82"],["tags/拓扑排序/index.html","10d2cdb87f7a281d916b648692d37a06"],["tags/推公式/index.html","ea17b221eb72fd5e08b419c13e149d44"],["tags/推公式/page/2/index.html","a535aa24f37073f0c0c72355a42366d7"],["tags/推公式/page/3/index.html","bf3de4233b7f2b76e804307d7edf6440"],["tags/数根/index.html","ce0f4d806eb9b0568173acb1ce1b877e"],["tags/数组加倍/index.html","9e2af9e8bfe4648f33dfa043ebfe878a"],["tags/数论/index.html","27c7734c7dd0887cae9061fd4309ddcc"],["tags/斐波那契/index.html","d2e6d3b605373790ece84f4d262f2415"],["tags/斐波那契/page/2/index.html","577b14ffa91d1a62b9115ba2a6aed753"],["tags/斯特林公式/index.html","328149850f9242bea45ee6928a22b176"],["tags/斯特林数/index.html","5cde5f7f15ea272005c2ceb86f419be0"],["tags/最小生成树/index.html","721ce802bb7381a138b30c2ed809d1ec"],["tags/构造/index.html","23553f8826b1ec2ce26402f70ade44cc"],["tags/枚举/index.html","6be25f77005033f54a1f43490dde6e55"],["tags/树状数组/index.html","553650fa925576ebd96636c888460068"],["tags/模拟/index.html","b8fbd66b28168b9cf00de9a6a851094f"],["tags/欧拉公式/index.html","80690ece670dbf90b1cc2212dfc8bce2"],["tags/欧拉函数/index.html","467a7a1ed9b973cdddd478bfbdaafd38"],["tags/欧拉路径/index.html","710bf4df7bedd6767224544e97f3fd94"],["tags/汉诺塔/index.html","b9d11c302a5539310cbe9d339055f54a"],["tags/海伦公式/index.html","b73d2e97aed49114b4dd6228d98d4786"],["tags/生日悖论/index.html","7953d131fb32651e2b638d4b4057fe04"],["tags/矩阵快速幂/index.html","09d094b6c79b14dbfcbba9ff45551a99"],["tags/离散化/index.html","201ae2faf571010d2687576cdad18f67"],["tags/米勒罗宾/index.html","2a0f6d0f4312fe9dc69f7605bd6ac02b"],["tags/约瑟夫环/index.html","1b51afc84790217ab993289b3b4af16b"],["tags/线性基/index.html","a32b2cc1b86d9838407f0cc5bf0f8484"],["tags/线段树/index.html","545477e70ca036572959b1a67df0f917"],["tags/组合数/index.html","164c61130caf27b8b3739e56572ea4df"],["tags/组合游戏/index.html","266d1e3cbfb0cbd663226181506e39d8"],["tags/背包/index.html","dea074a7dbbe5b1b7e48c1a5be38ea0b"],["tags/莫比乌斯函数/index.html","8cdad3d0b25b5245830e32654cf55856"],["tags/计算几何/index.html","3b7b52781641e8dcb673f1950fa9bcb9"],["tags/贪心/index.html","b2e7f0ee13860332d23b56f12c4ea4be"],["tags/贪心/page/2/index.html","c6246d95d8e34dae85f580101eaba126"],["tags/贪心/page/3/index.html","6c2cb49f4c6b0d78edef49923824907a"],["tags/逆元/index.html","2ab2514ad72de8c217eb12e0625b9083"],["tags/阶/index.html","1fad9cc255bbde36f2dccf64313d9dd7"],["tags/鸽巢原理/index.html","99eb4d7c272fe7943510cfb7a96b9bd1"],["tags/黄金分割数/index.html","253d18ed7039765961a2f1ea8fa211f4"]];
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







