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

var precacheConfig = [["2018/08/11/hello-world/index.html","b32dd4d69135f6f487cec37ddb29ef71"],["2018/08/14/1995 三子棋  /index.html","f3a55cf70b9e94fb431e54d30477bc4a"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","68cb0becb59d5405312160fc0956fc1c"],["2018/08/15/2006 飞行员配对/index.html","84655ae5e7bade8563d32632a47717a3"],["2018/08/15/D.Tea/index.html","7b4244914da33b88bc4910a6120565fd"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","8edd4f94b6dae26560cdeb3cc92d96bf"],["2018/08/16/1459 迷宫游戏/index.html","17a1844e5377f3eddf1ccd3ccbb4eccb"],["2018/08/17/1264 线段相交/index.html","a1b82fc05cdf6751d3a3e22955cd65c4"],["2018/08/17/1265 四点共面/index.html","00ae2fe04a034dce2b4a6e3e1199025f"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","b3e63fbf82e382b7ea75e13ce89aee3f"],["2018/08/17/1384 全排列/index.html","a1be85b208fe60002d20d5972372bc5d"],["2018/08/18/1240 莫比乌斯函数/index.html","abf0804d818fcb79095c8a495aabc56a"],["2018/08/18/1256 乘法逆元/index.html","31d00ac181ebe47a887402b0004f9489"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","01a788d6619426225943b4e2e70691ef"],["2018/08/18/Teemo's bad day（并查集）/index.html","d4548d941366c98ce2e1fcc311f04059"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","92c69bfb604914a913de2c12dd95fef3"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","9c78ad6198a53cc9b298009a6db34d76"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","05080b95a0084e1e56340844a740beed"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","3d4e63c798742155191c0d55479287a0"],["2018/08/18/hdu 1856 More is better/index.html","5000d40a8426faa6ebc67bbb823a2bc6"],["2018/08/18/poj 1182 食物链（并查集）/index.html","cd10fd1a7e3ec707988657972a3a5942"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","e6424fdbd064b8d00533cf58506d925d"],["2018/08/19/Minimum Cut（读题。。）/index.html","0c5e47ebdd84ce4d1588204e35e6f450"],["2018/08/19/Ponds（拓扑排序）/index.html","f84e0c8545842ea880ffee9e4a2fc498"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","7b8f18318f929b54a85dbdf9af3844d9"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","c8a78d9cad4b4c4fbb4dda35c44c0371"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","f588438a65df7d9dd9b1d31ff17946bb"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","d9c4f67c04f22065c232deaac21b8c27"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","90811b493592d050b3d64d640f138da8"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","2479b926c0a9c6f09688e7d2d12c579e"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","c441f214ac4aa8c0ee691eb2e777d5b1"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","71cfcfcbb15484ff6ff7366be36d8449"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","53e7b8528b8c1a9eec400c55977fc244"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","bd33267a7ac87e1671b194e5b9ce9a56"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","e461f5cbcc3131af2965fe4700222709"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","7b313ed2bcfb396400f02e4ab70d1fdd"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","f3d8e683722a362d9db0bad836a1a66b"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","b2a0fa859f9c36c241c81fc62480fb58"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","9839ad5341f5f01c4491cf0b7af6e8fb"],["2018/08/20/Pawns（博弈，思维）/index.html","b60a17f2148cf08e105546dbf18d0220"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","f0d68226a4c45034ba81ef3d1ad4b33f"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","bd7b555f4359af78cae9486bc729d8f2"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","e53287d29e3406a8d79831baf952d2bd"],["2018/08/20/hdu 1564 Play a game/index.html","edb42a0ba5b85fceb0ba8414b479ec16"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","869c52d134ee0bf54e14bdcbca718be1"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","d5ab5c98b31de2041e631e5405362eff"],["2018/08/20/麻婆豆腐（思维）/index.html","d860b77a0cfe1b83e92ccc8e45318eca"],["2018/08/21/1212 无向图最小生成树/index.html","762a8b36a95477e19e1ff52ec7d69086"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","f58fe4e9cd1c89ef2a4c96d174fa1ac3"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","5c5ec99201e97517cd9bef5f2f50f56d"],["2018/08/22/1079 中国剩余定理/index.html","b3e4ad8709537e444dfc65ae8847bb89"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","48ec9cdb2d502b8dc4fe8ad7f84304be"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","c2b9df97a39130c2d1cb11dada514936"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","86aeb4e3fa4773e1c190b6c8db220378"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","90e63d8b2a3854d9b5eef372ad35308d"],["2018/08/23/1136 欧拉函数/index.html","2d58a79764f2d226f999b6c007544d25"],["2018/08/23/1137 矩阵乘法/index.html","336b203cac0c9abb74ce9a5e1ad94aab"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","e67e950c00c5fcf8f30959e1b72c280c"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","ee4de81d6ac92cd4c9027613855c0202"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","d4d5d137f2d4883a009c56ba4ace55ae"],["2018/08/29/hexo4/index.html","36dc3e6a4e630965663bae861978c58b"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","a6ef96fdf59489e4a948cb4617cef5b5"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","0d960dc9035fbad4eaae89dfe2980385"],["2018/08/31/A. Too Rich/index.html","a96db565abab755df4abcfd4ab407f9d"],["2018/09/04/C.Catalan Square/index.html","310be3304f1e0a20f1be49c4ddd719a8"],["2018/09/04/hdu1002/index.html","cc9e7e92dc0df11627225a5f87043364"],["2018/09/04/hdu1042/index.html","b19f44f522c83451de63682024356662"],["2018/09/04/hdu1047/index.html","b83497d3bc388d77447b121985413b24"],["2018/09/04/hdu1715/index.html","24ac710b20716fba4fac1e92defd6c38"],["2018/09/05/hdu1063/index.html","fc5535624f21c4d71244033012a504fa"],["2018/09/05/hdu1250/index.html","80f2343dd4eda135ac3aa025ddb0213c"],["2018/09/05/hdu1316/index.html","c15687558e8c2eb1b63d660a70f6ffbc"],["2018/09/05/hdu1753/index.html","f6221796c7db764ae379110900262484"],["2018/09/05/java大整数题集/index.html","2b22d6fd6cdfa3a40d65cb17902f6e29"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","3e10e1f431000d567cb09466770f18d9"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","6aa2055ff8ef6fa56d0220f5eff99ffc"],["2018/09/06/hdu2054/index.html","54b0089a57bc5ea7f584e3b303c7d36c"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","bdf6d12808e53644af6dd4cf322ff7d8"],["2018/09/07/hdu1212/index.html","4badbf786832f5b6628f5bc3b47f529a"],["2018/09/07/hdu5050/index.html","43b38b8c901ff41d40ae96217e465910"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","d5e5dfe9990d2425fc8e3aaf61c6f38e"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","7c30ad3a50dc847da1e4eb97dae31373"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","fa62f1b5b979be6d524918e42e5c66b8"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","53d45bb42f58c4c389942666f4ba77e0"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","98a703cded6606c0f55f8d06850dd402"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","54e3485aba319757c763017d28f311c2"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","4c3d48d76548fac3cd8077c594d22cb6"],["2018/09/13/Teemo's formula（推公式）/index.html","fdc3e05ba710640061f190986b28b3ff"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","78aa5f269a426d2d13a2b713d2c15f45"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","8d5ed77ea40dfdfe27716333241659f1"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","4d1319fc86dad534494141ae2286003f"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","a3e8982557f6a464c80ac0779a7c3c2b"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","39a8f705f5ef6b3ced4cccecbf90b7e6"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","94719cf81fa9e731c7f209f59d4ce029"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","74a9a0dd624113a736ff415c4a9a08e8"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","6f5acb97e62b96e596a202c8765328f9"],["2018/09/16/1118 机器人走方格（组合数）/index.html","352dce31f25197f715342768bcbf35b2"],["2018/09/16/1134 最长递增子序列（dp）/index.html","1d436a3cd11c48eb8b7f4b74ce37682e"],["2018/09/16/1135 原根（原根性质）/index.html","ae89827aed4d5e361a35aa9767740ee5"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","9045e24d2ff36cba3c1b8a1239bba9b0"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","01ec34a2ef98f4c25e36ec2f8ee0f3cc"],["2018/09/17/1073 约瑟夫环（递推）/index.html","4fbc3cb48bac20060af872fe7c2b119e"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","9830173589fc8e2ca4498db8676bfc30"],["2018/09/17/1085 背包问题（01背包）/index.html","877187c796f4f4c8e6000e436755b0a5"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","06380f49add036a54183309ddca5c532"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","55a1ee47088167c1fc4e66d5251903ee"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","6c19b195da65c3a0dde4cd91c3b8f50d"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","e1347368f34167dcbce3d6f6b8342028"],["2018/09/18/1027 大数乘法（java大数）/index.html","f2c180652d7a92f7daa0977feddd7f6e"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","3530175bd1c47f276ae7de6dd9a6ec30"],["2018/09/18/1049 最大子段和（dp）/index.html","390eb82608102cf4fcbe519926a9b710"],["2018/09/18/1057 N的阶乘（java大数）/index.html","bcfbea5e4b54d9735e3e7a0460c551bb"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","0a7d70e5ee5c92e8aa929111864ece0a"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","01ade4d4a460a479998e360d1175768b"],["2018/09/18/1072 威佐夫游戏 /index.html","a56a86eff17a060ab40658970a5cf3e2"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","b929d5ed8fd39d73c1095683e3681d08"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","0f900a396c4328539ec2a21728e14f01"],["2018/09/19/1000 A + B/index.html","e319065e637a4e1827fc7843d55babe0"],["2018/09/19/1005 大数加法/index.html","19ffd807f7e21314990c60a68af14900"],["2018/09/19/1008 N的阶乘 mod P /index.html","b73b81166523eef8f044afcb21412c09"],["2018/09/19/1011 最大公约数GCD /index.html","ccac2c6aadfbfdfffdd2075323493b8b"],["2018/09/19/1012 最小公倍数LCM/index.html","67161c01f2545d5f2a5fbb817c829b41"],["2018/09/19/1018 排序/index.html","e8c195195ce93c509828885f1fbd7db3"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","1dfbaabe3d4bab061d744d7541220e94"],["2018/09/19/2133 排队接水（贪心）/index.html","4139a5e6d37ea7f82e53c4512edbf38a"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","4399a0eff538d6c3deb23b72be24d974"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","07bca2ad369c21ea33f9c34c883d038a"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","a239dd75e2f2a5c87993a2372dbad186"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","f9e57063e378cc7d2efeaef99e83bfe1"],["2018/09/20/51nod 1717 好数（找规律）/index.html","38f7988d4942cb7db71c13884cf5f6f9"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","5f7c3186270824e02b0a740a46822db6"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","fe493b63a253b71fa647be9e86489044"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","39a49d5b8afe5ece73c19dc57c6f73fc"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","dab3128813e1e1def4c10add71ce95db"],["2018/09/23/51nod 1791 合法括号子段/index.html","0f6239b77c2c94083bebd04f30e87f57"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","a4a5e0af6aa15025bad65055fd882bd9"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","10531e6b00aaf33119a7bbcf9b924c7e"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","bcc4395f2c14fcd3f3428ebea0274d24"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","9dc47e9b8c82074d01c2761592b8d259"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","f5af5989552e95569ef8d97b201e592b"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","7b81deb09e01104863039471437d231d"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","c0ae4d41945aad7c1114446676bd28b8"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","cd5255f4f84a96fcbf759073a5bda122"],["2018/09/29/51nod 1015 水仙花数/index.html","c75f8f696b116b4fdbfabdf5bbc9aa26"],["2018/09/29/51nod 1080 两个数的平方和/index.html","c30590b9579b14b9dabc61f365b6ec37"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","c6665754a83f013a231ee2a80f6f77f8"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","8613b043aeba404e80a6c6f9ad339fbb"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","a723e71db4755623d5c99bf71483060c"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","472b4487d39f3b19c335fa015f8b1477"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","203eac2dcd8423b0a85890f03788a166"],["2018/09/29/51nod 1182 完美字符串/index.html","70c0e200126539a257a7ddee5ec42687"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","7c273253209a2daefb3813dc7e623d0c"],["2018/09/29/51nod 1283 最小周长/index.html","82a6ca029cfcdfb1a7070fc6593758ca"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","6f6621360223217545267b5efb98ac74"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","6661085aab1fd4af05c11920ca27779b"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","65109f1f735c831e413ae29016e6309e"],["2018/09/29/51nod 1344 走格子/index.html","dca6fd91c48fa54775504c517e1e1fee"],["2018/09/29/51nod 1347 旋转字符串/index.html","5618fa750067c8b877ea34531197bb4d"],["2018/09/29/51nod 1381 硬币游戏  /index.html","00fddd590c02b826deb2a88593e69a45"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","e58b6f3180cf0c938b3482d05408c3a6"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","b05ae8920654cb6c872b974e7459c062"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","ae4839da7bf13f88812838f3f776cd82"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","09d9f6facefff892863ec283f1830b84"],["2018/10/01/51nod 1596 搬货物/index.html","594931f8c537f44fe19739da0cdd9d4d"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","833d77c291c337e337f428226e395d52"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","4c2905c50125a1643c0b161e1e3cd4b8"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","1ec15508718de76b458914af3a3353aa"],["2018/10/02/51nod 1521 一维战舰/index.html","1a51f528ff21951782cbdb5bced0adec"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","18f68475dc9cbdb40ee1e9996fc1851c"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","4caa23dd6d3d347296a9017f0637198f"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","5a1be21e3f8467fab45208c4999bd78d"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","b79bc6c7cb998a7f54c3502f13ae257b"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","800abf8d11ab5959399a53af4434c6da"],["2018/10/03/B. Pocket Cube（模拟）/index.html","4f3239afac3a3fd39d4a642922466680"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","22baab47468bbbf9e66378b4cc6bd6f7"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","194b3be28369fa5d4cb96f9924b597d4"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","28ec313f538f4f1385ae2eaff90ed2a0"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","65fc7d7a6d76b8dd3c8e9c5314dac1fb"],["2018/10/05/51nod 1138 连续整数的和/index.html","985f26f30e04590d69835727c34e0d18"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","3513ade933853923f9a2a2257d6fcb1b"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","3e76519261391314ec3a0d9fe0c1eb9e"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","5eca7b4c36f77db90e4b4ba466693c55"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","a847d03b1a649091b4620b94b035c93a"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","2ce34d717265b8b124bae4ce777f239b"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","7167a75c090af229b94353097b682f8b"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","64dd64b0341683154478c560397d8e10"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","019598558e2dc510f1bb7d028d703a0c"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","a859e6d1203ac28b0e570a9d3355b93d"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","3a9e65bfe765f9fc2c3f8d2702cf5606"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","177a4489f96fdacaa42f638a935b20fb"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","25f723c392e1b44a8dac65066400b274"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","67694b7c7f509066aab3fe54e9374cb6"],["404/index.html","8eeb07dd58f54ec11415ed26c168fdfe"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","dd03eb1c97392ef48de1c6700616f772"],["archives/2018/08/page/2/index.html","5af64adf7e26977d18cc4b75dbe33525"],["archives/2018/08/page/3/index.html","600a601888df6dfd018d3f47694a8734"],["archives/2018/08/page/4/index.html","aa31bd28893e00600589c72c8fbba1d5"],["archives/2018/08/page/5/index.html","d128f069235fbc1cef95834caaa21bd2"],["archives/2018/08/page/6/index.html","17da706c527a270286ee66c631884477"],["archives/2018/08/page/7/index.html","5ec1705bb578936fcb3cfb18f25d2cf4"],["archives/2018/09/index.html","ee443e6556ec5c80c9bce7440281f029"],["archives/2018/09/page/10/index.html","1bb170a432d8d63b258cc734c600df5a"],["archives/2018/09/page/2/index.html","1d2a2f458bca938eb192ea2a0923df87"],["archives/2018/09/page/3/index.html","5c23cc619b03fed0fd85b1049bb76771"],["archives/2018/09/page/4/index.html","658b438b17fd42956cb42dd44084b422"],["archives/2018/09/page/5/index.html","82026bce1ff32805ac4c7cffae45fa08"],["archives/2018/09/page/6/index.html","42e5a7fdff0807137506caa3002ae0cb"],["archives/2018/09/page/7/index.html","f35b901051c01453eb8c5058981804ec"],["archives/2018/09/page/8/index.html","eaa3822f4246912f69ba3021c2876b1a"],["archives/2018/09/page/9/index.html","e9d678f6a73fe12f94909acd9500902c"],["archives/2018/10/index.html","7181404a487bc58335e8e6a91de0c170"],["archives/2018/10/page/2/index.html","ed7ee8f4768ce5136d7c87427e27002f"],["archives/2018/10/page/3/index.html","6e045a2f2960344e965f17a12a402ef4"],["archives/2018/10/page/4/index.html","3093fe6bef7b597963e2ec76badc9320"],["archives/2018/index.html","fd4c2fa873558169fef78d4699c2b152"],["archives/2018/page/10/index.html","9d9e48d02bb48241f9cbef68bbfd5afc"],["archives/2018/page/11/index.html","fe7fa8b2c27c585d3e9adaf486734998"],["archives/2018/page/12/index.html","3da90397660e3bf6f833f048341496ca"],["archives/2018/page/13/index.html","4ac4d3c5b8013785e8099a40014b4fb5"],["archives/2018/page/14/index.html","7dd8e4c0f9e49883fb2dc5bdbec09516"],["archives/2018/page/15/index.html","fe8f9d296310464334f75791769cf11a"],["archives/2018/page/16/index.html","d7ad8b21c5d232e0c69dfc323fb93a6e"],["archives/2018/page/17/index.html","52f9d75238c7f9b7747471efcd91d1d1"],["archives/2018/page/18/index.html","cdd0cd358d08e63718b3004cdcc1e7a8"],["archives/2018/page/19/index.html","e2fd8ecdca90b09f67dc370004f3b6db"],["archives/2018/page/2/index.html","fd586733b8f477efd7dea3410790923b"],["archives/2018/page/20/index.html","62652fb411c8016fcfd78049fc5403ef"],["archives/2018/page/3/index.html","36a82d523ca834bb4fe595c7bde3f61d"],["archives/2018/page/4/index.html","2271facf185f30b9bee0af945e845f00"],["archives/2018/page/5/index.html","0f6e80bfa8b0d0110b02e9bbf879dd42"],["archives/2018/page/6/index.html","0f8ff06aeb663756b5c843482a3d53a3"],["archives/2018/page/7/index.html","1c4c3f3e72d5eda9108db01f099ca894"],["archives/2018/page/8/index.html","6c387976540c045050a8a8edd5d49dd4"],["archives/2018/page/9/index.html","5f7aac28464f6feb49d9f015d2edec42"],["archives/index.html","4779e8705e9cee4827812898864ee91d"],["archives/page/10/index.html","bd5a93adeb68058af1a51b6808538dbb"],["archives/page/11/index.html","4ab317c7bb7ceed35fadb4ed18797c4d"],["archives/page/12/index.html","12e1e7ff77ad7c6e035b9feeda3f3f4e"],["archives/page/13/index.html","ee594dca03d9fa0bd08a791b3059a3bd"],["archives/page/14/index.html","c74a852d88ce6e22d4224d8ed3926e39"],["archives/page/15/index.html","4af784c63ea759f635c637ead220c5e4"],["archives/page/16/index.html","f9ebacabdb3e7f024c696a3d5886bc63"],["archives/page/17/index.html","2544e5b006e8a0e23afee55355759473"],["archives/page/18/index.html","fadab9633e70156a74965fb6ea7d415a"],["archives/page/19/index.html","cf7254909b52aa4a096b6536c3ee83cd"],["archives/page/2/index.html","fbb42378c11ba6b51553d3307c5c8a40"],["archives/page/20/index.html","cbcafaf15633e7d54c806db349195534"],["archives/page/3/index.html","246a8e608861b0d404aec68e8a0691c1"],["archives/page/4/index.html","a878c0024a025ec82dcf3eeb1963bd74"],["archives/page/5/index.html","11c2a8499f841eb1092b9763a2d748cf"],["archives/page/6/index.html","b851c6633475c21bbef8309c3f8a3461"],["archives/page/7/index.html","968451200e03331a7aced8d647b0ca8e"],["archives/page/8/index.html","3cc2280d500d60745a0bf92f4f8a8815"],["archives/page/9/index.html","e51a1740ae55eb1bb09ea1e0a5c9e806"],["baidu_verify_DfMf5XqJUb.html","6146c17a43ba268faac165c729470cef"],["categories/51nod基础题/index.html","e203e351d93140cf4d929fec1596bfa4"],["categories/51nod基础题/page/2/index.html","c2f081e73c83838d91cfaf4e17414f92"],["categories/51nod基础题/page/3/index.html","c83d344151776a694397e009066504a2"],["categories/51nod基础题/page/4/index.html","115473530d211ece83144eeb7bff0f1e"],["categories/51nod基础题/page/5/index.html","537f933271c9b9ef26b2851bf5997942"],["categories/dp/index.html","40149dff1b215b0a5a9ae078ed76c4fe"],["categories/hexo/index.html","5f29ec22c7959fd8f08c12ad7a321093"],["categories/index.html","5556845be74e527367d8a25a49818ff8"],["categories/java高精度/index.html","a8bb890fe3b4b20b2cee4fdfe8d75807"],["categories/java高精度/page/2/index.html","6a9dc40e4aa80cc21d14928487dd86e5"],["categories/poi/index.html","0d0e0df172f29b5393ded43e3fde3d9a"],["categories/二分/index.html","b3a70a8b8cdb90731013079ab1a84bbf"],["categories/博弈论/index.html","22effee26a903f03bfa6b59c4bc026a1"],["categories/博弈论/page/2/index.html","54d6e2c52f0fee48091b35a81da39b51"],["categories/图论/index.html","3159014c8f94f1e4d4d8b94f8bfb6b0e"],["categories/图论/page/2/index.html","9b357bfad210dd0fab0d4a2cdea683d7"],["categories/图论/page/3/index.html","cd0f1e8125761bb5dffce714b6f82530"],["categories/搜索/index.html","b5108048545494b953509d2d74600adc"],["categories/数论/index.html","3952065fcb6dc50bfd74262ec28c5c01"],["categories/数论/page/2/index.html","7d9ca0983e53533339548ab61f63cafc"],["categories/数论/page/3/index.html","897beaafe4e10cccb136d9f41f6f552a"],["categories/杂/index.html","303ff20b2509086d5e751e84627e3e06"],["categories/杂/page/2/index.html","0e03b0fcd73bd59a90f8f7308c0ca572"],["categories/模拟/index.html","076e12fc1e4772066baa52ef29a9281f"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","4444979ae3947f8f6599594e45fafe4a"],["categories/计算几何/index.html","e94d0c1c9012699d59a52a9a172eaf6e"],["categories/贪心/index.html","d0b14d18a8b4d4d7d60ab11e4abca0ec"],["categories/贪心/page/2/index.html","77fc1bc7f1eca328b9061a1bffcb2c0c"],["css/main.css","788c959f3ceefb09f46e082e27504e70"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","fc4f090ad1e82aec461ff65fc7f5465b"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","b833ca33e3cab8cc2d3a8f0aa7a25189"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","e26dd140f3ce2c12442bcb81d866c138"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","36573f9237924d51576d0d7b7760e952"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","31a7b79df633aeb76a26cf32557d432d"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","64dc96ad99165900838681d29d23f96d"],["page/11/index.html","e423251db1ad7006b74a2440c83ee042"],["page/12/index.html","c9661181d0133c67ce90eabe68922288"],["page/13/index.html","0b52605164e6d2fe37109dc5b58231fe"],["page/14/index.html","541fc70c17b82a3ec82ba04b74987b2b"],["page/15/index.html","6f042b5e1f5fc742cda9c735240eb79c"],["page/16/index.html","21f0c78b40f49c9f2b19623fa53a2eac"],["page/17/index.html","e209f1da4cd6ac1bbd8f1565567ae0fc"],["page/18/index.html","a774aefd96e62ee8405f9fbb2b1ce2fb"],["page/19/index.html","3d20e1371cde3dab0be3095c1efc188b"],["page/2/index.html","1a24750664e8ccdcbe95aeb527867dbf"],["page/20/index.html","677eb69cd9b598fca2d99c2e6741f433"],["page/3/index.html","1a58520bd1ce26ef12c07f682fda1020"],["page/4/index.html","5a77da59864904f35cf599cb85ad1c82"],["page/5/index.html","a6e4a46b8b4528612166cc47a4b2b58b"],["page/6/index.html","6281e8bcebaf905b4e62d6050a1e0625"],["page/7/index.html","b4e6b030d558c35274f69bd6fbab77b8"],["page/8/index.html","7aac787accd8a01bd6396a1abee1f7c7"],["page/9/index.html","1853efc3b3486d76a20c4ee7f61ed4e9"],["tags/Floyd周期检测/index.html","fb0814d46aa068fe1cefe31283e39065"],["tags/Manacher/index.html","977f528f91ef227d7ed3e3c57a6bae03"],["tags/Pollard-Rho算法/index.html","e3fdf6eb4678f3ec9a4da30843128a59"],["tags/api/index.html","1a9b44eae58904c5a2cd20ae3c163683"],["tags/cf/index.html","4443e141b2286054d05186310ea8923a"],["tags/css/index.html","dd862193f32a66936206f3674991d762"],["tags/dfs/index.html","d9ab3a61109a96739b2ea8e4143405e3"],["tags/dijkstra/index.html","b9380799131c5f2bc296623292be1d56"],["tags/dp/index.html","c10d5bbaa2a353aa2637e1a0be8e7b26"],["tags/dp/page/2/index.html","385cd201b616aaecd8106ea07fce8c24"],["tags/gcd/index.html","8ef3a7eed6ed0061dce66c4e1e8dc36b"],["tags/hexo/index.html","3763ffd491e9cf3a9ddd1ca693fd18c3"],["tags/index.html","2af3a762b0b9071e4fa7d185dfde0de2"],["tags/java高精度/index.html","8b06527a87eb46d9e1f3f1c290dc26e5"],["tags/java高精度/page/2/index.html","21248a6a14ba9cfabca0d9837bdbff37"],["tags/java高精度/page/3/index.html","559fa7d1c50eda084e3665099faf3319"],["tags/kruskal/index.html","466d1ce3581d3e8ed3e1f3aba06be64f"],["tags/lcs/index.html","f85277b2bb4b63e7ce837318b0f89ec4"],["tags/leancloud/index.html","3e5124d62f13853cce592be60a89af8b"],["tags/live2d/index.html","6b304a9ffbe880e2f422e656ed5777cc"],["tags/mac-OS/index.html","8bc57244d15439e2327c3eba3c50d95e"],["tags/prim/index.html","cbfa5321ca71d67fb611c97a474fa010"],["tags/python/index.html","e7e5cea09346162690b38f6325e6d7c3"],["tags/revolvermaps/index.html","fdd919d9376470a1c6a8c851d3c8f9d2"],["tags/rmq/index.html","a850740e6cbe965b72d81b598f856c24"],["tags/sg函数/index.html","54b883e365c9c9a18d1d9bb89f5c67a8"],["tags/stl/index.html","d963806920f30c3b4d03ec9d7ef0690f"],["tags/三分/index.html","d4828bebd19e11dd4812aa14d118d9c3"],["tags/中国剩余定理/index.html","5c39c7581051635d28782bbd9b552f23"],["tags/二分/index.html","b74cc89fcf2ea0d97b4f4a3845a18383"],["tags/二分图/index.html","a5f5c8cc0adeab483cc3843a33a6d3c3"],["tags/全排列/index.html","fe57b1ce518d0884ca4611d1751aa861"],["tags/分割平面/index.html","c676f88fba4c46902d820f1bea7e85ba"],["tags/分数规划/index.html","e08149e3a2471f887de8fde7d2044186"],["tags/前缀和/index.html","63f36374d62f07611b1bb7fa933e0edd"],["tags/勒让德定理/index.html","7597440fdc57a78dfc3f69cc733ec4d4"],["tags/匈牙利算法/index.html","b310d53bab237cc99750f968fa62663d"],["tags/博弈论/index.html","62594bdb7991d7ea966cedfe44745a26"],["tags/卡特兰数/index.html","c3bf80cfebc8fff469380569f584d401"],["tags/卢卡斯定理/index.html","3ad6986f871b1250fc1402ae98209b3a"],["tags/原根/index.html","5e42a12606401ce4b02d61669d62423b"],["tags/埃筛素数/index.html","102b3e8e077efdbf0e8175003952db0b"],["tags/威佐夫博弈/index.html","dd4e1e0b31be0fb13ee227d14fc0b4cb"],["tags/字符串/index.html","3dfad875d71a7e650d457f1526e71e4d"],["tags/容斥/index.html","44720bbb04fe81d0e2182e362f639f6a"],["tags/尼姆博弈/index.html","a1d41b028cbf1077dd688ca5cddc1f2a"],["tags/巴什博弈/index.html","780ba5c1c143eb601ec9bc92f20aab20"],["tags/并查集/index.html","b6ebe097a939a63972ccfab159f73887"],["tags/归并排序/index.html","98a31baa88d4b360aab0821b1800b96b"],["tags/循环结/index.html","4a141d286e52bced04e998892f9d348c"],["tags/微信/index.html","83bf948d08b7c0a88b54ffe9e4d63653"],["tags/快速幂/index.html","7e6b0fc269d98ec037e3d9934d76cbda"],["tags/思维/index.html","d1598cad017b0e854e7f08c8b05cc81b"],["tags/扩展欧几里得/index.html","ffeb16b8d42c9658c27b7e61372fa60d"],["tags/拓扑排序/index.html","9212f680b7907697f5fec4d0f20efdd2"],["tags/推公式/index.html","521d3006288cb2addc5ce67ae0c59d41"],["tags/推公式/page/2/index.html","4a7ce34561d17b0d8da6e0cd8b16d596"],["tags/数根/index.html","bd53d7abb62eeb301d37ff1a4e080ad9"],["tags/数组加倍/index.html","0b3db81def98d4424195b1ab9f61539c"],["tags/数论/index.html","03e66adf3a3b2e9dca0721883adf5fbe"],["tags/斐波那契/index.html","2c3355337c757572645faab2bc8d8c0f"],["tags/斯特林公式/index.html","939c05a4d4b8509382d322dc3e06ae6f"],["tags/斯特林数/index.html","72a50f67a0febe3ba3e5ffe9de6f9fc3"],["tags/最小生成树/index.html","328553bbc8b142af5b244d8ca73d2653"],["tags/构造/index.html","c133c55ec6e4bef2fa0996f3ab12a816"],["tags/枚举/index.html","2bf590e28906553b2851eced20934c1f"],["tags/树状数组/index.html","648337ecd600eefe9a1954902bb16a8d"],["tags/模拟/index.html","42b17215217a3f00f8731ad2acd8f648"],["tags/欧拉公式/index.html","3734fce6a50897b42f97988909a1af26"],["tags/欧拉函数/index.html","7a21db17cf9f9a8b79fb835c623854d9"],["tags/欧拉路径/index.html","48ca0ad616a2c13360271635a2a153b2"],["tags/海伦公式/index.html","744276640181fe78d1d9b5441bd8541a"],["tags/生日悖论/index.html","7ca4f03447f4294f29cc127ccbfab1d2"],["tags/矩阵快速幂/index.html","16082b7707eb4461ff92d9e6bc7c1a6a"],["tags/离散化/index.html","b9e6799cee4aa2b51f717ac1e94810f6"],["tags/米勒罗宾/index.html","358feecd8dabeac224309dcdc86ffb24"],["tags/约瑟夫环/index.html","7de2256d16bbb88c23435938baaacacb"],["tags/线性基/index.html","1f114a4625d2df9a21c1a6dae63f8d5c"],["tags/线段树/index.html","b6244b0fa024532262c516736b6bd622"],["tags/组合数/index.html","485fc3160f0a67ea199f88e9b29bbd63"],["tags/组合游戏/index.html","71d9efaa170c8a15858a84db2f285165"],["tags/背包/index.html","51d5059146e696fb2e572f172dcbec2b"],["tags/莫比乌斯函数/index.html","5b9c97dc1ec4764e1c268914b04632ad"],["tags/计算几何/index.html","4aca2fcfcbaf074593bf534749b9aad9"],["tags/贪心/index.html","4c26412ce4ca5182ccf7fc3b9e98b91a"],["tags/贪心/page/2/index.html","736cc0dcf4e2b4de1eb2ee50a8325624"],["tags/贪心/page/3/index.html","5b6666c984d0edc76ee850d348760c34"],["tags/逆元/index.html","72eb554177c400be30c35fa2d3a2134f"],["tags/阶/index.html","bf3057ef14a542272c3b0a46d6fc56ed"],["tags/鸽巢原理/index.html","db6cde5dae0454eae7507a3e431aa1ad"],["tags/黄金分割数/index.html","e48577f62464225b1e7ede96e7e8582e"]];
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







