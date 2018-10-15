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

var precacheConfig = [["2018/08/11/hello-world/index.html","48b5282c2a592c30dffc14c37596c242"],["2018/08/14/1995 三子棋  /index.html","f5152c3a176fa9ea1f1b0fcf10e1dac7"],["2018/08/14/blog/0.png","3903f1c330d0b189a675cf9ef3675cd8"],["2018/08/14/blog/1.png","7af4fa0790604ad2fb888055ed0430ed"],["2018/08/14/blog/10.png","6f8a3f903940b05b9b5b3c77a7c9e984"],["2018/08/14/blog/100.png","256792075fbeac5c590befb02b21181e"],["2018/08/14/blog/11.png","18ed1a412f39409850231d0d83b3a71f"],["2018/08/14/blog/12.png","ade19bebd03cc020c704ef5fd06caafa"],["2018/08/14/blog/14.png","74b0ef178ba64fc2e2a26951a8927bdb"],["2018/08/14/blog/15.png","cf8cc6e7cf4bb85716c66e050f86f97b"],["2018/08/14/blog/16.png","5db4207c56662cc954f5472984216dbc"],["2018/08/14/blog/17.png","5025ddc8a39db58896a9fcc3fb6ad063"],["2018/08/14/blog/18.png","dc911e4bf2cf25156d114d9f16cba404"],["2018/08/14/blog/19.png","f5c48b1c22539d3606851d0f9de042ac"],["2018/08/14/blog/2.png","7eb209d317e80268fadfe445724d3afa"],["2018/08/14/blog/20.png","bd44f88fdb578855b7b8df36fc81d3ac"],["2018/08/14/blog/21.png","55fb03606e2f50ac8d9edfcadb940b9e"],["2018/08/14/blog/22.png","e857eaecf58cddb97e4883fcda3c0a9e"],["2018/08/14/blog/23.png","93deeb27feead3d28d2058d17ef1442c"],["2018/08/14/blog/24.png","e30074bf4b2113e97a838e49eb0e880d"],["2018/08/14/blog/25.png","45432e624ba5115276814316aca7e87a"],["2018/08/14/blog/3.png","9e2126e7a9848bdff55766ec74de6490"],["2018/08/14/blog/4.png","f838984cf3351403c3835fa05644365b"],["2018/08/14/blog/5.png","62b0dad6aa8ac1cd8be8882312a611c0"],["2018/08/14/blog/6.png","4eab4a4643c83fa0c28f4addcce27293"],["2018/08/14/blog/7.png","63f1f84b5d9b5c5286e13d32124a5d6f"],["2018/08/14/blog/8.png","6a0160a2fb843155d18a4c7004d47230"],["2018/08/14/blog/9.png","ad83ff46d8e835ae277c1571eb966065"],["2018/08/14/blog/index.html","08cf43d7a42cde25b28101e2c3e97dc8"],["2018/08/15/2006 飞行员配对/index.html","e0ebad1d65526eba16b4246d65e30a02"],["2018/08/15/D.Tea/index.html","a6d8fd717f95e0afafa290412c28d006"],["2018/08/15/F.The Best Path/123.png","edf03bde9f0e9543adab7c1fbd3c4fd3"],["2018/08/15/F.The Best Path/index.html","578e4b84a0de1bf1cfdd3f0bba16b201"],["2018/08/16/1459 迷宫游戏/index.html","488ccc6777de85ba294bf2cf4270cba3"],["2018/08/17/1264 线段相交/index.html","6f646b02fc4e4135729db9aa3e602f28"],["2018/08/17/1265 四点共面/index.html","a0fa353d61ea0957b56712953b658d81"],["2018/08/17/1298-圆与三角形/1.png","06739f77f1513ed2b72a2e230f2b0197"],["2018/08/17/1298-圆与三角形/2.png","1ca9cdaa6670f957651d3e2c711cb4d0"],["2018/08/17/1298-圆与三角形/3.png","692f6a9bc87047f9253de6b8031f1b0e"],["2018/08/17/1298-圆与三角形/index.html","0928ab2105f3ce3f1559412cd7b442a8"],["2018/08/17/1384 全排列/index.html","8fa87d262216e793c7871dc336a73dab"],["2018/08/18/1240 莫比乌斯函数/index.html","ae005910adce16325ed80ee88226f6ae"],["2018/08/18/1256 乘法逆元/index.html","4b8a4161a36fad9bf83cbb65a09260ab"],["2018/08/18/1365 浴火银河星际跳跃（并查集）/index.html","9deb1d60d5261812bfee03168711f78b"],["2018/08/18/Teemo's bad day（并查集）/index.html","84984264d1b20a1dec45e40431dd4d3f"],["2018/08/18/hdu 1198 Farm Irrigation（并查集）/index.html","655311f7753843ff1a8738b43fc7046a"],["2018/08/18/hdu 1232 畅通工程（并查集）/index.html","fbf3e566137384fe23bf5d9b54cb9b95"],["2018/08/18/hdu 1272 小希的迷宫（并查集）/index.html","1378b5ab04900e389eacb3d74f860a42"],["2018/08/18/hdu 1325 Is it a tree？/0.png","bb9e3bdbfa44e52c467de25f90898b0e"],["2018/08/18/hdu 1325 Is it a tree？/index.html","bbf293bd283dd3033ad3ce78bc2110ad"],["2018/08/18/hdu 1856 More is better/index.html","6deeb4f36d88bdfc0b8bae34ad6f3640"],["2018/08/18/poj 1182 食物链（并查集）/index.html","fbbe6f28ed12b0eff47228021c127157"],["2018/08/18/poj 1988 Cube Stacking（并查集）/index.html","c8c409ca1bf12d15d5126cd36c758bb4"],["2018/08/19/Minimum Cut（读题。。）/index.html","771fbcecf79cae81358d4208550d193a"],["2018/08/19/Ponds（拓扑排序）/index.html","ac05b2a65b513d8f1b125141434d2195"],["2018/08/19/hdu 1102 Constructing Roads(最小生成树)/index.html","df78eec99f6a45d684f4b4c9028f99a9"],["2018/08/19/hdu 1162 Eddy's picture（最小生成树）/index.html","e2d0a8c19659f5092541b34929fbb956"],["2018/08/19/hdu 1233 还是畅通工程（最小生成树）/index.html","8bc210c4c466b019d3774ac87af71f86"],["2018/08/19/hdu 1301 Jungle Roads（最小生成树）/index.html","01368bc452c2c3120c1d6722827ee433"],["2018/08/19/hdu 1846 Brave Game（巴什博弈）/index.html","43b4ec26c4b35a6320f471ec76e20e99"],["2018/08/19/hdu 1849 Rabbit and Grass（尼姆博弈）/index.html","728134d42fc420465ad163f48247c61c"],["2018/08/19/hdu 1863 畅通工程（最小生成树）/index.html","04a2498a17ddd8f63b2c64ee0695d8bf"],["2018/08/19/hdu 1875 畅通工程再续（最小生成树）/index.html","2d43ca4f96f29ba79e21529e91aded9f"],["2018/08/19/hdu 1879 继续畅通工程（最小生成树）/index.html","198f375eeafb5b29a675f61c9fcd3399"],["2018/08/19/hdu 2176 取(m堆)石子游戏（尼姆博弈）/index.html","2f38c73f7f2c4ac1a8da187d11f26207"],["2018/08/19/hdu 2177 取(2堆)石子游戏（威佐夫博弈）/index.html","ffb5ad6af862230f7358dee75d7cfa03"],["2018/08/19/hdu 3371 Connect the Cities（最小生成树）/index.html","fde05446e595a075a74602da77eda650"],["2018/08/19/poj 1704 Georgia and Bob（尼姆博弈，阶梯博弈）/index.html","f699f0ea903931942ef3d0fffac64d43"],["2018/08/19/poj 1740 A New Stone Game（博弈论）/index.html","319fdc53ab613d150ee31d0a94e8a9a7"],["2018/08/20/Alice和Bob的Nim游戏（博弈，数列，矩阵快速幂）/index.html","18a59ed6cc479fb45ceaa2097fd9e461"],["2018/08/20/Pawns（博弈，思维）/index.html","6a82361cbaaec2d3b9a8641f67dfa873"],["2018/08/20/cf #487 C. A Mist of Florescence（构造）/index.html","bcd9dc3c94a8e326d1aeaf584486d0fb"],["2018/08/20/hdu 1404 Digital Deletions（sg函数暴力打表）/index.html","439e27c8bb5461f36ea3a58beaf1ce6a"],["2018/08/20/hdu 1527 取石子游戏（威佐夫博弈）/index.html","cf6efe68b7ea3d8d3c04aa716ebfbf3b"],["2018/08/20/hdu 1564 Play a game/index.html","d2b15f62bc17180c7a1723652fd9212b"],["2018/08/20/hdu 1729 Stone Game（尼姆博弈，sg函数）/index.html","08d336ad897728913fd39fa9ceed4fcb"],["2018/08/20/hdu 1847 Good Luck in CET-4 Everybody!（巴什博弈）/index.html","699788d9133b5a1d5ac37e91a819ad9d"],["2018/08/20/麻婆豆腐（思维）/index.html","19ceed654013dc266f091f2f3b49804a"],["2018/08/21/1212 无向图最小生成树/index.html","cb54491e7e5032b9a673b4c2ca2350c6"],["2018/08/21/1242 斐波那契数列的第N项（矩阵快速幂）/index.html","ff7a2b9130948e0e24a722f144efc7fe"],["2018/08/21/CTU 2017 G.Ice cream samples/index.html","1e48695f3c1c91dbb286509b62968f94"],["2018/08/22/1079 中国剩余定理/index.html","eacb5e5703ab5e7c74414cdf22080f1e"],["2018/08/22/1181 质数中的质数（质数筛法,埃筛素数）/index.html","9488e4aef1fcdaecee23216eb1d141d2"],["2018/08/22/1183 编辑距离（dp，字符串）/index.html","1614676705f89af245dface749175df3"],["2018/08/22/1185 威佐夫游戏 V2（高精度，乘法模拟）/index.html","d981218b80cd24fcceee8b777891d33c"],["2018/08/22/计算黄金分割数小数点后1000位/index.html","c1307242e82cc082c68d1dcb8e067f3d"],["2018/08/23/1136 欧拉函数/index.html","7837a928f7734a675ef8c913fc8808d5"],["2018/08/23/1137 矩阵乘法/index.html","ecc735254df981ae43114e26cd889b2c"],["2018/08/23/1174 区间中最大的数（RMQ，dp，线段树）/index.html","b1b3dbfd95fb35f30df29c554cce07d3"],["2018/08/29/blog2.0/10.png","3cd0fe3cd3452c9dd97b9d5ee0bd4458"],["2018/08/29/blog2.0/11.png","bf6175dc6fd8ef1acc79cac9fa7c6433"],["2018/08/29/blog2.0/12.png","508313fcbecb74f5a1932cdbac8d3202"],["2018/08/29/blog2.0/13.png","76858f57b99318fe98393a5634c04da3"],["2018/08/29/blog2.0/2.png","f9bcc45a5d717e826da1781594a0f123"],["2018/08/29/blog2.0/3.png","7261f2c1fa95e14d799e8f69629abf97"],["2018/08/29/blog2.0/4.png","4ae27aa35d868d74a68f31188566b9f2"],["2018/08/29/blog2.0/5.png","b253dac2e0d802e2970d875791f0c8e5"],["2018/08/29/blog2.0/6.png","2757c888e17cb2549ecd875d763c9eb0"],["2018/08/29/blog2.0/index.html","a32d4ad896a49817ca1ea440fc522fef"],["2018/08/29/blog2.0/zx.gif","6f42eb62f43e5b44b1972b630cb17749"],["2018/08/29/hexo3/7.png","e76eaa82952bd4367acd6b72f65580fa"],["2018/08/29/hexo3/8.png","4336b7d09fb2e315db665bf8c73b5217"],["2018/08/29/hexo3/9.png","fb9b016ac51e05b333c19abc4ee9fa98"],["2018/08/29/hexo3/index.html","a48437c499378400da829f708b5fcbc2"],["2018/08/29/hexo4/index.html","ce314a8541ba7079bb174cc6355c1509"],["2018/08/29/hexo5/1.png","51734839f733b373e603ffbce72527fa"],["2018/08/29/hexo5/2.png","34564772ce1c201d0d66bbf292f15bd1"],["2018/08/29/hexo5/3.png","e354d2bc7dc3fc31590643c24e1bf547"],["2018/08/29/hexo5/index.html","26696c6f27a1c522b57f7e05cc54d343"],["2018/08/30/wxpy/1.png","bdffc3a75d7f5c2c24c060e68857ccd7"],["2018/08/30/wxpy/2.png","1ff9504b890e1c1843a14485054912a0"],["2018/08/30/wxpy/9.png","8fe6c89c1da920de02782343553506a8"],["2018/08/30/wxpy/index.html","a636233d7abfa62430b2418fae54902d"],["2018/08/31/A. Too Rich/index.html","cc1fabfb6845a247ae292b527100db78"],["2018/09/04/C.Catalan Square/index.html","a18d2cb90c7912294e27cc4a1fa4ac71"],["2018/09/04/hdu1002/index.html","007e7e545ec43d8fa49da7c00bd49d13"],["2018/09/04/hdu1042/index.html","4e607da67c724892f0b82e603a3f8407"],["2018/09/04/hdu1047/index.html","b71d02fcd6d23875472a62a0f8d89d17"],["2018/09/04/hdu1715/index.html","395307eba9a0bc95fd818a11f986a13e"],["2018/09/05/hdu1063/index.html","f3b319842014f0c6def10a53145a682a"],["2018/09/05/hdu1250/index.html","18b965339d456fd7ade4d3845ba86f79"],["2018/09/05/hdu1316/index.html","3df322544813c25db381f44a486625c2"],["2018/09/05/hdu1753/index.html","92135eeb95b9d02c33ac98697a1cfecb"],["2018/09/05/java大整数题集/index.html","284b66bbe2f6d1a40eed6fab7784bbf8"],["2018/09/06/hdu 4523 威威猫系列故事——过生日（java大数）/index.html","649985d312caddbae3bacd2a10a8d1d6"],["2018/09/06/hdu 5920 Ugly Problem（贪心，java大数）/index.html","a4885f5166a849f9e77c305eb35c65a0"],["2018/09/06/hdu2054/index.html","99047f07a7d548eb1d6dc25afaf4f335"],["2018/09/07/hdu 6222 Heron and His Triangle（打表推公式，java大数）/index.html","337e32464a439b9d312fd68102f5e282"],["2018/09/07/hdu1212/index.html","ce1da4962a7cad8a09b438e49b55e9b0"],["2018/09/07/hdu5050/index.html","6293b45cedb863cf078e49505bf692c3"],["2018/09/08/hdu 5047 Sawtooth（java大数，分割平面问题）/index.html","477d2117a25933d5ca6f97eb7f2fe14f"],["2018/09/09/hdu 1502 Regular Words（dp，java高精度）/index.html","91fc954646a5cf049f9cd7f82202cf67"],["2018/09/09/hdu 5973 Game of Taking Stones（威佐夫博弈，java大数，二分求高精度根号）/index.html","96c17d607de524170502c49454531072"],["2018/09/09/hdu1013数根/1.png","6fb50bc748c66ede9c7f67c8f90cd51c"],["2018/09/09/hdu1013数根/2.png","6554b911c2effd2ff527dec3a54a7690"],["2018/09/09/hdu1013数根/3.png","b5e6bd2371c2246eceb5aec33c7452e4"],["2018/09/09/hdu1013数根/index.html","7668e6dfa032d6112aab0e2d01edd05f"],["2018/09/13/Best Solver/1.png","97162fc4e9450f686c9ec47de0d5f1cf"],["2018/09/13/Best Solver/2.png","b9711bf3506abb7c543a4ddce3543caa"],["2018/09/13/Best Solver/3.png","5584e05fc54aa7ef50f30ad708b45707"],["2018/09/13/Best Solver/index.html","5774ca00fb177643d0772649d29a8961"],["2018/09/13/Fence Building -- ACM-ICPC 2017 Asia Urumqi（欧拉公式，分割平面，大组合数）/index.html","6d07729dfe9c6d4460d2e89bfa0a7952"],["2018/09/13/Sum of the Line/1.png","00e7c3111d5b98b0abd45d9c5bd6075a"],["2018/09/13/Sum of the Line/index.html","f8a695aeec8737975d8c8a1ea3e971ef"],["2018/09/13/Teemo's formula（推公式）/index.html","774b09d18a4beacdb3db95602d6cc16b"],["2018/09/13/cf 1008D Pave the Parallelepiped --（容斥，gcd，推公式）/index.html","1857aba4b7b1d23c9286b2168b365b15"],["2018/09/13/hdu4059/1.png","ffd6fe675f7a71c395e245b2ac065586"],["2018/09/13/hdu4059/index.html","55c60990cea2917dde3bc5740a8d2f7c"],["2018/09/14/B.烟花 -- 牛客练习赛26（概率dp）/index.html","ccc3c626b287a350723c322827851b1a"],["2018/09/14/D.xor序列 -- 牛客练习赛26（线性基）/index.html","c09bed4dc6a1888ddb6235c829e750ef"],["2018/09/15/Entertainment Box -- Nordic Collegiate Programming Contest 2015​（贪心，读题。。）/index.html","d76bc8fb11e6a2fb6748de014e838de6"],["2018/09/15/Marisa’s Cake/1.png","95a22c39fdeb437ac1daae47dfc225a4"],["2018/09/15/Marisa’s Cake/2.png","27c77dc8d4aa5571ae4ed595ca0cd46e"],["2018/09/15/Marisa’s Cake/3.png","962e4b3f0296c87628711465eb4a1df0"],["2018/09/15/Marisa’s Cake/4.png","d9c390dbf11fe24c7bbb5f7caad16282"],["2018/09/15/Marisa’s Cake/5.png","97815f7653734ed925d23ba238713a67"],["2018/09/15/Marisa’s Cake/6.png","0228d52847831e6e5dddf5fc2e981c18"],["2018/09/15/Marisa’s Cake/index.html","7e28ca7fcff8e5a2ac0184893b13258a"],["2018/09/15/codevs 1425 最长公共子串（STL）/index.html","cbb18a8c7485ea9ff3c87fbcc50d19fb"],["2018/09/15/poj 1328 Radar Installation（贪心，线段交集）/index.html","66978b0124dfbd2a4eb53ae173995c00"],["2018/09/16/1118 机器人走方格（组合数）/index.html","345c3bffef98d6c5cc043a11f20f162c"],["2018/09/16/1134 最长递增子序列（dp）/index.html","68b5a7355524062446a2b1cbb9cd71ec"],["2018/09/16/1135 原根（原根性质）/index.html","ac382f19ce911ac7b85205166487607d"],["2018/09/16/斯特林公式/1.png","221b24460a79aaded78fd91aa7ff9879"],["2018/09/16/斯特林公式/2.png","23bbb7242a3a0e6e31cac1922a67e562"],["2018/09/16/斯特林公式/index.html","cbba3966a053812a24cac4198c013047"],["2018/09/17/1058 N的阶乘的长度（斯特林公式）/index.html","2bf1a8b35a0932513cec5f66bea0614e"],["2018/09/17/1073 约瑟夫环（递推）/index.html","e4b20771555e18ebfcf95495bb7456e8"],["2018/09/17/1081 子段求和（前缀和，树状数组，线段树）/index.html","69af33864bfd4ba77b2b307965f59923"],["2018/09/17/1085 背包问题（01背包）/index.html","70c093fad23dec474171cab84621bb58"],["2018/09/17/1086 背包问题 V2（二进制优化多重背包）/index.html","164c4156045c31a9647fc927e94207a8"],["2018/09/17/1106 质数检测（米勒罗宾判素数）/index.html","e39c705896c8ee321d9fd995be8051f8"],["2018/09/17/1257 背包问题 V3（二分，贪心）/index.html","d4c54b41f48e26330555e31c4b8b38cc"],["2018/09/18/1006 最长公共子序列Lcs（dp+路径打印）/index.html","b1495caaca2faf9f8588107dcb0b8813"],["2018/09/18/1027 大数乘法（java大数）/index.html","f36b009fb846b40c58b4249b1833bb24"],["2018/09/18/1046 A^B Mod C（快速幂）/index.html","009d07cc119fe14d9fb94fbc42043c45"],["2018/09/18/1049 最大子段和（dp）/index.html","f1c7e81e9d271d640240fdfda5df100e"],["2018/09/18/1057 N的阶乘（java大数）/index.html","a55505950bea38c9deca11bd5846cf02"],["2018/09/18/1066 Bash游戏（巴什博弈）/index.html","b16a1e29bfd92c815572eff5945df499"],["2018/09/18/1069 Nim游戏（尼姆博弈） /index.html","4c8bb42438e9e3e908a86d3ff33bf5c4"],["2018/09/18/1072 威佐夫游戏 /index.html","e15eae701e65c53b10488fe5d172218b"],["2018/09/18/1088 最长回文子串（Manacher算法）/index.html","5d6d016da9386394846eca45c25c81d3"],["2018/09/18/1089 最长回文子串 V2（Manacher算法）/index.html","5eb7226cc99c7716a01ca64386b50c14"],["2018/09/19/1000 A + B/index.html","b5375b626c40d4e2d69512022dfe2ed9"],["2018/09/19/1005 大数加法/index.html","19039734b666c8dd51d51434ae630fe5"],["2018/09/19/1008 N的阶乘 mod P /index.html","55e0978de639a670f6a90cd7c52dbd35"],["2018/09/19/1011 最大公约数GCD /index.html","7b4091ef33ae2ec73aa2469b3b437e86"],["2018/09/19/1012 最小公倍数LCM/index.html","5b9cd16026025e7ca1fddc9e740be24b"],["2018/09/19/1018 排序/index.html","b4b9dcb7f492c0aea6f6c7d00735333f"],["2018/09/19/1019 逆序数（树状数组，归并排序）/index.html","9bc7a36ff219c9b256eec6e654129814"],["2018/09/19/2133 排队接水（贪心）/index.html","5b410849d8ae479656f16e8017c10732"],["2018/09/19/51nod 1960 范德蒙矩阵（贪心）/index.html","20129a1ccbd14ff906adfd189f3d0991"],["2018/09/19/51nod 2000/111.png","942e3a11adee080d2003ce877c168c21"],["2018/09/19/51nod 2000/index.html","d9ddb4ce4898933c7ebdb075147d0091"],["2018/09/20/1637 幸运数字转换（死循环）/index.html","d3db075a4da3657e7336eb749c58ec97"],["2018/09/20/1829 函数/1.jpg","8ebc8225a601418b2f4c6f48a3a740ae"],["2018/09/20/1829 函数/22.png","12b74cf703cb7a96a8d9533122cc1a6a"],["2018/09/20/1829 函数/index.html","ef0f72e4d2b111cc759abed08fae9ff7"],["2018/09/20/51nod 1717 好数（找规律）/index.html","f39f7325f86ad333c56bb5218d718140"],["2018/09/20/51nod 1946 特殊表示法（斐波那契性质，卡输入输出）/index.html","720b3a13ab44224156095d047fc33372"],["2018/09/22/51nod 1580 铺管道（CF 518 F.Pasha and Pipe）/index.html","b8a010fddc18fa049bd31762fe4de30d"],["2018/09/22/51nod 1799 二分答案（二分，阶乘分块打表）/index.html","0316108fdea6274e2cd599cff4c9ab42"],["2018/09/23/51nod 1574 排列转换（CF 584 E.Anton and Ira）/index.html","1524638854cc13411a2518727a86315b"],["2018/09/23/51nod 1791 合法括号子段/index.html","e75349d93426344404e0b40997d919d0"],["2018/09/24/51nod 1557 两个集合（STL set）/index.html","fefec34055b8ae6e9c88a1658138e548"],["2018/09/24/hdu 6298 Maximum Multiple/index.html","fe15882c63963dc8ff10d83fca3630af"],["2018/09/25/hdu 6299 Balanced Sequence（贪心）/index.html","72f9df8e999d83072d1cca58fd6e6495"],["2018/09/25/hdu 6300 Triangle Partition（构造）/index.html","2f4ad5ad9297a77291aa34bca99dacaf"],["2018/09/25/hdu 6301 Distinct Values（贪心，set）/index.html","f3a21a07a975b8d81475563100084801"],["2018/09/26/51nod 1675 序列变换（莫比乌斯函数）/index.html","e6bf878b3fb85d12200a6504c106a04a"],["2018/09/26/hdu 6304 Chiaki Sequence Revisited（二分）/index.html","f9557516ef06d35c2f91068b36231d48"],["2018/09/28/51nod 2020 排序相减（6174猜想）/index.html","a8eb1a0b5fe603b765263fb987324c22"],["2018/09/29/51nod 1015 水仙花数/index.html","19f0e36214b1d9c70577b3d3bdadf360"],["2018/09/29/51nod 1080 两个数的平方和/index.html","9d454bd16d43a090275e3decdf2067c8"],["2018/09/29/51nod 1082 与7无关的数（打表）/index.html","ad17b2de5ba0b06addb51c3d514fde29"],["2018/09/29/51nod 1083 矩阵取数问题（dp)/index.html","619c1492218b2f456a5067bb34b044c2"],["2018/09/29/51nod 1087 1 10 100 1000/index.html","e7b8ddd0c718a0d892f1e73c30ce5c3b"],["2018/09/29/51nod 1090 3个数和为0（暴力，二分）/index.html","44bbce04aaeaae5ff2f561f012013f33"],["2018/09/29/51nod 1091 线段的重叠（贪心）/index.html","139d990062d7351fdadad94603df4272"],["2018/09/29/51nod 1182 完美字符串/index.html","f3a94658f9682301f3f76955f3fb022c"],["2018/09/29/51nod 1267 4个数和为0（二分）/index.html","419d4c984b621257de761074a171e8a4"],["2018/09/29/51nod 1283 最小周长/index.html","8edaf2a557cdcadf8398c1f088b5744a"],["2018/09/29/51nod 1284 2 3 5 7的倍数（容斥）/index.html","9eb4d6875d3622850e3f5b775fbb05e9"],["2018/09/29/51nod 1289 大鱼吃小鱼（stack）/index.html","06cd43c190213f99ba36ff5710ce751a"],["2018/09/29/51nod 1305 Pairwise Sum and Divide/index.html","08434d18fee882bc4549d8e85723f9fa"],["2018/09/29/51nod 1344 走格子/index.html","2a6ef982359e53e47c1f49457365df53"],["2018/09/29/51nod 1347 旋转字符串/index.html","aa858455202b68ac61c7e623614e52d8"],["2018/09/29/51nod 1381 硬币游戏  /index.html","031298d88c33d02d85a7fc25c1752c67"],["2018/09/30/51nod 1004 n^n的末位数字（快速幂）/index.html","f3ec0dbbb89b38cb8a6ae4b66df99745"],["2018/10/01/51nod 1001 数组中和等于K的数对/index.html","aac15da298f535d29e9ab1a50fcdc53f"],["2018/10/01/51nod 1002 数塔取数问题（dp）/index.html","dd42c6d5fbc6219595dd4e316d8daa7d"],["2018/10/01/51nod 1003 阶乘后面0的数量（勒让德定理）/index.html","632d25d015624bd5e4d70cf7834cd0fd"],["2018/10/01/51nod 1596 搬货物/index.html","0b6f7cb4392b889b23e4ccad641ceb29"],["2018/10/01/51nod 1649 齐头并进（CF 601 A. The Two Routes）/index.html","68161661077be129e1c5c51e47ae8e37"],["2018/10/01/51nod 1873 初中的算术（java高精度）/index.html","56820fffd92480dcfbd70041cc38c586"],["2018/10/01/CF 1029 F. Multicolored Markers（暴力）/index.html","4950e2e3ccd2bef9d84d2329368a3523"],["2018/10/02/51nod 1521 一维战舰/index.html","da9cf4e63c6de0e33a77a51d318be0e6"],["2018/10/02/C. Greetings!（枚举，贪心，dfs） -- The North American Invitational Programming Contest 2016/index.html","770d2ac0ef587e271a8e81de524f5df5"],["2018/10/03/51nod 1413 权势二进制（CF 538 B. Quasi Binary）/index.html","c8ab0adb66266588c5772244e40742fe"],["2018/10/03/51nod 1433 0和5（能被9整除的数）/index.html","7288c613e5dc662bb6d665221c6baf9a"],["2018/10/03/51nod 1489 蜥蜴和地下室（dfs）/index.html","e9a920664ce5a932411da88c36b15f9c"],["2018/10/03/51nod 1629 B君的圆锥（推公式，三分）/index.html","9d70e8ee4d7a414114496bd4ea452d10"],["2018/10/03/B. Pocket Cube（模拟）/index.html","0f77229d09da225092ba8daf3ab3b92f"],["2018/10/04/51nod 1432 独木舟（贪心）/index.html","19fbe7c08dec16a257e28e6e6d604b32"],["2018/10/04/C. Stretching Streamers（NAIPC 2017）（记忆化dp）/index.html","fe9341a12abcd4b7a5db239593bf8229"],["2018/10/04/CF 327 C. Magic Five（等比数列求和）/index.html","fd81ce99c1d379549c494081c7e2dfe4"],["2018/10/04/hdu 1561 The more, The Better（树型dp，依赖背包）/index.html","6f8416bcc1799a000e395eb82f44906b"],["2018/10/05/51nod 1138 连续整数的和/index.html","f7c11e3b06e46956ebb9778c05d62f37"],["2018/10/05/51nod 1266 蚂蚁（贪心）/index.html","6ea4728674b6f4e44b33b835763c74ab"],["2018/10/05/51nod 1278 相离的圆（贪心）/index.html","a3701b7712713b594c837b512bb0f154"],["2018/10/05/51nod 1279 扔盘子（stack）/index.html","14bfcc59384647b9f5bcc7cec01cfe01"],["2018/10/05/51nod 1417 天堂里的游戏（博弈）/index.html","216049a5dbdfabf43c65516812a68b43"],["2018/10/05/51nod 1428 活动安排问题（贪心）/index.html","bdfbaf9d6bbde33c52dda9bc2da3726f"],["2018/10/06/ 51nod 1133 不重叠的线段（贪心）/index.html","9bffd48e19b7192240401c1514ae65f0"],["2018/10/06/51nod 1126 求递推序列的第N项（找循环结，矩阵快速幂）/index.html","ddc8514438783311262461c08ca4e47f"],["2018/10/07/51nod 1094 和为k的连续区间（前缀和，map）/index.html","fd8882c99b62555616e3c9594441430b"],["2018/10/07/51nod 1095 Anigram单词（map）/index.html","240c15e55a114efaa3229ed53f3c1cbe"],["2018/10/07/51nod 1126 1119 机器人走方格 V2/index.html","2f4baf87e4a673b60d7746dea6ae4122"],["2018/10/08/busuanzi计数功能失效及解决办法/index.html","5f8864a8f417df052655825c26451d5f"],["2018/10/09/hdu 3864 D_num（Pollard Rho大因数分解）/index.html","98dd3ec423df821a2438af14be1a621a"],["2018/10/09/大因数分解 -- Pollard Rho算法/index.html","dec8abfb152695e8201915a9142d42e9"],["2018/10/10/51nod 1092 回文字符串（dp，lcs）/index.html","b1972aec84910407874017a520662a4d"],["2018/10/10/ural 1073 Square Country/index.html","982ae922534bf7147e4ea1d361a6974d"],["2018/10/10/ural 1593 Square Country. Version 2（n最少能表示成几个完全平方数的和）/index.html","8595cfa61173ad9d8778699d917e43a9"],["2018/10/11/51nod 1007 正整数分组（01背包）/index.html","5cb14ad669ab59f89532c0506db6ec51"],["2018/10/11/51nod 1010 只包含因子2 3 5的数（打表+二分，stl） /index.html","abc0c6039ae00dbb45c3beebb799a4c5"],["2018/10/11/51nod 1014 X^2 Mod P（枚举）/index.html","b79d7cd80a0bade10f31d7903885ca0c"],["2018/10/11/51nod 1024 矩阵中不重复的元素（暴力）/index.html","0097d741594ba2e4a9203739850d3cc3"],["2018/10/11/51nod 1050 循环数组最大子段和（dp）/index.html","2a465ab61710115604baff746da46489"],["2018/10/11/51nod 1067 Bash游戏 V2/index.html","f606a496285e8141726f2ca6091dfd0c"],["2018/10/11/51nod 1068 Bash游戏 V3（巴什博弈）/index.html","6081eb00411fe4a3676d874683af8e9b"],["2018/10/11/51nod 1070 Bash游戏 V4（斐波那契博弈）/index.html","d35865fbcee2b5d514e4af890c59aad1"],["2018/10/11/hdu 2516 取石子游戏（斐波那契博弈）/index.html","dc225083655a1366519cacd20126e964"],["2018/10/12/51nod 1031 骨牌覆盖（斐波那契）/index.html","9d2ec61f50c9e9ba8354ae45af3ca1bd"],["2018/10/12/51nod 1033 骨牌覆盖 V2（插头dp，矩阵快速幂）/index.html","9d2c007a1e3a2a1acfeec5191e8aab62"],["2018/10/12/如何给个人博客安排上专属免费域名[hexo+github+freenom]/index.html","b2509683485ec140bff3641deb2dec18"],["2018/10/13/51nod 1315 合法整数集/index.html","6416328fd563e465fb6b82d01143b2fb"],["2018/10/14/《奇遇人生》 第1期：赞比亚荒野呼唤！阿雅小s探访大象孤儿院，遇残忍盗猎流泪/index.html","e978349f29dced3a12ef0de395e3be55"],["2018/10/14/《奇遇人生》 第2期：美国追龙卷风！春夏与阿雅公路捕风，街头听歌落泪/index.html","0f0057081d23a2ac2fa6bd76fc5bf955"],["2018/10/14/《奇遇人生》 第3期：印尼攀峰！窦骁登5000米查亚峰，阿雅因高反放弃痛哭/index.html","ffe205494705fd9ab5ccdea9ac858ec2"],["2018/10/15/Codeforces Round 516 Div. 2/index.html","c61e92f5f2eed9959a4a8481ca8041bb"],["2018/10/15/ural 1309 Dispute（相当奇妙的递推）/index.html","d0bc5706e058c889e0db9a5dc6b0f568"],["2018/10/15/「Python+有道」实现简易中译英英译中命令行字典/index.html","a732e8d366207ea68ac1bedc7c086ad1"],["404/index.html","d724a333008e13a135422650e5dfae09"],["VEN/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["VEN/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/three/README.html","61ab8ee1d7e135b9830c8360ff8da68d"],["VEN/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["VEN/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["VEN/three/gulpfile.js","3023520dd67090a4541b144421326827"],["VEN/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["VEN/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["VEN/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["VEN/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["VEN/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["VEN/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["VEN/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["archives/2018/08/index.html","c65e80942f5c267ace5adac486f7aae5"],["archives/2018/08/page/2/index.html","bf9443033f584a6740e72a68834ff76c"],["archives/2018/08/page/3/index.html","a43dc4a854761acda7eda0b534c190bb"],["archives/2018/08/page/4/index.html","6d1409f8d8835690cf2705f253341ac0"],["archives/2018/08/page/5/index.html","c5278f369449acf37658de05689748b1"],["archives/2018/08/page/6/index.html","7ce1b498b2240add8a1a9d207746ca02"],["archives/2018/08/page/7/index.html","54c323647ef2bc95ea29738eff5a3e81"],["archives/2018/09/index.html","76949c2d3b27b9f206d84d385cf2aba9"],["archives/2018/09/page/10/index.html","b34beb05f77ff32d6dc7f79092df7112"],["archives/2018/09/page/2/index.html","659bba5644ffaf499b9a5f54bcd1ee2e"],["archives/2018/09/page/3/index.html","17db1d3387348a323cb40dfcec3ccdaa"],["archives/2018/09/page/4/index.html","3afcde233a1dda7dbd899e6ac247977e"],["archives/2018/09/page/5/index.html","ddeba422e3494c87e645f5d6227cb6c1"],["archives/2018/09/page/6/index.html","9a80b2e2a52e6c9496ebbe87e6619c1d"],["archives/2018/09/page/7/index.html","625d6174d087c0b0f8d6be26dabeed55"],["archives/2018/09/page/8/index.html","e8e39db2e853a9c725206b420916290e"],["archives/2018/09/page/9/index.html","eb3888faa73694ad236fb61270ca9b9c"],["archives/2018/10/index.html","f878813e7ea39f50eb8c1b9b05d9e5a4"],["archives/2018/10/page/2/index.html","b30e96af553470d496456a432bcd8c11"],["archives/2018/10/page/3/index.html","42f3b23cced0c4057433064a97037e1a"],["archives/2018/10/page/4/index.html","b32375864f206e7159b7db4d7fd42c53"],["archives/2018/10/page/5/index.html","5ddbf4bb150fe1d02c0e550f28517b51"],["archives/2018/10/page/6/index.html","4840821241a4b4ae708d43841b3a4936"],["archives/2018/index.html","ebee19f8d01882ee6a1abea088005551"],["archives/2018/page/10/index.html","a4f98000b06a503725edcd5597c5eac2"],["archives/2018/page/11/index.html","3462cc4b219dc405652454347c07b1a1"],["archives/2018/page/12/index.html","0d46cdede69e9829cebc7a7d4ebb919b"],["archives/2018/page/13/index.html","b281422812127b81d0b563bfe514525d"],["archives/2018/page/14/index.html","e5b35c0facddf1203c9a9ebd600b44bc"],["archives/2018/page/15/index.html","a9bce14387f3150850ae53940a0c30c1"],["archives/2018/page/16/index.html","7e8399d5f1a03fd038b892385701a9bf"],["archives/2018/page/17/index.html","2da4ae918e075c2e089655ffdd8cf4bb"],["archives/2018/page/18/index.html","31c3ad4a5ab16d777060ce0c89a83215"],["archives/2018/page/19/index.html","8e5e3602663b8af9433c9ce54645537a"],["archives/2018/page/2/index.html","76b362b642dc651255d72c029a4089ba"],["archives/2018/page/20/index.html","1491cf7d36e150f05bd011f640affcd8"],["archives/2018/page/21/index.html","e1453852cedbc1d593d03fb07730c221"],["archives/2018/page/22/index.html","708df7b0af0e461d6d78328007d25a8a"],["archives/2018/page/3/index.html","4a15edb264cf9c8d3e723730207ce2cc"],["archives/2018/page/4/index.html","c70b4e153a8da9f4e57e247271cf9d9b"],["archives/2018/page/5/index.html","adbf0e64a7dd99121b30a0146c1e761b"],["archives/2018/page/6/index.html","504ca5cf56f7956fdc507f052d0bc64e"],["archives/2018/page/7/index.html","1b48f25fa0ab8b42673d41c67c002052"],["archives/2018/page/8/index.html","f3233526fc62707bdaea468654404b9e"],["archives/2018/page/9/index.html","e2a04280c6fcd71923650649b1f1a040"],["archives/index.html","77d93af07bcdb07dec47a2a9cbe5df18"],["archives/page/10/index.html","b4970a3b44262363358c9d8a5af43989"],["archives/page/11/index.html","0487e684c62319e525e147f6e574f5bf"],["archives/page/12/index.html","9c3b39025256a7d4a0ac2a71a04ce60d"],["archives/page/13/index.html","349e3c24af4d2db9058c259db8702383"],["archives/page/14/index.html","d0457af8cc342e0a2a86aed2431cff4b"],["archives/page/15/index.html","890bbcf62927c605d5c43fa5ce37d733"],["archives/page/16/index.html","1423c0fc39fd54d0aac4cf8dcfa04180"],["archives/page/17/index.html","21132df074f6fa3563e250be1e2b1397"],["archives/page/18/index.html","429d42be34f7d70bc596230276508b2d"],["archives/page/19/index.html","58877a34f38cc20b96575b26c39254d1"],["archives/page/2/index.html","455eb6e2bc2e00ed00a3701d446ef9eb"],["archives/page/20/index.html","a6d7090f6aa0e340c3e6c7fa2a62fba9"],["archives/page/21/index.html","f50bf8001b750d67bcec6b16154429c5"],["archives/page/22/index.html","1aecc7cfa8fe9478d63c36a15321235b"],["archives/page/3/index.html","16acea850913a60387429ac2f605c066"],["archives/page/4/index.html","f929426b449d6f4ad49f909050a4a536"],["archives/page/5/index.html","ba10b183985c9a1dfe4aee6da9b2bcef"],["archives/page/6/index.html","9523e53fc6887eb963d1a3cfb638de6a"],["archives/page/7/index.html","442959f2cf4eb739277f641644acbe91"],["archives/page/8/index.html","9f67369c7e2ea79e882c5ae09c609293"],["archives/page/9/index.html","0c2a2817b20ae53e8518eb73d81b3a24"],["baidu_verify_DfMf5XqJUb.html","35588404228c23a5e5799811676d161d"],["categories/51nod基础题/index.html","05f05e1e73a9ecaf0701a1586ef3d4f2"],["categories/51nod基础题/page/2/index.html","7c5c4ad1ed8020a00b2d8a814941eeea"],["categories/51nod基础题/page/3/index.html","a1a7f5a305c804939884e3817fd035ad"],["categories/51nod基础题/page/4/index.html","7c3c66fadeb7311559996fee44c8043e"],["categories/51nod基础题/page/5/index.html","f33785abc719b1cc823adf5beb003aa7"],["categories/dp/index.html","5b4597549a6daefedf8bb10bc350e549"],["categories/dp/page/2/index.html","0f60195ac61ea2187ac702d8d49a0c04"],["categories/hexo/index.html","e0a93b90880871e6cbd1d856a5fd9217"],["categories/index.html","84037d20e7cacce4eb0a42a46531d348"],["categories/java高精度/index.html","16a26552257e3154e6c6d32f1f6be7d1"],["categories/java高精度/page/2/index.html","ac0d281a2fcc63bcfec27cb66a6d4bbe"],["categories/love-peace/index.html","74e7532d4c9e6218ccd430cecad3d18d"],["categories/poi/index.html","76d6bef7770627eb4739ee46ee999729"],["categories/二分/index.html","1fba29ac2e4eddb28e158916daacac1d"],["categories/博弈论/index.html","27be766c135236746b868552a0be8746"],["categories/博弈论/page/2/index.html","e506ddd1832272dffade57671369d90a"],["categories/图论/index.html","e3f37b1f0658d8dc8383877b3c7cf86a"],["categories/图论/page/2/index.html","06bdd311da5091e24ea72b4bff67603b"],["categories/图论/page/3/index.html","2fc3df554bd7447bbe4dc63478450d1c"],["categories/搜索/index.html","12ff97c84da64b48f6f75248ced5150f"],["categories/数论/index.html","26886104ef61d3bd38b9f543d3abbe46"],["categories/数论/page/2/index.html","f077ddb626555dddaaee7376771b125d"],["categories/数论/page/3/index.html","28b49bdf0715b76bde020b749b0dd5b3"],["categories/数论/page/4/index.html","ce48ec3dbf14214955fd1b04e4c5f528"],["categories/杂/index.html","d36a10fffb10912c8b11cdc307eeb8d2"],["categories/杂/page/2/index.html","35d566e1ff0b47989c270693f179d8da"],["categories/模拟/index.html","650ffe8530884c85e6eb1025ce946b2e"],["categories/瞎折腾-ﾟωﾟ-ﾉ/index.html","31a33b97d684ea46c49e6cf5f6a00de4"],["categories/计算几何/index.html","267a7856eb67b9df27fcbc8fd3eac9bb"],["categories/贪心/index.html","5ea0fdaadee91926b0d9685358c79fb5"],["categories/贪心/page/2/index.html","4f5420256cfe8fbeb2542e00feec963b"],["categories/题解/index.html","cecdac998122d2ec51b0f9c69748d82c"],["css/main.css","c7651c9a021db09a519aa4ba6d0ad6ed"],["friends/css/normalize.css","afa121e2f2e3c68d877a0288ecb5951b"],["friends/css/style.css","ea1f1614fa54936b899cddb8beee7d5c"],["friends/index.html","5b7236063fa479616b024b5a50ab2714"],["friends/js/prefixfree.min.js","e0496580610fa9459ed3a127a4a3e031"],["google1d00a974e9137a21.html","daf86cd6c4ff916439ed50f548465b9f"],["images/0.png","df48f3e37285425e0a6ae43cd02722af"],["images/100.png","b33eb83809632aab8633ee231f695eb0"],["images/101.png","f29a2d774db82ee84ecee282188010f2"],["images/102.png","1e3fb28503e8a1862ff2a1c1922970de"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/scenery.gif","2f02aa8e54e747ca4247dd03bdddbc5b"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","a2782f6a90ae4924c2885f3a7984af23"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/custom.js","efb9cbd83f1e798c0b6cf7b34d291023"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/sw.js","192682f98fe38a513aada3dfa96f5b97"],["js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["lemu_demo.html","19fc05e925d5a5c6b4078528f83ef4fc"],["live2d/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["live2d/css/live2d.css","f9e000fb03a20e26fec562a262d67182"],["live2d/js/live2d.js","2407c14e54843164fb6824d4b2adb5b0"],["live2d/js/message.js","bd6b1190613d77d6021dcf0cc9a13e24"],["nothing/index.html","fd86c50a4c4838dcc4507535d96d2109"],["nothing/jquery-1.7.1.min.js","e0690e0eb8e723f816c010a7dda31258"],["nothing/jquery.min.js","3248aea9e0bd859814d3918c2920c3f3"],["nothing/tao.js","978f7c835dc114ea29945f4504bc8860"],["page/10/index.html","2cfb6f3e199160b69beb12cd77e6a73c"],["page/11/index.html","3daf64995061e168b4eeba4d8a3f0b24"],["page/12/index.html","378fe9ea4b8f99a74cc201a7ac205fdb"],["page/13/index.html","9a9f9d5f1776aa18051e45be56fcc6b5"],["page/14/index.html","d9d84be289917d22e61524f27d53ad3b"],["page/15/index.html","4f34fffae30a6eeac831dd6049b50583"],["page/16/index.html","2b6c3e041d29946ac06969aa02c38b40"],["page/17/index.html","67d46105b77291378fa00b024d701886"],["page/18/index.html","5afdb4039bc52019a48448282c67599f"],["page/19/index.html","2fc553b9e3bd7539241ee5e636a05adf"],["page/2/index.html","0a24bb2fa88423461d6ddb64858d81d5"],["page/20/index.html","a43bbda417b1862931ac8358ea5be162"],["page/21/index.html","e8736b623e4ae03597c7fbaee735329c"],["page/22/index.html","75e0e50c985b9e8a6fa3956f1006d056"],["page/3/index.html","8be606f03c30bca5b908d59f98e980f9"],["page/4/index.html","da946d192951b3a2252be416a47822c8"],["page/5/index.html","f4ed14c5f4a26bab2e18a010b42213ce"],["page/6/index.html","afe819289d4c76d9e0e0e05bb7249255"],["page/7/index.html","ac892895c7fa10457cee96f20fc9b79e"],["page/8/index.html","0a8a3c89117b7b18df8af05bd9bfa978"],["page/9/index.html","be7338dee93bcfe0bbdb632fb4ffaf3b"],["tags/Floyd周期检测/index.html","c06eb69042a60b27f680c10022413f01"],["tags/Manacher/index.html","beb8084972d162eb58e0921140ca80e4"],["tags/Pollard-Rho算法/index.html","2fbcefbf52a72ca4739e096c14beb500"],["tags/api/index.html","59a07d8cea79ec58c6e3485cb38d540e"],["tags/cf/index.html","feee729b18cc76a7c61727faaf637ba7"],["tags/css/index.html","b0f8c82df4d0640ec13b87497c13a8bc"],["tags/dfs/index.html","4ed8c48694857c652aaa4e58b32f908b"],["tags/dijkstra/index.html","18b6320c04583d414f1d7f84ce6273a3"],["tags/dp/index.html","9196e23871eedfceb17e542aa021ae0d"],["tags/dp/page/2/index.html","771e0b1988ec256c5edfbdaa684a59b2"],["tags/gcd/index.html","54b730751eeec8e535e0a3cee4938a82"],["tags/hexo/index.html","1d4d02f3ff77563abc0a6d58779184df"],["tags/index.html","355f386d3fcb7560e6296e0150544e85"],["tags/java高精度/index.html","05a8321724668e3361d4e84b63c7f391"],["tags/java高精度/page/2/index.html","4872d3a26eb5d7f621723baaea0dc278"],["tags/java高精度/page/3/index.html","93d0f51be7426757ddf59f0027208c05"],["tags/kruskal/index.html","461f5a4819755277393b10ea7ea14437"],["tags/lcs/index.html","5ff20b68846d2c4f068c46c1c067caf6"],["tags/leancloud/index.html","53e1184d6e67154766aa26b757ad0022"],["tags/live2d/index.html","a2d2fd2f0e7a9b718a1616d5c81add97"],["tags/mac-OS/index.html","1f37f9f932e30ec76a8dbd3f84700fe7"],["tags/prim/index.html","a9b8c16760d544343ee24f880b0550b9"],["tags/python/index.html","fbd58b20d5be4ae671d148cd7c6d02c1"],["tags/revolvermaps/index.html","af4a4b5e20e99acf3e9e58bfe1687153"],["tags/rmq/index.html","fe63d4fbf89b93e3929599c57275d7d6"],["tags/sg函数/index.html","361ff182d14cb68092c21e877625c5fc"],["tags/stl/index.html","ba66f5d13e5adfabda5a28ee12d610fe"],["tags/三分/index.html","9ca0629eea7da9d757d0da880f0e9de0"],["tags/中国剩余定理/index.html","fecde914f00ed6e164a79ef71e6735db"],["tags/二分/index.html","dd28de9d66cd06d2fa5d17a98c3b2465"],["tags/二分图/index.html","44bc2bd67436becf236e0ae19757ccf0"],["tags/全排列/index.html","b4a74e0d6017f77b8dee6b2a297e700c"],["tags/分割平面/index.html","700b04e3f4641c7ba1efe9f8c7c421df"],["tags/分数规划/index.html","60307c6c7d488fa15ce77b4a9e98f1bf"],["tags/前缀和/index.html","ff8df7f68937053be4093a77812403c7"],["tags/勒让德定理/index.html","a4ae7c7976d2b62eaebfd0adcfb77d17"],["tags/匈牙利算法/index.html","245d71993ce1ca9938867671d04cf466"],["tags/博弈论/index.html","5d3436ec4f62fc636420013968a5f4ff"],["tags/卡特兰数/index.html","5fc929f8a8b5c0c518f70ac0b667bca2"],["tags/卢卡斯定理/index.html","63e2edef96ab27d4790dc35047399dd4"],["tags/原根/index.html","cf57c411d1f95add69ea1c61b7a654bf"],["tags/四平方和定理/index.html","b7fef8a384059b9b44b4f31ed935ee48"],["tags/埃筛素数/index.html","583245ba99bb363e6210a04974ca79ea"],["tags/威佐夫博弈/index.html","647b26d477bb3d1fea386fcc3714c6fe"],["tags/字符串/index.html","54fdce918affbfe9afbe146bdcb04601"],["tags/容斥/index.html","44f6896fd16a0199d4f5f6c45cd479de"],["tags/尼姆博弈/index.html","f31035fa529036d82c616010e0f52a93"],["tags/巴什博弈/index.html","d35121315d0a846f5dcd431d46481816"],["tags/并查集/index.html","36eed9b06ae67b53f108875802a77eec"],["tags/归并排序/index.html","4356ddcaa9825d85b8cc72c5714b3542"],["tags/循环结/index.html","489f5d633602784faf246fec9dd60174"],["tags/微信/index.html","a9f98ab1253885098992e8ef7dd0e0d9"],["tags/快速幂/index.html","789483fac23a376732095190026d20fd"],["tags/思维/index.html","ab6a7e95b8ac87f576c6bb3ca3bfc737"],["tags/思维/page/2/index.html","e1316b1863e37bb0d327c9487697210d"],["tags/扩展欧几里得/index.html","5a2a1d6db0d20cc4f2293b891ce267ca"],["tags/拓扑排序/index.html","bf7f6e378c805d838a5d73707b98ecbf"],["tags/推公式/index.html","b867aec5b28593b5f5dc605273ac666c"],["tags/推公式/page/2/index.html","5190f3a50d3c211ce2dcb86d8dc5fc4d"],["tags/数根/index.html","937dafef44f7ad2e73ae84c56bcb3f86"],["tags/数组加倍/index.html","189ec175615dd61463561b1112b46ac2"],["tags/数论/index.html","91b22f17750003b1ec493a58533ba1d4"],["tags/斐波那契/index.html","18eb8ac58f010f93e42afe1cd7a0f0f4"],["tags/斯特林公式/index.html","884647d290b63ddcd69718e12d7f90e5"],["tags/斯特林数/index.html","630b6c2814d676617121c35b6ffdd431"],["tags/最小生成树/index.html","a465e938a1a5dbfaa539c3d1414e1915"],["tags/构造/index.html","da71e4262503716dc9fc8b8ac04b83f3"],["tags/枚举/index.html","379ef29972db1e4a3c17ff2b71742d57"],["tags/树状数组/index.html","562fe457dd661f4e84e20bda49266a7c"],["tags/模拟/index.html","d53dbd3bdbb467791d7a4d7772f09f95"],["tags/欧拉公式/index.html","ffe94301bd8107ef0262b8a86244945c"],["tags/欧拉函数/index.html","56fc6c94ef1d47522750e8e5df38ef55"],["tags/欧拉路径/index.html","55b5c7fc7040d3a07e73456aaabae135"],["tags/海伦公式/index.html","3ee939b92665efb53829f2b25dc88f46"],["tags/生日悖论/index.html","6792a85e9b70dfabe9b8ce30418ae46b"],["tags/矩阵快速幂/index.html","5c0b1c5d232bcbcdab3bcded5be85172"],["tags/离散化/index.html","1ce0891284a031e5c2fe56c81f244a42"],["tags/米勒罗宾/index.html","14a2fa88afcb5cea8c1fee5fbce97133"],["tags/约瑟夫环/index.html","3d2cc132875c02e302b3477e87752b93"],["tags/线性基/index.html","829a6f6e76468c594c2854e4a0c06334"],["tags/线段树/index.html","82af0b11012ffa41f356907e17cafd0a"],["tags/组合数/index.html","ca277086469329f5f00b793ac246afac"],["tags/组合游戏/index.html","71e4f43d75ef7625a255309929325422"],["tags/背包/index.html","718a5ce2d4a13801c9222133744a3b6f"],["tags/莫比乌斯函数/index.html","b3ccf17a03a789e6feebe2168bacd6f6"],["tags/计算几何/index.html","0dc2ed2597e2efa111085a42f7ef1e33"],["tags/贪心/index.html","7fa26a342ee125908ed1c60f4055dd1f"],["tags/贪心/page/2/index.html","f5e041a3effce542ea691cdcd27b44be"],["tags/贪心/page/3/index.html","c42a3cf4e3116881a60605365a9054a7"],["tags/逆元/index.html","83d8928b7c06cf94e721e7b1c1750114"],["tags/阶/index.html","b4db4c1c88bb1079f22199f36b05d15d"],["tags/鸽巢原理/index.html","ac7cab1fd843b853a4bfd2fc28348d17"],["tags/黄金分割数/index.html","63e777cf05932e112bfb500c8b9d6de3"]];
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







