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

var precacheConfig = [["2018/08/11/hello-world/index.html","0e19d86db4ef4ba57f8cff88b4c2b9b2"],["2018/08/14/1995 三子棋  /index.html","615c31414769f99e762b7af2c8feef93"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","b0fc6ed8580f3b38a8478ce4e2b86ab9"],["2018/08/15/2006 飞行员配对/index.html","3d5018b80760b1ceba4d04fff1451bad"],["2018/08/15/D.Tea/index.html","7a732a9dcf7d76104264a1375fe7203a"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","b3ae658740931039daa7922cc6b96cc7"],["2018/08/16/1459 迷宫游戏/index.html","b95b98079ec05f374a2194bd257c16d9"],["2018/08/17/1264 线段相交/index.html","ab581c422846567a9eb3daa1c6ac24f9"],["2018/08/17/1265 四点共面/index.html","fc327c351efa84d0300b86b181979c84"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","838f7df969ceeb83c382fbb942cb7195"],["2018/08/17/1384 全排列/index.html","3a7a23ff8efa17b2c82cdb127481fe1e"],["2018/08/18/1240 莫比乌斯函数/index.html","6fc15b84cc65b61fcef4b5a42e0904b8"],["2018/08/18/1256 乘法逆元/index.html","6f1f842e0c22c35c484af2e45cf0b37b"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","01ed197c5ce989dbe9a32fa3c8d8584b"],["2018/08/18/Teemo's bad day（并查集）/index.html","a9568dd82ac6cb69e715392a76728560"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","92b6804ae13fe952fc95b777f4d0faa4"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","05a68debdf4dfdd116a1dc4a13595ef5"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","43bdfb568ffac1917eb0770330accac5"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","5e02dc0b74d43544993dec5a44a1a5a8"],["2018/08/18/hdu 1856 More is better/index.html","36cdd5ef660d7e932a3027f1fa86a32f"],["2018/08/18/poj 1182 食物链（并查集）/index.html","4cd077408b33245807b890f857e6e758"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","77c290e8f20b6e4f231ae1c5af884da8"],["2018/08/19/Minimum Cut（读题。。）/index.html","b4f9d1f2b4a3549f37852a85533f3a15"],["2018/08/19/Ponds（拓扑排序）/index.html","ea94d4f406e03cb234b87208aed1e71a"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","297d0f7097077e21007444be74aecc8d"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","21d611e983ead9b7c8241329a5f55d71"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","9fd54382d2f7c4bdb7740950eaff05ff"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","3e81ab67821f30a8cec76dc785d3e36c"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","91eeb3321d89deec1c5d48ed0f8c9b58"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","f5a2f7145dc86644cdfe69c88656c4cf"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","e6f47ae4b2fa0804a3b0051d4beccddd"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","a5688450f1e0206b296d02538242764b"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","a5528fe4fa6c44fb6d9b9ef67f043a40"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","961912b9f04be35932961fca2a1f3f90"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","5c55e6c960026abcc844ace00505bc4c"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","26f77026a5b84e74fd5c3aac597f26af"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","aa2ee09ac08db66f212f5ad85f1cede9"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","738f8b7cec7a35e0062eb604a0f9857c"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","908bef78ef1f11d74c424e9dde29da8d"],["2018/08/20/Pawns（博弈，思维）/index.html","7b3caeaba7f53035dead4ceceaae02c9"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","5e7bcd255747c184edb28157f18983a6"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","4f21587555700bf9609656a26b314280"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","afe508b8a4aa1089a8d9dbd30caf10e2"],["2018/08/20/hdu 1564 Play a game/index.html","3781aacb4ce43965d96913ad377cf0a3"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","4558c89aa85cc07ece0cb6abd2b791c5"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","0a8d8b68027cf3ad8ebd02f6350b5780"],["2018/08/20/麻婆豆腐（思维）/index.html","31d9ea7fa2f243fb8509dc4b13495fe9"],["2018/08/21/1212 无向图最小生成树/index.html","3e9b4f44de46b0a1a0d636592f47906b"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","945c207df9ff1dd853e01cf7b2b7764f"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","c53929b80c442be60fb43f5f04c9d793"],["2018/08/22/1079 中国剩余定理/index.html","53c1858ffbce3dba08b82e63eda52428"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","7343b81139789d98598f60de9a744df1"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","681af369357e13017d9d3874e8c0fc14"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","ecda51dc816abbd4acabf31aaf63feae"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","81ff832034080191fd2ff2b0075d561d"],["2018/08/23/1136 欧拉函数/index.html","0df194a547b987af1932be7ff0de3ea3"],["2018/08/23/1137 矩阵乘法/index.html","60fa448d87d8a3c46ab416da5988aa09"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","b5422b5651fe5746ddd78aa28578b790"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","cf379ce22852ee15ead45280a5da550f"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","98c3a3c1b5126555d6e90781d75c2c74"],["2018/08/29/hexo4/index.html","0e1411a22c7036364e30c9872142c09a"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","0165dd3068c52ef68578ec6858c0dc35"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","51e732674a310dccfb01a0cfd7ffa30a"],["2018/08/31/A. Too Rich/index.html","d6ee7e10b96ca14f76582b39f48bcda2"],["2018/09/04/C.Catalan Square/index.html","03b92d6d24d05a30b8390d40ce5287ca"],["2018/09/04/hdu1002/index.html","56f3f93b3f3fdf243cb94ea9f264d645"],["2018/09/04/hdu1042/index.html","fb0851cc30a43d8a6d5fb7431360bcb5"],["2018/09/04/hdu1047/index.html","738b4199ebe16f9230321e1768bc40b3"],["2018/09/04/hdu1715/index.html","04ba92683c6275974de585742a83440d"],["2018/09/05/hdu1063/index.html","0d87a578370cb5d84136675ce67fd045"],["2018/09/05/hdu1250/index.html","17238662b8ae698ced238c6306017643"],["2018/09/05/hdu1316/index.html","b52180ceb5953591e837b68e926d7660"],["2018/09/05/hdu1753/index.html","77633f25446c3fe68fa90cbb05d5d663"],["2018/09/05/java大整数题集/index.html","34db600940679da2cc51aa146a32d9bc"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","bb4267d420bea32144112cc0b070ddc6"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","31597318e4e76de12686c249f02b2f16"],["2018/09/06/hdu2054/index.html","70bc4792f578c76cf49ccf7e884686b2"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","2d52dde1c55fc97addf940703a77c750"],["2018/09/07/hdu1212/index.html","401721624404517c404153c39afe9a61"],["2018/09/07/hdu5050/index.html","80861130cc843b9f06607337e9712dc2"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","a9da0929c5231fd0b8e25a833e34b299"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","ad2c01a39078062e4922e52deeeeb2b0"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","fec7893c39d2e1280dd628a81c45205f"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","f35e95fa7e0a54f4e5f84eb81736d73f"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","3dde0ad409c07d2fdfbc9f7770cb7861"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","cf7c01d82ee50ba32f5a5317f4fd5ec2"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","cda6235b3cd4409c718e337996a93159"],["2018/09/13/Teemo's formula（推公式）/index.html","032992d6f12575c486ad04b7572b96b6"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","7e3d74471671702ef5aac69775a71abb"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","9529fd94578d839b706175ca7e203975"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","f8447981d45c3fa161446e5fdac70db9"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","5b320f30714fca7d151353671c5c4097"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","e86e149a67ff40410a82cb9761465135"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","023b2f30892027c4a43c386a9ac349c5"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","c457bd4730f00a37e5b8ee1bdb93ec40"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","46d34361ef623c4621a2b805b6b96ea1"],["2018/09/16/1118 机器人走方格（组合数）/index.html","b560e759c63cc276a3fdf83a945eeed0"],["2018/09/16/1134 最长递增子序列（dp）/index.html","a752668389355f60bd5838178b3f02e8"],["2018/09/16/1135 原根（原根性质）/index.html","2eb4bafa7c54afaba77bc8eaf72b2e43"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","8d87be7ff244403794092da67576821a"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","cae8781dd70a3f7e7421c364350ef52d"],["2018/09/17/1073 约瑟夫环（递推）/index.html","587e76fc3832378f34f0c28f482f22eb"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","0745271994a764293b2156dbcc36cce5"],["2018/09/17/1085 背包问题（01背包）/index.html","71679d349feb309b6c6d83ae1bd297b1"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","358fd602779b9e98f42caa6d7b802cd5"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","9b4a9bf4d4fb99e725602b6b2d7c6a00"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","c5a7d2e2e6d2001c272f729563ff1d85"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","e6e305b2a623bc4ef24b709b23131a74"],["2018/09/18/1027 大数乘法（java大数）/index.html","6a6072b3537d2624c04deb29c7b6d3e6"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","f40f44d7c984518c8f319e9829e10460"],["2018/09/18/1049 最大子段和（dp）/index.html","6a42cdd403501a96d302aeb914ea00ff"],["2018/09/18/1057 N的阶乘（java大数）/index.html","0c30fe0a9d5e005e5f289e9eb9caebcb"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","b92981c988e0eb90b86d73e42381a363"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","65c71363b6390d3cd3f35acf5d9df244"],["2018/09/18/1072 威佐夫游戏 /index.html","190d1d1beea5d333e113a3abcbbb0692"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","7e592f6e623ae8d8238993f6ecc242f1"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","329ea82370814f1e68284360230bb9c1"],["2018/09/19/1000 A + B/index.html","1bd924e71be3dbc17deb5f40ae826107"],["2018/09/19/1005 大数加法/index.html","edba5818cea188ccc68c283fabb2c008"],["2018/09/19/1008 N的阶乘 mod P /index.html","8300b99c84efa1c4b2b6d694911d2895"],["2018/09/19/1011 最大公约数GCD /index.html","07495f883803a06db7820f75649937e7"],["2018/09/19/1012 最小公倍数LCM/index.html","deaa00eae1c06312bc592df745686bda"],["2018/09/19/1018 排序/index.html","cf30f9b665aa88ece865492d36e7a3b9"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","dab0e642d5c6b7279afb3d9285f208b6"],["2018/09/19/2133 排队接水（贪心）/index.html","1a130971326a37db903270de8ec00aa9"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","631d888976bdfbf8483999125e98c05f"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","ea0c9b55736ddacb564ebace1b7e91a5"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","8adcff71c13bfd7c2a8a838ba044b605"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","a89c041128e8694ae33f926f05b1bebd"],["2018/09/20/51nod 1717 好数（找规律）/index.html","7ae00fd4db8d77e15cd7fa1322a00817"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","3b2f9c9a96eb5e3811f451324389474b"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","5fb578b203c294ad82ab8bf0adddfcfc"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","3376d76628bd7c08d31184dee3305ac9"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","14c0d0b451b3b4a0bcc148e7d932cefc"],["2018/09/23/51nod 1791 合法括号子段/index.html","ce2c4e1247036547b1da61c51d4cf422"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","8483e0ee304b3163e4fb9a6cb4a2085c"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","4cc5e45eb5ddd32318d3e4626c59c390"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","b8fe5b342be9ec193c4ea1acf705f70e"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","c1f827ede433a80397c84f0c50291ca0"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","d0545295477f8142c036c8fc7467b97d"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","6b841c5669c4ca8f6fb0058cb1b44cf5"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","6315cad5ce402e018105c45207efbc70"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","532a87ae8896068137e4914449650fdd"],["2018/09/29/51nod 1015 水仙花数/index.html","f4eaf0f8fc778445427c5c77c052362c"],["2018/09/29/51nod 1080 两个数的平方和/index.html","2e55a206b2f740c4aa6665d94e0d7fba"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","712d6ee0dc046c9cda90892055402a85"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","a656ec12416b7efbd04f07bcca234252"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","eb539123650327f654beba799d10ca9f"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","949fc38efd4c904a70146f8c4d311170"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","fb1b02a956aa64fedc1b4dd86d604572"],["2018/09/29/51nod 1182 完美字符串/index.html","0859afb473e60242a11c470029a3e4fd"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","a46712fa35d97650d24d429d9550b607"],["2018/09/29/51nod 1283 最小周长/index.html","a52e5f506efe700a240376115fc36e7f"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","2ad5265c407708b03b0caac7bd99e82e"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","aed1f3d1c64b7f427672622fa071f1c9"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","a67acecabdc84b2632f46581f1d4176d"],["2018/09/29/51nod 1344 走格子/index.html","616fd4f4b6f7602e88bf054bd899eeef"],["2018/09/29/51nod 1347 旋转字符串/index.html","b2c1b3849bd2931a2697bfe4093960ef"],["2018/09/29/51nod 1381 硬币游戏  /index.html","9ebff8640f860f1c2b78a36cf45d1641"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","952ad456e056e57ff65b8e97e0faf7c2"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","77df48be5c294f1d2de7b8933cd39e6c"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","0dae6f565fae88e70b38feb2858abe79"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","36c2ae79e3acccd474481447a5ae5792"],["2018/10/01/51nod 1596 搬货物/index.html","fcd307ae8bfbe0a5ff627063e8e8aaed"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","d10597ac0ab75c0ec5c2570832960ede"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","d3fe6133305a920c2fc932f53745a783"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","2cf559fd0e5a1c5e27a9d0f69b13a501"],["2018/10/02/51nod 1521 一维战舰/index.html","5a9b284c04d6133b5d3fff6b5af4393e"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","e396dfd0955cad43415b8541cf433153"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","136d48462cc4d5d71bc58344302b4a38"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","8dc67f646a2d102fc1d8d014cfe66474"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","0dc2a879d96eebb5fdd46a23d6162499"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","ddec23b32628418d837b804db9df2523"],["2018/10/03/B. Pocket Cube（模拟）/index.html","d36409797930863bc9afeec5f09ac0a2"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","f89c1a2a1ba889d6bec86bfd502a89d6"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","77897d7e6d6c874cd80afd3c01fe65d9"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","88a34b3cb5a78bcf73e7d94e7d5175a3"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","482baca2dcb6fe22a94ca7e6cac8088c"],["2018/10/05/51nod 1138 连续整数的和/index.html","3a4e9855dd351e1bbd1cc6381ed74d40"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","368124a95e8f3644911788b259810580"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","e2fe07682716f7807e7bc5cc4fe2a823"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","ef921d05962c903542d2d3a59e87b67b"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","bf0ec64fe7a8f995a717e2355aa010d9"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","b7f662423ab2baf795ffd38fce619daf"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","8fcf979c20a01bf4b97530d1b95b6c38"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","a3589490a3c9f6f8ed91b94c0d1c9cbc"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","0e3723a5b153e41b93954c716103e059"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","29c242e0af04b5683b56cae38d7953de"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","5c8b7487d52a13237a6a2a3d641bdc4e"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","8e5f2d119980b967f9edeaa01cc025e9"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","2996b44bbd1faf9b7d13b9d02b6efa4d"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","3bd7a869d35a85461d71a059ddb39133"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","889cff453d51dee40ae3d8b4050c304a"],["2018/10/10/ural 1073 Square Country/index.html","5e729d9a2ad6dc8af495ea998fa0f093"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","ab524a637945922710e61b6da65b1fe0"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","011e71a1e5b97bd3deebc9ecd57443a6"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","7a159582626cefe341a7749d32eeffc4"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","9fd9c6cd3e2244ef9de0314bd15eaf3a"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","fe5b3b6b8fa17feeefbeb8be8111f595"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","349d3b798a87d01e2483e00b5b05da69"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","3f4335a2ef9d859feacc91d380fc0f1a"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","cd50e4659ae757ccd9913f8827d75a41"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","14a9fb861a02b6730c19e2569b91cdb6"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","199f2acde78fcea92112b233e8abde38"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","9e9b700ee8b4fab79d31c1c117cab478"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","fcaaf3b3fbb2f0c7a55dcf12ea54979b"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","d67fd9b62e432132b7124bfe1f0672ec"],["2018/10/13/51nod 1315 合法整数集/index.html","51285cde5908daf53faf24ff59b3ea7d"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","4c828074cc46456e1587c978af3bd92f"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","59acd68f4dcd34687518eb263a6b7950"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","ca3c12a267b7f1f48c124e1e8dfff90d"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","55c9c751c4745ce28d877b8a37dbef83"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","6056ba71966ba575ab1ced9b01a6b296"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","55c537c3f1e6ae5b1c52112215961999"],["2018/10/16/51nod 1102 面积最大的矩形（单调栈）/index.html","89503ad155995cf29d5ee5d6831db46e"],["2018/10/16/51nod 1835 完全图/index.html","044ffea236a1da4c3bd537f3fb0e9d43"],["2018/10/17/bzoj 1085 SCOI2005 骑士精神（暴搜+剪枝,IDA*） /index.html","0e182c691eb9cfcc9922fd763c46dbe5"],["404/index.html","c5901dca164735e1d6d91a6d877403aa"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","651b7672d8075d18327c84a291130255"],["archives/2018/08/page/2/index.html","1c329be883e815455da55aa50ec7df3e"],["archives/2018/08/page/3/index.html","28a2798edce46f8ed4b6ba1fcc74d705"],["archives/2018/08/page/4/index.html","4ac84c17242a5b30715d962afc47cba1"],["archives/2018/08/page/5/index.html","95f69b7dc5a60e95d58ead07a7d6a153"],["archives/2018/08/page/6/index.html","8178660f3e47303c6533ff8c768ea7b3"],["archives/2018/08/page/7/index.html","9532b2576157a7dff4933b39fd7e1dc2"],["archives/2018/09/index.html","9b83beb0a4054e402cabc919fcaeb606"],["archives/2018/09/page/10/index.html","82987cfc2c7dac7bd0d8679bfcc642cb"],["archives/2018/09/page/2/index.html","81e3a4a95338319a6c31cd1de50260bd"],["archives/2018/09/page/3/index.html","0556e7c0bf88c1325c3704d346fb78a4"],["archives/2018/09/page/4/index.html","3074162b117859a69c835132f5b3a0b7"],["archives/2018/09/page/5/index.html","b039af4b2fb66a604488c04c123f9550"],["archives/2018/09/page/6/index.html","658c63b974d5bb1c6b3910b294c4d2a4"],["archives/2018/09/page/7/index.html","be03cd4e3c0b6e66d883375be0df07a9"],["archives/2018/09/page/8/index.html","743b7fe9527b4bb59964614fbe7a2fdd"],["archives/2018/09/page/9/index.html","48ffb8070e1aa10c9fbf8671e5abe5cc"],["archives/2018/10/index.html","1dbe312d2c2f6e455e86075eafc71a94"],["archives/2018/10/page/2/index.html","9bf687b8b378b5d3fb2b5eed1ee12490"],["archives/2018/10/page/3/index.html","915a478f11f24b9bcc86f38a8f348ed8"],["archives/2018/10/page/4/index.html","7807274b392c36717287a99f47b06811"],["archives/2018/10/page/5/index.html","c5ca56e9ff1e0f83515cd03eb9746aaf"],["archives/2018/10/page/6/index.html","8a3e40b831ab788f449c6a7d36a20864"],["archives/2018/index.html","7304f0215e7aa1d5600b1d6b0216a764"],["archives/2018/page/10/index.html","743cb42dee1c1245eec6a19630d3dffe"],["archives/2018/page/11/index.html","de38f4adfab1fa40b2ae00c62d2ca2ce"],["archives/2018/page/12/index.html","96662e03b378b525782c018bb91d4511"],["archives/2018/page/13/index.html","384f1cce5c8c9b7666b486033e348d59"],["archives/2018/page/14/index.html","18f3bdbbae9ea958da57424b6b89abdf"],["archives/2018/page/15/index.html","4cca8eca85c34da07ed165dcc6c4b136"],["archives/2018/page/16/index.html","11ec3d29e4be889322ed93e26cc63c7e"],["archives/2018/page/17/index.html","6f87f40f7e285108925c24085b1d9ff8"],["archives/2018/page/18/index.html","2c492e7fe4578d9dd128e315c15c08b3"],["archives/2018/page/19/index.html","a1d8abff7d46b1ac1f3b6f9d2a0fbd14"],["archives/2018/page/2/index.html","231c697be1101f53b48b15b05f507988"],["archives/2018/page/20/index.html","1bd9410d5df13e8646ddc2ae2f49b77a"],["archives/2018/page/21/index.html","b8ddd8b9c4792b3871b10f9f61bb3c1a"],["archives/2018/page/22/index.html","ab1e88a576408ff42fcfb074ede2fec5"],["archives/2018/page/3/index.html","c466499169dbcacbd432713f616062e1"],["archives/2018/page/4/index.html","13d11ff6479e7e8b565d80cd6a777ddc"],["archives/2018/page/5/index.html","b310d841044f134ae5c187a537c3ee8e"],["archives/2018/page/6/index.html","51ea2e1872c19b3e7c2dbad0065452fb"],["archives/2018/page/7/index.html","842307350becea2c1ace94eae279a8c2"],["archives/2018/page/8/index.html","0ea4f81ff66ad5e47469f8231df7c292"],["archives/2018/page/9/index.html","218319a1cf0c10de440a2b8b86abf3d2"],["archives/index.html","057885aa6d1f1ea7d4f6019d2e928d13"],["archives/page/10/index.html","8236bcf9c8bf07f5368376f72bef3799"],["archives/page/11/index.html","1b015a939cc140cd71830b57c80c9d28"],["archives/page/12/index.html","8224efd9040f5f03ba2bdd2cc1d9382b"],["archives/page/13/index.html","61d41859b471eb7d03322230d8c0b212"],["archives/page/14/index.html","ecd9b474aae041aaf9375b2c63b874f6"],["archives/page/15/index.html","82262041d6629119e53f1ba221a93e99"],["archives/page/16/index.html","5ccbe9abb5b0872f0f70cfacd3044148"],["archives/page/17/index.html","df0958d2bbd54688d713e59b09674618"],["archives/page/18/index.html","b0f4bcbae9b37eff322452fdf3bc0b01"],["archives/page/19/index.html","adfcda0f35fdadeec0fb23e7112f640d"],["archives/page/2/index.html","a0160a5d01c7ca0bd8c63f90cbf967a6"],["archives/page/20/index.html","40941d37fe5532612e32e335aac5473e"],["archives/page/21/index.html","118be71ce72f8132052997f3710072b7"],["archives/page/22/index.html","56cf7c54ac2f3280e35eb39229393589"],["archives/page/3/index.html","5f1b9a7ef9342c4d7ccf08eff7191bbb"],["archives/page/4/index.html","d46b5aff0b37cfed35069852171e0dc9"],["archives/page/5/index.html","9d829cd3f2ed711ca175ef6dfa140fd5"],["archives/page/6/index.html","44c1092f390e0216f7d5a9bb30b55b64"],["archives/page/7/index.html","3423b35c5d40149edcac7956265937bc"],["archives/page/8/index.html","ec4f743079c0b1224a15ca6965b28730"],["archives/page/9/index.html","7ce71fdae48296608fef9bbf3e04e029"],["baidu_verify_DfMf5XqJUb.html","5a8500fad69a7df98d9614381f3a9f44"],["categories/51nod基础题/index.html","0377b3e960f02f1c81fafa08d1999ed7"],["categories/51nod基础题/page/2/index.html","94bdb5fc4d9ee424ede94a60580f3de9"],["categories/51nod基础题/page/3/index.html","58f9d3b273f5aebb8f34e5584ff63cff"],["categories/51nod基础题/page/4/index.html","40f5ddc21fc8cc54c1b34654344a52d9"],["categories/51nod基础题/page/5/index.html","ded45cfe339c04cc29c06a94a27fb798"],["categories/dp/index.html","528ddbd8612012f2469e11db36890b63"],["categories/dp/page/2/index.html","37d57df604a06eb2497102e18158d597"],["categories/hexo/index.html","06bfb4ac1a299ac0d0481acdc1a6f46c"],["categories/index.html","6a11af2021afa8d1f2abefeeceeb18fc"],["categories/java高精度/index.html","9557c49d18f8c2ba016f5e71f70de54e"],["categories/java高精度/page/2/index.html","7bee42dc861bd0d4b599c60522ee80fe"],["categories/love-peace/index.html","24bda87b73f2dcaf0d6c10a0a1cc17e1"],["categories/poi/index.html","ac3dd6c19cb765be065ac3f17e06579c"],["categories/二分/index.html","1e8f3a9ddc9d42f45667cbd0fe52e036"],["categories/博弈论/index.html","b7690b6a11250fc95f7dbcc5403eabc4"],["categories/博弈论/page/2/index.html","44f7534ebac3335e83c42dfe640e60a1"],["categories/图论/index.html","d1ebda0f3a3fd1f19980ba784e959669"],["categories/图论/page/2/index.html","3869843849266d458461fa1a772852ff"],["categories/图论/page/3/index.html","d917b4d17922c0bb17ef5884517d6e82"],["categories/搜索/index.html","c399fa5f05cf605daf3440b2144a1a21"],["categories/数论/index.html","d6042c869b8fb1b8b2ee6ec5e711b5eb"],["categories/数论/page/2/index.html","61d9c75f0c8be1bdc3987e39d475087b"],["categories/数论/page/3/index.html","3d85d6854fde384ca9846183503b574f"],["categories/数论/page/4/index.html","0027b9c1d6cbe1fa1d6efd28e6d9f1d6"],["categories/杂/index.html","bb04a9fee006f8763e876e20c3adc91d"],["categories/杂/page/2/index.html","6a067524ba61c4844229f1e918d0572b"],["categories/模拟/index.html","b7a6831ec1367a1794e21bc5b3ae4b74"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","88182c0910d14d9a64051cb36dfd60b6"],["categories/计算几何/index.html","1cb74767f6367b7db1819cab97638f3e"],["categories/贪心/index.html","f67e07597c7dfd3622a6c009ea34b407"],["categories/贪心/page/2/index.html","d0185dcee8ca801c538a04e2846ee613"],["categories/题解/index.html","6ebe25333e0770db31a9b1940a27ceb0"],["css/main.css","7c9c8b32938196d288450668f7616911"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","9c9b907da496ecdecafcc7e8ec7835ff"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","a59f07f96f06bcf6a42dddd5cc0026d5"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","af32e311f59d5813f2de40025f72ce99"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","a668a695aa5a6b75a60585f42d21875b"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","25f3a28886c71456f3f0e6c2a733780a"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","a2ec6c2c3c8f88754d0693f42f93d253"],["page/11/index.html","147e560688e6e3cfed2a4fb478e04e81"],["page/12/index.html","794c72e03a3a4877197a231ee0bab8e3"],["page/13/index.html","6ab6d678e81fb055879c0580d66e9055"],["page/14/index.html","67bc29a8c3d6e65836a369351b1c84d5"],["page/15/index.html","c516ebea9d025faa3001ff8c28e6700e"],["page/16/index.html","240137bdef75214e3427bbe2634f6657"],["page/17/index.html","865249223aa941228e833fda6a98246b"],["page/18/index.html","140d754a4ea968e1a5e001babd76691a"],["page/19/index.html","5ca24839fbb175aad799c936b05a1eb7"],["page/2/index.html","765c3962035591007de62c9b62f4ff89"],["page/20/index.html","d9c1b8e183386305477b9c00cbcd25d7"],["page/21/index.html","9012f284853a43b5a87c32bf3ba5eca5"],["page/22/index.html","245d274143caa459332665e43d696950"],["page/3/index.html","924246e5d4353a2f92a1ec6f84e2f50c"],["page/4/index.html","0adb1243a29d2d391bc14e854aae7bc0"],["page/5/index.html","9626eecdb7343f863a1f22bb2f6286b5"],["page/6/index.html","41eb110ad1d9694d5ed58d4b77666207"],["page/7/index.html","63ddbdfe95f570d06feae1f42b349b29"],["page/8/index.html","fc6afdc12af0a34e4f63d7aa4ad1eefe"],["page/9/index.html","73b0ba1c8855e65b5ac68c11af185ed0"],["tags/Floyd周期检测/index.html","cba8d85d682ea4e4ed6f56ea959ae36b"],["tags/IDA/index.html","9965934387084defcd8f8007d4bb07d0"],["tags/Manacher/index.html","af72dc80e92dd20142dcd273fcf916a5"],["tags/Pollard-Rho算法/index.html","1cb698e6f4993ace7eed690195f5d940"],["tags/api/index.html","61fd3696595475529dd4ea0d844d62d3"],["tags/bfs/index.html","214b5aaa998f0c603b44df56fbcd29ae"],["tags/cf/index.html","d9ce4bb8b734591bdee638bb0ec29efb"],["tags/css/index.html","ceb66577b60f2a4043f766c521a3734e"],["tags/dfs/index.html","a46a07583803fa8c8ddfaeaf995a4acc"],["tags/dijkstra/index.html","d4fff8eebd7dc5971a5999a71f0791f3"],["tags/dp/index.html","f76e39ee01335a1eeb66b5cc936d4d8f"],["tags/dp/page/2/index.html","ef4e12ca11da8a9e0679a90f6d0c72f7"],["tags/gcd/index.html","c7963bce224fecb2cdac98ba678a2fa9"],["tags/hexo/index.html","42a0793a0d6a80b49fb21548530905cb"],["tags/index.html","ed8b9cef21bc8fd2fd91415359093af4"],["tags/java高精度/index.html","f1dc2950bb6a38db69963e4f2f47195f"],["tags/java高精度/page/2/index.html","7f1e128e8816eadcb927615017f169e4"],["tags/java高精度/page/3/index.html","e0c3d9d8d8cf043829abc33957913216"],["tags/kruskal/index.html","8f131b7c9524cb20706db7b262dc316c"],["tags/lcs/index.html","1f01fea314028482fc8940f35bf589fe"],["tags/leancloud/index.html","7e727d58971e5f46acb5ffadbc711c4e"],["tags/live2d/index.html","053e9d497d5bd514090230bcd9c7166f"],["tags/mac-OS/index.html","30a0ef4c0a9d7e1b6b7696a55503182d"],["tags/prim/index.html","1e5756158d0f5733b034df8b2882bea9"],["tags/python/index.html","7e279b9bc2cf674477176f0c63e3c4d0"],["tags/revolvermaps/index.html","9fcf52c01fd66eb9ce333b4c47d95ab6"],["tags/rmq/index.html","bc34c06e41775f3c3d85f51d84c7c45b"],["tags/sg函数/index.html","8c0587e80118fcb7db0ef46109c489bd"],["tags/stl/index.html","b965b9807406eb08216fe90290f4a7a7"],["tags/三分/index.html","799292d5e4f3c44c8ae6dcf671b6f445"],["tags/中国剩余定理/index.html","78b32f114056e918b0f260d7371a5068"],["tags/二分/index.html","6e8dda3688cdd43de89a5e114706cb16"],["tags/二分图/index.html","02f16a358bd94b3c97e216c4d0e0ccc7"],["tags/全排列/index.html","5b3cc059656af7fd0e32a174dfa9689b"],["tags/分割平面/index.html","eebfbcc5ba2db3fd5b24184c0f9776db"],["tags/分数规划/index.html","ec2ac81d57e8391e48e1f8faadff25e1"],["tags/前缀和/index.html","c83b1c5ffb06a76e2798d99cceebc3b5"],["tags/勒让德定理/index.html","58035ef242fe04b41975430e48841558"],["tags/匈牙利算法/index.html","0419aafdee7fa53629c855986d15c059"],["tags/博弈论/index.html","28c89f7f31d00d5da7fd99e6df8ab0a9"],["tags/卡特兰数/index.html","b681d1b2093828fbe63eb9a3654d6226"],["tags/卢卡斯定理/index.html","d3c741ddc8c5da45e4eb79c03976864f"],["tags/原根/index.html","739589721bb39f0bd5c05fefcd45fda8"],["tags/四平方和定理/index.html","d588c52fa9f7901e72cfaed384ff8e29"],["tags/埃筛素数/index.html","d5be57f81a6e5eb64a98ab72ed1cf3cf"],["tags/威佐夫博弈/index.html","2a4e55a27b831f3cb4df2319c3b388ec"],["tags/字符串/index.html","1b508ba9a247a53d055bfaa21c350022"],["tags/容斥/index.html","aee7986dfa0c6e2abd7479dd0ee7a571"],["tags/尼姆博弈/index.html","710f36952ee5ceb9e53e0554b3d70146"],["tags/巴什博弈/index.html","2a2670ce2f04a0a13a4592159e954a13"],["tags/并查集/index.html","d7adc3699089dc83951861fe82903e21"],["tags/归并排序/index.html","29f61c39d1f4444c432330c043cb9058"],["tags/循环结/index.html","e6ab9932f6a363fced8becdbed0c0d7e"],["tags/微信/index.html","3587732aa06fdb8164ff5523e721924f"],["tags/快速幂/index.html","9e69fff323cecbf0cf0a623b9026060d"],["tags/思维/index.html","84b7288fded066cc48064da2f50cd9b8"],["tags/思维/page/2/index.html","bded02cf47ae1973ec2db3324152728b"],["tags/扩展欧几里得/index.html","e11835704b0aca84c68ae5762d195a1b"],["tags/拓扑排序/index.html","e9c319f1da202c41754ac43fec751e6d"],["tags/推公式/index.html","9637b3976eeb080d128bc686c4ff3607"],["tags/推公式/page/2/index.html","ee892f88235da839b21db2174a9f91be"],["tags/数根/index.html","4dffdf324b08c662aa7092a2d8df1292"],["tags/数组加倍/index.html","86bbf7ce1d4788aff937016713b95427"],["tags/数论/index.html","06b607bf91c8bb188182a417948558db"],["tags/斐波那契/index.html","da50838bbdd2a8f01b0d8c43d38e9227"],["tags/斯特林公式/index.html","4212da7a96d81525b30463c50fa73fe9"],["tags/斯特林数/index.html","5e04c25713aa2bf2d36e456942b9320e"],["tags/最小生成树/index.html","7f5f0108e9c79e08921f9c57440884e0"],["tags/构造/index.html","ef39af151c0b474ff9be2a839341a784"],["tags/枚举/index.html","2fedbba16a47bd96e56fc83099ebcf78"],["tags/树状数组/index.html","ef47e581547f61173ce290a030b003ed"],["tags/模拟/index.html","e23355a8289c2eccce72930b903c324c"],["tags/欧拉公式/index.html","9af0d42978b6be22f76c6bf05f489288"],["tags/欧拉函数/index.html","0dad8f2de71ab2e2baf15f15f70a688d"],["tags/欧拉路径/index.html","996a1d8b571aeadc9f7f20bb2397dfed"],["tags/海伦公式/index.html","f9629dab9deb04b8687bbd1acaa4209a"],["tags/生日悖论/index.html","43039c88f43caf7e2c6cc62ca2ae1e7a"],["tags/矩阵快速幂/index.html","8caec23338cca16a0d4ca327852e48b3"],["tags/离散化/index.html","32fbac3cfca077af05c7252e63b2ceb3"],["tags/米勒罗宾/index.html","0c4fc83f0ad1d851373a95256e2e0078"],["tags/约瑟夫环/index.html","87c447f2b4ac54cb33d5c2212a0a29e1"],["tags/线性基/index.html","c8be505319968b214969e95ba85e8b71"],["tags/线段树/index.html","d8c57d04cf6bf8e6802d506fa78b09cc"],["tags/组合数/index.html","d4e76fa7682b7e2d5bf3af7f73051387"],["tags/组合游戏/index.html","3d62668bde8cde44cde1b78c74b9b6f2"],["tags/背包/index.html","7ecce64e0a40b2a7d95da1da54dec6c6"],["tags/莫比乌斯函数/index.html","8c282cc804a7cc149007bdade202c8f1"],["tags/计算几何/index.html","38f00e62730b585a9540c1dda7e9a99d"],["tags/贪心/index.html","fe11c9d3e63db71b1c0299b58982bc62"],["tags/贪心/page/2/index.html","b160bf930802a2f7926e00fcd1c722dd"],["tags/贪心/page/3/index.html","287b94419684684d573131a730f52192"],["tags/逆元/index.html","1b18dcb683adbd723a8f04f43bdbc292"],["tags/阶/index.html","d818ab882b6eacb0431d26363cc51031"],["tags/鸽巢原理/index.html","78e1586af2b668048c9d4705ddf7bc68"],["tags/黄金分割数/index.html","43593e59bd29d7df96e4b3063c449728"]];
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







