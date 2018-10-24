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

var precacheConfig = [["2018/08/11/hello-world/index.html","c1d12ee9c3c6206f4c689a4a329a7813"],["2018/08/14/1995 三子棋  /index.html","b2e6cda377abb4a80713a6678eba690f"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","6a8ee810a4a01e64c3c000cce409ebe6"],["2018/08/15/2006 飞行员配对/index.html","dc5629bace52c9569314b78ab91511b3"],["2018/08/15/D.Tea/index.html","0cd27ee9fd53deb3550529c1ea52ce45"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","f88376b80f2227fa4c054e3e1532de4a"],["2018/08/16/1459 迷宫游戏/index.html","0639ca9abb83384294e4cf948354527a"],["2018/08/17/1264 线段相交/index.html","c85131299ce9c1f3b16f2d1bf89c6f0d"],["2018/08/17/1265 四点共面/index.html","9ba90baf00a30371e470785a85f297f4"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","1b94a326d958c17f04d89701c17f0d49"],["2018/08/17/1384 全排列/index.html","5469345ec445677477774df170c403e0"],["2018/08/18/1240 莫比乌斯函数/index.html","8298a3f3789741d054865a2670cacab7"],["2018/08/18/1256 乘法逆元/index.html","9ba46374dfa4c8e24d57983f3618266c"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","dcebc9d8134080f0ff1db139ced4eaeb"],["2018/08/18/Teemo's bad day（并查集）/index.html","587b5a881fd091620ca2eed59d58d8d5"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","723d593ab1dcaedc5e65ca512e58ae00"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","6f8d631de5680690a32c3701d0b1e624"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","27124fd2d3649e8c67b4747240dd3709"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","6651217419b380d21aa0fe3ab3e68933"],["2018/08/18/hdu 1856 More is better/index.html","8015e4a8d91475715d5416e2cf592bdb"],["2018/08/18/poj 1182 食物链（并查集）/index.html","c2f328599b5644c9c918bbb05d1b75a0"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","045ad93a6597b76d5ca95fac2930d73e"],["2018/08/19/Minimum Cut（读题。。）/index.html","9430af521ffe89c842020ec1eacac744"],["2018/08/19/Ponds（拓扑排序）/index.html","d5fc4173e2b9afb9e8ce60891c92af5d"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","8d17a62c2bdd0dbf860aa10a097a95f8"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","d7d359e07085efa1259adcb992b88a69"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","98c6393c5d90451cf7420448896d0c35"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","117123e4d0efb15cebf210be8ba9248f"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","f1bdf4000c56ecee063940f9042a8384"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","977670b9810b29b8816efcdbc7fe0d26"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","1932dbfa6992977e518e8d68e194aa3b"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","7f4ec935bba87484db9a21f816c3f1c4"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","6cd13c757654161ee7d321e95afae9b8"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","52f8e0cfc8b465b31035647f2c461875"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","ebb108574acf527e172b24cd9d8fb214"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","fc440f6901624bd8d0268eb2e103a8c3"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","c80eb321d3d2ace52e3cd0013a2ee3f8"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","2d675a9164175acb720875c40ed93040"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","969fcc80f5ab02ff1990a1e4ccdc76a5"],["2018/08/20/Pawns（博弈，思维）/index.html","0f4ca0b8e6fdd938f78d82396af83456"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","03be6b05311a34fdd739d6a005bc6e17"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","a2deff8393dbec9c2dc7539b4ef1a215"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","0a9a832b74d50c694b38fd03f1c99ecf"],["2018/08/20/hdu 1564 Play a game/index.html","1ca2757fd8bebe6c1392ac039d8b37b8"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","168f0829122bbda1136c312ae8792d46"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","400d545c3fcc9c579c10200dc277682d"],["2018/08/20/麻婆豆腐（思维）/index.html","96f5f87025d347937b9846584b4ab92a"],["2018/08/21/1212 无向图最小生成树/index.html","c43a26d60996451ec71cee4088dc66b4"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","7b0a99658b5dbe09d0cb8e29761d6b07"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","35f3804bd9aca82634c71ed2a9baeff4"],["2018/08/22/1079 中国剩余定理/index.html","da1cbb5d7389a2408bb095774ebef0e4"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","7d874935de71767f5b78b8f8ecc1ba97"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","89c5dca51085e20b44f4a8ccb1b414de"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","3d99f4b99abd6caef90684b6fec5f531"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","d8beb4696524735af0e3b2f564969b87"],["2018/08/23/1136 欧拉函数/index.html","8fae98b4f2609b1e5a022007cb4c723d"],["2018/08/23/1137 矩阵乘法/index.html","ef5285871537627e41891db10abd7b1e"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","d4a525b2ee004364193fbddeecc1f125"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","6ea7e1121638761612fdc990e3a7f3c7"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","16f142635d7c182c065a5431e77e648e"],["2018/08/29/hexo4/index.html","2d449d8453b38c7ec740a588eccd1821"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","dbc314b4572da88ba9eaeb5ac341a7f1"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","a7cf23494761b15cab0f61a3e551d081"],["2018/08/31/A. Too Rich/index.html","1cc4b48d7a62756b2728a86c317c94cd"],["2018/09/04/C.Catalan Square/index.html","3313779fae7b0433be7cdb0abc542b85"],["2018/09/04/hdu1002/index.html","874a9b91274c200f75fc8c6d3b3102ae"],["2018/09/04/hdu1042/index.html","9a3699a3ce46c7116fda09ffbf56b2dc"],["2018/09/04/hdu1047/index.html","3f9fad1eb8690b3a32194ebe448d325c"],["2018/09/04/hdu1715/index.html","666748cc9b1022b9217cc4764ed1c765"],["2018/09/05/hdu1063/index.html","79cd6f77381e88e5f69ad14ffa647110"],["2018/09/05/hdu1250/index.html","a4fc52309bd54f829d28b4f00fcd3df3"],["2018/09/05/hdu1316/index.html","b347c5765c62c3fff5418bf91bb1b565"],["2018/09/05/hdu1753/index.html","0e4b3028bced7a69f3e92051f5c5bb99"],["2018/09/05/java大整数题集/index.html","e9b62942a6e18a01da728351d35e9c59"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","6a983588473b161b58992e1109f7f732"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","5d755dffb7b053bef565e8521973f314"],["2018/09/06/hdu2054/index.html","97eec7a0195874bcc72a2a48f58721d4"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","1b377f29504fbfa9744c3c4415e4e41c"],["2018/09/07/hdu1212/index.html","6b02b8705c08505cdefe2c8cf3143604"],["2018/09/07/hdu5050/index.html","efde45b7af3fff2f7b99b625beaa4066"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","c908f7f9e20458963b5120a72d0ebd61"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","0bfa87196007440b276d9c2c05e6821c"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","2a4e01fa6e0d5fa7cef384e546ed3e0d"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","496efde483edf5a4fcdbb97eda83f75b"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","f59d4f397656c85d2d31578d077b9263"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","fed0528bd2d5bb72093915b12f060e96"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","d091f10bed7f8f8ceb2c4f14188bc139"],["2018/09/13/Teemo's formula（推公式）/index.html","9dfc59dd4c0269c3b1475fecd0ee3dda"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","bd7769363d06802bc43720b1bc0e1878"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","6c1a228255a2e8fb9426e9244151a791"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","fac8f7a42de005d80249da53327be9d3"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","7ade13a38e88bebbf2fc30e90159b798"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","65d48ce12d14abf45609f40a1908b4b5"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","085949673e0121c2e90604985c37f57d"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","1dc94ae6d3b808030ff9d9c1e4430ddd"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","1909f850a593096cfe4872ea4a413e01"],["2018/09/16/1118 机器人走方格（组合数）/index.html","2f01c0c0daf9e69374e435ec06873d88"],["2018/09/16/1134 最长递增子序列（dp）/index.html","f70750d4ac56c6a0bc195722041597e8"],["2018/09/16/1135 原根（原根性质）/index.html","af06cd181f205f86b797692d3d333201"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","527f8bf2757fc73c4b7885cb2d19be40"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","f52000a3e039e0e4f344298b5ad0ac9e"],["2018/09/17/1073 约瑟夫环（递推）/index.html","792d566270516964db9cc207c306988e"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","fb13ee1cd2f476d5e1ea27a06b61b482"],["2018/09/17/1085 背包问题（01背包）/index.html","dac2cbe64d158028f64b069c0d5a4aa7"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","dc63e3d9502faa2ebbd14309ef34716e"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","4ed21a5159e55a7ebfb9f9eb1b173daf"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","646167d0e0c377e2e7632e614f6ecaeb"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","d52a674f0c1ffa715a90f36a9a70a3e0"],["2018/09/18/1027 大数乘法（java大数）/index.html","c3e0dddd0fba22b019da249da6e04513"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","edf08c121f8d83b66f1b0da24163f46b"],["2018/09/18/1049 最大子段和（dp）/index.html","1e4aa0ef3ae14b074426160befc20768"],["2018/09/18/1057 N的阶乘（java大数）/index.html","32d12205559803fc33a69081e4704fdd"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","a5ad0728edcc350cfcf7a4c7978fb51c"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","d9583cb66e5f9eff7595f4b71417c216"],["2018/09/18/1072 威佐夫游戏 /index.html","24e9671b43dbe3c6dbb203256b701492"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","ea74ba1230406aae8730ad860a44995d"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","3142a996a756ada4b690d7f0ce252b53"],["2018/09/19/1000 A + B/index.html","d3e10887f0d6753a19832e93d36de13a"],["2018/09/19/1005 大数加法/index.html","90a7e1400027d95dd9b601b447c8166b"],["2018/09/19/1008 N的阶乘 mod P /index.html","e2f4d86686322230cb708bc83f9a92ea"],["2018/09/19/1011 最大公约数GCD /index.html","0b67fd04f873b490205a5933bcebbffe"],["2018/09/19/1012 最小公倍数LCM/index.html","fb6e6fbfe25923345e50d9e23de2af68"],["2018/09/19/1018 排序/index.html","91c89c9f8ef02dbd6930f0046a59f2ae"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","3b61699c3f7ade6d4ac0eee70a426c6e"],["2018/09/19/2133 排队接水（贪心）/index.html","44d29f28a3ba19aaa780135a16331ef6"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","f829aebcdd503bf7d07c10635d212bf9"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","5ad33256ac0f207b62d7b628e19a37fa"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","d0aa6e7fa96ca6474c01c95395bf6e14"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","4101b46c6ac00d9998d1f90426724bfd"],["2018/09/20/51nod 1717 好数（找规律）/index.html","1b68c8e08bddc6412569117b9c9c3a44"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","1390e555f37a0e8d3f01c28d77cddb98"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","5ae62d02ee4c6e83dbaed71ad343e318"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","7ca7f2702727eae829c9c52dd1ba30b5"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","9c78ebf142dfaa063a458ee341d7b95c"],["2018/09/23/51nod 1791 合法括号子段/index.html","f55cf3a54e49f8fcd2af76bddecc94a3"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","49435a37f6c101ff63583122bce88263"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","eb69463c1d8bd581ea0a605e866ff18b"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","d9b8bcfec2586e1337d0228484622fbe"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","2db6a0be23230a5b4d6c725f19beafc6"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","dcffecd6fa7435e3f1f33d55fb639362"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","48cfed5f168522137be959876dd70ac1"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","d721cf0c868e2ee8d02158fb0f08284c"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","7a70daef6504b7a55e886d79dde11391"],["2018/09/29/51nod 1015 水仙花数/index.html","a5674249fd7c0a1a05931b2639abde18"],["2018/09/29/51nod 1080 两个数的平方和/index.html","c80aa26cf1d6661625673decb84e50ca"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","893b7587e134ddf0f8d8c31c4ee60bd0"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","46f948a0d0990c32510e4c1518157f8d"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","898df98faa0426390056bcd241a90148"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","d3adeeadf3607ddb20b1dd6e64cbd7b9"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","dcf16501ebc443e695d73d799ce6158a"],["2018/09/29/51nod 1182 完美字符串/index.html","68a7d0b23c1668073fd9b2d62880ce50"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","93aa753ffc55f5e07a14ac39b0f6814f"],["2018/09/29/51nod 1283 最小周长/index.html","401383ffdde317187122edc08c6bfecf"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","723f2147b83e764b573ca66d0caa9d7a"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","c27fb8d5b47b65d278af6dd81f5ddd5c"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","b2f71ede770995c289c5d309a222dbba"],["2018/09/29/51nod 1344 走格子/index.html","2526d3999aea1d9dc26043f0cbbdba6d"],["2018/09/29/51nod 1347 旋转字符串/index.html","147f0661102fcb48417c9a5359a87b02"],["2018/09/29/51nod 1381 硬币游戏  /index.html","69a4f943f405fe6aca07f3a5245e3b59"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","da432bd650c2d2693f8430df6643dd30"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","24519953cf149cc308434bd9382e99eb"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","1f9bc24646a0cb9a8109bc1fa642418a"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","3a47e9146e27b832c0664baea86875f6"],["2018/10/01/51nod 1596 搬货物/index.html","0a1fb5108211d757277124e3786371dd"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","4450dfe7c6c1de60c1eb4eb2834cc8a1"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","2a46894707d0557c49cfc4c064dd5670"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","74cd7956e71055345aa58392c406b0bb"],["2018/10/02/51nod 1521 一维战舰/index.html","8156384f7021d784f184633d80aa0fd2"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","a0ef12c0ceb205fdf8e6f237f0e1e615"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","97aab25d3a9f44c239b0ec93f0c427e4"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","8a4303d4cf9cf1e5aae8f8bd75e1bc45"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","600c2df71086e76ee960ad40b21ae405"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","33e76a9d3bb5ee929282b855875ff16d"],["2018/10/03/B. Pocket Cube（模拟）/index.html","95e8447842d6699c1978dc7c4530b13f"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","1468c5bcd9f32e00d33cfb1616b59d4f"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","e18efa3e09a4f873b0da2db289c60c00"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","c78b697633a02a2724b1625078dfd3ff"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","d66ab23ccc1556044fa0272a04d0f0d5"],["2018/10/05/51nod 1138 连续整数的和/index.html","3f2ed1b2f882bdf478deb44dbdd8c569"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","eb4e0f01d67dc2a8e7ad76b66658ca3e"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","5b8f14a984126f4a25c5c49889efcad3"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","95d75e384fe307727714795694dc4c0c"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","647ef79709d4a0be0e333bbf6c466b9a"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","10db1debd9213cb87bf3cb2f7a9d4f43"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","8272160b743c88fdf1177d21f55b6dbb"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","94c9302c122deddd444de12d77c9bb9c"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","5cea4c9a403b2335f8d32a67a25b7e00"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","fefdf3e8837d16fe2d23becbba75e799"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","7c175ad92c1d20bc7fa2d54fea4ce382"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","ed908da9bde8dd0b51d687ddf2622cd1"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","b3642392237ca31dd493f062237417df"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","dcc95b892b818a68f2c002d973256ae0"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","a438b75e1984a8b0e6c0ef195dcbaab8"],["2018/10/10/ural 1073 Square Country/index.html","abfb8fc8ebc717bdb0029182eccff91b"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","f6ab6d0633762a86015bebd814414aab"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","c9733f3271794c08ed4ef942d7fcd5c5"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","2d22515bf5f720682f757e15054f408d"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","cc3f772d8a4a77c74c21f98b09057131"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","a840cf7992aa7f7e9dd59f8b95f03f34"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","4cdacfee415a6c50c74a98a3fd400fb0"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","65057d6093ae8b5749435476050244a0"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","e6a29f3558ea7f8b9f09586dfed67df2"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","770f3eb8313395e796ac858610b8cabf"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","6de47e9bc1c206303e6cc976c94453ec"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","14e1f4b15a617fd5c0622cfcd7a2670b"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","318a5e5ffa955fc1487f9e2643cd9e69"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","598783aa49947461819f52dd8f3dd32b"],["2018/10/13/51nod 1315 合法整数集/index.html","99b2a678d357c9b04b764d7ae633de71"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","aa51bf78bfcfcfc937cbb4cb108fd36f"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","44476d86a47bc62decf5d9913380aba6"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","76efec74bcec6b59ab4dbd635219195e"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","fecbc635f6e3a6cf23bedc52af6668d8"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","64d8dab168a88d2c7b3ef35a33c88efc"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","c904d6b2543d7098aabd4ef9a6c65437"],["2018/10/16/51nod 1102 面积最大的矩形（单调栈）/index.html","9b075903393102b2292b6538abfdb13d"],["2018/10/16/51nod 1835 完全图/index.html","110c779059bf50b9fe307a51c8373c41"],["2018/10/17/bzoj 1085 SCOI2005 骑士精神（暴搜+剪枝,IDA*） /index.html","024c845e647800f89d4b05b951e5e481"],["2018/10/22/Java第一次作业（素数，日历）/index.html","b8fd2c533fd30b9496076e0ed9b36728"],["2018/10/22/Java第二次作业（线段类）/index.html","82d920230a15c6fafb9399033651ba79"],["2018/10/22/macOS下sublime3配置c++环境（支持输入，支持c++11）/index.html","40ef61a87e9376af276f10158ea02517"],["2018/10/22/数据结构第二次作业（扩展链表，双向循环链表）/index.html","595aa2c2cd5f25e69c5661e18f2ab5fa"],["2018/10/24/CCPC 2018 秦皇岛 I题 Riddle/index.html","1f04679a71a879e45e1ff7e4328ba007"],["404/index.html","d0799b8fd1412a41b31830abb6aef65a"],["archives/2018/08/index.html","3d26ab489ad83b03291ebb61de9238a4"],["archives/2018/08/page/2/index.html","d5890c892e11b269510033e98362e782"],["archives/2018/08/page/3/index.html","aea0fadc321809635dba7f04c141ddf9"],["archives/2018/08/page/4/index.html","606f4453ff0f0c83596c4d6ddeb16004"],["archives/2018/08/page/5/index.html","779ed0e2383ee9f5d6217e9914a57fd6"],["archives/2018/08/page/6/index.html","2a6e1618f8ffe429e4d10ad3007ec517"],["archives/2018/08/page/7/index.html","6a3c494a4bde3b11fa6acb22696202fc"],["archives/2018/09/index.html","bc8dc1d2eb59b313f70ad68fd68a1fbf"],["archives/2018/09/page/10/index.html","6428aa216c33e82dbc78d5497fb6f323"],["archives/2018/09/page/2/index.html","5b1c04ba0f045c7b41e2c48763234629"],["archives/2018/09/page/3/index.html","de27667135491dbd89f3596a25002c65"],["archives/2018/09/page/4/index.html","c39b3741ba34a99099da9044ff3aae0a"],["archives/2018/09/page/5/index.html","e1401c76b44365d08aea4ef2f634ef6e"],["archives/2018/09/page/6/index.html","8f4ed1c3aceb09c23d99c3f3e353bfd0"],["archives/2018/09/page/7/index.html","37aa1b79664838775301758a8d8d3ed3"],["archives/2018/09/page/8/index.html","c1e9ca4193a55917234f22c0cf8065c5"],["archives/2018/09/page/9/index.html","1b9e9cb50b86cf5a798f7f55e93627cf"],["archives/2018/10/index.html","5425f881739764e138ba5121896ed30d"],["archives/2018/10/page/2/index.html","ab714c82bbb2b903c2b683efac3edd77"],["archives/2018/10/page/3/index.html","8bf606c5a48873147e0fa4009e562501"],["archives/2018/10/page/4/index.html","4045d41674e1c90de37b2a0b28e5191d"],["archives/2018/10/page/5/index.html","814222cd10a4d1cad790af8a47947bb4"],["archives/2018/10/page/6/index.html","c779bcba71055957c3ef37c2a1fd1e42"],["archives/2018/10/page/7/index.html","e5baec8a1d47166f746dcf26b3384d49"],["archives/2018/index.html","3ec27d7163b32e511cdd28e7c232b912"],["archives/2018/page/10/index.html","87c71614f0cbecfe3fea1b538d265757"],["archives/2018/page/11/index.html","5e4f784313c4f7c1db13b916a775eafe"],["archives/2018/page/12/index.html","4209e7864e784f61614788d3e0d9bdba"],["archives/2018/page/13/index.html","79eaa36f050b5d525fe25ae14f6426de"],["archives/2018/page/14/index.html","c224e5513090c20fd081f89e5d6e1658"],["archives/2018/page/15/index.html","7c48442db2ff6707c1103b8f07df15b9"],["archives/2018/page/16/index.html","0ac08a2d4d7d14d4aaacfae640b0941a"],["archives/2018/page/17/index.html","10715e86fe5e5997c32b7fe84eae5673"],["archives/2018/page/18/index.html","f14986a362d997859af6bfef6de08782"],["archives/2018/page/19/index.html","4a098afbbeaae38f4b0ee9dce0178702"],["archives/2018/page/2/index.html","012c813331af1f86ae4d04f151f3cb3a"],["archives/2018/page/20/index.html","0f6034905cc24b4c4f845e6217fefb02"],["archives/2018/page/21/index.html","f80611ee9819b17a8b3f4e7691ea1fdf"],["archives/2018/page/22/index.html","dfe2f1e47efad0a9b0ca18339a6535f8"],["archives/2018/page/23/index.html","9bbf80346c134edc120aaa1a138b22a4"],["archives/2018/page/3/index.html","ad63bd6b7d802a044ffd926626da9847"],["archives/2018/page/4/index.html","d11a0c2e1ed7504f8b7162978af6cee7"],["archives/2018/page/5/index.html","d1b4de8cb95134b898f2e6d95dd09184"],["archives/2018/page/6/index.html","3c300b3ad7df9662497779a9fe1328ad"],["archives/2018/page/7/index.html","dac60aee3dda06a03870f79e4b984fec"],["archives/2018/page/8/index.html","75590610cfe5de9475dcfde78e2f9eaa"],["archives/2018/page/9/index.html","e90505118ebe41902fdd2e4000daa31d"],["archives/index.html","9c111c6111a1d2ac122081fd13c25438"],["archives/page/10/index.html","f9e4ad3e6a0edcbf105cb0b601a2ce72"],["archives/page/11/index.html","c5843e0332c6c69dd5eadd52a58a0ab7"],["archives/page/12/index.html","4b33d581bc88bd6b2f77b2eb0ecc198d"],["archives/page/13/index.html","88fb0d6162d18ad4845338a5191cd5ba"],["archives/page/14/index.html","97ce1b0ed28dedc5f610c070f897ab40"],["archives/page/15/index.html","74bbd67d776a5f92f5c2b7daec1460f3"],["archives/page/16/index.html","ec1713212a18fd7b2b4f7684a297c265"],["archives/page/17/index.html","435d5571f84bc7fe644b67428d8613e7"],["archives/page/18/index.html","593e6ed826e3d26996456e50ce976d73"],["archives/page/19/index.html","ffbf1a23324aef2965df801cf060cd01"],["archives/page/2/index.html","d89f2a4c9cfb326ff6b858c663a365ba"],["archives/page/20/index.html","60ec4aec6381787bdd1864818f47a1af"],["archives/page/21/index.html","1186e2b8384595e558bbc378ef578f74"],["archives/page/22/index.html","adb5d8fa8d2758328b6ad9f76a30411e"],["archives/page/23/index.html","88d5aa823dffe8f1a103f9e8178d2454"],["archives/page/3/index.html","be65485b48b09f4bff17623b7c6e30bf"],["archives/page/4/index.html","0de8dac9752bcb7fc994e61d2f781a2d"],["archives/page/5/index.html","38caac24855ef276f611bfc831e54549"],["archives/page/6/index.html","2612cde7234fbb8d383e147e7ef759cd"],["archives/page/7/index.html","86b00d01087bed70f45a0e1b91e78341"],["archives/page/8/index.html","5a0ccc3e9e16f71fbdb4b5bc8b983086"],["archives/page/9/index.html","9fcf4d5541890c1b75bdae6ffb11c289"],["baidu_verify_DfMf5XqJUb.html","ad1589cbc2d78558f2b90fe0f9ccf94e"],["categories/dp/index.html","1961bee55cdc84b5e4454f29283b59e1"],["categories/dp/page/2/index.html","cb6e028290d57ed4c7545bb03be96ca9"],["categories/hexo/index.html","a529fe404ab47fb34126b822b2e2d202"],["categories/index.html","3c1e6d4176462caf9cb17a82639d1126"],["categories/java/index.html","f4e18c060d300afaef854ef877be0bd5"],["categories/java/page/2/index.html","feca2758b0289b2a0882cc6c51278696"],["categories/java/page/3/index.html","4b051af903201e811dac07f8fe40a159"],["categories/love-peace/index.html","1edc92982eb7569554f17d37977ffee6"],["categories/二分/index.html","1f01e5062639d76332d06c8c7c053d7c"],["categories/博弈论/index.html","ff80bcecb6dcb6ecb3ee708542b53ced"],["categories/博弈论/page/2/index.html","5f19aa50a563e25c424f7a0e663b6c75"],["categories/博弈论/page/3/index.html","aeb9dfa81c90c1112e188348102c99c5"],["categories/图论/index.html","b90e408d70411496f3f5af83cb9b1a4c"],["categories/图论/page/2/index.html","bb53faeb037daa315b617b5a95483c41"],["categories/图论/page/3/index.html","242f4c71df5f75eba701e6964b33f528"],["categories/搜索/index.html","fde553f34c399ed039a2703aac45252f"],["categories/数据结构/index.html","7c7690605c3f78df53fad25db5d3a295"],["categories/数论/index.html","a753e2fd0aec57e4225d4baa1b4f3e54"],["categories/数论/page/2/index.html","d1327a384ae9a24a1dcf47f6d2c88faf"],["categories/数论/page/3/index.html","94c367882bb88e326113368ad45c2fb5"],["categories/数论/page/4/index.html","e5f9c893e5d1a691a672a377bc3efc46"],["categories/数论/page/5/index.html","55dd7b88233a6d3f5016308ea8996b15"],["categories/杂/index.html","ecd0847d8d7cb75ecfe2cd6345cdec3b"],["categories/杂/page/2/index.html","c445822b05315c9e66dd034c954bea2b"],["categories/杂/page/3/index.html","065a1fc99a90b8e1b9ee66021ebdc2f5"],["categories/模拟/index.html","4eb076efe5a8371f6258817d2486647c"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","d0319fddb2507d239d1ee7858a10c400"],["categories/计算几何/index.html","25c56817bfe2f11e03a8da808c982ae0"],["categories/贪心/index.html","c479a04815dd050e4575610f03781e9b"],["categories/贪心/page/2/index.html","53088198494c3296b2532b7231e9b443"],["categories/题解/index.html","e386b59c3f44b8f57eaa20593c47fb33"],["css/main.css","daaee02d56102206fd30c226acd476ed"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","9784788f874d4ae8d7f72e87cc0b1d79"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","51aac0e385921f266ca9902794452086"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e0aae8641799895705fc28324fbb9488"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lemu_demo.html","874c58af461ed1e2d8d891d3bc58cfc2"],["lib/fancybox/README.html","bc0b54f67cd12998af810a71b96b52cb"],["lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/pace/README.html","d795a2ee3314455225adc310536afb38"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/assets/textures/default-costume.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","898f366726896e36886af2b2d0712cf3"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","fa0ce591f68f37eee5dc1ad36b059cfb"],["page/11/index.html","e4cd60e736ab30287138e66b447f419c"],["page/12/index.html","5df523869b7cd8ccccb8854317b5580f"],["page/13/index.html","9042208d42cd51bdb35c7aa125f1e420"],["page/14/index.html","47c8a27c6f74cdb8aed8638f7b822135"],["page/15/index.html","c0d36ec55db9ad25910d2895275562cc"],["page/16/index.html","aaa948ee1d89d2f39ffa8ea862a84c1a"],["page/17/index.html","7238fe6f91c645372bbcb7bdd96a2357"],["page/18/index.html","a1eba99c82e0a01e992427263273b926"],["page/19/index.html","ef668e1eb8501746de05ecb704e57a08"],["page/2/index.html","68cc9d0e6af5a9110d1c38010534f18a"],["page/20/index.html","3fe5e966e7dfb3449cf48667f8c38516"],["page/21/index.html","33536f1e0da40f212d473a9c98321e87"],["page/22/index.html","6c75fd5d3210a994455afe5605431e3e"],["page/23/index.html","88fe1f3d5d96d78bf4670109d7698107"],["page/3/index.html","259f1ca61c80c7b9f168fcb0ff1b3227"],["page/4/index.html","bff61cb34323964d4dc7bb492fb64f4f"],["page/5/index.html","82226da583087991185339aa3bac0e87"],["page/6/index.html","a66a396d084c2e6ffd015b4040df765b"],["page/7/index.html","6439bb311f39cfa23fbef2a7c669feb3"],["page/8/index.html","c4efac6bbde13825518ceb565974ae35"],["page/9/index.html","cbe73b92b0266bab0fcc7bd3c37319d0"],["tags/Floyd周期检测/index.html","dcb772342f5402460516d9fe5d6789c1"],["tags/IDA/index.html","bd0fe38fa5cdaee7e6b8beb13030c865"],["tags/Manacher/index.html","5fb0a164326d0d208007265a5e4a5843"],["tags/Pollard-Rho算法/index.html","2de80f3f138e1d8907aeceff0e01249a"],["tags/api/index.html","4571004a23917a812834096eba44293d"],["tags/bfs/index.html","ef53ae0f13791a1d27041de50abe48c1"],["tags/cf/index.html","3dcce7f16214e5d911b1e6b6151d035c"],["tags/css/index.html","ca32c8a152bf1cafd873a02d6b8bea9a"],["tags/dfs/index.html","3d57be2cf39d3be53b316a6325f6e0d6"],["tags/dijkstra/index.html","8fd69ea0ddf82dc472422bbf19d21495"],["tags/dp/index.html","ce45777160e0fb1dcfa1973e26e2f94b"],["tags/dp/page/2/index.html","f578724c5c144e4e131d61ffe3bc3c53"],["tags/gcd/index.html","766d2af9533cd34c31185e4a0d7212df"],["tags/hexo/index.html","1e65494b518667c0513256269bca0bb6"],["tags/index.html","fac5812228d18170695aa4469296b637"],["tags/java高精度/index.html","46df3fe8e9fd3c15e81d314a3ccfe085"],["tags/java高精度/page/2/index.html","96e778ad2b12e0d5dbc6c4b4873f5020"],["tags/java高精度/page/3/index.html","771f46c28d2aa2ac527d9591d51f321a"],["tags/kruskal/index.html","0492b50c877767be0a53b8e3d0e77445"],["tags/lcs/index.html","6691471224b487294a4de1001647b711"],["tags/leancloud/index.html","70cf39ad2051863bcbd3e39da3af8390"],["tags/live2d/index.html","e24d9047c58bc2565ff3f3c7d07308ee"],["tags/mac-OS/index.html","cc29b7d9f6796c549e9e6d9f4600220f"],["tags/prim/index.html","6133b49437d7a4efc6992f9357fc0c30"],["tags/python/index.html","2f7dbd0b0148916c01c6ce8db422ab36"],["tags/revolvermaps/index.html","9561c87853c2ff0d7bcf4454aed4e273"],["tags/rmq/index.html","7cbbb2e572b45c724f1bacc8318abc99"],["tags/sg函数/index.html","c16cdeb73c98ef82155fe61db1939060"],["tags/stl/index.html","c5f0b98f54e1093dbfbd5dcab5bbfcc4"],["tags/三分/index.html","73126ff8a20569853c8f29e58c85fe5a"],["tags/中国剩余定理/index.html","40108280f0da9844c61972d7c48e837d"],["tags/二分/index.html","57591d5eeb003a0315846511ca4c1344"],["tags/二分图/index.html","45ab31ad80d1ef69046d095683bf7c7e"],["tags/作业/index.html","dfbbaf89bbb8c206d4dd4659bf38f833"],["tags/全排列/index.html","a1856cad4d10191799f32e6cb691ce0e"],["tags/分割平面/index.html","d7f2e28f4a3a4ab73210c194f077819d"],["tags/分数规划/index.html","5ca1d857cb3e7879eb751308206c3f7a"],["tags/前缀和/index.html","ee79323dc54cc440bde2a96e7f44ca91"],["tags/勒让德定理/index.html","576b3267fd33ed256643ce916a6a013a"],["tags/匈牙利算法/index.html","4c7e24a69c9ad0403ac4632b6a629237"],["tags/博弈论/index.html","8a2c793751a7321b177231d368065843"],["tags/卡特兰数/index.html","7f0fa085d30db91def16620e3a439fc1"],["tags/卢卡斯定理/index.html","7b862b85f6ec64ba92deb90706c6b07f"],["tags/原根/index.html","842b78f4cb0ee78e7061246ada635391"],["tags/四平方和定理/index.html","12b55ba207babdf82caa450fbd7eb5f3"],["tags/埃筛素数/index.html","5ef48bdf6bad87fa33d3f394a9f49a88"],["tags/威佐夫博弈/index.html","b47d5a7682d3beef720f1bee8b4b0a5e"],["tags/字符串/index.html","a63e6d5b0574f89b3a05587e5c4ae29e"],["tags/容斥/index.html","1090a0a64940393b3cb51b1ed34d4695"],["tags/尼姆博弈/index.html","26ddbdb9b29898cc2ca352858b95e490"],["tags/巴什博弈/index.html","15ef5827bf241dda23de0ef287cd947f"],["tags/并查集/index.html","fb62072c7596ad434ba3bbcbb8f2e587"],["tags/归并排序/index.html","c8bc6cd7228b47781588f72fac1002d8"],["tags/循环结/index.html","096adb28f02011db4385379070120294"],["tags/微信/index.html","37699e2d6d922ba94bd2caa3e9369eec"],["tags/快速幂/index.html","d5fb4debcd8f3a3680b52a9160f30387"],["tags/思维/index.html","bd397110a649979e5ba2069344576f47"],["tags/思维/page/2/index.html","55a29a61144da47b34a51e101f3c7be9"],["tags/扩展欧几里得/index.html","a5102f10ba969d402b58bbe185073cff"],["tags/拓扑排序/index.html","87bbc5df68357ab009fc531ea6f8e85a"],["tags/推公式/index.html","c2bf25a1ba0dc2a2d720d1e587de6548"],["tags/推公式/page/2/index.html","c42d156036fcca0685286c1199a85577"],["tags/数根/index.html","ee4e5f91ee861cce7075c59e5f0c06a9"],["tags/数组加倍/index.html","c96930fc823445d20d82e3bb69103fc5"],["tags/数论/index.html","ecbd25340f177894e03501d1ae155391"],["tags/斐波那契/index.html","7b8648c8c5d4cee66d671ce551ef6dc1"],["tags/斯特林公式/index.html","9a270739ada49af7c2d88397b879ba63"],["tags/斯特林数/index.html","874807cf5763ccaa9e2ce3690a3ed011"],["tags/最小生成树/index.html","7c726dc0d4c0c242b13e40f1e983ffb1"],["tags/构造/index.html","4aff03c57b1e2d6d819771e4636c607f"],["tags/枚举/index.html","764caec6f00a23fa52d9aff9b4ffafba"],["tags/树状数组/index.html","f56c279125a4dcb2c400c743b0ac40a1"],["tags/模拟/index.html","e4d5f3a194d5093e67409ce107bbc8e5"],["tags/欧拉公式/index.html","74d817c0ebe260e124bdf0b3b729e6bd"],["tags/欧拉函数/index.html","c44d7b502ef4d12e15fca4d277f53f28"],["tags/欧拉路径/index.html","e17625609f2de6bc1641f39b9c89b592"],["tags/海伦公式/index.html","45af404cc759b3959b2cc6a3c57b08de"],["tags/生日悖论/index.html","4d8edce90f9f917e242836fab747be7d"],["tags/矩阵快速幂/index.html","441150d5917fa024fe74760041e83ff6"],["tags/离散化/index.html","e702b9dcb0799d487bac536115d7ef0a"],["tags/米勒罗宾/index.html","5b3e59d5d1cebd819a5245e7f2515749"],["tags/约瑟夫环/index.html","f4efbbf530debb866f74476e33195675"],["tags/线性基/index.html","ede8ed0cf96fa282c5558f8603013c23"],["tags/线段树/index.html","0f9d9a4731bd80abeec5a7588f272224"],["tags/组合数/index.html","eee621b655ee10293fbc80591762d618"],["tags/组合游戏/index.html","8cd2b4d2fc70aad948a076fce91a0369"],["tags/背包/index.html","0008024a4ce1b5dc6336296758362792"],["tags/莫比乌斯函数/index.html","8b719917207acea697ca00256f699165"],["tags/计算几何/index.html","632ceb4bed4d52794fd7c9c33d921cda"],["tags/贪心/index.html","3639cdf8402a07eabda21dd155a77937"],["tags/贪心/page/2/index.html","4aa09b1451491de1b7827804733ec121"],["tags/贪心/page/3/index.html","50bb90381afc58368a6636095613e83b"],["tags/逆元/index.html","6bcf39ccdec02659164049b6d3f458fb"],["tags/阶/index.html","9ffdc0cf7757269b2ac8e23c034e3bea"],["tags/鸽巢原理/index.html","808e2b547f1fb64fd900691ffa87ba57"],["tags/黄金分割数/index.html","32d66832ce6b0681b571ba1f5a654e35"]];
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







