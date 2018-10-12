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

var precacheConfig = [["2018/08/11/hello-world/index.html","7a5252bd9eba5be5f1561bd9c6d0fbec"],["2018/08/14/1995 三子棋  /index.html","877991c536d813e7488fb8af26c1c409"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","c68175d0c2afb9992e37eead07bff2fe"],["2018/08/15/2006 飞行员配对/index.html","84eff2030d060599e479e5df804d9fb5"],["2018/08/15/D.Tea/index.html","c8ec27f11f75db2eabbfb9e8fc05a1b1"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","278e263cceb5bb6963afacdffb1997ac"],["2018/08/16/1459 迷宫游戏/index.html","d96124b14ed664dcb24c69401c239db0"],["2018/08/17/1264 线段相交/index.html","b8cf4f6081bb973df49225925961043c"],["2018/08/17/1265 四点共面/index.html","f92df30d3192a52601ce808484a013f3"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","d646db5ba43369f09cd7cdc867766fc5"],["2018/08/17/1384 全排列/index.html","5143a673175972ef7113c7309cd850e6"],["2018/08/18/1240 莫比乌斯函数/index.html","d0cbe9694aab5e71f43316f03ac9c2c5"],["2018/08/18/1256 乘法逆元/index.html","cfbca0b71e720a459c3475fe92ad2b91"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","bc0f895fb8a7a977fe00836a718ae8ad"],["2018/08/18/Teemo's bad day（并查集）/index.html","f833616611cde82d64bec39807a82fa3"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","dc8b416155580507fe06a07125b3c0e0"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","07b17dfda9568e9937670f1276160459"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","7ac02cc00e24c48164f7821a9df1382b"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","8bff38ab0a4d1e19cc2be04649f9a97a"],["2018/08/18/hdu 1856 More is better/index.html","a365a5c8bb304ccf2bf20edf6b010b01"],["2018/08/18/poj 1182 食物链（并查集）/index.html","5ac11cf7621d5d4c228b293bf523e9f1"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","ff087d59301b9cda4b525a8954206968"],["2018/08/19/Minimum Cut（读题。。）/index.html","8431a80c23ab41f019489a4410559f0c"],["2018/08/19/Ponds（拓扑排序）/index.html","c2d00eb5747d120604c6e2f4bb1c4b9b"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","6759beb176033a4a9341890bad400d1a"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","be0b392155a46490a3907043ed5a7b90"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","a8df4ab7396c1ea2ed2decfbee6588b8"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","5f489d5486e2d3a6f557637195ff5923"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","c024ec8ecbb5d80a81a2957a67265cd9"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","dc6e22f6bbbff8e8942b5bec2ac3b8b6"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","255b968ee354a7459077504620b255d8"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","4969611f263ff9ee44c267800b05f495"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","a31ab7bb642a21a918ee3e6ac9b79827"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","c0a99d7eedda00d0c4ccb2ed1698084a"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","57f8d04cab47560fd86273e0a5668f42"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","9937d6ed49f817ea66ba1e0beb9338e6"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","2f29ada8d66fe3860d21cefca7283376"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","805e52c2fcfa7d144401773fc2b19e7e"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","85742f4e812d10d81d3a15c2e774f728"],["2018/08/20/Pawns（博弈，思维）/index.html","592de7b697dc8c0d3edf1561779b40fd"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","73bcc8a60ad3ced64d9731d79a08f0d0"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","106b2faf5a72126bcd268c6d5e76ab79"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","f1e624273854d9cf2dcf0b1b7fa2d814"],["2018/08/20/hdu 1564 Play a game/index.html","cd0900a296c1ce5eca4783273e530669"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","0009014565904ea6b231ddf3e1177a70"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","3cbae8e79c3d3cd2cc5308cc178ab726"],["2018/08/20/麻婆豆腐（思维）/index.html","9248830436be2b8405e58049c3e13e4a"],["2018/08/21/1212 无向图最小生成树/index.html","8a76d2879dc73216840b1e3ceef14eab"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","a1cc80e56cfd00757745745129bf7c18"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","dd7886b88da6785761160bee07314e61"],["2018/08/22/1079 中国剩余定理/index.html","c62dcecbbd94aa019a16621f8a6f717f"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","ffa52fcee4021cb36e92c6dd1399677b"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","d2397573935ace0bbbaa59a3ae9ba236"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","e0b42dcad75390c3dd05a4e2cf5a06dd"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","19a357b86571aad65d14eebad0b34fbf"],["2018/08/23/1136 欧拉函数/index.html","912a232ede890a9271d5e48890a188ab"],["2018/08/23/1137 矩阵乘法/index.html","0add6703038e4642d3b3a6e2d3934c65"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","824134ec6dd6acb0acf3fa00ef840373"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","57faada243cce2f40cdbd74ab58fa642"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","142720a53b61e8df2944b2e7b8b3029e"],["2018/08/29/hexo4/index.html","bf99ba0e17c5cbb81700ed3aa1f9b5a5"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","b51160d1bbdfff114b83ff0021de580e"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","317583e26e7cbc425b69734778552c37"],["2018/08/31/A. Too Rich/index.html","a7b409265b054130b6c32218b3547a30"],["2018/09/04/C.Catalan Square/index.html","e17f0bb2fc17dd5d053e80b2fef858b8"],["2018/09/04/hdu1002/index.html","1dd46d9b003d23b652450059a1a4693a"],["2018/09/04/hdu1042/index.html","a5e23ba864aee2bffec68ed298f93d22"],["2018/09/04/hdu1047/index.html","4096a236e1456348923b0cd22082b510"],["2018/09/04/hdu1715/index.html","25d16c397bda7204a3a33824949524fb"],["2018/09/05/hdu1063/index.html","f15c2134cdafbf4aa441cec4e1363655"],["2018/09/05/hdu1250/index.html","4614193585628280140f059f5152514c"],["2018/09/05/hdu1316/index.html","3da31f3cdff0ea970819e60467912845"],["2018/09/05/hdu1753/index.html","9c1f2e58c6be6b7b429204045b300b65"],["2018/09/05/java大整数题集/index.html","a75921500575bb60b0e4198e1e2c5c04"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","ff0d4b2d233703eea81cb8f402cb47d4"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","70c01b14643223318bd7069fe3de2cab"],["2018/09/06/hdu2054/index.html","08740f72e63f22e25565cd79761c4355"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","70f07dced5050fb6422cf5ea8a68957c"],["2018/09/07/hdu1212/index.html","5b58a055cce3f8cf08571c6595182a78"],["2018/09/07/hdu5050/index.html","5ae69a2ceb344ed3b53ba81a45630944"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","5a0e7d5c5c5614ac2d0dcc1b3dadab41"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","8aa39d64b657a025dc8803ce1dcbfcd8"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","bc84a2697f1bdb9222d14f8672a2f32e"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","170568432420224ff260cb359d2075f3"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","d223897ca58a6cf9c2f4bb1007e16cd8"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","acc2418a0169634da230bd61c0d72ce8"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","befccf68c6cbecfd4c86036f9978f49c"],["2018/09/13/Teemo's formula（推公式）/index.html","dce3190d3d9828561953798ebb4dcf46"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","8232d8ee99b64c9b18df4fcb6044c40c"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","36dfb725a5589fd11d5f1b139a33a7ce"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","a57f77cc02176efd1e4bf225ec9cc058"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","3d6384f302978cf0e880db68159091d4"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","36e5c0aff009841085e867db08ecbadb"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","50452b650643a6c1e77c82b01a46b6c8"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","77e100ae2c7b4d90ec17995d0d054b70"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","a68f0ee625317b7e6d61c0c313f01b72"],["2018/09/16/1118 机器人走方格（组合数）/index.html","da00e0cf37620f6bf644c4be74f53438"],["2018/09/16/1134 最长递增子序列（dp）/index.html","c2e4dd9de00da250100e04fdc32208f2"],["2018/09/16/1135 原根（原根性质）/index.html","58ff35e76fe7027d3a573454e6f14df6"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","5d122ed8ae6d704352f75d8ae9420b0a"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","8a859bf0fd94125e040d9713121680e5"],["2018/09/17/1073 约瑟夫环（递推）/index.html","60f69bee500f76b66f26005e8400def4"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","24b09ebad60bd550816c99183dbcea66"],["2018/09/17/1085 背包问题（01背包）/index.html","7b84664ef22974f3f670aefa899ac264"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","4750899425a82c470c23130e2acb71e8"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","bdb680e49726c691a23fa89e0120b0f9"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","27a88797abcf1fb6239e783b9314e7c6"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","115a74b503934751053d48a8493ad0fb"],["2018/09/18/1027 大数乘法（java大数）/index.html","7274cdd374945d6ee2d8a28900925b51"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","2bb80d5c38caffcdab2189067386e762"],["2018/09/18/1049 最大子段和（dp）/index.html","b5597a0d93701a8f5788dd34fdba1e3e"],["2018/09/18/1057 N的阶乘（java大数）/index.html","b7d29b7d8f86292c8ecd5869d7b38b4c"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","9197fbc3a482774f4658a8b2db6d0063"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","623596cba7fc3b6f1a128b80009230c9"],["2018/09/18/1072 威佐夫游戏 /index.html","f5561d465756de638d578b19aa26dedd"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","2bd5496d3ade7a8e5bac6cbff3e32532"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","79da3b7f5e7397101e436bc3a31ff19b"],["2018/09/19/1000 A + B/index.html","ba765a4d926b702a577867fc14a8491d"],["2018/09/19/1005 大数加法/index.html","89f53b199234a38e930805b12594abc3"],["2018/09/19/1008 N的阶乘 mod P /index.html","fdb83f2387c7038ad3a4c6e78872925b"],["2018/09/19/1011 最大公约数GCD /index.html","687c327e8c5aa8c17aaf18c141da4e1b"],["2018/09/19/1012 最小公倍数LCM/index.html","36030bbb104c24471b946f6ccc6d652e"],["2018/09/19/1018 排序/index.html","07a50e199db14caedc0937c2b881d1f9"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","d111eb86c587f17e928253d77c4b9cf3"],["2018/09/19/2133 排队接水（贪心）/index.html","31ff1306bbdf560fdb120b4d14ca84f2"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","8aaab0bc02a5815a9408e52d3ff6886a"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","e792d880d846ec29b7bff31d3516c32d"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","e818a2077af1a9c0f8f57722d005405a"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","bb85e20eb3f70c841f232d214b38d745"],["2018/09/20/51nod 1717 好数（找规律）/index.html","e0fc011063a89c81a4c0d08508f01210"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","e983b261fd68907f4b3a0dc3484b490c"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","ea145a7859eacdd718b67034623b5e06"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","988a1a04db2922a5fd665be1ef066c72"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","83bb4dbfc5e14809309ef2a45b1efee1"],["2018/09/23/51nod 1791 合法括号子段/index.html","b422cdf00c56eb48e81114a5484abb17"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","b342619c072f937b060a383017504f81"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","d9632296e7e25b26096914df24e355fd"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","8bba6b89bb2d399d5798a128e4733b13"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","6206f836f3758d3148acc699908789db"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","0bd8ffafc9906b72c70cde73d4729059"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","b8d17b2d802e782a5e53fd2059c5e631"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","c975dd56331080c64402c306a1bbbd82"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","7c328cafa7e3a5c7d3c173239daff323"],["2018/09/29/51nod 1015 水仙花数/index.html","5b0d2f3452a78767f087cdb413506090"],["2018/09/29/51nod 1080 两个数的平方和/index.html","5387a3cbb422fdeb6176b82f02aac89e"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","06e297e42ffec64814cd2cb4667d8d27"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","c95db277cc7c338dcc59c113ac95541e"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","e9882952aea4f042e19c2e2743815d02"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","ebedc025fe1d1e3e15da123adfeb9311"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","ccedcfdb3f4d1c0cb5633f91aa751a25"],["2018/09/29/51nod 1182 完美字符串/index.html","e9654b9be2260efe9443003053c7f0cc"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","d2c5af675c95a3b294db442a2296955d"],["2018/09/29/51nod 1283 最小周长/index.html","7883c5d0e16528e5608edd0555daea60"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","830994d60437632ea50ffe7e5d1be367"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","57ee63a71df3dfd26c2ce73fbe8eda38"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","7b1c53cfa87fd7fa16c91b591187ec8b"],["2018/09/29/51nod 1344 走格子/index.html","c43904f76ba54c60934a73aae439c1c7"],["2018/09/29/51nod 1347 旋转字符串/index.html","df89921f3384b771a4f5febc27147392"],["2018/09/29/51nod 1381 硬币游戏  /index.html","541883a59a4ce737777cf2d76a915f70"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","eeb121a084b7c302d130a00210046e7a"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","25eac944e6a672965ab8119dea9e9903"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","086dd6a263e9e02ab5ad4e50bd21a360"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","b7261d472c5ff5e2ae5c34ab47316d6f"],["2018/10/01/51nod 1596 搬货物/index.html","e560fd77a710b192948b56ab7d63446f"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","195b3fa2b21babb4b3d0c225b4dd3539"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","bca3944608c952b7dc86ed1c46118f1b"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","424b936df0fe455c65d2a91628a439cd"],["2018/10/02/51nod 1521 一维战舰/index.html","7f12dd17a2596441b489f310bdc24723"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","85d4fab6aa72155f86ba7eccd7b79d78"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","3982ece95b1d7bf78811d276d0c182b5"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","7d210bdde65b35fc6db2ffef265368b1"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","fb0234e01bf16767dbc82262356742ac"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","16dfae934c469a5ea74a6c72f13707b8"],["2018/10/03/B. Pocket Cube（模拟）/index.html","6204dced00da175c7d569236ae712456"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","2a3e2b839368d3d619fe3fd109a16ab9"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","9cebc09919767834514269d2b0b8c865"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","849b36cf454987698bb6e85204cedcc3"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","f1f247f7f69a23cdcc961249caa9642c"],["2018/10/05/51nod 1138 连续整数的和/index.html","ee8d17c187166348e0c26b5f3966f531"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","064e5652290635ad1205752fb1059ce2"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","3c07567a4be111c3a340d48b2274bc63"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","f4809af7e429c736803b0cbbb0ad649a"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","1aa5ff03d299751408250a3616ffcc1b"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","9c0455b4905b100038b559168285af43"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","ef4d8e6b89fbda818586538a317c540b"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","1bf727d0393e93dec6f992b908257e06"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","8e3a38b0682d4f93050021ec57e0ed5b"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","29e04bc3e3b9b1827daacbb79fade124"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","17d0efdcd23ac590e60b3fd00e5fbfd9"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","26d45c253594a17398ff0001bc449dea"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","e61bd86727eba524e3b8e99c6d48c214"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","66c292c673d0136f9a27c771fe8cae32"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","5014f367fff5935761406823b01c7458"],["2018/10/10/ural 1073 Square Country/index.html","51eb47837e6a3819f6233f0b95808fb8"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","48cc73e9ccdf1f3ae9e8871830052f8a"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","b03778ee8f3d9ee7f0abf00960d98837"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","88c22ec83e68afb221c8ff18ffe633e7"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","06440aa6ee5f9e59258bf8fe18acbd92"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","9901a7c3a51cfcf434e6fb22bb902537"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","2a8ec60e7d9802ccceb21e71ae094b6d"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","0be9902b37043a314ad90f5c3d989d57"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","9a028630732f7f25c2a30846b64b6554"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","edb281dccc25930c75824259b4939e67"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","9ee894bd5c21341867fce5672c0917b2"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","a780484608e53168934fab15defb5e14"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","cbcc0e0f93a18dd4b9ffd4fc42e8a3f2"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","05095bb43a84540666111ed04af0ee0c"],["404/index.html","951157e47786e2cab39da63973f7f7e9"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","439e5f5b57ea0add421812b16983bc34"],["archives/2018/08/page/2/index.html","023604a4a4452465925693bf4d21cf09"],["archives/2018/08/page/3/index.html","b2066445f436eca88ff8168b57cf5741"],["archives/2018/08/page/4/index.html","cd19c29aa99da180899cd4cae0b11383"],["archives/2018/08/page/5/index.html","4064a2087d2b72de2cab187b0434fe78"],["archives/2018/08/page/6/index.html","3e3c28c4750cc9ffaa3dd12ccc8bf550"],["archives/2018/08/page/7/index.html","7ec776e604e71cb8c8aaee63b0122b0d"],["archives/2018/09/index.html","8267e218f7a9f3697af715678a5ec8f1"],["archives/2018/09/page/10/index.html","ff41ff16a0af3b12755e465d11f82c5f"],["archives/2018/09/page/2/index.html","e5ed6776ab2050aeccd412cfd975ee76"],["archives/2018/09/page/3/index.html","1af7134c64753ac8cf48821e41e2fab2"],["archives/2018/09/page/4/index.html","d552d10520de91ce7319175653605d88"],["archives/2018/09/page/5/index.html","40179c87f756d16a36a9848de7e2b787"],["archives/2018/09/page/6/index.html","6261ccd5e83c0e8ce13285e6d93f2353"],["archives/2018/09/page/7/index.html","423a26f031e6c7aa11dace73c3dbb6ab"],["archives/2018/09/page/8/index.html","1ca31c583f7337a08c4b131c46281c7a"],["archives/2018/09/page/9/index.html","fb12158817ea599e18127e38935c68e7"],["archives/2018/10/index.html","dccf6d647471aece60954ae4e8a5626f"],["archives/2018/10/page/2/index.html","aa1687a07b09086e0430d7ce8e49ac08"],["archives/2018/10/page/3/index.html","f34b4c51985844b3a2a7a8fcaa50c914"],["archives/2018/10/page/4/index.html","5537013ee31ec19627923b4b2f7e7ab1"],["archives/2018/10/page/5/index.html","cabd96ba8dbbb9bd51137e40c900a9c4"],["archives/2018/index.html","e39671615ec38dfb23e989a7d825eae4"],["archives/2018/page/10/index.html","cccf1293eeb0fe01057b8e06c5de8b38"],["archives/2018/page/11/index.html","b9bc90d276b1180955f2585ee5c2984a"],["archives/2018/page/12/index.html","a4d14b04520dbd27a5790c9fbaf4f333"],["archives/2018/page/13/index.html","f93c844c9d4b2740a93c1d1a379d646e"],["archives/2018/page/14/index.html","cf52b824448b3c0e50d15d77f1fb3ad3"],["archives/2018/page/15/index.html","55406a3fb732f90dd2c32374389bdf65"],["archives/2018/page/16/index.html","dbc94b720c5e487b9c53592ebe2c7158"],["archives/2018/page/17/index.html","e2df630f1a5fc50cf2f7071a2802bce1"],["archives/2018/page/18/index.html","e8de71188d22d5a690116453e1236754"],["archives/2018/page/19/index.html","5867e849e53bf13cd07d8dd943e16e68"],["archives/2018/page/2/index.html","5f47b9aa4fa7ddd70db00a19af1c6978"],["archives/2018/page/20/index.html","2850887f929696b1b6098471939b6bac"],["archives/2018/page/21/index.html","d3faa47a072af7a0f3589b6198f1c47d"],["archives/2018/page/3/index.html","558746058070901b6bf9bc554e8de15d"],["archives/2018/page/4/index.html","3dc0ca8abab666dea5fe036fedf9fb9d"],["archives/2018/page/5/index.html","022f1b15606278d2edb9e1797b42dffb"],["archives/2018/page/6/index.html","f2d6c51e2b33c0c54600059f44b01af3"],["archives/2018/page/7/index.html","fbe60d2ec8aa7d3684900b59e6b00664"],["archives/2018/page/8/index.html","08b875b2722e5a6d674c3e0d1ad49b9d"],["archives/2018/page/9/index.html","176a1b35af8b7ee1a294be54685a75f9"],["archives/index.html","f66eb349f8e878856464cac34cb90082"],["archives/page/10/index.html","8a0d4d0bec4e410f6133ca9f872909ff"],["archives/page/11/index.html","815c30399a36e42990ab3ee7c929fc5f"],["archives/page/12/index.html","65af6f2209f4f285bed0d981d7a1defa"],["archives/page/13/index.html","904cb6c33fdacb592ba5bd28716149c2"],["archives/page/14/index.html","31a31519fadecc72006b762064af40af"],["archives/page/15/index.html","f6d46788e436ee1fcbe22856bb0516df"],["archives/page/16/index.html","f67098027991e61caf509719d2bd5c5c"],["archives/page/17/index.html","9e0d9b2068d0f72bb9de5ef8c116b797"],["archives/page/18/index.html","4f5ef68191db67bc7659341a85fa2079"],["archives/page/19/index.html","1ba45a1f21c7266fe0d7551fa1d0367c"],["archives/page/2/index.html","fbc692ce5e0f08021dd5462ba2b9413b"],["archives/page/20/index.html","b41c4100f4ffafd1a508a037ebba1319"],["archives/page/21/index.html","18b269e870a9dad53aed38b4cd38b630"],["archives/page/3/index.html","3a6a0d1db23293bcc21a234a92a81e03"],["archives/page/4/index.html","dd0c554f914fd9bee870c2f3fead2ebc"],["archives/page/5/index.html","94573dfa9543d4b0658d0be3289ce644"],["archives/page/6/index.html","88cfb303daffce33dff07d9aa910798e"],["archives/page/7/index.html","3c9ebd2100916e99e0a4537178294cf9"],["archives/page/8/index.html","216750d0305fd8c596abfd6b1a1bd8bd"],["archives/page/9/index.html","d17385c4af65ba0ede87be2ce63a7993"],["baidu_verify_DfMf5XqJUb.html","d247000247e3b22bd040b968c7f36df6"],["categories/51nod基础题/index.html","c259bf470b4507a6402fa14c6b5f8032"],["categories/51nod基础题/page/2/index.html","1ff6b15febe44badbd05c54949311f97"],["categories/51nod基础题/page/3/index.html","adae039c40843196dd1ec33319e2002d"],["categories/51nod基础题/page/4/index.html","40816a983f619c2cc9a48289e5631101"],["categories/51nod基础题/page/5/index.html","2890af1f3487cb88dc8ab3fa185b1983"],["categories/dp/index.html","93482dfad41e48e724c5ca7262355ed3"],["categories/dp/page/2/index.html","2805bf6bfe75b2227d0d62418854e65b"],["categories/hexo/index.html","66f6f884ede68bcaa3008701173bc7b9"],["categories/index.html","f2f685e5eada5aba41800aa67d74c96f"],["categories/java高精度/index.html","01816ce96ab4c463b7650432f6fa36a3"],["categories/java高精度/page/2/index.html","d89653ccbe509ca42eb2750ce007a26c"],["categories/poi/index.html","842d49e4f2c0a9370220aa732f896e27"],["categories/二分/index.html","0d5927b46b6a23c1144d9439ca17ade9"],["categories/博弈论/index.html","46438327b50c121642ac362dfc430d1c"],["categories/博弈论/page/2/index.html","b82fcaa19834bc4b62285e3a2104a19c"],["categories/图论/index.html","1760fcfaad04568e545618622af40f7d"],["categories/图论/page/2/index.html","b1ba0c9490d100891c637f04a00cb05f"],["categories/图论/page/3/index.html","d86e0ed9710cb96d80583bd2c1bf0ba8"],["categories/搜索/index.html","6d73484cb001bef3d60a7cc102f67020"],["categories/数论/index.html","996e0bce347728d32618cfd323487d45"],["categories/数论/page/2/index.html","0b85ee3d4e78a4d42c49cdd02895352d"],["categories/数论/page/3/index.html","25e57ccf95c42d9b8935173e91f901d8"],["categories/杂/index.html","f6270ffa17d951ccc1e7a8074cd34ee9"],["categories/杂/page/2/index.html","538af10062e954415f9abcbaa5a61f32"],["categories/模拟/index.html","41265e8abd9079b7916e1c52d6091e58"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","5a70d190abb98b73843a8f435c365ca2"],["categories/计算几何/index.html","8a1a3bc112b6174c22db6e1257439cf9"],["categories/贪心/index.html","0e8cccc09ef9c02ee7420617812c9527"],["categories/贪心/page/2/index.html","6af253bc646051eb5dc951ba9e02cf2b"],["css/main.css","a7518ac74e9c7a39cfa7b0e8f07c7f33"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","7828e87242874efd330b1b9a0441fc0c"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","de2d07814e5e1eb4fa8cb89c97d09669"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","951704d87fadcbe9e259734ad6f70d3a"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","7b41e16288cfaa2592f66cff7e22e410"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","3be8cbec04c632aa8bb49f70e7038144"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","8f75379a5c3d82e326e5feb860ddb73f"],["page/11/index.html","88067c8f891674f455b98ed3e3a3b337"],["page/12/index.html","598231d5b2bafb17148a7604e09a0c7f"],["page/13/index.html","66170ee33559b3e0430dc94c0ce95de2"],["page/14/index.html","50f02c2f1d09a0d9337fe55f3bc98a13"],["page/15/index.html","447ef51e7e62a123696b576422d4e65f"],["page/16/index.html","d3327e19fce354d9e4d9316898c0f650"],["page/17/index.html","5dc226b8d9f5d38878442ee3ca055cf5"],["page/18/index.html","f88c5917815320bd06629dce74849c6c"],["page/19/index.html","a74bfa66cca6595fda245f8857a8fe55"],["page/2/index.html","8f6709da9f80f20824bbc19a5344a305"],["page/20/index.html","cb50198a27aa6ba823dcb0e025280d30"],["page/21/index.html","09cfdb5c96d280b44f5a0054a7bac169"],["page/3/index.html","694f47cb22e94206dbeca0ec8712ee96"],["page/4/index.html","845a10def13a23240fbc565d68429df4"],["page/5/index.html","b4ba0b8482405ffe0a61b79f3f0539d3"],["page/6/index.html","c94ec8a4bc36e3081c02d5d2cefdbe8f"],["page/7/index.html","3decfcfbad291a0f7030c8cb84b5122c"],["page/8/index.html","60d1746a04344d8f8328cc712446496b"],["page/9/index.html","d6b8424f5d3a82929536d0e19cff384d"],["tags/Floyd周期检测/index.html","22b71389c7473b1b1b179dd8971092ef"],["tags/Manacher/index.html","237c6175faf877604708a443abf7a3ca"],["tags/Pollard-Rho算法/index.html","1ceba39cce4e49d0ccc9456ebb9caefb"],["tags/api/index.html","e77058dfcf0e703d3ecb2176fdec42e2"],["tags/cf/index.html","363dcb9085bf8419ecbfebff4a7320a0"],["tags/css/index.html","3c63f43dbd982b6e5647531b91981641"],["tags/dfs/index.html","cee93134317d7b5fd9088625e835b9a8"],["tags/dijkstra/index.html","b0d93e2ebaa76494d3028fb030ead5d9"],["tags/dp/index.html","e0fde7613d6cf0fd55b0d1d3d775b304"],["tags/dp/page/2/index.html","1989d58876619a41c8394c930bd6628a"],["tags/gcd/index.html","3cd5786fcfdb2229bcbcd539d6ce6157"],["tags/hexo/index.html","5cdbe6e5354b12df6c8215f069131eb4"],["tags/index.html","ad45804c4c28b405be75f6b0719671dc"],["tags/java高精度/index.html","7e573ea9b602ad4bb02ca42b947effb7"],["tags/java高精度/page/2/index.html","7afda777c8a9ba0bc61cf6c5da47466b"],["tags/java高精度/page/3/index.html","81089dafaab05a16188a7403bab9c271"],["tags/kruskal/index.html","5b7f5b68f0425fc0948f0d56aac62ca7"],["tags/lcs/index.html","03f036fb8b5e7157f11db09a0999272b"],["tags/leancloud/index.html","46c056928b446b100734c9dffc684809"],["tags/live2d/index.html","9a0a80a178fcb303df5bedcf3b5de3c4"],["tags/mac-OS/index.html","8e59fdd629882258667ab439d7f3ab15"],["tags/prim/index.html","46496223e140dee640f36156c11d7fc8"],["tags/python/index.html","288a51c2d2b37924c340ca2bad4ebec1"],["tags/revolvermaps/index.html","88613f3602e81846f6c0ab3a15b7d638"],["tags/rmq/index.html","73cd8123b91896d97d3023fc738b4142"],["tags/sg函数/index.html","e2749365f1280c6079e90ff575a433dc"],["tags/stl/index.html","3bb2966367c8aef59adacf3b5f8e8a64"],["tags/三分/index.html","bcd40440737174318cdc138d383994e9"],["tags/中国剩余定理/index.html","a34452742db7a57e895e25790fa86e71"],["tags/二分/index.html","b8337a257756fdfe8be54227561dc192"],["tags/二分图/index.html","23bf99ed70ce55b5aa4603407e2b550e"],["tags/全排列/index.html","7eb552ff8066f87d33198c72fdaa9dd9"],["tags/分割平面/index.html","12959bb2f90124afa217bc1d8fa80468"],["tags/分数规划/index.html","5380b072234a7ef6b8d6f8e519e960aa"],["tags/前缀和/index.html","bfcbd9817b52124731ff04d84003194e"],["tags/勒让德定理/index.html","b8fcac96acf273d8b7a4e6db1f862b23"],["tags/匈牙利算法/index.html","33452dc7b09bcf139d6b7b30741a4ce4"],["tags/博弈论/index.html","18536bda596e8f65f097baecc31e6e6c"],["tags/卡特兰数/index.html","9bb0f7a0a3c0bbc7c1c295da92dc8911"],["tags/卢卡斯定理/index.html","72ac34638b19ac0a54f12fa80bb8911c"],["tags/原根/index.html","6a40433574b61b2b4b097daf40558677"],["tags/四平方和定理/index.html","f082662b4bc0e75d0fa03fe51f7aa581"],["tags/埃筛素数/index.html","9de7e4fe9f11ba2118cdb4d98dcf57b2"],["tags/威佐夫博弈/index.html","44a335a0430cc69aad4b8fce28990430"],["tags/字符串/index.html","a69c171a0066ee231aced8487b8693fc"],["tags/容斥/index.html","be36c8539883ab8739308e8bdb535c6c"],["tags/尼姆博弈/index.html","c2fda04e0753a07aa5303126bd352d48"],["tags/巴什博弈/index.html","3b4cf4a2301a74d909c618890028c427"],["tags/并查集/index.html","9036153dc0e56b89efe23ef2d3984b01"],["tags/归并排序/index.html","5a98a3386d43e85708f7bf4ebb609e09"],["tags/循环结/index.html","0f8fc74e4ea0cdede794b968ef21e65e"],["tags/微信/index.html","284564cfd79cf959a97ece85868102c2"],["tags/快速幂/index.html","10582aff77d8a841a81994383088ddec"],["tags/思维/index.html","746f535ce62feccd0a0cc0bf6a159abe"],["tags/思维/page/2/index.html","1dc3363a5799b7333ee5dd06dca6b559"],["tags/扩展欧几里得/index.html","5243e6e519dd03756a8ebf02f1223d58"],["tags/拓扑排序/index.html","77e4f6e9fe1552ffe289ff9f1567d73d"],["tags/推公式/index.html","1676204e54d09f70d5ade236e1e69a0d"],["tags/推公式/page/2/index.html","287645e2161dc606fb17c0a224fec131"],["tags/数根/index.html","d46efed8f027b15a5884ff09e5fb619e"],["tags/数组加倍/index.html","c1a4d5d3a783117fc9db256d0e5c5b97"],["tags/数论/index.html","595e0a0456138e6a064258ab2a1a5217"],["tags/斐波那契/index.html","bf04bc719c2fc7be2c91fb194100baf8"],["tags/斯特林公式/index.html","dfe38a0f7be1bccc4086cfdd4e969308"],["tags/斯特林数/index.html","f779f32cf8337725f86b23476e339a8a"],["tags/最小生成树/index.html","a0bd25614914bb3baaa4ca50accd36ad"],["tags/构造/index.html","efc934d773dacee9cfe19eb2f21c186f"],["tags/枚举/index.html","f00f32f0754933e357372452966c14a0"],["tags/树状数组/index.html","c8c1ff72ab973ce0181a6f37ef4fee48"],["tags/模拟/index.html","4f7a6b867f3f5fa385479367c437b988"],["tags/欧拉公式/index.html","80bfe39b6b728a377cfad87cc9caf633"],["tags/欧拉函数/index.html","0e38dafff0b07c59aa8f6b76fda156db"],["tags/欧拉路径/index.html","3f46ee51fa421ffbe4655be6af6c3202"],["tags/海伦公式/index.html","360b7ae3dfd5a8de3798329d36d75a72"],["tags/生日悖论/index.html","f0feab02787b8bee481bfd1bd3e31f66"],["tags/矩阵快速幂/index.html","f8da0290e3c195bee46b34bbb798d577"],["tags/离散化/index.html","54e78d49d4247fa13d750ad8e160d061"],["tags/米勒罗宾/index.html","bbd2f33f064f5764e88e2e3d55a76f3a"],["tags/约瑟夫环/index.html","8426b497d560396dd938e26567cd8c45"],["tags/线性基/index.html","30c3d6a6ff075a9d9824137637323412"],["tags/线段树/index.html","2fa7aa6c3770b7c47aeab044ce3f66e7"],["tags/组合数/index.html","d0959f040fef2a1a0a927d8172fecb1f"],["tags/组合游戏/index.html","06c19026caaea7c00dad3a72e1e3b260"],["tags/背包/index.html","69e4eff47af33cbd810c0c5a32a13049"],["tags/莫比乌斯函数/index.html","7f862c3a39b942730708ff080ac2b3ff"],["tags/计算几何/index.html","f0cdd5c0a3699c296c9aa549eb0689f3"],["tags/贪心/index.html","e9ddb19efac81652223971f56ae101e7"],["tags/贪心/page/2/index.html","de225e0cda8e32775e326e428978e4f6"],["tags/贪心/page/3/index.html","ed90b07268915b498dfdd5dc554a32e7"],["tags/逆元/index.html","367543dc221565b653050b6c829f2ca3"],["tags/阶/index.html","e732bdf5397b48ba67c8c46003c38291"],["tags/鸽巢原理/index.html","75406ad8af4e63dca0ebe3bbad14bab7"],["tags/黄金分割数/index.html","832a3d7cac496f0a062895ad00207b27"]];
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







