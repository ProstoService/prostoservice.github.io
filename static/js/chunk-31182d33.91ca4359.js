(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31182d33"],{"1a71":function(e,t,i){"use strict";var n=i("f146"),o=i.n(n);o.a},"677f":function(e,t){!function(e,t,i,n){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sidebar=function(o){var r,s=e(this),a=e(t),l=e(i),c=e("html"),u=e("head"),d=s.selector||"",f=(new Date).getTime(),b=[],h=o,m="string"==typeof h,v=[].slice.call(arguments,1),g=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return s.each(function(){var s,p,y,k,C,w,x=e.isPlainObject(o)?e.extend(!0,{},e.fn.sidebar.settings,o):e.extend({},e.fn.sidebar.settings),S=x.selector,T=x.className,A=x.namespace,O=x.regExp,F=x.error,M="."+A,P="module-"+A,E=e(this),H=e(x.context),_=E.children(S.sidebar),j=(H.children(S.fixed),H.children(S.pusher)),D=this,R=E.data(P);w={initialize:function(){w.debug("Initializing sidebar",o),w.create.id(),C=w.get.transitionEvent(),x.delaySetup?g(w.setup.layout):w.setup.layout(),g(function(){w.setup.cache()}),w.instantiate()},instantiate:function(){w.verbose("Storing instance of module",w),R=w,E.data(P,w)},create:{id:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),p="."+y,w.verbose("Creating unique id for element",y)}},destroy:function(){w.verbose("Destroying previous module for",E),E.off(M).removeData(P),w.is.ios()&&w.remove.ios(),H.off(p),a.off(p),l.off(p)},event:{clickaway:function(e){var t=0<j.find(e.target).length||j.is(e.target),i=H.is(e.target);t&&(w.verbose("User clicked on dimmed page"),w.hide()),i&&(w.verbose("User clicked on dimmable context (scaled out page)"),w.hide())},touch:function(e){},containScroll:function(e){D.scrollTop<=0&&(D.scrollTop=1),D.scrollTop+D.offsetHeight>=D.scrollHeight&&(D.scrollTop=D.scrollHeight-D.offsetHeight-1)},scroll:function(t){0===e(t.target).closest(S.sidebar).length&&t.preventDefault()}},bind:{clickaway:function(){w.verbose("Adding clickaway events to context",H),x.closable&&H.on("click"+p,w.event.clickaway).on("touchend"+p,w.event.clickaway)},scrollLock:function(){x.scrollLock&&(w.debug("Disabling page scroll"),a.on("DOMMouseScroll"+p,w.event.scroll)),w.verbose("Adding events to contain sidebar scroll"),l.on("touchmove"+p,w.event.touch),E.on("scroll"+M,w.event.containScroll)}},unbind:{clickaway:function(){w.verbose("Removing clickaway events from context",H),H.off(p)},scrollLock:function(){w.verbose("Removing scroll lock from page"),l.off(p),a.off(p),E.off("scroll"+M)}},add:{inlineCSS:function(){var t,i=w.cache.width||E.outerWidth(),n=w.cache.height||E.outerHeight(),o=w.is.rtl(),r=w.get.direction(),a={left:i,right:-i,top:n,bottom:-n};o&&(w.verbose("RTL detected, flipping widths"),a.left=-i,a.right=i),t="<style>","left"===r||"right"===r?(w.debug("Adding CSS rules for animation distance",i),t+=" .ui.visible."+r+".sidebar ~ .fixed, .ui.visible."+r+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[r]+"px, 0, 0);           transform: translate3d("+a[r]+"px, 0, 0); }"):"top"!==r&&"bottom"!=r||(t+=" .ui.visible."+r+".sidebar ~ .fixed, .ui.visible."+r+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[r]+"px, 0);           transform: translate3d(0, "+a[r]+"px, 0); }"),w.is.ie()&&("left"===r||"right"===r?(w.debug("Adding CSS rules for animation distance",i),t+=" body.pushable > .ui.visible."+r+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[r]+"px, 0, 0);           transform: translate3d("+a[r]+"px, 0, 0); }"):"top"!==r&&"bottom"!=r||(t+=" body.pushable > .ui.visible."+r+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[r]+"px, 0);           transform: translate3d(0, "+a[r]+"px, 0); }"),t+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),s=e(t+="</style>").appendTo(u),w.debug("Adding sizing css to head",s)}},refresh:function(){w.verbose("Refreshing selector cache"),H=e(x.context),_=H.children(S.sidebar),j=H.children(S.pusher),H.children(S.fixed),w.clear.cache()},refreshSidebars:function(){w.verbose("Refreshing other sidebars"),_=H.children(S.sidebar)},repaint:function(){w.verbose("Forcing repaint event"),D.style.display="none",D.offsetHeight,D.scrollTop=D.scrollTop,D.style.display=""},setup:{cache:function(){w.cache={width:E.outerWidth(),height:E.outerHeight(),rtl:"rtl"==E.css("direction")}},layout:function(){0===H.children(S.pusher).length&&(w.debug("Adding wrapper element for sidebar"),w.error(F.pusher),j=e('<div class="pusher" />'),H.children().not(S.omitted).not(_).wrapAll(j),w.refresh()),0!==E.nextAll(S.pusher).length&&E.nextAll(S.pusher)[0]===j[0]||(w.debug("Moved sidebar to correct parent element"),w.error(F.movedSidebar,D),E.detach().prependTo(H),w.refresh()),w.clear.cache(),w.set.pushable(),w.set.direction()}},attachEvents:function(t,i){var n=e(t);i=e.isFunction(w[i])?w[i]:w.toggle,0<n.length?(w.debug("Attaching sidebar events to element",t,i),n.on("click"+M,i)):w.error(F.notFound,t)},show:function(t){if(t=e.isFunction(t)?t:function(){},w.is.hidden()){if(w.refreshSidebars(),x.overlay&&(w.error(F.overlay),x.transition="overlay"),w.refresh(),w.othersActive())if(w.debug("Other sidebars currently visible"),x.exclusive){if("overlay"!=x.transition)return void w.hideOthers(w.show);w.hideOthers()}else x.transition="overlay";w.pushPage(function(){t.call(D),x.onShow.call(D)}),x.onChange.call(D),x.onVisible.call(D)}else w.debug("Sidebar is already visible")},hide:function(t){t=e.isFunction(t)?t:function(){},(w.is.visible()||w.is.animating())&&(w.debug("Hiding sidebar",t),w.refreshSidebars(),w.pullPage(function(){t.call(D),x.onHidden.call(D)}),x.onChange.call(D),x.onHide.call(D))},othersAnimating:function(){return 0<_.not(E).filter("."+T.animating).length},othersVisible:function(){return 0<_.not(E).filter("."+T.visible).length},othersActive:function(){return w.othersVisible()||w.othersAnimating()},hideOthers:function(e){var t=_.not(E).filter("."+T.visible),i=t.length,n=0;e=e||function(){},t.sidebar("hide",function(){++n==i&&e()})},toggle:function(){w.verbose("Determining toggled direction"),w.is.hidden()?w.show():w.hide()},pushPage:function(t){var i,n,o,r=w.get.transition(),s="overlay"===r||w.othersActive()?E:j;t=e.isFunction(t)?t:function(){},"scale down"==x.transition&&w.scrollToTop(),w.set.transition(r),w.repaint(),i=function(){w.bind.clickaway(),w.add.inlineCSS(),w.set.animating(),w.set.visible()},n=function(){w.set.dimmed()},o=function(e){e.target==s[0]&&(s.off(C+p,o),w.remove.animating(),w.bind.scrollLock(),t.call(D))},s.off(C+p),s.on(C+p,o),g(i),x.dimPage&&!w.othersVisible()&&g(n)},pullPage:function(t){var i,n,o=w.get.transition(),r="overlay"==o||w.othersActive()?E:j;t=e.isFunction(t)?t:function(){},w.verbose("Removing context push state",w.get.direction()),w.unbind.clickaway(),w.unbind.scrollLock(),i=function(){w.set.transition(o),w.set.animating(),w.remove.visible(),x.dimPage&&!w.othersVisible()&&j.removeClass(T.dimmed)},n=function(e){e.target==r[0]&&(r.off(C+p,n),w.remove.animating(),w.remove.transition(),w.remove.inlineCSS(),("scale down"==o||x.returnScroll&&w.is.mobile())&&w.scrollBack(),t.call(D))},r.off(C+p),r.on(C+p,n),g(i)},scrollToTop:function(){w.verbose("Scrolling to top of page to avoid animation issues"),k=e(t).scrollTop(),E.scrollTop(0),t.scrollTo(0,0)},scrollBack:function(){w.verbose("Scrolling back to original page position"),t.scrollTo(0,k)},clear:{cache:function(){w.verbose("Clearing cached dimensions"),w.cache={}}},set:{ios:function(){c.addClass(T.ios)},pushed:function(){H.addClass(T.pushed)},pushable:function(){H.addClass(T.pushable)},dimmed:function(){j.addClass(T.dimmed)},active:function(){E.addClass(T.active)},animating:function(){E.addClass(T.animating)},transition:function(e){e=e||w.get.transition(),E.addClass(e)},direction:function(e){e=e||w.get.direction(),E.addClass(T[e])},visible:function(){E.addClass(T.visible)},overlay:function(){E.addClass(T.overlay)}},remove:{inlineCSS:function(){w.debug("Removing inline css styles",s),s&&0<s.length&&s.remove()},ios:function(){c.removeClass(T.ios)},pushed:function(){H.removeClass(T.pushed)},pushable:function(){H.removeClass(T.pushable)},active:function(){E.removeClass(T.active)},animating:function(){E.removeClass(T.animating)},transition:function(e){e=e||w.get.transition(),E.removeClass(e)},direction:function(e){e=e||w.get.direction(),E.removeClass(T[e])},visible:function(){E.removeClass(T.visible)},overlay:function(){E.removeClass(T.overlay)}},get:{direction:function(){return E.hasClass(T.top)?T.top:E.hasClass(T.right)?T.right:E.hasClass(T.bottom)?T.bottom:T.left},transition:function(){var e,t=w.get.direction();return e=w.is.mobile()?"auto"==x.mobileTransition?x.defaultTransition.mobile[t]:x.mobileTransition:"auto"==x.transition?x.defaultTransition.computer[t]:x.transition,w.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=i.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==n)return o[e]}},is:{ie:function(){return!t.ActiveXObject&&"ActiveXObject"in t||"ActiveXObject"in t},ios:function(){var e=navigator.userAgent,t=e.match(O.ios),i=e.match(O.mobileChrome);return!(!t||i)&&(w.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(O.mobile)?(w.verbose("Browser was found to be mobile",e),!0):(w.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!w.is.visible()},visible:function(){return E.hasClass(T.visible)},open:function(){return w.is.visible()},closed:function(){return w.is.hidden()},vertical:function(){return E.hasClass(T.top)},animating:function(){return H.hasClass(T.animating)},rtl:function(){return w.cache.rtl===n&&(w.cache.rtl="rtl"==E.css("direction")),w.cache.rtl}},setting:function(t,i){if(w.debug("Changing setting",t,i),e.isPlainObject(t))e.extend(!0,x,t);else{if(i===n)return x[t];e.isPlainObject(x[t])?e.extend(!0,x[t],i):x[t]=i}},internal:function(t,i){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(i===n)return w[t];w[t]=i}},debug:function(){!x.silent&&x.debug&&(x.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,x.name+":"),w.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),w.verbose.apply(console,arguments)))},error:function(){x.silent||(w.error=Function.prototype.bind.call(console.error,console,x.name+":"),w.error.apply(console,arguments))},performance:{log:function(e){var t,i;x.performance&&(i=(t=(new Date).getTime())-(f||t),f=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:D,"Execution Time":i})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var t=x.name+":",i=0;f=!1,clearTimeout(w.performance.timer),e.each(b,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",d&&(t+=" '"+d+"'"),(console.group!==n||console.table!==n)&&0<b.length&&(console.groupCollapsed(t),console.table?console.table(b):e.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(t,i,o){var s,a,l,c=R;return i=i||v,o=D||o,"string"==typeof t&&c!==n&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(i,o){var r=i!=s?o+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(c[r])&&i!=s)c=c[r];else{if(c[r]!==n)return a=c[r],!1;if(!e.isPlainObject(c[o])||i==s)return c[o]!==n?a=c[o]:w.error(F.method,t),!1;c=c[o]}})),e.isFunction(a)?l=a.apply(o,i):a!==n&&(l=a),e.isArray(r)?r.push(l):r!==n?r=[r,l]:l!==n&&(r=l),a}},m?(R===n&&w.initialize(),w.invoke(h)):(R!==n&&w.invoke("destroy"),w.initialize())}),r!==n?r:this},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document)},8064:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"pusher"},[i("main-menu"),i("main",{staticClass:"ui text expanded container"},[i("app-view")],1)],1)])},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"ui fixed secondary pointing menu",staticStyle:{"background-color":"rgba(255, 255, 255, 255)"}},[i("div",{staticClass:"ui text container"},[i("div",{staticClass:"ui grid"},[i("div",{staticClass:"computer only row"},e._l(e.menuItems,function(t){return i("router-link",{key:t.key,tag:"a",staticClass:"item",class:{active:e.isActive(t.key)},attrs:{to:t.to},nativeOn:{click:function(i){e.setActive(t.key)}}},[e._v("\n          "+e._s(t.content)+"\n        ")])})),i("div",{staticClass:"mobile tablet only row"},[i("a",{staticClass:"active launch icon item",on:{click:function(t){e.toggleSidebar()}}},[i("i",{staticClass:"content icon",staticStyle:{"padding-left":"50%","padding-right":"50%"}})]),i("div",{staticClass:"ui sidebar vertical menu"},e._l(e.menuItems,function(t){return i("router-link",{key:t.key,tag:"a",staticClass:"item",class:{active:e.isActive(t.key)},attrs:{to:t.to},nativeOn:{click:function(i){e.setActive(t.key),e.toggleSidebar()}}},[e._v("\n            "+e._s(t.content)+"\n          ")])}))])])])])},s=[],a=i("1157"),l=i.n(a),c=(i("677f"),{name:"MainMenu",data:function(){return{menuItems:[{key:"home",content:"Главная",to:"/"},{key:"about",content:"О нас",to:"/about"},{key:"services",content:"Услуги",to:"/services"},{key:"products",content:"Товары",to:"/products"},{key:"contacts",content:"Контакты",to:"/contacts"}],active:""}},created:function(){this.active=this.$router.currentRoute.path.substring(1)},watch:{$route:function(e,t){this.active=e.path.substring(1)}},methods:{setActive:function(e){this.active=e},isActive:function(e){return e===this.active},toggleSidebar:function(){l()(".ui.sidebar").sidebar("toggle")}}}),u=c,d=i("2877"),f=Object(d["a"])(u,r,s,!1,null,null,null);f.options.__file="MainMenu.vue";var b=f.exports,h={name:"BaseTemplate",components:{MainMenu:b}},m=h,v=(i("1a71"),Object(d["a"])(m,n,o,!1,null,"4e2d1b49",null));v.options.__file="BaseTemplate.vue";t["default"]=v.exports},f146:function(e,t,i){}}]);