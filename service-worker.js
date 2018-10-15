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

var precacheConfig = [["2018/08/11/hello-world/index.html","d69cd257668c6e68bb391d4b4aad38d5"],["2018/08/14/1995 三子棋  /index.html","dc61c03f65dd56a21f11f6389c179275"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","73ae3d31a18e31a62c0dd086c39348ae"],["2018/08/15/2006 飞行员配对/index.html","cb9eb865dbc70de119f0226e11f45753"],["2018/08/15/D.Tea/index.html","ec20f058034aad2fd53cc00f1f808c11"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","6a3b0ac043cef52a89738960f5446cae"],["2018/08/16/1459 迷宫游戏/index.html","3d0239143869c3de6caf74a58e60f350"],["2018/08/17/1264 线段相交/index.html","43621371168294744cd109eb6ae1933d"],["2018/08/17/1265 四点共面/index.html","6e65c98d234c4e99cfd12369631e4f24"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","1612364571d24304a011462b7259ee0b"],["2018/08/17/1384 全排列/index.html","cc0c8f2ce5023cb26b4fb88d0ad0aa67"],["2018/08/18/1240 莫比乌斯函数/index.html","2a0a0073dca578d02186b37213c192f9"],["2018/08/18/1256 乘法逆元/index.html","c7ebb08eed723d3df46a1fada726ea81"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","9abc4655f4950219f539337ca82512ca"],["2018/08/18/Teemo's bad day（并查集）/index.html","bb710791d4e6f90fa3cb8ede0d2ae1a1"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","8fe53bfb9f568faca5ffda58cf9493e2"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","3e26f3a8902ac2850fd68693db5fcb02"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","18c0df0f293fb464c5009b6d16f1ce05"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","931c3a14147fe7781d2e56f5256c8cba"],["2018/08/18/hdu 1856 More is better/index.html","991431cb63f0ddd110a9e23383605594"],["2018/08/18/poj 1182 食物链（并查集）/index.html","6d52f908e89c12924672d5b5df0a7416"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","180f2dbd0defdeb322f1556f07505c1c"],["2018/08/19/Minimum Cut（读题。。）/index.html","836b2554329e4238eface68fd705bb1d"],["2018/08/19/Ponds（拓扑排序）/index.html","9d915346493895c9f123c4a2e6011fc2"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","66da3158b7a38c774e4a784345c7e98b"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","85a884fdda72de250460c7510f66b796"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","a419537e5149431bd192ffdf0cedb01f"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","bf31b3c9c2a306d3dc018f77eb6da655"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","57fa973d0ca615d89edcdbd728c915ab"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","ba4836ea102a5eeb5dda49af3066e6f8"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","4308bcafe00e261fc96ac857455670f1"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","ffd7b273523a5691634ed0037a78a254"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","8fe87b777fa814146e4113f84d257961"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","2aafba385f464a19e3945d03aa8d12f5"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","8d8eed2949abcd34fe7e6b254fa11816"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","d9e1434adb8254e0904b8889bc0cdab5"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","16452532567b1ceb3cc8de98dc668587"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","4d9fdd75731a8cb726c1e1ced84789b1"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","5b66250c6bee51926fb49d343b5ce89a"],["2018/08/20/Pawns（博弈，思维）/index.html","f603136650815a0e39e5db8338881fb5"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","23c7c730411eb4aeba766ecf3d8727e0"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","6476c96cc8de09202edbc6574ad7373a"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","8da9d7365a9ecbea415d1e9b26953829"],["2018/08/20/hdu 1564 Play a game/index.html","a8228c9c18ab747ad011ca3add0dee73"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","98e73c6483cea0ce46728f5864f4b8fe"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","36232ed64a5eabf4d94d957ddd8a01e6"],["2018/08/20/麻婆豆腐（思维）/index.html","b3c88410f5216f1eacd36b48d4282289"],["2018/08/21/1212 无向图最小生成树/index.html","8ba35cfecf2daaf98fb0b3708f7dbed2"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","60bbaae634f44510d7c4ad152bac7cd1"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","ff8bb3e90a6e67cda676ccebeb2dd822"],["2018/08/22/1079 中国剩余定理/index.html","f2718a45b8f763f22bcb362c48a83a1d"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","3dbfd900de658c3e3bc06d3be714e218"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","d9c2abe1d645491d93af9b1b6cd2cf9a"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","eb7f8d54d4786aae680b6fe342c38619"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","b43615235a0a620e8427fe0f064a6b0c"],["2018/08/23/1136 欧拉函数/index.html","92af449de4dcfdca087f70bac7e4fac6"],["2018/08/23/1137 矩阵乘法/index.html","aa381b8146423521d59c0c211b2c8fee"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","4c6c3945a523635654ab778091a054cf"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","ab19a52b5e78237566db58c8551942ea"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","dbc7ca1f6798ed4f210c09e3c5761d8f"],["2018/08/29/hexo4/index.html","2d18ee6bac7a94bb5bfc26a3d1246c28"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","afa04fa34b89d1e81c39be41b45ece0a"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","17edaefc65e868054c26edb7dffdd740"],["2018/08/31/A. Too Rich/index.html","d1dfce17c7766444051be98b8c0abc8f"],["2018/09/04/C.Catalan Square/index.html","b09dc7357da41af6123806c87055fd92"],["2018/09/04/hdu1002/index.html","c1e0ffe566834d283bbeb18baf9228d4"],["2018/09/04/hdu1042/index.html","b810aa4eccb600c67fd8639f2d30f5c2"],["2018/09/04/hdu1047/index.html","ae3f995e2a5db1bb0b82b4a22deb3759"],["2018/09/04/hdu1715/index.html","016ebb99bd3e945929fdd564a791cd5e"],["2018/09/05/hdu1063/index.html","a0d04d1621b96ac092bf68416d4e5269"],["2018/09/05/hdu1250/index.html","732958a3700f71fa6b6cb986377f9e7f"],["2018/09/05/hdu1316/index.html","a7977a1ac798e35cd25c71e08e30bd16"],["2018/09/05/hdu1753/index.html","2ac1a08cc3fc8e6891f4e4a9ac8047ba"],["2018/09/05/java大整数题集/index.html","35847c021eb5586c9763b5bd4e733bd9"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","935c35a2f023ddd8492dd1cabfb469a6"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","d591c9cae880a26e9a373dafd095f746"],["2018/09/06/hdu2054/index.html","55d743831d1da0b3d8b08e08b78050a9"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","cf7052602f8c8b1d6eeabce9f24a2f4e"],["2018/09/07/hdu1212/index.html","2ab2a50f7ac80d7b89e94b92c5cf1357"],["2018/09/07/hdu5050/index.html","dcd77431195b5ccf0839d325986ecb16"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","bac24798bb3a046cb4136a635e45d729"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","9b1a1b65a9e3a9d2b333589ec9b83066"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","49fa087c8c08a58a6dd83ae32bdb3cd3"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","72a99058b11cf72451d066e80437af2b"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","0a28f678b242fbbabce7ca2bc42c027d"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","7ed15da4f9bcc44214c91e1c325066d7"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","417e4039023e5667d157d6d0e15a18dc"],["2018/09/13/Teemo's formula（推公式）/index.html","05bb10351316b05e760894793cf7e710"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","a8e7e4e00134773da3d9ffb0f3d5b215"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","aa6b6b4d2b77fe5fc20fb0826bd170a5"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","636205ee8bf5004c94b493cebdbe35cf"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","6945205608601f61344d0d45a37a526e"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","f305aa61bd3bc69afe395d7513fc06d8"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","d20bd00e3c9a2ff0073c2a8450eb6def"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","7747e2af2de8f524b6d29717a9f059a8"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","3a96bed7683fe49a3ba5901242c32490"],["2018/09/16/1118 机器人走方格（组合数）/index.html","82200b584cb94c6eada26b6efd318e57"],["2018/09/16/1134 最长递增子序列（dp）/index.html","0c5a327c5a45601b5128e8a3aa0392a7"],["2018/09/16/1135 原根（原根性质）/index.html","6b9ec4cdadcd7a1bb634ebc541c16201"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","8dfde72feee65c3296094d7e464cd7c2"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","4cb1e190709b4e943ec5f61f5c90bef0"],["2018/09/17/1073 约瑟夫环（递推）/index.html","00225267298cebef715053c5078a900d"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","f314d5acab13463d1b82128065092e9e"],["2018/09/17/1085 背包问题（01背包）/index.html","3b453bf2e4e4732f27a1a0ca33be0eb4"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","9fe43817b3bc117ed1933de9c16829bc"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","d2d2c1ad2cadfd157f8fa79019c51cbd"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","c96f25f7106e91a2cf3240e1921c0f50"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","104bf31d6e534c4f446d2ad6fd312820"],["2018/09/18/1027 大数乘法（java大数）/index.html","b5394292613921c9c222b7f5429015e7"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","7cb3159ecc866151ff35bdaef4da8bc2"],["2018/09/18/1049 最大子段和（dp）/index.html","81018ee921c36ac8b32b3cca55592b35"],["2018/09/18/1057 N的阶乘（java大数）/index.html","d9e227a9784bd13964b9d0739d175b85"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","85f3b99a9870796ff43a9db8cc2a7f44"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","6dd4cee5375b407d0541c874cb6f6d38"],["2018/09/18/1072 威佐夫游戏 /index.html","e497e667329965dcb65dfdc45bd36934"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","b2969edee3c55d0001f1ddb028dee8c0"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","cf436ed17bc1407885d550de49281b84"],["2018/09/19/1000 A + B/index.html","5bb8b5aac2e518150a4ebee0ae9150b4"],["2018/09/19/1005 大数加法/index.html","49c1ac6052c5fdfecc56b8a9cfffe076"],["2018/09/19/1008 N的阶乘 mod P /index.html","5e7add1f67ea89474310c2315980bf4d"],["2018/09/19/1011 最大公约数GCD /index.html","fb6f58a4d75e99ddb8f42cc6cd24c739"],["2018/09/19/1012 最小公倍数LCM/index.html","73a024e1797638bfda01009c0b7b7b03"],["2018/09/19/1018 排序/index.html","49a88e9d4311f51bcf17632f80f7032e"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","889c2b6ffa6c7fc05d1f1608c87a4b6c"],["2018/09/19/2133 排队接水（贪心）/index.html","af76e3b10a5287acfd31dc96258ed3f0"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","07812ccbfe592e89aa291249e55aed3b"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","bc051fe23f46ffb2d6856888edd4fafa"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","f42685f73e22b118180c47132faf4352"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","07d30d11b80774ae504727997cdcff1f"],["2018/09/20/51nod 1717 好数（找规律）/index.html","449cba526f553c8e2a30223cb21c599a"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","516b35e75dd8443f5724d73838dac8bb"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","862d6b6c994facd85e62d903e94a6fee"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","cf7f845439a31f45a7e5cb5323af6ddf"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","1b24c0d12a4efd56b946f8f39f96e179"],["2018/09/23/51nod 1791 合法括号子段/index.html","fea5af352cb064d3dbff73af3f489bfd"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","8a73740c3b495c73e0b7fbb3e425b417"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","510d7c679556c5b9921e991b5bebb021"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","c62bdaf4bae2a9c85bd297c726cc09a3"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","4548ce64a6e04aec7398332283284b01"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","535153a7d04f2d9689653b001b3c183e"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","76cfa6fedacb0975ad6420baff0c7951"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","570789dd1603745b1cdb4c5e913fb681"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","bf3816c5db70bc181039b490e142ad9f"],["2018/09/29/51nod 1015 水仙花数/index.html","12c371653c0b793c5bd7f78ed7c648c1"],["2018/09/29/51nod 1080 两个数的平方和/index.html","fdf5a01d26e70f2668e9b717cb68d1f5"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","264a9bab298046103d654b36c0a3d4f1"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","20c6f23a32d46e59b5e07072a84d7202"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","4c6aeb300ae81f966f8ecd313c54c78d"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","36ddb3dfa9da8ee54628c329e0e7bde5"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","a8fff0b27b0bd94ac10e291579887320"],["2018/09/29/51nod 1182 完美字符串/index.html","c5666bcf3f1d8ac48dd666d49c58ae48"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","7013803b60991d37fe7356bd6f0d7293"],["2018/09/29/51nod 1283 最小周长/index.html","fc958cf615728e99eeb6e7a68188a129"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","9a2828fec745332aa448e8573d13fc86"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","f26c7d122acf935aecb0b18d4c3d685a"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","1a246a733af16313a7c285ee90079afb"],["2018/09/29/51nod 1344 走格子/index.html","e74502dd753285ac766dbcd3a2754d14"],["2018/09/29/51nod 1347 旋转字符串/index.html","5ec5e0d3f1d02daef890fe291bd670af"],["2018/09/29/51nod 1381 硬币游戏  /index.html","ae9aa3948f641112e3335a99d7fce6ed"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","b029eafc687c32acf7001f6c0a0ba530"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","fc26716c377ae6d2d3727cadd8961cd9"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","be9ee9a47eea3d4f0e2975002137c803"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","77bf223fc5f7c07e4016b06f37aae9ab"],["2018/10/01/51nod 1596 搬货物/index.html","7e07b52f64c67aed61bb6f1a8ed5b412"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","2d536fa4b42d28854d8179c273c96a49"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","17b5e4e938e28842301f837654bc040d"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","62dc2e946af919ac622ec9f4cecfe321"],["2018/10/02/51nod 1521 一维战舰/index.html","9edfd5f96a16a4a7b802509c2efb1085"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","a44a09d7b1e60a5168b8bc95d37a2026"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","53755140647bc0c64be52df557a7de96"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","a423f5a1ab849533f9b62370597ac0b5"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","898b2fdeda687b41399d01e40371fc37"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","f8cdb83a24b3bb8d8c478fbc1af74bcd"],["2018/10/03/B. Pocket Cube（模拟）/index.html","726702afb0c63f7b9a026ba8f00adcc8"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","d9df5d5e16a0430a14c1aefa37095797"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","f6e61dc9e0541c62825324c9bf3ec9a8"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","221842369a4ac59769cffb8478bfde8b"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","c87c01cbae596523ae46106e635e1c73"],["2018/10/05/51nod 1138 连续整数的和/index.html","66eab5eb5bc4b105059f5e1a36a0ee45"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","5e82855fc34fc041b496b6a6d171f878"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","611c5b4d8410ce78669de7100b659915"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","bef58940a0de5ba1792c7cf4906a8697"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","020c871c847a31833e4a987c1254b25b"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","6f64282eef6df5cf58805fe6f225f40d"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","486f6110c0a94aea3cc8a139c2391537"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","d94d1e68dd149cd4cc9d45787013dcbc"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","49f22f0d1edfc2f4a4119e369d6f83e8"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","cfd8aa7c9e8f44b867abcbaef292682d"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","831d12459c869fdae627bedcef19195e"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","576a567ff9f9ffbdabe2ad4850504d2f"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","ecc293cc3deee5f364752e7ccae59d75"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","4e2cb4c41786e28cf1b99583776b977a"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","87cdecaa7f1a6e8ecdf3c71ef4064ed4"],["2018/10/10/ural 1073 Square Country/index.html","ef9e4a377b92953a00b750a4a7d9768b"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","02293f671fac085991a18964a6a808be"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","34c59c80b0382241d7a67431394f866a"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","7f2af78aacf4989f26cefb6b8493d72d"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","2ba7340d851d68679c06b4113e744cdc"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","0253b7dd24d425e736e900d07cef8e2d"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","82721c987cc8273261a8f985816fc82e"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","26b101e51d4c9f8a447af609f8e65516"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","188ab63c499c51f5737144eb3b7f6d93"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","9599555b78584cf4e96332fb12d51489"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","999d07c669ed50ba93184463338463dd"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","c2e3830ad42b1b017e0e49d41c39a034"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","b364f1d525369fdb09462209fc4eb515"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","f738d1487ac213b17a9f52e4a6673a53"],["2018/10/13/51nod 1315 合法整数集/index.html","19dd664d24cec1824a9aed6c3620b7f1"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","58811063488bea4b36e10961bc0cd419"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","2f1e573f26ad7633c6f4b5c95fd4ef53"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","b1f76fb2c971282328208d619124e5e2"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","bef2e3accdd814d9cdb6adc312ea4a42"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","b19035690378f9b38fa2bd6bf1baec1e"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","feb5f014c7d164e126869e5a94152139"],["404/index.html","371ef612b9b43d5906165368a1a6405a"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","9de91701f511a286554c2de286b331a0"],["archives/2018/08/page/2/index.html","e98a689dd04547acaf727a5107847012"],["archives/2018/08/page/3/index.html","d6c30ad8920646a314800425f81888b8"],["archives/2018/08/page/4/index.html","02d149826657ea0ab7605accb737bf5b"],["archives/2018/08/page/5/index.html","94eb92e08319476f1a0c7d4344887d11"],["archives/2018/08/page/6/index.html","1a4707d00f088491f2e2c2b0cf88d60a"],["archives/2018/08/page/7/index.html","0d9f9bc9ad2695dc119529fa0eae2fb8"],["archives/2018/09/index.html","d7fa42bbe7788ab74d7849bd0b7bb362"],["archives/2018/09/page/10/index.html","d24acf60744f938eedc42db645fc945d"],["archives/2018/09/page/2/index.html","1fc2d2eb3f1af2e7bdc2bd9a9b5cb8bc"],["archives/2018/09/page/3/index.html","634a791e2c37ffe1abed7b284faf2131"],["archives/2018/09/page/4/index.html","72b17894abb30e80e958d7f04160c54b"],["archives/2018/09/page/5/index.html","fe5e22f3700ef32c76df6abd7a1f7930"],["archives/2018/09/page/6/index.html","b522d40d36bd8d5f29256b0cef4d9004"],["archives/2018/09/page/7/index.html","b5e9489b3fbba47895ac339487a47332"],["archives/2018/09/page/8/index.html","fc5c8ccc839927e62aacf1d30fd78c3d"],["archives/2018/09/page/9/index.html","27051723dd3cbbe6b3e692cd2077ed1c"],["archives/2018/10/index.html","04d172526d844fbd742e2e69cbf50700"],["archives/2018/10/page/2/index.html","2cd13ef3909fa857bd7744db01a22266"],["archives/2018/10/page/3/index.html","a88e4a3008c7800a5730f2637de97014"],["archives/2018/10/page/4/index.html","630bde4ede0ecd8773091c4ca6185855"],["archives/2018/10/page/5/index.html","900c9c12f68d17037c7a88abb38daca5"],["archives/2018/10/page/6/index.html","d9a2648df66c0039fc64e6a217487a1a"],["archives/2018/index.html","08c374c0cdcb3ce684acdc0573e38670"],["archives/2018/page/10/index.html","998a9525cfaf78c0dcca49ee7b008ea8"],["archives/2018/page/11/index.html","a7ae5116001505038d37b06296a8221d"],["archives/2018/page/12/index.html","9439f12b8d6fbfcbdc86fdf6c8f9515c"],["archives/2018/page/13/index.html","a4bec65ccce5a06fd2ac5c9308c9cb20"],["archives/2018/page/14/index.html","1fd18fba93459d31d58f1614fd3a08cb"],["archives/2018/page/15/index.html","d4f5d14f6e931f4b9f5b6d086e31f7aa"],["archives/2018/page/16/index.html","4e93f92d343600f70064075abb1f417c"],["archives/2018/page/17/index.html","a30627d5687c4ab7aac222cccc0cdd69"],["archives/2018/page/18/index.html","9f48dc4aa40928d6a4baccf4fa962b92"],["archives/2018/page/19/index.html","0475b8dd571f43d9c53a480e946b61ed"],["archives/2018/page/2/index.html","1ec9f4e048338e1acca490be461bf191"],["archives/2018/page/20/index.html","b2411b70c2604d842bed58a2a1491a2d"],["archives/2018/page/21/index.html","04aeb2903469a929db252128735aaf98"],["archives/2018/page/22/index.html","a67182e65f5ab207171a034e7b421514"],["archives/2018/page/3/index.html","3221abd4874d88c8fda00b0cc42e343c"],["archives/2018/page/4/index.html","0618eedf751ed8e0f3d6973fa8379276"],["archives/2018/page/5/index.html","0ed5937d4f0f546bf7e22566f980bdb1"],["archives/2018/page/6/index.html","471076d9e3b440e07098dd2d5c93fb99"],["archives/2018/page/7/index.html","ec95b6431843afe5339d3ca149e95990"],["archives/2018/page/8/index.html","dea816a9fcaf58591dd8c32dfec1880d"],["archives/2018/page/9/index.html","aa10c1adea49e2d709755907f2cf87d5"],["archives/index.html","9bc349a41711ae4009dfbffa23e151e0"],["archives/page/10/index.html","e4ab19c3eae08519aaf94e5b0e38c63c"],["archives/page/11/index.html","20cebe7b333e8d6df8b58242675518f5"],["archives/page/12/index.html","caaf80e34efc9002ee79fbeacd2da66f"],["archives/page/13/index.html","f975142ad76bf0a6e0b022f29343f93a"],["archives/page/14/index.html","0bb94a159e49876a90adcd3b320d64b4"],["archives/page/15/index.html","4565697def20d371953b63f1d283a08e"],["archives/page/16/index.html","1da733dbfee83a23c01b769cd850c470"],["archives/page/17/index.html","60af88bbb53e83698796b8f7b9242dd0"],["archives/page/18/index.html","5d42fee3b30f06ded68fcaf7dbe7e759"],["archives/page/19/index.html","9f068f4209abcc4169cf5909d896a800"],["archives/page/2/index.html","600acff9e7b2b11ce03ccbd97769428b"],["archives/page/20/index.html","154daadbc7c6692430d8ceeb65776bda"],["archives/page/21/index.html","7fbcc435d2d72b5c54a173b07f6b118d"],["archives/page/22/index.html","22bb7be2a60e8efedb5e4c7169b5a727"],["archives/page/3/index.html","09c50f78b1fc7cd763ec876f64e6ad26"],["archives/page/4/index.html","a315eb498592cad17d5b3634655eeecf"],["archives/page/5/index.html","720122783729633e92927bde66a79b6d"],["archives/page/6/index.html","c71295a98752cec6263c85e34be646c4"],["archives/page/7/index.html","ffd6a813e6038813f040682fa7dd323c"],["archives/page/8/index.html","1b92f15681c1890cf534f5401ba6b4e0"],["archives/page/9/index.html","867b04158fff02ee083de870876a5f23"],["baidu_verify_DfMf5XqJUb.html","841d421adb75d4e8e73fd44fb45a68e1"],["categories/51nod基础题/index.html","e8ca6d40eb365b003f7bfb7836ac40c8"],["categories/51nod基础题/page/2/index.html","b7d8b8b15b122ab8e4f58eaac41166d3"],["categories/51nod基础题/page/3/index.html","1de4c3ca80ecaca66f859ffe4a3780df"],["categories/51nod基础题/page/4/index.html","ca120c70f8810ab0976dca22b9508f1d"],["categories/51nod基础题/page/5/index.html","f0a8e607707a01f1e10e2ed9dfa521be"],["categories/dp/index.html","000206cc7ff8a8703053139dd1a0591f"],["categories/dp/page/2/index.html","88648ef3889e84052523fd2743c7dd83"],["categories/hexo/index.html","05058d791da2b3df9163e82773378efc"],["categories/index.html","08032061e11cc2ed62046a1e0eeb13f0"],["categories/java高精度/index.html","bd714ecf3bfcdd075a5ae260c675c6f2"],["categories/java高精度/page/2/index.html","c56ddc0428020e1a3bb88a73497cbd8e"],["categories/love-peace/index.html","6e94de2a751c7a4750e2241f2a08ba0e"],["categories/poi/index.html","af883de9277cab125723a3d6c8016c3c"],["categories/二分/index.html","8f63c2a4688707a6c25a97f958968427"],["categories/博弈论/index.html","cbe6df94c1a1444d9b1e3f2b2896568f"],["categories/博弈论/page/2/index.html","b34a46a390de2cd78934f48bd3e5c623"],["categories/图论/index.html","2f3799ff37267f54f8c6ddf40ed28d78"],["categories/图论/page/2/index.html","b6b967a5ba83bc0adfc47e42ed00578b"],["categories/图论/page/3/index.html","9694b7da568322b8e1ce0a98aaddea47"],["categories/搜索/index.html","5d40e6f46db1c2aade3de87fd247761a"],["categories/数论/index.html","7846ec5178a0b0d2be658e753f8f95b6"],["categories/数论/page/2/index.html","00d1d60639a93d9e0abb921a0fa7914d"],["categories/数论/page/3/index.html","98a879bff5308f8406c02655651eee1f"],["categories/数论/page/4/index.html","1afae1ea5ceb853db82117731dc78935"],["categories/杂/index.html","0e1079b2b6aeee38d03bd0fc88a7dae3"],["categories/杂/page/2/index.html","322818ffa48102592854eb07a4994b13"],["categories/模拟/index.html","2ac82f49ab095b2a80f40f6d1f8e3df3"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","fb53aaa50bce359ac02a41e5bc4d8b00"],["categories/计算几何/index.html","ca757e6f646f16d51a6fccfd6c04c86e"],["categories/贪心/index.html","41273f96052f65af2f914e96936bd8ab"],["categories/贪心/page/2/index.html","3becdaee2224228b763b70035843f3d5"],["categories/题解/index.html","f2edf052e948f410d06f94ef99e52124"],["css/main.css","5181e4176e3c73cff4ce006a3b70e716"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","4b37464cd9ca6ff3f5c55d916c0e277b"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","63cd10c58370e240f95c84a27099da92"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","77fab8ede6945f35de3146178bc95a34"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","4b341e24b2cb516f5c22537762614ca9"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","555a3da6fe2451e771f8b38f3030cbab"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","ba64f89aaaf2f9c355a810bcbdfebc04"],["page/11/index.html","f2e9f3144ca4dbf5165c9f9d7154661c"],["page/12/index.html","b8f079458d0d90f9adcc806e054f4d48"],["page/13/index.html","d73f369e6eddec55282d7d174948a55f"],["page/14/index.html","1891678cb9e2d7b3404df47e45ab37e1"],["page/15/index.html","428a97ebc1c56576ceec6587de991c4b"],["page/16/index.html","dbc22ec141754fed3c908b850c08141b"],["page/17/index.html","4d66c69aa3bdfccb6bee39d6aa70c150"],["page/18/index.html","305ca4762016ff7f2d478db2916b07dc"],["page/19/index.html","b9f7108a15e3e8e7b65dc108057267b1"],["page/2/index.html","3fa08792a5173110ecd052ebe433bc28"],["page/20/index.html","cacfd494a2675772984c4076d7fb182e"],["page/21/index.html","70a71d283cfcf9c7b7eaa241815574e0"],["page/22/index.html","875e414df2ff1442bfe09ce097200c9f"],["page/3/index.html","2ba534e49c267e660973ba1b6d3487d7"],["page/4/index.html","ef4468cc7e6e75b698c8addcc2a91e55"],["page/5/index.html","1aa6722e89c03cddcf74d50af00207d9"],["page/6/index.html","20cfbdf27befa1b99bce6466cf8b9804"],["page/7/index.html","ad906d12e9b2696ee4591ca1d7cd70de"],["page/8/index.html","e0c775288f33d0da5e7103b5636c307a"],["page/9/index.html","a9cf28224917c192b399ef39be68ae0e"],["tags/Floyd周期检测/index.html","b1a1635b5773ec26a11ad47a852c4cbb"],["tags/Manacher/index.html","357381a4b0c84116b2cac3244f71f7ff"],["tags/Pollard-Rho算法/index.html","3d90386bd7842d21791726f231f12113"],["tags/api/index.html","6f41e77adc9dc28409e41536c5ce063e"],["tags/cf/index.html","494c11cfd115f030664fd647ae1bbb28"],["tags/css/index.html","7d500b3a0a522bc37b12e636cfde0bf0"],["tags/dfs/index.html","c816fe5a6a1d35f20bfd32ca89630093"],["tags/dijkstra/index.html","07181958e5169f7732779173ee33bbff"],["tags/dp/index.html","16e7e6927e63683707f01f385de94130"],["tags/dp/page/2/index.html","b0916d4ae59dd739afb459db7c9c3bc6"],["tags/gcd/index.html","520b429096c575a92d9c8e32cc10bdcc"],["tags/hexo/index.html","67b8eda0711c111b72da17ff7c7a8224"],["tags/index.html","22aaa934b429493105e3ead6663f6e08"],["tags/java高精度/index.html","5722d945d6d6f96f06eff621a5e48256"],["tags/java高精度/page/2/index.html","9e6d16c67bc6e04775fd19d0012491a9"],["tags/java高精度/page/3/index.html","8615b1875c2dc3e3a24f3a096bdcb5db"],["tags/kruskal/index.html","cea1879f82bb4285e6113465d09e4c5e"],["tags/lcs/index.html","0def98efb66638b0964252dbd828c231"],["tags/leancloud/index.html","86260ba4ef25d39d10e84471d680cf9d"],["tags/live2d/index.html","50828cfe8d25bf88780cdc5d441d9995"],["tags/mac-OS/index.html","0eef4eaf3a600db4e33b7015ed4e686f"],["tags/prim/index.html","16652f095ec6522598a82fc70eaaaee1"],["tags/python/index.html","60a8864ff750fd1306fba9e2c3cebf4d"],["tags/revolvermaps/index.html","a97a7507daad6e931f62b167c59609cf"],["tags/rmq/index.html","93937073ae84099853e47fa1c5097209"],["tags/sg函数/index.html","fac9750e8834a410c485ddbb48ffa50d"],["tags/stl/index.html","bb74b4d8d917940c1deec5e10ec1b24e"],["tags/三分/index.html","33471f3eab3402a36a2dd17eaab5b941"],["tags/中国剩余定理/index.html","e88e62766338435f8ebc615b822843e1"],["tags/二分/index.html","112041ae52133d41da04f246ffda1b17"],["tags/二分图/index.html","0c15abb952d361ab1f8970a24a349671"],["tags/全排列/index.html","c92843673dd7724b24e2f12263e69026"],["tags/分割平面/index.html","d2e115ebe1d238fd03366d9e2f449ef6"],["tags/分数规划/index.html","ab4b792eb3abe0a1d256471c33410091"],["tags/前缀和/index.html","916e5a554ea12e7bf14b6acf6b75e027"],["tags/勒让德定理/index.html","092575511e51fb9e1958c0dd6a9b8ef7"],["tags/匈牙利算法/index.html","041e6ecbeb8cce466393b1d2da434f40"],["tags/博弈论/index.html","f588f63cef36b328893c493398435779"],["tags/卡特兰数/index.html","ff90398f6bf0f50c246c78c753b685af"],["tags/卢卡斯定理/index.html","9280c0757e222e47c5483229899b3b2e"],["tags/原根/index.html","7ad98fcb47670804b53d6ef34ce21a36"],["tags/四平方和定理/index.html","fd164bb8f099276fe44af097baf32cc7"],["tags/埃筛素数/index.html","1b70c844be1d7f39939592baac5bb4e4"],["tags/威佐夫博弈/index.html","a216a0d971011e0e72c3f501659539ab"],["tags/字符串/index.html","45658e344c1f03c93a67872311ffe80a"],["tags/容斥/index.html","15afd7f4b5e0951fbafc6a7a5274c12e"],["tags/尼姆博弈/index.html","a5c0f4c6b90f9a16ff2104edbac791eb"],["tags/巴什博弈/index.html","61f99f5fed97a3d3a8618a9f57ca4afe"],["tags/并查集/index.html","18fd400abbd29f3e430463196747dc65"],["tags/归并排序/index.html","7a59cebfef3f7e375fdbdef009f190b8"],["tags/循环结/index.html","a06d0b076e378f9adc5dcbe2e07db9e1"],["tags/微信/index.html","50ff55912a10a1cf4a06de95e5f6e4e0"],["tags/快速幂/index.html","272618c5a2ad4c4bde15f133d87cf6d8"],["tags/思维/index.html","741ae73dc657a1930a472f0195d1b53e"],["tags/思维/page/2/index.html","94f5e3940bd610f3c63061f3c067ee59"],["tags/扩展欧几里得/index.html","d9c5bfa10f3e91bd9358369475251c21"],["tags/拓扑排序/index.html","f5e561a6b45728d756956ba59982ca6b"],["tags/推公式/index.html","65bd52faab2aa688af56ccb601a8b7c3"],["tags/推公式/page/2/index.html","1c0e7be80156eb898e17059b9b752f38"],["tags/数根/index.html","bc4c49f0f033e229c35aaadf5eeea609"],["tags/数组加倍/index.html","ff7649cdc9133d7ea1421f54a0a0dcc9"],["tags/数论/index.html","f6c1b47c320548b024a3c2a1d382f4bb"],["tags/斐波那契/index.html","8a60afc67807838ad36547fbe7ef4279"],["tags/斯特林公式/index.html","6f3c65db5a1f79b0f39929550dc286b0"],["tags/斯特林数/index.html","225c6968e808274547951d0ff08f36db"],["tags/最小生成树/index.html","a610d280836aea59d54c8957d0004cc6"],["tags/构造/index.html","0d21d98d21ac2871d2ffbacdb5799c88"],["tags/枚举/index.html","3053e65441d4889b316d07751faa6cb4"],["tags/树状数组/index.html","66325b1aa1ec6e646ad0cab19ad3df9a"],["tags/模拟/index.html","aec87c17822e7b6129570cda3ea302e0"],["tags/欧拉公式/index.html","311967192d48035eaaa5b3ffbf893bf4"],["tags/欧拉函数/index.html","1dcb94380793e0a57878a60cdfe11a00"],["tags/欧拉路径/index.html","654e17f30126028b17dd22bb7b97642e"],["tags/海伦公式/index.html","d1acab9a1d191b11d8d999555acad8aa"],["tags/生日悖论/index.html","5662134f3c6eada872a4e4d92cb4fce4"],["tags/矩阵快速幂/index.html","fb616b256fbe74145c161e6fab9ded00"],["tags/离散化/index.html","b022a0f56a15a06b6a66e44e3c142f79"],["tags/米勒罗宾/index.html","35594c7d620acf4078a64b60a9108181"],["tags/约瑟夫环/index.html","eb5bfd48755802f5d7c01d6d53134e7b"],["tags/线性基/index.html","5600343f29c11f6b1e865fc5f71770c7"],["tags/线段树/index.html","08b7f06028c48d582202989d5ac37ce4"],["tags/组合数/index.html","dd83e3513400e34c2672694863f0a9f5"],["tags/组合游戏/index.html","60b943fcc9178c2879beed6e0d0f40f5"],["tags/背包/index.html","7c2c94ac727167365c1a0a146737a94e"],["tags/莫比乌斯函数/index.html","9b960eb4bf6ef4a1e5d481b85758261b"],["tags/计算几何/index.html","f21713641c463f23eefdbf2f1bb31198"],["tags/贪心/index.html","3a750edb6fbe8c6003bba50e73c99541"],["tags/贪心/page/2/index.html","272ab6240777d2da642dbf333cd81f07"],["tags/贪心/page/3/index.html","0b4b62994770fd61dad8f9865923601e"],["tags/逆元/index.html","04295d57ccc64a47a650c95f075bc791"],["tags/阶/index.html","9fbde57d1142427c6acc705a9d1dc48c"],["tags/鸽巢原理/index.html","9cc3fe440c7162029532a55541e2c706"],["tags/黄金分割数/index.html","b91b8763733c03bc78e586b7763f6327"]];
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







