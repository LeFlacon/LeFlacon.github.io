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

var precacheConfig = [["10336297/index.html","9c14e8a8581c502938a9b5ffad5169f9"],["1076b80c/index.html","537098c47afc897fac836b9c4c3f3ee3"],["10a23843/index.html","d20635fe4803ffbd0eabfbbbf6bfd152"],["10f322b7/index.html","4189338c5fe631fb6c07e1714a71c07f"],["1109bacf/index.html","20d8820049b0002ffe35112a6716d506"],["12fb71da/index.html","dd652edc168c2802577c4ec74d0b2bc0"],["13028674/index.html","cc61f1aa0f92964355a8b20d2feb54c0"],["15885f20/index.html","593cfa78c957393ae062b11776183b77"],["15c1232b/index.html","deb0ae416018db863de01c7928cd0a07"],["16236ee/index.html","c7e5e6e07cf92464b1a0a434d47f11f4"],["163226ed/index.html","43b688f456441145395da161ff7f9051"],["18f146f5/index.html","89a8d303ed327dbb758c77ab5972c406"],["19356a39/index.html","d7a31acd7aaca5636918f0b8ce5240b0"],["1d6b220a/index.html","3c0c036a6c4232265814cff3107299f2"],["1f726e05/index.html","70d9dbab1b9456579d9a3066fd67c945"],["205f0ecd/index.html","e562d1edeb87ca82ce2757ec3b9b2d6a"],["209ef750/index.html","7bccd7f35438c566437e58e3df3a312d"],["216acbe1/index.html","cd0215a4068f8435630e62c3b2bd1e0c"],["223d29ea/index.html","f6ae3cf628998cdd5f0c953f9e59a1d7"],["22830a9e/index.html","79b8ff50f2ef25fcd83632d7689e06e6"],["23c9f6c3/index.html","b391241b8b3b8b85420f06eb43562e2f"],["276c2267/index.html","f49157b521948f2ecd318a64fad55fe7"],["276c371d/index.html","f9f1fa91f864624b844c1acca40e06a9"],["29b25bed/index.html","c913af1e07fda95c4c45ec8468334349"],["2c002055/index.html","4977352669e761af49d72ca5b4c2fda3"],["2d3ae01/index.html","3b1393df96aa1bf59ab9aa10a416c66a"],["2d58815c/index.html","e21041660a6a983fc98ede62d74ce7fe"],["2e9cbb0/index.html","c4d2a4d38a340a72d9c6c7ab14ace166"],["304f1fc6/index.html","1ab8c386829952c2c88f747116a1af1b"],["33eb241b/index.html","bac99a5d6c7bbb2c80db590ff3ce3048"],["340b38ab/index.html","55c8f2643ba3027d4ea2450b163bfbd0"],["34784cdc/index.html","44c3fe683dcb367ece52b2e6252785d2"],["34822d81/index.html","904fb163137ebf168cfb7acd262914ec"],["34ddef5a/index.html","b903178322af7775a28a375890267ca6"],["34f920df/index.html","04ae19e0cd3045037725813562658218"],["3697a1c/index.html","565809a073fc30201f39c2b361a6d58b"],["37192e8b/index.html","53d6f924ce0ab9a7f6c61c7820a13fbf"],["37630519/index.html","c67ff52a25ab7ecc565e2dc5a0e507e2"],["3a23cc5c/index.html","e34c18752b8b82e7c841ed6ae3a2f4f0"],["3c67f84b/index.html","5beda20edcc66f7b84992e0660b7cc74"],["3ca6f02/index.html","735d619d4b65d28d869fa16e20374dae"],["3d8d44b2/index.html","03bba272463043fa18cb9374fd61e3bf"],["3fb087ea/index.html","00ed8caa79e11c23723e0e536e64fe17"],["404/index.html","47e8fa03bf120ffa5205cba5692708cc"],["40687d49/index.html","136c149dd5b3642aac4c0e78d66076d9"],["40d6aa63/index.html","cd6238dee38992e794e1f7224b89e381"],["40f7970d/index.html","adae8a651e6c6565743cc3af75777a36"],["41d56d9c/index.html","e709c9ca27ef4269540e4ae113b44bfd"],["41f5723f/index.html","80c7c462d4500154104828522bf08425"],["420f3cff/index.html","0d5fdf1d6ccf91247e06dc3ccb54e954"],["42b4455d/index.html","bdb527b201ac4b02e02bef267753c0f2"],["42c39770/index.html","bc1cf3e4205fd6f78201f380c202b1ef"],["438d787/index.html","c08346c395d23bd40e22aa64d99f5d8e"],["455762c8/index.html","d8cf0f95a38455b73188e9653cbf9289"],["47a64668/index.html","9d89c471be6afaa344a851d1ba04d43c"],["4a010063/index.html","239f364e40fdb8cc3b0215f6e3222c7e"],["4b67d3c8/index.html","bdef1be90574af0f29c1befdc248b9cf"],["50df051/index.html","8ef0c105a944f420fe604563451aedfa"],["52580325/index.html","aaf57076eb998dde52eea7fd30dd90ed"],["52b56662/index.html","fe1c3ea8eefcfd64533bda3a3359f361"],["52e47f72/index.html","27a841fe351d12546c8c2420ce42132a"],["531fe264/index.html","5dc0e7324019d1fd0dba5e73ab6bd99c"],["560387bb/index.html","c0733cb29abeaed7ff0ead95d27862c7"],["561c553e/index.html","5df9c407ca24238e212228fdd11fa588"],["56954db8/index.html","9be6c6ef6f31ba4b00541c1345752df3"],["57427b30/index.html","9a35073a23f652d7cfc1f8feb5ac2d9b"],["589bd519/index.html","88e372f84e31df21c0b7d5c76aafd23e"],["59d4cd0/index.html","fff3cae45f1a6fdd6d121be35c4ba989"],["59f6b91c/index.html","6a91efb9a90736d96bca78a69f939c4e"],["5a29f513/index.html","2cbec9c0a7a3cb170f99925601341abf"],["5a4c73da/index.html","8feedf7a2ea983d6b624cbddbdc71039"],["5b7386c2/index.html","5c9223ad910a0537752ff279769e5923"],["5c6528a4/index.html","9d0bea265c977d5290c51e0397777191"],["5c944241/index.html","46ed20eeee22e6e470b732c63ebea54c"],["5f826ba6/index.html","200b5e40533a66f581136e73a4e0fcab"],["5fc91746/index.html","25e96342a1475ed9d35af42f2de306f1"],["60992a21/index.html","05b07ca8ba351a46c6032162b4737bf2"],["61030f3f/index.html","99cb56984d955d34a99d631bf548434b"],["61acc2f3/index.html","36cbb9c1f0cf601a97005bea383a3fb8"],["61e3cbc/index.html","2672b3963fc3dcc25c3c09959b897321"],["62f8e345/index.html","3ea72606e3471fdd6ba1efa1965831ab"],["63dfb318/index.html","79f1a08704d64b73c7bbb4588bfe11ae"],["650f0a27/index.html","39c5270e9b947c9369645395be5430bc"],["655cb7bd/index.html","39824f32a9a64d757c45189c1b08d045"],["659aa8d8/index.html","171de7372384055328c24bca1c1e22d7"],["65c1781f/index.html","e4ebc941a4c37c70785ded05b920e1b4"],["66dd1680/index.html","6e4f6a0a26dfcc2e7bfe8bd2141dc215"],["67dc8b75/index.html","6d33ac7f96282c6be8fb6a608c5f8f64"],["68903b21/index.html","1744e44f4f97183c8121eb5c18177d20"],["68a46f0b/index.html","1fb22d16cd5c9285834a291e3ba6feb4"],["68e48a7a/index.html","55647efd174691f2145c5a8137f6a003"],["6a2b981f/index.html","692f0b17dd4751eb788825e8834ecac6"],["6a4cab08/index.html","abbea32069a342785982ac6f167c5bff"],["6a5982f6/index.html","6dfe55536f8bf5211a6ded0ffdd1eab8"],["6bb0247a/index.html","0d728d5dd031136407ff5bdeed4a8daa"],["6bcdcc46/index.html","4bd17171d281873ec1d2e52b7a40eee9"],["6e572fe1/index.html","966e4679b2e259336c79e486b8ca1898"],["6e6d7226/index.html","c256d10d2238aa13a57856ce39c3e0d7"],["6ed0cc8f/index.html","8097f6b0ee4042543d1a33a34b44ac2e"],["6f66f8f8/index.html","36eace26bf92de52f572495892edc1af"],["6f6ab2c9/index.html","f3c5ed2c9ad33656e40b71ccbfe2752a"],["6f93207a/index.html","c5c95baab3f9bae4c524dc2522ed8ac3"],["70032e53/index.html","e525a4bb85841c95b67d62dcceaea69f"],["71a9f0a2/index.html","707b69a350d4248773cb31e9cfb98a24"],["73d62e33/index.html","d946323c96e7d24a89131b94f6c9fc3f"],["773303aa/index.html","d57d6f48e0d06c85e8c2759cb7b33ce1"],["783cca3a/index.html","aadb1a1f06ca08158669d209c1a52ff5"],["784bc526/index.html","7bf79be1906d6710f1270a6f359e5545"],["7a72e0ec/index.html","64b6c5b3d5e9b45cd46c4f98cf9fdddf"],["7becbf63/index.html","5c786f5d9cd5131d99aa33129d6a09fa"],["7d2b0472/index.html","ec42638400bdca3d6c3beb29cc37734b"],["7dfc273b/index.html","2fbcb6195fd68195d8f8a047ce91bb38"],["7e7621ef/index.html","548de9ccfc223afa84fbaf58258bf6f6"],["7e7c23c2/index.html","67229ee8d46e6107590c3bc091e6cdea"],["7eacad98/index.html","a4861518d50bee64b0c4701bc1a15627"],["7ecca125/index.html","59ed058dd47de591a1bc6c05a6e3f6e9"],["7ee1bb3b/index.html","1425c7a4654248ca3bf9eb21bedfc540"],["7f6818b1/index.html","3d2521b85529eed7fa30f946397ce31e"],["835a9757/index.html","8c05eb9cb6309e28ad3d2bc69a3bbfda"],["83978c3d/index.html","86f6b26013fc97e5bbcb3a55c222696b"],["8434b274/index.html","540078d30896d0348d9884c4f394f5ad"],["84b8f7c6/index.html","44f6a21e643d8f3dc76058dc3f913abf"],["84babd30/index.html","b90e0e89b221c9acc8c6218b58fe8444"],["86eadb67/index.html","ee5b9264283ff3b96ad52f61d3784698"],["891ad037/index.html","8e286aa372d1819e80aed60341eac89a"],["894818a5/index.html","45e080367b9469b1e79d24ec09eeeb58"],["8b10921e/index.html","14196abce0b0b827cd34f4ae70169e30"],["8b8f3dfd/index.html","f3bad0db4715cf6dd07860d328af12c3"],["8c5ac577/index.html","5afde2d59b1e13575ad329bcfd5cfcc9"],["8e5f1388/index.html","9d29ea923369c941d23ae57ae4e1653f"],["944a2722/index.html","2933a6befd089038d9c2cad1dddee642"],["94b377b3/index.html","dc8df572dbb6649fb9c8e0b1794e0ea6"],["9562e52/index.html","fe9c21850f89f23648fb85398e428e9b"],["96c4a6fd/index.html","a7f6f0457837b652d5a491edc2810baa"],["98ac8a82/index.html","b304f48b9dfa7182b6df4ccc0c8cb4d6"],["99dc77d/index.html","9f1a577ff8010114d18479b9c41564ed"],["9a99eb64/index.html","cfa7628644ebe01cafb03f2d6c223725"],["9ac96b1d/index.html","a8b5b42cc6e4671b24d074ae5412e44a"],["9c66e3e3/index.html","b80fa61065609059cca16788ee2d1bfc"],["9c67c163/index.html","033d645c6a555d6b68f7bd3f1dc5b54b"],["9ee158e1/index.html","2196d6eb9cc1dc4187381bc80c4d1406"],["9f1d8b77/index.html","66ce8d354b2b8e27adfa9c7a22195f0e"],["9fb00d50/index.html","3eff8eeea91254139cd401666a713e58"],["9fe4182d/index.html","c675b573f647b03899031279c77e67d5"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["a0e37ddb/index.html","e8a259f524730397d79d59d83746deca"],["a1e708e2/index.html","4497ecebb3b18cb54bb4b4c05e333b4d"],["a20ca391/index.html","c21d1dd2cfee0d296bb04b43a6297b0f"],["a2c7bf23/index.html","98184b6a9a358c0dcd83daf4161fd5ff"],["a4b21e43/index.html","f0d3ee0d079420c99657eedec51cdb11"],["a5bf9421/index.html","6c47cbb5e05e1d489f78414d4bd8a37e"],["a678482f/index.html","a76f39885c48e467fea6daaae1a5111f"],["a74119db/index.html","2bbb85b498d7c6f00765d0c08bffa541"],["a8a3dabc/index.html","bd6f9d18bdf4fa59503a668eddcdaea6"],["a8a8763e/index.html","e58e7d11df9eebdace93fe5659383b7b"],["aba8e35b/index.html","7fd711f380ce11dae11bac6b800b0b59"],["ada46a5d/index.html","6fa0d3bb4d05f5114e592da6fc774a90"],["archives/2018/08/index.html","59215ea3e2e001283965a81f2516de41"],["archives/2018/08/page/2/index.html","decb65f49dfff46be6c54703be777838"],["archives/2018/08/page/3/index.html","82801985404bf497dcc014894c828c31"],["archives/2018/08/page/4/index.html","91f12fe2cac407cc36c443ec14cd9cc5"],["archives/2018/08/page/5/index.html","e55a8c33f1cb3c8834063f2c7fb50138"],["archives/2018/08/page/6/index.html","0e22e21096e2f099f52c47fd1340e243"],["archives/2018/08/page/7/index.html","55457e4d85eadfda593bb5ebdef3bf4e"],["archives/2018/09/index.html","072dc1851960b296f8e44ef48766c0b3"],["archives/2018/09/page/10/index.html","808516be0f35c6f4c334d0db742d94c6"],["archives/2018/09/page/2/index.html","88b673fd7b4f51131c5bb7d7b381e54d"],["archives/2018/09/page/3/index.html","dad4131dc53703d7366d5d6d9bba5409"],["archives/2018/09/page/4/index.html","f62117892c742197e2ff7d78c1a548a9"],["archives/2018/09/page/5/index.html","ee099ce3cde647182460b9c3b173040a"],["archives/2018/09/page/6/index.html","fd843ebebbdd9a0af28fa0abc887418c"],["archives/2018/09/page/7/index.html","8118ef221bc1c82f4505ea4fd5b50314"],["archives/2018/09/page/8/index.html","6d41397650448b7e89a9cdd2ff806936"],["archives/2018/09/page/9/index.html","8771846fb553ed92ab99eb5bc51bc3c3"],["archives/2018/10/index.html","5a6d12f5c50298b8d9685b81e24a196b"],["archives/2018/10/page/2/index.html","e1fcee905c03e46e619424205428a48c"],["archives/2018/10/page/3/index.html","07a66e7feeb4f134380c21b3dfc0911c"],["archives/2018/10/page/4/index.html","db3686063fe0d7be6b42f96000e61f76"],["archives/2018/10/page/5/index.html","ca75dceba95a4420abf48a76b45b99ec"],["archives/2018/10/page/6/index.html","972f8e642deda8a3779901857ce51a60"],["archives/2018/10/page/7/index.html","ccf463db19f5882e755288fc77807f1f"],["archives/2018/10/page/8/index.html","5280003a40d6c4ee94a8410135010a26"],["archives/2018/11/index.html","381c9104cc7b19dffe209b96d989dc1d"],["archives/2018/index.html","554f2f9489d76a1cc2f6855c15e26123"],["archives/2018/page/10/index.html","235c087b0d8768983fd4a992357ce295"],["archives/2018/page/11/index.html","d3ae1e8518ffe394496a08ad719e2eed"],["archives/2018/page/12/index.html","f32cacc78b53bf6eb385ec32a309bf66"],["archives/2018/page/13/index.html","800e7f5c41f36ac31ad0c0d0aeb00c99"],["archives/2018/page/14/index.html","fc2e877fe64134d28819bc82e9c6dbab"],["archives/2018/page/15/index.html","dd131ee92edcd8144a7ac9c540759af8"],["archives/2018/page/16/index.html","d3aef4d2b118873ef1f2a1f945d9b3f6"],["archives/2018/page/17/index.html","05924202c6392a1e1154eadfad1437db"],["archives/2018/page/18/index.html","9e063f39984c1acc2edf657163fc7b61"],["archives/2018/page/19/index.html","4d5239579e944676198b66af1ebebe95"],["archives/2018/page/2/index.html","5e47d97a7a1c853f43fbc467019d90ad"],["archives/2018/page/20/index.html","7666b69bb21cdea0226fe0dd22351ddc"],["archives/2018/page/21/index.html","4023a5b4501fd32c64667f09a22f8f10"],["archives/2018/page/22/index.html","cb995132dbfd49d7fde817d5e36789c2"],["archives/2018/page/23/index.html","ac250152993189e410b08d7cfe830f98"],["archives/2018/page/24/index.html","7bacec3011de1b748a29c4d273b30589"],["archives/2018/page/25/index.html","65966df5fe339857708ef1b9cce0a94b"],["archives/2018/page/3/index.html","a1484248dffd1f4ad5ce9a99f6933cb0"],["archives/2018/page/4/index.html","bbbddc12ac861ec98e18a7f6cf4a3da1"],["archives/2018/page/5/index.html","0eb94c245be856dfbc8020c08ffc2c30"],["archives/2018/page/6/index.html","16c312c7483baeb2f4fa2b7d78e7824b"],["archives/2018/page/7/index.html","0b1cc8a9390e81abea866da01dc93d0b"],["archives/2018/page/8/index.html","374c9e994f700cc69cb110ec9f4664ea"],["archives/2018/page/9/index.html","3cc06bf10e89a5bbb0cabc6767b10dc9"],["archives/index.html","b6e0ed84cc69b79775a3564b9c312a7d"],["archives/page/10/index.html","27a6a6ca68cf5ead4c5216156036387b"],["archives/page/11/index.html","12c83d0891f16a3b3001a86f779eebe0"],["archives/page/12/index.html","cbaec4f8306940e536c3e10a55073212"],["archives/page/13/index.html","1f9be428d1384b81cefc55d1894d8b2d"],["archives/page/14/index.html","22fbaf9f8de71af45ebe9be46c22927e"],["archives/page/15/index.html","1129eec264977272f018cfc60c3ed241"],["archives/page/16/index.html","573f19ec937cabba27c913805d47dee6"],["archives/page/17/index.html","f22dff7d2aaa2de112e9bf5b69ed8150"],["archives/page/18/index.html","b1ebdecba80c398182d124d81848f44f"],["archives/page/19/index.html","ea8e00cbe1a2c18515471e6528c6fd25"],["archives/page/2/index.html","027ce33351e38480aa35385ef30590f6"],["archives/page/20/index.html","ebf1412c6b635cc29f2dfd64dc7db259"],["archives/page/21/index.html","c7021d82ea16b54294f25da889d2640c"],["archives/page/22/index.html","37d0bf2ba1ccaf87d969bfd12b781710"],["archives/page/23/index.html","6d888cbfd877196dfc75ae8642ef9706"],["archives/page/24/index.html","e8486e10cec6887879f1d5023e5ceb8a"],["archives/page/25/index.html","6e3bf71004410317d4facc16eecdd7be"],["archives/page/3/index.html","4de42e7642195961924942feb42e29ae"],["archives/page/4/index.html","1dba391e1292b12dd6611ec3762d66b9"],["archives/page/5/index.html","27446744321317ca6e306b79deea1de8"],["archives/page/6/index.html","ecc8080d213ba3bf8dc16b186bc0b4ec"],["archives/page/7/index.html","6bd2fd4af1eae118897dda585a052161"],["archives/page/8/index.html","f06a2c742a3c76fdc4fbd832bea13518"],["archives/page/9/index.html","010e1e95fc4c46f153c9881d08782b79"],["b01398e8/index.html","2809311d31fe4d753b01dc3e30c3c88b"],["b4c7585b/index.html","38d90d5f48d05533ca4e97f8cf52bde8"],["b513d267/index.html","f63b29bba1e2ba3a7f50d1ded97f1886"],["b67f2784/index.html","5e7f9a084d3f6b70378d910daa7667f2"],["b6db0c64/index.html","eb6ca6826e818190faee63bda796e23c"],["b8d3ced1/index.html","ff84d475d08a804a42d6b05870a43a0d"],["b972d127/index.html","ae1980dc28fc5707f19579a9dd301564"],["ba46f35b/index.html","7fc1b254a2a9e082bc5720adbe37868a"],["baidu_verify_DfMf5XqJUb.html","9c537bf2defeb798d758e290ee14dc29"],["bb4502fa/index.html","baa87d65fe724170dc8959a7871ba490"],["bb984cd4/index.html","9dfe20a3396830bbf89e4a107351fb97"],["be3871f5/index.html","3d3f57962c088d18cb4ec08c5748fed7"],["be97bbf9/index.html","1feaf9642cfa4f36c084d4f5fd56e2d1"],["bef6deea/index.html","c1d9e20b8e861c506a9e1819a2ebfe86"],["c02d18a7/index.html","fc2dc63d6a9ec2e13108737c9684ee19"],["c0d275b3/index.html","4257a3b092709e3a669246c16c9098bd"],["c1989cb5/index.html","94c9c183007c942750741dedc5ccf7a7"],["c2176cf3/index.html","fa7ee27ba9d19a16ae7febd564be11cf"],["c2424f60/index.html","2f2d440e10b6d1e1a0d1f9aca501872a"],["c2af3f7c/index.html","94484f6eea38a2670306130771bc9285"],["c3fd1e79/index.html","9564cfd590ddd26e04b3a53df6ff05f3"],["c40a717a/index.html","e23e80d69428d4cfbde8e8483a4e948b"],["c5057eab/index.html","425ef5361c379f4d9a6cbd7f0e2e773b"],["c746a48a/index.html","3f9d1f24f070af4e4a59b3b2b38d32df"],["ca3f6ac0/index.html","cb385f21e45fdab1d1f2a68e441a285a"],["categories/dp/index.html","e26ddfb40a212b81084d0237492dd5d2"],["categories/dp/page/2/index.html","0f1e975be86a19f24db1601a9f867f25"],["categories/dp/page/3/index.html","e90b1f9accfa0cf8f2389f9781275ff0"],["categories/hexo/index.html","93fafe4b45fc478702b18acce935b808"],["categories/index.html","e7691bb2d7ad7488d1c0f877749f7eb4"],["categories/java/index.html","faa2fd9a839ed445c7b68a1c7f863aef"],["categories/java/page/2/index.html","b863bcc961d08989fb28945ceec83d2c"],["categories/java/page/3/index.html","199165e568e71c6d627df45ad6bf4a63"],["categories/love-peace/index.html","2654d61c74b9412dc3e8f34de9f09668"],["categories/二分/index.html","0c872f257b382b168f52400f6531570e"],["categories/博弈论/index.html","c4c37678028112504da212b00a480195"],["categories/博弈论/page/2/index.html","7b6d3c841b184479a9a9c0a79aa39875"],["categories/博弈论/page/3/index.html","721b2b9aac393e0b99b593468b2afcef"],["categories/图论/index.html","9ef162492c134096bbc75294dd4e8f33"],["categories/图论/page/2/index.html","4ab46ce99332e46f6c0dcc03c3c157fd"],["categories/图论/page/3/index.html","ac1635c1510657be68599f974fad40ad"],["categories/搜索/index.html","ebfe1f6c4940b9b084fb0d7f0efc6108"],["categories/数据结构/index.html","022cd35e5e3f9f729118591eb18f743d"],["categories/数论/index.html","458c43fce94176f2be0ff197740c3590"],["categories/数论/page/2/index.html","f52c36f936dc81399070a97a9a01154c"],["categories/数论/page/3/index.html","af02aec3314bb953cafd7e09e2e5a085"],["categories/数论/page/4/index.html","9d1cb96c72b1c7be6fd7ca3ed3183d34"],["categories/数论/page/5/index.html","22f709c147bce22e5532d5e7e8d3ae71"],["categories/数论/page/6/index.html","2498b3934dc5229488406934b4158281"],["categories/机器学习/index.html","f59f139d826b40fb763e73ee67f8cb38"],["categories/杂/index.html","7b0fc0543c7fbdc5d7b6993ca24260cd"],["categories/杂/page/2/index.html","4f1a766119e12867e4c288efd5876c37"],["categories/杂/page/3/index.html","bea39ff72c21ddd56c80d82b023ce838"],["categories/模拟/index.html","d07d5a8acbfe7debfbd5141853ccfeb6"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","747498215ecacd89164721966f8f7758"],["categories/计算几何/index.html","40007a9743f287e00b953c2f013eaacb"],["categories/贪心/index.html","08f0e41460de070a9be98dbe612aebf4"],["categories/贪心/page/2/index.html","1f1336b7f3d02240ddef498b8e7c4a1d"],["categories/题解/index.html","90a455bca5358f5b7cbcafd04b6ccea2"],["cb821a33/index.html","4642a5077f922197ace0847836deabb4"],["cbd59ef1/index.html","af479c6d243d478c0fd855f93620fc1b"],["cd27113b/index.html","518374eb3f996a86965522a49daac68c"],["cdd10d6d/index.html","668d7e9cb8287cc7d0bebf8e560ac680"],["cf682b8e/index.html","96ae0bf90eec26df3acd8d58ecc4fbce"],["cfe28c6a/index.html","ca3e2d8e8ac0175570a19bf9bcd10e91"],["css/main.css","3b250a42c870f5cd95ff9b566fb0fd67"],["d0f16a5f/index.html","e91912960cc730b69485b07187d7f777"],["d2c81766/index.html","bb789984d88a0267d979c4d3789eb86b"],["d2d140b5/index.html","f2f3c33726591bc6260d726cee052074"],["d34e925e/index.html","d8d09213483cc84f653225937e6108d2"],["d377a60d/index.html","ff1e45de4e49cada2246b075cb6dbdea"],["d5042e55/index.html","4fb7563baac7f48526a784c2d2c6c8a4"],["d51ad0f1/index.html","e511977668afc0da60c7c287e7862905"],["d655b5fc/index.html","e78b400b9afe0e1bd0045afd714ccff1"],["d67f02ad/index.html","aed75df23b364550edb2e7e7b0a77097"],["d6ce1fc2/index.html","e5f1ac4c26656422bfbcbcbd59b526da"],["d6da51a9/index.html","97b24441d3276394b4ca4dbe9c0acfdf"],["d7ffbd1c/index.html","3b46e6ddc09454910ba94b5a60228915"],["d971ae59/index.html","91e91ac4efa6e4a1e5d259fb674bc9f4"],["dbf07d5c/index.html","9bc1840f14eae32ce018d445f2b7ebe6"],["dd1d064a/index.html","2bf5fd562d73a58f9391b9d6a27f501b"],["dd814372/index.html","a4fa51de23dbe3100c7e2b1f07854073"],["ddee45d/index.html","2876cb5b725ef588f8291b78fecbd346"],["de762ff3/index.html","0fc4b3069239bbe7a435a8a9d0125c4a"],["df82d1f8/index.html","9cb531b23d76be0e15a6e85cf202115b"],["e10dd693/index.html","abd9192b522b7328f6620436ef7fa5f9"],["e1d4a8b4/index.html","9a2f0a4d8ac014b828309c599f4b17b2"],["e31679e2/index.html","3e53d5046451a88f6032856fc5d4da15"],["e4c2cc13/index.html","61561acd2a81be04966b302bd11f1de8"],["e4d2c7ba/index.html","fa6074709676b720e444afe5211d775d"],["e5ffcbea/index.html","c8ad956b031329c03af088c8d3d55b38"],["e612ace7/index.html","fd5b7127c379758e93836844334a79e3"],["e73bae86/index.html","32e9d974bdd70e8314884bee86246494"],["e7a0c86b/index.html","6f801d7c2b553891c88f4072d2f172e3"],["e7b555f8/index.html","f174886406dc220b847f2a03c8057302"],["e81fda88/index.html","06140d29d08726afe49bdc8e7bb520c4"],["e85a11e8/index.html","c6acf8b2582763eb56c0afff4789fbd3"],["e86890fb/index.html","836b14512bb6bd7ae98679a0566cd035"],["e98fffcf/index.html","fd9025077e00bd435454005d28f9317b"],["e9da39f8/index.html","c2ce1f65878d2930c403d493284a1d74"],["eb18b91b/index.html","95590e6f4c58c46679fd83c6dfd55cb8"],["eba1fb1b/index.html","9c21aeda2c6b85bfb01608ef23141052"],["ec404005/index.html","b11bd209990c25fae1d1285e846d7e29"],["ec4e8b99/index.html","928d10f34cdf6a7d64d7e484b6e1850a"],["ec8b12a4/index.html","4e940fa7a941948efc3cdfa46d374d98"],["ef2a130f/index.html","38d6918a49b93ed2f5c0c5e961703e7e"],["f0565075/index.html","ebb16065c316d3a4e897d1b8561de512"],["f0d0bafc/index.html","632849f2524526c30b2af05e8bc21c05"],["f0e39cec/index.html","4fc352b13187ce3dd88b9bf5bfc8e70f"],["f1a4e5b1/index.html","510033a232dadb2cf9d755b244be135f"],["f1aab9cf/index.html","eb8d2610d925fa168f4710395bcc66c2"],["f292e0b8/index.html","4dfc4fbd05438f8e1712fc9622dd0224"],["f32e27dd/index.html","da66d3453baeb1cbcdf9381364c01457"],["f47c306c/index.html","3c63116055a3e968866462eb05a8b0d8"],["f6227d77/index.html","f7321d7f1472b7d10f7cd0a69469996d"],["f699b617/index.html","4ce12c42239cc6ea3c53f8486bf9c1df"],["f715085c/index.html","63529136d94e940987ea29dc31efab14"],["f7f1f3b6/index.html","3a336de65ba3dd2ab7f07efdc3040176"],["f8170462/index.html","1dc17716c2f032e6780509d061c80ccd"],["f8eca34c/index.html","e02a139ca623b167e5bb8817209c7918"],["f9161795/index.html","43bad92e9bcbbd86b2138b72628fc1bd"],["f9c3ad7f/index.html","4b343116f7e4f4b206694a8f9ef899c5"],["fa5f812b/index.html","c66625bab8be7617ce21ec7440061234"],["fab7cb46/index.html","c3e52466a9762bd467d3fcbaf8234882"],["fb0210e3/index.html","20b16849ab283e2a76abf732c69f7368"],["fc584b3/index.html","3de6544edec77c3dd9ac29c0e40dbefd"],["ff888e9d/index.html","cb27b9db1ab6625cc74cbc4f947cd05d"],["ff9df0f5/index.html","59bd662e8d7c9dcc28f2ba94be2048b7"],["ffac8316/index.html","02e94ea8d494036d35e2f821302cc8b2"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","8da5cc76c33db4f37da0b481b94638ea"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","2f816ffae8dc3719d7a61e8f09a77a48"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","7dcc07093d81395f274d7d4b00088586"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","89f3747c47c432ce80b86152cfbff72d"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","7c39d2754b18e3b10c1326ac138028be"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","6823a248a2074411319d017557a529d0"],["page/11/index.html","6303195cd156659e9f22ae5a300aa8f1"],["page/12/index.html","d13d97c5b70daa8eb595efd2eb3407ed"],["page/13/index.html","e89d3b76472365964891d689c60b31f8"],["page/14/index.html","28cc008f9fd53ebd5bf28ffb2bbcde59"],["page/15/index.html","bb34a1afa5f3679e27bfe5855b3f4e97"],["page/16/index.html","19d0c3c2a453b5a8ebb653a612a77a28"],["page/17/index.html","caf8146cfc9317296fef90110ed236a5"],["page/18/index.html","fe8c2169a9a8b32ec8d9ee2049f6e669"],["page/19/index.html","c9940d90e401b7fd305f2fc8a20c922f"],["page/2/index.html","13bdc959346fc954b66e78c646c7c93d"],["page/20/index.html","8d15db20f52b248372fab34b1628a186"],["page/21/index.html","042340b6447fa430253695a90829e89c"],["page/22/index.html","61ea23b1c91182719c769dccf7b0fa56"],["page/23/index.html","0531d079877aca62f1562c8d3734e5ab"],["page/24/index.html","20438b5982d6a63963eaeb3a7daebb86"],["page/25/index.html","d294780502856ac43d32e9e69581a837"],["page/3/index.html","d2a495d872ea316bebb86a3e28352eea"],["page/4/index.html","6e0f7ca434fc19046f61c133979cb529"],["page/5/index.html","370bddf306d0d9b0bed56b48acd682cf"],["page/6/index.html","f97bc09020b931c9377ce75726ac4eec"],["page/7/index.html","8140301074b6c070801f18859cf7f3e5"],["page/8/index.html","50c13a1f6abd6cce58047c769cb26cf2"],["page/9/index.html","a885f48798cda4cfc10404d0ccce7837"],["something/css/index.css","a26eb29138b01de0374e5e5f0ef2cb46"],["something/index.html","5ba6bbda5561a0b60e10eed1b243146f"],["something/js/main2048.js","65edecd4a470eeefcabc6a5bbcca87b9"],["something/js/showanimation2048.js","d17d55c85634f199cefe9119ee0ed981"],["something/js/support2048.js","e23221d71dbca087ef9b970bdbe697b3"],["tags/Floyd周期检测/index.html","e2b9dfbac930d2c6a69b7bc63124ee35"],["tags/IDA/index.html","2156a7e7d4e11d4884709b6d9ca98355"],["tags/Manacher/index.html","c14760b26813b8a54387543bc9ac4e72"],["tags/Pollard-Rho算法/index.html","68843c5317dcface6fb2db386dcca904"],["tags/Python/index.html","539a936d0da40af57203a15fa0255c3f"],["tags/api/index.html","9ef26bc109613fbcdba40aa6c135cefc"],["tags/bfs/index.html","5b97c9970014d58132b44e028447d544"],["tags/bsgs算法/index.html","d179c0862cbb455935a69d7913e5e59a"],["tags/cf/index.html","96ed5b22c4eb9dd1a35c573cc833e7bc"],["tags/css/index.html","a400e23350c30ecb29d52cf9b4820da7"],["tags/dfs/index.html","fd0e986a9b99c9d6306c2f635996ef2f"],["tags/dijkstra/index.html","dd09370f5717c2bf7e2ec14fe4edd1db"],["tags/dp/index.html","55a24ef8da6ed2402806eac71904747b"],["tags/dp/page/2/index.html","e98962ca85cd5d0177f27b836690a100"],["tags/dp/page/3/index.html","21b65afbb4f24ae53bf698f32bd48fbb"],["tags/gcd/index.html","6ccbeecb38e645413a30d82eb586aa70"],["tags/hexo/index.html","479fb23a50e8c0001c5996f3735452e0"],["tags/index.html","c7787c90161af6cd0065bf9dfe89fc23"],["tags/java高精度/index.html","703b1df66d167330e24fb0e23e456e69"],["tags/java高精度/page/2/index.html","5c7791aed971ec93c783e3fec4f17325"],["tags/java高精度/page/3/index.html","9224cc66f9eed0e9e9265f238f63f918"],["tags/k-means/index.html","cf33609181c2756fa82d8825b7066e83"],["tags/kruskal/index.html","02b784d11ff68aa5e3255075f8144ece"],["tags/lcs/index.html","f242544016bfc589998e4a9748aa0c20"],["tags/leancloud/index.html","41af4306e228c1f6c894a45634499688"],["tags/live2d/index.html","ee076bc1953c4426500d8b243c3250eb"],["tags/mac-OS/index.html","46a25775e3eb659f20e699776d6c997e"],["tags/prim/index.html","81ec74bd0733acc8292926da3eb1866c"],["tags/revolvermaps/index.html","f507dbb94b994a6d73e70bbe953a02ea"],["tags/rmq/index.html","739757898ce451004244d37630a80716"],["tags/sg函数/index.html","addc56fd508e1c2782f3692b2506689d"],["tags/stl/index.html","43f1e70ccf705b40b5a17d10847ec540"],["tags/三分/index.html","94fd1c3a62637da11856d874b0d62299"],["tags/中国剩余定理/index.html","261d95bfc486f7752e8b808d94d05b0e"],["tags/二分/index.html","93c28e7c505ffd6c9aa69c1f856e391b"],["tags/二分图/index.html","dfee8ef0100bdb44d18595069885f55f"],["tags/作业/index.html","b17121bf31554894813f780a77add5ce"],["tags/全排列/index.html","3a9b8916c65e83793feae7bd59c5a628"],["tags/分割平面/index.html","b2e6d13efed8431077b09bb178347543"],["tags/分数规划/index.html","58b555bf82bc68c87169b125f99317c2"],["tags/前缀和/index.html","24b501773e5ae00eae09b7d4b7d84243"],["tags/勒让德定理/index.html","81506dccde94dfd8a81539bc07aea0ed"],["tags/匈牙利算法/index.html","8a556b51ebb1aebb75c92a8a5208e497"],["tags/博弈论/index.html","2ed87ff8bc8eb5f6a781d8371eaf6d39"],["tags/卡特兰数/index.html","8b3f757aa509f4bc6c6a4c5977a315dd"],["tags/卢卡斯定理/index.html","9d463cc8926b1efb755b23a41ea0c6f8"],["tags/原根/index.html","644db250a74c39f0eb2c8622c0eeb64e"],["tags/四平方和定理/index.html","4c703267cc6d05a46fcdf9d01538f004"],["tags/埃筛素数/index.html","90e1f49c364a35db4c0b1667f2806a0c"],["tags/威佐夫博弈/index.html","4e19289184018bca40898b77f53ff978"],["tags/字符串/index.html","b3d97cd8efbb784deca7b8757c2f889d"],["tags/容斥/index.html","df3eca55a929f7d1db042f0a701fe689"],["tags/尼姆博弈/index.html","78e1518ccb4b46181e32f4563d17b936"],["tags/巴什博弈/index.html","e42dfec7e83dcf22cfec82e2fabfc011"],["tags/并查集/index.html","ef5b19cccd9434afdb7cb9d39692bd9a"],["tags/归并排序/index.html","b06e986e8e41a11cf8fec6c07cc4e443"],["tags/循环结/index.html","bf4da05b1238101081c31a7bd1f41af7"],["tags/微信/index.html","e6879958b448e168d5eaee889cd29d78"],["tags/快速幂/index.html","64e229728b6f86bf1017b6c15a66f35f"],["tags/思维/index.html","531448387427836e0e2b1076bcc1cd12"],["tags/思维/page/2/index.html","4f901100bd6c09b74a41430a70ba5bca"],["tags/扩展欧几里得/index.html","caf5a40f6ad67acf938aea22ad44830d"],["tags/拓扑排序/index.html","ba908cf2d98bbd36b5ead1faa574a440"],["tags/推公式/index.html","768f9eac11cf7b1e428863edc603d253"],["tags/推公式/page/2/index.html","6d1c01b348441d22e037a6f85c439773"],["tags/推公式/page/3/index.html","46c9721f721d9f27e93567ea478b8ad4"],["tags/数根/index.html","af4909271a10b560f63fa84b5867609b"],["tags/数组加倍/index.html","cce899f85bc90eb7011e6ea60b438f41"],["tags/数论/index.html","a701b9439782783b6de9bcf49e19b7b6"],["tags/斐波那契/index.html","011b2bc1f4f7e3b328c734b9a4e45217"],["tags/斐波那契/page/2/index.html","4cca520d6514a74ee5d8ffc31476a80c"],["tags/斯特林公式/index.html","5bd29e69ef0dff9c747b22eb173258b2"],["tags/斯特林数/index.html","9842a6f9bd4b0b4c824579348fa535b3"],["tags/最小生成树/index.html","67a77bc2d066652577b825fd83a112fb"],["tags/构造/index.html","4e3bf63184e97c50ab85bb31f8b679d3"],["tags/枚举/index.html","d0d9ff8194f2fe73d63771ab66b98ef7"],["tags/树状数组/index.html","784f6853b0091ac591b54f4b11a1b7e1"],["tags/模拟/index.html","82bdb16d6c84bf68006993873c746dbe"],["tags/欧拉公式/index.html","0a0b5f166e16a956307bb72fe743be08"],["tags/欧拉函数/index.html","070b96ef0830d0642d996918ad106ccf"],["tags/欧拉路径/index.html","b9714968c4770a247af59121e3f7ec3e"],["tags/汉诺塔/index.html","e2dd5f8fa4d38a4b6dcb1071dc459103"],["tags/海伦公式/index.html","0504fe6b7127a781e15274b01c954484"],["tags/生日悖论/index.html","90b145da22436b8ff84bdae448bf031e"],["tags/矩阵快速幂/index.html","8ca073538c093fd9a57a328cc4ec02f1"],["tags/离散化/index.html","c9aa1dc32a21ebd36766ce08231c43b0"],["tags/米勒罗宾/index.html","65279ece20e20733d18e5a7e6f6f6072"],["tags/约瑟夫环/index.html","3cc782e8c4d94525b6b0e2f6838c7d1a"],["tags/线性基/index.html","1a23abd862da87a039bb56b3fece8984"],["tags/线段树/index.html","34f48e06422517ed64f47b4af5822ade"],["tags/组合数/index.html","b3c59aab212ba600f270ad3941bc3ab4"],["tags/组合游戏/index.html","18a2e98c170d28c057fc34183807985f"],["tags/背包/index.html","b4964cec04e18ce4463b0f082a7c36f0"],["tags/莫比乌斯函数/index.html","2088afcfa195b608cb8ff237b7dc0f9c"],["tags/计算几何/index.html","37e8134ba9e013a9fd7e4d8f311ecf46"],["tags/贪心/index.html","aacd355f4f551a5f6059e67bc658fa40"],["tags/贪心/page/2/index.html","4ce0d761096ac062f0b0c4c5e070a10e"],["tags/贪心/page/3/index.html","877c026a5240f884f0cec8f196ef2d62"],["tags/逆元/index.html","c0bb4ae000835c784c888c53d182c5d6"],["tags/阶/index.html","5ea50bdafaab6f2bfe09b39babb9e582"],["tags/鸽巢原理/index.html","cf3737a556be0ae66695cf8c78e41b90"],["tags/黄金分割数/index.html","058987bd4d14e18db9092c18bc0e6225"]];
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







