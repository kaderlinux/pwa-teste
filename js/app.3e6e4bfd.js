(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={1:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"8a389af1",3:"95df5295",4:"8d12472c"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,o[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;a.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);o("ddb0"),o("ac1f"),o("5319"),o("7d6e"),o("e54f"),o("62f2"),o("7e6d");var n=o("2b0e"),r=o("1f91"),a=o("42d2"),i=o("b05d");n["a"].use(i["a"],{config:{},lang:r["a"],iconSet:a["a"]});var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},s=[],u=o("260b");o("0098");async function l(){var e={apiKey:"AIzaSyAePQ-s_SmnTnrAwbgjNH44vZMPPajB9ts",authDomain:"teste-9b9f0.firebaseapp.com",databaseURL:"https://teste-9b9f0.firebaseio.com",projectId:"teste-9b9f0",storageBucket:"teste-9b9f0.appspot.com",messagingSenderId:"841109682229",appId:"1:841109682229:web:a0fa316b5e6a04d088d97c"};u["a"].initializeApp(e);const t=u["a"].messaging();"serviceWorker"in navigator&&navigator.serviceWorker.register("firebase-messaging-sw.js").then((e=>{t.useServiceWorker(e),console.log("Registration successful, scope is:",e.scope)})).catch((function(e){console.log("Service worker registration failed, error:",e)})),t.getToken({vapidKey:"BFDe-EaZ5cnTrHZmIArlfyxRjacLqylNsaiJQNR7QcFbDds0POhtMHmmGXfz9mWB8trRcnkbAAwzmJ_eS2EpYmk"}).then((e=>{e?console.log(e):console.log("No registration token available. Request permission to generate one.")})).catch((e=>{console.log("An error occurred while retrieving token. ",e)})),t.onMessage((function(e){console.log("Receiving foreground message"),console.log(e);var t="vue-cometchat-firebase",o={body:e.data.alert,icon:""},n=new Notification(t,o);n.onclick=function(e){n.close(),console.log(e)}}))}var f={name:"App",created(){l()}},p=f,d=o("2877"),v=Object(d["a"])(p,c,s,!1,null,null,null),g=v.exports,b=o("2f62");n["a"].use(b["a"]);var h=function(){const e=new b["a"].Store({modules:{},strict:!1});return e},m=o("8c4f");const w=[{path:"/",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"e51e"))}];var y=w;n["a"].use(m["a"]);var P=function(){const e=new m["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},j=async function(){const e="function"===typeof h?await h({Vue:n["a"]}):h,t="function"===typeof P?await P({Vue:n["a"],store:e}):P;e.$router=t;const o={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:o,store:e,router:t}},k=o("9483");Object(k["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var O=o("a925"),S={failed:"Action failed",success:"Action was successful"},A={"en-us":S};n["a"].use(O["a"]);const x=new O["a"]({locale:"en-us",fallbackLocale:"en-us",messages:A});var _=({app:e})=>{e.i18n=x},M=o("bc3a"),R=o.n(M);n["a"].prototype.$axios=R.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&o.e(0).then(o.t.bind(null,"a0db",7));const T="";async function E(){const{app:e,store:t,router:o}=await j();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),c=[_,void 0];for(let u=0;!1===r&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:o,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:T})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new n["a"](e)}E()},"7e6d":function(e,t,o){}});