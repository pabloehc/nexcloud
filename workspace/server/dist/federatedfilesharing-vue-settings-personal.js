/*! For license information please see federatedfilesharing-vue-settings-personal.js.LICENSE.txt */
!function(){"use strict";var e,r,n,o={70134:function(e,r,n){var o=n(20144),i=n(77958),a=n(31352),c=(n(32316),n(64024)),l=n(43554),u=n(13299),s=n.n(u),d=n(10861),f=n.n(d),h={name:"TwitterIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},p=n(51900),g=(0,p.Z)(h,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon twitter-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,v={name:"FacebookIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=(0,p.Z)(v,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon facebook-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,m=n(97859),b={name:"ClipboardIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},C=(0,p.Z)(b,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon clipboard-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new S(o||[]);return n(a,"_invoke",{value:A(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function h(){}function p(){}var g={};l(g,i,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==e&&r.call(y,i)&&(g=y);var m=p.prototype=f.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==w(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function A(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=p,n(m,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(C.prototype),l(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new C(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),l(m,c,"Generator"),l(m,i,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function A(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var _={name:"PersonalSettings",components:{NcButton:f(),NcSettingsSection:s(),Twitter:g,Facebook:y,Web:m.default,Clipboard:C},data:function(){return{color:(0,l.j)("federatedfilesharing","color"),textColor:(0,l.j)("federatedfilesharing","textColor"),logoPath:(0,l.j)("federatedfilesharing","logoPath"),reference:(0,l.j)("federatedfilesharing","reference"),cloudId:(0,l.j)("federatedfilesharing","cloudId"),docUrlFederated:(0,l.j)("federatedfilesharing","docUrlFederated"),showHtml:!1,isCopied:!1}},computed:{messageWithURL:function(){return t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID, see {url}",{url:this.reference})},messageWithoutURL:function(){return t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID")},shareDiasporaUrl:function(){return"https://share.diasporafoundation.org/?title=".concat(encodeURIComponent(this.messageWithoutURL),"&url=").concat(encodeURIComponent(this.reference))},shareTwitterUrl:function(){return"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(this.messageWithURL))},shareFacebookUrl:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(this.reference))},logoPathAbsolute:function(){return window.location.protocol+"//"+window.location.host+this.logoPath},backgroundStyle:function(){return"padding:10px;background-color:".concat(this.color,";color:").concat(this.textColor,";border-radius:3px;padding-left:4px;")},linkStyle:function(){return"background-image:url(".concat(this.logoPathAbsolute,");width:50px;height:30px;position:relative;top:8px;background-size:contain;display:inline-block;background-repeat:no-repeat; background-position: center center;")},htmlCode:function(){return'<a target="_blank" rel="noreferrer noopener" href="'.concat(this.reference,'" style="').concat(this.backgroundStyle,'">\n\t<span style="').concat(this.linkStyle,'"></span>\n\t').concat(t("federatedfilesharing","Share with me via Nextcloud"),"\n</a>")},copyLinkTooltip:function(){return this.isCopied?t("federatedfilesharing","Cloud ID copied to the clipboard"):t("federatedfilesharing","Copy to clipboard")}},methods:{copyCloudId:function(){var e,r=this;return(e=x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=3;break}return(0,c.x2)(t("federatedfilesharing","Clipboard is not available")),e.abrupt("return");case 3:return e.next=5,navigator.clipboard.writeText(r.cloudId);case 5:r.isCopied=!0,(0,c.s$)(t("federatedfilesharing","Copied!")),r.$refs.clipboard.$el.focus();case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){A(i,n,o,a,c,"next",t)}function c(t){A(i,n,o,a,c,"throw",t)}a(void 0)}))})()},goTo:function(t){window.location.href=t}}},k=_,I=n(93379),S=n.n(I),L=n(7795),T=n.n(L),j=n(90569),N=n.n(j),M=n(3565),E=n.n(M),D=n(19216),O=n.n(D),P=n(44589),z=n.n(P),B=n(8118),Z={};Z.styleTagTransform=z(),Z.setAttributes=E(),Z.insert=N().bind(null,"head"),Z.domAPI=T(),Z.insertStyleElement=O(),S()(B.Z,Z),B.Z&&B.Z.locals&&B.Z.locals;var H=(0,p.Z)(k,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("federatedfilesharing","Federated Cloud"),description:t.t("federatedfilesharing","You can share with anyone who uses a Nextcloud server or other Open Cloud Mesh (OCM) compatible servers and services! Just put their Federated Cloud ID in the share dialog. It looks like person@cloud.example.com"),"doc-url":t.docUrlFederated}},[e("p",{staticClass:"cloud-id-text"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Your Federated Cloud ID:"))+"\n\t\t"),e("strong",{attrs:{id:"cloudid"}},[t._v(t._s(t.cloudId))]),t._v(" "),e("NcButton",{ref:"clipboard",staticClass:"clipboard",attrs:{title:t.copyLinkTooltip,"aria-label":t.copyLinkTooltip,type:"tertiary-no-background"},on:{click:function(e){return e.preventDefault(),t.copyCloudId.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Clipboard",{attrs:{size:20}})]},proxy:!0}])})],1),t._v(" "),e("p",{staticClass:"social-button"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Share it so your friends can share files with you:"))),e("br"),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareFacebookUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Facebook",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Facebook"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareTwitterUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Twitter",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Twitter"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareDiasporaUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{attrs:{width:"20",height:"20",viewBox:"-10 -5 1034 1034",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"currentColor",d:"M502 197q-96 0-96.5 1.5t-1.5 137-1.5 138-2 2.5T266 432.5 132.5 390t-30 94T74 578l232 77q21 8 21 10t-79.5 117.5T168 899t79.5 56.5T328 1011t81-110 82-110 41 55l83 115q43 60 44 60t79.5-58 79-59-76-112.5-76-113.5T795 632.5t129.5-44-28-94T867 400t-128 42-128.5 43-2.5-7.5-1-38.5l-3-108q-4-133-5-133.5t-97-.5z"}})])]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Diaspora"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){t.showHtml=!t.showHtml}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Web",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Add to your website"))+"\n\t\t")])],1),t._v(" "),t.showHtml?[e("p",{staticStyle:{margin:"10px 0"}},[e("a",{style:t.backgroundStyle,attrs:{target:"_blank",rel:"noreferrer noopener",href:t.reference}},[e("span",{style:t.linkStyle}),t._v("\n\t\t\t\t"+t._s(t.t("federatedfilesharing","Share with me via Nextcloud"))+"\n\t\t\t")])]),t._v(" "),e("p",[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","HTML Code:"))+"\n\t\t\t"),e("br"),t._v(" "),e("pre",[t._v(t._s(t.htmlCode))])])]:t._e()],2)}),[],!1,null,"77186a4d",null),F=H.exports;n.nc=btoa((0,i.IH)()),o.default.mixin({methods:{t:a.Iu}}),(new(o.default.extend(F))).$mount("#vue-personal-federated")},8118:function(t,e,r){var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,".social-button[data-v-77186a4d]{margin-top:.5rem}.social-button button[data-v-77186a4d]{display:inline-flex;margin-left:.5rem;margin-top:1rem}.cloud-id-text[data-v-77186a4d]{display:flex;align-items:center}.cloud-id-text button[data-v-77186a4d]{display:inline-flex}pre[data-v-77186a4d]{margin-top:0;white-space:pre-wrap}#cloudid[data-v-77186a4d]{margin-left:.25rem}","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,gCACC,gBAAA,CACA,uCACC,mBAAA,CACA,iBAAA,CACA,eAAA,CAGF,gCACC,YAAA,CACA,kBAAA,CACA,uCACC,mBAAA,CAGF,qBACC,YAAA,CACA,oBAAA,CAED,0BACC,kBAAA",sourcesContent:["\n.social-button {\n\tmargin-top: 0.5rem;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t\tmargin-left: 0.5rem;\n\t\tmargin-top: 1rem;\n\t}\n}\n.cloud-id-text {\n\tdisplay: flex;\n\talign-items: center;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t}\n}\npre {\n\tmargin-top: 0;\n\twhite-space: pre-wrap;\n}\n#cloudid {\n\tmargin-left: 0.25rem;\n}\n"],sourceRoot:""}]),e.Z=a},81490:function(t){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:function(t){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,e=[],a.O=function(t,r,n,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))},a.u=function(t){return t+"-"+t+".js?v=3b66be39570778909421"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r={},n="nextcloud:",a.l=function(t,e,o,i){if(r[t])r[t].push(e);else{var c,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",n+o),c.src=t),r[t]=[e];var f=function(e,n){c.onerror=c.onload=null,clearTimeout(h);var o=r[t];if(delete r[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=5855,function(){var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t}(),function(){a.b=document.baseURI||self.location.href;var t={5855:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var i=a.p+a.u(e),c=new Error;a.l(i,(function(r){if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],c=r[1],l=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(l)var s=l(a)}for(e&&e(r);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(s)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),a.nc=void 0;var c=a.O(void 0,[7874],(function(){return a(70134)}));c=a.O(c)}();
//# sourceMappingURL=federatedfilesharing-vue-settings-personal.js.map?v=2b64c23d62b602babbea