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

var precacheConfig = [["2018/08/11/hello-world/index.html","05a900a01025a803de33e2b6e2aa7be4"],["2018/08/14/1995 三子棋  /index.html","a8df55de9bf59986655dc30820817027"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","153681d163f0f5859075ccfcd3f50b63"],["2018/08/15/2006 飞行员配对/index.html","3db6e1e6c90cd6f483ad7617840601ff"],["2018/08/15/D.Tea/index.html","dc4468eca56dba9141368ddc32702662"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","a04238d769a0d0fbfb463a992d08563c"],["2018/08/16/1459 迷宫游戏/index.html","3cadf8e817bc412a5729eba05e314365"],["2018/08/17/1264 线段相交/index.html","ba6da9a1347d29dc06849bb944462ca4"],["2018/08/17/1265 四点共面/index.html","ba39a9b69405342b98743c5141721772"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","d85f53cd715d5ee7b83cfb2262fcc253"],["2018/08/17/1384 全排列/index.html","61a376a256ebd4ed566c32d531ca875e"],["2018/08/18/1240 莫比乌斯函数/index.html","095a7208f3bce763d1a09028929a83e5"],["2018/08/18/1256 乘法逆元/index.html","ef330c3de08d0c47f7efb2e1227f9da1"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","de9d6d9aa0ccd990e30522c04b96c4f8"],["2018/08/18/Teemo's bad day（并查集）/index.html","9957c6cd947a1eb116036f34acdc0dcb"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","bcdb3eb8f40cad8d1d2025820e6cb454"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","40fe0a430cbc0a01b9983460dc189004"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","ecc46585e52066a9921d73c42ab42aad"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","e328ee1bed00fa0ccd3d97bc64d94014"],["2018/08/18/hdu 1856 More is better/index.html","79bdc4d74cd32128b1a197d3903db80f"],["2018/08/18/poj 1182 食物链（并查集）/index.html","b2da64e6a1c7f4cbd7e7bf95c4c1e770"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","25e4b4053e8205019c165e7e2d987d24"],["2018/08/19/Minimum Cut（读题。。）/index.html","54508c2cbb601e38c8832f312e8c9740"],["2018/08/19/Ponds（拓扑排序）/index.html","bdeac442a2fd60469b4f5f785104f107"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","b03ecd2c9405d12e7a38dc3f31f8914a"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","75012b295de5935040192695bf680db5"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","c173647e6b5ec7192f106723eb4e808b"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","9df4205b38dae7a2a5a53269cab3531b"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","cac064dc5f0c954d43c0e18eed4d3d42"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","733360b19008452fce03ec0474e9a0c7"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","8bcdda1d6c997871521d0e5f8198e3e4"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","b54d6351a455c02a01da365c78f11295"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","d214731955b58c5e1d2e2724a78fe4d3"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","db262f3c59755dacfc942d9e8fd95f97"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","02f9ab42f31c88e72ec48a71bfadd4f4"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","5c6dfbe8ad098efac1e904112a7ddb5e"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","3dadd32c003a85c4e3ff9d127e081d25"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","295240c40089cd48a87863276e0ad3f4"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","66b9b45b78070a5c3f4265f924dc0733"],["2018/08/20/Pawns（博弈，思维）/index.html","efb7d6708226d9e799c0797a5169f95e"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","cebff420e017ce9acbf9153f0d74b4ac"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","9290f6aa990bfeb8c7510dd386dc9bef"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","353e3df17562b5af6266efe0d621ff27"],["2018/08/20/hdu 1564 Play a game/index.html","b2dc75cf51bc184d6a7ae4140811c118"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","e37272865bcdee823340e7db5a428991"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","10a37a42800db8b248315881525e5dee"],["2018/08/20/麻婆豆腐（思维）/index.html","67cad87a64b6ce4bfa5cba52cd2c3611"],["2018/08/21/1212 无向图最小生成树/index.html","a74f98c69ab759cd5c95fdce4d7ff3a4"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","28a0ba45300fe5187465838b16f7e644"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","3236fd5cd225cbe40d2d756b41f5b50c"],["2018/08/22/1079 中国剩余定理/index.html","17f17de4ff846a9595023432d8e03055"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","df5c54edc77f36586eeed461b57c39de"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","5c1e82a1b3a4a6a3938b51751364e42e"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","94e29e132d26ff27d7db7036b9156c56"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","0525530da95fe1cb8849d60d5b7d70f5"],["2018/08/23/1136 欧拉函数/index.html","275e969a5873f7e13e30632f247014ad"],["2018/08/23/1137 矩阵乘法/index.html","3801c3a2ed85fdaf513a7b0c642c5869"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","c5f7edcb705a981759048b3eedf5a1fb"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","dcf74cf73395a6073737964d6fdd25f3"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","afa58c6a662f2324343f3e2e3242b029"],["2018/08/29/hexo4/index.html","03c22f35b311ccb7af71550b75c37405"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","9589bef639c0b928c3de96205ad1ffa8"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","c918ac3de20d391cdac22accea91e150"],["2018/08/31/A. Too Rich/index.html","090e10aaec206f010f4799aa329034e8"],["2018/09/04/C.Catalan Square/index.html","6ca192d6ddbafce09f99efe7918782c0"],["2018/09/04/hdu1002/index.html","ec332af053730510426a541dcaba2cd9"],["2018/09/04/hdu1042/index.html","ae743f342e58931e5fcaf05c5543adf9"],["2018/09/04/hdu1047/index.html","4b8796e17c6f886161400394a7b4ec34"],["2018/09/04/hdu1715/index.html","3f2772bbbae08c29d98c2eadf74d66e5"],["2018/09/05/hdu1063/index.html","913c36cf5635ff226bdc04477027e517"],["2018/09/05/hdu1250/index.html","751aeb7ab2dfbaea001910d2fe007b45"],["2018/09/05/hdu1316/index.html","caf747360ee56dccb420929a3a94cc2e"],["2018/09/05/hdu1753/index.html","421901eb30adb1606beb3e37844ef8fa"],["2018/09/05/java大整数题集/index.html","581be852edd7dda78972f1c828793a32"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","c098b3ab30b1a0d732095335afdf5bec"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","4f72d0a66224ff2b4d49ff371d0cdb5e"],["2018/09/06/hdu2054/index.html","f740fea51adf970ce68a493c69ce060a"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","c85096041097dc541c8eed2195b7b97b"],["2018/09/07/hdu1212/index.html","d5dc3738740bf80c62709dd1b23e73b2"],["2018/09/07/hdu5050/index.html","57cab6afa79da52913d6e70cc6ba22ac"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","73fc59b2f5bcb7d0d298695d55a70c79"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","0a3e4380a6445f66ea3fc05c2d37e9a4"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","6e89627e30f71acc7913cf5254d425e7"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","f0606166e6071635627a69e7b25d6cfb"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","dd264991949d6243eddc9ec92368b409"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","d52fd57f32f26c95ab11f059bcc8c1fc"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","c3b80a7e911f5fc2b80164626f438078"],["2018/09/13/Teemo's formula（推公式）/index.html","8195a5798c92d888b5dec4342878d189"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","5d6d560abdb2f6e3d571b82e12d40255"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","8f2d28a3231221b67481ce9983c267b7"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","d0060a9fe6aa9b29e5485b6b7fab2a83"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","64937fb6a81f39fdd0a42cbf0f01789a"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","a58a423b756c352069ed2b7492724186"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","0470b77337ec62b18fc8564147c56946"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","085baaafb844baa0c1a5fba4cd4fc4db"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","d331a6d0720d511e3ed295c85be8f28a"],["2018/09/16/1118 机器人走方格（组合数）/index.html","3c632be551b102cab16cff12df68ffe2"],["2018/09/16/1134 最长递增子序列（dp）/index.html","b9444e3c885ee417d6975f5495e6c2c5"],["2018/09/16/1135 原根（原根性质）/index.html","835f245466253272d2f39455993ad602"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","0d34a0e3c66115b26c0cce56ff6ad5fd"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","2a4336d893894420b98a6d73a7550816"],["2018/09/17/1073 约瑟夫环（递推）/index.html","4475e960c68a0069a9bef9f5f6d888b1"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","6c67e1e3c1d56b47a0a3993b02242cf9"],["2018/09/17/1085 背包问题（01背包）/index.html","3902d7459b7e56c85d8ef4b7347fd1f0"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","d1c8dd5d2388704ae10b0ac3a5b02db7"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","96fae37471c4cf3892f3e857bdd615db"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","34df35edcd96908522218c91c73f3311"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","eb3376f528fdf7d783054bb7bcca4f5a"],["2018/09/18/1027 大数乘法（java大数）/index.html","c904e4963035429bfed60743bf7f2fb0"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","e0e6a7b3a116dc0c972f1e64d078c485"],["2018/09/18/1049 最大子段和（dp）/index.html","67739d410e5797bccab78314ad63c820"],["2018/09/18/1057 N的阶乘（java大数）/index.html","9181964d06cf609c1bffbe1f12120fbb"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","41d519557b0258cd318cad136a32a40b"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","e7ea0c13b68a3377f509e80cf87745de"],["2018/09/18/1072 威佐夫游戏 /index.html","e40c25056524bd74c65e8e3cad5de088"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","9c06417ea8f2d983902bab0f2b113ee4"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","b5c3dde5412502aaf5dd88103f5890a5"],["2018/09/19/1000 A + B/index.html","79040bb9845bccb9a4f2d45942b603b6"],["2018/09/19/1005 大数加法/index.html","70d46d69bf8080f0b9686c5adadac229"],["2018/09/19/1008 N的阶乘 mod P /index.html","c16a1473cde539e9ab9e4db757f59c8c"],["2018/09/19/1011 最大公约数GCD /index.html","a396bdd32d72a3e5d9953d7a50657482"],["2018/09/19/1012 最小公倍数LCM/index.html","9c88c26b8678841bf57e5bf4ee00f93b"],["2018/09/19/1018 排序/index.html","f01fe7b019114d2700648a1bc25f259e"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","896ced1c4df7d64a9aa35ec9cb36f9a0"],["2018/09/19/2133 排队接水（贪心）/index.html","4072503446c9db50edc55009382fe9fc"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","4fff14bfaa596ffcb0634bb7d7207057"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","50948e3afca7c616095ef2d972af65c9"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","4dd270a7b47881012bfaa3b8bd7ed15b"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","3df2c50d22265daf78b7563cfd93b3a5"],["2018/09/20/51nod 1717 好数（找规律）/index.html","57ef4b15566440599ea446d7ae1ce649"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","6a3fec7b376dd060079c0415985437b3"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","acc789bd3db47da41c4c99d931b93260"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","89e0ae5914f2ce0c9b353b4150ef08f3"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","72eaf7e81bb9fe3685fff6ac2170abcd"],["2018/09/23/51nod 1791 合法括号子段/index.html","9f05849df93fdff1bea120457ac2ff49"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","96eb808e27fa19fcb77dbf4ee9b7941f"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","13f20a0533aa6385c9e595bf0e7d889b"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","8f57d7488b8f5dce40bc07db0330314f"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","64e0f9ffac0899355b75385ad6a1a065"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","c13445349f01da869bd3da46017a1397"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","0dbdd5b97cf71298398098572f02b388"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","f84796f8f95317f8ae6b9f0a638b0863"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","b5c7a2df65bb4fdb9c9e7b46288a1feb"],["2018/09/29/51nod 1015 水仙花数/index.html","cf5a348e0a14e5e3d3d017edebd27e46"],["2018/09/29/51nod 1080 两个数的平方和/index.html","4824ec33037c3d8e2c8bf3d83947da43"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","7a35b03d1adbc24ebfff3ed74830ea84"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","8e8c7b0a1f9854e3d9047127d68747e2"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","dac659911589bc6cd651dedc0fbeb1f1"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","22370e9055e89f709f12b4425f2d01d6"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","07e07c4f4f2f7a05150c3a66f9e697c4"],["2018/09/29/51nod 1182 完美字符串/index.html","55a7eb925ed25f9735d1ebf448a614f6"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","466cea99ad51e893ea18a8231a805a82"],["2018/09/29/51nod 1283 最小周长/index.html","c76a889ae0e816aca39e79df109083e8"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","e68a3605a5d50dd21444a3d3181907d3"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","8323e5703bd787728835fb033d459d77"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","65c5fbd74363da9817d37a5fa35f5a38"],["2018/09/29/51nod 1344 走格子/index.html","26808d3e9aba9d8268a293d04e68c505"],["2018/09/29/51nod 1347 旋转字符串/index.html","c54f1520fe6cc828765db7c28ac57c12"],["2018/09/29/51nod 1381 硬币游戏  /index.html","d1f56a94110f0363c7934b347e404850"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","4960ed75faa991c089745b5cb53a1f7b"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","7118f3ec8174a0e446128c2bd092db01"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","2385d9b10fad04028c242a9661768e02"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","eeda657a2a43d4ed2e38d7ff14fd4564"],["2018/10/01/51nod 1596 搬货物/index.html","dbde8c923ca4c0bf229a5e7ee3b9b1e3"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","4c84fcba0709ed6f069567b2cc1264d8"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","2eb0313485d76d89be41ffad4bb339e0"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","fc7c8fe1d754f5256fc29dc4db430c34"],["2018/10/02/51nod 1521 一维战舰/index.html","a94de030f9cf8bad09b9fc19aaa0092d"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","bb375af135ac6a26f09ac5edf247fa51"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","3b0a11859dd090cfe19758694b423925"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","3d5c4c198c3b550a9138579f5abb5cd6"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","0a83c52c77730e06dc366421543dd637"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","154f0090b2898139b5ebbb1fb7274c92"],["2018/10/03/B. Pocket Cube（模拟）/index.html","61791850856596b0b087f33540c27ccf"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","208155eb044625a6404673f7f0f0584d"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","509abc25ad85ae7672d88526225414b3"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","9391d28646358c7612eb7b32aa9a4e9f"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","669a7637c8c2e545b298d2c5bfaf7f95"],["2018/10/05/51nod 1138 连续整数的和/index.html","daed964cdea56237f28debf46231be53"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","9fa36b6eccfc0e107af3b66259026ae4"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","0d7d06c17c03194b70e0d742cdea67eb"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","1442fc30ec8b507a7e869393f9e559d0"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","e90c2860eac297d5b4ffdfb4edaaac09"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","2ddc7940965cb909a247fc74f51c7e81"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","c8a295f0860f379a46dd9914efe95215"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","1efaa675a8a35c11f55c7293a375e103"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","a6a044ff005b5fcf266ebf4826278569"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","0b8bda60e79b3f8b436461a0afefe7b9"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","4f05b419f0179889fe33687e6dc0eb88"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","70c0e5074b854dd6ab92175d42b3984f"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","824706331c691edc104d4c1fda10d01c"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","175558d7ea013a6ddca7549d81150a51"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","5d483b001cfc6919ee9b407a2ecddee1"],["2018/10/10/ural 1073 Square Country/index.html","d0cfa55c024f63cb826f3a6ae53ffced"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","54e5290635cf371f09b9948206733820"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","21090f3704e0b1c9afcaeb013ce49259"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","5860ba520c363ad85d2c272cf6b2e401"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","b62706271ba18f01b0945378da0194ab"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","ff6e393a0e2df38d65c1f9556e1039ba"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","b02733a082576f69d1ef4174ebe219d8"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","3200479e8b8513f88964bb153f8dddb0"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","8b78d96f4908dea423914acfeaed04d3"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","c2a63adc04d3dab1d0efd03a19f8d63a"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","4da4ba18bd8cf88eca391dffb235ca71"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","6ad6ab6368cf8627b47c094c338c96c5"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","a44ac1fc806c2035ebdc1e9d1d22e661"],["404/index.html","e2cc2408b2f7860c89e1872de491b301"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","cdedfc234822b6d233e9552505deee86"],["archives/2018/08/page/2/index.html","4c50073ede84d847bd2bbbadaf1b448c"],["archives/2018/08/page/3/index.html","38c0b640b23c17705b51bc247a70d267"],["archives/2018/08/page/4/index.html","611e73cde3080b6106c229ced002c494"],["archives/2018/08/page/5/index.html","718ef41ad8e94a3e09bf5630bcdebda8"],["archives/2018/08/page/6/index.html","c80fb3693b9803c6b64042e4395bb0cd"],["archives/2018/08/page/7/index.html","0ab800e42a549eb77e3757265bb538c0"],["archives/2018/09/index.html","a60be763cde4a42f82fa0404d6933ea2"],["archives/2018/09/page/10/index.html","d4788d02b4ea0c6ce51fed02db83c8ab"],["archives/2018/09/page/2/index.html","24c2683d118b7991f6b809abd05947ee"],["archives/2018/09/page/3/index.html","fc394b2b2e2203b764816949bcd395d3"],["archives/2018/09/page/4/index.html","06c95bbd9d3effb861d77726dada2694"],["archives/2018/09/page/5/index.html","79eff7e70e9cc3a36eb2e10d4fc0c5e9"],["archives/2018/09/page/6/index.html","7dbb8cffdc68d1bfcea19fde15f04167"],["archives/2018/09/page/7/index.html","28b3e0e31d77a50beef48916beaa2a12"],["archives/2018/09/page/8/index.html","ced1dce7484c1869e912420c22cf5dcb"],["archives/2018/09/page/9/index.html","ddb6215db60de525a2a2e641b1e7dc49"],["archives/2018/10/index.html","fef52020393484426cddbf15f9287440"],["archives/2018/10/page/2/index.html","759b509a98f1fa7fe4d89d2ae9af1853"],["archives/2018/10/page/3/index.html","fe0367d766c6313faaaedbe596dced83"],["archives/2018/10/page/4/index.html","da99fe03be4aa0b294ff62617290d838"],["archives/2018/10/page/5/index.html","849f3c86009019d8b09738630c327190"],["archives/2018/index.html","1927c6d8cce3ee04a39f29c59cdd7842"],["archives/2018/page/10/index.html","0dd7322e5f73ce0f6f45ed0e0f3d09f4"],["archives/2018/page/11/index.html","be487b1b299719e848af0842ef83a413"],["archives/2018/page/12/index.html","4f8461668d80e527157028a30f87722b"],["archives/2018/page/13/index.html","05b8e55d89a4058d9c3eb56bc5a6d138"],["archives/2018/page/14/index.html","c65413c84043e74fca4b78a94b294b3c"],["archives/2018/page/15/index.html","2a4105442ed6f6f87142448a22f8ff78"],["archives/2018/page/16/index.html","d7bc6493ab813ebf4b6281336244c1c7"],["archives/2018/page/17/index.html","3dd9105b712f105b62469f9a20345182"],["archives/2018/page/18/index.html","761a5ecb54239a568f43ec04d57b6910"],["archives/2018/page/19/index.html","ce84898a19cdb2203ffaabb9f426de8a"],["archives/2018/page/2/index.html","a5dbc1cb808027118a0a9fe7cba6d62d"],["archives/2018/page/20/index.html","34b432622238f342d68da8de2b8a8fab"],["archives/2018/page/21/index.html","a7ff0afc0eed402f04122d938648a26b"],["archives/2018/page/3/index.html","4927c91bb067d38ea3184c3343a30f9c"],["archives/2018/page/4/index.html","4913627f610815c0c271e07115adf0b4"],["archives/2018/page/5/index.html","6271625ce44c59679d3d46d0316542b0"],["archives/2018/page/6/index.html","eea2ef6fcb19e0cf03f282a2bc92b912"],["archives/2018/page/7/index.html","3d8d62d5d641066c8f2669ff3ef81cc7"],["archives/2018/page/8/index.html","a92c8681e18bf140d66220b57c06492c"],["archives/2018/page/9/index.html","008dbfc806e177bc5a3e9c2518c05ed0"],["archives/index.html","19cb19fa28315e7fb0f2b0933e89d734"],["archives/page/10/index.html","b0c5a008a7659df9b7b719f6ad495c89"],["archives/page/11/index.html","55d04485c2fd17f52ca52ef0deca6ddc"],["archives/page/12/index.html","9c466b80beba31f7688471afa0ea3b3b"],["archives/page/13/index.html","9d8a31aa7114916d427a1019a343f568"],["archives/page/14/index.html","4cf54bb3ddbb1cf5463287b57bee606f"],["archives/page/15/index.html","2727112b8bc962e9ef57e81c324de831"],["archives/page/16/index.html","9c2aa5a90e55efd7305e4ac0e3187adc"],["archives/page/17/index.html","ed1927f8b482bbbfe790f17883885282"],["archives/page/18/index.html","4e7465291aac31ce3a5b546ec3dd4348"],["archives/page/19/index.html","38b94dec02709b19278e1144c74a7b29"],["archives/page/2/index.html","2f985630252a3c34869dd528330867d1"],["archives/page/20/index.html","229b5c6b782a38604f07cce5841cee0f"],["archives/page/21/index.html","f9df4cdb877ae489ea8f9487fa63b3c9"],["archives/page/3/index.html","37e324ebd0fb053f8cd21a3bea002b0e"],["archives/page/4/index.html","f724aa7dca05ade96825c9953ce242e4"],["archives/page/5/index.html","4cb570a0e74c1c329a8b2a3b641823c8"],["archives/page/6/index.html","1c3997cebe1e66c4c22ee25f67b239df"],["archives/page/7/index.html","e6b435db1af5d228b8472d2e9514eb0d"],["archives/page/8/index.html","aec80b6c8e222e58654c92e235421f44"],["archives/page/9/index.html","d6111b6a094fa6944ae3ef5a950f7d74"],["baidu_verify_DfMf5XqJUb.html","99fef430582075f352435ae460b56e77"],["categories/51nod基础题/index.html","0cc0d158f45b684bdbda2ff43920496f"],["categories/51nod基础题/page/2/index.html","dc917c03d7252832b346c57693327ba6"],["categories/51nod基础题/page/3/index.html","a3e3bdec2414e7b693347f6aa53fbfaf"],["categories/51nod基础题/page/4/index.html","72771c76c0c5d72315b1ee7cf1b48f7f"],["categories/51nod基础题/page/5/index.html","a522d7d56be5c48f704ccf14b9137470"],["categories/dp/index.html","37b6559b6c621040dc0c5d59c0eccffe"],["categories/dp/page/2/index.html","4cd0a321139d875eae2fd81504da8d14"],["categories/hexo/index.html","257973a966f3662c80bb8748595b3491"],["categories/index.html","699b72cb69bc705814d0e31d6537504b"],["categories/java高精度/index.html","61c2a4886916b69db6f073d0e07a386e"],["categories/java高精度/page/2/index.html","c605692cc23cc230b6a7171c7aa2b6a6"],["categories/poi/index.html","65d8310b4317b11a15d656fbf98b8f0b"],["categories/二分/index.html","8bba3b125594835a433bc5b377e161df"],["categories/博弈论/index.html","509ea49b17262ef54835678bccf4c22c"],["categories/博弈论/page/2/index.html","bebab5043815d359f9b0d1bae07a5702"],["categories/图论/index.html","a86ef5a43675b09be69a07c6804015a4"],["categories/图论/page/2/index.html","52b60c89d1238eab5022c8441a561d53"],["categories/图论/page/3/index.html","95da96c84e795731f220c7a8462e6f61"],["categories/搜索/index.html","9543ae00c91e6ddc64ae21bdd817f0c0"],["categories/数论/index.html","85cd26e9ca3e31ee483a70755c01c235"],["categories/数论/page/2/index.html","a33337221d26d46506a41810b81647f9"],["categories/数论/page/3/index.html","2cb3e7b02747cec058e2c3ebd7b2e37c"],["categories/杂/index.html","8ded82f1aa33e82f0799f68400ab1b21"],["categories/杂/page/2/index.html","a7e25f2d82e997b9efe53e924c7fe242"],["categories/模拟/index.html","05779e9029a61b6e46156801cee21229"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","d66ee75b64da86e47468fe6ea37c78f5"],["categories/计算几何/index.html","607dad9fa17b2cab0f40c26893bebd69"],["categories/贪心/index.html","14b848655569e03b53cc2eb880f110e1"],["categories/贪心/page/2/index.html","2dd7067e9a58a20593d28285f348b718"],["css/main.css","a1dbcc058f9f9c3e01cf012a079605b1"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","0cdc3bfa235c3a781534f4d23487c5cf"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","88ed194651f5672dbad7a8f09ad771cf"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","dc63af1775cd797dc6cf44ea07356a2b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","bf5b5909fe8da0836f2ee0c7c31ce47c"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","4dbb1ef456c6e42b94ae4adddcf4fd5c"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","66f7c7b1a66436d71062d77baa3f5c88"],["page/11/index.html","8e4a27a621210fd3d5bcca444f7814d3"],["page/12/index.html","741a8c111e05cbb8b2cdc47d66b7e209"],["page/13/index.html","d04b633f2108f5cabf073f10b5e4fa4b"],["page/14/index.html","76966409796bf8193423ec9c22f8575d"],["page/15/index.html","3c1bfb2517b35449e77388452960075f"],["page/16/index.html","79ed5b804993612a5108969c03d43ceb"],["page/17/index.html","0a3cb72fee0c6e34572945d05b969acc"],["page/18/index.html","eabf266d8d57608edeb9740e50ca7dfd"],["page/19/index.html","1f37c7cc06abca436de678d821fe8a7a"],["page/2/index.html","242a0f826314bb502986aa212e00c0ab"],["page/20/index.html","40d20f47eb353ed6c3b60216af14a0df"],["page/21/index.html","f9cc48c91dda440ea08d84b9f513ad52"],["page/3/index.html","e3f59a887979ae1aceaad42d0024f026"],["page/4/index.html","e4d6d44b62dd84da988f471769627e79"],["page/5/index.html","51188c5981c37ec0415690103cdbdd88"],["page/6/index.html","2feda04e10016340027c6d47962814a4"],["page/7/index.html","37ab7cc230e4ba10416013c63a72ea5b"],["page/8/index.html","c7242e61cb4872aaa41b9537bf8b7301"],["page/9/index.html","0aa478fd22f2784c9826bf99af6e8ee7"],["tags/Floyd周期检测/index.html","fdf221672447bb4b776ac87046ea6e7e"],["tags/Manacher/index.html","e39c99f0aa4ee70eff0f0cea27d8671f"],["tags/Pollard-Rho算法/index.html","ba2207489f19feb0fe74bac451fcd54b"],["tags/api/index.html","d39c7e1f0c9b0a9e166a197de8f134fd"],["tags/cf/index.html","49277362a1fe9e5e562db36d29fc683f"],["tags/css/index.html","2783feb5c9d93eb1b99e80560157988a"],["tags/dfs/index.html","562257920df61a86ff9bdede2a363f3f"],["tags/dijkstra/index.html","8d64320bdb4ea420c202e30839c7de82"],["tags/dp/index.html","9762e22c597a6e9eef54804eea8ac331"],["tags/dp/page/2/index.html","dc8e89fd032eb5b3f0c99e7326d0fb37"],["tags/gcd/index.html","cd308c7f8191d43a83ee518bb41b4b0b"],["tags/hexo/index.html","5d0b21c21ead3938ac42df6821044365"],["tags/index.html","ee5542a0c7fd4a81d429fe64ef5e111f"],["tags/java高精度/index.html","aca732282d1c5e91cafb1cda08c95c96"],["tags/java高精度/page/2/index.html","11657f3edf3e1d3330259cbc273f6102"],["tags/java高精度/page/3/index.html","b2b34e15ea804bbcf48c5704ee34e158"],["tags/kruskal/index.html","4f2d76b2416aaf798e460110ef991fef"],["tags/lcs/index.html","09f1a0cdebc2068257979bfaec5e4d78"],["tags/leancloud/index.html","e873392ef5c55bfe478f364f2a0c7736"],["tags/live2d/index.html","ed06d44f23e8a935e749868664861954"],["tags/mac-OS/index.html","afecd973ae688fdaba8d02aae25984e5"],["tags/prim/index.html","615d0165a2e9815f660766f66626e255"],["tags/python/index.html","65bcd98e71a441905b090af07b3799cc"],["tags/revolvermaps/index.html","6b0cbebb73351d06e1addfab8e176b16"],["tags/rmq/index.html","57e83ee3f3ed3ec158ae231ec90f3f3e"],["tags/sg函数/index.html","70c608ddef9169ac03823d2075705a1e"],["tags/stl/index.html","45f7a091ae826bb48fa73b58aa4b9442"],["tags/三分/index.html","18079b3cdbeaf58ebbe6a2220152c206"],["tags/中国剩余定理/index.html","e60d7d385e49a97bfe15300f1799f8f9"],["tags/二分/index.html","3551d3b6753006090c66e2259273f8cc"],["tags/二分图/index.html","43e3859a471df542a431df8eea65a871"],["tags/全排列/index.html","7b07c094b7807c1a7b4404e9d4974f21"],["tags/分割平面/index.html","e3162d247e038e1b6692327ad0e67155"],["tags/分数规划/index.html","aa3b27a7bcfded44dcd64b4bebc0a1c1"],["tags/前缀和/index.html","13767360c38d06aedebbda19aea16460"],["tags/勒让德定理/index.html","e91920b6fb3da77d4eeb23a66d6468b2"],["tags/匈牙利算法/index.html","03aa969b045f7dac6f1c8e3521fda72e"],["tags/博弈论/index.html","b1292757ac8c87eca6ae85413a97f7a7"],["tags/卡特兰数/index.html","f92f2bfca82448db21d5f00cfbb70702"],["tags/卢卡斯定理/index.html","fb0692b77a3b473d9c26c0f99c888885"],["tags/原根/index.html","af8c4fc8fd4704e0c51c316875ce80b4"],["tags/四平方和定理/index.html","d9d33a6fdcf9d4683023e7cb14b61894"],["tags/埃筛素数/index.html","d6d4717c27705689e35c3b07211ea35c"],["tags/威佐夫博弈/index.html","08bd67faa47401f44c55e9c9d3fc23a7"],["tags/字符串/index.html","f39c98dee289fb48739f506cbbde07f8"],["tags/容斥/index.html","d8fb8d0560a67bde8e90e51082eee56c"],["tags/尼姆博弈/index.html","8e95d3594b4e18dde110bb7b92288750"],["tags/巴什博弈/index.html","8b77a385aaa21e9b6e01df7f49c71da1"],["tags/并查集/index.html","23c57caa24f9f4193ec85c31d56d9f41"],["tags/归并排序/index.html","6e23a8d7daacc55fc590ed2bbbebb5a6"],["tags/循环结/index.html","fd89bc053abf42e8d07f46780854bb1b"],["tags/微信/index.html","fa01786352387ca5ccf5cb0d46f96b22"],["tags/快速幂/index.html","b7a3b9b6540ee8bce49af19178850fd6"],["tags/思维/index.html","5ce0457eafa37a18ef686f2aa674dd5f"],["tags/思维/page/2/index.html","3d5c095f67a2328a9720d49224f4016c"],["tags/扩展欧几里得/index.html","312f1550cd072091c4092d21cf442b85"],["tags/拓扑排序/index.html","2d8911e8f5ea0d0767dba4ec454a09bf"],["tags/推公式/index.html","4ef7936b0a9b2db96d8b19673aa76946"],["tags/推公式/page/2/index.html","d928979b0747bad8e50b4ce08a063b60"],["tags/数根/index.html","a13e6c90e82a150251436391e29553ca"],["tags/数组加倍/index.html","2ba8bdd533c42744c4cf92e8af551d51"],["tags/数论/index.html","e0de55da4275eae5bf1d54b2fcaa68b0"],["tags/斐波那契/index.html","f12c5d4283a73eadf47ec4176b9ed4ae"],["tags/斯特林公式/index.html","b9e0fcc9bd2a1b344c90d66a729274f2"],["tags/斯特林数/index.html","931ade1aeba1db0be0dc66003b2e1211"],["tags/最小生成树/index.html","6379367e7899e6f3358ffdde683e2baf"],["tags/构造/index.html","75984526796b9861430e64f5e710b209"],["tags/枚举/index.html","6c126b81168c0cc98b2271f2bfd373af"],["tags/树状数组/index.html","532ea717b9eef3016bc05f72da0c158f"],["tags/模拟/index.html","096c6e47961e38c30d872ce25067b973"],["tags/欧拉公式/index.html","1c1c86f4a071ce968999650a0248acb0"],["tags/欧拉函数/index.html","018a0d3c8d0267b2fffcd66b20cd22c7"],["tags/欧拉路径/index.html","264906e811ea01ada43f24b5b04ded1f"],["tags/海伦公式/index.html","92a6caa9cc8ab2d2e4d1f6c043cbd82d"],["tags/生日悖论/index.html","7ee6ce2d95ac8da12b6befea392d041d"],["tags/矩阵快速幂/index.html","bc81f95ba416e239403f2d0d34ae10be"],["tags/离散化/index.html","e8cb880fa9c96f4fbbda7cded591f32c"],["tags/米勒罗宾/index.html","eb63b49b8dd3e8e810ac239a8a77b44b"],["tags/约瑟夫环/index.html","c71485f303f7161754a1ef3e44b894dd"],["tags/线性基/index.html","5094117224f53549b34fc18556606270"],["tags/线段树/index.html","0b616f12898fb1769e774fbdf534d8a3"],["tags/组合数/index.html","634284fda886e74d7460fd5cf49d7ebd"],["tags/组合游戏/index.html","e9a952ed8f3ee4695d6c15541246ef4b"],["tags/背包/index.html","9f1751ff812508a9f39f0b6232755b16"],["tags/莫比乌斯函数/index.html","dddd079077b7592488567aa8e3f1437d"],["tags/计算几何/index.html","43347a9fa4c2dea8d4976d01bf4116dc"],["tags/贪心/index.html","84c1d29996dd913fb4448e7cb199cad8"],["tags/贪心/page/2/index.html","9286fb9762e35a282ffbb371b78f7f0e"],["tags/贪心/page/3/index.html","f77fe80668db287f227aef6301f75cce"],["tags/逆元/index.html","7540b49fe370c99a0c015f83c15f0613"],["tags/阶/index.html","f23a2f8a434fad09b580b46040a82c8e"],["tags/鸽巢原理/index.html","3ed909af93bb91a0879957d4ff9b0b1b"],["tags/黄金分割数/index.html","9f16ad5b0ed197a5dca9a2c31f2a5a66"]];
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







