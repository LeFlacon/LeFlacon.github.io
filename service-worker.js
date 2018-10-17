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

var precacheConfig = [["2018/08/11/hello-world/index.html","c7a708a42d1010a8b14d6f8b0223f51b"],["2018/08/14/1995 三子棋  /index.html","f13bf92e42ce36308faee86651cfd401"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","4f04e04656c9d74858dd5a349dcf27dc"],["2018/08/15/2006 飞行员配对/index.html","ed00b46fee9ad2969b9eb421202d8490"],["2018/08/15/D.Tea/index.html","037f0d783b325c7d5517c8b2954a9b1d"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","77a7d31791abd8d1beca733d602a08ee"],["2018/08/16/1459 迷宫游戏/index.html","259f4d21e8012f8001616b174d3de03d"],["2018/08/17/1264 线段相交/index.html","033e4a7044243c63f90cb5eb815cb1e4"],["2018/08/17/1265 四点共面/index.html","4645cede684b38f5274c562d346e3449"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","368d8c10cbb92983684af88309198967"],["2018/08/17/1384 全排列/index.html","bc9137091dfa50e76a4d491d9f62699a"],["2018/08/18/1240 莫比乌斯函数/index.html","6323e172e318b8a5eb21beb577c0b0f5"],["2018/08/18/1256 乘法逆元/index.html","98d8f8b6d4d3de278dd63afbbadecc98"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","6f6a5b8224792d9d786793caf7ae004b"],["2018/08/18/Teemo's bad day（并查集）/index.html","e8f0493038f59e0b218b8e044012e091"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","2d895ccdf4544f4c8648a04612f0e69e"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","7d6255b8dec4929aeb49ac1539e625d1"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","dca317648f97a74afdfa71cd31fb78d5"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","b9c27fa649703a73a7009b6855bb6100"],["2018/08/18/hdu 1856 More is better/index.html","a63a1fe438e47a1b775d3a3d5c8455d9"],["2018/08/18/poj 1182 食物链（并查集）/index.html","ce6560db41c6971c2c69d3860d466043"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","c95b7e267b9e8b71d23e3b2b1f618ef1"],["2018/08/19/Minimum Cut（读题。。）/index.html","be055abb2e2d00082c5cbde59cfac52f"],["2018/08/19/Ponds（拓扑排序）/index.html","df878c6b787a2e395d4c1194476d51dc"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","61a79e76938c3f70a1e121f815397ca0"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","953f631035b48055df7d301dd645d26b"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","2b4f0395217c8009ded21c16424c3d53"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","36a07fece33e7da58f5bf8f0b6c7f099"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","ba180f455edc30367483a54140772594"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","8f3646f98dcada8041e93dbc8a2a9411"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","02b3ab62c60e056fc6b85026cd77ef97"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","9d24f0b16578230a5d66a0f1693ea04e"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","11df429ffb9b7272b2bc68d0ae3f2668"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","ec4cd9f4f91f89dd36402a4112a72001"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","bef8a43086b60f002eb31fce5101185a"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","71a1f79497db0a085ee7aa5441b4389f"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","1ae36002d4560b75b194f1315e5e5f9e"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","fab53214b8e517050ab7066b35e2dcb7"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","d4506e21c4a637398e1f0710fb0a851b"],["2018/08/20/Pawns（博弈，思维）/index.html","1fcbac67e7a3fb1cf1c452208bc66754"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","4919035a117dd581d38478ecaea51bca"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","88c82d0f92c6e5f493054bd353943783"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","d4f99153c329793cb773f21661e5634a"],["2018/08/20/hdu 1564 Play a game/index.html","7cfd8990bccc5f73094d7f3e24f5730d"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","de50913cb78d0adcaee4fe9d1f53e8f5"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","f7e06022f0fec50da5c5aae80aa7268d"],["2018/08/20/麻婆豆腐（思维）/index.html","f65bd75d68e042736090dfa5003c30ab"],["2018/08/21/1212 无向图最小生成树/index.html","e4fe2625e2ff4042d6ecaa9b7603966d"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","8dab4d93280ee5fa97094788b3ec29e6"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","7f5413659e2ed512c1d230cbba1393b9"],["2018/08/22/1079 中国剩余定理/index.html","d5dc61d216a7fae9b77e23fa1015bdda"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","e1c4a09877e738c30beebbf8f003ff5c"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","32825fb7d7b9a243b5273ac833091e2c"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","604b319275a319aca77fd5c02f34008f"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","d533738fe3695635b65d9569a6cb4b4f"],["2018/08/23/1136 欧拉函数/index.html","64596e247091eb146f86b8deab4b2fa9"],["2018/08/23/1137 矩阵乘法/index.html","ebb457bf3ef3c5b826fdd46a6f5c4464"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","bdb6633d6e9a07acaf39aef0a1a08436"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","f2098c9e860d9fca3fe46470469add27"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","b9484d7e35ebcf7b089b4bae60d5760e"],["2018/08/29/hexo4/index.html","9f67789dde8e3cbe17536e082c378347"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","86baa6a9e8fb24f416395792f90cca2e"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","3e9cf74b6d82b19a4b8fe369789e3005"],["2018/08/31/A. Too Rich/index.html","af61adef1f7c1c132a0c777dd0b37a83"],["2018/09/04/C.Catalan Square/index.html","5ec80ed3840c05b418bd44430984d3d3"],["2018/09/04/hdu1002/index.html","32a18b2aa34173aaff0d1846fb34a2ea"],["2018/09/04/hdu1042/index.html","68378ee7237728c400b93911a9aa5e66"],["2018/09/04/hdu1047/index.html","d5568c2883699281ba072abb04e7482a"],["2018/09/04/hdu1715/index.html","9e1911eb344f5bed1f71a85a1fa44c10"],["2018/09/05/hdu1063/index.html","6e251845b3dbfe659389516b37124780"],["2018/09/05/hdu1250/index.html","a1a31214493d2420bf2503c50e30c29c"],["2018/09/05/hdu1316/index.html","186cd3cdd6745d622357e77dc48ea052"],["2018/09/05/hdu1753/index.html","c9df94cd2f52cd22672c7023f8b5da5c"],["2018/09/05/java大整数题集/index.html","90827fc11b0abee1d88a52dd5e24bd32"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","c5e59f8e8407920448505d5d03856a03"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","2ddd7e70d9ac921667931effb0ecc63a"],["2018/09/06/hdu2054/index.html","643a175118311701973d58e6e24d857c"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","8dfcfb7ab6082b027cf81bfcf8421789"],["2018/09/07/hdu1212/index.html","f69275cdb99121dc1aad8bfa573406f4"],["2018/09/07/hdu5050/index.html","3405781ccbaaa57ce662e60a437d2050"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","801017c3325e57509dde303ed6b8c994"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","72a61cdabea06968d2227990185ce371"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","706532e21b5ad9c34aa977309227e555"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","71598ca09136f2aae913e553fe9efa69"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","aeed0e21f4e0cd8a523a97d558e7b721"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","fa24520201d165532df46d7851ef6d2b"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","7408721d6b0e889a624e098aa5c643f4"],["2018/09/13/Teemo's formula（推公式）/index.html","07a00b1005a854db2b4efaa8bb8643a9"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","eca96a1aaeb56a9adb16e0045fe02c38"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","c05664fa3bcb77c0393af654e47d69bd"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","9b7319fd57dd54b5aa450d5ec1655429"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","3c7870b869ae6eb69400bbe165e26f95"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","30a7cb1346646d95eb1d560489d9e38e"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","0ab10b727a2bcba542ce12234ccc287b"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","32781f06bbc5e2c16b0aa07dcf85f8b1"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","d2f1c245c282d19fcdd60dcac7f9c5e0"],["2018/09/16/1118 机器人走方格（组合数）/index.html","302d3c3767910294f73c80b7cb836de1"],["2018/09/16/1134 最长递增子序列（dp）/index.html","e6b5d715a68e912a4c0175accaf159e1"],["2018/09/16/1135 原根（原根性质）/index.html","ce9e5a451214aef83b52e4c6e97ca02b"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","e49343354beeb5eb63fc85c55dd08dba"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","49bdd3d48944213b4ebff055f780bb54"],["2018/09/17/1073 约瑟夫环（递推）/index.html","d5d2dbbd771fe2719bed6b744bdc2fcc"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","f9c4de90537588003cf4cd3149049a04"],["2018/09/17/1085 背包问题（01背包）/index.html","14f508b6471b863f993900d088238298"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","54c4b8e44c65a94b25828986dc03da08"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","38a7b058062ecdc43a76805e93600c25"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","7c42d9f57dfbe41f78eb3895ff42cc4b"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","89c475366520d731be874009761a6b0f"],["2018/09/18/1027 大数乘法（java大数）/index.html","bd2885ad6fbd82f1701b234e337b1d7d"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","12237714f61ced7c4fd068b68795a2a6"],["2018/09/18/1049 最大子段和（dp）/index.html","b72f11f09d09f06dca67b28af941c524"],["2018/09/18/1057 N的阶乘（java大数）/index.html","3025a0ee3c5fc8f6e9c820bd417161a8"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","7922f353aa4c9bbe08dc7a3a0df96d3d"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","c8c2d1df27862bf71371e8ff98bd4d54"],["2018/09/18/1072 威佐夫游戏 /index.html","82ea986490344752f952d8547dac6070"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","7b08100f017c1b7a13d1eacd6ece9037"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","032fd801f9ddc99758dc9580e99b8774"],["2018/09/19/1000 A + B/index.html","2b21b8c2f28bc4cb02f6717caa9a12f4"],["2018/09/19/1005 大数加法/index.html","6783a069bee83fe36efb5bdbb045bcfa"],["2018/09/19/1008 N的阶乘 mod P /index.html","2c47727a8c41712bdbc7ef0c945885b6"],["2018/09/19/1011 最大公约数GCD /index.html","efa54ba393f4dc954f4579f7452e78f2"],["2018/09/19/1012 最小公倍数LCM/index.html","fe32e149883800269715478dce59bcda"],["2018/09/19/1018 排序/index.html","33f6a65c92a8a34dfc23aef74171972a"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","b7ebfe4d813d24aac531ca99688cd2c9"],["2018/09/19/2133 排队接水（贪心）/index.html","dad02b211fcdbd5f7fdf254e4b1ddbd3"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","7c6b469bad3fb6a167b09444b9d8fefe"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","6b1aa68766c40a78c609d54d5339b891"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","d32c22cc1032594d0f3861990a6e3607"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","ddf90a5355e44cb44a0247d09da3576e"],["2018/09/20/51nod 1717 好数（找规律）/index.html","8ef8eeff9b1e4fc57f9b5a3946e13db1"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","32b7c9814aafaab8bcc35062c45cec81"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","f00b628cf1a5431b9fa194f8ac5af77c"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","aaee69f92d8a335a6bfc72d8495f0e8e"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","23dedf0badb5f729e7612e1b48a03025"],["2018/09/23/51nod 1791 合法括号子段/index.html","0bcbfe3cf91009b7e75ff97b62c3fae9"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","d34a2afb730d61985b6e37d45a59931f"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","28ca06ba3f0494a483541f392d8dbfa6"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","95f9266fd134f87ebd64493917596d68"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","f7bf86ac2b6e924a4c2a43fbb54cea7a"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","51b2aea0cd734ebb4540d6400d6dece6"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","f906da15f325f6d978ae216d310f639f"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","a27330c21b0bcd51c49b95e363852420"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","20217652dbbd7f40f85fef7e1c1bb8d1"],["2018/09/29/51nod 1015 水仙花数/index.html","bb1637201eed6d9a157a963d82028c0f"],["2018/09/29/51nod 1080 两个数的平方和/index.html","44e9ed3e963ba2c82e411c8e2edcab82"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","53b0ae4c451da1564018ac69fa98c4e1"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","bc18b1b839b92a43462295ebed79a9d5"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","4cfc7a8969b48e9eb03c96f86a68b916"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","7ff403544dddad5038d6f5b8c12b3bc6"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","fe78ddf980a4c0db661c7f8f35179452"],["2018/09/29/51nod 1182 完美字符串/index.html","a6f0c1b3bcb7225186a3dc3a00072313"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","cccae51c0444b03e3d706a321a573191"],["2018/09/29/51nod 1283 最小周长/index.html","a971c9c68da845cffababa47b90ebd55"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","3e265c122e9cfc1bb549cb0af875efb3"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","9605f12a89ed086c47c74815d854e449"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","6cf165ac13ed2b29ab8caebf17b6d0ee"],["2018/09/29/51nod 1344 走格子/index.html","55676b196e905da93edb6042eba88807"],["2018/09/29/51nod 1347 旋转字符串/index.html","da12f97271096729ad6bffc8942ffac3"],["2018/09/29/51nod 1381 硬币游戏  /index.html","edd130d550dff49e7153d71bf5bf187b"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","3228c9291501d5eedf5ca84c7075161e"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","e1bcd68881a3add49a336700c0a50e42"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","04557f80efff682557d7844ed7247b5a"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","302b82730ea196052817e7625a6b2009"],["2018/10/01/51nod 1596 搬货物/index.html","995e204dfc1e4ba9a0efd9adc66f7a33"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","b1e86a0b043e850c7db04010bf1c1001"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","73906b25411e99f800d7cb77d44adb99"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","58e55367b3e09705e11d30063fd40167"],["2018/10/02/51nod 1521 一维战舰/index.html","8894609e7fd81cd4b7414cd893e1da6f"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","ce4c0f5f57817ad1b4833136ef5b2697"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","8518227cdfb56096672be4ad4a227b4c"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","cbf290b87d6a3808064e380ad00b2604"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","e0e6216abb3107e0165f84a6ae37c393"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","df957e7b057f4cc8edd2f2b667e60dfd"],["2018/10/03/B. Pocket Cube（模拟）/index.html","eada6bea9e8ea54e220caed5d6ca2a38"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","6e36fc1919059ab98e972691dd2d19ee"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","ef9af8e40670e06e72653b3fa6c42553"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","e56cf0d91b4db82042e2a90449346bc1"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","8c7ba16b2c8867caf75eed2eb1c0231e"],["2018/10/05/51nod 1138 连续整数的和/index.html","5c3b6a0109f91e368f818cb3b8f98529"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","c823f9310f99348ee357656f23c77762"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","79d10a0ea8610cf33f163780a5185b32"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","1872962beef5b6f4a89ff315e56aaed0"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","f7ceb98c0102e376618af8b2db650f57"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","c36f4b205148e08a2d2038978b8385e1"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","e9422f3cc29e6a6c996d2a597d6af982"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","8296ac4e60e3c4c919696b265bddca4a"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","13286d4c480ec460ee8e62f7058be7fe"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","dc51ef438c7b479f8af443903ac9ef4f"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","197fda4e7d4cf403931ac540cbc7f10e"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","61d21d154e80d07f0a2a578d8f197d49"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","b28cceb5379d3c0b57537052f5485b5a"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","a64041a13d9634e75d6de64f97c78ace"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","3076c0a2ddbee60786cf3280b3143103"],["2018/10/10/ural 1073 Square Country/index.html","b331169b08ba6fd40e6bdc8cc0f939e6"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","047011b341e0cc9ace560736308005d1"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","39f2cb8c876fe73fba3ce6084d6d150c"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","3bd25303464bcefa03ac0a33e64b219c"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","0c40a1d95d4841b9eeb10a4d1d66736a"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","1aef9d17e2110d0ba040e4403c20ebf2"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","922cc0607074d3fedb1836208014814f"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","29b18cdf1ef456596cc35fbf4449d72c"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","47132bfd588607a9c6169535f3aec18d"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","c20b74a48e9d3afeba71ceef85a388f3"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","8be134f5989b252c208b1c6aaf6156d1"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","9a0cf017d725ef037b289f1faeb1a28b"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","2f3ec518422f5177c5ad6c71cd462ff9"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","908bca1a5dbf29900c7d2b1c908946ba"],["2018/10/13/51nod 1315 合法整数集/index.html","659aebe80d37163090310f9f170ba510"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","d458198b4234f4f74dba9fb5e97e0046"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","309b2684de59c9b52b6a92bd23868e84"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","cbfb08c3a0a7237da466dbcfa10e2a9f"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","6b405e579728cea7ef55261d0263c800"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","147d4d524abe737d16db07c64329336f"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","49dadcf6e5abb9f794222026a52b5b61"],["2018/10/16/51nod 1102 面积最大的矩形（单调栈）/index.html","ffcd27c259648cf7a5ba529847f95b40"],["2018/10/16/51nod 1835 完全图/index.html","dd5ff013cd1a1df6ba6a940a1c30c27c"],["2018/10/17/bzoj 1085 SCOI2005 骑士精神（暴搜+剪枝,IDA*） /index.html","7cb47010867d1edcb658b9c8cf4aa7e3"],["404/index.html","e58d6982ca90587b5176a671fbea399a"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","191ead3a6644270472dada73923d13bc"],["archives/2018/08/page/2/index.html","dddd1dd2ded4f4ea56cdebe0fde913c0"],["archives/2018/08/page/3/index.html","749e83a63bb109d303418f280ac98d22"],["archives/2018/08/page/4/index.html","ae504208d240573f0b258b71d4c75476"],["archives/2018/08/page/5/index.html","947b389152385321406628951910e5ef"],["archives/2018/08/page/6/index.html","adc3509432fd5988db53cebc3f8f06b9"],["archives/2018/08/page/7/index.html","cec981e610daf132862226fa767f1c5a"],["archives/2018/09/index.html","3b378d936ef2eba708b4151e2269b0fd"],["archives/2018/09/page/10/index.html","ac0ff1b4d4bf199f387a101955a5b30c"],["archives/2018/09/page/2/index.html","79eb8f9ccae4bfc926a5ffaa71ef912b"],["archives/2018/09/page/3/index.html","21701bad9a13b91f32bba3d3848925b4"],["archives/2018/09/page/4/index.html","23d51987933f14c44c95253a1f25b5b5"],["archives/2018/09/page/5/index.html","2cfd963840b67a3ee7e73e2ec9d756b0"],["archives/2018/09/page/6/index.html","05a2b2639d6b1f50b05ded465949f96b"],["archives/2018/09/page/7/index.html","0f8435f505b33162648c4cb1769ebbe2"],["archives/2018/09/page/8/index.html","0ad35f1ecb66e3a3a7cd4c53f332161f"],["archives/2018/09/page/9/index.html","26ac812da672682d926f4e0f70090fcc"],["archives/2018/10/index.html","56e3c1805fd7512b06de4c2ab43b4749"],["archives/2018/10/page/2/index.html","347944a2fa6fbabc1d33e6a1aa4d7a28"],["archives/2018/10/page/3/index.html","15e9577befb108b2749948509b3a3168"],["archives/2018/10/page/4/index.html","2fb55ef180d42fdf2ce9440c2ed12d5f"],["archives/2018/10/page/5/index.html","22ca3ac19eaca765b5ea318830c46348"],["archives/2018/10/page/6/index.html","b4716aa66728e49d43e519994d8be51e"],["archives/2018/index.html","0c759495ea068643c8eb5567b5a1fb18"],["archives/2018/page/10/index.html","495a718153399975b6c99672ae7e3013"],["archives/2018/page/11/index.html","5184b564d2e5bbfdb61e0ebbddf6236a"],["archives/2018/page/12/index.html","76cc1d5c1eb8bae9aa88b5e5341a9332"],["archives/2018/page/13/index.html","7e1c1f1395607c778d3d612a87e1ef69"],["archives/2018/page/14/index.html","a959934d474d00eaa9363698712b9bff"],["archives/2018/page/15/index.html","84b552af8ad76b25542ed9a6ed4562f7"],["archives/2018/page/16/index.html","152b3f931003928a1e3980858e1eaaad"],["archives/2018/page/17/index.html","d84f6914386ce50cfd172047e166c901"],["archives/2018/page/18/index.html","0d57115992970a0c56279f37260e25e5"],["archives/2018/page/19/index.html","4d56ce02bdf7af9b4c81e9ed76ab9f44"],["archives/2018/page/2/index.html","aae6d2b8fd1d8ba65f2523828df345e0"],["archives/2018/page/20/index.html","ff448eccae574e5a4517a5acf9672a02"],["archives/2018/page/21/index.html","786e7ccb9d704696efff06025118598b"],["archives/2018/page/22/index.html","61adec5c768d329d795be138ae1bf76f"],["archives/2018/page/3/index.html","ffb06d7f7f45696ca5d93ffc536021b6"],["archives/2018/page/4/index.html","98223c13897eb6ca17ae78a36352baed"],["archives/2018/page/5/index.html","236d62cc91ee8abe8664c6e3e00a6033"],["archives/2018/page/6/index.html","bae8da5c50eb7ea46d18b4cdcc44f674"],["archives/2018/page/7/index.html","531e0918d113e4714a382de6cb805aa5"],["archives/2018/page/8/index.html","781dd296b1fda8cca29076f0687c30e9"],["archives/2018/page/9/index.html","d220fff7790485bb4d276509f525ec2b"],["archives/index.html","680736c1341178468c1f254a3d613d5e"],["archives/page/10/index.html","81adad22747510913801d0f1f6dfa99b"],["archives/page/11/index.html","0b88b445a26f000d7b611e95c8a727f0"],["archives/page/12/index.html","0c1f2677af9e918a2091b87fef32b2ce"],["archives/page/13/index.html","c6dd222aa665eb633cef4d455660e675"],["archives/page/14/index.html","c15ccad2a8801b8e45a236411f499d9a"],["archives/page/15/index.html","9ef793282a70e1f286f0bc224ffbf5e5"],["archives/page/16/index.html","1157be9950d7b87dc7b753d3640901f7"],["archives/page/17/index.html","3d02236c0c4b5c71f1ea03d7ba0b8cac"],["archives/page/18/index.html","8b529c773566c14696916cc6251a5f03"],["archives/page/19/index.html","79737126f408033eecada636d257e960"],["archives/page/2/index.html","c74927312da48538347be06db2d156d2"],["archives/page/20/index.html","c1f276ff2eb1171fd6dfbad490598618"],["archives/page/21/index.html","0bbdda5fa51af3699cb17c641c0a80bc"],["archives/page/22/index.html","9b8ec3b138e0a98482583577c5a1372f"],["archives/page/3/index.html","a7dece081cc9a74ccbc32966ccbd2187"],["archives/page/4/index.html","47373d15066c4895fcdcddbcf6b2aef1"],["archives/page/5/index.html","2960e0bbb7daa7f3b13ee5d323dcff1b"],["archives/page/6/index.html","b782d1b452f470f927cd10d99e884463"],["archives/page/7/index.html","65ce3b2cf55ac0db5046e0c193d269d1"],["archives/page/8/index.html","48e9c6879494995bba769dc6b8886ea3"],["archives/page/9/index.html","469a9a2692e3d18c6cfe0ea980b66c20"],["baidu_verify_DfMf5XqJUb.html","6039260080d703b9daa6f5c22ada58d0"],["categories/51nod基础题/index.html","d05e1db89dfabc7ec81dbe4735835fd2"],["categories/51nod基础题/page/2/index.html","0b84a6e98624dffe5a3404bc9f4f1699"],["categories/51nod基础题/page/3/index.html","5b55c4c786e626389f547f4995b692fd"],["categories/51nod基础题/page/4/index.html","abf27fe4e791b486f26e24ce985be52d"],["categories/51nod基础题/page/5/index.html","260bc4a3ec120a86dadc456402c59315"],["categories/dp/index.html","6d1332eee76ca80fd10532f3442b38ad"],["categories/dp/page/2/index.html","cae8f279029e1f2f41d8f1f53eb9987d"],["categories/hexo/index.html","571f60d60cfee287cfbed4c6496b24c2"],["categories/index.html","d3f01d960b011605a2b970a1bdcc75bc"],["categories/java高精度/index.html","9f863312a48e83f39e9b7133e9443ffa"],["categories/java高精度/page/2/index.html","2c028c2beafbd17a4ad0e19c7888963d"],["categories/love-peace/index.html","c91b7a45fbea0e934845eab8a404408e"],["categories/poi/index.html","bdbb3f9cb90ae0875105e5bb96bf24fe"],["categories/二分/index.html","d8a628af83800a72de5f2c40cc21578a"],["categories/博弈论/index.html","f231a996d22d161f63b8094ba54a3cf1"],["categories/博弈论/page/2/index.html","c7268c0af425e748711772e26e70aa03"],["categories/图论/index.html","2c4f2224d5c85961936a14008150ae1e"],["categories/图论/page/2/index.html","66d2d1fcafdbb974a6c8ffa0fc733dff"],["categories/图论/page/3/index.html","2fb7b737a9cf10cfb336889d1572c479"],["categories/搜索/index.html","bd2a2482c931b90588f20e44a2dcd593"],["categories/数论/index.html","f2c9ee4989c1fcb9c54813027b484cd5"],["categories/数论/page/2/index.html","69e87d73b15e6822826cabd04242e87c"],["categories/数论/page/3/index.html","afd951092ffbdb5b2fe0cadc7343327d"],["categories/数论/page/4/index.html","62b4e10420a43648f12517cf3d96e588"],["categories/杂/index.html","394f76f7d6f9b17b0de68e44ff8a48c6"],["categories/杂/page/2/index.html","509eb14d6b8e9b4b3b16baf6f0df0e38"],["categories/模拟/index.html","286a66f87c1edd9f89bbacf56ec1dc8e"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","f6046bf414cb10a43390dd89b161fe08"],["categories/计算几何/index.html","381dcb54a2e1d2a48e0931b252c2dd7d"],["categories/贪心/index.html","e4f36222176f6b1d175d62c2b31131ee"],["categories/贪心/page/2/index.html","360348971f10a8fd390c5900b0629046"],["categories/题解/index.html","be6615ce45f80202cddf5126ac155412"],["css/main.css","c596025e23235e269249842b9e15bd42"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","60f20b4bf66f660d6671426daedd0ed8"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","2cabc4adb35d64b27cf721a9f3ebf5b0"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","1885245a63b0c8d8d491e83d1616ecda"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","f772ca6c866fd79031b6fd4845d6e159"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","0f636709aea748eb6c8989b913043a44"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","6e9b688b6610080d832911f482ccd1c9"],["page/11/index.html","e23c2123d0f658055badff870554dc71"],["page/12/index.html","f263090230d32fa95ef34b3db1734708"],["page/13/index.html","e17a8b8ba0fa4ae8e24bef5268b44828"],["page/14/index.html","6352706f853ac35065c55a9f527a7d86"],["page/15/index.html","11af12ec56956018f35900cee0b62632"],["page/16/index.html","d58d2a500a0af6c404987abd607dde50"],["page/17/index.html","ec2f530291d23b974150efeda3fced4f"],["page/18/index.html","13fa20b031b236331b9b14ffb979171a"],["page/19/index.html","f93c03bd33183789071c49de894ca505"],["page/2/index.html","ebe4da705e6bb49255167c8a28b23864"],["page/20/index.html","078594ab44d69b78665dfc8c2dd5b4bb"],["page/21/index.html","0a97c64db0eb596fe16fe5495a718c12"],["page/22/index.html","18fd9ff30aa7a217c7403e6c7f99ae68"],["page/3/index.html","5ce25a0ba070c5139453531a30f7cfac"],["page/4/index.html","328e24e2c94a1308be6239f1b9fa0f82"],["page/5/index.html","a211da4835674dcb73933ca9d443f0fe"],["page/6/index.html","4dcb5042155d40c44361a203f74bdbc7"],["page/7/index.html","3688a68bfed8b0b5207de5cd54fafe21"],["page/8/index.html","0747eca53088ff7abd192e0dfc81f304"],["page/9/index.html","44cb13b7ef9e6ff0cfcf25855af055d8"],["tags/Floyd周期检测/index.html","2742b9b0fd72bab657f8fa938fbfc390"],["tags/IDA/index.html","338bb02e647828c1feb33ebe6456e877"],["tags/Manacher/index.html","dadaa63aa2cdaeac81a9987e9a96bb16"],["tags/Pollard-Rho算法/index.html","d1aadd6f056ba7326a8a960189ac4b81"],["tags/api/index.html","87556667b765f358a89107831e94a15b"],["tags/bfs/index.html","d282578c95a79c5fc5bf0a1d0205aa4f"],["tags/cf/index.html","b594a9f3664bf8ad2437f8e7b21d78ea"],["tags/css/index.html","d6505aff1b77b1c2b2d5fbedc53d5f78"],["tags/dfs/index.html","7de9da44d34e0b9b8a2588fe86944b63"],["tags/dijkstra/index.html","afe1c82a6261c946cf8343f0019cfdf0"],["tags/dp/index.html","c5fe6687ae31fb444d3cbbef7bf1d831"],["tags/dp/page/2/index.html","040462268174d8f077740ea3ff3ac5ca"],["tags/gcd/index.html","aa4bc8389830f9dd6575931ae776fa6b"],["tags/hexo/index.html","7ca2edf8157cd3f866004e24850bb00c"],["tags/index.html","b563bfd45fe9fd01f8d2877e7c851d48"],["tags/java高精度/index.html","25ad19ac0046e155360afa8e39b039b7"],["tags/java高精度/page/2/index.html","0144825518ff22c93d9e7154ec84605f"],["tags/java高精度/page/3/index.html","5ab431a75eef6ac3ca4628c732d185ed"],["tags/kruskal/index.html","44b22a4822e4375e833205fed87e4dca"],["tags/lcs/index.html","a9a6788c91b70951db01eb78e738861e"],["tags/leancloud/index.html","f1fd6df1e4c5fa952ff83b51297eac49"],["tags/live2d/index.html","09fd245849956af3424063820bbc9773"],["tags/mac-OS/index.html","d545bec145a0b5b23ced9a5d8beb185d"],["tags/prim/index.html","9a672fe20a717af9cacd610847e3504b"],["tags/python/index.html","ce72a6f1bb99fc434208b17180053488"],["tags/revolvermaps/index.html","1afe97c69235b456c28f5a2c0210061d"],["tags/rmq/index.html","8434befd5effe97d903f3e25feeaeaa8"],["tags/sg函数/index.html","6cd36736de65b4d354f1ca278a73c8ee"],["tags/stl/index.html","c1386c6c9423c3a8bf339c9531259efb"],["tags/三分/index.html","9e24616353578dc8d4503f361a7716ec"],["tags/中国剩余定理/index.html","0bf20803c82d3a2ca6ddcf89469c4ca6"],["tags/二分/index.html","19893cd7fae6408919110023a2e0317f"],["tags/二分图/index.html","677803e5efa59ffb54922728524dcbbd"],["tags/全排列/index.html","f1e90c40573c5ca43214df48515cd92f"],["tags/分割平面/index.html","11bb3fe7bd3be2793b9c54426116f876"],["tags/分数规划/index.html","5cd990ea67bb24538f45da78743ae193"],["tags/前缀和/index.html","c63d30644684e11b7acf292b1d8e5a88"],["tags/勒让德定理/index.html","9dce59190c0a9b36ae235ed2ddb6f222"],["tags/匈牙利算法/index.html","570798020cc1a43ec50eb3ca168c30a9"],["tags/博弈论/index.html","522a00d1e10ddc016de3866e8213d760"],["tags/卡特兰数/index.html","85c2a3056e80ef306e4f07487ad98c8a"],["tags/卢卡斯定理/index.html","1dd7292fef8598dfbf20ca8cc5d9ce3e"],["tags/原根/index.html","93919f5286369f8d134812de67d863fe"],["tags/四平方和定理/index.html","5be229b92dff80fa07bbad873028994f"],["tags/埃筛素数/index.html","720009032b0a5ebded81c63f70ddfee4"],["tags/威佐夫博弈/index.html","42952ccdc14a1c46e398f65f9006a8d9"],["tags/字符串/index.html","220ea3da73742f7f52f4965e0b35c8d4"],["tags/容斥/index.html","73fa486946447fe44033722ad14f12a0"],["tags/尼姆博弈/index.html","67120d0f231c65a2a2c9da235ccfafcf"],["tags/巴什博弈/index.html","26e4fec5dba788dd399e0db8137af5b8"],["tags/并查集/index.html","c290a6033810066e9018541412b8fb56"],["tags/归并排序/index.html","1f7e9964cb41c0d2795eb923ece8e613"],["tags/循环结/index.html","2e582f933c8fcf87b820f3d58019603e"],["tags/微信/index.html","9b50097c8e57f16e0bc2d6f05d4a7737"],["tags/快速幂/index.html","df0d3f2febbb6b37e36d4945b58f6ce3"],["tags/思维/index.html","87e1725e9bbfb1a5cf628f61d9def807"],["tags/思维/page/2/index.html","8589d16b5aff421637fbe07e5855dccb"],["tags/扩展欧几里得/index.html","6b32eabc26a7b999c551bb5faf1d4195"],["tags/拓扑排序/index.html","978b05f529fee86150aaaacd7a3ee39f"],["tags/推公式/index.html","5df117af323dc8a6e8258b631629f9e0"],["tags/推公式/page/2/index.html","fdb7ed2e2446c2487ed1016a2331f61a"],["tags/数根/index.html","4793cd6e8af1b7790ae9914c6cb5de22"],["tags/数组加倍/index.html","5bec8902ecc23c41454402a45389ef82"],["tags/数论/index.html","51e688b764366f48b493eed11b7f592e"],["tags/斐波那契/index.html","6fb3c22ddd8f5c38b885835cd73e3dd7"],["tags/斯特林公式/index.html","1ec54450489ca6438e8b3fcd8298e3a7"],["tags/斯特林数/index.html","79b376b0e0daa8a47a9e528080d79027"],["tags/最小生成树/index.html","9e1ee9bf500e4ce055848cfef0424abd"],["tags/构造/index.html","1741e12752ef8b902a3f3db7bb1707d6"],["tags/枚举/index.html","13266d47dc5993d2213c023a0438f6e4"],["tags/树状数组/index.html","f33d46acc66bc125764a481d7ff6236e"],["tags/模拟/index.html","e82f7499cd26d30ad5563e13e814f953"],["tags/欧拉公式/index.html","f21dad315a854d2e439c89493b322360"],["tags/欧拉函数/index.html","bbafc562a60c384f004c75305ca18b97"],["tags/欧拉路径/index.html","a25d0f785e06e919c6b69dc36232b8b1"],["tags/海伦公式/index.html","8dcc97cfa0bfd17a0df187437d4201f8"],["tags/生日悖论/index.html","831bec8679a622f40d1fba6c79a906eb"],["tags/矩阵快速幂/index.html","0119dcba2b1f470bc1691799b5db4e18"],["tags/离散化/index.html","0f8c6b2921415ff35d2652721e2c868a"],["tags/米勒罗宾/index.html","5ada27e95262b13ebccff390e4b7640b"],["tags/约瑟夫环/index.html","d53e8cd0067454c9df27d29732ec882c"],["tags/线性基/index.html","025bb49e07ee91f36cf8358527948852"],["tags/线段树/index.html","5866aa025f5fb86bca55a00bc5478d7e"],["tags/组合数/index.html","b4ee9717bec3b8c2797e7c3ddb9af73d"],["tags/组合游戏/index.html","c96de4baadf0b1cb8e3340e9cf43f8ad"],["tags/背包/index.html","8edd0a77a45a802a5c431de26e7f8d49"],["tags/莫比乌斯函数/index.html","ecfcc691315bb165d3e91f0ec009ecb7"],["tags/计算几何/index.html","ae0f78bbdb6c96980af47fcb42181c64"],["tags/贪心/index.html","90f07110269e7bf0aa2fbd2141ea184c"],["tags/贪心/page/2/index.html","81308132b26ac70e7a2c439a88623896"],["tags/贪心/page/3/index.html","8beb182c18e8821bc49403bd58e5466a"],["tags/逆元/index.html","e3c7ae9c68faa8804924d72d694b6821"],["tags/阶/index.html","caf58b103e158fc486605bc154a39844"],["tags/鸽巢原理/index.html","31ddcbabe2baf721941ff6ffe8519546"],["tags/黄金分割数/index.html","23eee30623e0ade477c08f64ff5e5379"]];
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







