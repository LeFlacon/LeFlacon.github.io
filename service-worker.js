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

var precacheConfig = [["2018/08/11/hello-world/index.html","362c3d70992cc31ca0fc48b845a1e28f"],["2018/08/14/1995 三子棋  /index.html","350dfc0b319633c2e5f8d793da15ea67"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","2a307cd904df478d8401bea038d646ca"],["2018/08/15/2006 飞行员配对/index.html","602dce6cdfb2cc9b3bc083162b6223fd"],["2018/08/15/D.Tea/index.html","e3a5527fb43a321c99463eac11b1b19c"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","bad1ef19284e26af13d3df5827a84044"],["2018/08/16/1459 迷宫游戏/index.html","a804c00b2eb052dabc0e1ca878e94613"],["2018/08/17/1264 线段相交/index.html","55ca5802dec4c5757fec52cd56fbc8ef"],["2018/08/17/1265 四点共面/index.html","b3a01f5b737072c6a51510d878a3fbdb"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","403678b3fb1c1005ac47c8187f3220c2"],["2018/08/17/1384 全排列/index.html","789865c1b53742b27ed5d327ff10cd28"],["2018/08/18/1240 莫比乌斯函数/index.html","3b2946d17b10cbbdda15d5e1a12690f3"],["2018/08/18/1256 乘法逆元/index.html","8f9b45b3371b875ee1bbff3689ac1dd4"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","38fbef5de4a0448ad6751c856f89661e"],["2018/08/18/Teemo's bad day（并查集）/index.html","cf353a4ae7dd1f6a6e9f3ed32921e586"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","e133f723126e9758cfd3c4ec529e8efa"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","3a795fcb6adb261438adfefdfef45dbb"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","5340a70da6d589a4ebed8da8bd3bc071"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","0173a62a854a67e3d0f7a9a71355d589"],["2018/08/18/hdu 1856 More is better/index.html","42b7a19d34d0c87d50f5b5b487fa1ea5"],["2018/08/18/poj 1182 食物链（并查集）/index.html","07217149e98a4c3f785b204d1a388994"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","85c7c95bb532de9c37ff5b9b732b98ae"],["2018/08/19/Minimum Cut（读题。。）/index.html","624a82b27d5efa20fffe61f43f3bdc9a"],["2018/08/19/Ponds（拓扑排序）/index.html","8054244ac49e41cc6516e6a2d994dc29"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","562217b37a9473d518989b20cd143a1c"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","c6afc52e0165dd1116ffb459078af715"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","bf6b6378df878aa9175babc9a60f3b3b"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","d0714a0a11d254672811823611a794ef"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","931a60650b8e79e16e769afe06608d71"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","c219cbc3d59464e7e29393c6bd355f6e"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","a4ef6d700b2f4227ecb0dfa27247f94c"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","8a5736b31f509d0fd44d2087570f73d1"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","13a6926c08c4786f9d58804ad3f82082"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","b5e7fa52ef4d016d5518a5caaa80da03"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","3ba7351faee3d032d71bd6a75e814b2b"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","853ff49075e510a66509c06878405a48"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","015b402c3ecc2f912d64bd4594207802"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","d7afc3f5ff4f21ddd2f2bacd29cbba20"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","f1245eafb2288c93ea162ef487e511ca"],["2018/08/20/Pawns（博弈，思维）/index.html","d7307edb5820dd68e7f64794635b9862"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","c51c0c666a8d6e81aa593ce76916aeee"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","7befb428b8b3b4f72aa1e280aed1a9de"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","8e255785f23bdd91f8f5676ec75f509d"],["2018/08/20/hdu 1564 Play a game/index.html","bf3ea1b2c437341feab4248cbdd0bc0b"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","c932e0d2c40d5e78336aef23460fc36a"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","8480aa9146102f5311e1e3cdf3d38788"],["2018/08/20/麻婆豆腐（思维）/index.html","aaa49f72f927bd9e62242b813a4be1e1"],["2018/08/21/1212 无向图最小生成树/index.html","4b6e09af566f35b24e455cbddfc07627"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","a7774a99b28dc27a2889375a55f56ca4"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","a1f4d24b17add6d63b651e2cf1c8e921"],["2018/08/22/1079 中国剩余定理/index.html","65f799f323bebd5e3491def1b5f1c014"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","c8d1566a67fb719ad7d4eacba888bcd1"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","79db488b42623dbbb70a8fcb4dd84ea9"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","9d0cd59a02e685d28b6ce41667e37baa"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","481e82e7e08faebce046f6258588c39d"],["2018/08/23/1136 欧拉函数/index.html","9ea107fa1d33531cd592c6e2f4b5a58e"],["2018/08/23/1137 矩阵乘法/index.html","cfd983c4206439d6611d487496979065"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","81ef7414cc9a48a3cdcea02e847b72f4"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","3f94e00fa3a832c2fe7f98fa64c4704f"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","d2e409a0e46b18452797ac1cee0a9c60"],["2018/08/29/hexo4/index.html","731f11efd88da0cb93e060d92d0a320f"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","d512390ecc5b589b5f6d27b0b220cc37"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","92e04ae3c2ab6d9d84b46457efcd819f"],["2018/08/31/A. Too Rich/index.html","723eea14262d466895730ea9a7ee64b1"],["2018/09/04/C.Catalan Square/index.html","daeea39128ab10cab0fdc56e6a9c409a"],["2018/09/04/hdu1002/index.html","a6ee835f35afe30549d00cf43cf9bd41"],["2018/09/04/hdu1042/index.html","0d6fa9fd9dc80ce3e6c75716999456d8"],["2018/09/04/hdu1047/index.html","4b10bed8c57808b1cfba84a0b02c1b48"],["2018/09/04/hdu1715/index.html","364d1dc8d08a52da8b7493b6005abe6f"],["2018/09/05/hdu1063/index.html","0a0a2c1317a3a62b94632c3dffe68734"],["2018/09/05/hdu1250/index.html","9be647a4327b46d434f73150d1accc3a"],["2018/09/05/hdu1316/index.html","ea5c8ea155f30fa8022da4128b173ad8"],["2018/09/05/hdu1753/index.html","fe2087bd39b750620ce2d880d1367530"],["2018/09/05/java大整数题集/index.html","64ebec1013343afac399126a255fa8ed"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","3e86be03b6322c83bc4ff6b2c3762177"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","eea2a5692f623a68198963eb7a635d42"],["2018/09/06/hdu2054/index.html","40b441b9c35dd22cf37c32968f66777f"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","6a909ca4b050f73947398104b4777ca5"],["2018/09/07/hdu1212/index.html","645c136d4d8c9a603d398d65ef5355ef"],["2018/09/07/hdu5050/index.html","86e5baabf2490bdd1badb6f2ceab34c5"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","12912c3158d89b4c94a6d3535d8dbbb1"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","3d18b0ab26d69da1aba94819a22d8ead"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","74224810f9cebf2ed48d91d133850cdd"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","dfb6c3bd3ec9201975e1f44243c43d8e"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","08c60960e3872993bf0f9d3423cfca36"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","9d84b93bd64f2eb846de9beda656a0a0"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","0861065dea20310c9d36f7e89f9949c6"],["2018/09/13/Teemo's formula（推公式）/index.html","9cf2f21408352dc69e16e05a3c417af7"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","847ca29d60a3c538a5f27991e93c1071"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","a7bff9892af68f35bb024276eebcd2f4"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","0161fc41fed10cdf5464b1d667dc3c1e"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","dad803e96dfb880179c4c471456db13c"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","1cd13eee36feb265f841574bab67b3d8"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","a03ecc9db79b8a075ab52be8bc0faf70"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","9155e2f08c0f11ad0adf72a4ea9901fa"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","8545e4aac018fe890289d9bb8f7e7638"],["2018/09/16/1118 机器人走方格（组合数）/index.html","dd8af33329e98ef186825515b60a8a9a"],["2018/09/16/1134 最长递增子序列（dp）/index.html","0a7d0787f15a86c5a09d949767c47610"],["2018/09/16/1135 原根（原根性质）/index.html","31b34ffca746eb70db9c8f66d93a98ec"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","d08d5a9864aa3b8840a67dc84c4efaf0"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","42ddc836dfb16a12ddd0c5c7a2ffa1f6"],["2018/09/17/1073 约瑟夫环（递推）/index.html","4120f5df64c7abdb82ceefcee47e6e6e"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","c1ed8c3d643ba5b38d689884edaf86b3"],["2018/09/17/1085 背包问题（01背包）/index.html","86a9fd6a283bffb26bc61ef5ab7516eb"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","6516d019b51b0f2b1730554547485d03"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","9fea1379cc9c100332f6504cfa17f402"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","9a6a57421e1dfa8f4819769b450feefb"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","8439c0e5d94558dbb0f3e475e393b612"],["2018/09/18/1027 大数乘法（java大数）/index.html","1d8ddee660195d18f81f0f476342b851"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","c4daccbb903dc1f9c9ade31650e8a787"],["2018/09/18/1049 最大子段和（dp）/index.html","f2c04225d8f7cca047a9f6e5086a9edb"],["2018/09/18/1057 N的阶乘（java大数）/index.html","70c556105c3789a5fda1b7d93f4e67f1"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","fd2d3049afab3aac6bf8cac6fd2e2ed0"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","c8d95b7fb517ab840c7ae92b4cb63310"],["2018/09/18/1072 威佐夫游戏 /index.html","a8bdaf6f2c12c872225bd17a258a4546"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","27511c63860d98403f22a99ea8e4a69f"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","94c6b9dd851dec6fbdc178a8f6922f1f"],["2018/09/19/1000 A + B/index.html","3e016677e00a607d017b1d86cdfccfe8"],["2018/09/19/1005 大数加法/index.html","763d97ef20aef82977a8d05554fd8d90"],["2018/09/19/1008 N的阶乘 mod P /index.html","e551522341e7bae3966b0f925db4e701"],["2018/09/19/1011 最大公约数GCD /index.html","40c031cc71d748f4f613b62ce9d9f631"],["2018/09/19/1012 最小公倍数LCM/index.html","b86c440b81758c8979d9593c1e812be2"],["2018/09/19/1018 排序/index.html","a7550d807cba84a528827ddfbca08b68"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","df758d97e0e3d731f864297c56816e2f"],["2018/09/19/2133 排队接水（贪心）/index.html","4c7f875db09d4e94f1acb5993dc39a46"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","43b7ef28511613dbb8da23b906a46b71"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","7de30cce065b853c8e9d1ab0c07ecbf4"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","ab311478137992aa33768a5f82e6dd9b"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","76fca1a27f6d7726a81d49a7a590f10b"],["2018/09/20/51nod 1717 好数（找规律）/index.html","c83fa21ddb8fab8bd7f9b693c85cbac7"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","12dca2bbb1fdc4f420f02962364f3fa4"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","a7db3eecfa03e138c5f7a345d02af9f5"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","8ffac9b956a4ba87deee6f178534ae06"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","ff0f00fbd7bb2d2caf62eb9cec35c0bb"],["2018/09/23/51nod 1791 合法括号子段/index.html","1bdd93db42add56507e148c1e8531358"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","3d827a495f2f882723b4b648de3bc6bc"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","71aebc6b08c012e3ed51b9da53a83221"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","b99a3899404624e4e43a349b0822f54b"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","a5e9141abff73e4914f41bb95d0da7ee"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","6337ad29f1046a6f2cc09811dc857b7b"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","af4487b33e6ab0cf80c0765e6913f444"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","b35ec03a3751e9e4932a4063c02cc1df"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","c710ccc1cb9351b33d727d8b470e1103"],["2018/09/29/51nod 1015 水仙花数/index.html","bfa9adb48adc390d13e4f5e3da2bde1b"],["2018/09/29/51nod 1080 两个数的平方和/index.html","a06ff32b28f032429c78563d9f5f17c9"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","b78337a12b19e301b708a0b31ecfad67"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","866bcd9d6bdb387ec349d3c379b29d8b"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","2e73cbe784c7e864ba26a049fc05039c"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","9eef888f2c6ccedfc8e1d0e602bcf0b6"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","c64b4021b50d92bb5b36b26bbab541ab"],["2018/09/29/51nod 1182 完美字符串/index.html","76ef80f530b787f08875721016223b8e"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","86cd836a5fe790024d6dbcd2d1a6c122"],["2018/09/29/51nod 1283 最小周长/index.html","cbeda14524a827f7148a7195c0b69e4a"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","4eb825bc85b6ff9703071172177d89e1"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","cf73abf036935ac92ac1c332550a05a9"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","63b5d4cf7035ca02d38935c96ce53611"],["2018/09/29/51nod 1344 走格子/index.html","0c9647618f74edadb7ad6fb6622a57e5"],["2018/09/29/51nod 1347 旋转字符串/index.html","8234cfa73344f2c5cfb9e63a62c93686"],["2018/09/29/51nod 1381 硬币游戏  /index.html","5002a6ffc4c92da20984ddefbebb4024"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","b4bfe2de12c076900a01e64b30a77b56"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","3f56ba5a87ede85c397d1649c5eba1c6"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","19e70981aeba2369f635440c93337717"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","07c6f7bc37c50858ae97f02739a2f0ca"],["2018/10/01/51nod 1596 搬货物/index.html","6f3df46672ed97ad67b9cc4a2f2b041f"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","fb6f99e62a47e78f0590009d6a80f766"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","d79408b492364a6ea46f21c176cd36d4"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","32f1868afb3e0ce58bf13b1e22ab4330"],["2018/10/02/51nod 1521 一维战舰/index.html","066ef1d8b74eae4635940c20cb694054"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","6e5d5be57eefd003e52b8d091e3d8c4d"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","bf5b00dc5fbbae4b90bd3fcdcd3dc159"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","8226ff42242df502d7286283d524304b"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","3ac4f76411852b00351537bd74cd8120"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","cc77dfd29b7a251b870973e74c85f821"],["2018/10/03/B. Pocket Cube（模拟）/index.html","e0de8ac7985974f4d3c8e617a15b1df0"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","488945bc65545d8af7374e9bdeca80e8"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","b9a4af5286747e67e4876ec23b72d814"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","85b797f3c677ed0f257a53234697d4c0"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","0198ce6b538a9e891710d7cef02e9748"],["2018/10/05/51nod 1138 连续整数的和/index.html","dd7f8be8b58779a639215954e56262a4"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","f0535b25051d849464a5395dd5b91a00"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","8aa20998351eee9cd08799767a789955"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","7e66995bacc08d798dfa8aa308e2f872"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","3fcbc4329d55e30b18a6b9756f0237ad"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","69f92784d86beead23204383dddd20a5"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","7ea9f8f699cfe2df71a2a0a981f3baf6"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","67edcc317774200335d6330e5629e7ee"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","7af898b8230f5866f39f8a9c6350446c"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","24efbc783529b1f8f3c4e9f0d8eb179d"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","6434183cf2a73970b8a26c3c02a10b9d"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","cee9e7808683df989098c958c8bae7d0"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","0b2d27ab4cd4478de454d3c6f9962d1f"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","a2e498f2b21692a05d1da7e9a6ae0b48"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","0eb03f7dfd10c9068cbcd4079f9ec15e"],["2018/10/10/ural 1073 Square Country/index.html","82c4d7192fb695ae733e1feeab2c0aff"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","f4d19bdc96d22a58f2c12fb97b315a78"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","bceb4353f81fdb4104151ff8ecfa9582"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","20ca88e97a7f39f1d0a7bc7130938de0"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","d63e8eb83ecb77f68b53fb2fbacf767c"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","54694e55488b6b8031ff715cf2874f63"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","80ce92bec92a26acf100c7db9aae1e87"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","2fae834fc5fa98c7d51c70ed631f31ab"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","807edecdacab4cf94b2114611f7f8fca"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","20a06af9978d9a674a6ed990cc4ab946"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","146699b6d7e7c8aec737e7d188ae2a58"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","9b63f09f395ad97f5d1bed188020c5c1"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","b66c7fe3888bc765b71b30be1c8df400"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","5fb7c419a73f550baf2f502b74251faf"],["2018/10/13/51nod 1315 合法整数集/index.html","f28aa520a4e62671e65fee238e26ab09"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","3021e5bc95171d3050a620ea89d75497"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","2063885966e107d35536e4860d09ccbd"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","ee5435358decb03bb76b135717394143"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","1a960f91b29524e8ac2c8c2afd727b01"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","9540ea88f3680bcf86df4479e6c53a78"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","3f4737987b1571ca19f224fad5c77530"],["404/index.html","8101ef7c5852229d38dbc590acc97615"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","c4ef341013edf4997b8d4768dd621976"],["archives/2018/08/page/2/index.html","16de579e5d3ae7267c239e4eb23c2b5c"],["archives/2018/08/page/3/index.html","28bc9e1c3206ee6213043bc753f6a4cc"],["archives/2018/08/page/4/index.html","d2e35597d4a2debf48a13c9229fd60be"],["archives/2018/08/page/5/index.html","19504e99d19a1aea878ed34199b779d7"],["archives/2018/08/page/6/index.html","356ccd7d715196a0d1b280859839f1af"],["archives/2018/08/page/7/index.html","f8e6351b71c8b64d7985103b3b038da6"],["archives/2018/09/index.html","6d772fd76c691fd4c9246e8fed690c24"],["archives/2018/09/page/10/index.html","15b617b305d7df533fbe2f52e56ab749"],["archives/2018/09/page/2/index.html","8840d9dfdf7b9f29ab3140f743862013"],["archives/2018/09/page/3/index.html","fedcd7fca2a4d02b25abb26e720823a5"],["archives/2018/09/page/4/index.html","72ee973d52828d8274b8fe46bc030709"],["archives/2018/09/page/5/index.html","ae8747eac6e154a20979a7f9c8203f38"],["archives/2018/09/page/6/index.html","0c75228be99609ec06c459f56f50f8e3"],["archives/2018/09/page/7/index.html","448035f0e33f45f3caee34ef6cfee8dc"],["archives/2018/09/page/8/index.html","61eb48f31ba8f029e3bede2e5c2f8348"],["archives/2018/09/page/9/index.html","a9940eab3cc83fc5c36368ac7faa0c51"],["archives/2018/10/index.html","ec54a095e06d3090101e2a2548875074"],["archives/2018/10/page/2/index.html","271b94487f7b2c142ac26e8fecdb8db0"],["archives/2018/10/page/3/index.html","d7fbc7f1680d75bdfe6535e922e673b1"],["archives/2018/10/page/4/index.html","a95ea42cfc4208d617aaac8584afea14"],["archives/2018/10/page/5/index.html","40d1d405dfce4c84adfb87b27ff5ece2"],["archives/2018/10/page/6/index.html","4ebccbab1b558bb783761b40c38cf2ee"],["archives/2018/index.html","bdea756478f31301281b8b23607e2d4d"],["archives/2018/page/10/index.html","da8de463b5659d67e647fa2d3dc57705"],["archives/2018/page/11/index.html","f8e486347d9cec17999cc2db89e5e55a"],["archives/2018/page/12/index.html","c092e172912fba548514f3d8c37c0956"],["archives/2018/page/13/index.html","f27420216c540d64b67b0e25157b9442"],["archives/2018/page/14/index.html","f18127645fafd45a1337127d4f26a845"],["archives/2018/page/15/index.html","266cedb2ec50df4d3befdd72250418ec"],["archives/2018/page/16/index.html","2b3c4c05abf9b077d0831800ffa92f4a"],["archives/2018/page/17/index.html","79a854a5d86e4674f75d07fcd039e0a7"],["archives/2018/page/18/index.html","9199a00bb189b6e22d31d087c090e4ea"],["archives/2018/page/19/index.html","2976f5a960991b4cdd816f216f01f088"],["archives/2018/page/2/index.html","e09be0d87f188bb1cbfeecbf788ddc4d"],["archives/2018/page/20/index.html","dbfcd33e2f3af0cb5d77c25e2e1e4e0a"],["archives/2018/page/21/index.html","09d5da0b2e8319040f761d5f858f6261"],["archives/2018/page/22/index.html","071a6fb31216a9a1b5a6f5c43e2089bb"],["archives/2018/page/3/index.html","5f84556020db3c34c960f5d68591e788"],["archives/2018/page/4/index.html","12bc9838cf1f8206a6ace361d490b3ba"],["archives/2018/page/5/index.html","b5c6cdf72d3392c0d025702b206bdab5"],["archives/2018/page/6/index.html","6ddfd93805f6948f71f0f8772ef03afb"],["archives/2018/page/7/index.html","e4b499fe9716610e94ff6e8ffa269205"],["archives/2018/page/8/index.html","773217d2efdb05d2dbb69496ac3260e4"],["archives/2018/page/9/index.html","d786e1380baaaee373dd66f528b2f3cd"],["archives/index.html","dba5eb8aba4179f451db0b6023593a9e"],["archives/page/10/index.html","cbee89caf77c21b0234b0155c12df124"],["archives/page/11/index.html","e8cab897c2026b9c6661cce27354649f"],["archives/page/12/index.html","7a364204a889d27958ffc2909c631469"],["archives/page/13/index.html","9162525513246bc84cf05538c1c668f5"],["archives/page/14/index.html","a77941745eb6f27000eafc33161f513d"],["archives/page/15/index.html","3ccea6ca317fa6361646f84766d0c71b"],["archives/page/16/index.html","5bba48fc304500b88e93ba7012ceaed7"],["archives/page/17/index.html","6417d6c02a30aa8ef5e75f902b69927a"],["archives/page/18/index.html","73a41d078a8b516808988cc1c5fb63a2"],["archives/page/19/index.html","111515cc6717bb963b3b234e35a9bb03"],["archives/page/2/index.html","d916b221fc6442a7c3ee54bbfce5eaf8"],["archives/page/20/index.html","25fe7166489ddf985815b723f291e0e8"],["archives/page/21/index.html","916e6e414c09249139cd1e260bf76045"],["archives/page/22/index.html","95f12d404245ddee7c41153d7fe54faa"],["archives/page/3/index.html","3331eedf92446c05469ed60d10a828de"],["archives/page/4/index.html","1306addcd0bd41d5a235b48c8b8153ff"],["archives/page/5/index.html","c0f307fa03c923d18f12e1d6dfd001c4"],["archives/page/6/index.html","cd3d987dd73ada7d4c04d8e87323c7de"],["archives/page/7/index.html","aef49862372b997c3568476d8bc5559c"],["archives/page/8/index.html","a2c1475b43f577daeafa7db1944b1aba"],["archives/page/9/index.html","832f0a83c5ffdb0ed7667c833e3082fa"],["baidu_verify_DfMf5XqJUb.html","761c1f51042b1865e1a0a962e73251df"],["categories/51nod基础题/index.html","e4b19190b21c4dfd1cff7947a60f6e3f"],["categories/51nod基础题/page/2/index.html","29026adc01b91fc4fa66977c39bed14b"],["categories/51nod基础题/page/3/index.html","22d4fc41cc7178750adf87dd37bc6628"],["categories/51nod基础题/page/4/index.html","408e5b69b88b464c11fbdd69cc46dfbf"],["categories/51nod基础题/page/5/index.html","5fea8d6c79b72e804c5121c79c2caaf5"],["categories/dp/index.html","3074e321c25b9bd9773ec61702add1fa"],["categories/dp/page/2/index.html","5444fe1916e0a80aa15d47c79a05e150"],["categories/hexo/index.html","e6143674eeaad52217d20e2af119acb8"],["categories/index.html","388dec898cedfcca508b57ed6be2b720"],["categories/java高精度/index.html","186f45ecb0373815974d176a3e008d61"],["categories/java高精度/page/2/index.html","0a944fa8e8474908bb04e14d6c62a938"],["categories/love-peace/index.html","b1a9ae081a34286e45894bf4bb0c8699"],["categories/poi/index.html","f968193d3293f1425a0094535669e14f"],["categories/二分/index.html","ab67d347287ee57cb470ab63ad90d516"],["categories/博弈论/index.html","70c8423803c30bb351a617258dc70f5e"],["categories/博弈论/page/2/index.html","00f3d7a7bc31b2278ce488cd44ecdaa5"],["categories/图论/index.html","d2f35300c56ad968bb32f2ef1c85df30"],["categories/图论/page/2/index.html","6f43898b7c00cadedf2a965915f1a886"],["categories/图论/page/3/index.html","5cae970b806477e65a1b3c8c948d820c"],["categories/搜索/index.html","3391a25c697f546c32b1a61d3df7cf51"],["categories/数论/index.html","d7bcfc9b1977ef6624bdc7f97a76d2e6"],["categories/数论/page/2/index.html","607799084feebd90701567505b8a836d"],["categories/数论/page/3/index.html","d3f3dfb43dbbf711162cf8f84f21250d"],["categories/数论/page/4/index.html","1e03fe6f9f5bac44fbc22325760db5e3"],["categories/杂/index.html","15b440b57aeb8afa8ffe6100fc3b35b5"],["categories/杂/page/2/index.html","f6d81ca364a8a3d179eab1952ee351b1"],["categories/模拟/index.html","817c22de2066a22a63a3bc673857d7ce"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","dd9ae6973ba59aa437fc054e8e064f0f"],["categories/计算几何/index.html","b0d05293a5696f90679dd1d292ea9744"],["categories/贪心/index.html","9145f267c603288e6e5c96f882677f7c"],["categories/贪心/page/2/index.html","14f1e7aa975d6de15cca73fcf80b47ef"],["categories/题解/index.html","2c6436ae1135d107c3b67749e9926090"],["css/main.css","c596025e23235e269249842b9e15bd42"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","9807f02cf361b594c7a254fe9ca2181a"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","19aeabe719eb3b1f6a4ae77812926ca5"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","fabcb465945f532a3fecd1abf14d902c"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","00888da232654e57557bf1e5fc45549f"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","7af1ac2853dff0cd403b3ed43cf26e48"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","162eae50781a98b20c3b9996fcab6856"],["page/11/index.html","80ba5f57b057c1317c6a4b0068de3fc2"],["page/12/index.html","e9ba58ae0f336ef271c722b3ea9557dd"],["page/13/index.html","e93d5046a3de301ecb4639993d6c8828"],["page/14/index.html","75fbf30879cb431ae52d8bf6c9861cb3"],["page/15/index.html","31379fcd5fc179147f57daf4b467dca0"],["page/16/index.html","f394e5d4b85e96802170cecb3baa99c9"],["page/17/index.html","052e8dd440dc4ba6bd617e30c297e5db"],["page/18/index.html","c8913bbf1ba49ea82ebbb8e77b41d845"],["page/19/index.html","19920535d51519e14fbad48218f91a5a"],["page/2/index.html","d3cd995e6313885321ec95bfb9e3fe45"],["page/20/index.html","16d24804141f34c92f21fe017cfde469"],["page/21/index.html","a1e3d02718705d90d17d1a7102fe15a4"],["page/22/index.html","6d0a191036a7449bae783952763c582a"],["page/3/index.html","e44ae995885a283d4adca3c88957708f"],["page/4/index.html","c845f986195ab47339169de516d72d93"],["page/5/index.html","ca020e7915b3312eb8ff4dc4cf2f1d02"],["page/6/index.html","adbc89162ede077dc411f9c75bf54147"],["page/7/index.html","217f43168c3fc7c5b691f6f9d61659d1"],["page/8/index.html","4f2e875ce280e215bd48b48845484cc3"],["page/9/index.html","3196eefd4914b3b82e726bfb8cd5e846"],["tags/Floyd周期检测/index.html","f0522353321920a198193f6d1190c9e1"],["tags/Manacher/index.html","70455ac3d2461712334062be24ae00d6"],["tags/Pollard-Rho算法/index.html","2acd6f9022eebc28ccaa8b1514508f75"],["tags/api/index.html","983b6933885626ad3a8e4a0805934aad"],["tags/cf/index.html","60490dede7e29498cdc6e17289248a51"],["tags/css/index.html","14a31e690dda566548b3dd0d08b9fee7"],["tags/dfs/index.html","ee1ff453115d859ecae19ce00165641a"],["tags/dijkstra/index.html","bd3cccb27e4024dbfce9f02a93db5075"],["tags/dp/index.html","df6c024a909ad58ec83c334657482f3e"],["tags/dp/page/2/index.html","4fa528477dbce5e0ad9547a82a875c3c"],["tags/gcd/index.html","63309bf5d2ccba9c8e0cdf04dbae9768"],["tags/hexo/index.html","50e51bff5cffe96786fd99bd4817ef68"],["tags/index.html","734a3c91ceaa175e75f3f2850c8e44d0"],["tags/java高精度/index.html","6d13b6292422af0c152ae57e79e243d1"],["tags/java高精度/page/2/index.html","839be9de6874b59bd46b7c78b29acfba"],["tags/java高精度/page/3/index.html","974ddaef53ef732a0898775ae0674cf2"],["tags/kruskal/index.html","959d02f3eb64bde1777d97e8dee179d7"],["tags/lcs/index.html","69fad330e270789d03a9697cbea97cce"],["tags/leancloud/index.html","7ee900f74950351a57eadec0a9929fdf"],["tags/live2d/index.html","a3f020f7586f35c5e143e3ea3334b808"],["tags/mac-OS/index.html","c5809b13f11b8be87028f465d1cefcbf"],["tags/prim/index.html","ca8d4950e1d887d9579b1369e35862a5"],["tags/python/index.html","1719fc67935905cd55eb3a4720982d96"],["tags/revolvermaps/index.html","36ebaf7a16923db813f92b793d547907"],["tags/rmq/index.html","43300292bd579601f012c46ccea4f51f"],["tags/sg函数/index.html","f196c3eae31122f287b631be46020d70"],["tags/stl/index.html","332f3bae7010a156c39c9e5c24d685c4"],["tags/三分/index.html","901559de1483c4d49d88b410b1f548b4"],["tags/中国剩余定理/index.html","cc4dd19b03ced665326b7257f6afb5e7"],["tags/二分/index.html","7e80811c7e5f9f9ddafa74b5d836a86c"],["tags/二分图/index.html","83a9279cf7cba0c731985f956044e08b"],["tags/全排列/index.html","38539608c1a864a3cdeb73c4a4690892"],["tags/分割平面/index.html","8e44e6ba46e51bfce7423e49bb5d2b59"],["tags/分数规划/index.html","97e10ef788f10b1254f29eb1d69a51f7"],["tags/前缀和/index.html","c613e078052d7ce2a265fcca05c6afbd"],["tags/勒让德定理/index.html","e5116754e954f82a5db4474afcf20a0a"],["tags/匈牙利算法/index.html","ca38b38facd478d9e67acc9f9ea9fd2e"],["tags/博弈论/index.html","d0f2ae9d4ce75dcc37e771162abbe311"],["tags/卡特兰数/index.html","26a7df95045b7609746dce6577f88c2b"],["tags/卢卡斯定理/index.html","0cd448efbaf2f817f75dd02addb9c9ca"],["tags/原根/index.html","0ff3ad7e528c798b2aadfe4a0be08fca"],["tags/四平方和定理/index.html","719cc4796608915fa1c5b54c29965a5b"],["tags/埃筛素数/index.html","762c627029ef24ddb0db6b8d56be41a9"],["tags/威佐夫博弈/index.html","99c564107320ef4ee2d9296d1091aa06"],["tags/字符串/index.html","0112919d3e0d6d4ce211edfdf5fe94b2"],["tags/容斥/index.html","75a89717585335d1c5b239fe12eebd75"],["tags/尼姆博弈/index.html","0c2ac0307487dd57667ed72e53e8d3b9"],["tags/巴什博弈/index.html","a9dc7106f141c2f453b679123be5bd7c"],["tags/并查集/index.html","1e12f5ed9775010a0af0fd1f8eeb058c"],["tags/归并排序/index.html","a70228d6bc1bbcbc7cd97cebb37c06b8"],["tags/循环结/index.html","b732894e4b7c7cf6b67c7769fce4dbf7"],["tags/微信/index.html","c369fe7700feeab8cf421876dd4a8a56"],["tags/快速幂/index.html","8f4b0c7ea04ded22a2fd20722a4d7528"],["tags/思维/index.html","58d9b02097ca2fbc99100e297f16e205"],["tags/思维/page/2/index.html","b4420fd8faa5d27ef8f8a674f3c717c4"],["tags/扩展欧几里得/index.html","42c43973583eb8dfc08ad1a18f2a8ca8"],["tags/拓扑排序/index.html","1367551853007dd7ef7f51988be087fb"],["tags/推公式/index.html","e0809fddbb3bf4a296a9e41cd88662c8"],["tags/推公式/page/2/index.html","5f60fb78c694b251a34841202a96bacc"],["tags/数根/index.html","e3b042da165344c86fd04002eaaf6105"],["tags/数组加倍/index.html","bc7a402f8c9cf6eb7c70ae340fd8d247"],["tags/数论/index.html","549e8668c88ff7425249c2118a18e739"],["tags/斐波那契/index.html","595880dba31bf6b2f148d26a090368d1"],["tags/斯特林公式/index.html","4c1f403d5985f96d8cc7b839c4dca8b2"],["tags/斯特林数/index.html","c92416489c25031d478026a82da574e8"],["tags/最小生成树/index.html","79e50b1f9b7a2b855608f6f7e9b7598a"],["tags/构造/index.html","de7d9a33fef9f484e9af4e29bd9096b9"],["tags/枚举/index.html","fc1747a1170ea028581d853fe4405762"],["tags/树状数组/index.html","3ce1950dc7fab9fc922b66b5ffebfe08"],["tags/模拟/index.html","6deeae728f5921563c254abacc22acd6"],["tags/欧拉公式/index.html","f8927389be42c0ac9fe922fa075e0a3c"],["tags/欧拉函数/index.html","1cd6ab16a3b8d297d349aeab5ef58c71"],["tags/欧拉路径/index.html","eca26f68893328095183c649b44b88c5"],["tags/海伦公式/index.html","7da8498202570cdd1bcc991e1a1d1364"],["tags/生日悖论/index.html","fe3f70cf9480866b22f962eaffc5cb02"],["tags/矩阵快速幂/index.html","37962bbefa17c04241f2c5ad72c53772"],["tags/离散化/index.html","979b696569801927ff23504ad8445755"],["tags/米勒罗宾/index.html","5fa926889c1198e70778d1595cea862f"],["tags/约瑟夫环/index.html","efa7545ec750751d732d136e48f51881"],["tags/线性基/index.html","3532d33ba6cf97901f43b766394c04bb"],["tags/线段树/index.html","f79ab82a5c7f7d57b87e1c6e54051ae9"],["tags/组合数/index.html","be5ec9342df4c899fdcad863147fb1a4"],["tags/组合游戏/index.html","dc919c58012a68df3c3d99ae2c4a4906"],["tags/背包/index.html","9629c2ced90066abdc0cb14dd93cedea"],["tags/莫比乌斯函数/index.html","27245f1092f626ab1d8c98a3f280155b"],["tags/计算几何/index.html","ff2b1fdecefcc3481da318033fe66493"],["tags/贪心/index.html","46a23c69b03b142ede10bbef50cb25a6"],["tags/贪心/page/2/index.html","50e2ad870cab507864a810c45c1e4461"],["tags/贪心/page/3/index.html","87d16d60759f8f85dbf42f08587b7c5c"],["tags/逆元/index.html","87249e29d8005da7f5135a7a0bd21010"],["tags/阶/index.html","3546a07161560d189b179900903e761e"],["tags/鸽巢原理/index.html","0739751ffd6691a78bddaa49451bf533"],["tags/黄金分割数/index.html","f20837a4067d9b23761aaa30ecf07b6d"]];
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







