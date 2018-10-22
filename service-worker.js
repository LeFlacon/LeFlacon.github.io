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

var precacheConfig = [["2018/08/11/hello-world/index.html","13d3631915b0e109d8079ef9b8e37bb1"],["2018/08/14/1995 三子棋  /index.html","39233b4cb3df818884c26ea0c3c39288"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","013c230a5aa362395276504211c00eca"],["2018/08/15/2006 飞行员配对/index.html","2ab5903136b46717676d9e11c069ee75"],["2018/08/15/D.Tea/index.html","9eaed5d754229e349ec39248b126a852"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","e4694feeb45f1f258774c93739460a51"],["2018/08/16/1459 迷宫游戏/index.html","d00e5d8d9b540726e62f294511130628"],["2018/08/17/1264 线段相交/index.html","12cb9918f6066518226b051edd2fec5e"],["2018/08/17/1265 四点共面/index.html","769206dd5d5386d733c594dd9bf8faba"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","f67c42e83db0ab832c4fa4e4741d381c"],["2018/08/17/1384 全排列/index.html","9ffb1c822d624e2386f75c8c0ef3e466"],["2018/08/18/1240 莫比乌斯函数/index.html","519a96e512b8b2099416f44f06228311"],["2018/08/18/1256 乘法逆元/index.html","5e0165e59b183ed8ac85a871d7757fa6"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","831ec9f9f2d17086f054854344711837"],["2018/08/18/Teemo's bad day（并查集）/index.html","c6fa78195b627cc26535efe1ffb9a94a"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","520c7e3dea0c6b2abf90574746a635a6"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","c343216ae4893c14ba8963cde8bfee7e"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","2793082d5d45f4de3e109dbb26e205a9"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","2ab4456b01fae8367e6a5f4e9acf3181"],["2018/08/18/hdu 1856 More is better/index.html","119bfa0c4cdf4db3aa89fc9d62774689"],["2018/08/18/poj 1182 食物链（并查集）/index.html","e5f8c67c948f3cc4b7dd1118d6969f9d"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","a3b209473a508a81110a2320f25ad1e8"],["2018/08/19/Minimum Cut（读题。。）/index.html","f010a6fa8fb800bd55a5d93caec911d3"],["2018/08/19/Ponds（拓扑排序）/index.html","0e6e27c69c30adf4b2468c502e45943d"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","f79e867f3e75ef562a7d3a8ecc3dcbad"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","963f132036de2595f0f620194ce312b8"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","6ae09f2c1d77ed50d2428fb665222365"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","a73d60d8e4d5b9364453947bb30d26a2"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","d7d285beb7a605d7680e6e7b3249ecfb"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","ca6828b262393963ed293b9c0184da83"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","e150eaf7d5e8c2db52b033eb621d286c"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","f1997d7623ebeb8ceeb88da14946ceac"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","4913a6e0c9ac74d51ba62613bea2be80"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","6cb4fa0e5adaea21ddd5a04e25ff51ea"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","98ff3e80d4a4081fa22c2377641434c5"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","c17ee33f3849a52a321db17c4704efed"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","fbd08b8bb933b21dfd5fbeabc5e9bbe4"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","15874a900d60ae8794a20dde439ab5a4"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","df75e0c61a78c41bb478c07135f81255"],["2018/08/20/Pawns（博弈，思维）/index.html","c1910ce15a26f015cb3a1369d524ad49"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","d0c58bafda705bc00ce775134b92a740"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","ab3bba062f4c2d7f16bead98b6042fac"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","668dd1c4dc55af1e4f61279590c3c28d"],["2018/08/20/hdu 1564 Play a game/index.html","7cca1035800e186e5130951c618c1cdd"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","26136edd4762e3ac5af302b07cd1d530"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","06cc288f2babe5cfdc7d3911189daa26"],["2018/08/20/麻婆豆腐（思维）/index.html","296e62f23c752e2c014e97ffa432e231"],["2018/08/21/1212 无向图最小生成树/index.html","ab105b7f63628c7e63947048c54ba86a"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","0ec4d3ed18c145d8ca093aecbf9b5d84"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","5e530f3a8682f876cb28df4e13ce1832"],["2018/08/22/1079 中国剩余定理/index.html","57f1ae547fcdb23ec2381f987c801b6b"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","a35845ed72b963458eef026de7d9d77d"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","1c486af5261adc78207649b83ad5412e"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","72279b8e0b49931b45a1004e89a87517"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","34d269704b07dbc47e8cdc3cc2a0ff87"],["2018/08/23/1136 欧拉函数/index.html","5e66f6639caaa0332d3f44ed4ebb99fb"],["2018/08/23/1137 矩阵乘法/index.html","2873e794e02f18fbf58273fd53b6f4e8"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","690c97af843d971e60386fcaeb3b36b9"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","5e11881b7c2990624af1e7c53049531b"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","cc070e3fd644f36909785a84c69df1d4"],["2018/08/29/hexo4/index.html","a7b4cf3b277e703b1d68dba58e2bae4d"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","df46b35bab1dbad97f64b144b66ae115"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","42bd187691f67b6b649e61be55501026"],["2018/08/31/A. Too Rich/index.html","e25d8b1e0ba69e90e07013132f51b204"],["2018/09/04/C.Catalan Square/index.html","9b1e92100da8a9f1e3f89617042c37a8"],["2018/09/04/hdu1002/index.html","b4a6277bc37f9a0b411674a28c62861a"],["2018/09/04/hdu1042/index.html","d62113244a395a460df07dd5941d813c"],["2018/09/04/hdu1047/index.html","df51e5b032c34199b7babfeafd44a716"],["2018/09/04/hdu1715/index.html","8c74327b447f2d92c750ed06951564c6"],["2018/09/05/hdu1063/index.html","62bb40aa290703ac8211d3fc330ef448"],["2018/09/05/hdu1250/index.html","f57142d458a1e16ca75e6b9c917db664"],["2018/09/05/hdu1316/index.html","a1ab383ed240d0fa9bebb8737312fd61"],["2018/09/05/hdu1753/index.html","78beef741e0137b2b7df3b1a05ebac63"],["2018/09/05/java大整数题集/index.html","f31f8adf09d7f134533bee976f03819d"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","f6333140c3731b86fd2eb3621c7e120e"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","d95f2c9fb299d029bd3d523f747f04aa"],["2018/09/06/hdu2054/index.html","166e9903ef092d97a071fe1c597b7c09"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","9d718d4a06dd207e4d5f8c4d7ccf732f"],["2018/09/07/hdu1212/index.html","30fd981c48a69057b4cd0be4f96ea4d7"],["2018/09/07/hdu5050/index.html","aa9be3085c7737a2eedab676e0becf16"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","0db0ba4b23ffad02d4409eb3a5810bd1"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","aa40244834a8a8c6901a846797908285"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","6a7982ae0f780ed43ddf1a24e0854e17"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","68fb0c8ace497a2141e00f787e407c48"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","8af3db3f690289a41020ba300fed37ad"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","a25c43c1c7f2133237e15632b5fc5d6e"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","e7f2de85953ae31542532caec13f50f8"],["2018/09/13/Teemo's formula（推公式）/index.html","9c01587134a84b6780b8376cedc38380"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","b3e251dce6f8d3be5be0b3caac157f1e"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","ed01bbd462ceef457053c47d490565e5"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","c3658f3312c43b30f9d69643225f4de0"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","421dd8bf2f460b711c714e66010dc122"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","5d1e3353b80042688f876661a409b693"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","3a569076fa9b47d4583119862e1d10e1"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","eec21225c7e850da5528a4e1540fe541"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","ef6b0aea4681ade08ce94f0e60f837c6"],["2018/09/16/1118 机器人走方格（组合数）/index.html","9479ad7d5f9269a8579c26ac8f10cffa"],["2018/09/16/1134 最长递增子序列（dp）/index.html","581b0d9ae92661b5ab421077acbe6593"],["2018/09/16/1135 原根（原根性质）/index.html","31eaf181260501a0291a25291e4457ec"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","55f867c0daf9099a6290dbe3383f29ed"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","e3fa1a6a84f91fcdc74028e58fcfa533"],["2018/09/17/1073 约瑟夫环（递推）/index.html","efc41b7496c8e62c9eb00be877170dda"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","0a489bab149ca1dc1813b4e7f454f634"],["2018/09/17/1085 背包问题（01背包）/index.html","600b68081d3bb69a4049968e9e34c29d"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","af2e3edeb68180dabea62d95ffcbf6b4"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","30049ca5056a275ed5dcf356b16f00f9"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","619b3dd9f0bab971127e47edc2f0fa13"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","2930ee1c3b7768ad138026e75c1a9a24"],["2018/09/18/1027 大数乘法（java大数）/index.html","4a908c3f5943950963ff1378e9431c08"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","335ea9a8cbfb1bf917a76e48669b9129"],["2018/09/18/1049 最大子段和（dp）/index.html","835aef568fcaaef6b234a938b6f5a94b"],["2018/09/18/1057 N的阶乘（java大数）/index.html","d8556006a6d74efa664f44fc0c20153a"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","9d828877c301461932ce850a0855f649"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","9ce4253e64255bf99c29e87b7ec0afeb"],["2018/09/18/1072 威佐夫游戏 /index.html","1992f7eb7c2191df94929169bb440953"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","870e99d399e53b375436a3b9adf1a4e5"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","a080eec363ebd1d023232de7630c62c4"],["2018/09/19/1000 A + B/index.html","fdac9e17ebfa644e77747c1f6a92f55d"],["2018/09/19/1005 大数加法/index.html","eddf5fa1db81b235753a00b3d08687e3"],["2018/09/19/1008 N的阶乘 mod P /index.html","9df0c0a5e0336e36157b5636b77f4bf6"],["2018/09/19/1011 最大公约数GCD /index.html","6ab5b7a1da63e3d64f7d4d81ce87aa00"],["2018/09/19/1012 最小公倍数LCM/index.html","7130cbdc7be680aceffcbc4dc34b371e"],["2018/09/19/1018 排序/index.html","f5180b32edf77aa480a86e15299e468d"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","e38984891a4655362e22b88baa520534"],["2018/09/19/2133 排队接水（贪心）/index.html","42171cd11f718410814a9d633d842e4d"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","307d8e8c143c809fdd33eb5de3a5b367"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","3eb79dee73a16fefbfeec2960b423999"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","b1a654a463faf3f7525e957938b7abbe"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","7b757e409fa3af1d7bef321b0058b5d7"],["2018/09/20/51nod 1717 好数（找规律）/index.html","eaf76cab6af4624c18330cbcf046a045"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","ad009042d3c8679337a544d30f68bbcc"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","3c93e27cd4e5d4322ed847849ab4945c"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","a885ae9a7d5bb3dadf5835ca7701cdf2"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","10e47ca453da7bdff378b3a363010219"],["2018/09/23/51nod 1791 合法括号子段/index.html","62c8ad96efe03ffcd4236376e4184d23"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","88ce857c4c74206292bff62fa70e5437"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","d0bbd4362765f5bf9167769f070a86dd"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","3f5410e804ad40568342087a637eb547"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","555f0618bd54ad5bb3d00fa5a1b4ac48"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","6c8e5fe6d4ca19b958defddd695d02a4"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","58ed41bfd4ae8e8227798f4ea0ace77a"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","8ea7e2664411f9adadd5f3ce6b6f4c85"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","c8f627a69af0cca940fc3ac78b9475b8"],["2018/09/29/51nod 1015 水仙花数/index.html","f2975f0dd10179663e452d8bb7a492e2"],["2018/09/29/51nod 1080 两个数的平方和/index.html","d6467a64bdedc0cfad697390cf336c73"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","21c44ed5da6791a87c5426e9248004f0"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","8b09e139a624bb6185e11d0f001c684a"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","72443e0211d658148ef65f81a4bf95f4"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","d20744298d246d5f107d4352eb2f252a"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","753c06ba31ec14ec39311eb18d9ddc98"],["2018/09/29/51nod 1182 完美字符串/index.html","a645e0e9c81ab773c3853e897222bc99"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","22e8170333ff4815ec685710490beded"],["2018/09/29/51nod 1283 最小周长/index.html","a6319adb9bf907e204f05c013993a246"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","c92350b620fd44efdf8f317a2d0c2cdd"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","992dc11e9f89a5969cdc9a84dcaa969f"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","dea8151aa4e09124bf7b5d78c8988251"],["2018/09/29/51nod 1344 走格子/index.html","5dcef578c82f59ce26a8f49def4e2999"],["2018/09/29/51nod 1347 旋转字符串/index.html","8192e64a7d41c423415b7ac5cba0c6ca"],["2018/09/29/51nod 1381 硬币游戏  /index.html","52a5db0297d8fe508df961f91f89dc57"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","443e93ad9ad947b22d2385cd9f38065d"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","55caebfc148b88c22a9a852b85de2eb1"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","8f21a6b0fa104ab4b594e065f2a90dd4"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","13ed6e44213b51fba34b3df6031e5ec5"],["2018/10/01/51nod 1596 搬货物/index.html","f225971746ace040951a64d8229b80bf"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","59805cf580b0583e4418127eadc05fef"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","c6de9a796a490989b9a103577da11a39"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","cf880153a8e2549d1cc1869c00eb8490"],["2018/10/02/51nod 1521 一维战舰/index.html","2f9773170a5f50a43c25037383dc99b8"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","548ed393b92ea5b63b48d71abedc4de7"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","340d6c0fad08815fb1a4d5e1dc5500f1"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","aebf455c9536846b682b80f759c86aa8"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","d36bc607be0573d590e46d396a5fff8e"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","d1ce54c110a5b87d78bf7157da4018c2"],["2018/10/03/B. Pocket Cube（模拟）/index.html","d47c0960f6cc205d09484d5978e57cb0"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","973757ec919ca265ee53525bd1d3cbf7"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","128567ba16209c02b94893d5f77726f8"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","e2f4957b0a5421bed9310b498931c4b6"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","0242f5ac91ad11ad9e1cccfc58da488c"],["2018/10/05/51nod 1138 连续整数的和/index.html","9c0a1e6a789faae8984bc0d3419ba4e2"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","0fdead9b569efb7dd88347334ba13213"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","ef902886e8c0e7cc9243419b537f54a7"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","4d459f203dbde4cbfce8aac5818edc89"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","6c1c303e02e37d1548062e6f56f123fa"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","223be1bc5478bcc9054dbeb1e25778a1"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","39c76aa910517a92dac46840db10a794"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","11d03cda922ccf48db0846432dd00de7"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","4e193c96df82c6dfba6fbe22b6555723"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","3f6c5373552d7d62ff02eb05b441476b"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","24b869893e94572f105b2295756a9100"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","460a73af37c883bad74c36a3cc0265ff"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","54da9fc1ef4cac6dfd93d85e9aed123b"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","abaf28de358b1bfabd3bf519ad1971b1"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","9f8d14d841c855a2323c0c5b6ac45cbf"],["2018/10/10/ural 1073 Square Country/index.html","537313ec3acf90360f4359c27764190c"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","3b30f88c107c1e75746fc9dec4f19adc"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","1abfda6bdac381dc68ca9c1f9fc1b311"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","c0ad1d5ceeb01dababe42c3033839a10"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","6fe578d1cd658357966262685a82ddb9"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","fe1ca384515243310c5741dd5756cd48"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","57aafab5f2ce367704b30c4f084c816a"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","0c3dc297b22b075ea620a6113a494f2f"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","650b58504e9e1b1ef79d8be92238842c"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","0e774c6f94c2fae77a9ccf5d26a82f75"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","04e9353e7c46f9a3f711f071c09ef7e1"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","e5da1626bae3dd0940f10195c583b8c6"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","ca67482d50a2ddcb9823068a448baf0b"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","ea58383acca2478d81a7863d95f84e46"],["2018/10/13/51nod 1315 合法整数集/index.html","659141ef688571e5b6be96025ff00be4"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","e23e19f503d0ec4bec13719fc29abe36"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","a487ee80462445efb97ddc39ca652953"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","000e5ea8724aa19f4bbd59c16ed0322b"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","d5d0f75edf276e43c3adbdb7c4e537fc"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","da5c4b5fd78408de16084a8cc0f6c773"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","2fcb172bfb130f4e38bcd9413e80bce1"],["2018/10/16/51nod 1102 面积最大的矩形（单调栈）/index.html","3693f30d0f94b571490c513427c4b0f9"],["2018/10/16/51nod 1835 完全图/index.html","cb07f0b3f9bf37427e893b9a18fee6ed"],["2018/10/17/bzoj 1085 SCOI2005 骑士精神（暴搜+剪枝,IDA*） /index.html","75e844aaf17816a052af3061ff976663"],["2018/10/22/Java第一次作业（素数，日历）/index.html","a4103a15f162153cfeca395f5642601f"],["2018/10/22/Java第二次作业（线段类）/index.html","eba8445d9dd5ecb160b676827c4a424b"],["2018/10/22/macOS下sublime3配置c++环境（支持输入，支持c++11）/index.html","5e22bf6d019b5e859b7f52ec04eeed77"],["2018/10/22/数据结构第二次作业（扩展链表，双向循环链表）/index.html","eaedbdcf3b7a77b737eb3a5a9b26cf23"],["404/index.html","950613e971cf3860d985b4e1de0b0aba"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","1684d667c18d4eb0e23cf88833afd3a7"],["archives/2018/08/page/2/index.html","89333d4c28ee90bdcf1adf4a80b6b4c3"],["archives/2018/08/page/3/index.html","540b8344bd9f61669d5816d841b8fb8b"],["archives/2018/08/page/4/index.html","cbafdaf1b987071d9d3afb7f44c23285"],["archives/2018/08/page/5/index.html","e95c226e2e9477160a208f5a57070ec5"],["archives/2018/08/page/6/index.html","69bfbe476875144315923696dcc93f61"],["archives/2018/08/page/7/index.html","c944acc6944ff6c6a6b4fbe86613ead0"],["archives/2018/09/index.html","7656eae874197402427fe8cfb480b9f8"],["archives/2018/09/page/10/index.html","7df288e240e21cd4d95ed35c97129f7b"],["archives/2018/09/page/2/index.html","465df0383b3269999c490fbad5ce40d4"],["archives/2018/09/page/3/index.html","357df0dfa6e5a6fb5c37cd2dcb727f4a"],["archives/2018/09/page/4/index.html","fc70ace3a6960dcfc3616369a83eaab7"],["archives/2018/09/page/5/index.html","24cab12461a54c25e7c6de2072d8b9a7"],["archives/2018/09/page/6/index.html","2ecf43d2cc28188f649e12d076c9b691"],["archives/2018/09/page/7/index.html","aa9f5dcac70f6a70adca3b552206f9e9"],["archives/2018/09/page/8/index.html","d82e689081974b5071f192a6c38496a6"],["archives/2018/09/page/9/index.html","598b6b5cc249c1bf33bbcbe2676be3f5"],["archives/2018/10/index.html","44d91bf629982c45676f16a8ad1e8b03"],["archives/2018/10/page/2/index.html","4c3db8fc0115808e8056c1f42ab60312"],["archives/2018/10/page/3/index.html","ff2f7ad0cade79e133f8512f678dc4f7"],["archives/2018/10/page/4/index.html","bae8a39c7e1d44fb893629b27962a050"],["archives/2018/10/page/5/index.html","9e8360667ba8dae0b8317a99b6e80e4a"],["archives/2018/10/page/6/index.html","37a2320d2bd58fabe5237d91d6c18fdf"],["archives/2018/10/page/7/index.html","a3b40de29d9dc155bc9cdc533dd6fd6f"],["archives/2018/index.html","a56fd07d194887160e424426fcbb94a3"],["archives/2018/page/10/index.html","4492adb37dc911a9a14e8c8a6c7b06b8"],["archives/2018/page/11/index.html","8330a60f5c30eb83728c0a572d43b49f"],["archives/2018/page/12/index.html","463a19137b76b4e9c967201173db2f72"],["archives/2018/page/13/index.html","f1784b3537f1e2e0359822e0dd6583a5"],["archives/2018/page/14/index.html","8bfd9d28b9998ea9294f67c6061e4978"],["archives/2018/page/15/index.html","05d6288374198e05d9fb3531752a528d"],["archives/2018/page/16/index.html","fcbdeab90cf84d1cadd0f712d910b150"],["archives/2018/page/17/index.html","11810a7e5a31a7e1afac8cb47358f60a"],["archives/2018/page/18/index.html","9b1601c8f1c781cb92c2d3fab0702663"],["archives/2018/page/19/index.html","b22132aef22d32812ebc0445a1e24df9"],["archives/2018/page/2/index.html","11c17a8821fbc1a952651d2815bd6212"],["archives/2018/page/20/index.html","d839b32e96ece61d91bedda85d77e059"],["archives/2018/page/21/index.html","dfe14d19f90ca4a1899a7c421f1a782d"],["archives/2018/page/22/index.html","e38c970bfd5652ef8ad3403d5e0e8960"],["archives/2018/page/23/index.html","9be0497fee620b8e385e1a81592100db"],["archives/2018/page/3/index.html","399fe3b5e0afa7291fbfbee857a8e2de"],["archives/2018/page/4/index.html","ac1b9360bc8395647369c423cfe82335"],["archives/2018/page/5/index.html","1a6b51a77c697c467577656d0c8b2c43"],["archives/2018/page/6/index.html","b84c6e8b58f9fc75567402aeafc87ef7"],["archives/2018/page/7/index.html","ab125d61926196cc3e557341bcc4fc60"],["archives/2018/page/8/index.html","80d0dde8195d8fa8a182ce95642cde5b"],["archives/2018/page/9/index.html","1d83ecff5ee54448d0a06d6e9732717d"],["archives/index.html","7ad22afc864aaf1432cd675863794a9f"],["archives/page/10/index.html","e19d67418e52c841d7fabb4ceb0d8181"],["archives/page/11/index.html","b530deb0afa4d4c9490da7f7771f9e83"],["archives/page/12/index.html","803eebd40c101396f410ee03807368d8"],["archives/page/13/index.html","6fb5e9e58f33abd232fed2039a3f6158"],["archives/page/14/index.html","6e8659c730ba0bc2d9feb790e3ca0d00"],["archives/page/15/index.html","8a7065c7752ad59f6ac7a7d2f14d1929"],["archives/page/16/index.html","df668716698ac7030cb7bae4317572dd"],["archives/page/17/index.html","9dd55cd55b4b796de51011f33a1cc3e4"],["archives/page/18/index.html","2cc92cf6e0cde166f6fd53811932b69d"],["archives/page/19/index.html","a86591edc3aeee270ed66740e74bfd21"],["archives/page/2/index.html","00fe4478b6bff6a31613cbd053895416"],["archives/page/20/index.html","82d649f1ce3b732ed319c56a0338739a"],["archives/page/21/index.html","e49dfb61051f03562373a51098c303d2"],["archives/page/22/index.html","e808557b8434ce416d636fe0f39d7d15"],["archives/page/23/index.html","05cc3179ac017ee8dda83cd14ae53d57"],["archives/page/3/index.html","1a5e29b00a74960b482236a5ece9d469"],["archives/page/4/index.html","953004a7704dde1a63633740f9c0d5a4"],["archives/page/5/index.html","32a386edd64343c747ff0b5c03c10563"],["archives/page/6/index.html","fb179b9f1513d3061b6d4196186ec80d"],["archives/page/7/index.html","cb0cfe265adffecec3ea457798a09282"],["archives/page/8/index.html","4bd4b5e13f72def661fff06c60ebac6f"],["archives/page/9/index.html","f9046e048647518e77da5bdd4b5f1a6b"],["baidu_verify_DfMf5XqJUb.html","c5b10dd64a127d129e3063f74055e674"],["categories/dp/index.html","133877b49dd507b0dd39820fb54ed5bb"],["categories/dp/page/2/index.html","be8b4ac453693406b9531c52c0b97ee1"],["categories/hexo/index.html","753d484c27c7f9b81f233b9d8eb7b720"],["categories/index.html","ed53345745a7c56a79b2e131a7bc15f0"],["categories/java/index.html","0a422284dd890cb12a2df53d5bcac533"],["categories/java/page/2/index.html","c71d8aeecf0a9f3fa49cd78ba5f42758"],["categories/java/page/3/index.html","b47c3fa04cf544d3e281325c740a1705"],["categories/love-peace/index.html","ea05be12f0521a4a58ad9332c5610a98"],["categories/二分/index.html","a89dc052e8ec08e83809915d4906188c"],["categories/博弈论/index.html","3863dc7de1cbf073896fd0968014f969"],["categories/博弈论/page/2/index.html","dc51815d169eaa9241c1b45247466b59"],["categories/博弈论/page/3/index.html","1ccc2de3be81e4d5fc11c17e8e89f2d9"],["categories/图论/index.html","851903cead36d9fda186a69b462367b1"],["categories/图论/page/2/index.html","b2f8e564c22f2143ef7aa4821b4b0afc"],["categories/图论/page/3/index.html","a745a12cabdaa77b36517bb2b1f8eef3"],["categories/搜索/index.html","18cb9e1cb5dfe706a750eb02a9e47a50"],["categories/数据结构/index.html","a9b1eb630e93b64e798484be3a568cdb"],["categories/数论/index.html","0e50078331bdccad2cd254eb66e9f178"],["categories/数论/page/2/index.html","a15bec92880425ad45a4be7347e8de8a"],["categories/数论/page/3/index.html","dfda44d3941a25ad2d7c935269595add"],["categories/数论/page/4/index.html","81497980dd7925bc9770ac9dd5965fb6"],["categories/数论/page/5/index.html","a03afc02263b7c03adee03166b417d38"],["categories/杂/index.html","9dfac8fc427625fed31a0bd5a0bf9ece"],["categories/杂/page/2/index.html","8dc3e3088cb17e61aac0cc46f9d51886"],["categories/杂/page/3/index.html","59003dffa52818e20d5095ad616c906f"],["categories/模拟/index.html","5c364db848024649d0134ddac9f70ec8"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","78c9bdd1dd104e9c1020c12442df83d8"],["categories/计算几何/index.html","508f270eb45cbb92c9b271ba0db46be3"],["categories/贪心/index.html","604ef5aac115e7aefd769814a9d387fc"],["categories/贪心/page/2/index.html","e692dab4120bb1317182ee6e73e56a97"],["categories/题解/index.html","d4f15dccee39d709bc19324787811b6a"],["css/main.css","29421ea8811c580a37e14d3708521720"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","837b64581dbdd112ccfa590a58d7e078"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","2afed1f2f976cf46c5ef93e93643b947"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","1b804e0bfdb8c65338c82a27416b5df0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","44667c31e77c0992e019e0fcd0e08b45"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","6fb9e9cb336cb54ba155ce671108cb71"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","13e87c538a2880e9f39c60a9063d0689"],["page/11/index.html","d69161b28fd55170c84fc5362c19689c"],["page/12/index.html","dca9af5466f08141c047253de822cdd1"],["page/13/index.html","c5ad2a08356b8c6bbc828b41e4573d64"],["page/14/index.html","ff1bbc1911fb461371488494b3e728c1"],["page/15/index.html","f16448235137cd09a71f3dc1f323b7dc"],["page/16/index.html","c6aaa50b6c338ab024e96c19bc5fb8ea"],["page/17/index.html","56e9b7c63d5af6f59beba5876f374b71"],["page/18/index.html","739a7af695335feba95c1844003709ee"],["page/19/index.html","f9fc95549a10854fd27c917fb0e16b3e"],["page/2/index.html","2b0b44e99e231e1329125be5f3a20917"],["page/20/index.html","c1a3bafb57f92f8c55983faed599b536"],["page/21/index.html","d67da71644ece5a0fa53dc789bbe2278"],["page/22/index.html","d227a16fd0e8a1079e324d0bc4d570bf"],["page/23/index.html","282493f33b2120132b3612c6611f825f"],["page/3/index.html","ea3a5d3a2ef36ecaa598acb87f2e32f2"],["page/4/index.html","8c91c3c5a1eff5e41e39093ff7f95f99"],["page/5/index.html","e02eeb88bc479698ebc22662b7380206"],["page/6/index.html","ea0fb77c94c80e602dc835f859fcd340"],["page/7/index.html","b505908eb27d68dacbd446542ef6c45a"],["page/8/index.html","24ac9242b463cf090b4b8f6f79ee811f"],["page/9/index.html","debcd305a6c23323304e3d954e09af69"],["tags/Floyd周期检测/index.html","e18f3b9357982158b5dcbf13d1432b19"],["tags/IDA/index.html","63b24b1e9d4aab7e2561d9887e5a6f2b"],["tags/Manacher/index.html","74b4bbda36e288ff4a10d0344ae61e01"],["tags/Pollard-Rho算法/index.html","919e48d405524e16ebd183c1ca55ff86"],["tags/api/index.html","5959301811a9e5fad7077eebfa0b53c3"],["tags/bfs/index.html","7b06c19671302291085c5102e8f70e23"],["tags/cf/index.html","03c98aa80ec4633fba04e2dfa90a2c69"],["tags/css/index.html","d48adb9baa1ca53d03b41cee30b1c153"],["tags/dfs/index.html","2fe8cfbb59b0750bf5a307d281e6f59c"],["tags/dijkstra/index.html","ec251b276638c4fe402d40e8afe710e2"],["tags/dp/index.html","1bfa60e89959109261ad5d5c2b91565f"],["tags/dp/page/2/index.html","116f8070b8ef7792def535607599b6c9"],["tags/gcd/index.html","0d01841ef5371466f6a9159f8ce1d413"],["tags/hexo/index.html","7804b558a4235d5143a52ff6732973de"],["tags/index.html","a73353cc081cf0625506a445b5ad00d0"],["tags/java高精度/index.html","b03af2f3aa57377a33e66fd90b39d937"],["tags/java高精度/page/2/index.html","b54c393d0d09a4b3baabe3c22f7777f3"],["tags/java高精度/page/3/index.html","e2368969cc3d3db6f08d6c1d39c52458"],["tags/kruskal/index.html","eb891fcdbbca1a36afd9751f7ba9a34e"],["tags/lcs/index.html","c683622407d0485d35ccd30b5c906374"],["tags/leancloud/index.html","a8fe2fe4464c4a773d7f328c08b15df6"],["tags/live2d/index.html","dc9a4394c7b31709929a36c716cff524"],["tags/mac-OS/index.html","d7a5597900fbef74ab96d51dbb3f2713"],["tags/prim/index.html","cce45be51192464d5bd3313d26295ecc"],["tags/python/index.html","c1031e88a2b498cc4b7e6f798b43dbfd"],["tags/revolvermaps/index.html","3a6630271fde59bde5d8afc78e8bf37f"],["tags/rmq/index.html","5ee77b4187927d0ac1ca33c1beee1bcb"],["tags/sg函数/index.html","c901b7995a0997285ea51115d0d7003f"],["tags/stl/index.html","decbc534a0e02646c710545d30a5d39b"],["tags/三分/index.html","7de142c438a5c6bf60632d715cbbf171"],["tags/中国剩余定理/index.html","24ee2cd811f1515e28ff7b30bb69e382"],["tags/二分/index.html","067e518888f0a8bc346e7c57d8599d61"],["tags/二分图/index.html","be8aeab248d36b9ac7e97a2fe3be290d"],["tags/作业/index.html","2c65d1b24ca6f98b52769edf4883aa12"],["tags/全排列/index.html","0bf038a592e4725e639a7a112daba2b5"],["tags/分割平面/index.html","01b4a97dbc7818254963f48f3a5144da"],["tags/分数规划/index.html","355863842d45fd803572870419126148"],["tags/前缀和/index.html","f059504f52448e59070f9bf24bd634e5"],["tags/勒让德定理/index.html","a347a0b1b0869de67c521307fd842577"],["tags/匈牙利算法/index.html","a97bd51a9290a4e0c0ceaed0732e3a32"],["tags/博弈论/index.html","4ecc19a858bfb149c73aa56b1bbb88e3"],["tags/卡特兰数/index.html","47671de40974f55759eb44c90e54f736"],["tags/卢卡斯定理/index.html","1d1b89e3eb303b0b1bba6b66ffa6f182"],["tags/原根/index.html","d3e56e50c891dbb2a009ba0ab074dc57"],["tags/四平方和定理/index.html","452df44a8b5b3429daa7caeb3af6292b"],["tags/埃筛素数/index.html","41f4ef6803259ae072e07852ecaad001"],["tags/威佐夫博弈/index.html","fff181d2dfc3ef9b51822f12e91638d5"],["tags/字符串/index.html","1d741d5241672730a2ac808f32b444db"],["tags/容斥/index.html","9c0c78dee05f6d2f055d8bd5b7aeaddf"],["tags/尼姆博弈/index.html","24725d52f5486824ccb26bf353631d8f"],["tags/巴什博弈/index.html","2e509cb56f6fc5c3b4a4622d933f247e"],["tags/并查集/index.html","23ac9f7320a5fd166954bd8e0f128dbd"],["tags/归并排序/index.html","0bdee52415b51e2154b048ea159e8149"],["tags/循环结/index.html","8d5ad907ae5e4a1fcda1609b472b040e"],["tags/微信/index.html","8f1128a298660058d9d1d7bfbeadbb38"],["tags/快速幂/index.html","a11e95ad96c4f35756e413367fec2cec"],["tags/思维/index.html","788f2099757edc81b77ed2c4bdd4ae8c"],["tags/思维/page/2/index.html","c60a5e7de6a5579a34323305aadf7c2a"],["tags/扩展欧几里得/index.html","fd828045ac6401624bc49fcb9411c16c"],["tags/拓扑排序/index.html","6e188fc97e9577f83a89004fd1907085"],["tags/推公式/index.html","3b60d43b6bebbad2de78d2c8044f7e7c"],["tags/推公式/page/2/index.html","418c72589dbf9a3288e45707c8e80bb8"],["tags/数根/index.html","a01a210de4b29caef61305423200a6a0"],["tags/数组加倍/index.html","39303d503a54ae748b89b1e46a30419a"],["tags/数论/index.html","272eecdcf84d202f70965ec10ad100a0"],["tags/斐波那契/index.html","f40947bedbbcc1582519f9e1b5378fb4"],["tags/斯特林公式/index.html","17d13c45e4dd6cee3c813ea07520812e"],["tags/斯特林数/index.html","24c0f45ba652a22725decdd1fc9be375"],["tags/最小生成树/index.html","c1418fdcc4e00163f7091e4dbd826e9c"],["tags/构造/index.html","36d0a9b2c74c6615790c513bb677f955"],["tags/枚举/index.html","c48139cff6d30d1295e30dac89ceb08b"],["tags/树状数组/index.html","60302eff39fbc204a2f686a4d1b96e79"],["tags/模拟/index.html","8903179f773c04026f5f787c43e3b0cb"],["tags/欧拉公式/index.html","05a16ef9755cfd04af580da887818630"],["tags/欧拉函数/index.html","4375c3aec8b92cdec2a174c27413f8eb"],["tags/欧拉路径/index.html","4d00069790642ff43801de27e91e42ef"],["tags/海伦公式/index.html","796ed9ec0dd3bf197e6db7c765b71413"],["tags/生日悖论/index.html","e75e40e7d370302dfcc6c1fc567884ea"],["tags/矩阵快速幂/index.html","0d4515f89321817ff408f0e2a7b0571c"],["tags/离散化/index.html","b893fd0e97431e7c1ac5ac5b6deb90cf"],["tags/米勒罗宾/index.html","c909bd630c32f4a46ed7d1f56823d51e"],["tags/约瑟夫环/index.html","71bf618d0619d52f82fba3b76da63f66"],["tags/线性基/index.html","c0917722fb70b51142167cda959e67d5"],["tags/线段树/index.html","e33b712d88043f2b65fab0d5204a5eb9"],["tags/组合数/index.html","f0435399593813d0ffa40b740d9e447c"],["tags/组合游戏/index.html","d20eadd6bfcb2e37de1929b80d33fbda"],["tags/背包/index.html","67bcd849045051e2335a4ec56f459ce6"],["tags/莫比乌斯函数/index.html","c5e6007e597789ac98a4a58868cdfea9"],["tags/计算几何/index.html","18a2750a641367b8d9813e0177e0b367"],["tags/贪心/index.html","c190d6b74514fdcf3ca12171662dbf6f"],["tags/贪心/page/2/index.html","15333c06138f72351d4daa4f06d5f5a6"],["tags/贪心/page/3/index.html","a96be88239fa300b7a98309f5ce49023"],["tags/逆元/index.html","695158962d888d7e557997e131f2975a"],["tags/阶/index.html","d7aea71dc8a4ead30ec95ae259667a41"],["tags/鸽巢原理/index.html","d96a0e3dec8a66b215fd94451890aa41"],["tags/黄金分割数/index.html","28e4a44683ad0c2c8bff1373efb8b499"]];
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







