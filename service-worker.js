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

var precacheConfig = [["2018/08/11/hello-world/index.html","74fd20359e1ad76d4c7a81fe3a20c2dc"],["2018/08/14/1995 三子棋  /index.html","ab0c4bbc4ec74e666efbdcbf020a28c6"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","2c8502e168ac8472060afb965d889526"],["2018/08/15/2006 飞行员配对/index.html","d12d194ff5d98d0569b6bc6aa5f67ed6"],["2018/08/15/D.Tea/index.html","71f4f989e32482724d459c419fb04d4c"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","8b508671b12e27d36964d80955e087e8"],["2018/08/16/1459 迷宫游戏/index.html","81fab4bce365108895f34c1e452b7d04"],["2018/08/17/1264 线段相交/index.html","d15f4c3f4d3d3948517cf33a7b4ad149"],["2018/08/17/1265 四点共面/index.html","872574c358785a1c35ff19c37e8e76fe"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","0047849c6bce34cfa6bbc7f95385534e"],["2018/08/17/1384 全排列/index.html","fa8484c5f2b7079cc83e565149f47588"],["2018/08/18/1240 莫比乌斯函数/index.html","f0b940f951d935e59b9f226bcdf6ef0f"],["2018/08/18/1256 乘法逆元/index.html","0c711f4126fbb789eb4ee45317474770"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","3fef78908ccf148082fe6742f3f7db75"],["2018/08/18/Teemo's bad day（并查集）/index.html","a74da53c1de33f6f9bad941043c2a6fd"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","49a5906c437fa153f8d931be6e303ebc"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","ed03a8c11bc30a80fe3d1c795fac3d29"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","cd02d09b277c69cf68e825754f9278ec"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","9eee9fa9ad37fb61de676ddcc6af1ef4"],["2018/08/18/hdu 1856 More is better/index.html","dfbeb51bc961ced260222d82ca4033a0"],["2018/08/18/poj 1182 食物链（并查集）/index.html","e1177ce851f2baf9130d579eb7542249"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","a1bee636d3ffd209cde1fead74402634"],["2018/08/19/Minimum Cut（读题。。）/index.html","bbd90db2bb86ca4e79c5bceeca1f9ae1"],["2018/08/19/Ponds（拓扑排序）/index.html","dbb02a0e713d29b38a34254e8ae2bd4c"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","c7165cba0b03e75921dc7534c8383b34"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","d21765e9161aec0852ac1591e15298f6"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","848ce18cd6b159bf690c0938710510f4"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","227ee45fd27197edc49627c5be99b0a6"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","e78d6f1e1319042a37bb8e8f836ecef1"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","2562329092f987946dd56e238dcfa592"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","b1e4767a7fc6df40799492029ecfc50b"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","5eeb650a1ef2f024fd38fa167a731853"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","be72b2534fe52efad40b5464fb1fa9bf"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","3cd2bc4c024575552973c9a755050ee7"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","6f18ca5f3acd91f37d814dba445f3047"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","41f1630c75090897ec57f63d857f7ab8"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","342791060f0ac4c296167bee09bd9cf8"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","1cccba46b3c451f17bce227ff4175384"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","173cd0a20d7178b02567f9298aeef948"],["2018/08/20/Pawns（博弈，思维）/index.html","24241d380ff1f0bff10080eeabec5371"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","0547ba20fbb99bf7d576c42031313259"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","227ba903e909dae87a27a75fb94c6a30"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","03aac4edcb81632003c0f7503f7fe25b"],["2018/08/20/hdu 1564 Play a game/index.html","9730290d01c3c26f2b0d0fdba65e326f"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","698eb61abfa84640f0ae572525071fe8"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","7d3a624ea7a58dccd01e48264e051da1"],["2018/08/20/麻婆豆腐（思维）/index.html","e84d6e0b31c715158d8f07e6b56796c6"],["2018/08/21/1212 无向图最小生成树/index.html","cbbdbdb3a0224d1a27f548a75d51e926"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","0b4aa46a37ed921c98aa278909152b40"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","cf75ba75ef6f10179a6faa59123c3bd3"],["2018/08/22/1079 中国剩余定理/index.html","f5d98a5a74734f8fd2053357cdda0bee"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","010f4aba2b71c0924b04bd6050fe0144"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","d06675ea7e0c12bfed454461824b3552"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","d3c71f78eb974c28732b4ec30453aa62"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","7d35d2c2f5d1ccf0110cb6f518e27c77"],["2018/08/23/1136 欧拉函数/index.html","992060bf24b6f71119172f696d5d1513"],["2018/08/23/1137 矩阵乘法/index.html","d48bad37d7a9a640d5768aba53c7975a"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","83dcc00a6cca8c4bc86e537aa95a80cc"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","b20dbcd7285c45e859449f7039a03cfd"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","114f6cd50099887a91635c42be79a4e3"],["2018/08/29/hexo4/index.html","3836d483288db40cc62dc9aaf5ed4b2a"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","918b3a28ce21764b9cf276b5145b4470"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","46f9fc70cff75ce52f9a600453be33b5"],["2018/08/31/A. Too Rich/index.html","bd6c618f89778bef56bc33aab5ced6ea"],["2018/09/04/C.Catalan Square/index.html","0bb9271f80fd7aa72999af58cd1418ce"],["2018/09/04/hdu1002/index.html","1f94f849f8025570dee574a76ecac276"],["2018/09/04/hdu1042/index.html","3be3842288e37e9dc6b06d4396172709"],["2018/09/04/hdu1047/index.html","48d22740db08e76a3a75d2d7a7bca8be"],["2018/09/04/hdu1715/index.html","41fc5b6e43b00dfc830d85ef8559fe1e"],["2018/09/05/hdu1063/index.html","f96cf99bf6e0647eeaf11de49d974392"],["2018/09/05/hdu1250/index.html","eb53d3be3c263d2c833466ba81a5f2bc"],["2018/09/05/hdu1316/index.html","500b01848343347432a49a37a72b8321"],["2018/09/05/hdu1753/index.html","ca1eee1c5a0151f2244991b21140d0d2"],["2018/09/05/java大整数题集/index.html","e4d81b1966b5418c5593741b56199b02"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","9d46c6a06259daabd652620cf3d92faa"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","c9e025904655f02aa65967506d1f885b"],["2018/09/06/hdu2054/index.html","8bc76cfa79e2b1e46c98cd61fa747c38"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","4ebef1ad3892801e2bcd7d271b4166fe"],["2018/09/07/hdu1212/index.html","7bb81b79638d71261a28397a53e9c1bc"],["2018/09/07/hdu5050/index.html","3aba4d2355a6c0fee56b557e9dd2d6c6"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","e193840bdf51e998ef7d207ca5a9045f"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","676e27923fc63b5e60e161317ff8a427"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","1519ce2420abe3ec0184b0ce7f9b0827"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","8010de0d6983ec060cd8024e2fb2463f"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","b50343fa476e686ab1f683078ecacbd4"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","fb8ab127813ce1bca3b686e20e0ce45f"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","968c02530fde0083222593a848188e49"],["2018/09/13/Teemo's formula（推公式）/index.html","da36262625cac3988189a55c84ae5e17"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","566ea5217bd0688cc0bbbb7ede300a25"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","c587bde8f2604b70108e4ff5c5c46d64"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","fe73373a20035372d3a37340333bdacd"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","d7d7f1ab32e547c7bf840076afbb94fc"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","df1d8e0ca53d7f6565477fd613fcab32"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","cb6f23cc0e71388a4b86f3adf2a1c52f"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","83dbe1be5a36a108ffad89998a784b86"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","5af3762f542b7d65c6d6ffc732a5e883"],["2018/09/16/1118 机器人走方格（组合数）/index.html","e7bbd4a5ad2765ac093e1c4e7fb7b0d8"],["2018/09/16/1134 最长递增子序列（dp）/index.html","1e017e50d9e4ad350dc4dbd9acede563"],["2018/09/16/1135 原根（原根性质）/index.html","4d054e75aff2113e4db6f230819a4e1e"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","38f4acb4c2a06fedb633e0847624aef0"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","f555350f8894c9494ca0bfba37e94ac3"],["2018/09/17/1073 约瑟夫环（递推）/index.html","9f914a1b6be9e4b7686f75226526a8e3"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","35f822695e9a9c6d685dc30fee46081d"],["2018/09/17/1085 背包问题（01背包）/index.html","44892a4039cdf4609b9cb6ab97bafcb4"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","d505be95a9bad46370b25c4341d992d3"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","24761dbe55f4906dbe516b60096cef3e"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","3e3e4d7e04ad1de58467b41beb2fc36a"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","4a3304e7e3116e285b626ff30757d1e8"],["2018/09/18/1027 大数乘法（java大数）/index.html","62b65bcc5187d69e308df89df5a8d189"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","b8a9a164ca9936aaeca7ff1faa0f60c3"],["2018/09/18/1049 最大子段和（dp）/index.html","e6fe138cb43456fac0596f9de741a95c"],["2018/09/18/1057 N的阶乘（java大数）/index.html","9403c13b57f760d396547834f6c7225c"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","108c59b50357c939f142684525727da9"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","40f792a4e9bcbbca2f8917d48a484038"],["2018/09/18/1072 威佐夫游戏 /index.html","cf0677378dbae5256bebe8f6587e9350"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","c7ea4e67f7b3d6b9ee9154ff2e9af983"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","559d4c5b71e31c16a738e888350e0098"],["2018/09/19/1000 A + B/index.html","e80d9cd3837fc297778de81f49456a74"],["2018/09/19/1005 大数加法/index.html","2d203224fcc152a84fc92af3a5cd1521"],["2018/09/19/1008 N的阶乘 mod P /index.html","742c000c9e7d45c46a568f7c26024ae7"],["2018/09/19/1011 最大公约数GCD /index.html","c775625bb03fb77f4ee4ce2d58664e7a"],["2018/09/19/1012 最小公倍数LCM/index.html","d1f81b4236a8cb7d4ebb1580b9bf9fda"],["2018/09/19/1018 排序/index.html","dae59ed4ba9836c63835ce3dbf72727f"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","6cdbf604db79b6ce58ee7820296aec63"],["2018/09/19/2133 排队接水（贪心）/index.html","6ab666f08d9cbcb7ac53f3abc34b8d36"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","f80e4c1cc2c0ca64f4faeaa29080c179"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","60f83d658d1993e823384bfea3adf0fc"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","b290fdb3d9a57848ddd108764344c755"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","655245d6bc0f46e0f542f48feb241a79"],["2018/09/20/51nod 1717 好数（找规律）/index.html","b9cf4f2b45849f1ee941e56745ecd6bc"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","330aff1d462fbe52257cf4870d35c69e"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","cee3ab4e89054f3b9870101312e2c08e"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","54f64415b5726aede08a9d4afeca3431"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","0cb1fb37cf88d73365c0b5f988097c1e"],["2018/09/23/51nod 1791 合法括号子段/index.html","a0a554a1c9bb7537ed1be0b69de222c2"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","2a875b61f078221a2d2fe9302f2f7347"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","fa855a5e7a50b8630071183037aedc41"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","6f18675c3707f09a21adc081c1f49ad2"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","b3b540a6ff2c289c17f99a56e9f485dd"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","ef575ef8cc299845cc84f6d923c4922d"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","b0fb34c6fc2d0b4ded2c4906ea7f4993"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","0f2195ccc25d3723ed47f688cd95c161"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","10b86e684763e203d045bde4a8345459"],["2018/09/29/51nod 1015 水仙花数/index.html","af2964543e8d94645e3eefb878716571"],["2018/09/29/51nod 1080 两个数的平方和/index.html","26321a22d298a0b541947db944a7d0b3"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","13507bbc2822fc742e393c36511f8073"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","ac9af7f6f0064f9c3c344e0eca0f44bd"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","da94f12ecf5b54336a23eb125f79931b"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","3372a4c6b0da9698b3fcad77c7a93283"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","5577f6187a4b24aa37cadb2a2a15bbfa"],["2018/09/29/51nod 1182 完美字符串/index.html","4238cf5eb9f115f91fd226d00f67836f"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","443eff8a0187933e553e5011811f3fad"],["2018/09/29/51nod 1283 最小周长/index.html","6d70a940d80f2a821bd4fc89a35ad2d5"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","2278ffeb7d3632d207e45c24580b2b63"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","4a60873c3ec53085d9eef3ad83d2c69a"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","385545d089b65076199ccf16d61bcdac"],["2018/09/29/51nod 1344 走格子/index.html","b18c477bba1250be291876069b93df2e"],["2018/09/29/51nod 1347 旋转字符串/index.html","85293b515d567ed1a713976cda93be04"],["2018/09/29/51nod 1381 硬币游戏  /index.html","7d3ee6dff90d1a98f7924d7258ae1380"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","1cec92c9df73cdac59407e4a810aeb5d"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","5c39fcb95ea496d8894b06d06002b189"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","bdb23845f750aa2c9c44acfe950109ac"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","348801f67383b17aaf6e98c00b2ee92b"],["2018/10/01/51nod 1596 搬货物/index.html","85c0ab42e538aeda35bfa0f5ad457073"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","b0b6f375d3b62ba55d75cf8e0a91f604"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","511aadf1d587f32b09b4655db7676c1b"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","2fe9c0bc471d537393a41de004b32dbe"],["2018/10/02/51nod 1521 一维战舰/index.html","2574c41835963981e7cce431f3eba8b4"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","d72f0c133b8c4e31568ed57531cb39b2"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","3eac7535c3d2da32b9cb6a94b7460e2e"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","a193e4fe6383c68e7959c740ca6ddcb9"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","ebc353840c281bb0906f19c6fd92b0a4"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","fad9f5f799bc181d6355713b477bc014"],["2018/10/03/B. Pocket Cube（模拟）/index.html","acad3a31ab74c21fadbe36f7cd0c5d73"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","b49eafc5b995feff99b18ece9dcf5d85"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","807ffbc62e4798722087ee4bf094b200"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","71215f6322be87921b64411251c896e8"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","4526d9cf1bd3dd847d095c467a68bccc"],["2018/10/05/51nod 1138 连续整数的和/index.html","7cac17e255031aaa5ed68f833de428e4"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","43b11dadda76ac4428c2d11b1047cba4"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","1463fb1f7b1a39d359fda73f626250c7"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","63ff831ee69539dbf075f383cca122fa"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","e276927aa0034109953cdf35daa087e8"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","4f0f5e79bdd1b237f0757481858daa9c"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","4e1e15a89abe912bbd13e5a4088d17b7"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","0c10046fbf8f6779c834ce239be7a6f2"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","7d5c819816fa73fa37a9d2afd30631fa"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","96d39043eed8bcef72c82580c2537b67"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","42a6c83a02df5da3cc4c3ce75da06f62"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","5dfae47ee7dfafd46d44a2a0a1529d51"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","3698f520d87e48ddac0a27c8f7bf4748"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","ffa55e4bfecbb21a4d71267725e9ca11"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","04442453bb16e36ad4b169f9cebec5be"],["2018/10/10/ural 1073 Square Country/index.html","c16043ecba1c3c85136b0a65b028931a"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","8fb957394f93c2601e6c07d1918abe9e"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","8e5b04bd6a715ed6e7a7f28e4f798c9a"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","5ab4ddacc11a4a7355852ec351ff4bb7"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","f3bb4545544fac99cddd4ea76a17fa65"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","ace8121ba9a3c507f785dd32f93f9af7"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","9ffb45dd8f2e20ef8aafde6d199fc4b9"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","f630dbfff90cfe25eba8265168969de8"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","deaf61bb79fb6de066e5be508df7a23e"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","015b3710e15b301118a60e1ee8f34af5"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","b5be94125e644a1598f5713b6fab9dc2"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","c62be023327112d551ed198023bf0da1"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","3127cda1c95a5f8131188a3d24a029cf"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","ad1927ae1147370e7c74028c25737a88"],["2018/10/13/51nod 1315 合法整数集/index.html","ec43b3ce3d7020a3efd4f6240d202995"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","fc10a761ea4d8a73badfdace41528e99"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","cedf87f20e824fdce88495ebf954acad"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","5b73993576d319bdbbe0b8b256e8bae0"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","8b21f453fd516bc15eb537c639baa7ec"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","8a13cd0e44cb4db2f08e67d08ce5ae8b"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","89f8ec3387e7e68d8b05dde906327cae"],["2018/10/16/51nod 1102 面积最大的矩形（单调栈）/index.html","317217ba0f316bfacade0a71b76b66da"],["2018/10/16/51nod 1835 完全图/index.html","61fe16a58ecdc701958b3ec934a64c7c"],["2018/10/17/bzoj 1085 SCOI2005 骑士精神（暴搜+剪枝,IDA*） /index.html","196778ec5360732c964b324ec9ff425f"],["2018/10/22/Java第一次作业（素数，日历）/index.html","8e7cbcb7383c2278fb453868a772c882"],["2018/10/22/Java第二次作业（线段类）/index.html","ec92f010ba0ebea541d51f9887438278"],["2018/10/22/macOS下sublime3配置c++环境（支持输入，支持c++11）/index.html","f70bbe0223d251033df4309dde558afa"],["2018/10/22/数据结构第二次作业（扩展链表，双向循环链表）/index.html","d33473e60a7652521a8c36a838d980ae"],["2018/10/24/CCPC 2018 秦皇岛 I题 Riddle/index.html","3528d86878864c5e84ea179aeddeda8a"],["404/index.html","4fc1d50a948c332b4ee1e5c1fb671d61"],["archives/2018/08/index.html","f6a56f8da3635d9383288ca203ea7617"],["archives/2018/08/page/2/index.html","7fcbe82588a2fe347808cb0edf8c86a1"],["archives/2018/08/page/3/index.html","947f0be4dbce9280932bf05a4aa98999"],["archives/2018/08/page/4/index.html","880408a5c329cf7182d77653c31c81b2"],["archives/2018/08/page/5/index.html","f8b1bda6854ec32f53688609e78847c7"],["archives/2018/08/page/6/index.html","57ed3574202db543846e95774531985c"],["archives/2018/08/page/7/index.html","11791f9069474cb1a1f8104f9651cfa9"],["archives/2018/09/index.html","5c84520417896c0d9582d89ad00a4385"],["archives/2018/09/page/10/index.html","12a842d06e18d69d9e444525237c1ecb"],["archives/2018/09/page/2/index.html","739b79d8e1847fa7c96a802bf33eb91c"],["archives/2018/09/page/3/index.html","514f62aa5a0db5c027b70407f26a90c8"],["archives/2018/09/page/4/index.html","c33ff138dbab7d12b184555058f9f56c"],["archives/2018/09/page/5/index.html","88f26e3bb45617e908bcbfe3af906e46"],["archives/2018/09/page/6/index.html","97c1c3bba56370b6a3303db699a9a4fe"],["archives/2018/09/page/7/index.html","706eb1283cd227d0ec5aa5ad708d6af4"],["archives/2018/09/page/8/index.html","5dd1b5bc08d20d5d202884c40c20c069"],["archives/2018/09/page/9/index.html","540ea8f8c11e6544f36c1e8428ab01c1"],["archives/2018/10/index.html","100b66e8040e25aa9b6efa14f99ecd47"],["archives/2018/10/page/2/index.html","afec64bfec5896d5bce08f4cc1138d34"],["archives/2018/10/page/3/index.html","8a174e5b6ba15ea67ac47011db38c86a"],["archives/2018/10/page/4/index.html","db058d510b1ced6a1b8a336b848f393e"],["archives/2018/10/page/5/index.html","f87673a98e383e44d3c8b3e504f29a5c"],["archives/2018/10/page/6/index.html","7d34c0efeb46ed194bf4c3ff30e4ab6a"],["archives/2018/10/page/7/index.html","f83bb74b13029aff34ead81fcae9b766"],["archives/2018/index.html","d30d84cc9b31764f533324b0ff2e74f1"],["archives/2018/page/10/index.html","7305948ab912c08da6126fe8ba60d3bc"],["archives/2018/page/11/index.html","a3424fcdb3381485ad7c4349597e2ae0"],["archives/2018/page/12/index.html","de32f5179f709ca99bd921154b6a0d67"],["archives/2018/page/13/index.html","d262a64829d0dd928f3b673689a00e4f"],["archives/2018/page/14/index.html","ed8f0a0860ebb03a578a6b5ebc765ed3"],["archives/2018/page/15/index.html","1bf4cd289ebbffc75915ab937d97df57"],["archives/2018/page/16/index.html","2578991a3371b4efa99c295f617dc38f"],["archives/2018/page/17/index.html","4a8e6e53343d0f63fdc2c1b54902e1c3"],["archives/2018/page/18/index.html","de552aa6cdab5ee3ca0ead65330213ce"],["archives/2018/page/19/index.html","eb2b48549401620138e44b90f561b5f5"],["archives/2018/page/2/index.html","bee1a36099cf1c69db354630306f0c71"],["archives/2018/page/20/index.html","95858c5d5c8516a67fff22ffce1a2e0d"],["archives/2018/page/21/index.html","44f5f3e4ee45787856fabc21f8a78da8"],["archives/2018/page/22/index.html","40e7073c72ede86d31c21d94871e8f19"],["archives/2018/page/23/index.html","19f20cea224730206bec460a8be81ecf"],["archives/2018/page/3/index.html","2cae99d5b309c949123f9945cdea068c"],["archives/2018/page/4/index.html","a59d17f6294def1665b8d0063bad26c0"],["archives/2018/page/5/index.html","be8b73ad6bc5f37617896043e63ebe91"],["archives/2018/page/6/index.html","0ac060485041cbbbd46be73af4649779"],["archives/2018/page/7/index.html","0be763432cc565ef227a6223b3f0f7ac"],["archives/2018/page/8/index.html","905f1e65fb29c7181afc9230da696b86"],["archives/2018/page/9/index.html","fc9d9d784da77f413533c5caa95b5f00"],["archives/index.html","91d1f355fb815cd3732fcc29c78da1b4"],["archives/page/10/index.html","5354d1d60b8e016790eebbb322ba69ee"],["archives/page/11/index.html","b4efe140044483b91ffd357b38558215"],["archives/page/12/index.html","d6b8366f6c7e1cd6c5bc86a9b646ac20"],["archives/page/13/index.html","2c7f5212af3304cfdbf71051f20e6719"],["archives/page/14/index.html","0cbe83c4fa87b81d293e6b4e707d39e6"],["archives/page/15/index.html","b54518131b04c36c37b873794b12852d"],["archives/page/16/index.html","df57cbbf6630d4314fce1840c32e9b88"],["archives/page/17/index.html","abff4325563d8327e621eba33cc7fd8d"],["archives/page/18/index.html","4faeb7581cb0d57fbb5c78de46f2d346"],["archives/page/19/index.html","91f8638b0e326d255bb6cf78df8b9b8d"],["archives/page/2/index.html","d35b079cc9247aebfabbc872a6796a79"],["archives/page/20/index.html","875a30472b7a1a8da2dcb59dcd074225"],["archives/page/21/index.html","61503979cfccc0c5e8bb4a65913342d8"],["archives/page/22/index.html","751d4b6a712888f63c93c65f3f29fdcb"],["archives/page/23/index.html","d5b6e35cac1f78836ce2465ca492c19a"],["archives/page/3/index.html","af357d301362be6676804df763c7f0a7"],["archives/page/4/index.html","dcd269f84ee95dcec0b3f43f08c59e0a"],["archives/page/5/index.html","714d052b90863b413903172cf33012c0"],["archives/page/6/index.html","b584671c1eee1d4ce48a0813a322b0f1"],["archives/page/7/index.html","348e7c0da74bf8400ec844c34e0138ac"],["archives/page/8/index.html","4e33214405c18aa54957ef36f5486814"],["archives/page/9/index.html","a7b95e960d13250660f8d7b5e1385cea"],["baidu_verify_DfMf5XqJUb.html","02d69e1c039ec84e3b377f83047dffbf"],["categories/dp/index.html","7296f3c17fd8d6a06f18c9cb51cce856"],["categories/dp/page/2/index.html","7a4fff37e84bf974fef60cf44e1ea9ba"],["categories/hexo/index.html","cf83124e3f0e2398b1e1a09d3e73fcd1"],["categories/index.html","a285272638c93e7c029b191919136717"],["categories/java/index.html","15d2ff206ba5f856265d364194a31d90"],["categories/java/page/2/index.html","0ac8346cb2289b1b209514c33751d194"],["categories/java/page/3/index.html","eda25e4b26853c4ab840fae1bf7de115"],["categories/love-peace/index.html","65e14dd16f84e1384cc181847ac33957"],["categories/二分/index.html","d81b564b8a3d4c55d075d54c75ffd0db"],["categories/博弈论/index.html","e9760246b41da60a6cc2c83503d0b6ee"],["categories/博弈论/page/2/index.html","b13a1eb506d7e8b7732347a2f5c994f8"],["categories/博弈论/page/3/index.html","c615b93635dfa1a561ab98f70e365ea9"],["categories/图论/index.html","a375f1852fad5d621c5e8c8d123af54f"],["categories/图论/page/2/index.html","baa28ac177b2625686669896d4336f59"],["categories/图论/page/3/index.html","f337ef3d9a59737e4b0901f64e8e043c"],["categories/搜索/index.html","584efac9d84b3f12d9066de922554064"],["categories/数据结构/index.html","06ef66ccb79197237f05f21b71b2c538"],["categories/数论/index.html","4cdb6a161e28f6d19ee586b2759da41e"],["categories/数论/page/2/index.html","0a11da9ac62a42ddf9e795086c4d78de"],["categories/数论/page/3/index.html","6731b61b2a8212084dc23d8b515b44b0"],["categories/数论/page/4/index.html","fb08c6e29e318cdca9bc3c75732e7413"],["categories/数论/page/5/index.html","dd3e79c6a83cd303ef870dbaef5d9d1c"],["categories/杂/index.html","7b86abc49af9a8db8d8ba28d149b0ab1"],["categories/杂/page/2/index.html","ae02d817d5075fdc089eb1bd5911b3fd"],["categories/杂/page/3/index.html","519c8d451957599a1dff110f7341ffd1"],["categories/模拟/index.html","f4fe5a80cc39901efaaa2f8163e9a346"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","04f71bd7b197328424daa28b4dc934c2"],["categories/计算几何/index.html","e0b0659cd5d8440ee8f3c466c59eea97"],["categories/贪心/index.html","6ed7fd7eb063b883932dc2d06b792f9a"],["categories/贪心/page/2/index.html","e77826f4409f79c054f9d24ad88828d2"],["categories/题解/index.html","b09557668c8fd74ce79e628d5b28974a"],["css/main.css","8fa9ae9d61648646a4a077f99314b214"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","052589ea4cc0af64622f10ca058ef240"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","fe365286c2302b9cbb549013b51bad46"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3ac7b616781b1e7a9b78b388d140abc9"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","5e840e42af3dd12ff2be0c1491de37cc"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5b12f422d9437fa1348bec1798b93b18"],["lemu_demo.html","bb7e1e14662f8ed06f409c50ef49e27e"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","350272e4d02126845928a11f5fb6f363"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","1fb54bd95deb4a82682dba6d87ff3344"],["page/11/index.html","9b28fa752181529d139ba99abe2e1287"],["page/12/index.html","afdb92331f7df540b69a217dbd8dec6f"],["page/13/index.html","24a847899802f5b691b7ca5d7b4146c4"],["page/14/index.html","1209da9fb1bedbcb066820646b1a2620"],["page/15/index.html","a6c5d3de049b6ed35c7b14a6c6919cef"],["page/16/index.html","96bc0805b42d5a5cb5a9149a348014f1"],["page/17/index.html","53403db80dd69fb08811ddeedbdf78cc"],["page/18/index.html","333d1df90cf2bfa1507bf4d2a7e8022a"],["page/19/index.html","82e8191d033ea79bbb8661abfb3bf579"],["page/2/index.html","d3dbf502c613ad2ee340aaed94eb76d2"],["page/20/index.html","3d139b7eaae3f3c33f666f9dbe70156b"],["page/21/index.html","31332257734322867fcd9ce9962c3721"],["page/22/index.html","21430a56cd762d0c389404646a8f2256"],["page/23/index.html","ce78d6ac70ed326f244761d290e821c8"],["page/3/index.html","3d40715b79c5b72e13dc661cecbadf6f"],["page/4/index.html","2ddd760d0395369269257f6d3fbbe666"],["page/5/index.html","e7c17f0f018c3f6e7d802e52ee5aec3f"],["page/6/index.html","6fd64e215b6e676679b14121e33c1909"],["page/7/index.html","b0d66ded7006f57c3fa369dc76da89ac"],["page/8/index.html","ef9e5ac06ed53bbb3456491ca55fd111"],["page/9/index.html","d595f794b265703d9c7d67f172b054e6"],["tags/Floyd周期检测/index.html","7c869b314c698095410009268d164942"],["tags/IDA/index.html","b8dd0a13f955147c98c36012614e398e"],["tags/Manacher/index.html","414488c568196df1f8cd2a0822528024"],["tags/Pollard-Rho算法/index.html","25700244e0667518f17333f2b75e7f7a"],["tags/api/index.html","0965b0d597556bcd3e9690cedf8fe24f"],["tags/bfs/index.html","879b2149d223d0a0b8dc61cd96a9ac84"],["tags/cf/index.html","454e455b0420dc677585eba4a0a7b10f"],["tags/css/index.html","81a5f72fad1cdbdd5a09c11aa070178f"],["tags/dfs/index.html","6f0bb2b886c42923e5ccfb119b4faf62"],["tags/dijkstra/index.html","66153b91147668dc57cf7f9b89c5a26a"],["tags/dp/index.html","2062ad0b64f7b5c3a8a195e538a05b64"],["tags/dp/page/2/index.html","ffe53380116939a691efac7031808681"],["tags/gcd/index.html","bb26b58995180b3c9324c540393aaaba"],["tags/hexo/index.html","a674ace69e91f2956958bf7782a93447"],["tags/index.html","45795ce2c423a8ab94d5e165c18c7e39"],["tags/java高精度/index.html","ffca6dae1d1e80c48f083920482b8602"],["tags/java高精度/page/2/index.html","5bcc355ed95ff8ab934a745bbb58788f"],["tags/java高精度/page/3/index.html","9e44ed1d127d973e45721c0d97f71774"],["tags/kruskal/index.html","753aa9d9d9b9ff317b073e0be91ff8b7"],["tags/lcs/index.html","8b6b343fa69cc207157e8c1f53716ecb"],["tags/leancloud/index.html","f0541b805254f149a9f18842c549f9d1"],["tags/live2d/index.html","f0fcd0ff73d3da4e0543e7f8c3b8cb64"],["tags/mac-OS/index.html","d8891e846fd19fda1b16455cc2cff7a1"],["tags/prim/index.html","b02f4a5228ae298ba8b88dc458927119"],["tags/python/index.html","7acc428b0e8cc71f7261172dca36e542"],["tags/revolvermaps/index.html","0aa9d95cb8de314b67fe6750b4dcda33"],["tags/rmq/index.html","6b902c0f863ac65f34e5f94cd48c9cdd"],["tags/sg函数/index.html","62801dcc74a8b23ebb7b84ccab85fb66"],["tags/stl/index.html","99492b56f390f5c76e2b313ae5ff95e8"],["tags/三分/index.html","59f25fa6f3b1598a062cd7e1421dffb5"],["tags/中国剩余定理/index.html","e852ab754c2beceaa8930ffceb7b3ece"],["tags/二分/index.html","ea8c7e2c0b213b008dd8d11845ed6349"],["tags/二分图/index.html","3ce374b017f16858b2d634018f759815"],["tags/作业/index.html","a9cbd319dffb278ec2389738ad5339b0"],["tags/全排列/index.html","88b46bd3003c0ac62b457b6f20c31177"],["tags/分割平面/index.html","b3bab64ca756deec907b47fdc1f32363"],["tags/分数规划/index.html","b518b2c9063e625cb982b1865d37b25a"],["tags/前缀和/index.html","01613794f5db4e75635596d7ebd65a8a"],["tags/勒让德定理/index.html","8ebb6b7eaaad88ab6c71225dc6f321e3"],["tags/匈牙利算法/index.html","97116862c9347d1667ffd00e4f3423f3"],["tags/博弈论/index.html","0110ed00f6e2bc01f31df1bbc51122f6"],["tags/卡特兰数/index.html","9bd3b62649463fd06fd5f2a46338550a"],["tags/卢卡斯定理/index.html","9c0c4260ffed2146074722b5a4609a37"],["tags/原根/index.html","d7dd146391e769e931846f2a92539cc4"],["tags/四平方和定理/index.html","73fa820946dd0376e00ffc72dc76923c"],["tags/埃筛素数/index.html","87d1500d38f357e9ecf0e56b1abe585e"],["tags/威佐夫博弈/index.html","a00c421e17651d8a03076db02e7c2569"],["tags/字符串/index.html","161b96ebf5c9569f2e96c7cae8de4b38"],["tags/容斥/index.html","f4e9d9daaa3511eb1b4d399dc8265f93"],["tags/尼姆博弈/index.html","55a587ff66bed8d10cabe112cfc9a5a3"],["tags/巴什博弈/index.html","9fe57448b3f5bf792728864ac2e21f87"],["tags/并查集/index.html","04e0dca9fd5da70852ca88f08c9ec759"],["tags/归并排序/index.html","7e2dded2a87d7e83601ce7eb918564d8"],["tags/循环结/index.html","4191d68496926822a3925db0c27b61fa"],["tags/微信/index.html","a087330b0f38c8d11d8d68d8a83d07ec"],["tags/快速幂/index.html","22be89deceec87a05d5619e36d55e291"],["tags/思维/index.html","a87bdb72e8fbabd62eb8496e2a8542e3"],["tags/思维/page/2/index.html","410247f45826dcb6af5eaa2224442ce5"],["tags/扩展欧几里得/index.html","e72cdb0f2bc8d65c2badf286cbed7bfb"],["tags/拓扑排序/index.html","4f5785cec8fff8dd52dc2dfd5c0b5e53"],["tags/推公式/index.html","9445e9d683850bb1d605c43155598a2d"],["tags/推公式/page/2/index.html","c6d03fcf2cb5f29c7930be72142a3c4b"],["tags/数根/index.html","0ac0e4f2b30dda8ff91838a48df41625"],["tags/数组加倍/index.html","df2cb340bc072a77e76821b88e7175d2"],["tags/数论/index.html","06389ad50cbaf5f555052fb561eaaa6b"],["tags/斐波那契/index.html","5be3ee054c6e4a250a3a766cd19d5378"],["tags/斯特林公式/index.html","2d4ce8196b035ef88ea0b6b8191252de"],["tags/斯特林数/index.html","a727b27c3252771d0ae70926af07ce0f"],["tags/最小生成树/index.html","db9111bc6f42b59499893bb600c4c654"],["tags/构造/index.html","fd82970ed95564efcb8bfa3fb2d8c268"],["tags/枚举/index.html","448aae5b77790a286cb5c3c27937e9ad"],["tags/树状数组/index.html","37f9d06bcdcf1729da7a4008c1681d49"],["tags/模拟/index.html","d2dd78327ec4810d54b2fbcbaae77869"],["tags/欧拉公式/index.html","518173c9efaa8842fe7cf8a6e73d3922"],["tags/欧拉函数/index.html","d6c8ff1154eff02a2ad6e3333946bbbe"],["tags/欧拉路径/index.html","b194cf6f1a4d548ed89da84c045449ab"],["tags/海伦公式/index.html","276e1c62b038755cf94667b1fed86acf"],["tags/生日悖论/index.html","2049c95e36f03ff5736ff27c34a69fc4"],["tags/矩阵快速幂/index.html","691df8eefca8b48efa96b4ea2703d1f0"],["tags/离散化/index.html","7e7fc289eadbe890f5f1c9f6471d7b5a"],["tags/米勒罗宾/index.html","8c2763e0d56432e635b000e4d3452f45"],["tags/约瑟夫环/index.html","4191085b9e9a55da67bf468afd671303"],["tags/线性基/index.html","97b6479aa34c73373a6c4819246bc2ef"],["tags/线段树/index.html","582d17eb00021f943a66ab848df7abf1"],["tags/组合数/index.html","dded41bd4a6d9a6c740996de9c8f6eba"],["tags/组合游戏/index.html","4e771a9c60e256f9cf341ef4b4b397e3"],["tags/背包/index.html","fe708676d21c5dcde2d2deb965d51ba6"],["tags/莫比乌斯函数/index.html","025779813352c330689cae505a50f995"],["tags/计算几何/index.html","39d995278abbb47032872b0a10198874"],["tags/贪心/index.html","b6f54a891d27f71004cad35a21edf65b"],["tags/贪心/page/2/index.html","1d95648eec2c5e125c7f23c00edf1168"],["tags/贪心/page/3/index.html","2be731e901b519c6a6db6f290e10cbad"],["tags/逆元/index.html","ad205314c5ff4c96bba0354363f3682a"],["tags/阶/index.html","80d18a6abbc42948ee190d9395d58f94"],["tags/鸽巢原理/index.html","276bc09dfc6d4a9e46bc869cb458e1db"],["tags/黄金分割数/index.html","ba315269541995eade014f58d3c57f64"]];
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







