(function(e){function n(n){for(var r,o,a=n[0],i=n[1],l=n[2],f=0,d=[];f<a.length;f++)o=a[f],c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"d1549ec0","chunk-3131ce48":"00a52658","chunk-2d2261a6":"b7639b6f","chunk-2d22c114":"06e806cf","chunk-2d22d746":"5eb16827","chunk-7e0478ae":"95de6f33","chunk-3d88f70f":"01f6b18b","chunk-4e7341c0":"80cf43b7"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3d88f70f":1,"chunk-4e7341c0":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"31d6cfe0","chunk-3131ce48":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22c114":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-7e0478ae":"31d6cfe0","chunk-3d88f70f":"b1605d0a","chunk-4e7341c0":"fd1f34a4"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],f=l.getAttribute("data-href");if(f===r||f===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],h.parentNode.removeChild(h),t(u)},h.href=c;var s=document.getElementsByTagName("head")[0];s.appendChild(h)}).then(function(){o[e]=0}));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=c[e]=[n,t]});n.push(r[2]=u);var l,f=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e),l=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,t[1](u)}c[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,f.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var h=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=t("1157"),c=t.n(o),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i={name:"App"},l=i,f=t("2877"),d=Object(f["a"])(l,u,a,!1,null,null,null);d.options.__file="App.vue";var h=d.exports,s=(t("7f7f"),t("8c4f")),p=t("323e"),m=t.n(p),b=function(){return t.e("chunk-3d88f70f").then(t.bind(null,"bb51"))},v=function(){return t.e("chunk-4e7341c0").then(t.bind(null,"8064"))},k=function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d22d746")]).then(t.bind(null,"f820"))},g=function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d22c114")]).then(t.bind(null,"f23e"))},y=function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-2d2261a6")]).then(t.bind(null,"e6dc"))},w=function(){return Promise.all([t.e("chunk-3131ce48"),t.e("chunk-7e0478ae")]).then(t.bind(null,"c93c"))},P=function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))};r["a"].use(s["a"]);var j=new s["a"]({routes:[{path:"/",name:"Home",component:b,meta:{title:""}},{path:"/",component:v,children:[{path:"about",name:"About",component:k,meta:{title:"О нас"}},{path:"services",name:"Services",component:g,meta:{title:"Услуги"}},{path:"products",name:"Products",component:y,meta:{title:"Товары"}},{path:"contacts",name:"Contacts",component:w,meta:{title:"Контакты"}}]},{path:"*",component:v,children:[{path:"",name:"NotFound",component:P,meta:{title:"Страница не найдена"}}]}],scrollBehavior:function(e,n,t){return{x:0,y:0}}}),E="Простое Решение";j.beforeEach(function(e,n,t){""===e.meta.title?document.title=E:document.title=e.meta.title+" | "+E,t()}),j.beforeResolve(function(e,n,t){e.name&&m.a.start(),t()}),j.afterEach(function(e,n){m.a.done()});var O=j;window.$=window.jQuery=c.a,r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:O,render:function(e){return e(h)}})}});