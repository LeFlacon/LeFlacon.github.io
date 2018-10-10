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

var precacheConfig = [["2018/08/11/hello-world/index.html","0f377ce9bebe62e206cf14e3952ee246"],["2018/08/14/1995 三子棋  /index.html","b53c4e2b0898078ce8d7ce6a602b22ad"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","5ec0ac68912174bd12848967592f03c1"],["2018/08/15/2006 飞行员配对/index.html","fe8fcd4ed4a87f9126054ed8aa95aa62"],["2018/08/15/D.Tea/index.html","3258b8d7e68ed1f7e5600ff0605e5cc6"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","0de459ac3c74c83b411ec1b21f417047"],["2018/08/16/1459 迷宫游戏/index.html","39953b5965245abdc76e2652186d8f5e"],["2018/08/17/1264 线段相交/index.html","7aebf84fc82844cdbc8dbaf9bbb1cc95"],["2018/08/17/1265 四点共面/index.html","f018d7f47c116fd3bd38234045559ad4"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","404d00bfdd4331b369c34dcd2ef0142e"],["2018/08/17/1384 全排列/index.html","6439cd849148acdef4380ecf3e7610b5"],["2018/08/18/1240 莫比乌斯函数/index.html","c263cfd25e916a318c6bdc37d55cb6d0"],["2018/08/18/1256 乘法逆元/index.html","0a2dd3a863a72066aac60bd1ba4233a4"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","eb893acd854d2861ef5a0addb751ed05"],["2018/08/18/Teemo's bad day（并查集）/index.html","48c7913c6db7848db70ad104f55ee971"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","43a3220b5f829a50af1f18edac2922ed"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","bdddc62dfda171f0b591b76a0b8e0d72"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","8724d1dd52a933fdbdfb2defd54539ef"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","829ccd1269cf536adbb7bd1f7bb1e351"],["2018/08/18/hdu 1856 More is better/index.html","593349b13b4eca5405ad698a5fb9bdc7"],["2018/08/18/poj 1182 食物链（并查集）/index.html","535836e52b2a8c1ae6e5d6944db67d20"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","6c70b4ff016e2c004e24697747f44b48"],["2018/08/19/Minimum Cut（读题。。）/index.html","554d6f3545beb1fd865639c1a412760f"],["2018/08/19/Ponds（拓扑排序）/index.html","873ac86297f1a2dd83d25c68a7598471"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","67fb5920b6a9faed9bc5675526d68063"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","d18371396fc3e4a0e26633cf9cdca998"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","97a4665a1630691295fd4392529bb7ca"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","982dce135321f9dd3603a59c699cfb00"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","ea456e172f7ad37ab047bced843bd5df"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","303eb394bae1f375eca3f8fbd8147558"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","ae2d63005f5566a03a89a61f06262f95"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","126492af3dd233d249d23ded22992768"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","a7071e3de432a128a8f8b5d31f0e0cd0"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","c381db694d82fedabaf4a9c5202e9e65"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","52101bfdcd06153fcd9cd2c39e686a3d"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","c11382c0c17a8ff65412a2c88fff7c1c"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","c74e0f45b6eb32c649b8d4ab00941f9c"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","a6ed542e7890714774450dd5f5d7d4ad"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","2a4bce45d431e237de91019ffe9b9a52"],["2018/08/20/Pawns（博弈，思维）/index.html","a704f77630ebec00d8ef555c8bb608de"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","013299c5afecdf1b3166fc78eab1b296"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","6c3005764ea5730a5f8fb5556e321618"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","29696980beb041e566cd1ffc8cffe9e4"],["2018/08/20/hdu 1564 Play a game/index.html","559b92be991b50c8a950b49c9f9fbec1"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","d22f1d9bd396495eed2d6b7ac0ff2be5"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","29502c9d3bd2048d8264daa7ad620753"],["2018/08/20/麻婆豆腐（思维）/index.html","7a8532725169bea99a15250bfa1be151"],["2018/08/21/1212 无向图最小生成树/index.html","dcaf4c73195ce391324be45178073965"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","e9c7ad8d5a4fee9d70cc3e25b5fbe8a4"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","1384f1306756670605a3f4658cfbbd11"],["2018/08/22/1079 中国剩余定理/index.html","d833d5ab7554a9b538cb9087c34d0d09"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","6f4361d199a91c929be2949649c63443"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","9e80d8c645435afd5f49c9318db17d6f"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","c0c9a790078d5363f14f98068d45a52c"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","8678d00e0628559a3fb7c9b1ae9aa3fe"],["2018/08/23/1136 欧拉函数/index.html","f74b6b2deecee03f41c122f81dd8a173"],["2018/08/23/1137 矩阵乘法/index.html","e1c3a5d8c6f050ab54709bbcadc42f08"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","cf8aabc9808a601f8ad37ef96832e727"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","5c4296868631ffbd0b65819e40e8b91c"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","8f5ea6279aa4828e56ae2f94d48c7d2b"],["2018/08/29/hexo4/index.html","abb546a5200d3e20bd7d6c3dec97fad6"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","1e1342b91b2580d74ee0a0ed73534fd8"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","ca636d8ed41e9e22a4185f4b39f680b7"],["2018/08/31/A. Too Rich/index.html","5bc2760d13b71cb06ca91e684d1ae9ef"],["2018/09/04/C.Catalan Square/index.html","47c306825e47aa8f4e8b44fa920aa070"],["2018/09/04/hdu1002/index.html","3977ebf84d41cafddd5d68523e8be9d4"],["2018/09/04/hdu1042/index.html","cc506e6968825632c4f9d78ac5e4eaca"],["2018/09/04/hdu1047/index.html","45e9198e3972190ee643822c2a556375"],["2018/09/04/hdu1715/index.html","f280d497a2b51449a2f0dabd155310c9"],["2018/09/05/hdu1063/index.html","af6952b59d229b94f009098f202c58f8"],["2018/09/05/hdu1250/index.html","3481f1d9bf9f72d24e1261206044589d"],["2018/09/05/hdu1316/index.html","9e3947102ec721a988f180ca3c472299"],["2018/09/05/hdu1753/index.html","4ecb8279a8588dcc43821b7f6f870310"],["2018/09/05/java大整数题集/index.html","6a463fafad4dc978040f6b163799cc40"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","0cd971b5d3019020885cf7dd35de0130"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","c2a2b03d96d25c7f1faa1952f431cd0d"],["2018/09/06/hdu2054/index.html","2b5447828c1907c74e44522dbf035ab2"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","5798772abcb9e15b358aaec4f801668c"],["2018/09/07/hdu1212/index.html","52ac6b69856acb4c2f17b6dc6ada5392"],["2018/09/07/hdu5050/index.html","18d5219022700572d33fc4f0ed94f768"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","1d4f6a8631c96551349e564486b1f1e8"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","1ccf21dccd4f43d1cb445a432788a042"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","33814f09fdc22405314391ed8a158da3"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","2bbdfd962c267544307fda4d131fc86d"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","3b698f75e58f70e01ac272ba3d10473e"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","267f0f98b8ac08d57d4be31f9c782d5d"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","8bb9c97b5cd5868750c37878a3dcc19e"],["2018/09/13/Teemo's formula（推公式）/index.html","ae4f01a05bb2819a0511e726b9aff76c"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","b258445a5e663240be2251bde2dd6658"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","e1d2f19683a709706c87949ea5b73976"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","99ee9f4bf962b1a4b83b7c0dfbddaed1"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","6817bc2e9ea021622dbef00014581f8d"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","d36a257bf3203977bfd90c6d65cc87a5"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","af94d64a25eb50059aafeff42110e290"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","d7e2c439a62a6fea8bb10e70ea75fa14"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","01e4fbdbcb90c0276ac41e0471480e6b"],["2018/09/16/1118 机器人走方格（组合数）/index.html","f4121e9d9ba74afa5caece54d087bb81"],["2018/09/16/1134 最长递增子序列（dp）/index.html","097e3cf5880a894617a479ddc8f30ea6"],["2018/09/16/1135 原根（原根性质）/index.html","fe5eb534c55161f21df02bf79d7ba9b5"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","a63b6fdadbd214fe6048abe1f5c551b1"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","76cf6a801d951e53b8d3ee7fd5dbd97e"],["2018/09/17/1073 约瑟夫环（递推）/index.html","013e75f9ca331adda6c47fc0f933b2bb"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","001111fd9e6ab9d81a9404938e0d1776"],["2018/09/17/1085 背包问题（01背包）/index.html","9da7debeb2f20beeedc50dfc78667ec1"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","f9d0523ac5ecd7ae24524c8e12834376"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","118fe33fa0e44fad19b489c37956dfa1"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","247d359c0b21d13e61acc0102b1e9ee4"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","cbd76770bb56e3a905fc57fe7c66723f"],["2018/09/18/1027 大数乘法（java大数）/index.html","c2ad9c0984f3ccc1161bc86f6bfcb9ac"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","28bc65ab58827811e626994f74c1333c"],["2018/09/18/1049 最大子段和（dp）/index.html","7dff3fe7606146e18ea7ad5b184f63de"],["2018/09/18/1057 N的阶乘（java大数）/index.html","78ea6b0f619e2e5661e84d17b59b3d20"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","d2560a45713646c4671787c6c7403b3f"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","9513dfdf55621ecbc5c3914d79a29f0d"],["2018/09/18/1072 威佐夫游戏 /index.html","b09411ecff4b708aa946eb80b994d15c"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","cec8d5573d510368229b73765afdbe6d"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","f067fbc45406e3af50bfe74156c93e6d"],["2018/09/19/1000 A + B/index.html","0a7921f9c6b19942bc86e28418829db4"],["2018/09/19/1005 大数加法/index.html","55fc9441d98fa71589de957acbae1485"],["2018/09/19/1008 N的阶乘 mod P /index.html","dd58c3c0ad39f0e95c6e46be3f101395"],["2018/09/19/1011 最大公约数GCD /index.html","f0270d1f9be85cd615b352101a45ae16"],["2018/09/19/1012 最小公倍数LCM/index.html","4c38e114aa4ab68b11a70eb77dd5b4ee"],["2018/09/19/1018 排序/index.html","977f5705c7b3efaf19ae6d4c7a34c4ae"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","22e31c759e6050e8fde4a83f310c49e8"],["2018/09/19/2133 排队接水（贪心）/index.html","43dac817c24c91e2ad1cfb20e3d6ff73"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","645e5caaf702e8b2b280fbdd7653dbb0"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","661ed2d013745074228e2c9ea555f841"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","aa108e2d0f77bf85c1b3bcc379b7c062"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","8bacc328481c3c6d0a8b0a6b31ee0d2a"],["2018/09/20/51nod 1717 好数（找规律）/index.html","029f48b8aee246b05ced4cf6b3bdb09b"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","5241ee2ccc8d39d823a41bc7187f38ed"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","5f5eb32680eb68b90f484c95b4f119a4"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","9815c111c73c799086a6c370b0c11e22"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","afd5cd1d8bc296833da49d3bcb68f65e"],["2018/09/23/51nod 1791 合法括号子段/index.html","508177296bce900750e526120b534c1c"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","4e737439d6026042014597608246b9ac"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","15d736b8f008ba403f130765efba353f"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","33f38187b7e4280019a662d6d77ae3df"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","6bbab9575280a112462c69a9823e84f5"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","b8112a2d7bd2942f8ad0ec3d7bbc5264"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","05b4ee511856a67eeabdde1cb47e7793"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","108a66e0585e00ca7f64af905499622d"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","0b1c6dd9fd169df2d88dcdd31892f302"],["2018/09/29/51nod 1015 水仙花数/index.html","c2becc898ebe3fd68a017cdca780ee34"],["2018/09/29/51nod 1080 两个数的平方和/index.html","05f14478e6cdf0a47e22d01a01abd5be"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","d5ad062525eca404598548d326508c36"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","143ca1a42935770c672e28bfb202a44c"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","bf45218b01c4d9bef79fc914b958f686"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","9545a3eb72ae8889502b24d6300dff89"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","dc21520e5d7f5f7e0fd70f17d1417ef9"],["2018/09/29/51nod 1182 完美字符串/index.html","968c5785e5458fe3adc024d78d539bd7"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","0a3b55316240fadd32a0aa3779bfcd3f"],["2018/09/29/51nod 1283 最小周长/index.html","9e7b59fd3f3370b371b41ad43384b9eb"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","fb47ca9a073738aaceb7fe2b29b82684"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","da6f170ccd32364f235993087fe0695a"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","5b9c9a6cfa1fa64a277b155c9ccd0269"],["2018/09/29/51nod 1344 走格子/index.html","3dae761f07cb6dd0ceba8ab5bbd3449c"],["2018/09/29/51nod 1347 旋转字符串/index.html","c1a12f84a47709d26a040dc78247c5d7"],["2018/09/29/51nod 1381 硬币游戏  /index.html","fb8ee92805945b3414089d659ef613d4"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","2621acdc582916a52501c25af46b3eb5"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","95cd0eda4b9db1dfbdaca14fd07cabb9"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","24bab1bc6821c344f8ca285b07b266ee"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","74a462a88d5eef3b89da220c6e086043"],["2018/10/01/51nod 1596 搬货物/index.html","4b3cb58e59fb761e5c45477ec195f1be"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","f486dd529abead57d6c1b8d120c3308f"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","e1d992a5ec9aa7d4b79a2a81de356189"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","c0e40ed836bf5d8d81372ee667717395"],["2018/10/02/51nod 1521 一维战舰/index.html","8eed8bc0fb52ab65a8dd420114b73e35"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","b5cd3b5e67fcd39c89535652e2ebb305"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","06207740d9cac7e8c5e6bb96e2b19248"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","3aad7b5c1763fcc3f267d11b3dbafb4e"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","5ffabe2873b05fd2d97e00d0c5e41488"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","c0a98a6b73eac6d5b0d27c821c2b7f0d"],["2018/10/03/B. Pocket Cube（模拟）/index.html","5d4b064c0d4329be7aed3f345d091a9b"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","d3f378090b62767dae4937c7dc54f216"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","3109b2b630bf1e56c9cd7d8f2ed13eac"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","08bf14b40008a16d18fcf4280297f044"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","35225b3d34a5dd8e31dcc2ec26c71950"],["2018/10/05/51nod 1138 连续整数的和/index.html","f86361fcacdd7343db224fe2b4cac64e"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","ebe0afc17ecac83296ea12adee409c2c"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","226abe05f8b5756d5a62e6a49b5d4bf2"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","fb9d141d53b4b496142c50ee81a37f1b"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","2de7176ff91159b82455a36391df41d6"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","9db558ee3240a1ba1eca7cbef126fca1"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","684a3cf8dc220e266e57dbeb389f60c4"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","25137ac9820950cb6c7225cbb26cfe0f"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","708c6f86c3c073aaf5ac1df05eae4a69"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","b033c0bf7106acd0d56f246ffaac5fb9"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","2fc5899eaea8028ddaae41039da0b164"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","7a9989899cf9b8b1fd0e96e2e999f19e"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","3832a56770820589ad0d53357ec7a1e0"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","cbb2e367bc804ba523027b2d0f4d4aa7"],["2018/10/10/ural 1073 Square Country/index.html","1a8e376ae50e506d49988021c479e348"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","9fd364a2738b0608e2bc6e1f8c39a2bf"],["404/index.html","eb56ab1a907eb9453392bb663ce79589"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","4428ceef2f0650126bb88bf1c70ed950"],["archives/2018/08/page/2/index.html","e5d0fc82ccb5f53b1724caff58e93bf2"],["archives/2018/08/page/3/index.html","5be7c33c43645369ecebb9a915cb39e4"],["archives/2018/08/page/4/index.html","9c61fd7300150c87dcf7a20b3bd71b92"],["archives/2018/08/page/5/index.html","694ac134c636e264fd64fb5bac93120f"],["archives/2018/08/page/6/index.html","d05d30dbf2946d78941811be6b7ac489"],["archives/2018/08/page/7/index.html","33f93ef75107d6129fc923192a2e6714"],["archives/2018/09/index.html","1b87a5247c2be93a155738e8eeb59303"],["archives/2018/09/page/10/index.html","ed01da1596beef6948093079219b0858"],["archives/2018/09/page/2/index.html","fc321b5b2404efb8bb9dda7ee44083d3"],["archives/2018/09/page/3/index.html","4c77b65000d7e1ea1cfadc892a68ec81"],["archives/2018/09/page/4/index.html","dae4e50eb263ebfe76b2a878c7a7e998"],["archives/2018/09/page/5/index.html","4086987725e624a206d2a30cf0aafc08"],["archives/2018/09/page/6/index.html","85f308ff44c058f9cb3f9ba900083c28"],["archives/2018/09/page/7/index.html","ac8112880f79180a3f1192528053e6e4"],["archives/2018/09/page/8/index.html","8293fbc05b6c9e5f3a4a8548a61ddcd5"],["archives/2018/09/page/9/index.html","1f82052d1451e906c48ea889970106d7"],["archives/2018/10/index.html","1cd6d3c060d9f47b789c90f54fb08390"],["archives/2018/10/page/2/index.html","6c588be5c704faf3da0e960583334f8a"],["archives/2018/10/page/3/index.html","5148d0e2c25eb8f0fbcb44dbf200d592"],["archives/2018/10/page/4/index.html","2469b55c793eff18b7f5e8e54c9de9b9"],["archives/2018/index.html","a5ed6e3d623779a696b7cbe2be4fa5a1"],["archives/2018/page/10/index.html","5cd64610c34dc2e9afa430c0dce55c24"],["archives/2018/page/11/index.html","d74b294c70b84b51771c706972c29300"],["archives/2018/page/12/index.html","e4738e49a066fe634ce1a1bb25292abb"],["archives/2018/page/13/index.html","33a17d5db2bab74549ad112aeefafd6f"],["archives/2018/page/14/index.html","8e1a1564f5027ccd5ac7799d6fa469d5"],["archives/2018/page/15/index.html","b41706fd96621ec701201547d44f63a3"],["archives/2018/page/16/index.html","9f0dc0792772fa62ff451f1a8123d2dd"],["archives/2018/page/17/index.html","8f8b8e3e6f4b779511bbe01a67a3faa4"],["archives/2018/page/18/index.html","55f344cef1b8f2a0ba3da1901bbe2d85"],["archives/2018/page/19/index.html","e49b817774f871ddeb738f7008ee4966"],["archives/2018/page/2/index.html","cd231dfe50dc283984af3e0cef5d4f5e"],["archives/2018/page/20/index.html","8134dc7d41146206ba6c0e3a48fe517b"],["archives/2018/page/3/index.html","af695027cbf445d4c075de7cb9a8c51c"],["archives/2018/page/4/index.html","dc08639253f7fb4aecd6934546ff84fa"],["archives/2018/page/5/index.html","852d210f02e2a668c44a81d491bcc72a"],["archives/2018/page/6/index.html","61c22c4805b58d7bffb9652e7f864b1d"],["archives/2018/page/7/index.html","80334702f28b9e258da153153b721b44"],["archives/2018/page/8/index.html","6b1a6aaaaabc3b13c8ede95c4b697d8a"],["archives/2018/page/9/index.html","e56e983083b482c93841f4ac6dc324fc"],["archives/index.html","ea226bcbc072069e732aaa450f13224f"],["archives/page/10/index.html","7b132129e3c6e9d132bd54e3c65413a6"],["archives/page/11/index.html","b56b9391333c6638bd03714eeece736a"],["archives/page/12/index.html","a977ba7f10c09da99bd4fb5a552af5d8"],["archives/page/13/index.html","2c7c6a7ea477d69e34552906d7b96cbe"],["archives/page/14/index.html","c571a94baa234c08a81cdc63e35a4586"],["archives/page/15/index.html","21afdf0fc7ba01ddec1444b6472a2c43"],["archives/page/16/index.html","8c0401bd9ec4dbb7f4766c3366aee6ba"],["archives/page/17/index.html","ca42cf5145796f3851a7c06a5875133b"],["archives/page/18/index.html","a18dfe8a74567f77a0b2c103f09ef3a2"],["archives/page/19/index.html","ca48f97e210c4fe1835c6f2c3b2f08dc"],["archives/page/2/index.html","d2099594e234b5c4e02d3877c047e9b7"],["archives/page/20/index.html","ac93073f4210dc979f49a29af486458c"],["archives/page/3/index.html","3b2519482489a864f546b2299b703d7b"],["archives/page/4/index.html","085455b09754a7eb7bd202ed6b008e3c"],["archives/page/5/index.html","9ea93c7b015de90ec9f6b785b245e7c2"],["archives/page/6/index.html","cbe9e8a32bcf3e685ebd1765f1063ee2"],["archives/page/7/index.html","e4b6cbbac66e3c962371ec150d8ed338"],["archives/page/8/index.html","b3feef498b9f7f0baf5fb3942ab8bf6e"],["archives/page/9/index.html","2379745f530e15df114c954572bff115"],["baidu_verify_DfMf5XqJUb.html","e5d08f19607d3f7bdcc27d79441efd04"],["categories/51nod基础题/index.html","ae15cfbaf0102a64bc4030ffd4ed69f1"],["categories/51nod基础题/page/2/index.html","071900674312c5da02f650106b851f24"],["categories/51nod基础题/page/3/index.html","3c35eaf6e9b31aecd1e7f6ce0b12a673"],["categories/51nod基础题/page/4/index.html","990da0ebd113826f96f0366426d2573a"],["categories/51nod基础题/page/5/index.html","2d01bfb69ac8b57a15e8ece335ce0bc9"],["categories/dp/index.html","a5461e09ae8cd024dcfc0a1480a9bde0"],["categories/hexo/index.html","6fb5fe6a4742e57a82c778cab1ba6de2"],["categories/index.html","55d585ae888f97b65fc582f7402235f5"],["categories/java高精度/index.html","1327f34a751de8e27a89bb0faa113c01"],["categories/java高精度/page/2/index.html","6c153c9f6c29bbe9a818add9b05e99b6"],["categories/poi/index.html","eced7a1cf79c3430c051ac8c480c50f8"],["categories/二分/index.html","54a9d2fa0e741a1829cfbf483dd23307"],["categories/博弈论/index.html","d5437893832c15683e625edb17894944"],["categories/博弈论/page/2/index.html","5438fd54b4888a298e04bc1e09eb6968"],["categories/图论/index.html","34076755d38081a8574fbadcaa20c561"],["categories/图论/page/2/index.html","07bb9eb7130f5e16e3e392f98300bf66"],["categories/图论/page/3/index.html","01ab97a6d0bc57df566543feb7e38f0e"],["categories/搜索/index.html","015d621f4f2f8a4466e50e1ceffafa2a"],["categories/数论/index.html","4d37fb31f6a7501861e145f6fef9a201"],["categories/数论/page/2/index.html","c83cd18e5b3c0129d4fcdcb20fe01ec1"],["categories/数论/page/3/index.html","6c1a44d3da32a2c8e4b269c5f6428f97"],["categories/杂/index.html","a537114af508b8cf1dc264727416828d"],["categories/杂/page/2/index.html","fe9693a5aea8159582fc944eb5860305"],["categories/模拟/index.html","a2398f23be1515627a7f5458c2900526"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","83a8130b8d070e18539d6febb5cd96d7"],["categories/计算几何/index.html","bab3736ad38a7fc7c628182568032d3c"],["categories/贪心/index.html","680dcedc93d1c6793153658eee6986c1"],["categories/贪心/page/2/index.html","e51e4506bfe47d0fe2d0725b074b5035"],["css/main.css","f34898effaebc82a84b7f10e00abb4b8"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","3a9bfd15f6b9b46ee27588f35e234ed5"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","bfac6eda28e7778493a2ff7e94b53a73"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","876ab2edea64877c7b80b6ef28e7a56c"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","0be7b5b19cf7489dbe2d65e39157445f"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","8c4984683a3dc8b3a8615f19ee0657c2"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","5af7a06009c491e676d7b388cec0668b"],["page/11/index.html","5bd5ceb8e6c734d9d4af8fa595582759"],["page/12/index.html","13305594231125ad25a7aea34fbf3296"],["page/13/index.html","e3502779c479a9d3931775c55e56890f"],["page/14/index.html","0f9db0830f7dd0d9ac4b13fff7713928"],["page/15/index.html","bff318244a257a8915d08d157a6d892a"],["page/16/index.html","a0de62739fe38ece5f5ffa8996966fbe"],["page/17/index.html","a201648fa4e90449956a0760b4cc0835"],["page/18/index.html","70dfedad5d4c06886a20f9fb93b3b2f4"],["page/19/index.html","cc61bffecc54a278aea79abaf5c82e7b"],["page/2/index.html","ad6342e66189f8b537467730a80ca9a6"],["page/20/index.html","670d80f9239b8ee82eaaace6789a63f6"],["page/3/index.html","1506e6a38c1eac8e8886e634ac1f0d3f"],["page/4/index.html","e3854bda0decf669c717ebd13855f838"],["page/5/index.html","202dde49d65a270f1a5dc7492406818a"],["page/6/index.html","09fa037679ffdcb45165431b54a9c41a"],["page/7/index.html","ea201c988f9ccc442ccb9cb2397402d3"],["page/8/index.html","374324bdfe0baa4a3820cc57889223e6"],["page/9/index.html","67438c22d58ceeb12b28316657ad0195"],["tags/Floyd周期检测/index.html","59bc74b931bac1c0f8f9f926e6edb977"],["tags/Manacher/index.html","ab8474dcd678bab30632f02efcad52be"],["tags/Pollard-Rho算法/index.html","ae48bd5434e5dc8c3d8f317e3aeb0e63"],["tags/api/index.html","f73fac7676c2235fdee7f9fdead45d8c"],["tags/cf/index.html","daa1d8b2c4e9a55f92159cd8859ec916"],["tags/css/index.html","a417844902588791769c3e8bf3702133"],["tags/dfs/index.html","4307d69fa0a9afe399e69ee966a04dbd"],["tags/dijkstra/index.html","28397d95ba6eb4baad45a4cb71aee35a"],["tags/dp/index.html","cc938124295bdd34552a9c822a70b37f"],["tags/dp/page/2/index.html","b07ec0d5cd1e9d0d751c41475e1ba79b"],["tags/gcd/index.html","f8203512fcac404a9dafb14942772ed0"],["tags/hexo/index.html","ae417e2362c388a45dac8672e5d3683a"],["tags/index.html","99cf990d5768ae16f1f2057e9ed1e59f"],["tags/java高精度/index.html","12029769f456422ea67853bd88ce4aad"],["tags/java高精度/page/2/index.html","cdfa3f3a36e80af7464cfcedf47f26c7"],["tags/java高精度/page/3/index.html","bc7bc30455838c38d57829091d55fd4a"],["tags/kruskal/index.html","6f56f0aa0d768fda00910d9d37f580ac"],["tags/lcs/index.html","d0e6e9402828eccd887f834f3286d41d"],["tags/leancloud/index.html","71dc3a583e57ee11d915a17b05b81fbf"],["tags/live2d/index.html","22117a34615730aa534b6b4bf0f4f7fe"],["tags/mac-OS/index.html","64636ccec88f14ea970481019ef3794b"],["tags/prim/index.html","2b9173e487463024332618b08139a057"],["tags/python/index.html","696c819204833fc77c868502838e051d"],["tags/revolvermaps/index.html","fec4e20b4c8635afec36c5fcde8f59ca"],["tags/rmq/index.html","2f3324de70149248c4ecf236afa0da12"],["tags/sg函数/index.html","b3854b7ee4dd2b0c79900c6dcd05b306"],["tags/stl/index.html","0d995dec3f0679f68e74bdad2d4f2fa6"],["tags/三分/index.html","d44abca6cd2f24832814135e4f6ae8d1"],["tags/中国剩余定理/index.html","987528e5040d78b5b713097267b662fb"],["tags/二分/index.html","a1eb8786be32f2acac900d3c0baf0b7e"],["tags/二分图/index.html","8d6e20ead5b88680620cec7c0677efaf"],["tags/全排列/index.html","7560d5034b2c197730cf1cfcdc63d467"],["tags/分割平面/index.html","98cd65c7890ca17d77e24cef5c7616f0"],["tags/分数规划/index.html","dc4dfe08df287c7af16d22d3d305d849"],["tags/前缀和/index.html","bc47e1711488cadc43010730fdb0f71c"],["tags/勒让德定理/index.html","9819929ccfd6a69872db99795d4122da"],["tags/匈牙利算法/index.html","dee7fa524b2dbde4f6252fd5e4de64b2"],["tags/博弈论/index.html","ab0faa21c5e0f9322ac0ab8617d3ed77"],["tags/卡特兰数/index.html","a27ce1384c5b80bdd2b55fa2aff7f924"],["tags/卢卡斯定理/index.html","44c713e10adf063a6471cb0d9670b970"],["tags/原根/index.html","7de7880af70523680c403284793e69a9"],["tags/四平方和定理/index.html","3393056cbbe7147dfa09709a72577ec4"],["tags/埃筛素数/index.html","a8258f42da75dacfa38b41b8a4b300b2"],["tags/威佐夫博弈/index.html","181fe3d6c176fb9789be7f4c858fd35e"],["tags/字符串/index.html","5156bc46075969b2a04c6dc339917451"],["tags/容斥/index.html","994f4703eea090e9f5fbb87424fa9816"],["tags/尼姆博弈/index.html","1f757b23c008bb80a99c965589200ca3"],["tags/巴什博弈/index.html","0572ddb16e10aa4b94ac2afc5cfaf7a3"],["tags/并查集/index.html","5c3329604ce54dc9750315ff100a6ddf"],["tags/归并排序/index.html","b38b08e7e078c53d198c9ae9484eaf7e"],["tags/循环结/index.html","39300f25d97ae024721ae8965a9eff3b"],["tags/微信/index.html","c6ec7f1b6f70714c7d0cf12e1c016f0e"],["tags/快速幂/index.html","c484a4675c63a312b58b631ad5fd251c"],["tags/思维/index.html","463eb719963633b65a89fae23b13d9ec"],["tags/扩展欧几里得/index.html","4c4158aaf55fb2f746c328a51e15f12f"],["tags/拓扑排序/index.html","2ef7d4ad84d312abf858631576315e13"],["tags/推公式/index.html","30228a492ace2e15f7c9dedf071f055d"],["tags/推公式/page/2/index.html","7527d1c8a45e060499e0e075c13c5f95"],["tags/数根/index.html","d59d83df27f33df0d99e50f8aca58bd3"],["tags/数组加倍/index.html","9b6c1d13bff470fbf186c71c61ac289a"],["tags/数论/index.html","843299b3062c2b4e8d82d2f02aea25cf"],["tags/斐波那契/index.html","429c5442dac22a1b8b85445f1ae8ecf2"],["tags/斯特林公式/index.html","76838fb6cdbe7103feca1ab3c9f40009"],["tags/斯特林数/index.html","8cd626d1441025dd737b8991bddf4750"],["tags/最小生成树/index.html","df62d20fbdaa51aacf498054a70e58db"],["tags/构造/index.html","9ee68db8ed83d1efeff8186cf5139e7d"],["tags/枚举/index.html","81160960bbdea42021d74dbf7fb4f87c"],["tags/树状数组/index.html","7c64adca754f086310bbee237f1308e9"],["tags/模拟/index.html","d174dc0cfc2219dc57bb439f6ce740ec"],["tags/欧拉公式/index.html","489d65c2ed5eec34b6d1f280f55c7d7e"],["tags/欧拉函数/index.html","fa4a2730b8b3c981b638c4f73c2554ad"],["tags/欧拉路径/index.html","15a8b6e5260e1809452be55444602f45"],["tags/海伦公式/index.html","222ee94e2f8690d58190e6f4a03d1f1c"],["tags/生日悖论/index.html","506c10813beae8340f5a0d117dd36127"],["tags/矩阵快速幂/index.html","b7e7b5e459623567c1b9f57d58b5f732"],["tags/离散化/index.html","dbf6159de486726925b84a6d266ff548"],["tags/米勒罗宾/index.html","902900693d79e0a87fd954ebd3085d3f"],["tags/约瑟夫环/index.html","ac1ffc14672447905ac7fa2ec25321f1"],["tags/线性基/index.html","168d54f646c7f28d0eaa919a0a6f6f1a"],["tags/线段树/index.html","3bf64b7b9d43f3ae7e6e1c59e4ba521a"],["tags/组合数/index.html","8ae5fbfedffae1eca45a553338268df0"],["tags/组合游戏/index.html","b8e29a6e432b825f59d209045936791e"],["tags/背包/index.html","af3073d38b4cb39f71503341a4c4842d"],["tags/莫比乌斯函数/index.html","ab7139127c16f28f984b947c6649dcae"],["tags/计算几何/index.html","0b42d2930a62e1e7917eafd381dbc803"],["tags/贪心/index.html","567584bd21624241353270e56131f28e"],["tags/贪心/page/2/index.html","15124955442ae13c7894d1523d4054d9"],["tags/贪心/page/3/index.html","f13c87453d89fd4ce886905a101ac321"],["tags/逆元/index.html","d60348a894fa9b503e9b1382c2ac8c80"],["tags/阶/index.html","3724606ad2347a40711c8ffb6300b5a7"],["tags/鸽巢原理/index.html","753920e0180a8114d58cb7d83b4b2c1b"],["tags/黄金分割数/index.html","94117b677f59af9f7ac9e98427fc507e"]];
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







