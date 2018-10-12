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

var precacheConfig = [["2018/08/11/hello-world/index.html","68b5b40ed88453b8a8c41f31987b2cd4"],["2018/08/14/1995 三子棋  /index.html","5e47b74f90e352a00683f6a5a1777db2"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","06de53b035678a31062e9a8a95cb6cfa"],["2018/08/15/2006 飞行员配对/index.html","3d99ef6796c14334dd65723821b720b7"],["2018/08/15/D.Tea/index.html","2d52ff8fcf3b67e088a7efd728b29c75"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","540a49904bb491c7624c1bdfb0c91860"],["2018/08/16/1459 迷宫游戏/index.html","8dc141f08385d1882bcb8b64a306e586"],["2018/08/17/1264 线段相交/index.html","6eaeaae16a121f0a0609c80798beead0"],["2018/08/17/1265 四点共面/index.html","d53515dc79e69066d97e6a88a4b877af"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","cff78758fb2b34cf8d8602e787211689"],["2018/08/17/1384 全排列/index.html","ad9c3688b224e5499743f0783c17de33"],["2018/08/18/1240 莫比乌斯函数/index.html","3425b18e868471a94f3f39f14d407bb3"],["2018/08/18/1256 乘法逆元/index.html","d82a64e5d23f0d08a94ca4abc134c317"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","d7b17f5386b43639054fbcec51fef184"],["2018/08/18/Teemo's bad day（并查集）/index.html","6f9bd3b7a03e6d3d3fac5c2cfd715530"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","02fca8d0e096135e9741bca48c605ce9"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","10931b60b97382d39b5a06312961feb0"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","e7ddceef7615c0dfe99761b739afb6fd"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","3777c69fa18a3fdd67dc9d4da85f3f7d"],["2018/08/18/hdu 1856 More is better/index.html","e8d3e2b5577e5974257a63ec5cf10c50"],["2018/08/18/poj 1182 食物链（并查集）/index.html","1011f28e27d5234bbe58e78a2b0381eb"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","5bc88a8cacc574eb7ae660ff96a3082a"],["2018/08/19/Minimum Cut（读题。。）/index.html","4ca3d11e78998ae3dadf147f0f4c47cf"],["2018/08/19/Ponds（拓扑排序）/index.html","13f47e6d00a14ca2eb2f821c62f86b5c"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","4d9780e6df23de827d1f20a2df147213"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","46129ce82e538839476bfb65b18f3d20"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","dd305f24f0b7d382518ed38f541acedb"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","f140efdb60b324bc3101332d86af1252"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","a74660dc44b241efa48a5701f0e668a6"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","eeb7956c49ad05819c6206a622e6a4f8"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","4b4eaea26b20f5e0fda889c91ce3588f"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","560f0d0456c9f9a62b82bd46051d66e4"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","2addc30819ff4f6f191b26778960832a"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","4298df5db6f6153065f993fa3a741ab3"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","754f84567c3a5f6f3d25ba31a72ca3f3"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","bb609c599bd81ba5920fbebd0474e9d1"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","8f0f8c06b08b4f332edab79366952662"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","e21b686606f6aeadf45cfed91c64c451"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","ec7763f96232deff2a7a9782e47711fc"],["2018/08/20/Pawns（博弈，思维）/index.html","9a0d117e2452ae7625871554bcb00248"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","96f24303aed2c8e9ffd277434019b683"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","e18884a21ead9715a6f6c92624af0383"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","b68c0bd3f2817b236c74e46faba7fcd8"],["2018/08/20/hdu 1564 Play a game/index.html","aac7c1053947ffc6f65aa93180ddcac8"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","cec6b4534167b92bd3daa5c4aa1f4718"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","02bf697e5b58437fff921ac40090715a"],["2018/08/20/麻婆豆腐（思维）/index.html","c5fc9475eba83f6da12da5f219086962"],["2018/08/21/1212 无向图最小生成树/index.html","c760176f043f4bf0f91ad5055073813c"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","1f44f057a5ff2f6d6feea0baaae914d3"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","e9e15efbad9f177abdc77bd45f962abc"],["2018/08/22/1079 中国剩余定理/index.html","67a9e49b4ddae664c387b363520e416d"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","f8dd6c2f8a1bffd171a9ee65486b95d3"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","b3555aa04b261dc17fda80a0e125ea4e"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","8258447f04a75f4b933ab87d1e508ff3"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","2b22bcfbe35d215b4edae8c75cf942c4"],["2018/08/23/1136 欧拉函数/index.html","ce45227ccbc8c0bf075fa6915fe5b784"],["2018/08/23/1137 矩阵乘法/index.html","89d301e122b5bde3cdc9d9093695b13f"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","dfcd22e59c8b205c4f74b438a4891c20"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","5573c6150cbaad268f8588e65a9c0180"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","9a5a6385a46f9c5ed019e4f48e2b4995"],["2018/08/29/hexo4/index.html","590abc9b3e04168677e3517a99937084"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","2516a8a5b9026da2721b9337ac8dbdd2"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","082368a56a830ea93c632c70c2e828f0"],["2018/08/31/A. Too Rich/index.html","fc54aa77bdae773a9dc6c11788d9f10b"],["2018/09/04/C.Catalan Square/index.html","95dac1cbf996a976301639e452ff8276"],["2018/09/04/hdu1002/index.html","e19ec7a25b0842a54ebf7adc34ebc637"],["2018/09/04/hdu1042/index.html","17ec82adf6313d5bfff01dc577bf26de"],["2018/09/04/hdu1047/index.html","3126e3f8277ed02da77eafe794daf0dd"],["2018/09/04/hdu1715/index.html","c08cc0d5dfd7c0dc2c8e99f4bbd7264c"],["2018/09/05/hdu1063/index.html","ae7f79a03aeb9e7e7dbc94a463fcdd95"],["2018/09/05/hdu1250/index.html","ef8fa0e6af9e289388a1ec652308d5fb"],["2018/09/05/hdu1316/index.html","f179644584d4a0b0b9652d3514b94394"],["2018/09/05/hdu1753/index.html","d5f651f2f31229366990eaa09d0016cb"],["2018/09/05/java大整数题集/index.html","b44f8a81b907f3fe902eb10b6dfe158e"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","cbec29382d71dbdfc5284c238ba3ed3a"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","fada8ed9f9bff89e9ec247e429383784"],["2018/09/06/hdu2054/index.html","ccbdc56612bc755c6e2ddcc3f8245e2f"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","c4acfdd5a7fff2d7b0243cf46179cc7c"],["2018/09/07/hdu1212/index.html","6cb2f9591cea68b4746bd38c732468b0"],["2018/09/07/hdu5050/index.html","b6781a73baf1800c150a789e8989c131"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","8e0076204c8536951803b85518b69864"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","b5287fef79e7822ce71d148c9026b8d3"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","79a4e57f90dea1b57d287b5540445782"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","7496489bedfb3e6c0461bd307056681c"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","6023fa6c3aaf8bf8eab46fc6e20e41e6"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","f3a4e845541787ea88d776f952179a77"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","66b8df91d6d862225b947fbeaefb755a"],["2018/09/13/Teemo's formula（推公式）/index.html","8e5b4157392d75c40dd1e7a250c009d9"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","e0274e7c708f041f20eab71d6e118635"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","98daf9b8649d7d4978ccd6e8509d199d"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","9b1a243e9715b712d1d62504e802efd0"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","0fcf636790a5a25a2d0c5449176e1042"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","8d26bd2a94c2d8404e245c68fe749b57"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","18de76ffbb5a8ffc8e1f9ae0f2ea7929"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","56a8411561db5494db07db08a6630188"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","f974315e4c773af74044c9d340ff72c1"],["2018/09/16/1118 机器人走方格（组合数）/index.html","3559f09ce15c3c9eea19f1e3f9f9181d"],["2018/09/16/1134 最长递增子序列（dp）/index.html","5ce7207bacd5d8db771ed424da1e92fd"],["2018/09/16/1135 原根（原根性质）/index.html","4babad0fe93165a3dd43ad8789f4f364"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","456a7f187f0040a78904848998a8b6a0"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","b18108bb709d9a3c652209335fcd6588"],["2018/09/17/1073 约瑟夫环（递推）/index.html","e5e36c51cc703d6269c7e1a79aa614b4"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","402bcb044bc420a1072a280f726c3a00"],["2018/09/17/1085 背包问题（01背包）/index.html","1991c8504cb90c41cb3395667131ad93"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","4ff1d8613f41c2627e3a82cf3462df1c"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","fd52ac4371cc915ea05e6ea6a43b331b"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","e5dba38ed1c4d43e01febde273dd87c0"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","ce14e1298a6c4b0a3caa18af5eb872d8"],["2018/09/18/1027 大数乘法（java大数）/index.html","aadf38a5ff8591cd2cd3dbaabdf03724"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","cb412d714faf1b500d04d08e2b19e320"],["2018/09/18/1049 最大子段和（dp）/index.html","8e83f8edaab0bc3c92335e91cc45c2de"],["2018/09/18/1057 N的阶乘（java大数）/index.html","947b0bb76de02672f53ea90905ccc45a"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","2ba16f2185e2d5e3b15fa81a63f52eba"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","02df7417445e73506322b1e4d8680c6b"],["2018/09/18/1072 威佐夫游戏 /index.html","34b0b00348383666f5583dd79e9f3578"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","2c0032b9ef5b9d185e0df3b39d9bd86e"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","35d32a8ddb9859a67e019dcd1aa32a4c"],["2018/09/19/1000 A + B/index.html","bb8913f2a5e33d982d6fb306583dc1df"],["2018/09/19/1005 大数加法/index.html","4c5b0f2aaea7c7dc39557e167c33f625"],["2018/09/19/1008 N的阶乘 mod P /index.html","2913364bf50660c6a010e33a6ca9ddef"],["2018/09/19/1011 最大公约数GCD /index.html","0c5592a6b3cb582607bf8966400e12be"],["2018/09/19/1012 最小公倍数LCM/index.html","0f62e84c6ab97c6be012051c4b86fe74"],["2018/09/19/1018 排序/index.html","156c90d1616f987f6ec7acae13f0f3c8"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","be5fd7c103dc8a40780e3905ac0f9520"],["2018/09/19/2133 排队接水（贪心）/index.html","8b580fee7c4f000146e78fa0011e0ec5"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","ebb9c8b36e01f5bb2205720f483e99ac"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","9891f45e5cf79273884f2916e680fabf"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","4f5d504a39b3383ef1197e8b97c855e6"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","860626fe13a2dda119b977991adde6dc"],["2018/09/20/51nod 1717 好数（找规律）/index.html","011c7c1a8e30e7c0a84a0f75a9b0f32b"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","9640bba38ae77275c2501555830e7b14"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","4b23d82dedbac9a7996776435b022ccc"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","e0bc96c5c59b73ca1486722778a098dd"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","72bdffb9a8e08a7cf40d2aa1b66f1f38"],["2018/09/23/51nod 1791 合法括号子段/index.html","e16700a11a7f47145f16b7c56dd13165"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","6fd4bb43c55b939ecad4a38c80d9dfc5"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","8481615b94e6dbc3ffe0ee646dfbc57c"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","ced1e0d3c9b9a108c5ab2eb15967774b"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","5a4c44bac78cee09950b40f7765eb51b"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","33d0ef6eb023432735dea22bb0044fcf"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","41ce71a8fb09608fc3e1076484d2777c"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","16078dcdc2f524a728d8625aad7f3f5f"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","6946b32924c0fbb4229d47b8d62a4649"],["2018/09/29/51nod 1015 水仙花数/index.html","1a6c90dbc8b92caf6b442af0e0249c96"],["2018/09/29/51nod 1080 两个数的平方和/index.html","4e1994d35bc8ff459838c3a9c9a555e2"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","386a2e1b9bd5127d4b33f2192a3a4eb8"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","a3e6c143765c893ab6c12d46ff8de875"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","e86d769b756669330d79cfd804a7fa2d"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","4d5f955d15a296e1f641156f36207524"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","88ef5304ecc00758705616e17fd63644"],["2018/09/29/51nod 1182 完美字符串/index.html","2709feaf62a871f06014635ab65b55c0"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","46a2253b8e9acecb33e11ae4309fb3be"],["2018/09/29/51nod 1283 最小周长/index.html","a83809376da9189c676771e5ab481660"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","404a5344ac1072164677a6aa186552b9"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","a3e2ba654d5efe4576c970e19b7024ed"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","e617cb7f3437229ed07398cdc23870fa"],["2018/09/29/51nod 1344 走格子/index.html","6beadd2cb001f92e934d702d88d99042"],["2018/09/29/51nod 1347 旋转字符串/index.html","cb9e03fa3f5d6e774b88c2d97f1295db"],["2018/09/29/51nod 1381 硬币游戏  /index.html","428fd01747b8eacd977ad0b0a9389c9c"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","1b2626ee51cb6bc0399f8839a8a8af88"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","6a89baaac642727e297f96a28a1692a3"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","cbcdcb53a1856b8d35b1814ff2680453"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","f2d8819367e916bc0448e4fc6497449d"],["2018/10/01/51nod 1596 搬货物/index.html","03921b571154fb0e525e3dbf5bff504a"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","22c562f3b20d11bcd6087beaec0bd760"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","e51af262e1dc4b1cd53607a2208305ae"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","bd4f2566cee8b37a4924ff25d2c94d3c"],["2018/10/02/51nod 1521 一维战舰/index.html","d6a626ee3f309d5121cb07273b4d467d"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","741621c92174fa700614842e6c702624"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","43437c6e89a34b9605ccf550b8c19a59"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","c449104cc5a85facd702271f12989c59"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","54f1f095a1e183f1736d7093d17c6f01"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","37d9a9620b506af70d2ea9069d0aac7e"],["2018/10/03/B. Pocket Cube（模拟）/index.html","73ba37c803cf4ddd1d6970d01406a5b5"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","4abc1a7b43a33903921d432be4bad50c"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","b761061ac90619a58f2c56782b64c38c"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","4190d2219f51454df7346db8ef8e10c0"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","fa051ecfea803436fb24bb11a81f1800"],["2018/10/05/51nod 1138 连续整数的和/index.html","f1c008a1b18dccf07a38dbd18b40419f"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","b1974ccf78a78476b93eb41632190a00"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","f8f8406af735dded23ac7d2cd71a4611"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","93f36182fec1e0063304eb551f82dfea"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","0cadf8a9b48f3494815d6ff70dbce2a1"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","0822a1e2de2ce836a7cee35c8602321d"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","e32129cde14066a44ed5475fb2b50fba"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","5d4ecf7ff8df62659b470cdabb0581d8"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","ea151b093856db9cf465fd0cdba13a07"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","ad4133964f6c047c208a8f66678b111b"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","a44bb7e43cc6b57cb8ec421d59f22e37"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","e292ef218674404ab5d2617ae6ab4038"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","325624b07c6ae0c35b48d0971fa81e53"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","2e8d6eb42782b88371afd8329b5a45f6"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","58d7dfe1f152eb39b7cf505cc0d500cc"],["2018/10/10/ural 1073 Square Country/index.html","f975b3fa06a69a634735b3b93d0689d7"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","b9faab2c95ce1e8fae229f68f093e610"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","4cbf26fdb4262cb14fd4b5ef81374df3"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","530a3904239b87b040f6f44eecf19158"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","f8868f6b24e9e0db3c62cd5e32517fb6"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","c7ff72c37ab022578cd8a5c18ef8955d"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","db92b3110dbe3212fadf03d23461584c"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","4428abcce46c809e4356d7755aacc2b1"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","fc0dcc2a8aa395b22b916341562a0105"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","34d4522a79719eb32fea0ac92240ce79"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","e380f8aaa61477986182569de7e8c72d"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","fa72889ee0d9a0e5a206fce7f0f60738"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","e88a4c8fa9764e0c3dc5cdc5f25cc862"],["404/index.html","80fe7e7501262eab180f31a1897d17fb"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","90785d3cd21b851d310d80f6bbbf0fbd"],["archives/2018/08/page/2/index.html","a6cdbd929ae6639215a65347db9e2504"],["archives/2018/08/page/3/index.html","a7b32589ff8a2c5b59d5f53d8d0aed78"],["archives/2018/08/page/4/index.html","17185464f4b7d79f0e64579b08081f69"],["archives/2018/08/page/5/index.html","2a53e45a26b1c26f5e8ecfd29ce7034b"],["archives/2018/08/page/6/index.html","2bda1ea0c9636c961b6b4243c81fa622"],["archives/2018/08/page/7/index.html","786d433cb6774d6c41888c3a11eedc2b"],["archives/2018/09/index.html","2e2b2f5189b44720f7d7f79bcba79170"],["archives/2018/09/page/10/index.html","bf01837d0bd9027f3f0a42dc94ad97d3"],["archives/2018/09/page/2/index.html","5887e8143b2ed565971cbce335306955"],["archives/2018/09/page/3/index.html","7c7b977cb0798cd080efdfab366f830e"],["archives/2018/09/page/4/index.html","341c77e275368b2009b76f2184fec301"],["archives/2018/09/page/5/index.html","50e14477447f7fd93441ac8a97d28867"],["archives/2018/09/page/6/index.html","6f48bee3dbbb08cd4b43a7fcf7022ee8"],["archives/2018/09/page/7/index.html","a374b6d89cfdf87c7437befb35d03a6c"],["archives/2018/09/page/8/index.html","c3389cc9abdc2a68fa41cd8cd12b724c"],["archives/2018/09/page/9/index.html","1d65ce6f6ff80b1607a97ea1a072df91"],["archives/2018/10/index.html","8163e219d035073a376c80c84a3437cf"],["archives/2018/10/page/2/index.html","42baa9b726a9083faa5d17178143a442"],["archives/2018/10/page/3/index.html","4bd5a194c59c8da8c2128c4ac44066b3"],["archives/2018/10/page/4/index.html","8f9c9c834ba50e29f89bbd02e0b55e8d"],["archives/2018/10/page/5/index.html","276792ed4ad03ea4869a439d1897a5bf"],["archives/2018/index.html","148295c3f7831232fab620452df42ff7"],["archives/2018/page/10/index.html","4a09dbe830eca6719db59d7dfdcbe683"],["archives/2018/page/11/index.html","efb89bfdd5249a414d5146a7761aa0c1"],["archives/2018/page/12/index.html","08292aed58811dd4cf2d2c23720dc4a5"],["archives/2018/page/13/index.html","40ca76904a45a9b1820ecef917338856"],["archives/2018/page/14/index.html","ad9c53b8c8fde453e471ab11c6042fa7"],["archives/2018/page/15/index.html","3c48ec89ea52ee80ad6617038155a280"],["archives/2018/page/16/index.html","836772f9da4bdf60e20de30fecb16b96"],["archives/2018/page/17/index.html","0d06892c358908a58a160f17aa57fd6f"],["archives/2018/page/18/index.html","945570a66f0fcda6c9c147c05ea37a1f"],["archives/2018/page/19/index.html","3f0672fd68a8ae1bc89e7778cb516c09"],["archives/2018/page/2/index.html","1ce5145409f865d189add291df76846c"],["archives/2018/page/20/index.html","698cc1f1e939fc6b2d457c8105c02bf6"],["archives/2018/page/21/index.html","723d433c369c9156d1ae66e70a9fa4fb"],["archives/2018/page/3/index.html","9915292d5cb394e650f3707049aff203"],["archives/2018/page/4/index.html","9d97e13d7c9dc2d3b13e30ef12d6045b"],["archives/2018/page/5/index.html","2edaaf5237f866fd269bf8c67aa16efb"],["archives/2018/page/6/index.html","ae8e824fc7e55669f99866e9f313fa92"],["archives/2018/page/7/index.html","b332a58dad4e85535ceb87038f9d12a3"],["archives/2018/page/8/index.html","852c76702179ce27777e5d9bfdd2d05e"],["archives/2018/page/9/index.html","4a7610e0e346e74e64250ea085561c33"],["archives/index.html","3c253b8a2d57f31c4d4f00a17e990338"],["archives/page/10/index.html","e0fa12803070d08d79a5658fb21c6d63"],["archives/page/11/index.html","bd139beeffd13777c90e0c9a8327a66d"],["archives/page/12/index.html","297a126f21b1feae725abd3ddcfb53d6"],["archives/page/13/index.html","62c180065da9069c2e8416740423ab01"],["archives/page/14/index.html","d51cb2640b67fafe0db179baaffefb32"],["archives/page/15/index.html","51c67c5d661990f9e8b7f38d2f309a6f"],["archives/page/16/index.html","69fe971894fa4f3a17a0cc3a4e668022"],["archives/page/17/index.html","ded6adb7c008eed474e03bae8eab12c9"],["archives/page/18/index.html","09d51e37c521fdccf9cb59678f09695c"],["archives/page/19/index.html","4b45e48ed8930304bef20e7b750015ba"],["archives/page/2/index.html","09ff6ea42bcf454debbbdc37062584e5"],["archives/page/20/index.html","adf3f71e023c629c589c7f52ff557e0e"],["archives/page/21/index.html","89ddcbb56d8cf67a711d24bfc52a3fee"],["archives/page/3/index.html","7b35449e437fda5e93b43ac77ee24c50"],["archives/page/4/index.html","4e5c3bc16400a9870cdbd270d1a9b6a4"],["archives/page/5/index.html","857eb08df56fbe6fff2bd6bfb8447eba"],["archives/page/6/index.html","f33eb2bb96773793b55b9d946fc6440a"],["archives/page/7/index.html","c751da0e4f09eff863d689222d2290ab"],["archives/page/8/index.html","ed937ac28be5c5e28b2398474731b5d7"],["archives/page/9/index.html","bde9fcee2b7bbde5b2d4d7aee397e068"],["baidu_verify_DfMf5XqJUb.html","06658672453ae9adb4a014c2a1b3110c"],["categories/51nod基础题/index.html","9cb92db7dd891ec0819cfd33861cb1ea"],["categories/51nod基础题/page/2/index.html","cb32ad8c8accf3b5a1cda1edcf3a031a"],["categories/51nod基础题/page/3/index.html","8fb3869861f607307eb42000a5bf1108"],["categories/51nod基础题/page/4/index.html","d9cb9c64dd111c685c7dd6b8d2735aec"],["categories/51nod基础题/page/5/index.html","a798bf4d613c9fe46d6b56d6c42f52f1"],["categories/dp/index.html","1b056e9e9ee89d8bf79ba4584a9c4604"],["categories/dp/page/2/index.html","e25495f4275bd073b29953c22d9224d7"],["categories/hexo/index.html","ccb079c1b077fe8bf8efaf8bea405883"],["categories/index.html","8e634f438d2604ecb698fed1c3b87e90"],["categories/java高精度/index.html","c05f3c672a219cec4e82f60332819e93"],["categories/java高精度/page/2/index.html","b6972ddee09d7c6704b84204d5b3d8db"],["categories/poi/index.html","d59692add756166d8d67cefead6e7101"],["categories/二分/index.html","5e2812755d68a50132cd690fbba3b52e"],["categories/博弈论/index.html","25f00ed2bf5703fbe0fb22dedbd6623e"],["categories/博弈论/page/2/index.html","7f41d5399303520fde547acce3cccc53"],["categories/图论/index.html","c56db9d8792edc2232fbe779cecbdbd5"],["categories/图论/page/2/index.html","0b1c23229d5c372629614825f378b599"],["categories/图论/page/3/index.html","92bed25d0686221d4955de96fd5dc281"],["categories/搜索/index.html","48b51f177cf60a28a4e923850dc8fc08"],["categories/数论/index.html","21c03393ea5c3e6a06a768906b4a7dd4"],["categories/数论/page/2/index.html","05a8829c0744f4d15d3558c991ec387f"],["categories/数论/page/3/index.html","f2832f24e4e2bb7dd6749e3345d5dc0a"],["categories/杂/index.html","bd72409d1876adee19d4b993e71d489e"],["categories/杂/page/2/index.html","d418cb17057dedcc6a21ee4900b966c9"],["categories/模拟/index.html","719ec6d5af4c57a5651d5ef01d16be8e"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","ed87c7d198212f66ba3af5d6ec824852"],["categories/计算几何/index.html","40cd737fec83a4a28439328b88b45fb8"],["categories/贪心/index.html","0a9b00748e896edb5820e8357aae306c"],["categories/贪心/page/2/index.html","29fe84198f26cbd76c3108418c798d92"],["css/main.css","635925cec2733cbe3628559baf3bc46b"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","54c0b531e245f4e5849a50083dd35d10"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","4bcd97dff13f9a77b26f1ee88c98770d"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","90a3ae9ac4e1f006b3ed37b92421c035"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","97fecfd03e974d6b0893382a1b6ee974"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","e2b3cd0444845865db5ed3f7671b15c6"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","07a02f6253e416fb1db58513288636dc"],["page/11/index.html","f14979eddb2e704827f97ece1bbc2cf9"],["page/12/index.html","bf6c7babcb92a694d1a464483052c996"],["page/13/index.html","93af715d2fbdd3ed456e6b7afffe8f31"],["page/14/index.html","393f4c8dd3eb1860a8a9914ad5fc2c15"],["page/15/index.html","f6afcc30bebaf1ce06a829949bcee4b4"],["page/16/index.html","bfa647c120f81f15fd16b25e97eadd25"],["page/17/index.html","da8da4324418241d69551aadc2ce7318"],["page/18/index.html","0fd00d90afada9c04ba984d750671b32"],["page/19/index.html","c9693c298d8f51d9070213b110e6616a"],["page/2/index.html","a45aa74363b364f605e600c33caffca6"],["page/20/index.html","89560457ec8fd98db228595d69f8c688"],["page/21/index.html","3961197ef1bad67df6e7fbc3a5aae80b"],["page/3/index.html","8b40135213da3b85fc051f4ce0d80393"],["page/4/index.html","6b61f0ecba1df8b5aaa55de294fefe08"],["page/5/index.html","41cdd66fa72fbfb4224614263a7d3837"],["page/6/index.html","6b1aac88d4b208c1024e29805fede0e6"],["page/7/index.html","d7b705aae087fe75c087b1febedf2aa6"],["page/8/index.html","86a7bca2b7006c1bf167aeb2e694520e"],["page/9/index.html","c0497a7b3f33b419bab4a3fece9e7fd1"],["tags/Floyd周期检测/index.html","acf91e3babc276d5ca082b69a45725e1"],["tags/Manacher/index.html","272fd6a39abe1dbdee5df26cf8fd9bfe"],["tags/Pollard-Rho算法/index.html","ea8ddb7a2c2a473baa1d71d8fc94ef6d"],["tags/api/index.html","e757d3110ff8f0847b2b445c18044a5c"],["tags/cf/index.html","5113af5e631e75c9d78cee1e548299f2"],["tags/css/index.html","b8f8563ba86843be6e74f699ce21f9dd"],["tags/dfs/index.html","db8565e22fde41b0f0d026e824d62da5"],["tags/dijkstra/index.html","1ce334bd56d78b037211613885193b51"],["tags/dp/index.html","e4e4618a6c7605ba58dae29f34dd6d0b"],["tags/dp/page/2/index.html","1fd920e7135d6a89b98c919c4f3e2275"],["tags/gcd/index.html","8d15587c9d62134597bcf6de982d4b41"],["tags/hexo/index.html","be07ad63285c5fef29a37b3d472601a1"],["tags/index.html","f1b9483ded92845ee53d559efde018f2"],["tags/java高精度/index.html","e562c19c4c9a5a19e58b422ebd8a5872"],["tags/java高精度/page/2/index.html","7591eb14450c738d12762408ff3cbc6f"],["tags/java高精度/page/3/index.html","a78364bbb4ae5a1872ef792b2c35e447"],["tags/kruskal/index.html","2924791e5dd5dfc2423a88ede4470521"],["tags/lcs/index.html","3cca9949ac9f1c22c0a224ed7fc5298a"],["tags/leancloud/index.html","df1fd86e31d2aa71dd305436b48e7a41"],["tags/live2d/index.html","3d781850a2ae43043af8978c0fbd82e5"],["tags/mac-OS/index.html","7cd7f911ecdb189536ede951bd45c0e9"],["tags/prim/index.html","a859b0e1097a8ace362fe245ea56ed2e"],["tags/python/index.html","a22eb4840e5d1e80f90494acdcf9063a"],["tags/revolvermaps/index.html","cbb72d294e52ef31aa10f6701e2275a3"],["tags/rmq/index.html","4314ff1b15b67af78008b35edda6db33"],["tags/sg函数/index.html","9ad10a3293dcb1efcec825b240ecaef1"],["tags/stl/index.html","16c8297c2b271a8afef6c8980bb92e60"],["tags/三分/index.html","7a4d9340e3a7ace4f0264aaf33c815c8"],["tags/中国剩余定理/index.html","50bfdaca838e5bd2a679ad660f97d0d7"],["tags/二分/index.html","5fe1ff25169fc465d6d14d31f921c6cf"],["tags/二分图/index.html","f6073128aeb965f317715879592a7081"],["tags/全排列/index.html","212951e3a125b56cffe7a370c3f70e3b"],["tags/分割平面/index.html","11fb7bd0e8c535f215cfea840b792641"],["tags/分数规划/index.html","ef9bdb968198bdfde3a19908b4213f1e"],["tags/前缀和/index.html","0f9f2082fea052ddbd8afffcce7cdcf1"],["tags/勒让德定理/index.html","0adb9497aa9c77ecaaa3609719513e47"],["tags/匈牙利算法/index.html","79529970ecc85133fc755020b6b5913e"],["tags/博弈论/index.html","0d92b07a15fec3393ae5b25db690d815"],["tags/卡特兰数/index.html","449b68c9ebd0e12c815f2bb6778c6e2e"],["tags/卢卡斯定理/index.html","860b9f1753b186898e8eea75f5535f2e"],["tags/原根/index.html","fb9d73e63bbb563f053b4d07ebe58468"],["tags/四平方和定理/index.html","741a9aed5742786ca8866ff2627816ce"],["tags/埃筛素数/index.html","40d4fe1c706d041eb15ba2613cf621f7"],["tags/威佐夫博弈/index.html","f5de0dbec2d022b9d90b69ee7eb82bd0"],["tags/字符串/index.html","ea66fcf766284bf97be5e29b119c560d"],["tags/容斥/index.html","698c75266fd9528f5ce88039983df5b3"],["tags/尼姆博弈/index.html","ed490b985f980cf7bafb83b3fbefc1ca"],["tags/巴什博弈/index.html","ecc38cdefa9897702debdd2c1a22c4de"],["tags/并查集/index.html","e96e8f53bf2a240c004c08d6436cc706"],["tags/归并排序/index.html","d9a23aa61a46cc58ac1974511e3a26fa"],["tags/循环结/index.html","fd5b28640b9f9104670e7fbf71da8b7c"],["tags/微信/index.html","e9614c35e8fa0b65eb70dc949fd957a0"],["tags/快速幂/index.html","3a055a639205d96f8170a27a823c9dbc"],["tags/思维/index.html","68463ca7f51b99e1b0f725d39de765e3"],["tags/思维/page/2/index.html","784226bd8f7575bc86d4a6dbfa29b8e0"],["tags/扩展欧几里得/index.html","4f736ad6775afe1bb0931e15f53b5542"],["tags/拓扑排序/index.html","c6f5f575f5703c0b964421fae086396f"],["tags/推公式/index.html","58807cf3e4a622d8d8eeaaeaf76d894d"],["tags/推公式/page/2/index.html","74bb29a3110588fbee29c812433f4475"],["tags/数根/index.html","fea78b36f8d4e4d185d0460b76d99580"],["tags/数组加倍/index.html","0460ac92baf73227abb065a3045dd9cb"],["tags/数论/index.html","bc5343e55ecb7c912712556d52f4b156"],["tags/斐波那契/index.html","f31e67e87b26a3727c7f169ceee9b5f2"],["tags/斯特林公式/index.html","b5d149c9217c86eeb694535cd3b4f495"],["tags/斯特林数/index.html","36eb3f22fbb210185d7bc87447d758af"],["tags/最小生成树/index.html","2ef8cdc349d05ee6844969285d63d193"],["tags/构造/index.html","84a68a46e276e88542ea7639f5cd6f81"],["tags/枚举/index.html","48c710dbf470a01d554b7c0aa302f473"],["tags/树状数组/index.html","c5069e9a333c2d2ee2a7997ad30cccc1"],["tags/模拟/index.html","13a7fc9626bb1ed441d61221f64206b7"],["tags/欧拉公式/index.html","ab724537c79f0bde6d044946fd002acd"],["tags/欧拉函数/index.html","04f797d8fc9158fbd389c576d6bd41c1"],["tags/欧拉路径/index.html","b1c0f83ad3464bdd411366efeaa1feea"],["tags/海伦公式/index.html","e1770dfd63d8e7ddf62e1f04ad18ace4"],["tags/生日悖论/index.html","549a21b97fc892d3dbb90ba95a43bdb0"],["tags/矩阵快速幂/index.html","0ee23bcf8c46c77cb251f9ce5a757fe7"],["tags/离散化/index.html","4fb36dbdaaa99546cb1be281a8bddee7"],["tags/米勒罗宾/index.html","7c25159cc2b2b733ab679a0dface8570"],["tags/约瑟夫环/index.html","af909226fc59ee829dbf02c5f702ad67"],["tags/线性基/index.html","6883b56d665d999e0d7b5cd122ff6ef7"],["tags/线段树/index.html","62c6da2edcf0f36594378b6ca71ec2d5"],["tags/组合数/index.html","e51cbac1a9ea4e74f7fb468402e8a151"],["tags/组合游戏/index.html","0e721ade85a8f6967bbe902fccd83e7d"],["tags/背包/index.html","5cae046245941eb615d83615c6997286"],["tags/莫比乌斯函数/index.html","e104fbc58579b671974773ad060579b4"],["tags/计算几何/index.html","0cf69e744139346f7181d336c616197a"],["tags/贪心/index.html","ece2f84aae889757dabc5a81d58f36c4"],["tags/贪心/page/2/index.html","378fa274ef2a3e8ce37797a58cb3a459"],["tags/贪心/page/3/index.html","f51d5d5973b1e96fadd180ea3920bdb3"],["tags/逆元/index.html","b9e6159ca004900f3c71cfb9872172a6"],["tags/阶/index.html","1c550883103a32d4515056a38cd4674f"],["tags/鸽巢原理/index.html","640519ec707e4400d0c8278bef406b7a"],["tags/黄金分割数/index.html","01c29c34448ffbf6cd6f87ea6729c50d"]];
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







