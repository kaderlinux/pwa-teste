(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={1:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{2:"8a389af1",3:"15e553b9",4:"8d12472c"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("ddb0"),n("ac1f"),n("5319"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d");var o=n("2b0e"),r=n("1f91"),a=n("42d2"),i=n("b05d");o["a"].use(i["a"],{config:{},lang:r["a"],iconSet:a["a"]});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],u=n("260b");n("0098");async function l(){var e={apiKey:"AIzaSyAePQ-s_SmnTnrAwbgjNH44vZMPPajB9ts",authDomain:"teste-9b9f0.firebaseapp.com",databaseURL:"https://teste-9b9f0.firebaseio.com",projectId:"teste-9b9f0",storageBucket:"teste-9b9f0.appspot.com",messagingSenderId:"841109682229",appId:"1:841109682229:web:a0fa316b5e6a04d088d97c"};u["a"].initializeApp(e),navigator.serviceWorker.register("firebase-messaging-sw.js",{scope:"firebase-cloud-messaging-push-scope"}).then((e=>{const t=u["a"].messaging();t.useServiceWorker(e)})).catch((e=>{console.log(e)}));const t=u["a"].messaging();t.getToken({vapidKey:"BFDe-EaZ5cnTrHZmIArlfyxRjacLqylNsaiJQNR7QcFbDds0POhtMHmmGXfz9mWB8trRcnkbAAwzmJ_eS2EpYmk"}).then((e=>{e?console.log(e):console.log("No registration token available. Request permission to generate one.")})).catch((e=>{console.log("An error occurred while retrieving token. ",e)})),t.onMessage((function(e){console.log("Receiving foreground message"),console.log(e);var t="vue-cometchat-firebase",n={body:e.data.alert,icon:""},o=new Notification(t,n);o.onclick=function(e){o.close(),console.log(e)}}))}var f={name:"App",created(){l()}},p=f,d=n("2877"),b=Object(d["a"])(p,s,c,!1,null,null,null),g=b.exports,h=n("2f62");o["a"].use(h["a"]);var v=function(){const e=new h["a"].Store({modules:{},strict:!1});return e},m=n("8c4f");const w=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var y=w;o["a"].use(m["a"]);var P=function(){const e=new m["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},j=async function(){const e="function"===typeof v?await v({Vue:o["a"]}):v,t="function"===typeof P?await P({Vue:o["a"],store:e}):P;e.$router=t;const n={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:n,store:e,router:t}},k=n("9483");Object(k["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var O=n("a925"),S={failed:"Action failed",success:"Action was successful"},A={"en-us":S};o["a"].use(O["a"]);const x=new O["a"]({locale:"en-us",fallbackLocale:"en-us",messages:A});var _=({app:e})=>{e.i18n=x},M=n("bc3a"),T=n.n(M);o["a"].prototype.$axios=T.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const E="";async function R(){const{app:e,store:t,router:n}=await j();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[_,void 0];for(let u=0;!1===r&&u<s.length;u++)if("function"===typeof s[u])try{await s[u]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:E})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new o["a"](e)}R()},"7e6d":function(e,t,n){}});