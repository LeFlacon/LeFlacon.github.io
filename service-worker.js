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

var precacheConfig = [["1076b80c/index.html","28267096dc45af57e62a9215dd70fe5d"],["10a23843/index.html","ed69d2dcbf382486b2528f8ea95b9219"],["10f322b7/index.html","38b02988025f4b8654b36bdd9bed6a20"],["1109bacf/index.html","f6302a72ef3ccd214920fa946f14b275"],["12fb71da/index.html","58103bf539487d675801222021a01357"],["15885f20/index.html","d1e70af847535cd997abff318d3cd5bb"],["15c1232b/index.html","7c506458130975624d0600962db9d69f"],["16236ee/index.html","e5fe51fcb8d0e61a49b41591bc883375"],["163226ed/index.html","fd01511d6cf3c6f8bd6ab070e55a2638"],["18f146f5/index.html","a6da48f172156b1a0f3113bcd65179d0"],["19356a39/index.html","2a5c4a79867f936946c0e516587e665d"],["1d6b220a/index.html","2da8313d589f2ded96dbdfd2c8057d30"],["1f726e05/index.html","96237e4814bd18a648a89652188cb28b"],["205f0ecd/index.html","e58b6d0b44067bcec3bc39894ca79ff1"],["216acbe1/index.html","2bee06dabdf8d792f32fb9e0ec12e722"],["223d29ea/index.html","0c0d79694352899f7614054edeef9364"],["22830a9e/index.html","ae8e8ccb2cb4d472b0c27b642f9deaf7"],["23c9f6c3/index.html","9f7431c7099293f6c17b7e07f90699a2"],["276c2267/index.html","148764111ae04906322f62fb5a39003c"],["276c371d/index.html","200176c0d089fbfbc6e6a46fe5fb60a3"],["29b25bed/index.html","a3f4a69453a772e4cccd06a215c352d1"],["2d3ae01/index.html","b174935adc2fd8e85e6d3586cd8949f6"],["2d58815c/index.html","3ccaf8ea504ea1dd4744747f9aeba44e"],["2e9cbb0/index.html","f0873251e66ab57aab3f828cbfa9def3"],["304f1fc6/index.html","46cbf98db2b5bf1695cee74eb64e3ca7"],["33eb241b/index.html","8a74e024a7666f4948be55006e07e984"],["340b38ab/index.html","886467bbf3371cff7c07bedc3296bec7"],["34784cdc/index.html","3fe95e7646e7bc8f4762333257ece8c2"],["34822d81/index.html","69f6d196fc43217ebc8f5834fe0ec2ac"],["34ddef5a/index.html","3a66fd6c3b81163b5bf6938ed44b5ba2"],["34f920df/index.html","f31942a3f44147d5fb4baaf800a7e202"],["3697a1c/index.html","a211f8d3e48825642ed1a0715c53d431"],["37192e8b/index.html","dcc0f97da9373d90f3d87846cbdebc08"],["37630519/index.html","3b27601173c11ea8df20b9696a07b001"],["3a23cc5c/index.html","7778dd06a78072b68f5a9bb04ce1d3fb"],["3c67f84b/index.html","6d2bfbd3f87aafcf43b1d30e9c40723e"],["3ca6f02/index.html","5c8d412e68034e93f11dc7e8f77219a1"],["3d8d44b2/index.html","f744ee6891e3bcec9e69d220e3940ac2"],["3fb087ea/index.html","66576ea1b36d1941a914d1bf8a8702d8"],["404/index.html","f53b82cae2bdad96946aa17b99c2fd62"],["40d6aa63/index.html","cce9a42dd8de96fedeaaba3c9b9fb845"],["40f7970d/index.html","dd79b4c42294ad52fe6725aa345ee55c"],["41d56d9c/index.html","bb16a673a098809cc8baeb530fcd453b"],["41f5723f/index.html","f436dc0a3df3aff82331a1d0e27a9116"],["420f3cff/index.html","03f35b6e96ff546d6a3aeb9f5f4193bf"],["42b4455d/index.html","8ce5f140aa1f52b95e8ac9c2974fdfee"],["42c39770/index.html","2433d863b65e9f62904fba9817cbf099"],["438d787/index.html","1e292e95aea6e7c3cb0d99c81e0a415e"],["455762c8/index.html","d2e660fdee7dfb962e9c5e046ca10fec"],["47a64668/index.html","4f625dd9525f6de3aded6fba9fc58381"],["4a010063/index.html","2064b4c5523e757d4668a1d241ea805a"],["4b67d3c8/index.html","15f9d28edd8655b1ebd2f51df0cef88a"],["50df051/index.html","8fe85de61b8d8317baf0e1b0ded1fed6"],["52580325/index.html","67ebef635fbf7e40121394545161dcaf"],["52b56662/index.html","070f0571a7352d083430237b9d768720"],["52e47f72/index.html","971ed32b6b2132eddb47e7a80993e228"],["531fe264/index.html","0a38a7067a70132c568475d78f611af6"],["560387bb/index.html","e8ad522a7afd763b80a2b96d9e8cb1d4"],["561c553e/index.html","c3fa6cc95a72552a20dc43d8f7f35be4"],["56954db8/index.html","4f476a0438bc21894e86b405b1ff9832"],["57427b30/index.html","374eb55be2d2e79f6a4ce6c484328ad7"],["589bd519/index.html","9fa6991290fa3007da2a597cf4768af2"],["59d4cd0/index.html","1e72c53b10c5b21d1e69ebbd6d98aeb9"],["59f6b91c/index.html","74a64d34c3be25e4c55cfbbc3e7045a7"],["5a29f513/index.html","d255716bae297b0f49885a05b3580cf5"],["5a4c73da/index.html","dce0e7d52fd862a882eda04cc8a4ab64"],["5b7386c2/index.html","0b507e9ed9b98ed164268731fd746a6d"],["5c6528a4/index.html","6c3f6a0f942bf80673d56b3063396650"],["5c944241/index.html","713e7770b5cbadaa37b947220700f95e"],["5f826ba6/index.html","0aa46120d342a3399dba95cc46162b60"],["5fc91746/index.html","4c6bd96370a17f0ae4587b8c16f4e07d"],["60992a21/index.html","ff245bc16b422223d00a64a66de6db31"],["61030f3f/index.html","148baca2fdd26d91a102875296159885"],["61acc2f3/index.html","29093ff28b9dc40548a9b5a360532b69"],["61e3cbc/index.html","c289bd91bace03c51416fe81d5a1fe47"],["62f8e345/index.html","7609c6ba3a56cb62824cd9e7e2aeb2cc"],["63dfb318/index.html","1391880490a1dfca202ec09be6ba5cd9"],["650f0a27/index.html","784e04428c2afeb669874d6266056aa6"],["655cb7bd/index.html","6238285581007fdb39fff732502e322e"],["659aa8d8/index.html","5c1bc5a5ddf2cc79b360d139afabffcb"],["65c1781f/index.html","22587ef001eabb9b11e2ea845a15e294"],["66dd1680/index.html","241b47f434b7c351c32ae119449cd789"],["67dc8b75/index.html","93a85a61dbd40045e2007764a0e0aa4c"],["68903b21/index.html","dca43d4f4ce32d0c26fd66e17d5aada7"],["68a46f0b/index.html","2ec28aac629fc65fdee49da5bf62796b"],["68e48a7a/index.html","374bed02db1a84196aa45fd5c35f9176"],["6a2b981f/index.html","3edec19ed5739b171a31e621b51d231c"],["6a4cab08/index.html","c1f78571ff46c76997038c3242555ddd"],["6a5982f6/index.html","c4c9a4fc12e92e1661dc9bac4e0a33eb"],["6bb0247a/index.html","f1fb58d7d8c8efa5aa0b3fe21fe63264"],["6bcdcc46/index.html","90d31af030874b24e3cf9cb7a28359ce"],["6e572fe1/index.html","6c370bc2e28daf39b57bb4a05593f8f4"],["6e6d7226/index.html","beccec2bd959c7b9591378b66476d044"],["6ed0cc8f/index.html","250c42bf9e4a8837a57a2a562305a3e1"],["6f66f8f8/index.html","e22c3a12da8d68c673de9e4509314ebd"],["6f6ab2c9/index.html","e98fa456fba8569548d5db859f4ea6e2"],["6f93207a/index.html","2dd8edc89650c13b0002b0ba8a1a30ac"],["70032e53/index.html","7d50ba335dde9a20094ab283875bde02"],["71a9f0a2/index.html","1cddfd47b85624b7b2d662e1e5341ad9"],["73d62e33/index.html","cdc1865142cd31b7d1befea4d517b00d"],["773303aa/index.html","6a36799f841d29b4c2aab4423ff766b3"],["783cca3a/index.html","918533ea6e4f3a24e19822fcc75fa2f5"],["784bc526/index.html","e5b14c064a923bd3c0c7a59b398b9499"],["7a72e0ec/index.html","586db3deec19908452db49fdab750d84"],["7becbf63/index.html","5d4b7377cb3217a4b8446a69ba5d60a8"],["7d2b0472/index.html","7d38a240132db9ec501dfde602cfc644"],["7dfc273b/index.html","2f715c2fa33a0e1faa94edfc92e33036"],["7e7621ef/index.html","dde5ecbcc449edb595dfdbd7cbefc7ae"],["7e7c23c2/index.html","dae0b856970ff30855be4629e986566b"],["7eacad98/index.html","e5dbf9334ae4d01021690561a8b5ca7e"],["7ecca125/index.html","df8cda14776bb4caa75ec6e0efa6fc45"],["7ee1bb3b/index.html","8afb91ae64568976b9ba1023020aa103"],["835a9757/index.html","8f9bbe928a5b865bbb966f1914a33e15"],["83978c3d/index.html","a8fd60a2e8480744451272a922f3f2ec"],["8434b274/index.html","8869948ac31f9662be9ac74e0313dd91"],["84b8f7c6/index.html","08bb4e0f5e01d9b40dcdf4b521fb4e2b"],["84babd30/index.html","6fe7f782227972fcfc16a330228eaf1e"],["86eadb67/index.html","a792300f0f90b1e5651bcfcc095ec193"],["891ad037/index.html","c0c1d2bb1eb9886f349743ee49eea493"],["894818a5/index.html","b714a0d95e6cd8d44f1149554eb5410d"],["8b10921e/index.html","414ac78f4a8862c70eb241f198b6717c"],["8b8f3dfd/index.html","efa025a8cd301a07ce1115f7e2de2673"],["8c5ac577/index.html","df4d1fa80a65c9612c2b381c89160b2f"],["8e5f1388/index.html","2e9a7f1437a6f9c1d7ec9a333cd1ff5f"],["944a2722/index.html","e49a923ec50141129ce0f32d7682fe59"],["94b377b3/index.html","244d1db2aebc76f31ad1a699fa8b26e7"],["9562e52/index.html","6262679f1623a911c8ab33f985da2464"],["98ac8a82/index.html","4f2d564635a96983fda1d957cc6a36d3"],["99dc77d/index.html","7addc12a3007d42d95639e8251c7d27c"],["9a99eb64/index.html","237ae8dfbb45a051a7fb2c27d4cee280"],["9ac96b1d/index.html","002f3d50cf88d60f7e06515e74b3e7b3"],["9c66e3e3/index.html","b031882e679e5784c62e4ea02c839c47"],["9c67c163/index.html","3a4eb9e1f490c901480b9cc5e89226c9"],["9ee158e1/index.html","c58c61ff7464550e47f63cc1987d798a"],["9f1d8b77/index.html","d49593881223cca1d4f6aee8684d795b"],["9fb00d50/index.html","631ab8cc619b7a6c855b79b6325eaeb3"],["9fe4182d/index.html","c7043cb278ab682c7d9d3ce162644b23"],["a0e37ddb/index.html","26bcccb70e4b048c0b261a3c3756054d"],["a1e708e2/index.html","9ec0308489040868da5fba37604c71f7"],["a20ca391/index.html","1149833079ed98da82d951161b89157c"],["a2c7bf23/index.html","f8be09b5ec4e252f66a0be1072cfa953"],["a4b21e43/index.html","92e01361a529fa5b7eda357d98b9e923"],["a5bf9421/index.html","ac318157c3a9eddf1aeb18c42603fe72"],["a678482f/index.html","f0d60d17e4c05f7005072c6422c8e8fa"],["a74119db/index.html","66003af5f61fa7045a229cfb1127acbe"],["a8a8763e/index.html","32f36adc33f1163f0421ce67b6195c09"],["aba8e35b/index.html","ae8925c1d72a08e8ba88c0dfe520d604"],["ada46a5d/index.html","a0f32725a4d2e3ebcf19e637ae7bcff3"],["archives/2018/08/index.html","533b60d461e8c3ab83957429ea3360b8"],["archives/2018/08/page/2/index.html","8d1fb3d05e9c87a1b5d8998bc8a040d1"],["archives/2018/08/page/3/index.html","627c791409febdecadf39c84a96f9644"],["archives/2018/08/page/4/index.html","902e3e2892800e620256310c54794263"],["archives/2018/08/page/5/index.html","bb75eb79760834ae4269260ee40c3624"],["archives/2018/08/page/6/index.html","c3fac8e6fe1b26bd8558d0188a9b5fe9"],["archives/2018/08/page/7/index.html","3e42b52a4722175e7f7d25c7574b2a1e"],["archives/2018/09/index.html","c7f86ed1a2aece9a378af32bcad38ba3"],["archives/2018/09/page/10/index.html","19e4e9f3ba2510ab38976eed30dd2b16"],["archives/2018/09/page/2/index.html","248fe3976671bc38574873b004d73786"],["archives/2018/09/page/3/index.html","2b86c4000ab7aa2dac1a23fe26b85cfc"],["archives/2018/09/page/4/index.html","9bfdd360c1695fa92e831c0fae85203a"],["archives/2018/09/page/5/index.html","3d6be9ef823f8960d1d803a44e17fcf5"],["archives/2018/09/page/6/index.html","2701737c3a2a3cf7b1155389697659b3"],["archives/2018/09/page/7/index.html","31724be74d38ccde50bbc596cb725d3c"],["archives/2018/09/page/8/index.html","16aa25c09331ac7182e5e1e5a042b088"],["archives/2018/09/page/9/index.html","a69e5eac3d360ab79f684682fd83bae6"],["archives/2018/10/index.html","b49af677cf94fc894ed8f0930472a1e6"],["archives/2018/10/page/2/index.html","41248d3b78e3e1dff412d1cd772b393b"],["archives/2018/10/page/3/index.html","86af00018beba93832fd8fb435edbde8"],["archives/2018/10/page/4/index.html","b3bcd68545f94c401c3f280cb20aeb7a"],["archives/2018/10/page/5/index.html","12c4c3c86a4df2af0d8ef014c49e92d7"],["archives/2018/10/page/6/index.html","da24aa31e841d8bf5b3500d79daa6c38"],["archives/2018/10/page/7/index.html","4bbc7b04c54f9eafae15b28ff7056a6f"],["archives/2018/10/page/8/index.html","2e0b9043145d07e0617e3aa25dab85ce"],["archives/2018/index.html","5cefc346a1a87a6bf47e2d7771eacc00"],["archives/2018/page/10/index.html","142ad4124c1fda702bba10d00c3d78dd"],["archives/2018/page/11/index.html","a5d16a72c28b5acf10ad766dbffb018a"],["archives/2018/page/12/index.html","467af3720713fc4fd44e713a8b11f147"],["archives/2018/page/13/index.html","250ffd7421fafe3c2bf34a6c7a90eafe"],["archives/2018/page/14/index.html","c1bfd9098df06094de7894ace9dfe2a2"],["archives/2018/page/15/index.html","6c5b1007e4d3d68f77ba162ab2eb0907"],["archives/2018/page/16/index.html","be326222cefcdeaec9249c9a96318313"],["archives/2018/page/17/index.html","0df676fd228c80fdcd4d9ee89a60b9ca"],["archives/2018/page/18/index.html","d79dc3027a350b06c934452fa082f0b1"],["archives/2018/page/19/index.html","30879abfd1c392504b94052893151a0e"],["archives/2018/page/2/index.html","f8312f009d12b849969b5d388c7aa15b"],["archives/2018/page/20/index.html","d2c9f76032a93f9873813358cf1938ed"],["archives/2018/page/21/index.html","22b20649d1cc7e16c796dc7dd935441f"],["archives/2018/page/22/index.html","2799839189bdf6ef4d8a2a5da695de92"],["archives/2018/page/23/index.html","74f98bdc37ad705f524be82d53222e43"],["archives/2018/page/24/index.html","7baf79b41af562b6862651065d4be8d9"],["archives/2018/page/3/index.html","430bc3dc611a65bc50030441ce10daf4"],["archives/2018/page/4/index.html","c412aa7fe5a7c27ee531e3fae6288ab8"],["archives/2018/page/5/index.html","b35af552852bf0bb74bb19a25d1d47d2"],["archives/2018/page/6/index.html","40344995ba3f06a14144589978d49ca0"],["archives/2018/page/7/index.html","fa8438eff9f8ded62a2f92730ae25068"],["archives/2018/page/8/index.html","5f9de1f17e72ea3a33bbd193253d17d8"],["archives/2018/page/9/index.html","cf71d1ed4865dfd9d468274da9df8e1b"],["archives/index.html","9ece2eb766f2e9cfa9032badb1128c37"],["archives/page/10/index.html","1db96989eda585e0110c5c4ffcb41692"],["archives/page/11/index.html","bc0b2cf5a11fdba0412360536f68ac12"],["archives/page/12/index.html","4df2fdaf97456b0f1ccea88c03ebe0fa"],["archives/page/13/index.html","365c423d56a0c85a0ee9ae707e417ada"],["archives/page/14/index.html","0e70d0ce436688d235b3d8c3cdd0f30c"],["archives/page/15/index.html","d8ba2400a8fcb12459310f5b7d47da73"],["archives/page/16/index.html","63eac2d04ff0f0cd68fdde0292e978f1"],["archives/page/17/index.html","2a0bd35107e243288c8897b05b1bf244"],["archives/page/18/index.html","231aa0ee8e7c6ac36024aef8bb2afb22"],["archives/page/19/index.html","571ee966683a9ec4600fcc8620a4f396"],["archives/page/2/index.html","c813d49d0bfc6e0ced6ef0f852936509"],["archives/page/20/index.html","cf423253658e0ef6265f3674cdabeefa"],["archives/page/21/index.html","ad234782adc64856a76280eef635d986"],["archives/page/22/index.html","26adfc6dd6f85afa750ce52191ee1ff7"],["archives/page/23/index.html","2453f824225d9bf5a98a3cd3bad0a92d"],["archives/page/24/index.html","2fde3a720df7092388d3db094b118b92"],["archives/page/3/index.html","d759233ea1536a692e276fc6f4a36af3"],["archives/page/4/index.html","ff8929809039c16a4ab0900e3f978fd2"],["archives/page/5/index.html","5939c51778fad40b62c1fc85c57d5e8b"],["archives/page/6/index.html","fcc16cf05840bf662b57677e27b941ac"],["archives/page/7/index.html","6919cbaa53b1d7df842c5f76040448dc"],["archives/page/8/index.html","cf2c558d9df84d641244e817a2a4a9b3"],["archives/page/9/index.html","c99dc8c82f07ed3418c9d6715abe742f"],["b01398e8/index.html","38b1df9ac0f6d30d9d8efdda1b3925f8"],["b4c7585b/index.html","332034b1da2477b132ec78ac67dfc3d0"],["b513d267/index.html","9375eb73a7f65805eab4bc56e304676a"],["b67f2784/index.html","718122904239d59d4ed2372f4c831ac3"],["b6db0c64/index.html","aad0e13eb0bec8e0b0aedefc841f72e1"],["b8d3ced1/index.html","61b202edda3387dccd86c26ca390459d"],["b972d127/index.html","5276e6adc0d423744d3b62e38d56bfeb"],["ba46f35b/index.html","019e224fe901a3710d7049da76807fdc"],["baidu_verify_DfMf5XqJUb.html","c5d6b52d67efb236f474058eaf91c868"],["bb4502fa/index.html","fd7a0b3b7fa709dcf8db251d30d52e57"],["bb984cd4/index.html","b165ae19a991db09050109effb9e95c5"],["be3871f5/index.html","b2231dcfebe38e0b0264e33e7e634f8f"],["be97bbf9/index.html","5b8af02e901897ad890f34bdf8d23938"],["bef6deea/index.html","9b7205a1f4fe3d9c1ced98e188e95416"],["c02d18a7/index.html","dd22debad8f3a43ad5f0cfba23f4c812"],["c0d275b3/index.html","01e7682a98210492abc13025e3dbcf6d"],["c1989cb5/index.html","68759f12e7b0bd0a77b3fc13cc4a80f7"],["c2176cf3/index.html","a7afff80e4e0484201700a21e2a32abd"],["c2424f60/index.html","df0192bd5bd02a585ecd28f4e7abccc3"],["c2af3f7c/index.html","e32e4c05cf1d206782abcd31b9d4978f"],["c3fd1e79/index.html","b7e7719a736b97b747dd64f67ca75bb7"],["c40a717a/index.html","583e787cfdf168d0e99016e2dd12551e"],["c5057eab/index.html","b727adc4dd34cfee554c66f91d81df36"],["c746a48a/index.html","5691509e0222c2a9e84ee7e0cd16cde0"],["ca3f6ac0/index.html","5af90e1eeb1c4c5f983aa9ebc3b57af2"],["categories/dp/index.html","c26fde05f774e09c6c5e25f6244ef546"],["categories/dp/page/2/index.html","304d5f42a3827e0dc584a21778d0e60c"],["categories/dp/page/3/index.html","cf81b1daf2494932fcc260aadad79dfd"],["categories/hexo/index.html","a5c8111f210a94bd0007a6b13596bb9d"],["categories/index.html","10b0decfdf1918fba28fb692ac73603f"],["categories/java/index.html","fb9b43d08202bd627315616a15e73879"],["categories/java/page/2/index.html","7efda75dccd18b67dac5a015a7a8a19d"],["categories/java/page/3/index.html","fb45086af8c1ad5aff75bb2f8faed5c9"],["categories/love-peace/index.html","dac264b4f72f6e0bc73eb11c108d95a3"],["categories/二分/index.html","f825c95dbaa512ac341214fbf02c9a20"],["categories/博弈论/index.html","836454ebb982d8d955ae6292e041ff60"],["categories/博弈论/page/2/index.html","d474ea4b13124624856975444c9770f0"],["categories/博弈论/page/3/index.html","315ca30adbe616106be90128f774edaa"],["categories/图论/index.html","30f143025e4a0016c5dc1ccf5597fd18"],["categories/图论/page/2/index.html","423f1e4ebdd610f89a72bd71156fa3e4"],["categories/图论/page/3/index.html","00d769cb778c7baec87190f629357141"],["categories/搜索/index.html","c6dd08fb07705dd42980e1266e503013"],["categories/数据结构/index.html","b1a48dfcfc7457792d09a9f2ffb4eda4"],["categories/数论/index.html","110ce091b504246db857ff5e0f77a62f"],["categories/数论/page/2/index.html","a2016782987ad4f61f65e71ac3884b79"],["categories/数论/page/3/index.html","bcea4fb16bba75b7b6ebc679be63c5c7"],["categories/数论/page/4/index.html","0729c99471a46b761d46c02b5b65f5ba"],["categories/数论/page/5/index.html","26034698a722aece6ef08c1df5129a41"],["categories/数论/page/6/index.html","17fda7e046d315a82b2c34fe76c3a0d7"],["categories/机器学习/index.html","2a2b7b4b2c54fcf7ba8141736ab37f2d"],["categories/杂/index.html","cf660fb72191f0238dc0f7cb34f26975"],["categories/杂/page/2/index.html","63498339a46525e440078532a94e696a"],["categories/杂/page/3/index.html","67c62bb58ed4150eac2c9cf95ba2cea9"],["categories/模拟/index.html","0d6691cd32a46cc4a9e8bd7a527f1171"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","c2e282c8c2bcd5a37fa3040c2209855f"],["categories/计算几何/index.html","ab92515c5429ab25b58ca3a48b6f24f3"],["categories/贪心/index.html","c291da87541f415366d2e814c303a0a6"],["categories/贪心/page/2/index.html","10ddf4f5f4eaa40cad9142730bc76410"],["categories/题解/index.html","2dd41d3e927fc489f4a31cf24773ec9d"],["cb821a33/index.html","b2cb88161b9fd6052b029a58e20a3ad7"],["cbd59ef1/index.html","dbb7aefb084678d19bcea68381de20de"],["cd27113b/index.html","24472a7c3d65a89cf74fa4c75f52eefe"],["cdd10d6d/index.html","7f939dedf2d5520429e784fe23a5d153"],["cf682b8e/index.html","8b09ebcf256442d6f4c013cbce04d31c"],["cfe28c6a/index.html","fee1bb24a13b6567746d61cd30af6d06"],["css/main.css","350919a2dd596459e31791c060d0ddc3"],["d0f16a5f/index.html","397d4def4b196caa7747682a24c0aa4b"],["d2c81766/index.html","487a51e56eff659e1ec94d889e0b270c"],["d2d140b5/index.html","c7d9ab1438a2b5bc7777e92f1eb09478"],["d34e925e/index.html","e0a9bbeb7b393a4211c36200b8331a3a"],["d377a60d/index.html","62facf4882e107f73543d5fb75f5f352"],["d5042e55/index.html","fab55e67adc89c3e6300f9d8ef48b2ce"],["d51ad0f1/index.html","95cb379aee8b884cacc42d1d06c2a760"],["d655b5fc/index.html","413640a191631b822b07e9fb8d29791b"],["d67f02ad/index.html","cb8fa6130de4a60027df73dcf08be020"],["d6ce1fc2/index.html","50e1745e95d87a14636fba1e72c1e33b"],["d6da51a9/index.html","5131aeafd9ee8668e8cd4e9a6c38ba79"],["d7ffbd1c/index.html","4670785d1f90bf02262ac143a4ba577e"],["d971ae59/index.html","5caf505c85a0f1933c59845457f5279a"],["dbf07d5c/index.html","f7f2db6668713df61a09ec345157016c"],["dd1d064a/index.html","f3ba13be68b542fadc5f7b8e23c82c77"],["dd814372/index.html","2ea88c1246aa5b76fa8d42bc80340f13"],["ddee45d/index.html","71d652f9e400b18c5b48a3635279106d"],["de762ff3/index.html","ee10f34330f6a66288702de1769f2db7"],["df82d1f8/index.html","3930d8d5fb009bb4df8e3aea51ef3be6"],["e1d4a8b4/index.html","1a2dec4902169d42cfa24e1a53c49c8a"],["e4c2cc13/index.html","bd94431e705b4485d8932fbb8f8c3301"],["e4d2c7ba/index.html","bcbb109dfe1ee88443d239f88eb2cf2a"],["e5ffcbea/index.html","2f3f62ab4d239a611e775fd54a18bd1d"],["e612ace7/index.html","0c7dee4ae8722f522568a2777ea2c397"],["e73bae86/index.html","ece3798e238a439a1404b8c27bd2a530"],["e7a0c86b/index.html","4d8cc6022cef4f7903daeac15fb90b85"],["e7b555f8/index.html","2deb53a28ac7a4ac58d886a13cc09e34"],["e81fda88/index.html","df466463d9b998923aba04d9a4c27f6c"],["e85a11e8/index.html","5762a1c46fb307d21b20d496a2a429f3"],["e86890fb/index.html","f9ddc3a3fea3ecc4833d6c95e294daa4"],["e98fffcf/index.html","e8849797e256c43dc215af14e0ac4eaa"],["e9da39f8/index.html","4c8e4f694bb71acb5caf57f0e39a49ad"],["eb18b91b/index.html","7b328e3c735e00aa16d4a60df72fab7c"],["eba1fb1b/index.html","00ef2d5ff4395ea9c257b965aef48f53"],["ec404005/index.html","97deec46875084a6ac7f72da7adcd608"],["ec4e8b99/index.html","03eca00cfd9a605b9ae0e2f0f325b36a"],["ec8b12a4/index.html","e2763d0d7403979d29c3e04d456030c7"],["ef2a130f/index.html","fe873a3825dd28469a627847d9597389"],["f0565075/index.html","c0e6fefd201a2bc6e21395fe80edafe5"],["f0d0bafc/index.html","6bd42fe2c73248182bf34be5d6f9486a"],["f0e39cec/index.html","2ef1f8b5fc6002985f2a5b3f4f74ff76"],["f1a4e5b1/index.html","a418ae8e03770754a8c15bebcb7d500a"],["f1aab9cf/index.html","eb42ab9f172bf16a49948d23940bfd57"],["f292e0b8/index.html","876deb08ed3d1d7ea337e3004a2a9584"],["f32e27dd/index.html","c98cc6bde7b6486a1bcec7828343f36e"],["f47c306c/index.html","7b04a30d4c44c7ec683ff0a8dc3422bc"],["f6227d77/index.html","3b8908c3ee8768a63f07884c496a0407"],["f699b617/index.html","5174dbc39e35464dbdf55c45bbbf97e4"],["f715085c/index.html","1f53fe46907441cea4fcab441ea6cb3e"],["f7f1f3b6/index.html","6fb1df35c2f0e370b53711ad11079b2e"],["f8170462/index.html","9fc7b11d88853bb6d81e123f30cc07a4"],["f8eca34c/index.html","391d962784d7e1a5b485b7f13d71cee0"],["f9161795/index.html","b7d96c063cbe18b30acdd134108460a1"],["f9c3ad7f/index.html","ddc6913e85f48cbcfd734b35c302b771"],["fa5f812b/index.html","1676470ef97e7eae32af9ec6ed57cc22"],["fab7cb46/index.html","c05a3092bb6e7876aab39ed3e5d63c6e"],["fb0210e3/index.html","05ecd2870291e153970e365f38f8d0ff"],["fc584b3/index.html","8b2bb1eff1c4a95d39a28262896f47af"],["ff888e9d/index.html","3ad863740d5b4e3bca9085fd8746416d"],["ff9df0f5/index.html","54e31ef62501b3de461551039268fb36"],["ffac8316/index.html","a70f0f6af5d40eadc24808048212b26d"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","8fc0c765e819664e6b86247182400a8a"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","9748c4105290561abd793db4a9feb18e"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","b1cf94e589659fff6996b34226d777d4"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lemu_demo.html","a27db201e2b42995e8d1ad742b29ae4e"],["lib/fancybox/README.html","bc0b54f67cd12998af810a71b96b52cb"],["lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/pace/README.html","d795a2ee3314455225adc310536afb38"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","4ed7aad26f15b2cd0d99d34d40ff33d4"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","c5fc7c79cbbf8777d17f90036537bc31"],["page/11/index.html","d82500c963247ab99c67be75a63b1fbb"],["page/12/index.html","ecc52320c662dd3cebac3f0a1715bd19"],["page/13/index.html","9b58d54a8d8f5ac1b3c1d0bb1bdbba6e"],["page/14/index.html","f0b95391704ea6e603c9729a94a16ff6"],["page/15/index.html","ba5ddd5f04e652759c9bbf898f280e86"],["page/16/index.html","11a9a57117785e930a9787de3b8754fb"],["page/17/index.html","1322225ef79ab71afad7431c9e579638"],["page/18/index.html","6338f0bdc6f16e149808339509d27593"],["page/19/index.html","fe1b0d87d86512277cffcbafde214317"],["page/2/index.html","83f083504110da3847d80f726279631a"],["page/20/index.html","cb86e564ca775379a3bcace246dba126"],["page/21/index.html","366d5fd261a131ce79982e2731a8cb26"],["page/22/index.html","cb85104410cd9ad59165252e41e14134"],["page/23/index.html","c76bc013c65327e5305354529b50081b"],["page/24/index.html","b7cff10efd5429af41f8e38e94e92843"],["page/3/index.html","a405c9ae8413887a7c1942c3bbdd303e"],["page/4/index.html","c5acb710f1aed7eab3b56110fb7b78c4"],["page/5/index.html","533299f0f1c2b6041ed93793c6762b59"],["page/6/index.html","ee0f868f4cd8ed2f4a62c67207967a32"],["page/7/index.html","8e8e82cf07471daa2e756ca00ef5d421"],["page/8/index.html","7d7d69582e69266e8cf10abce28d81fa"],["page/9/index.html","ce039923e8616ec3ff297c8a12b03c00"],["tags/Floyd周期检测/index.html","c798575d934e5606225773f6982b550e"],["tags/IDA/index.html","b9466055da9710a792b8e0cde4d535cb"],["tags/Manacher/index.html","938881f4cb81de74bee9336495fe7f40"],["tags/Pollard-Rho算法/index.html","bedc1fc44079a5c7e1e1ffc53bdd823a"],["tags/api/index.html","4442ed2ef06c749e8d0c8dfcd9bcf514"],["tags/bfs/index.html","a89c5dc0876340944773674c898bbebd"],["tags/bsgs算法/index.html","ac04b5e18632da6ef7eb8a705289bdb7"],["tags/cf/index.html","af46cc526be05c5452949b90e429df1d"],["tags/css/index.html","6956db2810840c7e3b85aebadf40791d"],["tags/dfs/index.html","2d24a4d3be323f3d9de915e532e36ded"],["tags/dijkstra/index.html","07bad8af161fa990ef8fa9e9e46bbcea"],["tags/dp/index.html","fd29b31b3b537128c6a35fb79093dae3"],["tags/dp/page/2/index.html","551bb6a659233e490f9603b505656422"],["tags/dp/page/3/index.html","39781fc23a818dc0fe8f45d3801f0e6b"],["tags/gcd/index.html","1fae23fe86a721f432d2e673d41b343e"],["tags/hexo/index.html","a65360bc52b43b948c5180fedd7c8f53"],["tags/index.html","1e22587c069c6a2b32e94ff534500ec1"],["tags/java高精度/index.html","1616c1e2a37c9861e5b75d98803d553e"],["tags/java高精度/page/2/index.html","4fe470a05d56a793cd5acbe3f5686cce"],["tags/java高精度/page/3/index.html","fcd7a5e2f5febd4b6876de21526d3031"],["tags/k-means/index.html","fdd6afe8017a7c6ce81b307fc4910bf1"],["tags/kruskal/index.html","6c355f21e803b3f5bbb229ad27e48d62"],["tags/lcs/index.html","0a17f1d68e9113ca91e1a69e38cf629a"],["tags/leancloud/index.html","e550a19186a9d7321b39ab5dac544473"],["tags/live2d/index.html","ae6ed36e54f20e199ae2b7351dcd18fd"],["tags/mac-OS/index.html","12739baf7ee17004de67fdef748c917f"],["tags/prim/index.html","9fddba3312316ce3104ad134757d6b0b"],["tags/python/index.html","99b96df7ef1db64776098b8cd516c79a"],["tags/revolvermaps/index.html","cd00a006ff9f10c73cc340b57eb36cf5"],["tags/rmq/index.html","b5b59d16b98bbdef65a5aab100e52f26"],["tags/sg函数/index.html","2e022c71023540fbbf49ce7800deae47"],["tags/stl/index.html","7bc776300dd8c6306237a674346455b8"],["tags/三分/index.html","a81e547d1551a4ae0304aadd558be989"],["tags/中国剩余定理/index.html","0f698efb961607588b857dcaf9e6534d"],["tags/二分/index.html","3daa85b319a7674a98b397db5ecc2b44"],["tags/二分图/index.html","f39581187c9e3a7a4e848a9be1240b54"],["tags/作业/index.html","a2f1f2c8164500ab075073287ab2625a"],["tags/全排列/index.html","9d273ec6a8533140d44cfad08638a86a"],["tags/分割平面/index.html","ca85babf80a278f37142cccc240defd3"],["tags/分数规划/index.html","2318c042055f613a78841a350724f280"],["tags/前缀和/index.html","81933c34ff32b1069af7c60298a2ce11"],["tags/勒让德定理/index.html","0ed293fa1cb92a7eb542216372d3d10b"],["tags/匈牙利算法/index.html","e2aa69d11552d8d3117e8e7759f0d515"],["tags/博弈论/index.html","d1a43c6ca1426feea13e1595d4054d94"],["tags/卡特兰数/index.html","13e67366c1020728e356325efe9eecec"],["tags/卢卡斯定理/index.html","df8a5c6171a5c918a677da3188c92c89"],["tags/原根/index.html","85e57ffe6542b111a1bb43c5f7533b6c"],["tags/四平方和定理/index.html","95e1748297a0aa89e3c9cf68dc4b8bfb"],["tags/埃筛素数/index.html","40ba9772d63413881c2b5f64b895606b"],["tags/威佐夫博弈/index.html","fcae7342aa6233d7d5839e61ad6c48d3"],["tags/字符串/index.html","f1e062bb6ddbafd8455d365ec3d0dad5"],["tags/容斥/index.html","522a625c441b19824441abaf9b865b77"],["tags/尼姆博弈/index.html","39dc75de9974b3db36a128980573e2f2"],["tags/巴什博弈/index.html","b650a271adb0559ad04d245ec6a5fc2a"],["tags/并查集/index.html","bbae2d96eeed3434e859aa6e1efbe1ca"],["tags/归并排序/index.html","d5687d2156361351d6205a38a02cf3c5"],["tags/循环结/index.html","78084eaf05c2e16eeb7c81ef70222aae"],["tags/微信/index.html","a6571248c664739399f3ca6fff526b9e"],["tags/快速幂/index.html","9c42964ef1f8efc6cb839a7c9730d2bd"],["tags/思维/index.html","104513b5fee71e62648e8e9c527379a9"],["tags/思维/page/2/index.html","d9a653586dbb086ef20e1515b72f6b59"],["tags/扩展欧几里得/index.html","b94e05d21932c85a564181c57eaee022"],["tags/拓扑排序/index.html","e9828fd6baa141fabf9cf21809d10da9"],["tags/推公式/index.html","afecb4a547d6996f78d449fa2278b721"],["tags/推公式/page/2/index.html","6a9e2bb2164bf2f59c47179c5bd38f3b"],["tags/推公式/page/3/index.html","8079eb69df3da807b56455a19b533a5e"],["tags/数根/index.html","a451a911bb64aa0321ec088cdc4d2c0d"],["tags/数组加倍/index.html","079d5709596c401ebdd0bf22fbe1f00d"],["tags/数论/index.html","6ad2dcdc5de900ff1bc94e127219403b"],["tags/斐波那契/index.html","f4b39c2eb2dcab619b0fea4b2e0c5e40"],["tags/斐波那契/page/2/index.html","8b7c192d514896f8af255e9eda49f989"],["tags/斯特林公式/index.html","ead52ab76970f448e2e9db054465d56c"],["tags/斯特林数/index.html","8f744e43dc08db21196a75d56649df4c"],["tags/最小生成树/index.html","14e5e45435ea150fa9fecf77d876a4f7"],["tags/构造/index.html","a371b8efff73ea65cfce42f37ed8dcc1"],["tags/枚举/index.html","64fc7481e5fa0293b73f5d6a5d33e3c6"],["tags/树状数组/index.html","c8f1b5b7bfaadb844932b176ebd00803"],["tags/模拟/index.html","8af19192ecc8366dee4f010b57e5f260"],["tags/欧拉公式/index.html","3f7d5578a2b573bd4cb244f7f62b1042"],["tags/欧拉函数/index.html","bcd4a2dcd95349ac790f8459777e5817"],["tags/欧拉路径/index.html","4506082d02e4cacb8d57e57f57b4ec25"],["tags/汉诺塔/index.html","b4b5d2cc38d4f051a2829c3be5cd6b29"],["tags/海伦公式/index.html","d5682b384da91dfbe3d6b293c0c953b3"],["tags/生日悖论/index.html","3bc76157fc2058d8476db5bc4420459b"],["tags/矩阵快速幂/index.html","5b10f9a7f3c93af77d98908d0a61f8d5"],["tags/离散化/index.html","5df9e1021b9a1f1dec0cfa41df8e97c5"],["tags/米勒罗宾/index.html","c5359fb5800ed9835bb2b19ebbf77c38"],["tags/约瑟夫环/index.html","c89d99061ddde725e8a280d65fbf5be8"],["tags/线性基/index.html","5ffa9c1aa3b36aa986dbd2b6c7e0f052"],["tags/线段树/index.html","d215152295d47ec03dbcc94462d19bf6"],["tags/组合数/index.html","ff0cf27b235442514f973904645ee644"],["tags/组合游戏/index.html","d491a0bc0302ce37d08b9193f2e80b5c"],["tags/背包/index.html","8a5f96e40a1144672f3c780dca72117a"],["tags/莫比乌斯函数/index.html","e02d8dd9171ab6e28d33b7dc856b4692"],["tags/计算几何/index.html","2fd4d7c84ea301d64fc544772d7b05ff"],["tags/贪心/index.html","e71eb7daaac1865a7e51e832b1832301"],["tags/贪心/page/2/index.html","f3f62e5bd238d2730fa08ab82ba32768"],["tags/贪心/page/3/index.html","eac7580dbab03c1d7ad0cf4af475c5ee"],["tags/逆元/index.html","f456a56907b36544533b5371727a8b72"],["tags/阶/index.html","f3d20b9dfd7a88866b561d9e637f3e8f"],["tags/鸽巢原理/index.html","71595ec76d2ce800ac1059cea2ee9b4d"],["tags/黄金分割数/index.html","f5665546717e562b6902291268e88c56"]];
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







