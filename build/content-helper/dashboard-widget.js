!function(){"use strict";var e={418:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,c=s(e),l=1;l<arguments.length;l++){for(var p in a=Object(arguments[l]))r.call(a,p)&&(c[p]=a[p]);if(t){i=t(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(c[i[u]]=a[i[u]])}}return c}},251:function(e,t,r){r(418);var n=r(196),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),t.Fragment=o("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:p,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},893:function(e,t,r){e.exports=r(251)},196:function(e){e.exports=window.React}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e,t,n=r(893),s=window.wp.element,o=window.wp.i18n,a=window.wp.components,i=window.wp.url,c=window.wp.apiFetch,l=r.n(c),p=function(){return p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},p.apply(this,arguments)},u=function(e){void 0===e&&(e=null);var t="";(null==e?void 0:e.children)&&(t=e.children);var r="content-helper-error-message";return(null==e?void 0:e.className)&&(r+=" "+e.className),(0,n.jsx)("div",{className:r,"data-testid":null==e?void 0:e.testId,dangerouslySetInnerHTML:{__html:t}})},d=function(e){return void 0===e&&(e=null),(0,n.jsx)(u,p({className:null==e?void 0:e.className,testId:"empty-credentials-message"},{children:window.wpParselyEmptyCredentialsMessage}))},f=u,h=(e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function __(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}),y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},y.apply(this,arguments)};!function(e){e.CannotFormulateApiQuery="ch_cannot_formulate_api_query",e.FetchError="fetch_error",e[e.ParselyApiForbidden=403]="ParselyApiForbidden",e.ParselyApiResponseContainsError="ch_response_contains_error",e.ParselyApiReturnedNoData="ch_parsely_api_returned_no_data",e.ParselyApiReturnedTooManyResults="ch_parsely_api_returned_too_many_results",e.PluginCredentialsNotSetMessageDetected="parsely_credentials_not_set_message_detected",e.PluginSettingsApiSecretNotSet="parsely_api_secret_not_set",e.PluginSettingsSiteIdNotSet="parsely_site_id_not_set",e.PostIsNotPublished="ch_post_not_published"}(t||(t={}));var w=function(e){function r(n,s,a){void 0===a&&(a=(0,o.__)("Error: ","wp-parsely"));var i=e.call(this,a+n)||this;i.hint=null,i.name=i.constructor.name,i.code=s;var c=[t.ParselyApiForbidden,t.ParselyApiResponseContainsError,t.ParselyApiReturnedNoData,t.ParselyApiReturnedTooManyResults,t.PluginCredentialsNotSetMessageDetected,t.PluginSettingsApiSecretNotSet,t.PluginSettingsSiteIdNotSet,t.PostIsNotPublished];return i.retryFetch=!c.includes(i.code),Object.setPrototypeOf(i,r.prototype),i}return h(r,e),r.prototype.Message=function(e){return void 0===e&&(e=null),[t.PluginCredentialsNotSetMessageDetected,t.PluginSettingsSiteIdNotSet,t.PluginSettingsApiSecretNotSet].includes(this.code)?d(e):(this.code===t.FetchError&&(this.hint=this.Hint((0,o.__)("This error can sometimes be caused by ad-blockers or browser tracking protections. Please add this site to any applicable allow lists and try again.","wp-parsely"))),this.code===t.ParselyApiForbidden&&(this.hint=this.Hint((0,o.__)("Please ensure that the Site ID and API Secret given in the plugin's settings are correct.","wp-parsely"))),(0,n.jsx)(f,y({className:null==e?void 0:e.className,testId:"error"},{children:"<p>".concat(this.message,"</p>").concat(this.hint?this.hint:"")})))},r.prototype.Hint=function(e){return'<p className="content-helper-error-message-hint" data-testid="content-helper-error-message-hint"><strong>'.concat((0,o.__)("Hint:","wp-parsely"),"</strong> ").concat(e,"</p>")},r}(Error),v={month:"short",day:"numeric",year:"numeric"},m={month:"short",day:"numeric"},b=(0,o.__)("Date N/A","wp-parsely");function g(e){if(!1===function(e){"string"==typeof e&&(e=new Date(e));var t=e instanceof Date&&!isNaN(+e),r=0!==e.getTime();return t&&r}(e))return b;var t=v;return e.getUTCFullYear()===(new Date).getUTCFullYear()&&(t=m),Intl.DateTimeFormat(document.documentElement.lang||"en",t).format(e)}var _=function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},_.apply(this,arguments)},j=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))},x=function(e,t){var r,n,s,o,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(a=0)),a;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((s=(s=a.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){a.label=i[1];break}if(6===i[0]&&a.label<s[1]){a.label=s[1],s=i;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(i);break}s[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},P=function(){function e(){}return e.prototype.getTopPosts=function(){return j(this,void 0,void 0,(function(){var e,r;return x(this,(function(n){switch(n.label){case 0:e=[],n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.fetchTopPostsFromWpEndpoint()];case 2:return e=n.sent(),[3,4];case 3:return r=n.sent(),[2,Promise.reject(r)];case 4:return 0===e.length?[2,Promise.reject(new w((0,o.__)("No Top Posts data is available.","wp-parsely"),t.ParselyApiReturnedNoData,""))]:[2,e]}}))}))},e.prototype.fetchTopPostsFromWpEndpoint=function(){return j(this,void 0,void 0,(function(){var e,r;return x(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,l()({path:(0,i.addQueryArgs)("/wp-parsely/v1/stats/posts",_({limit:3},(7,{period_start:"".concat(7,"d"),period_end:""})))})];case 1:return e=n.sent(),[3,3];case 2:return r=n.sent(),[2,Promise.reject(new w(r.message,r.code))];case 3:return(null==e?void 0:e.error)?[2,Promise.reject(new w(e.error.message,t.ParselyApiResponseContainsError))]:[2,(null==e?void 0:e.data)||[]]}}))}))},e}();function N(e,t,r){void 0===t&&(t=1),void 0===r&&(r="");var n=parseInt(e.replace(/\D/g,""),10);if(n<1e3)return e;n<1e4&&(t=1);var s=n,o=n.toString(),a="",i=0;return Object.entries({1e3:"k","1,000,000":"M","1,000,000,000":"B","1,000,000,000,000":"T","1,000,000,000,000,000":"Q"}).forEach((function(e){var r=e[0],c=e[1],l=parseInt(r.replace(/\D/g,""),10);if(n>=l){var p=t;(s=n/l)%1>1/i&&(p=s>10?1:2),p=parseFloat(s.toFixed(2))===parseFloat(s.toFixed(0))?0:p,o=s.toFixed(p),a=c}i=l})),o+r+a}var O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},O.apply(this,arguments)},S=function(){return(0,n.jsxs)(a.SVG,O({"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)(a.Path,{d:"M0 3.29592C0 2.73237 0.456853 2.27551 1.02041 2.27551H4.08165C4.50432 2.27551 4.84696 2.61815 4.84696 3.04082C4.84696 3.46349 4.50432 3.80613 4.08165 3.80613H1.53062V11.9694H9.69391V9.6735C9.69391 9.25083 10.0366 8.90819 10.4592 8.90819C10.8819 8.90819 11.2245 9.25083 11.2245 9.6735V12.4796C11.2245 13.0432 10.7677 13.5 10.2041 13.5H1.02041C0.456854 13.5 0 13.0432 0 12.4796V3.29592Z"}),(0,n.jsx)(a.Path,{d:"M12.531 1.22415C12.8299 1.52303 12.8299 2.00759 12.531 2.30646L6.15342 8.68404C5.85455 8.98291 5.36998 8.98291 5.07111 8.68404C4.77224 8.38517 4.77224 7.9006 5.07111 7.60173L11.4487 1.22415C11.7476 0.925282 12.2321 0.925282 12.531 1.22415Z"}),(0,n.jsx)(a.Path,{d:"M6.63268 1.51012C6.63268 1.08745 6.97532 0.744812 7.39799 0.744812H12.2449C12.6676 0.744812 13.0103 1.08745 13.0103 1.51012V6.35708C13.0103 6.77975 12.6676 7.12239 12.2449 7.12239C11.8223 7.12239 11.4796 6.77975 11.4796 6.35708V2.27543H7.39799C6.97532 2.27543 6.63268 1.93279 6.63268 1.51012Z"})]}))},C=function(){return C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},C.apply(this,arguments)},E=function(){return(0,n.jsx)(a.SVG,C({"aria-hidden":"true",version:"1.1",viewBox:"0 0 15 15",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg"},{children:(0,n.jsx)(a.Path,{d:"M0 14.0025V11.0025L7.5 3.5025L10.5 6.5025L3 14.0025H0ZM12 5.0025L13.56 3.4425C14.15 2.8525 14.15 1.9025 13.56 1.3225L12.68 0.4425C12.09 -0.1475 11.14 -0.1475 10.56 0.4425L9 2.0025L12 5.0025Z"})}))},F=function(){return F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},F.apply(this,arguments)};function k(e){var t=e.post;return t.thumbUrlMedium?(0,n.jsxs)("div",F({className:"parsely-top-post-thumbnail"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("Thumbnail","wp-parsely")})),(0,n.jsx)("img",{src:t.thumbUrlMedium,alt:(0,o.__)("Post thumbnail","wp-parsely")})]})):(0,n.jsx)("div",F({className:"parsely-top-post-thumbnail"},{children:(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("Post thumbnail not available","wp-parsely")}))}))}function T(e){var t=e.post;return(0,n.jsxs)("a",F({className:"parsely-top-post-title",href:t.dashUrl,target:"_blank",rel:"noreferrer"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("View in Parse.ly (opens in new tab)","wp-parsely")})),t.title]}))}var A=function(e){var t,r=e.post;return(0,n.jsx)("li",F({className:"parsely-top-post"},{children:(0,n.jsxs)("div",F({className:"parsely-top-post-content"},{children:[k({post:r}),(0,n.jsxs)("div",F({className:"parsely-top-post-data"},{children:[(0,n.jsxs)("span",F({className:"parsely-top-post-views"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("Number of Views","wp-parsely")})),N(r.views.toString())]})),T({post:r}),(0,n.jsxs)("a",F({className:"parsely-top-post-icon-link",href:r.url,target:"_blank",rel:"noreferrer"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("View Post (opens in new tab)","wp-parsely")})),(0,n.jsx)(S,{})]})),0!==r.postId&&(0,n.jsxs)("a",F({className:"parsely-top-post-icon-link",href:(t=r.postId,"/wp-admin/post.php?post=".concat(t,"&action=edit")),target:"_blank",rel:"noreferrer"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("Edit Post (opens in new tab)","wp-parsely")})),(0,n.jsx)(E,{})]})),(0,n.jsxs)("div",F({className:"parsely-top-post-metadata"},{children:[(0,n.jsxs)("span",F({className:"parsely-top-post-date"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("Date","wp-parsely")})),g(new Date(r.date))]})),(0,n.jsxs)("span",F({className:"parsely-top-post-author"},{children:[(0,n.jsx)("span",F({className:"screen-reader-text"},{children:(0,o.__)("Author","wp-parsely")})),r.author]}))]}))]}))]}))}))},I=function(){return I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},I.apply(this,arguments)},M=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))},D=function(e,t){var r,n,s,o,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(a=0)),a;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((s=(s=a.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){a.label=i[1];break}if(6===i[0]&&a.label<s[1]){a.label=s[1],s=i;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(i);break}s[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},R=function(){var e=this,t=(0,s.useState)(!0),r=t[0],i=t[1],c=(0,s.useState)(),l=c[0],p=c[1],u=(0,s.useState)([]),d=u[0],f=u[1];if((0,s.useEffect)((function(){var t=new P,r=function(n){return M(e,void 0,void 0,(function(){var e=this;return D(this,(function(s){return t.getTopPosts().then((function(e){f(e),i(!1)})).catch((function(t){return M(e,void 0,void 0,(function(){return D(this,(function(e){switch(e.label){case 0:return n>0&&t.retryFetch?[4,new Promise((function(e){return setTimeout(e,500)}))]:[3,3];case 1:return e.sent(),[4,r(n-1)];case 2:return e.sent(),[3,4];case 3:i(!1),p(t),e.label=4;case 4:return[2]}}))}))})),[2]}))}))};return i(!0),r(1),function(){i(!1),f([]),p(void 0)}}),[]),l)return l.Message({className:"parsely-top-posts-descr"});var h=(0,n.jsx)("ol",I({className:"parsely-top-posts"},{children:d.map((function(e){return(0,n.jsx)(A,{post:e},e.id)}))}));return r?(0,n.jsx)("div",I({className:"parsely-spinner-wrapper"},{children:(0,n.jsx)(a.Spinner,{})})):(0,n.jsxs)("div",I({className:"parsely-top-posts-wrapper"},{children:[(0,n.jsx)("div",I({className:"page-views-title"},{children:(0,o.__)("Page Views","wp-parsely")})),h]}))},L=function(e,t){var r=e.children;return void 0===t&&(t=null),window.wpParselyEmptyCredentialsMessage?d(t):(0,n.jsx)(n.Fragment,{children:r})};window.addEventListener("load",(function(){(0,s.render)((0,n.jsx)(L,{children:(0,n.jsx)(R,{})}),document.querySelector("#wp-parsely-dashboard-widget > .inside"))}),!1)}()}();