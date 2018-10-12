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

var precacheConfig = [["2018/08/11/hello-world/index.html","9756c4729431f7a043f517df84d456b2"],["2018/08/14/1995 三子棋  /index.html","280aaf40768ca0e46ab7044ea3a8d0c1"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","7f280a76480178b6b1f8efd19d2545f4"],["2018/08/15/2006 飞行员配对/index.html","498a9a52e83d2878733c832b2c6f96d9"],["2018/08/15/D.Tea/index.html","374735d69bb4173639b6a8e916e83b49"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","de0301ecbb95a5cdb602aa13a0be7b85"],["2018/08/16/1459 迷宫游戏/index.html","7d114f88236f7066ffdf23662b8c92b5"],["2018/08/17/1264 线段相交/index.html","40b2cba0214b41a1277ef0136e8c1144"],["2018/08/17/1265 四点共面/index.html","2d165ec58432c2237cc047aa21b62cb6"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","c5bd220553292d739718e169018557e0"],["2018/08/17/1384 全排列/index.html","b7e47ebe5771505943210cf89334ca38"],["2018/08/18/1240 莫比乌斯函数/index.html","dfeab68e370aaca5b2d3e0c141e25080"],["2018/08/18/1256 乘法逆元/index.html","8461b666f7e81587cb4ed7e7d443cca2"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","34ad75d12b7d9ea4c43a9f92cfb581d6"],["2018/08/18/Teemo's bad day（并查集）/index.html","2cd9e57801fe6723f9c5b57649407e12"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","8f0b3111a680850bfd7ff666d1c4975c"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","72d06cf64577bf2c8e915a01b1be940a"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","8f5fbe6fedcc2fe0548b50f7adfa40a2"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","6dcaa579058423923e9cee0bfc00ec0a"],["2018/08/18/hdu 1856 More is better/index.html","8b9f57dbfa07eb3594701b77e595f2cd"],["2018/08/18/poj 1182 食物链（并查集）/index.html","fade5f70e3bcf0de813ee12bc79e973d"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","523b3a5d14aa7a7868f19adbed00f3a3"],["2018/08/19/Minimum Cut（读题。。）/index.html","bf242d284e04abba5a0633f621dafa64"],["2018/08/19/Ponds（拓扑排序）/index.html","7bf9af0268e0a4d1854870df4380c371"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","c4fc44c8826e5257add87728433b11f9"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","df87ba14ef15c18984cba22de4203e20"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","e2a691babf39744eb07f2cfc0fee8be7"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","8826d6b087e6f004cb131f250a61b661"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","c194c223396bd284bfdac3fd2a529f69"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","a607183347a005ac756586cc6201a772"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","3d27b0dc7ceb3f15f67b9b1e431af0db"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","2ad0e4949e81bcf1967630102598321e"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","6eb16b88a5fa7e83b385fd003a5557a8"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","bf8bba9e73e6bd9d3eda26557c864b59"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","788000a042438d19552d3339de801f92"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","177f8abc7bc2c33d93d56183e9351b9e"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","ebbdc413d132998dee5540edb9a7f067"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","2a89dc941b4946362e435edcd6fcb9bd"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","e1690dd3a44aebfd7c374d65fee0dc8c"],["2018/08/20/Pawns（博弈，思维）/index.html","7aca92becbd0a0d2dd0d93d93ca2911e"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","ac9621477937595e06e8f33311c0501c"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","1eeb76a873d771a48c689f78f57231a4"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","9169702338cfb9b3be4dc05cdbc0b8e3"],["2018/08/20/hdu 1564 Play a game/index.html","4735514414f438c5508554a5680be790"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","4bc2f1dd4245f1226f7311ba9d58bf46"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","a11f37b9735d8e5f6663e7fb88c48dca"],["2018/08/20/麻婆豆腐（思维）/index.html","734bb2c06a96be136b136ad30c106ae8"],["2018/08/21/1212 无向图最小生成树/index.html","a562169707ec0c552da3e8183eac236f"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","b4f0556878f9ea914945d63946afac80"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","2e5da7f666bbd3ff540b2ebb2b16c974"],["2018/08/22/1079 中国剩余定理/index.html","f6f36298e82a2dcd384721744803c536"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","5bcdba034b78f4c8d170a7321ce563b6"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","47bade32254360a74af39c91354b9d6c"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","5439fc1ed725cb2bc39fc1288d6c603c"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","2ee27d2eded1d97b946d2aee5bac4be6"],["2018/08/23/1136 欧拉函数/index.html","f561714e106a6c3e44123bdc297daa3b"],["2018/08/23/1137 矩阵乘法/index.html","8c12295697f93575d78e27587d503153"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","ea2ac1dc7753b5e3f3e60de25ab88185"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","7dff1e17d0b228882e741f9c5f9ae4f9"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","50a4239a48bb913f5563714c3ab24192"],["2018/08/29/hexo4/index.html","349d01d512d354ba9b476868866c60ee"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","c37f321d4e15ca87aa20793498801678"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","4975383b423b1211d02cb90a53fd65fb"],["2018/08/31/A. Too Rich/index.html","bdac8b635eb103815c66aa90c741f19e"],["2018/09/04/C.Catalan Square/index.html","9d610dccc1fe217feca84b2733455933"],["2018/09/04/hdu1002/index.html","d39f40819fa765675c28e5c84b57c3f0"],["2018/09/04/hdu1042/index.html","e115827d2df1c7d61b448d3bb59b8faa"],["2018/09/04/hdu1047/index.html","717182ed5c9deb60aa68fadf8863505f"],["2018/09/04/hdu1715/index.html","1998e5d4f46b7cc22e8ee6dac31b14cd"],["2018/09/05/hdu1063/index.html","8fca6e15abfb6057fd3c0cbe4fa22f7f"],["2018/09/05/hdu1250/index.html","4bcc4d7cd6a715a9f3c3148a60ddba6f"],["2018/09/05/hdu1316/index.html","9eba13597f81e3785c9cf2f4b91ff3d1"],["2018/09/05/hdu1753/index.html","7ee0e43494e242eaf65c7bcb9d6556d2"],["2018/09/05/java大整数题集/index.html","c240e32a5d41c476acb98cc4ff9829c4"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","95846647179b5f94eb5a6a1915125033"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","8b9e5d7529b683f3df9ed5d17aa35668"],["2018/09/06/hdu2054/index.html","b0850aa363e5139fa2ed2e07bbe28344"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","1cc29a363aa58af787ad92d24855384d"],["2018/09/07/hdu1212/index.html","22b461a0dc5e115b16b5f093a4786636"],["2018/09/07/hdu5050/index.html","015ce78ac29fc4bae0c0b01cf584d7d2"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","d6aa23ff201732004c7b2fcfbc5bca56"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","4f31ea1daa541b3b7b54cf5f8e269a21"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","9f7adcc4d070640e2d55a2b7b1531ba6"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","581edffd23b8a10036dbb062b52779aa"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","60b08d4c740a0f85c38ac203b2eb666f"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","de38f2baeec787d77a0558b01c6730da"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","8df30d59b83c4c5646e4a37f8c7e9fd9"],["2018/09/13/Teemo's formula（推公式）/index.html","b5881c251154cf986682815b27407ed4"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","e49c076cd90f9977f997d43ced4ef98b"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","3dc3f642138656e8033803fd2eaeaa0b"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","a570395224fc3efe673abf79d28ed5df"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","be377c751d329e5e29e04dc812558b3b"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","654ca147cef24b466b1a734d045f1f39"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","5b2c23948808b4089d29d7c668adf9a8"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","31e6e2ef184f14a0c69925f8be33d952"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","a5e29cfc21c618588353ce7350f9b09d"],["2018/09/16/1118 机器人走方格（组合数）/index.html","3394629206230c14f733a0c9bee8a472"],["2018/09/16/1134 最长递增子序列（dp）/index.html","401ec2404660b98111a7d988b1570e82"],["2018/09/16/1135 原根（原根性质）/index.html","dc9e21b8e297a9edd4f7e031716ec2a6"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","8ef117fe42d73053f2994f99cb82625d"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","1b50cc209304527f1b6c694548da9691"],["2018/09/17/1073 约瑟夫环（递推）/index.html","aa161534a95be4a19b1c99d4ac75e9b5"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","c7dc51b75b41f372fd34e456e2dea5fb"],["2018/09/17/1085 背包问题（01背包）/index.html","e8e747b75b36cd4cbd0fc405282d3582"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","c6541684c2595fd83543ed87e9bca529"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","289a2841c756475e98c9067e242fa7c5"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","c97f29f49a0a9a0207dd6e27eeed42e6"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","752f7080aa291860f250651da376a27c"],["2018/09/18/1027 大数乘法（java大数）/index.html","fb91fc266a8da0c4e89ff437f8c305c7"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","a672ab3ed4a6c62f64b63c9054aea212"],["2018/09/18/1049 最大子段和（dp）/index.html","76b314da08301097939062be7c0007d3"],["2018/09/18/1057 N的阶乘（java大数）/index.html","51f575543aa394ce525349ff99119fb8"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","7cfe19f9314451e31d92acf2f77ed952"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","5a80cdd1ccb10094aa6061e202897407"],["2018/09/18/1072 威佐夫游戏 /index.html","6ea6b0f97b7fad57bd81a2057de36037"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","9fb5c7303ec851b01cd8f9c59246afdd"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","d815cbd42a12441b65e1e7f61cd1a892"],["2018/09/19/1000 A + B/index.html","8de3b5d81069277e293fe32353343880"],["2018/09/19/1005 大数加法/index.html","624104f55f6950ee454cdbdab88fb4b4"],["2018/09/19/1008 N的阶乘 mod P /index.html","d21d2e7671eda49794d7b82bb68b72b4"],["2018/09/19/1011 最大公约数GCD /index.html","979e17d4c16267fc17d824fa32ed99bc"],["2018/09/19/1012 最小公倍数LCM/index.html","ef99b8b5b39071767c2bfbe5a656c66e"],["2018/09/19/1018 排序/index.html","97d5d35ca431e7a5582348c75a6ffd68"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","390379ca728e892ef422c824703d6f6e"],["2018/09/19/2133 排队接水（贪心）/index.html","50565f256153e0e5d377d2aa1e24ddd5"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","1084a27bf241f570c7d82a393894076c"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","f96814e8099ac477711ed7fd66f04e60"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","809a61b5c37872c714d55519d95625b9"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","4d2a06c0a80ac2f20cad6e1215e68075"],["2018/09/20/51nod 1717 好数（找规律）/index.html","392aeba6d31ba4b25be142f7927a391e"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","c5282ea98dc72eac9bccb8de790d051d"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","cfe2673ed4767ec85ed8a3605b2b37f7"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","b85b6bf4161f839e3996e53f8916d8a0"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","cee39da44a7be7eef87c80db8654411c"],["2018/09/23/51nod 1791 合法括号子段/index.html","7bbe86888cbe933e869f73a9573f1443"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","c8cd40493e70b572e9fde8e9ba1d59d8"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","3fb17eba7da6e837a3cacbeebb63429c"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","4b41b4d07ae7a03d113092189fd53dfd"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","c4857b2ce3f829414eff496211e1920f"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","522a5b52bcf8933c5fddec8af3077f4e"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","f7aa7f7301ab9e0d41d3b013d045f699"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","5a30c0351a4a25241db78bb10a51b6f8"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","02d92819525a333554a8ded5d3e050f3"],["2018/09/29/51nod 1015 水仙花数/index.html","deb13b79fda90036718fc537187c72d2"],["2018/09/29/51nod 1080 两个数的平方和/index.html","e0115f1bc21832c644ab00615c04ff5b"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","99bd6ad603b7f5c2f4aa33c6567208e1"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","7abfb58725d6556c6b0e3c4812ab36b8"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","e1f73864ef16e1452ae89de806759eb2"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","4f1bf39529762a7e45905b76c1822876"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","eaede2bbd0986258b565d88cb81f8a8c"],["2018/09/29/51nod 1182 完美字符串/index.html","66923b55e0784ac779d7799e5fcc2f3f"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","70b64a3b29abfd6be7be56f1f9c1cb04"],["2018/09/29/51nod 1283 最小周长/index.html","7fcee96cc0f24cb0e2af61c9b2ecfb5b"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","c488cbeda9b8147adb6b098cfe21a393"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","b1246f1595265b36afd251f746fb69ca"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","65c665d48f6914a1f81f06106d3c5a67"],["2018/09/29/51nod 1344 走格子/index.html","d50ccb5b285ce08c55c42ab029d33737"],["2018/09/29/51nod 1347 旋转字符串/index.html","5d1422f0f4e48e5aeefc200d603de694"],["2018/09/29/51nod 1381 硬币游戏  /index.html","54420d25610a8f689d83aba7350373c3"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","743e41722cf6ae9c313cd9e0f5b4db8c"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","d1c20c2bcd1f72e257c87c973674557c"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","8fce560bcf5f100c69f567e25b397ede"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","0da798944b6df8cd7e392577fe678771"],["2018/10/01/51nod 1596 搬货物/index.html","e1b887782ec343f891b734611dce5d21"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","f87d83c7e3c52e563fbd97e787d4b396"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","e9d54587dc3f0582ddc5b1c6b61451df"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","75410e76f1881f79e8ac670a16d5712a"],["2018/10/02/51nod 1521 一维战舰/index.html","380ff0a47b9cca0277062bc3a30479c3"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","acaf64322b1253472ad3dd0279784f56"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","8bb4de93dd247c1c3100206cfd11f8de"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","a14c2d23fdd802e08e1cb2b70fa6bfca"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","de799cfe4f62c0fd61de864a435dbe15"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","56b00e611dd6e9aa4fce85dfd97d2cdd"],["2018/10/03/B. Pocket Cube（模拟）/index.html","22ed2dac3fed54cc9532cd918cf13b92"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","e9e0178254015924912c1ace8681b5c6"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","00c549a3a45e8e0031dda73bea132ad9"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","fb5f9f95e1ad5d8539ae415eb93df394"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","015503ea46ab2e507d05f30614f58144"],["2018/10/05/51nod 1138 连续整数的和/index.html","ee28becd65d6238d6fa070f3bac4dab9"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","cfe068fa3483cff1ec4f6fb2dd36863b"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","484309e9cdc0fde055bba6fd74eebfd5"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","a3a2e0bea6b5ba504159efb45b90751b"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","406026efc6a86a71a3d03788e72c7f97"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","d211793a70213d1d6a2759d9f5d8eec4"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","ccf63fe9d2c36ceecc1dc7b8d3c0cafa"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","8cc959b98ec8f0cd229ec5ecbd621781"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","dabfdacaf1d2f2749f4de42da8178077"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","466c8f7c938dee3e2bec090f35aacd51"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","a8ab45317ab66fe61cc54e30b3e46fb4"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","da0ea23caafc2f18afaef576f2768045"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","15159294d5d4e4dab8a7e295d52bfe48"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","3fbefc499f78aa2adaeba8358f4c135a"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","88d25a677ccce418abcc6862bb940d5c"],["2018/10/10/ural 1073 Square Country/index.html","e23ccf58e74fc0a84cde996f4078c57a"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","cb4d5ead2aab9cb40977a70b009cd933"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","895bc1355cae26becd228bc746ba0f7f"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","108739eac00d440ebf82bae9adc986d2"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","a68e1b20ec069da2b77a2828efef39ea"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","d2658675353bc5e4dbabf9bb2ac8812f"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","fb04ba1dcc03233dcc714157e0b8ffb2"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","a862c37c15bef6ced13d8c9d2b89a3b6"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","6a14856ed3212c2bbd6677c7c8635529"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","a03210082dd897f4f56c855fd22696c8"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","7f8352504cceecc66dac5e2303641986"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","9d51e1b26b4fb63d21e40db9fa79e47c"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","dc3a884fddc2413d57510afca4725e2d"],["404/index.html","92e4c34dab0d6d25388621d0c5be4a4d"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","c0b87773f3bfd2ab701be994451f8e4a"],["archives/2018/08/page/2/index.html","281afb693ce0042ae15281c527d2e6cd"],["archives/2018/08/page/3/index.html","e79409d725de6e1b4c3072944da91616"],["archives/2018/08/page/4/index.html","d9c118d5deff3ad702d0a5811fee2e65"],["archives/2018/08/page/5/index.html","bf5f0fd694e8c50cc47b5e1bf144fc97"],["archives/2018/08/page/6/index.html","e135ed41ba0853f51cb1cfdf103cc7b1"],["archives/2018/08/page/7/index.html","eac9d9c1912588691d14f3dcaeac6ef0"],["archives/2018/09/index.html","08128cb9f289026031fb75d99fb16479"],["archives/2018/09/page/10/index.html","a425e80504cadfd0825653c60740d2b5"],["archives/2018/09/page/2/index.html","755021ae297b13e5f6d23f94e9f86c46"],["archives/2018/09/page/3/index.html","89426f290e3cc98d5e46bbd5867600ee"],["archives/2018/09/page/4/index.html","ff9851059287ca6c84b6d4f472588238"],["archives/2018/09/page/5/index.html","67630a064d232abd2b71611b0f8dc2e0"],["archives/2018/09/page/6/index.html","d85d17f6b98fed113892579c7746dc80"],["archives/2018/09/page/7/index.html","c6c454bb9611b9dd5b2f32fb08f38cdb"],["archives/2018/09/page/8/index.html","fb33f8dbaa0e4a201517e772bd371826"],["archives/2018/09/page/9/index.html","2ebcaaca5017bb61a8555eca4c180141"],["archives/2018/10/index.html","64a36881f538d9769be98f15057ad39f"],["archives/2018/10/page/2/index.html","bba31966e5a150f6f66f8661296d6fdc"],["archives/2018/10/page/3/index.html","d7e6c026b4a30405956e5c1fbb64b1bb"],["archives/2018/10/page/4/index.html","a5dfc84f65de61daaed1276c975b794f"],["archives/2018/10/page/5/index.html","2f6ad1369f70f76c3af06839b40095d3"],["archives/2018/index.html","53dae2b2b23be766184b1b312b5322db"],["archives/2018/page/10/index.html","056d22d1365a7eb4638286b6d01909e7"],["archives/2018/page/11/index.html","110a970b44cec90b6b59362f16caf96c"],["archives/2018/page/12/index.html","fa501fee5b97fc5186c13d012f2b2b5b"],["archives/2018/page/13/index.html","50571e7c6bed55b72104526e3a6bdb9d"],["archives/2018/page/14/index.html","4925afa23c85d559e279d39d3830229f"],["archives/2018/page/15/index.html","4229ee96ea5298dcbf8bd2f48ac9b8af"],["archives/2018/page/16/index.html","42b90b33fe9fc41d6dac013c2f21d068"],["archives/2018/page/17/index.html","3e12b57460bcf4f2b7a710297533069d"],["archives/2018/page/18/index.html","ec74233c276fe8772f894f3cf92d7d18"],["archives/2018/page/19/index.html","d791a1d3dcbc4b616a1f6fb67b2b3224"],["archives/2018/page/2/index.html","27d82bbc90984bbcf60690743469d93e"],["archives/2018/page/20/index.html","9f64385f4e1d42a96cabaf222a8739bc"],["archives/2018/page/21/index.html","35c0e3351ef2db65cb3c488430cddf8a"],["archives/2018/page/3/index.html","e83ea1b3a219fea8d4cb2ba516e8d72b"],["archives/2018/page/4/index.html","c6c9aaf20aabc1a9558a64bdc3476c33"],["archives/2018/page/5/index.html","0a88720486670492b6c63c0764018178"],["archives/2018/page/6/index.html","2c2948c1864c7f849c18d8859bfb2c37"],["archives/2018/page/7/index.html","2cef6a9c7368e94de8419d0fc12a53f1"],["archives/2018/page/8/index.html","23d5d5003b2fdcd218bb94b4d823b942"],["archives/2018/page/9/index.html","f40457956deede25aea4cf1ff1ed48b8"],["archives/index.html","6b98a0ea3a4d4f15e0d893318c90622a"],["archives/page/10/index.html","c697d02ef58b7dcf5a2f19688be2d957"],["archives/page/11/index.html","4c47781aba27724b55c89421712bde68"],["archives/page/12/index.html","b8d41e9e8512a6672bc830a9ecc09e8d"],["archives/page/13/index.html","13e7b3815d82e25058b459cb4236cff4"],["archives/page/14/index.html","b97144c1eef2e4730e9383eb78b5aa93"],["archives/page/15/index.html","f1215e2638ca3e8082d7203c2668e5c8"],["archives/page/16/index.html","d8ea291c2fd3391e5c45ea75e27ebb79"],["archives/page/17/index.html","0b90f66567bda99b4ec78fa3fd382383"],["archives/page/18/index.html","1be9028b537741f9ae2f95c271ea35ab"],["archives/page/19/index.html","f9a77d217aaa9bcd1dd76422d00ac184"],["archives/page/2/index.html","da151f84893eb8dd88c1f9ab340695d2"],["archives/page/20/index.html","e28ffe6f7911bcdae5d4233dd4868b0c"],["archives/page/21/index.html","73983b929dec830f30090e73acf91968"],["archives/page/3/index.html","c40d21995bfdbadfd085decec418538a"],["archives/page/4/index.html","22b18618f13cff186c2cd09a80e045e2"],["archives/page/5/index.html","d44d2eab58b81139da4772d25c218889"],["archives/page/6/index.html","9ef30dbea0f6e284a0c1571543340e48"],["archives/page/7/index.html","357295b5fe0acae7f2db328815ab53bb"],["archives/page/8/index.html","4ff9fb5b6fcaa45c685eb445867a450e"],["archives/page/9/index.html","a7882d7667ec517ea494e3c7ce8ff404"],["baidu_verify_DfMf5XqJUb.html","0fe1d36b128573009ebb90f482a52aa6"],["categories/51nod基础题/index.html","72867de252ca47dbdcd02dd0bb6626b4"],["categories/51nod基础题/page/2/index.html","c8f63de6a71753201f18fb13f45d7c49"],["categories/51nod基础题/page/3/index.html","8cee74596a83478f23fed93e411879b3"],["categories/51nod基础题/page/4/index.html","b34a8a8a371aee93383be5fe9b77eb79"],["categories/51nod基础题/page/5/index.html","79e46b735c2e0f5f724b402a840ccf42"],["categories/dp/index.html","5a1d8142a47038157872c89b89682957"],["categories/dp/page/2/index.html","ca0826b29a936eea8b49ce903604ecd8"],["categories/hexo/index.html","0e5d8ff29b38b1e2d8b9e1322d79d07a"],["categories/index.html","608dfd1d924a2cfa7a74e33637b55637"],["categories/java高精度/index.html","9650ec7414c25e6cb2733dffc3639876"],["categories/java高精度/page/2/index.html","9c69189457034069506aebdb6c1bc525"],["categories/poi/index.html","ed4cbd81f473db5b46822587985dd756"],["categories/二分/index.html","65e075fde2d6e5cd909accfaa28519c2"],["categories/博弈论/index.html","65d7394bbe4e176abecc376f4cee7f04"],["categories/博弈论/page/2/index.html","183d87c6ffd12465119b775775492ca4"],["categories/图论/index.html","c90e41e086bbf73fd083d6536787394d"],["categories/图论/page/2/index.html","bbac4186691dcf778aaaf681e64e3966"],["categories/图论/page/3/index.html","7f59111cb5eb4860286c3d5fbb1b6640"],["categories/搜索/index.html","a1e3ae09d71ecb601b5f22e298cd45cf"],["categories/数论/index.html","ce6794daafdfa56dbc0b91bead04e2c6"],["categories/数论/page/2/index.html","b9d7b0b922db3476eac89b039c5fa34c"],["categories/数论/page/3/index.html","0c14788ba0ed9f102115b602485e2ffe"],["categories/杂/index.html","1f491b190e519398d18924016ae0052a"],["categories/杂/page/2/index.html","598f98428515d1519ec784c14020f740"],["categories/模拟/index.html","277669ae678cf478ade6e6d890381dfb"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","f9d8812e744802da1c0c860145a925bf"],["categories/计算几何/index.html","d0c08dd97bc8b6ce1944fdfe77f7aec3"],["categories/贪心/index.html","7e9f9758e0c7f4639416c5c1b3d94f81"],["categories/贪心/page/2/index.html","2926ab6f1e13a7f4bfdd710b5ce93378"],["css/main.css","d96f805503f8937344e7026757f64b5c"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","aaab90b9c2a4fedaa409f8cb5ca7bd26"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","a13c258398846aab51287baefbad2147"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","7bab01a58644e66b2c81c3a74505b9bf"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","6f0f8720247e4a27f22a72d2072535ca"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","ada5513c39e060618499af75ce93b5ab"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","2e766a862d304db91dde5c10554c73f2"],["page/11/index.html","d020e6a3c067b49e62e8ce8a7eb14d37"],["page/12/index.html","0a67be572875f503d078d66ae375ea65"],["page/13/index.html","a8f436686ebd1bd6712a4bcfb6190f85"],["page/14/index.html","243ed1e3ed9a7b86e438058f5928e93b"],["page/15/index.html","654dc0b11d8fd257372de69a06a49ad4"],["page/16/index.html","8b8e860c51652ed5bdd01fe5c4d75e4a"],["page/17/index.html","5c5094f19ae411f33b95761960f85acc"],["page/18/index.html","e142ddd49bec339a810a1600cc98df06"],["page/19/index.html","dede513406c044c0c2a39b584be2575f"],["page/2/index.html","20b583de137533c3c9c2053d6f66d69e"],["page/20/index.html","7bd7999f17f3a2de631b2ba525200063"],["page/21/index.html","7c14def408aa43c1c33000e6c1477f2b"],["page/3/index.html","864c04204abc2f44578eb390e3b9819a"],["page/4/index.html","1ff4a9f2e68d6bff307115e7f83e228d"],["page/5/index.html","04089e674a0e4641dff37f06a051f25c"],["page/6/index.html","37e30bc312b681177ead5cb5d59678dc"],["page/7/index.html","c3a624e42bbbe1405c02959e0abc9799"],["page/8/index.html","39fa40ebc409ef80fad7bec7ba417644"],["page/9/index.html","481b3438fec5781f26abf52a71cf97b6"],["tags/Floyd周期检测/index.html","e14d5bc13b681349cc6a8df2073f87a0"],["tags/Manacher/index.html","737ecaeb8cd2af876cb8ccd47ce82ac2"],["tags/Pollard-Rho算法/index.html","8ee85e35463d1a48ce745358389ef2ae"],["tags/api/index.html","2a7990329e0502bd38b79a51e84752a3"],["tags/cf/index.html","715e5bce2ff15101b79bb32c3c59c646"],["tags/css/index.html","4d72e41ec0d19b3208b5d9f0c93987f2"],["tags/dfs/index.html","daebfb173130244fb309697bffbd65ea"],["tags/dijkstra/index.html","252fd22da3af006fea03cee35bdf70af"],["tags/dp/index.html","93959f55404c330a88e9c32326221e70"],["tags/dp/page/2/index.html","2ec71aa822ce6dcde370b0e40b12d07b"],["tags/gcd/index.html","ad046ef0b722093662ceb014fcb0f5e0"],["tags/hexo/index.html","91815ed8342b894a06116d8dc5b7e0b2"],["tags/index.html","7d508c7e958aa703fa14e7a23ac42a90"],["tags/java高精度/index.html","861b28a2aa0e430ec2eeefd6b5f0cda4"],["tags/java高精度/page/2/index.html","7b3af61db25a5edd147512e460d8f3e4"],["tags/java高精度/page/3/index.html","82bf0a0e33d9880bc1c69f6f9b29d109"],["tags/kruskal/index.html","dfe656180c6b7fb1cbb6b778c5a901e9"],["tags/lcs/index.html","a3851ea3703e557e033a70d4475072de"],["tags/leancloud/index.html","79c5166c2dbbf7a10a1c4c584d050310"],["tags/live2d/index.html","1c06297cb45f76e10215f72cd20ac8af"],["tags/mac-OS/index.html","19e4f6d47e8544313d52c967d9e08a76"],["tags/prim/index.html","b3d6c1f78d8c5e143970a0b5634c205e"],["tags/python/index.html","a0aafd40f267de1c348b94dbdf511050"],["tags/revolvermaps/index.html","98fa26d08ef1cc6fda3c45a79a7aaaa8"],["tags/rmq/index.html","7649ad32c53837f673e6a05629c43a8f"],["tags/sg函数/index.html","db26da21068d1fa36aa679c4bc05353d"],["tags/stl/index.html","0d30e13382e29b07759df7d208718d65"],["tags/三分/index.html","9556163cd6013775f136d5ee5bd2bbab"],["tags/中国剩余定理/index.html","38c7606b2e3a01c866716cbe3855ea92"],["tags/二分/index.html","2df4ab44ccd102110099dbca1e9d7380"],["tags/二分图/index.html","c0b528dde4c31c283975dcf49f01e4a6"],["tags/全排列/index.html","6a3d0b8951923f38ff281a3bbbd4a275"],["tags/分割平面/index.html","5e8e87a2c9ac4bc4a344b1407d0212e2"],["tags/分数规划/index.html","4efd9c8ca6291d0199a33bcc25c41265"],["tags/前缀和/index.html","28c7df986011a99031cc8459260c1f37"],["tags/勒让德定理/index.html","95379ea478b41dc0f5b90068d7f36b91"],["tags/匈牙利算法/index.html","a37f2eab55d5d45d00fc52aa46e58867"],["tags/博弈论/index.html","1a07687d992988d25aa734404bd395fe"],["tags/卡特兰数/index.html","08908732e56e5d49225e3d96c7a987db"],["tags/卢卡斯定理/index.html","efea397d726dd54963654b0640c29025"],["tags/原根/index.html","517828b6112ac5b78e51169601773bde"],["tags/四平方和定理/index.html","71f40a5e46d93788bac36fb945331c8a"],["tags/埃筛素数/index.html","e9f4c6404fd68841a79bf0e0dfa54063"],["tags/威佐夫博弈/index.html","f2cc9a054efa4c1615a85aeb8766fc20"],["tags/字符串/index.html","3fbc1ef1146add05402a9849beb5a028"],["tags/容斥/index.html","fae7690d6d5a682bd7cded13017c2f30"],["tags/尼姆博弈/index.html","693da15759e02e2022ea56021f19ce76"],["tags/巴什博弈/index.html","45b8f40d69c265a61a87bd2b1afcb301"],["tags/并查集/index.html","ed2b23bedb87954cf2c48133f59733f5"],["tags/归并排序/index.html","c7ebef2299a606769590559acf34b0f4"],["tags/循环结/index.html","0d61ad58290e1b922e99e8d5f17e6dda"],["tags/微信/index.html","9a244368ec7e0167ea97a7f9b4f95ac0"],["tags/快速幂/index.html","380b75581829fdd8f59d586b186a3bb5"],["tags/思维/index.html","6f06f89ff54528cfdceeab0084ef4095"],["tags/思维/page/2/index.html","7e93046188510b37514f3f5983417772"],["tags/扩展欧几里得/index.html","d463eb85e9c826052ae3384eeb573ae1"],["tags/拓扑排序/index.html","80d241015dd1f02dabe050daf1591714"],["tags/推公式/index.html","2ae6fa0cf045af94c512644a9112162b"],["tags/推公式/page/2/index.html","7c008573fec5313f1434d63ce713c8a7"],["tags/数根/index.html","7fb28c1e8edaeac44a6b6573234ecd76"],["tags/数组加倍/index.html","6c9897e8dbc6d65b36a702258fbddf17"],["tags/数论/index.html","8115454f87b511d76a3c8145c8b31e14"],["tags/斐波那契/index.html","fd348d2a8c0d780db1b93777bf7f2fbe"],["tags/斯特林公式/index.html","ea82651d47bc79faeae2a65478812566"],["tags/斯特林数/index.html","ae6591979fdabc8033776d35f4cbb4d7"],["tags/最小生成树/index.html","c1034c4ea24cd271a04def1e0e00cff4"],["tags/构造/index.html","3b8dc2188a9e253281001a985c259837"],["tags/枚举/index.html","46fd018fedef95f83f3c8248759a1a04"],["tags/树状数组/index.html","ae083310adfb422f25e236153bb2dc1c"],["tags/模拟/index.html","8cbde9050a1c1f12f13a96e299f431ff"],["tags/欧拉公式/index.html","ecf68ba026e2a0cfe0977eaf7eb4fd84"],["tags/欧拉函数/index.html","28cb53e263f33029dc1a93002d026449"],["tags/欧拉路径/index.html","ae9eb16f881628ba3d0f8c8c0f79f854"],["tags/海伦公式/index.html","9afe93b20dfb46ec8bf25e52f7138df3"],["tags/生日悖论/index.html","e2aa28fd1246791f662692f7093fdcd3"],["tags/矩阵快速幂/index.html","21fba248e608992e54c9d9eb05901696"],["tags/离散化/index.html","bfbf333346bdf0c86f3490571456e339"],["tags/米勒罗宾/index.html","98c156a54aa75de7e8a3bc5267572ad2"],["tags/约瑟夫环/index.html","97b5e227f789f19834318d8dd7a4c227"],["tags/线性基/index.html","4063dada7fe775d423b9cf0634faaa27"],["tags/线段树/index.html","dd14f7535501b488fe5c14969c74f686"],["tags/组合数/index.html","40b0adfdf2701e4df06e5b9eb4d7879a"],["tags/组合游戏/index.html","586420d8d069feb3ecc19cc1f451c4ba"],["tags/背包/index.html","cd96536d0007fb342e57e07f9e9b6958"],["tags/莫比乌斯函数/index.html","91ab247c3ad811455db1738cf500c570"],["tags/计算几何/index.html","b68f6a0f898531207d04347598bb9252"],["tags/贪心/index.html","c697cbcd03402b3505a50ca9262b2254"],["tags/贪心/page/2/index.html","9a47556a545d9b2099670e0c859a4ad2"],["tags/贪心/page/3/index.html","84f99fae0896ee76e5906191e07e983a"],["tags/逆元/index.html","d2116091b5edc3dc12997f88228ad8c9"],["tags/阶/index.html","a109db5e36a7409d8c96f65d6a85c91f"],["tags/鸽巢原理/index.html","f15f1586579b82e3a94b7f952cea9a7f"],["tags/黄金分割数/index.html","9ab5946bd7d51cd5e9bf2ad74fef6a9f"]];
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







