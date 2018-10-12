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

var precacheConfig = [["2018/08/11/hello-world/index.html","ce8827f31cfef62b793b22cf9ccda405"],["2018/08/14/1995 三子棋  /index.html","9bfb2b49d378c43aaaf09d146020acb3"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","de21f54a309eea9c6c0f69a26aa0f6d7"],["2018/08/15/2006 飞行员配对/index.html","52de02bf4301412ae8a9c489af20fc5c"],["2018/08/15/D.Tea/index.html","ad685bcd60c6247af67403fc3a0f3567"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","6b9aafb35c4c9ef86da10a8075b9c853"],["2018/08/16/1459 迷宫游戏/index.html","3e84ec7e27ef6341f05dcb00c25c140c"],["2018/08/17/1264 线段相交/index.html","092721f91b41430912235d14f9d8ed6e"],["2018/08/17/1265 四点共面/index.html","f1c84e8f8aba8e27b8adebeb147b8c6a"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","7861a3c11960de385ef13c9e0bee087c"],["2018/08/17/1384 全排列/index.html","743bdfab663d760a130d458b3aa8eba9"],["2018/08/18/1240 莫比乌斯函数/index.html","34977247ca1084a7023ac7fc49ef1378"],["2018/08/18/1256 乘法逆元/index.html","83ff9dd43816881d3bb5556954eb8a6d"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","8eba30f8ccd58e57937d6897ab957c39"],["2018/08/18/Teemo's bad day（并查集）/index.html","4980e307ceb373e8c647f66438d5c62f"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","a069aef4b238fc4a90cad30c941cae28"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","90bd77201ac7ff457d9e8fa54e79711e"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","4bf98509b6354e752558f31feddaf146"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","9ae934bcfb3cbb3158f0b349398d62b7"],["2018/08/18/hdu 1856 More is better/index.html","27b0a7071e07f4f446d2190e4112a949"],["2018/08/18/poj 1182 食物链（并查集）/index.html","4ba6b5eb8b2d4ed785b9fc5bd7a43080"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","77bca2a0b4f36fa2b312fc85a5484aef"],["2018/08/19/Minimum Cut（读题。。）/index.html","83e3622395000e31a968bd72c4b3d3ca"],["2018/08/19/Ponds（拓扑排序）/index.html","4747610c93bc527252ec79266bc509d2"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","87313de3a4b35bf15b0d54040370ca31"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","fbe1ead1ec7efdd562e0c6497bf3d40f"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","282298278be950a21d47558a3aff0a16"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","347ab2ed48c094725941ba73fb919101"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","a04c6f97363d7abb8d93b7714e221728"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","8abfc833e2796ab444fc5e9a737bef26"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","89c404ac612d55ce3d134914acd30db0"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","42766c3678d56c78f761ef9843243a16"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","60da321ddf1c60132643ade42c0d3bfa"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","bbb731f69c17941c83b5d0736af9c111"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","0a5732b019780e84b8a0fb1489fb94bb"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","a89067b4a1c4c7cac3332f4becdbc206"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","8581bab11acc07cbde0ff5cfdba3555c"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","0d5f5cf603c47b00854521f954432ca1"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","e995ddf245a1bdd9be2da94bf612db34"],["2018/08/20/Pawns（博弈，思维）/index.html","f0c1cf2165b0d4321e6287ac1918c72e"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","7bda984d955de79b30054ed4949d21dd"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","ca3ed629d15da37ad53a69ac1569a13f"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","1d0e2b8df0947f0dae51d4620eec9839"],["2018/08/20/hdu 1564 Play a game/index.html","80b930e9e82b333728a785154be7a107"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","51406e3f08461ddda85402bcfbef6052"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","d4560cad630f54c27b5128837b3d9fb6"],["2018/08/20/麻婆豆腐（思维）/index.html","ae383105ba80baf1f2e5a5c5666c02e5"],["2018/08/21/1212 无向图最小生成树/index.html","ace42926cd62a97164b08cc9ad4dd4aa"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","5bb189e7cbb591b5d2eedec407a37aee"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","56754d4f46fc4f32a342f179bded0c49"],["2018/08/22/1079 中国剩余定理/index.html","ff9ea1c8f37dc4df9915e894d355802a"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","ef162c5a51af9a9c169cc4fe57d964bf"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","b4f3b3cdf871a7f41bf0929e8ef39e2a"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","ebd0dd30d78edf341c0f01c8eea50004"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","d91c120336d11f32f91f575e8d1e047b"],["2018/08/23/1136 欧拉函数/index.html","c07a371e4c537cd4ae7a91df6ab46329"],["2018/08/23/1137 矩阵乘法/index.html","6e50ce29300c1eede9b79a41051bfa99"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","5b4d6ed9e830700e887599142890fbd9"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","6602722027ac5c4bc0ae7df26a33dce6"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","4ef0499a3dd62c8db1801196e122c140"],["2018/08/29/hexo4/index.html","5e2ae1ee30c42ebb1b99302365a67c97"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","72972cc3cf726fd4cf8ee2fe2ac4194e"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","56226ad6dc8c422fd268c53e5169ce01"],["2018/08/31/A. Too Rich/index.html","b0064855bdf9c1a4b7d3ef590a13ee93"],["2018/09/04/C.Catalan Square/index.html","458efcf4f0e55f7ab603768816574240"],["2018/09/04/hdu1002/index.html","3680cb702e59a28c0103bec7185794f9"],["2018/09/04/hdu1042/index.html","93221101e8ec7682278a6662c3fa2ead"],["2018/09/04/hdu1047/index.html","55f352ca53e63f2c49775465efe9c265"],["2018/09/04/hdu1715/index.html","02ca80f509ae4cc900b73a27a6084144"],["2018/09/05/hdu1063/index.html","42366790ea8ea4ef8bbcb8c33f417d20"],["2018/09/05/hdu1250/index.html","98fc9d63ae9579c5c3e993ccaf682387"],["2018/09/05/hdu1316/index.html","fffaaea33a1ecd0a81f03749e0810af9"],["2018/09/05/hdu1753/index.html","1f83d86e5db17b6cb385857c0c2750a7"],["2018/09/05/java大整数题集/index.html","8dc8409262cec4d4ce924d0cf9faea09"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","7ed65c5b644c256eb2d3691f4794e914"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","c381288bad3a7329ed503257481df59e"],["2018/09/06/hdu2054/index.html","6ffb351e3cbd60bbd51e6b74c9d0d559"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","e8a96cd450ef9ca3e29475b0f5789783"],["2018/09/07/hdu1212/index.html","67767c49f0d4d313ee46d6834913e416"],["2018/09/07/hdu5050/index.html","bac9d6ff5b398ce202aaebb092c89a47"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","8a059947149e69cd1c7344f9102e94a9"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","fc77ebb83c8d3a5c612c5f32f5854416"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","ba34280173ea33f1d8c63c8c6b77f3cb"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","c5b535ba1041616408808f5b29666ab5"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","7bb3d6412c912346be24480829bfded9"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","1dd2dda66d18b8389c0b39448a3245e2"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","08ea68677ef7f2d83ae37128c9d68512"],["2018/09/13/Teemo's formula（推公式）/index.html","fb706463bb20a24a30c707075b4ef6da"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","87668dffbde67a2c48f7290cb6bf7245"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","69e5ce7c28dbef8f568d2e122d0185ab"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","b4025e4dce43eb628f96d33e717fb611"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","0245490ff4836533802deb99230c41e8"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","035bb480bd97f3b358035347179c7d7b"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","55cf0d2bc1bc2e6d6d9de9cf8eec8507"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","a9cce7daaaa5bd611e69f1f67eee16a6"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","fc9da884ad9b188472e577ba22492d0e"],["2018/09/16/1118 机器人走方格（组合数）/index.html","86381dc929eab69b21448a75611d78d8"],["2018/09/16/1134 最长递增子序列（dp）/index.html","46ca8de5eaf9e34382341040e3aa061d"],["2018/09/16/1135 原根（原根性质）/index.html","32ea3f580ca817c2e909109e0bdacb79"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","2f81064eeec28b92efa142c985e2a68f"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","651221652df9e05b79344402cd49233c"],["2018/09/17/1073 约瑟夫环（递推）/index.html","a8f25010a48f1dccec7b9d0ae4475bce"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","487649665c89fc2c088f8f3bc50c22bf"],["2018/09/17/1085 背包问题（01背包）/index.html","1e12e443d6cbc82dbead8bf64d667339"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","94c51032528b2b4cfd011153b14e6e6b"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","ca0c470f238678b8e5d6320eba8e8a13"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","99c0f3f7390d640441e8f5403352ae14"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","c2c25005127471a84694545c58dc3b63"],["2018/09/18/1027 大数乘法（java大数）/index.html","8dd1c9132c479de6c4737f3f9be6684f"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","26adf1cd45472806cde3bcf5f5f9a74a"],["2018/09/18/1049 最大子段和（dp）/index.html","7de57d2d229416a6ff2856b8b8e307f8"],["2018/09/18/1057 N的阶乘（java大数）/index.html","608d7aeb1c884bddfe9ca3ad91418e2a"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","e4589373c1cb4ba25c591b3d694cdd90"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","a3ab58f3ddf2a96920c9efc9aa717466"],["2018/09/18/1072 威佐夫游戏 /index.html","905d1bed2fbd41685adb779f8d6ed23d"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","aa10c7e05b6ee6ae9de52acaf7890b7a"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","89bc29434fe7f41b9deb3e50669b2a42"],["2018/09/19/1000 A + B/index.html","f2eec11888c54e5f13e5bcd1a4824250"],["2018/09/19/1005 大数加法/index.html","403ca834fadd87d9546bd35adbb88882"],["2018/09/19/1008 N的阶乘 mod P /index.html","19f30f98cbdf12f2ec7b12f69a3114f5"],["2018/09/19/1011 最大公约数GCD /index.html","2aa236af505f0045b2c652960484e8eb"],["2018/09/19/1012 最小公倍数LCM/index.html","63cd8de1f39ceb82cbccc6c3a7940be8"],["2018/09/19/1018 排序/index.html","57d94b809b0fece703370623b61e81f5"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","4ee5a6c1303e9c0da5dcc4c3da7b316c"],["2018/09/19/2133 排队接水（贪心）/index.html","906b108603cc3fe93c31ea904f8145ff"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","32c305d48b27a93521ca86c0146d744f"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","3707b8d859a20e39047c55d1cd889ba3"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","1c51abf4baddacbe454e556540d4db48"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","80a6a28cd69be307df24638497ba4d67"],["2018/09/20/51nod 1717 好数（找规律）/index.html","87d013defb94ff68f4eace360df0f72f"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","91f46ff4d5062035fd8b72a6a1645ca6"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","bc898b1356c9c7a739eeaed8d97a503a"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","d0d9625378238d51a4e57ac9068dd7d7"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","7a371b4eabc58cade4c8fe5299759e12"],["2018/09/23/51nod 1791 合法括号子段/index.html","a9cff75b636ade54e36bb985c6aed239"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","48eb86d33017e207065a86ece09d5739"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","a32f61c47350657de3cab878cc3ae08a"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","adfecf59d50767032d9be12f0980ca4e"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","9f807f65a33f021b1a56c5efa237b690"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","1c7f8cca735c2b235688f50fbae52462"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","c92bbe1cf2728779fe0655377e8abec4"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","30911d11200af23ea0d561bb8ef3aa6f"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","fe8cf15c29151cf6db5e0c24a624c930"],["2018/09/29/51nod 1015 水仙花数/index.html","6b9e5a57c1b09e638ce8b8da456bc871"],["2018/09/29/51nod 1080 两个数的平方和/index.html","cfd0d822fa59904d405a72d750aa7bc0"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","8214f0c8d38b1c3fba799d80e1b5ecb3"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","dcc2459f0a3e5ebbf4db09cef92faf18"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","1868ee1d03bcd2d0f41483cbd522b59e"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","bcfe2eb3dab876212e87d46824f3f9b7"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","8551b65a3f854414740a5b18c1da9635"],["2018/09/29/51nod 1182 完美字符串/index.html","5e927598a86589bb5b876cb8dae06fd9"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","be278278533b886adb55675df878e4fc"],["2018/09/29/51nod 1283 最小周长/index.html","6f32d2ddad49ec0acb00b403fd482bd8"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","c96115659227c4ae4781ff4056777c18"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","0bb9f7035feea4e2d4691755da795a30"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","f39d29d977e98d4d26515adfd9781c38"],["2018/09/29/51nod 1344 走格子/index.html","3dbb45a718ce7656a9a061343a833abc"],["2018/09/29/51nod 1347 旋转字符串/index.html","990bedb9ca44248d41371fdab9fa386d"],["2018/09/29/51nod 1381 硬币游戏  /index.html","f5205bfa4d5d8313f92815a0efeaa8da"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","147483fa1565b061d64cb68a9d243385"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","be9325fa95e331c2d8ead09e7a89b03e"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","4ceccc27c9ee9d5dcb95331bf478f05f"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","1fced78ad0846db14b73e6bd7b6eb835"],["2018/10/01/51nod 1596 搬货物/index.html","5447c3635e9371b456f37d05bf21c2cd"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","aab823ed61de8cf3b982d6f676d97c0c"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","8861cc155e5bb5f6a07a4efbf0394e5a"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","b061326e08007125a5dc5e61a9be80da"],["2018/10/02/51nod 1521 一维战舰/index.html","d3c346a9d69d1890ba4412fdfa8ab167"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","384570cc4dcf3b1d10a97ef71b67dfec"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","325e8d1cec6096969d6b35e2c6358571"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","c9dd8d413a77118e7c08db22bfaa4a4c"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","d28a15c01f9a95cc6ffb822667762111"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","869dc06571facafa0f87331f20f74929"],["2018/10/03/B. Pocket Cube（模拟）/index.html","1704e9c02b1dcf010a023b5a689f0173"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","79d205384a79296d252d430d310666b3"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","a383bf348735da9aeb71226cbadda374"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","167c07de3ec4c3349984fe23aa10883b"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","b8a0605586a577f68fbea947d962c6ef"],["2018/10/05/51nod 1138 连续整数的和/index.html","895f69cf4391d9e011eca88a9ab65697"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","bcef83acddaef6db01bb24726f6f99dc"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","4d6315b3f0d97ec203ac2e87f68a3d37"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","a5ae237d99d574a0e02003a7a50a1787"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","01a31e8768109ecc4d66e87b6b409bf3"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","6a424af5288b4c5badd8508a79d0e076"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","e322ec212761e3010b6003417834ac48"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","8262d2e20fe40ce60d9388863e950ea9"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","d0280b6711f04f3d5f0e751c25b7c6f8"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","7bda42590b9b2dee4e3752f20834e1dd"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","0ecadbd770310a08bbd2fe27e546495e"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","26d31cd7a39f2eaaf6b8d5b459ae42af"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","aafc1249cd4f48cb758cdfd73a339989"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","143067ad79ab2fa253f3bb291b601286"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","59266f7874d8bd7ce631a1f5955b368d"],["2018/10/10/ural 1073 Square Country/index.html","246180fdf9e894f8634e32fb67894656"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","b8a3337d5e403de83308c48a058654a3"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","b91d6465295704fb362cd1d952744052"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","931864efc3d5181848f94604e288cadb"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","6b8ffd5517d77a8a50b55e016c6a6e84"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","54a573ae7615a9b3815e88b3646a5d2f"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","8c6de1eff327c154b2b73e20013887c6"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","f2333bc2a70fe5eab86e3af3910cf532"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","c7cac248da5a3c38a707138263276e1b"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","0b47d0588c54878adb9aba7a93baa0a5"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","1ca0f57e42b9aabcffffc9eb621b9cbb"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","0a587306f68cd8ffa576453f98bf445b"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","41c44b5490d25d89720b21ff3d173115"],["404/index.html","8d14c1e0d66b0189a8faabb0c886e636"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","5efa12285e8a56c93075b1f9f1ac12cc"],["archives/2018/08/page/2/index.html","9d2c9fccd4f9693704e1d46140c0b3b8"],["archives/2018/08/page/3/index.html","e9a099dc7f5cae84ce8db73d70d0dffa"],["archives/2018/08/page/4/index.html","69b41a9a66f52a4b5343e074c52fbf54"],["archives/2018/08/page/5/index.html","43943d008aa25bf6937b25542ce048e7"],["archives/2018/08/page/6/index.html","aac172c67849dc71042f2b2f93b7e9da"],["archives/2018/08/page/7/index.html","7b9397a61c066e4a5fa492be83118a81"],["archives/2018/09/index.html","135967d638b1efe2b425339d2d6482db"],["archives/2018/09/page/10/index.html","b7928c132794cefd41a89ccf670d93ad"],["archives/2018/09/page/2/index.html","afd4783e6bc9faa083d9c1392c4dfa94"],["archives/2018/09/page/3/index.html","327f0f4a3f5213673fefbd9c726580d6"],["archives/2018/09/page/4/index.html","e5725ee3e05222b1036a83b5a2f226de"],["archives/2018/09/page/5/index.html","6149ac8e76f8e4c48c8c0fea3495a808"],["archives/2018/09/page/6/index.html","d422b9f9ad3e51aba44ead77e36298b0"],["archives/2018/09/page/7/index.html","5bb8b6c61f1ba027008a31482e6d0b2f"],["archives/2018/09/page/8/index.html","f708d350f2a1819849a814066656791a"],["archives/2018/09/page/9/index.html","cfe85fa632fab7a878734967e3535076"],["archives/2018/10/index.html","367fb6de88348bbcd065b2a2bb868e01"],["archives/2018/10/page/2/index.html","3c0426c9aa01e8a738e931bdd32e8fed"],["archives/2018/10/page/3/index.html","923b4a37fb94532414dd1a9954bdd723"],["archives/2018/10/page/4/index.html","26d1e5b8f8a402d5a944f42459c809e1"],["archives/2018/10/page/5/index.html","b3c0ca4b6b9768757a7b1bde8f495308"],["archives/2018/index.html","c379f88db044c2dfcae469fa356e5b5c"],["archives/2018/page/10/index.html","38c43951ee8e455998fdf269c1568049"],["archives/2018/page/11/index.html","3325f68cd3382cfa4412d5ffe8e799a5"],["archives/2018/page/12/index.html","ba8f5ab1c5fa720596099bb5677f98c2"],["archives/2018/page/13/index.html","11276237290136d1f625ed7ee7bfef89"],["archives/2018/page/14/index.html","be15aee4849664e60aa9a3e759301ac3"],["archives/2018/page/15/index.html","20e54b20dc90c6ddc5afdd62d7755d04"],["archives/2018/page/16/index.html","2a74d300109bab3842d3de3282ed1413"],["archives/2018/page/17/index.html","b29c24bd76363aebe40aaf5396128461"],["archives/2018/page/18/index.html","63657ec91891ef4cc7b52cd1827cdd7b"],["archives/2018/page/19/index.html","261771aec62cd87921528a2672fec41a"],["archives/2018/page/2/index.html","27f6310a1bad4dbf58b4715d0f3fcf4d"],["archives/2018/page/20/index.html","4789b1bfac006d8f99d73d7cce4f790f"],["archives/2018/page/21/index.html","496127e9db8c2cc1feb6b7d6dc490fcd"],["archives/2018/page/3/index.html","73306a0a5cbc53e363cd29084fab03d5"],["archives/2018/page/4/index.html","df1ab65b98cdc98e3f4e19e8786bb52a"],["archives/2018/page/5/index.html","01e0bb8d36eb887d060994ec0444d582"],["archives/2018/page/6/index.html","1f3e18ff926c68ae8bd6c8126891f0ec"],["archives/2018/page/7/index.html","d38f480ee8c0a358bfbec485509b6ba0"],["archives/2018/page/8/index.html","30d14495ce9e7fa6eefa06427e7492ed"],["archives/2018/page/9/index.html","4d62d241cf1ea0a427af743b9d6e7a03"],["archives/index.html","129ddaa2336f8ab688d248916c04e35d"],["archives/page/10/index.html","2d7aa9a6f4c2ad65388c9e3708d04bbb"],["archives/page/11/index.html","ace49583f06ac66033f429897de70e22"],["archives/page/12/index.html","077e435021e983354ddf4c35433a7948"],["archives/page/13/index.html","37240661de12a3477afe3ae57d57f82d"],["archives/page/14/index.html","0f070cb152b92fa22f5a75cfe54df0fc"],["archives/page/15/index.html","dfc7c130180c74a572d92733a564a45c"],["archives/page/16/index.html","088c9ee8203e6a220d78f1ea0a2b323e"],["archives/page/17/index.html","334efa21e5f187eb48f118fca7a64d63"],["archives/page/18/index.html","01402ec00049a86f966fcf00e881b0b6"],["archives/page/19/index.html","cca815efe1621013bb758bea651d4968"],["archives/page/2/index.html","6b643052d6756052f184aa2cae91d873"],["archives/page/20/index.html","ee6270508665b501b6fa12b570089a84"],["archives/page/21/index.html","0c0491b2fc9c1d62c5e8c17ae6531056"],["archives/page/3/index.html","feb1597deb9bc8cfa514dc0ea0c15c11"],["archives/page/4/index.html","548ec5368b4b8d91d1e42b16154b202a"],["archives/page/5/index.html","c575374663cfa5de5a283eea0ae3f3cf"],["archives/page/6/index.html","d90fec0171d847344c66ddc43a60f39a"],["archives/page/7/index.html","c0f78bf8e7dd93d2d35c9aa2113a3516"],["archives/page/8/index.html","db545b4a3aa8a3c29c87930638905145"],["archives/page/9/index.html","70cf90dc9acc5a9e01bdbcf4eebed9bc"],["baidu_verify_DfMf5XqJUb.html","5c79f0ac169ed10f51ca4ddfb9cd1767"],["categories/51nod基础题/index.html","6b27568e2859c496ac60fdba76e3fc5a"],["categories/51nod基础题/page/2/index.html","8999364c46d1e15967426821dd66ad72"],["categories/51nod基础题/page/3/index.html","a2215b20f50359d9a0c5798007e4fdd4"],["categories/51nod基础题/page/4/index.html","b3f8de69185e9314129a797a6b657b58"],["categories/51nod基础题/page/5/index.html","4fe1b2f5e4b644e155234864f9b01610"],["categories/dp/index.html","cf8c063ead458b5576ecd1d84cee0fae"],["categories/dp/page/2/index.html","5c2d35d74aa022b7ee235d4f2d195e0e"],["categories/hexo/index.html","e402fbccd2858327ca0addad828222c5"],["categories/index.html","927df2824452a4cca9feb1d7f95cc7e1"],["categories/java高精度/index.html","d521271ccbd26f9e09363ecec0859310"],["categories/java高精度/page/2/index.html","0218f0a505959cd31629a073400e13aa"],["categories/poi/index.html","695d1a83291ea18e3871f4c47b063a5d"],["categories/二分/index.html","0913e165c46966b3b2b6222622914e90"],["categories/博弈论/index.html","afa62027dc354e72f3f0fdda6165c02f"],["categories/博弈论/page/2/index.html","13461db2c94fca45fce10665c3aab01b"],["categories/图论/index.html","26fa466217e430215601504e1124e6c0"],["categories/图论/page/2/index.html","8ee52aa8efce8f19323baabd5ae682df"],["categories/图论/page/3/index.html","a5f16579f5193080e56053d8947bc718"],["categories/搜索/index.html","f14015f8b7dabd8360ad90f9e0c12699"],["categories/数论/index.html","ab3c5fd7609c5e43abc82af0e4aa781e"],["categories/数论/page/2/index.html","1420646cd67a4b8363d325431cb4c053"],["categories/数论/page/3/index.html","ab70c338de33f19e989ed2ff71b8c8e8"],["categories/杂/index.html","702a26c40a393778c94166969327afda"],["categories/杂/page/2/index.html","8d99c707024fd430dbcdbb7e99c6acd1"],["categories/模拟/index.html","270946b20d16e7b4ba5645b5d33131bd"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","24811f969b650378f4294b68e7a51655"],["categories/计算几何/index.html","25acc4619938c448875f4b37a1b702ac"],["categories/贪心/index.html","99b5cfdb3a25240859e5ede412da0537"],["categories/贪心/page/2/index.html","e3cf4ee85082e5153fa23de62f5e9468"],["css/main.css","9a0f963af502ca9642cd5980bd7f302a"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","8a6a15413def3b6d888f86daf1a0fe20"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","567c0377b86237a2f02b6b941e86b8d8"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","38aa5a8a1287bccc115ef8c821c776f9"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","39858110b165067533fd10ecdfb1a459"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","fa9555d74e56bc6d1a376345608bea42"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","4ba2c49a3da7cf3d5537c047e635c0bb"],["page/11/index.html","5d181d9ed408dbbda988ef440e138d76"],["page/12/index.html","0696035a82da382d3889a1af9c1244ce"],["page/13/index.html","7e5488ef4da91e2fa444b3d0fe986319"],["page/14/index.html","2d97c6ee448619bd2abb4a51dae18593"],["page/15/index.html","505662cf2b3b15bbd2ff4f9289c598b9"],["page/16/index.html","295ad4dd6336956206cef2908ada5a5a"],["page/17/index.html","91ce81d26f278c968c075b41e3152afb"],["page/18/index.html","bd00c85f5bd6a27a0cd38dcdb872c41a"],["page/19/index.html","2aacf54e42d60df2f4d3d840536e26de"],["page/2/index.html","464ce7ef5332902ca9ddf506c52bfb55"],["page/20/index.html","84aa6ce5349d10527cf3c1d0444aac11"],["page/21/index.html","a58df6052298140e5040e9f9f0b109ee"],["page/3/index.html","3ec117cc89784ede82330f6950d5e4b9"],["page/4/index.html","9b18bec26bca4783296ac6e91804f567"],["page/5/index.html","8693f45e07a479c6cb1b27d09b0dae62"],["page/6/index.html","384921fc8cbe2e02d95f97c959b48510"],["page/7/index.html","41f6967d4e6180563ae5ab4ac0a5c0ed"],["page/8/index.html","7347c86724691a38fa9a8b7d264b70f1"],["page/9/index.html","b560fc5a16f817b048c8556f8fe8bdb5"],["tags/Floyd周期检测/index.html","8f78564c29483c6ca6c3172c52f449f9"],["tags/Manacher/index.html","2687f5b0f78f48de3c3380070fb2a255"],["tags/Pollard-Rho算法/index.html","351348db361a85873233f8abc52acc1d"],["tags/api/index.html","1a7f11a42af04b7f79b2a0b341a0a25b"],["tags/cf/index.html","923818f1115f5d2f8772cfe0d76c6598"],["tags/css/index.html","81d3fd8d3699a164487abeba73fd05a6"],["tags/dfs/index.html","f6aee575083058b9e44b6d7ca3e8d659"],["tags/dijkstra/index.html","3b1d69898d1195b74e6bf2326fbee723"],["tags/dp/index.html","3e4fd06bf5f81b0b12189659e725c2ec"],["tags/dp/page/2/index.html","f84226c0dd023459c222bc7e4563aa15"],["tags/gcd/index.html","4158ff91a4efefc1bd9d04768eb9a553"],["tags/hexo/index.html","28d8491a447392b7fad37e8b5de39edf"],["tags/index.html","3f9c9eb4afa84a1ebcda948edab926e1"],["tags/java高精度/index.html","779d8311461418d1f070bf1871db0598"],["tags/java高精度/page/2/index.html","edd97f0ab7e8b9b2ff5a177b3210a497"],["tags/java高精度/page/3/index.html","116a6d315d44cb2dde41d38134ce638e"],["tags/kruskal/index.html","020b7398448ec74119f4e980a461c33e"],["tags/lcs/index.html","0fa7f64716f574309eae2b4c74ff8358"],["tags/leancloud/index.html","968a0a990bcec5435358a69d111f899b"],["tags/live2d/index.html","18a950a536d7e08c270054e6cfa33e49"],["tags/mac-OS/index.html","8a2764509b98ef0bd110fc11ba1dfd80"],["tags/prim/index.html","800f4036921426baf855608783d67d36"],["tags/python/index.html","9590b8871708c46ca25a91b28ca9e295"],["tags/revolvermaps/index.html","e8cd0b92522dc2d9bee0f631a73ad5d8"],["tags/rmq/index.html","898b7115b819d874acdbef8df343aa19"],["tags/sg函数/index.html","5eb1afb042df4183f8955b2228d3cbeb"],["tags/stl/index.html","d8a6eefc16036129711278b1b2930945"],["tags/三分/index.html","64bbbec288e3b754e364cbf96b671abc"],["tags/中国剩余定理/index.html","c666a180148f18502d78a2e3ea9ac971"],["tags/二分/index.html","29a6d77c092fe72702a6d1201a2fb59a"],["tags/二分图/index.html","0dd17c840a4cb421b331dfc88d25aa5c"],["tags/全排列/index.html","dc709150223f8048efde53dc390a62c4"],["tags/分割平面/index.html","db33d323874b5864fd3f9d2b525e6447"],["tags/分数规划/index.html","574d02d29e812e15e4e17d52c38806ac"],["tags/前缀和/index.html","6d6335302eb2db6307e3cf3c235a23cb"],["tags/勒让德定理/index.html","1080b6e0ead1e19bf673f2624b22ab40"],["tags/匈牙利算法/index.html","753c92a9b80ae907130e7260bc70075b"],["tags/博弈论/index.html","9c4fb2d1f52a697988788097991d106a"],["tags/卡特兰数/index.html","4c454cbb9d8419e670116a08a6a8da2a"],["tags/卢卡斯定理/index.html","3ce42c7d76cf03696e3165395937890c"],["tags/原根/index.html","9a86519103ac9beb88d16e6dd7cc5096"],["tags/四平方和定理/index.html","a32981295271b218e95bb585b838d5f5"],["tags/埃筛素数/index.html","3fb4b24ba59b9bcb5a0fc2eaff28f4ea"],["tags/威佐夫博弈/index.html","4ca9894c46b6cd23055a881561ce712b"],["tags/字符串/index.html","eba7cb377690eec9d557d335f9fbe4ea"],["tags/容斥/index.html","b9b5c8303cf8f68083c1f22d31a096f7"],["tags/尼姆博弈/index.html","7b8dea5cfd3531c233ed37f599cb4473"],["tags/巴什博弈/index.html","b5fb05e92b4d29663313fee27a0ff715"],["tags/并查集/index.html","e9b026728bf76f942637fd05879ac235"],["tags/归并排序/index.html","be0fd4067bed986566dfecab698ebf63"],["tags/循环结/index.html","d7e8578aeb3986213dec8880dd721f2b"],["tags/微信/index.html","5d4724c9bdc6cf5fb412924b460a29e9"],["tags/快速幂/index.html","4b2827c8f26bc203f8956fe237e6bdc6"],["tags/思维/index.html","b147a38868671aa7f8f3fafc9f928d3b"],["tags/思维/page/2/index.html","50485ab5608376033db48bbd2c7f0786"],["tags/扩展欧几里得/index.html","3d58db6918ff26c605622fb1c925027b"],["tags/拓扑排序/index.html","cd86cc6e20b9f9537d4f57691f858c80"],["tags/推公式/index.html","57d6bc44eec8fe663e4e048642e83b19"],["tags/推公式/page/2/index.html","44e2a6e0ca8870a5eeb5d73da62a6fde"],["tags/数根/index.html","66e7d4826ac7a230cc16c8b5ee4cf452"],["tags/数组加倍/index.html","32a99f700b5fcd5c89126abad37eeacb"],["tags/数论/index.html","7b85b2985af07ba9a7f6d1debb98fd75"],["tags/斐波那契/index.html","4306c2fbaa7fd026a7e7dcc15e2eca07"],["tags/斯特林公式/index.html","eaa7814e05c74e69039466d5b4708020"],["tags/斯特林数/index.html","662375b220a59c6a2c76060194ac5ca6"],["tags/最小生成树/index.html","871f3af0a88eec1fbfa156ce1c2323c1"],["tags/构造/index.html","60b992a110650142f20bf63936058030"],["tags/枚举/index.html","bd797169724804a7b4f5552737bfb213"],["tags/树状数组/index.html","aa3e8ee0919bc42cb9b925363977bb7c"],["tags/模拟/index.html","fbaebf381fb7dbf057d4b74cbf8980e5"],["tags/欧拉公式/index.html","578def9e5a4443b09345bd0a8e1d2b8b"],["tags/欧拉函数/index.html","83460607ba4082bb93c3584a24c160d9"],["tags/欧拉路径/index.html","f9004f8f4849c1b34b84f57959258bde"],["tags/海伦公式/index.html","e48bf3e00ea6cd3a3ffd5775ae566aa9"],["tags/生日悖论/index.html","c784b8e82fd685dabef3b845f2db8087"],["tags/矩阵快速幂/index.html","ce4579de9cf437ca8a5007155574e82f"],["tags/离散化/index.html","013e1aed4cd8f8a9bf0996f76fe76dfb"],["tags/米勒罗宾/index.html","c8b1bb2acf5446241fa182fe8a52dfaf"],["tags/约瑟夫环/index.html","c21831b0aee3a9087253eb5bcdcc7075"],["tags/线性基/index.html","1c9511c1cb7f8bc2779cab08dd2be093"],["tags/线段树/index.html","c53f7b67db100367236e9b2cec9b000a"],["tags/组合数/index.html","c2138450ea7f539b03f8ba2adeb66298"],["tags/组合游戏/index.html","e6c0de9bfc375f5b18aea7c11d84f86e"],["tags/背包/index.html","32d18c0b922936a2f1bc5cfbc00f8e2c"],["tags/莫比乌斯函数/index.html","3d120215712c9a05ca6088210cb086e2"],["tags/计算几何/index.html","a415a345b6be721d2d19d3f6b2f8544f"],["tags/贪心/index.html","88eb0deee99a57f7fbdcf4e0174504bc"],["tags/贪心/page/2/index.html","55adbedac7b23f95253290d095a7a766"],["tags/贪心/page/3/index.html","480c2913e28f46d4183f09e71c84f1ea"],["tags/逆元/index.html","d05cc6f9903535ecbd902ccd24c53cc4"],["tags/阶/index.html","b11bffb063192124011d365551125b25"],["tags/鸽巢原理/index.html","a1e48b4c63988c63471779f9df585737"],["tags/黄金分割数/index.html","ac6efe3645168156e154769d7f23db78"]];
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







