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

var precacheConfig = [["2018/08/11/hello-world/index.html","9e6a571bd6ffcdb67daa77aba3dc1040"],["2018/08/14/1995 三子棋  /index.html","dadfcb132896e68a4129c57969467dfe"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","98a188ef7177f18e0df0074c999baa44"],["2018/08/15/2006 飞行员配对/index.html","86564856b9ffa4068f86d0307974f1f8"],["2018/08/15/D.Tea/index.html","8f56a6d3ea2d3c0ca2d7a4423f516c35"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","42f8f7390b8ec89c062447587f7d82f1"],["2018/08/16/1459 迷宫游戏/index.html","8b6159923516437257033a5daef2677a"],["2018/08/17/1264 线段相交/index.html","b8716fb06b336a84b54907e6c8170c8e"],["2018/08/17/1265 四点共面/index.html","b0cc2bddc4f0366354819af908db218c"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","f40aac85f39e02fb394018b750c148e3"],["2018/08/17/1384 全排列/index.html","a443f99aaad4200419823cd0887750af"],["2018/08/18/1240 莫比乌斯函数/index.html","9ad3416c9a823edef576b6c8336de3ad"],["2018/08/18/1256 乘法逆元/index.html","f70d9189f442f0c040e356fb74e6f4ec"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","3527827e124249a31078831ce62267a5"],["2018/08/18/Teemo's bad day（并查集）/index.html","15a9041584f6d3117705c1bab430ad40"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","58d7748e44af8118eef0452e81c25342"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","b5d709fadf7d918a5f29ad7c5980415d"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","aa37093320711248e3a941e2a0c8beb3"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","352e35704dd977a074cfa3af64fccb86"],["2018/08/18/hdu 1856 More is better/index.html","841ade88bfa52a1a4f1106ef5504bfe0"],["2018/08/18/poj 1182 食物链（并查集）/index.html","e21dfb0f19c84fd7f7aaa7a0c81a1844"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","98af9dd8fbeb57b32b7294e7c0ed3207"],["2018/08/19/Minimum Cut（读题。。）/index.html","ca498459cee3afce6e57c29c71663ceb"],["2018/08/19/Ponds（拓扑排序）/index.html","735b0d8646608dce8bb9130c4dd854e0"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","a563cddf08821e29090a960b1d9a4122"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","6254d5bb784d846d3b0076e768dcabe7"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","c870f774218b592fa671bb9862aa5b64"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","0ce5534fb2a49326b77e07d50e848813"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","1561d05d677d82a953572d2be5230de5"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","5a9eb1c8b1f451fe07412185ef634904"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","8881d4f1159e7d757647fbe4aa3491d4"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","9b2f54ba2e9a15eeb1de2601f066eecb"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","9cf31009c310c6fbc8f69f8608840133"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","cf52e7aca137204c8899ca81ac3474bc"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","88f300df035806904a58c5d683e19a0e"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","51fabcc23fc11a5941088e9865ec88d8"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","33b4af512530b99c66fa6a023370e135"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","5d952e6198ade91658a2ef5e8fd2e335"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","bf5cdfa3b943210c27885ef231c2e6e7"],["2018/08/20/Pawns（博弈，思维）/index.html","4a2690859ff191c7b3256aec25ad12ad"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","1b84897ac4ffadfd0d36b437641014b4"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","0ed747a757a130e8712d5f5820b59cca"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","16c1d1a25f8563b58b87c8320cab90dc"],["2018/08/20/hdu 1564 Play a game/index.html","99d845a0a3f178c41ff20a69af74f451"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","1a9215d0a291ff8fd6093a88695bd141"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","d2565e93a1b675013f68e9d787fa01b4"],["2018/08/20/麻婆豆腐（思维）/index.html","a62a216f8feb15f932a72c1903a378b9"],["2018/08/21/1212 无向图最小生成树/index.html","6b41a5783cc1e95b2f8e05ab56cb4312"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","590f526dbe663a813e921c618e6bc0c1"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","4b8c77ca0abd8ca9c1d9ea1c1c309059"],["2018/08/22/1079 中国剩余定理/index.html","6ae4b3564aecbe46c295d8e8ab974a1f"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","d4091df46bfa5564861ec9d9c28f04de"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","df6546dd6e5bb1ff61a7ad9a84f87684"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","01aa9373fe09995fdb70ea7dc991c118"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","0b748143f3613fb7e089c73cd85a62a9"],["2018/08/23/1136 欧拉函数/index.html","2f319ddbe603d31e718bd3633425537c"],["2018/08/23/1137 矩阵乘法/index.html","42e4c1a11572e34868295062947302f3"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","9ee74133cedda8375c24a1ecfbd34379"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","9dd2df09203e25e2486a50ad2dc768ab"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","315e8169698d8cab5957deb89aec9ba6"],["2018/08/29/hexo4/index.html","d114f6d6177704a9f66fa6eb9043610a"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","809c8b34c25e032355d02097839afa5b"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","247744e685751b695bb3d910f072c700"],["2018/08/31/A. Too Rich/index.html","86918fc5d19ccbc6ab3611754f8f8607"],["2018/09/04/C.Catalan Square/index.html","bbefdc3b421c648b12db2f117fd5f272"],["2018/09/04/hdu1002/index.html","a0554b47049d010b3b2d682f219605db"],["2018/09/04/hdu1042/index.html","237614f4772bcfb8896feb6b971e6012"],["2018/09/04/hdu1047/index.html","e7439081313e2cbe59176af7c23e82c4"],["2018/09/04/hdu1715/index.html","93b080c46892da113aa048d776261451"],["2018/09/05/hdu1063/index.html","a76b54cda49e878e28648611e817c1cb"],["2018/09/05/hdu1250/index.html","27a066752d45b09a3a17bacafe4325bb"],["2018/09/05/hdu1316/index.html","78a90a73ef79cd577d1a28e142206aad"],["2018/09/05/hdu1753/index.html","6cbd2354519e17667e50f0c1e9ba8d90"],["2018/09/05/java大整数题集/index.html","a5917fc19deaa09e2eb4d6c1500825af"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","2263bfee1e30c8ebdbc9aad8333cf91d"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","e5c081f40a6a876d9b4b736e7d537b49"],["2018/09/06/hdu2054/index.html","486494869d8ffb7deb77e018b0c27e94"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","544fb83cccf198f8db8c0649fd1874e5"],["2018/09/07/hdu1212/index.html","667ec86a11bcd9840640db1981d6bb9a"],["2018/09/07/hdu5050/index.html","4af2d929959852af5d419bc867c57abd"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","617a128838b40a698816c321fdccfd42"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","b0a8f045e0c832e50b47d07a6241f433"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","3a85b31c4e50a1f122179c2d13bc81f9"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","7140b6c3d026749fc2e86f2dc2874311"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","e0e0d58f212212265ebacb7f703e25b5"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","17b644279660c510ba856fbdb83f3b03"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","39fbed25007be2f43b8be54e13cef309"],["2018/09/13/Teemo's formula（推公式）/index.html","4910789897f66e9b9b99129fd74611c8"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","f5e4abcd9a323f8612c3e18cda97ed2a"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","64d2f8cd8564f3dbccfbacaad4cace43"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","9dad59c1bd0ae941e568c73e9dac3922"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","031f3f5245dd6b785d4927a4f4ee88fa"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","7edd8e6b7f20d2a008258ccedecfe803"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","67781e74ab387ec4d936e069b92c46d3"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","91d5b39153a0966b7da18014c065dfa3"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","be7e710630e750d6b2f93cdd69560265"],["2018/09/16/1118 机器人走方格（组合数）/index.html","435226b71621e5f33fd6ea21a9add5b0"],["2018/09/16/1134 最长递增子序列（dp）/index.html","f298f7ecbe641815517843bdbc0f0f52"],["2018/09/16/1135 原根（原根性质）/index.html","b407d6bbf3b2c913d9e029d0f8088b71"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","4561971a99f959c8a15cb9cd981410fe"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","7916f862d3d7ce8d6c68f318292e9e5b"],["2018/09/17/1073 约瑟夫环（递推）/index.html","da4fefb74c36239acd798343bae0f669"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","88ca89dadae1ee3c4d91eccaae29c5e5"],["2018/09/17/1085 背包问题（01背包）/index.html","cbaef2c5e77097e079eef30b38fc475e"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","747e03fe75937a61699e543851ff8665"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","a057ec23c91c6aa6f7a60e5e81d1d351"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","d67f6a55da95f88e9159069e9f7cecfe"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","3e3114700b4398b9c4916da52e917427"],["2018/09/18/1027 大数乘法（java大数）/index.html","dbd632772513507879f25446d86a2403"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","8d5c2aa483a5fd716c87cd6e08155c9e"],["2018/09/18/1049 最大子段和（dp）/index.html","18095e239423e6ee0b9a5a524744264f"],["2018/09/18/1057 N的阶乘（java大数）/index.html","270a86a7caafc5f9ebd476ca53454056"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","10f1b4a2c24e7eea4963bbebc8afd699"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","3e1738cbcf0a7bee6ba81099145a2c15"],["2018/09/18/1072 威佐夫游戏 /index.html","1f9b164251dc5fe255192bf1a12c4a2d"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","24b0100334fefb2df12ee29d2f755c71"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","9aa8eca76415653644c32567b3129476"],["2018/09/19/1000 A + B/index.html","c0466e53c670794d1a8a9deb7f59f8b1"],["2018/09/19/1005 大数加法/index.html","f7d01b032c8ed38feb9a0b0a61bc3511"],["2018/09/19/1008 N的阶乘 mod P /index.html","a376df474beb57e2f62bfeed5616941a"],["2018/09/19/1011 最大公约数GCD /index.html","e0ffa5a3168175093b7bb74039f5a82c"],["2018/09/19/1012 最小公倍数LCM/index.html","e92f5272213d7a933f7f67da9e69562c"],["2018/09/19/1018 排序/index.html","691b1f62d075b0a3902454c3810188d0"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","7d4f29e61e449ba915df8cf26423c45e"],["2018/09/19/2133 排队接水（贪心）/index.html","0e1b46ea929d3368c261d81333994619"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","0e6a54230b67708f47d5ffdfcdaf0f57"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","6bb32737440f21c3f9ae1f03be5d60fe"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","e54473dcc40064d715f9a9deff356ea8"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","7539cec600d9a8e76180a961f40d5e5e"],["2018/09/20/51nod 1717 好数（找规律）/index.html","e8fdfd04f972bbceed8758c6dfbcbc8f"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","8bcc4e02c992e5c8cf791d2e39e57b0d"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","4d7f0b31ccd4e4943f95fc8d67a96ba1"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","7da7672e3e9317cb3f375e0f94b3d658"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","f081f109e842d8a1595836e8cfe61519"],["2018/09/23/51nod 1791 合法括号子段/index.html","2e89ddb032278d9c1735405f7ef97c99"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","b21eefc96136aaa7fcb528bfe73b1b40"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","fbfbe814745527ba609d2f1c03cc96d1"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","247116116dcf99086a74ffd3918918a9"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","446ffcd012b9c9209bb0dcfbfb915349"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","38aa05282f48fcd176d999101415268b"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","6aaced4f5a2c974dec17fa821048303d"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","fdf1975c5732ab7b4f84bfee2f3b733a"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","6b1e2b94c44c6488d3c6a00926fb2dc4"],["2018/09/29/51nod 1015 水仙花数/index.html","ca8ecb89093cefddd6836ac5d5b65ab9"],["2018/09/29/51nod 1080 两个数的平方和/index.html","1618c95bb9d49d1c55ba3f0b44c46b08"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","08b9e9eddf4a92614d272bba2e2c46f1"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","517b0e5648a53116fc8f4d6916d980f8"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","f8f3fcff9a26cfff1dc67273a1832ec2"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","ef6eb5258a12e636226ba48d9d1678cb"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","734cd6f034ef033478fcc819a5479d70"],["2018/09/29/51nod 1182 完美字符串/index.html","2ffc73548f222e2199c0ff0176e7bd6d"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","7ffe2d0624fc45b0eea35d78de8640ec"],["2018/09/29/51nod 1283 最小周长/index.html","23cd1ec00d65f213f0832ccb474cb9cf"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","a8521a878a54e03449d1b95f61d7edf4"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","bdb95fccb37d28d1c10800967e7e69ab"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","cf4d7effb08c22f054248ea3b50f7ec9"],["2018/09/29/51nod 1344 走格子/index.html","9bc406d04bfd3da76bb5fad767da5ba0"],["2018/09/29/51nod 1347 旋转字符串/index.html","1dfd318cac947efa94376d069387e8ee"],["2018/09/29/51nod 1381 硬币游戏  /index.html","0568a51835acc8763af2a8bf56a0a4b3"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","71a9babe9acf99cba5da8a327c8485e6"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","572ca40fca6279a2344e75949fb0fa13"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","f8d65f3eb7c109fdacad0a07c43f0a17"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","196744b37088627ca174180da2c53a56"],["2018/10/01/51nod 1596 搬货物/index.html","9ac79f279049c0310f6667dfba1e3294"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","d3b23c5a3aea7db4e658884cea75307e"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","1bb84da75c18e7abea6c901d80d97d1e"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","911b66101b5f413e44851d240c912719"],["2018/10/02/51nod 1521 一维战舰/index.html","941d013009afc38e226d3ae1b2d2f1f8"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","e833ed8010d89e7614a663e7ec9acb38"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","d48a6de15b9c5f04e65ff4396f70167b"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","ba8557258f71706502496ecc8623fca4"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","e25b384d46c171b20cd1f1a933a8a31d"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","ec214da6c915db8575c8e11a0df88abd"],["2018/10/03/B. Pocket Cube（模拟）/index.html","29093459629df824aa0a85dc4460116d"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","17e16634eb6342baa22e82a014f0c209"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","c95404140723c4f59cf3cc31be29e110"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","f23d0610879690b3d65c377c324d159f"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","3713d8a6e870753cb3ee122e59e9a60d"],["2018/10/05/51nod 1138 连续整数的和/index.html","5d2679bd501612b01e20e74ddf51aa19"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","e69df71eb64cc5c3c0c7c0aa36694923"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","b58f5002e1118dc85fe11f68472c23b9"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","f4282ca757dbef2d4502364603597fdf"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","55ef67f5eb4126385cfbbe7bb7918d82"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","aa0cd1496ef7c3017f629ee642bbecd9"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","7db1bd3ddd01d33ab07083bdfaab04a8"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","1dd883eb7e452f2ac059fa4ca4141934"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","afd0a62b49365b85bcdf76ef60799cc6"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","3aead05fa9306c79820294b9d6c3586a"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","74e7cbedede76d98d33dddd6232d438f"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","aee9cda46334726759f2ee6aee1ad2c5"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","b64f581faf972cfb1c11901d2a79371e"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","c236e6b3834996179a0ad304d9b09c7f"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","55d354ca0accd9c79ea0c9ea6bc31291"],["2018/10/10/ural 1073 Square Country/index.html","6e9ea63f4726544dbd31059ea59b1038"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","7e53f6d7d9a80c0c267000135ac8b9ad"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","74c10b92a3750e6ad57cae33d19de098"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","b49f37065a34e254d7c0f853e37a2746"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","68fc5d48243ca4fdd9ff14779fed6224"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","d9d4e1f919482429216f2e7c0b99428f"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","b8540a1df0e1e5c9a2e2fd71046087fd"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","c8d5da2b2e164e04d63b66403b1aab9c"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","d3cc47e12112b4d4dbcecbf1dffd00f8"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","0111485ac25e6651f167b03e485fd2e6"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","14d06b25216a34b81d501bc86c6ca841"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","18d4c346022b5eb0288149971db440ff"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","2c02b4f1e272f8b7825bb3a56d3edb4d"],["404/index.html","6d7bc83e65d1bb9bbc5d9f8f93e7b30a"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","50db01e5449eb7c438ab8a1ecc8c2e5b"],["archives/2018/08/page/2/index.html","5936fb06ec8bc82a9c6ef972a3cdd06f"],["archives/2018/08/page/3/index.html","77c5138be0907d4efaca0f9968886ba1"],["archives/2018/08/page/4/index.html","8e1d871b04b233773d4334acdf8568e3"],["archives/2018/08/page/5/index.html","8455489e52d1dbecd413248c8cb3ec81"],["archives/2018/08/page/6/index.html","2de6e7d19f8e234be86c76d6a02ebea5"],["archives/2018/08/page/7/index.html","7a77bfd26d116784276a35841bc62188"],["archives/2018/09/index.html","f4c4aec0ba00d8540830bb30e814fa2b"],["archives/2018/09/page/10/index.html","ad215ef03d9cd80f9a4bb4eee770b451"],["archives/2018/09/page/2/index.html","4b5a701eb58d808cfc074bc690e084a0"],["archives/2018/09/page/3/index.html","9cfd2d3d052a07c063d813809dde127f"],["archives/2018/09/page/4/index.html","953e433e5a7e48aa817d77d963fb68fd"],["archives/2018/09/page/5/index.html","b4768988b4a284927eda5e6eb6ec5713"],["archives/2018/09/page/6/index.html","61acc196e261cd219476cfcf48138f08"],["archives/2018/09/page/7/index.html","b0ba2834988450b3f3bd6079ef377c93"],["archives/2018/09/page/8/index.html","f57bb8e2a1bbd7b208e2b6392d584cdf"],["archives/2018/09/page/9/index.html","84334fd0ccaa5f15a7fd698e8030f381"],["archives/2018/10/index.html","ca761a2af02d25663ffb5f9220ee335d"],["archives/2018/10/page/2/index.html","f8bb02cb58fc94744a5f53fccaf08698"],["archives/2018/10/page/3/index.html","b2fd0787698af0d368b9416b2161d16f"],["archives/2018/10/page/4/index.html","34767e0be837b31cbdd2afd81a25fdfe"],["archives/2018/10/page/5/index.html","68cb275efef369cfc2b5d4bbc2eb4cb4"],["archives/2018/index.html","e9c791d1eff5effd0be3ffa0501bc134"],["archives/2018/page/10/index.html","53d2d9949a507f39ecb0d7d9a0cb3e8e"],["archives/2018/page/11/index.html","3ceb21d969e808a16bc7831a27b83bc5"],["archives/2018/page/12/index.html","39b0e6b2386aeda1dfba912a7e0fade7"],["archives/2018/page/13/index.html","40e61f23185b6faddfba3a1e80b51662"],["archives/2018/page/14/index.html","efe196a97a88b2b88a106a75f53348ac"],["archives/2018/page/15/index.html","26dc97233d3c0a0c35042cfed2b94b1d"],["archives/2018/page/16/index.html","6aa562c7a80b208b8a52a36e53edf08d"],["archives/2018/page/17/index.html","b1496a3fe3fd5a033a59d312883fc02d"],["archives/2018/page/18/index.html","c9f0757fd7b3074d134ac46640fcc796"],["archives/2018/page/19/index.html","2e08a1f122fde2b4788487772bbeb95f"],["archives/2018/page/2/index.html","774857364f2142be3583612f91b521e5"],["archives/2018/page/20/index.html","fdb6f24ba5b083dc01dffab2911e64c9"],["archives/2018/page/21/index.html","3f2e1ae9852b258405b22708461e4b16"],["archives/2018/page/3/index.html","7e12eea37cb422085befbbacd1fbf4db"],["archives/2018/page/4/index.html","dcb96ab896eedf69c77ac28ef7c93094"],["archives/2018/page/5/index.html","9a867846427ba1646c69d5e614a33ddc"],["archives/2018/page/6/index.html","cb31a81abadb1285d930baef399ba5aa"],["archives/2018/page/7/index.html","c9c54a517f22429b3b874d339fc02720"],["archives/2018/page/8/index.html","d459910d5f79f5d4b3e6e85c79751b6c"],["archives/2018/page/9/index.html","c0e3f28a204bedfbd00528bbbfba586b"],["archives/index.html","abaff1c46513aa38eeab9d71bb7bc5df"],["archives/page/10/index.html","b36b13346e1703cf61f958f5e4fc892e"],["archives/page/11/index.html","2ef14aa0b1aaec4de837a6f3ce0bb6dd"],["archives/page/12/index.html","c4b10a3125b651c1ad17e28631e7aaa9"],["archives/page/13/index.html","43bfedd4d8143a1c0601a27a1c6cb262"],["archives/page/14/index.html","6583caced855949edbb04d0d0bd2e824"],["archives/page/15/index.html","3fb6ca2f4990ad0347e3d6cf7e8965f7"],["archives/page/16/index.html","7b67d21a44e3c41f44c8a109ad796490"],["archives/page/17/index.html","175b04c3080f2e4558abd29a4410de0d"],["archives/page/18/index.html","55ddc71ce6745195b12baad2ba9b8d4d"],["archives/page/19/index.html","48a3f5df2405228ef126fab38ecb63ae"],["archives/page/2/index.html","269bad5952ec5ca9edfab4da3d6f74f2"],["archives/page/20/index.html","57d6bec0d5416430c98533eb2bfdfc16"],["archives/page/21/index.html","85f40d5ea2128264e351fff8c18bcadc"],["archives/page/3/index.html","1b14eebd658dadcaf716aab30586469a"],["archives/page/4/index.html","3a71bee3ae917977539d1c21c2f4cce5"],["archives/page/5/index.html","a1bfd3010c2d0a3a90e424e549e5ba91"],["archives/page/6/index.html","e78d7e063dc23658b45560f36be35f8f"],["archives/page/7/index.html","594fadaf4932aff55aa51566b8de81db"],["archives/page/8/index.html","ac021e012a30484f383e109d23b71ab4"],["archives/page/9/index.html","b072bb276bcacaf56188502a302228cf"],["baidu_verify_DfMf5XqJUb.html","71d04a9248b71dc97c3bb3c805e1858f"],["categories/51nod基础题/index.html","461fb15e45e25d3cdc181c4acd055e20"],["categories/51nod基础题/page/2/index.html","811bace6d1bd6b164e28342a6edef393"],["categories/51nod基础题/page/3/index.html","ba200f8c3e31e7e6263ca5773d1f52d7"],["categories/51nod基础题/page/4/index.html","359f5268556aebfdc5b84e432eb1c1c4"],["categories/51nod基础题/page/5/index.html","43219c1402bdd03b5e81ff16b59b38b9"],["categories/dp/index.html","0773a0e26703b3019cb0e874dd1cbc36"],["categories/dp/page/2/index.html","fff08d3d2f78ddecf6f8c1d1c988d069"],["categories/hexo/index.html","3e7db006c8cf0d776eabcb6742a2769c"],["categories/index.html","16e65289f6470b5365076f40c8568bd7"],["categories/java高精度/index.html","7da70e27d07fc18f96dc11d72b1afce4"],["categories/java高精度/page/2/index.html","e89046a53a44a200c427e1b99be4f7ed"],["categories/poi/index.html","f4446e54152587a39d618358c6cdde7d"],["categories/二分/index.html","5c66b735aba23c94edfd8d7961aa6392"],["categories/博弈论/index.html","ed749e37a759e2e53496e333dce99c0c"],["categories/博弈论/page/2/index.html","edfbd3629de80e526771cd8383da0087"],["categories/图论/index.html","0c6a6c5cd83e8f9cbd47f9501456f7f4"],["categories/图论/page/2/index.html","7865a532298629a2179ddefd97746305"],["categories/图论/page/3/index.html","5419beeaa5ea0bdea0b0e9a20eb2fcb8"],["categories/搜索/index.html","d5a7e7483d370420b2d965f083db96f0"],["categories/数论/index.html","1a1071c437922891d42668b770db22c9"],["categories/数论/page/2/index.html","d4b4d1c4c2c374b718f062d35effb75f"],["categories/数论/page/3/index.html","fb7e9c0a9a8f61384d9eb3b4b7750677"],["categories/杂/index.html","7c274a0d092359c801d9db404b273d62"],["categories/杂/page/2/index.html","24bf6f9bc3ac7384a85ff0899ce77446"],["categories/模拟/index.html","3ec8aaa63ceb8da1aeafd70b561f1d03"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","ccd69bf448626d0ed5da8bf73f157dc3"],["categories/计算几何/index.html","8df4af433ab774ce4d30633e66b33c14"],["categories/贪心/index.html","047aad6f29cd133af51adcd386256f0a"],["categories/贪心/page/2/index.html","8a3a1774f547467571f18e8f0b404f16"],["css/main.css","ed18bffcc85d7db3521ef9f831436f54"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","18b2586b2c3541dcc2179f48554d0059"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","60b3b9c8f662620f9df3f3f31809f326"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","bdf4511c07a36ef42e6082ecc0d0f206"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","97f0b0eed18ca545610c15812daa6b43"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","9a075147fabb06d45502b7e493f904bc"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","a646e8b8e7a7c91af2249519b199dd07"],["page/11/index.html","b6e4ed0b56d50371a0363ad47b62a3e9"],["page/12/index.html","b59f4fb112543e0638497e5dcf7a07e2"],["page/13/index.html","ba6a4f29e7acf6da2e24e827ebf2a355"],["page/14/index.html","48cf0cd9ee2016868428c770fa47b7fe"],["page/15/index.html","fc84e3884439be2b7a4fb472b3a057fc"],["page/16/index.html","a8134019458379d6c40ca1fe1e43d4fd"],["page/17/index.html","a54509099fd32cb1b2a8ff453a137ef9"],["page/18/index.html","b04b79043c4e02d8a289a4091f4364b3"],["page/19/index.html","eebf2bcad4e060b27870606b35d5c6ad"],["page/2/index.html","bfb786b10853d1adcb91d7dbc867810b"],["page/20/index.html","f8433635b849c7b1ea713a273b98d54e"],["page/21/index.html","5c4470e88b3b3710aaaa09a149b24149"],["page/3/index.html","027fc8022b22e3a17fb7ef4352bb22fa"],["page/4/index.html","e5fb409811f05e375282d608ffc10be5"],["page/5/index.html","43cf23d9eb19c3ddcaa6db088ca559e1"],["page/6/index.html","8092d9e09134db5735b76811ee1f0cdf"],["page/7/index.html","378e903b5bac9c51f15e73c76022d24b"],["page/8/index.html","fe2357ea81fd0d66b72f463fba930e24"],["page/9/index.html","ec9da4193c2db92b88d3cc04b23c4fcf"],["tags/Floyd周期检测/index.html","928f1fe611ea1d8681f55b1a70fd4d86"],["tags/Manacher/index.html","769121155ff3c76eda8708cc6ffdc61d"],["tags/Pollard-Rho算法/index.html","aac6502720dc2ac7f913aa340eb9842c"],["tags/api/index.html","ff92d7b6a908d69f34253abc9f9b7559"],["tags/cf/index.html","97e41fd04a2defab06a6b71fc58b15f0"],["tags/css/index.html","1f103a340952b99f6d7bfaa409493c19"],["tags/dfs/index.html","3cfc6bc2082b309a5cabc2370ec5e00d"],["tags/dijkstra/index.html","3ffc7ff995511739c1fc59c0f8133bf1"],["tags/dp/index.html","35813538a0dc6f27572007ccad4953a5"],["tags/dp/page/2/index.html","4ed5a282f2302589a51e8e3ce95005fe"],["tags/gcd/index.html","9042623067f095d6a89c196510f86c2b"],["tags/hexo/index.html","2b523b46382b88c62c381a7e164ba75a"],["tags/index.html","75a37a9e3abada95c2b4a15b1b5b3b5b"],["tags/java高精度/index.html","4643cb99964ad9332292cf341ab65c1e"],["tags/java高精度/page/2/index.html","d5b5e3791fd4af51cb1af53a30b88801"],["tags/java高精度/page/3/index.html","68897dd19b7f4c81d1633be8fa77ec10"],["tags/kruskal/index.html","993e2e3cf0189ebd59e6bea1d35b4c0d"],["tags/lcs/index.html","cbc330e993c017ec6d5d470c4d58e7aa"],["tags/leancloud/index.html","8d6675235cba54acf5612a697ff5e796"],["tags/live2d/index.html","8467fbb19faaf5a60f4e85f545b27ff8"],["tags/mac-OS/index.html","54bd16d1e694441feb102398b7362d89"],["tags/prim/index.html","c1ede5e3f13bc662bac3c5b960188c5b"],["tags/python/index.html","196d745b48ade0ca2252e52517ca1cdb"],["tags/revolvermaps/index.html","73fc1a88916f32a541b0fbac23bfd824"],["tags/rmq/index.html","11ccaac98a388afbb018a326c56b017f"],["tags/sg函数/index.html","e73c175f1b2e36f9fa6317489dde46a3"],["tags/stl/index.html","0c9b0408788b961e4cec8b58d75e6b25"],["tags/三分/index.html","91d5fb1e380c769a56a1f04041ad6acb"],["tags/中国剩余定理/index.html","68d2dc1fd9d14ab8c43e70d48134c2b6"],["tags/二分/index.html","0ace4815458e23cdea23746e488d3918"],["tags/二分图/index.html","07e26127bce54bab90dbc0d400635c6c"],["tags/全排列/index.html","e405ce0711d2ecdc4431d821d41629fe"],["tags/分割平面/index.html","1674158e735ea49e89de1715fa7fb5a6"],["tags/分数规划/index.html","b998ba70a692480634cada6043a44730"],["tags/前缀和/index.html","a1e9d6be21729fbe0e4d3fc194f564a3"],["tags/勒让德定理/index.html","33498c89c894b28c85a6c99f49e7f500"],["tags/匈牙利算法/index.html","356128a9835be5b40f191108dc7862d5"],["tags/博弈论/index.html","896e5856e61f143816047dad62754746"],["tags/卡特兰数/index.html","ad37ddf51f8d99a5b37defb0ca8e8516"],["tags/卢卡斯定理/index.html","eee9682e1767dc14b04f9d8614232f0f"],["tags/原根/index.html","6423268705eaa99752634495d42a2f34"],["tags/四平方和定理/index.html","4e567b7cc69191c69d1d52d2e29ae907"],["tags/埃筛素数/index.html","096d6cd09cafc7e801951c4281e6ffd5"],["tags/威佐夫博弈/index.html","8ef64624602955a3c14c5de1160805b0"],["tags/字符串/index.html","426bc7fedad168ff1d5de127fb8c89c7"],["tags/容斥/index.html","48b0851b7c26c09c2d7042bd5a98ae06"],["tags/尼姆博弈/index.html","ff3039e23721be04a5e116be02b1227d"],["tags/巴什博弈/index.html","5e30886c6b2acdb215d64e3c2080ef3b"],["tags/并查集/index.html","05b5dd9836373223ab360faa723102eb"],["tags/归并排序/index.html","f65ecea4a0639df6a6274d2934b398c9"],["tags/循环结/index.html","8e698d9f40d6631a52b870b46a69ca45"],["tags/微信/index.html","f0ec136138dfca36e7c0e01c5016d10a"],["tags/快速幂/index.html","714a39247f7761f4a2f545111aee3be5"],["tags/思维/index.html","59ff6e595aa390b0c4de9507ea0e62ce"],["tags/思维/page/2/index.html","0c2d40eec7d843ec4686815c48316d86"],["tags/扩展欧几里得/index.html","db03057f87c7b378179648cbdb29742b"],["tags/拓扑排序/index.html","94e78592ea874bab111e4cd036386cd9"],["tags/推公式/index.html","d07b908c53e706d0e8c0801132ea15f0"],["tags/推公式/page/2/index.html","eab887a33704cd9551c074cd333541ce"],["tags/数根/index.html","15982065bc02fd5f38ea0515cc391492"],["tags/数组加倍/index.html","e18baa05a344fbf7c6c02642003d5c09"],["tags/数论/index.html","a7a6a9b2132acb82a67cabba1ccbd1c5"],["tags/斐波那契/index.html","83a9627a38cb0872bca2fd1333e7bb30"],["tags/斯特林公式/index.html","4d54da47e07bcae8e65b158090e8b94d"],["tags/斯特林数/index.html","1f8e9b9aff8062d12557ac3f43544730"],["tags/最小生成树/index.html","410514589367ca14088183132b3fba6f"],["tags/构造/index.html","ba314c322d5980a34132b3e695c5c8db"],["tags/枚举/index.html","ea0d2c784f709a810b0827190ea84752"],["tags/树状数组/index.html","4b97b9097d6480c26d0ee0e22648514f"],["tags/模拟/index.html","c02a76e3bf419ba68ca8db245cd255e4"],["tags/欧拉公式/index.html","c2c2749bf04ca0b9b35e8557357b9526"],["tags/欧拉函数/index.html","40ab571e887bad054fba0c38d479a911"],["tags/欧拉路径/index.html","47bf1e7e76702530d7723d858adf8e08"],["tags/海伦公式/index.html","ff780c4dac1455a73d8cb39248d49487"],["tags/生日悖论/index.html","1c8841f621e6a525b000ae153935d871"],["tags/矩阵快速幂/index.html","f373e12df3143c47a15296a10dd2c797"],["tags/离散化/index.html","15e7cdb842e8a7940eedc34aa86f6d0d"],["tags/米勒罗宾/index.html","ff101faaeb574fa7f3863456ac2a7ea9"],["tags/约瑟夫环/index.html","f96146eea595e9844cce05ea45baae98"],["tags/线性基/index.html","b62af55380b4e5c4fba924389b948735"],["tags/线段树/index.html","03c5f52d96eaeed9c71c24df5005da72"],["tags/组合数/index.html","f884de33839e40517ae5b473c931bcdb"],["tags/组合游戏/index.html","04e1cdf2b01fa13ad9432331f4eafec9"],["tags/背包/index.html","803b6bdfba9fb93ddf3d3b5473370201"],["tags/莫比乌斯函数/index.html","b624c26d46aa62e4c2235ae78bfbda76"],["tags/计算几何/index.html","8fa84c1b4d9adb0cae0f124130d32793"],["tags/贪心/index.html","f6993e82729f30005252efa1fce42494"],["tags/贪心/page/2/index.html","bca9e17523583ec7d72a5c4c94d2301c"],["tags/贪心/page/3/index.html","0ffb53fbe3625166daed98315f6e29dd"],["tags/逆元/index.html","cb3deb70e3c6251453ee85255905b90e"],["tags/阶/index.html","ebb0651d9c8b2c785d40d251cbf9ea11"],["tags/鸽巢原理/index.html","5a87c8a399b06b4949c84dbed4b6555c"],["tags/黄金分割数/index.html","9a26c0d1a71b11ea168d9ec39a870487"]];
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







