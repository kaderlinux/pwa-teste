if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,f,n)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return i;case"module":return r;default:return e(c)}})).then(e=>{const c=n(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"teste"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.5e4e9664.css",revision:"f2953a364ba3c2910a892ba12b0637d7"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.bbf3b920.woff",revision:"ef85b3d7ffe53adfbdcab4c157013dcf"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.8e0a67eb.woff2",revision:"f5218eda985d32ae511004686430d70e"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"f9b37d2b3ff838b8cdc49fdf35a528d0"},{url:"js/2.8a389af1.js",revision:"a817d5d9178df6ef9852ae451a1a9514"},{url:"js/3.30244de0.js",revision:"7c5f9a50cb26cda75c1f7e9703866c35"},{url:"js/4.8d12472c.js",revision:"26a66b7c99b1f1216a1762a93be2d2fc"},{url:"js/app.aedbdd17.js",revision:"99919164a91b5ae489ba02c59807472f"},{url:"js/vendor.32f62b68.js",revision:"28744246ded211112fe5d5572368a70f"},{url:"manifest.json",revision:"0639b7c6701a21a16382385de9427c6a"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
