(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1022:function(e,t,r){"use strict";r.r(t),r.d(t,"IntercomTransport",(function(){return p})),r.d(t,"addTag",(function(){return m})),r.d(t,"addExtra",(function(){return g})),r.d(t,"addBreadcrumb",(function(){return v})),r.d(t,"logError",(function(){return h})),r.d(t,"logErrorMessage",(function(){return b}));var n=r(0),o=r.n(n),i=r(1283),s=r(1092),c=r(119),a=r(7),u=r(12);function d(e,t,r,n,o,i,s){try{var c=e[i](s),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}var l=r(243),f=function(e){return e&&e.exception&&e.exception.values&&e.exception.values[0]},p=function(){function e(){}return e.prototype.sendEvent=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Object(c.b)()){e.next=3;break}return e.abrupt("return",{status:"success"});case 3:if("string"==typeof t&&(t=JSON.parse(t)),(r=f(t))&&r.value&&r.type&&r.stacktrace&&r.stacktrace.frames&&r.stacktrace.frames.length){e.next=7;break}return e.abrupt("return",{status:"success"});case 7:if(!t||!t.level||"info"!==t.level){e.next=9;break}return e.abrupt("return",{status:"success"});case 9:return n={url:new s.API(l.sentry_dsn).getStoreEndpointWithUrlEncodedAuth(),event:JSON.stringify(t),version:1},e.next=12,new Promise((function(e,t){var r=window.parent.document.querySelector("#sentry-errors-frame");if(r)return setTimeout((function(){return e(r)}),1e3);(r=document.createElement("iframe")).id="sentry-errors-frame",r.style.display="none",r.src=l.sentry_proxy_path,r.onload=function(){return setTimeout((function(){return e(r)}),1e3)},r.onerror=function(){r.parentNode.removeChild(r),t(null)},window.parent.document.body.appendChild(r)}));case 12:return(o=e.sent).contentWindow.postMessage(n,o.src),e.abrupt("return",{status:"success"});case 17:return e.prev=17,e.t0=e.catch(0),Object(a.g)("captureSentryEventFailed",{message:e.t0&&e.t0.message}),e.abrupt("return",{status:"error"});case 21:case"end":return e.stop()}}),e,null,[[0,17]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){d(i,n,o,s,c,"next",e)}function c(e){d(i,n,o,s,c,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}(),e}();i.init({dsn:l.sentry_dsn,release:"c9627d977b975140ee35139f50ae7ad4cd947df1",environment:"production",transport:p,sampleRate:.2,whitelistUrls:[/https?:\/\/js\.intercomcdn\.com/,/https?:\/\/intercom-sheets\.com/],ignoreErrors:[/<unknown>/i,/AbortError/i,/SecurityError/i,/NotAllowedError/i,/NotFoundError/i,/Unable to connect to the target server/i,/Impossible de se connecter au serveur cible/i,/Die Verbindung mit dem Zielserver konnte nicht hergestellt werden/i,/No se puede conectar con el servidor de destino/i,/Loading chunk (\d+) failed/i,/QuotaExceededError/i,/NS_ERROR_DOM_QUOTA_REACHED/i,/Not enough storage/i,/Out of memory/i,/about:blank/i,/http_post_session_empty/i,/error\.list/i,/The object can not be found here/i,/The system cannot locate the resource specified/i,"null","undefined"],integrations:function(e){return e.filter((function(e){return"GlobalHandlers"!==e.name}))}}),i.configureScope((function(e){var t,r,n;e.setTag("react.version",o.a.version),!Object(u.a)()&&null!==(t=window)&&void 0!==t&&null!==(r=t.parent)&&void 0!==r&&null!==(n=r.location)&&void 0!==n&&n.href&&e.setTag("location.href",window.parent.location.href)}));var m=function(e,t){i.configureScope((function(r){return r.setTag(e,t)}))},g=function(e,t){i.configureScope((function(r){return r.setExtra(e,t)}))},v=function(e,t){i.addBreadcrumb({category:e,message:t})},h=function(e){try{i.captureException(e)}catch(e){Object(a.g)("captureSentryExceptionFailed",{message:e&&e.message})}},b=function(e){try{i.captureMessage(e)}catch(e){Object(a.g)("captureSentryMessageFailed",{message:e&&e.message})}}}}]);