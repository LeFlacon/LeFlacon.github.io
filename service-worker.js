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

var precacheConfig = [["2018/08/11/hello-world/index.html","7369c9c81e91e876cd1954fded48fcf9"],["2018/08/14/1995 三子棋  /index.html","0da223e2087b483d364070577c4727bd"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","5d2265dccbdcb9164b08cc06b92931b6"],["2018/08/15/2006 飞行员配对/index.html","a86b9b6a4f30ee6bd1f5cb7acfc3fec5"],["2018/08/15/D.Tea/index.html","a37ba6cf7a140c58c5524ce6b2bf8fb4"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","19f5edea41b43d7c353daab19c5130a1"],["2018/08/16/1459 迷宫游戏/index.html","437056527372df23e1c861b41b384bb2"],["2018/08/17/1264 线段相交/index.html","1569a726aacd3860ce51dbf1ab22a691"],["2018/08/17/1265 四点共面/index.html","5a295141af9c78081cd21dec9175a0c5"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","15c763bf14f1ec9f7dc0a6239422b082"],["2018/08/17/1384 全排列/index.html","9a2e9068d2e3afef3d2879045b8fbec1"],["2018/08/18/1240 莫比乌斯函数/index.html","67ae2391bb036bfa573d71cc3f26175e"],["2018/08/18/1256 乘法逆元/index.html","2dae44fcd6cccd46ee71c911b7af2b14"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","d48d3d3f11ed8916b80c43702d9dfd3e"],["2018/08/18/Teemo's bad day（并查集）/index.html","168060fd7ca41b76811ade0f6fde30b2"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","eacfbbb9bcf9ff5e29591208b98f13ad"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","b9b0be0d8acbe866d730dd84fe92e474"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","ab0b66add14ad6edc47d16d729bd940b"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","0caf02164c4d26c09c265a5610fd2c06"],["2018/08/18/hdu 1856 More is better/index.html","b516d2bc42c0ca4bd6f9b500860ccef2"],["2018/08/18/poj 1182 食物链（并查集）/index.html","0d20d843c585e7a4d51c802020683fb7"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","e779c947f7a782aed339ef16439dca15"],["2018/08/19/Minimum Cut（读题。。）/index.html","1b6c3e3a20957fcd403a6ba40c8655f8"],["2018/08/19/Ponds（拓扑排序）/index.html","e4055983a1cbc6c2dd2e81f95e89f361"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","f6d69475a4c65e40702cf4b24ed68ff1"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","9bbdc67e2bed3104b68afa691a8a9ef5"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","4568693b13e108258e2cfe87d01fde14"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","1c7983692b7c2b2879ab6ec8520437ce"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","2de5c1405a6b711a7c86bb8f3cde9b7c"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","0880df025863405b7312e883fc031127"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","e7d12ed431c1e157eb18840cd8288cde"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","8fefbeb3d3cd97b52fc9c5785313b519"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","219b100722101c21668fda00ca6c8de0"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","2bdb5131de209077f08ce1012df15e7a"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","bcf8ff7e9652c63d3c2e079bb889012d"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","8fd80ade65bbf27d06fa2b802596b1b7"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","c52acc2fe578c7397d284f0e39a0b457"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","2865e8b381284546c915d611b43dbd3e"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","6597131d23d575a29ce2a4e98fd28981"],["2018/08/20/Pawns（博弈，思维）/index.html","7103b26029056bcd6b87fb8b30178033"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","46b3b562736401b915e65efe70a6d40d"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","2a3e19f590a3c942a2b342ad63375bb2"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","621f2181b09bdbadccb2c6adcdbdf6aa"],["2018/08/20/hdu 1564 Play a game/index.html","ea802a33d4ef5556c64821515bdb232e"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","a0fbd26571f45ceac16a901cd9af01e3"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","af9797f65b9d6013d3b7dd8b80807ca5"],["2018/08/20/麻婆豆腐（思维）/index.html","9eaace2ffbb4e34506ff1c953dafe0c1"],["2018/08/21/1212 无向图最小生成树/index.html","b8426f037755773f49857c26d16d78be"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","d39f64e770c83f71237e91d0bbd8dd13"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","fd83fca7c28ed1c95b18d62631146a0b"],["2018/08/22/1079 中国剩余定理/index.html","233e4e4058c7e0e1995af07d8aea7fd0"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","b3e8a153bad7ae019aac1eabe602b651"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","1f99400d94f083f6d6ae7f5ce596fd24"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","846792c01ce47bd8cc98aa0a8309463e"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","f9e06a1f1fc9a311394c525cead1b2d3"],["2018/08/23/1136 欧拉函数/index.html","d8bcf161c4f15eac129b310ee58b461b"],["2018/08/23/1137 矩阵乘法/index.html","65a49c23c3a94f38da5c089dd246a6ef"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","cc4dce74c942d1758fe29073e6e80763"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","c465d541fc995a886a6e9caa0c52b9bf"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","ab32b0b37b3d4ae356b75d109e638e68"],["2018/08/29/hexo4/index.html","365c63027c01f67bce38ef7500a8dec4"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","4b17aa7bb9554cef2e059480610cc457"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","d0d465ab790fa95a806f42a1a7ec8e20"],["2018/08/31/A. Too Rich/index.html","09efe032f7829d2cb38bb12c2993f961"],["2018/09/04/C.Catalan Square/index.html","12fb3474cae5a6931a4942a2a7f04e39"],["2018/09/04/hdu1002/index.html","23d45087fb149abf008c0e7d97186534"],["2018/09/04/hdu1042/index.html","f0cf655b749c5bbe57afabd17887017d"],["2018/09/04/hdu1047/index.html","2432f36767ffcad0804f0ad3c988ec1e"],["2018/09/04/hdu1715/index.html","7788f807d57f8b0b646a697e61d37044"],["2018/09/05/hdu1063/index.html","eb90b82df9d0e3a5198a5121162780d6"],["2018/09/05/hdu1250/index.html","f21a388af0d6088d2b20172a04a271a2"],["2018/09/05/hdu1316/index.html","2066582037ab0e92cf81564499794f34"],["2018/09/05/hdu1753/index.html","02140c45c90f6f8a4af8e2cbc136ad72"],["2018/09/05/java大整数题集/index.html","22043f5b469e5b81f9d47359f6b7a52d"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","fbfaf001b71d8eb796c2f4d86a0e3575"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","9aff33a7286e69f4d88001cf2f840f1a"],["2018/09/06/hdu2054/index.html","b6493d788ebcea638688361e587eca08"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","517d634ac95cd7370b703835dfc34e11"],["2018/09/07/hdu1212/index.html","153e4588ea459474112bfbb66a73a216"],["2018/09/07/hdu5050/index.html","d5e0f4e3f18b8481b309a521bb4e8653"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","439c8030136fb0d0b93a1eedbc563840"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","fb21116bf5401c5ccc7bbc9b661f2d49"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","517abe73d0bfb8f63d45ff0a2d314838"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","eb0cb09ea460671499c03e9f9e6d86c4"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","59e9a2f2d607a6153ed48758a0db210e"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","b6708e64a1f456ba072253b93fd6fbae"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","cf3018dfdfeea83bfd7ac3a4c7cbdd04"],["2018/09/13/Teemo's formula（推公式）/index.html","2128753a7e6000b0478125a4923dae68"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","d1a036a920ea6dc61f977c3886c59b67"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","b62d59d93a958976d9ab58c7f96cae20"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","ea643f9c19c434e384729e6bda0e2d66"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","e8a0b7cba1f5d780d840989b73dd5922"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","9705b5ab757a7aac365ca78dbfbfac6d"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","f0225a853ac7eb6075efa6b87fd68591"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","d7cbe5fb20dbdf27d359576109de85a6"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","b29b800ae0f72a39992425d9af250954"],["2018/09/16/1118 机器人走方格（组合数）/index.html","7a2e7c1f0c9dc82a3123da4f7099314e"],["2018/09/16/1134 最长递增子序列（dp）/index.html","b54b2067c6b4fe75e5e38c5b42fc389e"],["2018/09/16/1135 原根（原根性质）/index.html","47e62d43f50c6ad04d6dac0fba875973"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","7e7677f158b288e86149763e364af21d"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","e2174f589cc41ee9a1fce8158c232a57"],["2018/09/17/1073 约瑟夫环（递推）/index.html","79b89a0bbef67954c1275b511091378f"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","6b5225ee375d31a39ea1a60e5f72eeaa"],["2018/09/17/1085 背包问题（01背包）/index.html","8d434aaaf86c120cd9fdf5494777dcae"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","54b50f961b0ac11efc8b2ebcbae29c18"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","01746f292d0fbae67136660b52a5da82"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","42a30ddb05c13ad3731f5da6ffbb2946"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","d462ebcfd5c7569ac8aceb0830b59389"],["2018/09/18/1027 大数乘法（java大数）/index.html","50c2b9a0305a1340e18f0efcfde2a902"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","0471b4475bbfb310f7ab51b735f68eb6"],["2018/09/18/1049 最大子段和（dp）/index.html","f9fe0852ad938e2a29daf2fbe0a7b786"],["2018/09/18/1057 N的阶乘（java大数）/index.html","6ee17fde1acb3ce53d5d7a4f46f1fff6"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","f97b7f259696d21a0641cd708f2cdf14"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","14d23b7afd586619648b4d1eec84e5db"],["2018/09/18/1072 威佐夫游戏 /index.html","4d4c6936ffe8e47f66978a1d0447138f"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","9452ba5c58274f58db2a25e60e438b99"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","d571a4b0e4192be74f258215d1686c81"],["2018/09/19/1000 A + B/index.html","a0e177bfa7c07b59117026c8a99b8456"],["2018/09/19/1005 大数加法/index.html","b0f7bbbae89a643e9b13ee3e70b98060"],["2018/09/19/1008 N的阶乘 mod P /index.html","3521b181d15f6f2c03883e0423b65ca1"],["2018/09/19/1011 最大公约数GCD /index.html","e933e9df5c8df4839e1f1914b4ab31c3"],["2018/09/19/1012 最小公倍数LCM/index.html","05343b2104eb204d1f7ab04a0460e9eb"],["2018/09/19/1018 排序/index.html","e0e99ed3633ad68c7c478abd29a6cef8"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","34343c87332d7f85f66d59be7223f997"],["2018/09/19/2133 排队接水（贪心）/index.html","94eda6b1a2ca47f957218964c4b2b6fc"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","19b828564411eae933df4417fb521da6"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","27ea0fbc037b7f4d210b9e970f277653"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","1ab4d5fa255f1bda0118e52331accaa7"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","7cfc5285d0674de333d9c4896d78dcfa"],["2018/09/20/51nod 1717 好数（找规律）/index.html","6e0d207365d35dd1308659fefb76d126"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","dac2e2cb2a759cb968bdb7acf36ebb20"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","07342a24c078d87af1805a781544151d"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","b932d1dbf759d0630de166f34e0d199f"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","9b4ccba608cd2a6e9da5a739d526ecb5"],["2018/09/23/51nod 1791 合法括号子段/index.html","233003526250ba038ec6b8701f325f9d"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","1597296c164aa83b3aad1236c3fbd93c"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","023198625aed8027824f1f3359805179"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","a6477d68b59cbe4131d79aa8ac231112"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","38bbf15a97a3a9bbd53da67722724e22"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","4733abf3d4a71ad9e1473039f823cc26"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","c881c367a9c740e3b323051e2aaa1aef"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","cc0dddc5e3415009c364e60f91570bed"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","eec201bea7ebab7b4f9c3feea9c693ad"],["2018/09/29/51nod 1015 水仙花数/index.html","df362e3d2b04f1702cfd0c402159b5be"],["2018/09/29/51nod 1080 两个数的平方和/index.html","3753966363a64022c2302edb8b291858"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","4c36fb3aae944409f640c106540cd854"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","1c4d5fdc5fb8a29aaf6b115adadc421b"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","93406755241cff064379bffd31e06d02"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","bb2271dec400b855626334660613bb15"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","26144ed8d73e464eef4218ac276b085d"],["2018/09/29/51nod 1182 完美字符串/index.html","811115190717c66e7e44622974256b38"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","bcd9fa21bbae7a172b21d96e36d28f64"],["2018/09/29/51nod 1283 最小周长/index.html","d234c9a4d6e285960c74476e98400325"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","51cc6fa46a2502660e15644a301141e3"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","46558dd3bffb1c4504d7f0c0aad1930e"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","6d15084ecf9ba8ad9520805ebc341ba1"],["2018/09/29/51nod 1344 走格子/index.html","303adb0b242efae97f60a5e3f244e8f6"],["2018/09/29/51nod 1347 旋转字符串/index.html","f68163ad8ef2b7f0850d38b2bcb0bc79"],["2018/09/29/51nod 1381 硬币游戏  /index.html","8b7570a84147259f84f50a7f5d8a785f"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","271e67422ddd3796aeb7757a8601ad99"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","67fa3c6823de5273dff1d2cd3cb627a8"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","f0923b46bbe745b3a799da25e75c767b"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","5c02dc53afceb5fd35c0531839074c3e"],["2018/10/01/51nod 1596 搬货物/index.html","28b074a4bb425495acda6d3bf3957607"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","5c02e24ac574ebae06420737bccbf989"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","976325937bedd6676cf91c1fb9c03118"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","4f03c4d3a068079a7317c5feea85b689"],["2018/10/02/51nod 1521 一维战舰/index.html","8e4ae36afaa21430940504428b97b61d"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","03a9d4c2eb3d65c5d79952269ce99975"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","131c478a95f4a819ec6ad4804fc16b1e"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","a9363ef4828dd77ee4b186ef917fcb3e"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","392490046c5a3cc9309caa42d0fabacb"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","8e263253542bf4c2ca93f00cf824e21a"],["2018/10/03/B. Pocket Cube（模拟）/index.html","e03288f63990a892b0f5b0f34d3cadb9"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","65d025cc1e4d5fd19686e93bf9097945"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","dc9985549825dd9d65cd85dd237a2549"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","d867756715c5810e00e82ee9665367cc"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","f7e9bdf84541d0310f0f9337d1070257"],["2018/10/05/51nod 1138 连续整数的和/index.html","6714098dbd7db8f1def4903cfe4f4737"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","1497949eae17abf298b35ad195f116a7"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","15c93ee86760aa4d1ba32505e178c538"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","1f1a153bdbcd5607a7c063d7d3755515"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","6d6cf8672469062fdfb0e20b9eb52595"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","05f640c91b20a60a21c4759baee1b138"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","31241c5ab627ebf59adf0d3eb9b4da0d"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","3644f351f7030f83a9128f8393f3d20f"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","c2f65adbde4c0d7db0fbae90482ae8cd"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","262be7356e34931f600a714d2e8f5834"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","13db34a34cdf3dce4b00df8c1c935533"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","b931d7f7e8fdeb9220cc6b76e01c3878"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","75812694eb92976724e06c1a12359633"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","a3b55d7e88ec2224b5568c7db64e012b"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","b3a667d6c4facefc3db332877b3333d4"],["2018/10/10/ural 1073 Square Country/index.html","1455a6c8a67e843146efabaa1557078b"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","4b808c93452296a3afddf2938b32ccc5"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","d427b4d4cc85f32eb4ecacce0049d4f2"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","b1e0e9d0e2b1556355bf4d068a048100"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","3e08eab7e8971ee6f5ad0e410305aaf8"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","eeef67f9cc07accfd8c52a951e09b013"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","f657e230058c46eea6567353d70d1400"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","54ee2d9585a5dc14ed51032631f0c745"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","14c122a0191e25ccf328a3f28a3ece52"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","390ccaf8090a16bfb65fbbae631d1b20"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","7a144a58f5a76ba52f8e43fd60855073"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","8ddb4b4aa6be9f84ab490ed5fd254e2b"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","04a56a212f9738c4578f530477aa6f5e"],["404/index.html","83b9ca8f4a8569f638c7bbd3a970e517"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","7f47aca74dd8ecfc7dc1dbc6356a01d7"],["archives/2018/08/page/2/index.html","6ac93d6802b52961b9979deb846e661a"],["archives/2018/08/page/3/index.html","d438a662674016fd0d502217710d3640"],["archives/2018/08/page/4/index.html","50bf03bbc51f2f25b8fdf09a7b4ef2b7"],["archives/2018/08/page/5/index.html","26e7fc154846ab2fa1ab68c5173349f4"],["archives/2018/08/page/6/index.html","9ec637a5dce502aa2033aa0d260572f2"],["archives/2018/08/page/7/index.html","b6bd2cef6177c30479aa1e220549a2be"],["archives/2018/09/index.html","c5dd9acef7a0c3f388faa0af3bd76571"],["archives/2018/09/page/10/index.html","ecc2b8696b19d2452acea4ed8853bb39"],["archives/2018/09/page/2/index.html","ca2ef3e2d7e80124d2085e1c497f9a6f"],["archives/2018/09/page/3/index.html","6c6e0174832fbb1bbde26d44fafe7940"],["archives/2018/09/page/4/index.html","3b15cb7a01463eabf7968a465a8c3bf9"],["archives/2018/09/page/5/index.html","2df8529e83bf3f89a75f358583bba9cf"],["archives/2018/09/page/6/index.html","59a9fa435e586a40e27fe7c820a5d78b"],["archives/2018/09/page/7/index.html","ca53f776ea7fccba4c5753cd52e7ec1e"],["archives/2018/09/page/8/index.html","77761293089c3e8cf01aa7f2f5470c59"],["archives/2018/09/page/9/index.html","5af2622867920e6928ae6c468e3e924c"],["archives/2018/10/index.html","02af2eff65896e49611934088c3734b8"],["archives/2018/10/page/2/index.html","7d533f094b3f4451a37b35ac866eb366"],["archives/2018/10/page/3/index.html","ad41deefe7059df316ade4a072911df6"],["archives/2018/10/page/4/index.html","d50b31018dbacf83fa02a430a3156050"],["archives/2018/10/page/5/index.html","ebbcccd96cd14ce002e12865c783b098"],["archives/2018/index.html","8d156a2c64f34c1bbf8003e955d4ef92"],["archives/2018/page/10/index.html","03941ed64d6bfac5bb586935fde20fab"],["archives/2018/page/11/index.html","d01d2d181251d92cc86b3e0bc1ce0096"],["archives/2018/page/12/index.html","7e5eaa92e9c20a240f8a78d4a6398c8c"],["archives/2018/page/13/index.html","f705cc9ee81df0396643ed45dbda602b"],["archives/2018/page/14/index.html","07cb569a51d1eb74c93cdb3058418863"],["archives/2018/page/15/index.html","ab07e91935c1c98465b1250e1418b881"],["archives/2018/page/16/index.html","ee46d0fdea845e515b266e60bb41fb6f"],["archives/2018/page/17/index.html","e92bda2ee8508c453bfe2b2698b628fe"],["archives/2018/page/18/index.html","34b064fb7b91f7805e2e6c71e3bddd37"],["archives/2018/page/19/index.html","678386386a46f045b472290d3ea2cce7"],["archives/2018/page/2/index.html","2945aad2e669e7dd140c4b97b8cbba3d"],["archives/2018/page/20/index.html","162a33c6da1a545a02e31610f37a40fc"],["archives/2018/page/21/index.html","90e596fa81e30eea8bcc949340d2fcd9"],["archives/2018/page/3/index.html","e08425d499b8bced22738f7fe75dcc8c"],["archives/2018/page/4/index.html","5caee123dd1b915ba56d149302f15eca"],["archives/2018/page/5/index.html","68dc5972e3eb90c0bca1ebf3ac08372e"],["archives/2018/page/6/index.html","71e6c5445dac865dca17643177e9848d"],["archives/2018/page/7/index.html","466373dd83e342698ea0a706a4befc4b"],["archives/2018/page/8/index.html","f38f417ff7715738a8b6ca03b409f64d"],["archives/2018/page/9/index.html","beb962c4273e81461c906c29fbaa177e"],["archives/index.html","9a034a5a1e3462b5ea057e5530209905"],["archives/page/10/index.html","0d2c02fbcdb7d4413a298cf7763d3a11"],["archives/page/11/index.html","e3668e44a4ab7ad1174a952eec7df80f"],["archives/page/12/index.html","8f2cec02173fd5afb4614462c77fd91a"],["archives/page/13/index.html","d31cf500226037c4ee647aaac067028f"],["archives/page/14/index.html","6a1b0e23f9a297cecb7becca6a345ee1"],["archives/page/15/index.html","f134d1faf5c171e9d8b6098435d9efe0"],["archives/page/16/index.html","3f44f1b3b8c5d0aeb23fbd6afd1317b6"],["archives/page/17/index.html","21e42aa5c18411ea9b89396a04bde135"],["archives/page/18/index.html","58deae70f9cdc99cffa909e067b8572a"],["archives/page/19/index.html","9cadbadfca07b06708967b5b84086c73"],["archives/page/2/index.html","f08ce0f189db6ad49a93357b7ae06076"],["archives/page/20/index.html","abbe96fed8104884686b2cfd613d671d"],["archives/page/21/index.html","5cc0945b1a6f84cdee8afcd8d0c20a34"],["archives/page/3/index.html","da3169cc0b17f350a775690cf8808385"],["archives/page/4/index.html","c3c0aa49b36dea79f795050a6bd6470a"],["archives/page/5/index.html","6e2a74a166e46c0fffe77c4955449f89"],["archives/page/6/index.html","aeb7545c2bb6ad18f369a8a68c06c1cf"],["archives/page/7/index.html","50ad11c9fd692eeca74d2e26bf2b4f12"],["archives/page/8/index.html","6a09edbe46199da97a02184839920a64"],["archives/page/9/index.html","a883398702a28c67264ccd80f7fa3f2e"],["baidu_verify_DfMf5XqJUb.html","eb10c449e119b778033fd1e5b656fc71"],["categories/51nod基础题/index.html","0b7512285182a9c4b3e956522e3dd079"],["categories/51nod基础题/page/2/index.html","dc7e6f16ffbeac3717a1b8eb55aa246f"],["categories/51nod基础题/page/3/index.html","3864a5e3ca288c022872d871124cfe0f"],["categories/51nod基础题/page/4/index.html","48807f17915b8d95aecd3ef1ec690829"],["categories/51nod基础题/page/5/index.html","54fd9fec4622fae5adaecfa8d66b2995"],["categories/dp/index.html","c123f85b0c7ec36c7a46222c5c430b9e"],["categories/dp/page/2/index.html","bb19e078ca377d3ae081a7ad641fdf3a"],["categories/hexo/index.html","8d2eb4235214633f8cbea63c59a67d08"],["categories/index.html","48c78a5f69cabcd154284f00f50719f6"],["categories/java高精度/index.html","9319fa90a3e1c9c40eb3679bd5ef2f41"],["categories/java高精度/page/2/index.html","948eb3f14b1dbf7992d1356bf515f3df"],["categories/poi/index.html","59740987013289d714121879e3759fd1"],["categories/二分/index.html","000dc3f1c737ee4144bbc416749388c7"],["categories/博弈论/index.html","c33dcb03e081e54136f0a5d2c89ce01c"],["categories/博弈论/page/2/index.html","dda657c5c093bfc1cc53f6db895d58dd"],["categories/图论/index.html","b3cc37ee7f76f35da498d4573907ed82"],["categories/图论/page/2/index.html","42e282acc935a8eefbeaa1250970f7ec"],["categories/图论/page/3/index.html","750c292f8f94d878cc27ad7ef19bdf91"],["categories/搜索/index.html","d9812dbfcc7c531246b5acb051ca72f3"],["categories/数论/index.html","a0811cd7381f99b2b01ddad5fb55bf58"],["categories/数论/page/2/index.html","20aa09713f3486115f1853495612a2c2"],["categories/数论/page/3/index.html","677cddb12a268ed13e71319aa5348589"],["categories/杂/index.html","85f31b1550d654a5b9fa97c6908619db"],["categories/杂/page/2/index.html","fc17bf25f0773dd1a05dca7dfc186158"],["categories/模拟/index.html","e72859378c516dc4b1ae6ab4ba1a7c18"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","6304e4e14aadcf5479fff6c7dae25c9e"],["categories/计算几何/index.html","038a11606d288d20ebf582bbcddb7696"],["categories/贪心/index.html","a6041dd209aeac70e64cc3e25e2ce677"],["categories/贪心/page/2/index.html","4a657968d3765ca4c840248a6735ae06"],["css/main.css","6a1e1520757f62acaf96ceebddad5f55"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","25bd6ab89e07cb937e2f392f1acb6208"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","a7467fbfe0feb39fcec6ea5e1239bd47"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3367ee9c30a02fbc515885feb0ebaf84"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","ca188b6558a9f409e06698282b61906f"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","bb3b96c29f3dc90e364c5de53d5cb7c7"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","708040d5226d96bad72fac5df2a2cfbd"],["page/11/index.html","a79dad9c3e7631fcbd899fb061b4c9ea"],["page/12/index.html","6360bb7a6e9bf8717efcbd4f499c9f5c"],["page/13/index.html","c839faf1aad4337590770693839b173d"],["page/14/index.html","96c73eff9a51434b15dc6f3ac62525b6"],["page/15/index.html","1bae0bda83e22d3edf8a5c811297d052"],["page/16/index.html","301e9fc8404906875d5a3f0ed2450e2f"],["page/17/index.html","3441cde4e73a1789c5342016f45f3f4b"],["page/18/index.html","d2e49deab9f7e861c59575192193c000"],["page/19/index.html","f359b5c7bf0dd5c14f01f9eae2bc91c4"],["page/2/index.html","3c191000ac12088ff6a216ede7562081"],["page/20/index.html","e88577df9c6cd339920521e5058b7314"],["page/21/index.html","0ab55a1695e9497efd02f0f258b3d289"],["page/3/index.html","85d51dd4f903915d81cf9b2cedd97bed"],["page/4/index.html","fefa43cf6cd985c943cb67148f822a54"],["page/5/index.html","428b8f2f5c4f17a338194b87b7e13eff"],["page/6/index.html","6940ccc072296839abe43a681d1cd947"],["page/7/index.html","537c57f5dbca61d1173e8ff8871dcbbc"],["page/8/index.html","505c8a046e6692a678ff2ffed3aa8859"],["page/9/index.html","0391692141dfa7908896d0b9c3fc263e"],["tags/Floyd周期检测/index.html","ad741be0be5b71f0b18f06534954d1ca"],["tags/Manacher/index.html","39af37882f27bb5bb4d66f5251a7907a"],["tags/Pollard-Rho算法/index.html","3f8a5b2794f9909f0748bf0ef2d12fe0"],["tags/api/index.html","38b13846ac5250d3c7d643069c6c4a6c"],["tags/cf/index.html","ef8635087178770f9a675cd9c6e7d171"],["tags/css/index.html","2c40f56ba1be222f2792cf46fc1afa89"],["tags/dfs/index.html","ea45181e1159012743d7a5c1aabc1757"],["tags/dijkstra/index.html","2312a6d3f1e4552951d229e343dd293b"],["tags/dp/index.html","a752dd3d59583c0a789fc00f38e2b342"],["tags/dp/page/2/index.html","ded391bec807e5e9426f3a14b0362b5e"],["tags/gcd/index.html","246f2d1afd0bbc1ef0f19423031a1bc4"],["tags/hexo/index.html","8560affd2bf876e1e002292c0adf1850"],["tags/index.html","4c0cafa4b6a109391b6543d35baa5563"],["tags/java高精度/index.html","8177fd66c44fde5db7a360ed14327db5"],["tags/java高精度/page/2/index.html","6897e328a0ba306d3a5e0a36b155cbee"],["tags/java高精度/page/3/index.html","5090f71a42028e6ad6d055c40954ab72"],["tags/kruskal/index.html","5ce4c5f9b9e72fcaa4c71daca12d5e01"],["tags/lcs/index.html","3aab5e8c4e1b584f17383e4dbf78bc72"],["tags/leancloud/index.html","9904c37d5a00ea944ba75677dd95d673"],["tags/live2d/index.html","5dd74ecad53295cabe52916f41fb58a9"],["tags/mac-OS/index.html","6cdb9ec663e44379f464093f0c5a54af"],["tags/prim/index.html","5b967d066185b5c84e901ecac5aa9dde"],["tags/python/index.html","62be027b3cf2c28fd21b56d02d9ca749"],["tags/revolvermaps/index.html","c5c7bb06618a3b8c6e52331b14f5bc07"],["tags/rmq/index.html","0a070f7ebe56bc002f34da1b649be29a"],["tags/sg函数/index.html","0d35e03c1c46158cb46c1bffbb9b337c"],["tags/stl/index.html","a754508b30abda37ff81399bf7bd2072"],["tags/三分/index.html","c76fe8a81be22a75cf2773266d72c084"],["tags/中国剩余定理/index.html","9e906f7ff583b48cb421bac0977ee88e"],["tags/二分/index.html","f69808db76e377ff7a46e4cce1ce9a1a"],["tags/二分图/index.html","abeec9ddf20d400ec99a50a55d7edec1"],["tags/全排列/index.html","e16e6e75a564369127d2e2fd614192c9"],["tags/分割平面/index.html","7294265f410d81b204692475ef2bc5ff"],["tags/分数规划/index.html","013b84dc65797b8c1c9c74c2ef32d4d9"],["tags/前缀和/index.html","308f78784350430bd977f0ca72e233a5"],["tags/勒让德定理/index.html","a704dcb079c41a5365b94a1ad44d19d4"],["tags/匈牙利算法/index.html","a92fa5766ef68e8aeaca7e59d05d7c34"],["tags/博弈论/index.html","2748c740a15516963f4f5838b07e81f7"],["tags/卡特兰数/index.html","3913eb6300e8d6a63519f437fa4c0467"],["tags/卢卡斯定理/index.html","51ce1ed075e5486d2caf8c4f4bb7d0f0"],["tags/原根/index.html","fe0b3fdd29ac9e94d113e25d53c8ca02"],["tags/四平方和定理/index.html","c4b39181c4f077896cf95ee8eb8d6b64"],["tags/埃筛素数/index.html","8bbcc774b22ec80fde38affce1846e64"],["tags/威佐夫博弈/index.html","0b4721cb0baae49450310ef043f12ccd"],["tags/字符串/index.html","75e7284c2b86d994b8b0cc0563fda569"],["tags/容斥/index.html","d998c70712cb7f290994df9118d12ad7"],["tags/尼姆博弈/index.html","aff71c8a2168cde4b07c11eb1da974aa"],["tags/巴什博弈/index.html","d0e083c247d50fcb8e478486033418fb"],["tags/并查集/index.html","58b859568552b1aa0ca3c047a8b3c9d8"],["tags/归并排序/index.html","a3ece63538c8a37b219eb968b256a54d"],["tags/循环结/index.html","fd53bffbd37edf4383467f251dcb2a4d"],["tags/微信/index.html","0f0edcd7db1c74fd48f238792f27ffa9"],["tags/快速幂/index.html","42bb21445c06d0eed174f2e2f89f1eb4"],["tags/思维/index.html","4e5b9ef86085ce92c1544c457c416421"],["tags/思维/page/2/index.html","34a36a91235c49d5f063a09413891819"],["tags/扩展欧几里得/index.html","1f07dbbef9d45858e6cea53ac142ce13"],["tags/拓扑排序/index.html","677f56094d77773ead031793f5d451a0"],["tags/推公式/index.html","9cc3b91c22b0c2f2c9f8ee9036fa08ae"],["tags/推公式/page/2/index.html","87256abf2b3995ab95f52a4a1343bef4"],["tags/数根/index.html","138658ca7807b1e1040618f498c48e8b"],["tags/数组加倍/index.html","caa23a7aa5d6bb4d9a666132edcb3f3c"],["tags/数论/index.html","3aba03d77b95413fa00906492d0bd46f"],["tags/斐波那契/index.html","2c3a6160d84232863d391b55dee8b9ad"],["tags/斯特林公式/index.html","a4da4dbcefc7807d8fae2ca7d206bdce"],["tags/斯特林数/index.html","2e9b087540d0560bd1036ac4a899f490"],["tags/最小生成树/index.html","efbcce482149db54050066953d3b1699"],["tags/构造/index.html","13fcf66c0107fa4d56bcd11e98716517"],["tags/枚举/index.html","6c016ac18666408a7804ecf713bccf27"],["tags/树状数组/index.html","a332bdb8def68d5328f74dafb2703387"],["tags/模拟/index.html","9cabe8f7c60b7ad3603e2fc1609f7fc5"],["tags/欧拉公式/index.html","ec530845d04f013b2f108ef3a38ca7bb"],["tags/欧拉函数/index.html","a58068ed216ef9a2639a3c768319c98c"],["tags/欧拉路径/index.html","ca3fb924400c5a18c2c61c2676eab84d"],["tags/海伦公式/index.html","94e0b89d2f0a9c451f4807c7f4868845"],["tags/生日悖论/index.html","d2e87b68cdb71be887167ea9109dbfce"],["tags/矩阵快速幂/index.html","1fba271cf0e130927262a70186e6595d"],["tags/离散化/index.html","dc9d81db106af9bf5e18a32dfd7d9c56"],["tags/米勒罗宾/index.html","bb37fb9734798edfa2b81d8c2b23d5ff"],["tags/约瑟夫环/index.html","658fdaf9e3f619aa783b1ea4200b8a5e"],["tags/线性基/index.html","5a5844026227a379579df70b99269efb"],["tags/线段树/index.html","0d99e15cad6bd3dd2c45ff7762a6cf7a"],["tags/组合数/index.html","206bdfe6b4548ba9f8bff09df666246f"],["tags/组合游戏/index.html","26e17fbd6cc735b464edfc52e4e970f0"],["tags/背包/index.html","ca976d4f40d77a4c07616e277d2574cd"],["tags/莫比乌斯函数/index.html","ea60d0990948e63990e01331b7b10526"],["tags/计算几何/index.html","e3f296c4cb9b596fce588b5b8876537c"],["tags/贪心/index.html","30e13e2300f1026b36461238efc94feb"],["tags/贪心/page/2/index.html","427cb9a521b454d9746a501d6109e3cd"],["tags/贪心/page/3/index.html","34a1755f48bad01abe9606834c2d4068"],["tags/逆元/index.html","7efb01664cece9d5c1593416134852d4"],["tags/阶/index.html","2ac1510d6c0bf7f943a97c99d2658bcf"],["tags/鸽巢原理/index.html","1ebbb77fe6ec249a076a760f97620761"],["tags/黄金分割数/index.html","5526fe0dd9eff009d99b1f93c5b970bf"]];
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







