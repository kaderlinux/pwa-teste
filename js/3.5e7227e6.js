(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Teste PWA\n      ")]),a("div",{staticClass:"text-caption"},[t._v("EL ATTARI ABDELKADER 3")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Essential Links\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},o=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=s,c=a("2877"),u=a("66e5"),p=a("4074"),d=a("0016"),m=a("0170"),b=a("eebe"),f=a.n(b),k=Object(c["a"])(l,r,o,!1,null,null,null),q=k.exports;f()(k,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:d["a"],QItemLabel:m["a"]});const v=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];var w={name:"MainLayout",components:{EssentialLink:q},data(){return{leftDrawerOpen:!1,essentialLinks:v}}},h=w,_=a("4d5a"),Q=a("e359"),L=a("65c6"),g=a("9c40"),y=a("6ac5"),D=a("9404"),E=a("1c1c"),O=a("09e3"),T=Object(c["a"])(h,n,i,!1,null,null,null);e["default"]=T.exports;f()(T,"components",{QLayout:_["a"],QHeader:Q["a"],QToolbar:L["a"],QBtn:g["a"],QToolbarTitle:y["a"],QDrawer:D["a"],QList:E["a"],QItemLabel:m["a"],QPageContainer:O["a"]})}}]);