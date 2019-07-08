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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","a99e2fc4b182aefa5bd4380f6b706449"],["/css/smartcharts.css","7fffab68f7bcea3d67eca2cb81b6491e"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","0d234b4c18c99d93d27ce4fd69fe4eb1"],["/js/0.337587b35c0aa1632424.js","5484bb43592d84c758b540c46cedd4ad"],["/js/1.337587b35c0aa1632424.js","3bb82344cfae3e94b976006e16ef0f6d"],["/js/10.337587b35c0aa1632424.js","31cf6e11dbbe8baa875312559e02ff88"],["/js/11.337587b35c0aa1632424.js","ca05e8150a80aa61439758282e75ef30"],["/js/12.337587b35c0aa1632424.js","614fba43013ce8d977edfda01252070f"],["/js/13.337587b35c0aa1632424.js","0f9110820d0f90f5c061bc45bf8a9d90"],["/js/14.337587b35c0aa1632424.js","7e8c5fd9561afb1b9c4dfa83941b7777"],["/js/15.337587b35c0aa1632424.js","ad047001d279087202c9118fcb249821"],["/js/16.337587b35c0aa1632424.js","17bd555a426986f1f5b5275671b72873"],["/js/17.337587b35c0aa1632424.js","7da38ee3269ec75a9bae13d0a16abd43"],["/js/18.337587b35c0aa1632424.js","6a0514c45d94d224f86341bc49ea6190"],["/js/19.337587b35c0aa1632424.js","0872006da27d0db0817cb4bdade8baa2"],["/js/2.337587b35c0aa1632424.js","13de4457ae0dac0af67ea336a017e4ad"],["/js/20.337587b35c0aa1632424.js","b1d3f4f2581f5a8c38113447dc8663d0"],["/js/21.337587b35c0aa1632424.js","a65bf3c023df301af8e8eebcc0442ad2"],["/js/22.337587b35c0aa1632424.js","597577761142578c6e933d62d4206e41"],["/js/23.337587b35c0aa1632424.js","c086b082c3d0f4a63cd8077181e28939"],["/js/24.337587b35c0aa1632424.js","2596dc5d7a68c7124c8ec5348b9ec34d"],["/js/25.337587b35c0aa1632424.js","9fadb33ae3f42e8cbb418a6635d64a1e"],["/js/26.337587b35c0aa1632424.js","67cd654cbfbf1e5882d19f7ee8f9eb15"],["/js/27.337587b35c0aa1632424.js","46d8b8cbfb3218d96587c6f348cfcf74"],["/js/28.337587b35c0aa1632424.js","288bda422b1cce5149d75e518cf8b964"],["/js/29.337587b35c0aa1632424.js","25f2a2bafc8d77b13e5b01c403ebb24a"],["/js/3.337587b35c0aa1632424.js","3be99bc9fd84f8b5ecc3cd6bc8911d22"],["/js/30.337587b35c0aa1632424.js","74243bca8ff76a8c6f5c37cea6d98923"],["/js/31.337587b35c0aa1632424.js","3133975e52537f0f470ad629c535467c"],["/js/32.337587b35c0aa1632424.js","4d5ebedee980f0894f611f37140d28c7"],["/js/33.337587b35c0aa1632424.js","b917477f1897ea8ef3dfaaf3a18678a4"],["/js/34.337587b35c0aa1632424.js","60fa874b9e236d16f78fd5d7c1abdcf8"],["/js/35.337587b35c0aa1632424.js","cb23d7c76f4bf9458f8ffeee24a50fa9"],["/js/36.337587b35c0aa1632424.js","3b02b05b659f3ab0fa96dda854bea982"],["/js/37.337587b35c0aa1632424.js","8aac594cc1ab136a1d406ef145cd5d06"],["/js/38.337587b35c0aa1632424.js","9c6ceb828f3d5d75721d20db26575bd3"],["/js/39.337587b35c0aa1632424.js","ad47b19f9c6bf1975aba6561334edfb6"],["/js/4.337587b35c0aa1632424.js","0838cbb4f86e46d98c4402093d4593ef"],["/js/40.337587b35c0aa1632424.js","b20606de5a03f7bb4f447978c275b99e"],["/js/404.337587b35c0aa1632424.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.337587b35c0aa1632424.js","56eaa2836e24ee09ec3c5e005316aa88"],["/js/42.337587b35c0aa1632424.js","d0a56adbbbd160f8ad4b9520c3a59a0b"],["/js/43.337587b35c0aa1632424.js","8450d8f90484806e6417089718f65f42"],["/js/44.337587b35c0aa1632424.js","4c23afff64b71f12f91c82f0d9c7d3cf"],["/js/45.337587b35c0aa1632424.js","ff02e30f00fcf7ba8a6cf36537f5538e"],["/js/46.337587b35c0aa1632424.js","68c505aeb7a92e8441fc4bba7160f99e"],["/js/47.337587b35c0aa1632424.js","353f164616360f0a42c34398565a4c53"],["/js/48.337587b35c0aa1632424.js","9618e0dc09248193ed68d145a4e2d5aa"],["/js/49.337587b35c0aa1632424.js","ba4895755cb4d97028db71cd84c86282"],["/js/5.337587b35c0aa1632424.js","12c8bf3690c831243dcd8cf83de95898"],["/js/50.337587b35c0aa1632424.js","62006afc05cac80e0414b9e4cd433524"],["/js/51.337587b35c0aa1632424.js","04c141f2e233259f2cebaa1500dc927b"],["/js/52.337587b35c0aa1632424.js","549b719af322c499103a46173f62c95c"],["/js/53.337587b35c0aa1632424.js","52d49bf2616551627f8f8e9bea6f6d63"],["/js/54.337587b35c0aa1632424.js","e8133baf398cca29ae81654bfa211a34"],["/js/55.337587b35c0aa1632424.js","735b2f41a542feabc3f8ec8398d63195"],["/js/56.337587b35c0aa1632424.js","ef74b1c2b9e80d9a4536326bb299600e"],["/js/57.337587b35c0aa1632424.js","ddee7d5c0af0679e7cb83baa70c0f070"],["/js/58.337587b35c0aa1632424.js","61602aec64fe7ec84873658866af36f1"],["/js/59.337587b35c0aa1632424.js","8626364abd750f2214dad322e43e2b4a"],["/js/6.337587b35c0aa1632424.js","8b55f396f4e14a7d21d0d18cca25bd80"],["/js/60.337587b35c0aa1632424.js","86e0682f8ec5b0e542415a0305ef5992"],["/js/61.337587b35c0aa1632424.js","7b6269c5eb4f43a4f98c8e0c974a0cd8"],["/js/62.337587b35c0aa1632424.js","06b31319240d6b17278d4f84b54c451c"],["/js/63.337587b35c0aa1632424.js","2ad981fcfba3f4b273e95502877dbe8a"],["/js/64.337587b35c0aa1632424.js","910a5d30f0dfac3a887ad9b15aaf5ca9"],["/js/65.337587b35c0aa1632424.js","7dac52d0d1e0f23b55e72e8a4d3c3e36"],["/js/66.337587b35c0aa1632424.js","d2a90fd040af8236a1dcdfd9f41b3c96"],["/js/67.337587b35c0aa1632424.js","944d7d2ca707813a67c7c9a52fe0e245"],["/js/7.337587b35c0aa1632424.js","9bcabe4dfc6e5f477219f401b32334ef"],["/js/8.337587b35c0aa1632424.js","8522b40cc5d7e496d0716c985f11dd7d"],["/js/9.337587b35c0aa1632424.js","fddc38ab360fc84a61371e45679a9498"],["/js/contract.337587b35c0aa1632424.js","701a5557b02f58f2a2583b4ff5a442fb"],["/js/open_positions.337587b35c0aa1632424.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/open_positions~profit_table~statement.337587b35c0aa1632424.js","a4d2c539611d8a9312500ce00867e84d"],["/js/profit_table.337587b35c0aa1632424.js","adf9da8733d5263ad9ddc11510931b92"],["/js/profit_table~statement.337587b35c0aa1632424.js","508b87f1042d83feef366c04a15d62ed"],["/js/reports.337587b35c0aa1632424.js","5f88594cac8ff5e0904b6fef8ef39d4f"],["/js/smart_chart.337587b35c0aa1632424.js","2ffc25ed6d2620b545e77f32769bb252"],["/js/smartcharts/chartiq-5871ca.smartcharts.js","5972d27f59f2e8942c3e0217f7fac2c7"],["/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/js/smartcharts/es-po-19e90a.smartcharts.js","7c6bd1342a7ad6700a6cffd6e4e0a73a"],["/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/js/smartcharts/html2canvas-cfdaf6.smartcharts.js","c1fc6b64430eeadab2fa3ce722c5b9ff"],["/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/js/smartcharts/vi-po-47e08b.smartcharts.js","4a11b3ed941616c11b7cd43256de11c9"],["/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/js/statement.337587b35c0aa1632424.js","2065b03b9946c6cdead91eff6abcc30d"],["/js/vendors~open_positions~profit_table~statement.337587b35c0aa1632424.js","2e5f800f33db6c5200f6e82be2bd8ed3"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


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
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
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
    var navigateFallback = '/';
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







