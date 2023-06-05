!function(){"use strict";var e,r={764:function(e,r,n){var t,a,o=n(893),i=window.wp.i18n,l=window.wp.blocks,s=window.wp.blockEditor,c=window.wp.apiFetch,u=n.n(c),p=window.wp.compose,d=window.wp.element,f=window.wp.url;(a=t||(t={}))[a.Error=0]="Error",a[a.Loaded=1]="Loaded",a[a.Recommendations=2]="Recommendations";var m=function(){return m=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},m.apply(this,arguments)},w=(0,d.createContext)({}),y=function(e,r){switch(r.type){case t.Error:return m(m({},e),{isLoaded:!0,error:r.error,recommendations:[]});case t.Loaded:return m(m({},e),{isLoaded:!0});case t.Recommendations:var n=r.recommendations;if(!Array.isArray(n))return m(m({},e),{recommendations:[]});var a=n.map((function(e){return{title:e.title,url:e.url,image_url:e.image_url,thumb_url_medium:e.thumb_url_medium}}));return m(m({},e),{isLoaded:!0,error:null,recommendations:a});default:return m({},e)}},v=function(){return(0,d.useContext)(w)},b=function(e){var r,n,t,a,i={isLoaded:!1,recommendations:[],uuid:null!==(t=null===(n=null===(r=window.PARSELY)||void 0===r?void 0:r.config)||void 0===n?void 0:n.uuid)&&void 0!==t?t:null,clientId:null!==(a=null==e?void 0:e.clientId)&&void 0!==a?a:null,error:null},l=(0,d.useReducer)(y,i),s=l[0],c=l[1];return(0,o.jsx)(w.Provider,m({value:{state:s,dispatch:c}},e))},_=function(){return _=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},_.apply(this,arguments)},g=function(e,r,n,t){return new(n||(n=Promise))((function(a,o){function i(e){try{s(t.next(e))}catch(e){o(e)}}function l(e){try{s(t.throw(e))}catch(e){o(e)}}function s(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,l)}s((t=t.apply(e,r||[])).next())}))},h=function(e,r){var n,t,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,t&&(a=2&l[0]?t.return:l[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,l[1])).done)return a;switch(t=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=r.call(e,i)}catch(e){l=[6,e],t=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},j=function(e){var r=e.boost,n=e.limit,a=e.sort,o=e.isEditMode,i=v().dispatch,l=(0,d.useMemo)((function(){return{boost:r,limit:n,sort:a,url:window.location.href,itm_source:"wp-parsely-recommendations-block"}}),[r,n,a]);function s(){return g(this,void 0,void 0,(function(){return h(this,(function(e){return[2,u()({path:(0,f.addQueryArgs)("/wp-parsely/v1/related",{query:l})})]}))}))}var c=(0,p.useDebounce)((function(){var e;return g(this,void 0,void 0,(function(){var r,n,a,l;return h(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,s()];case 1:return r=c.sent(),[3,3];case 2:return a=c.sent(),n=a,[3,3];case 3:return(null==r?void 0:r.error)&&(n=r.error),n?(i(function(e){var r=e.error;return{type:t.Error,error:r}}({error:n})),[2]):(l=null!==(e=null==r?void 0:r.data)&&void 0!==e?e:[],o&&(l=l.map((function(e){return _(_({},e),{url:"#"})}))),i(function(e){var r=e.recommendations;return{type:t.Recommendations,recommendations:r}}({recommendations:l})),[2])}}))}))}),300);return(0,d.useEffect)((function(){c()}),[l,c]),null},x=window.wp.components,O=function(){return O=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},O.apply(this,arguments)},P=function(e,r,n){return"original"===e?r:n},k=function(e){return!0===Boolean(e)?{target:"_blank",rel:"noopener"}:{target:"_self",rel:""}},C=function(e){var r=e.imageAlt,n=e.imagestyle,t=e.openlinksinnewtab,a=e.recommendation,i=a.title,l=a.url,s=a.image_url,c=a.thumb_url_medium,u=e.showimages;return(0,o.jsx)("li",{children:(0,o.jsx)("a",O({href:l,className:"parsely-recommendations-link"},k(t),{children:(0,o.jsxs)(x.Card,{className:"parsely-recommendations-card",children:[u&&(0,o.jsx)(x.CardMedia,{className:"parsely-recommendations-cardmedia",children:(0,o.jsx)("img",{className:"parsely-recommendations-image",src:P(n,s,c),alt:r})}),(0,o.jsx)(x.CardBody,{className:"parsely-recommendations-cardbody",children:i})]})}))})},R=function(e){var r=e.imagestyle,n=e.recommendations,t=e.showimages,a=e.openlinksinnewtab;return(0,o.jsx)("ul",{className:"parsely-recommendations-list",children:n.map((function(e){return(0,o.jsx)(C,{imageAlt:(0,i.__)("Image for link","wp-parsely"),imagestyle:r,openlinksinnewtab:a,recommendation:e,showimages:t},e.url)}))})},E=function(e){var r=e.title;return r?(0,o.jsx)("p",{className:"parsely-recommendations-list-title",children:r}):(0,o.jsx)(o.Fragment,{})};function S(e){var r,n,t=e.boost,a=e.imagestyle,l=e.isEditMode,s=e.limit,c=e.openlinksinnewtab,u=e.showimages,p=e.sort,d=e.title,f=v().state,m=f.error,w=f.isLoaded,y=f.recommendations;return w&&l&&(m?((n="".concat((0,i.__)("Error:","wp-parsely")," ").concat(JSON.stringify(m))).includes('"errors":{"http_request_failed"')||"object"==typeof m&&"fetch_error"===(null==m?void 0:m.code)?n=(0,i.__)("The Parse.ly Recommendations API is not accessible. You may be offline.","wp-parsely"):n.includes('Error: {"code":403,"message":"Forbidden","data":null}')?n=(0,i.__)("Access denied. Please verify that your Site ID is valid.","wp-parsely"):"object"==typeof m&&"rest_no_route"===(null==m?void 0:m.code)&&(n=(0,i.__)("The REST route is unavailable. To use it, wp_parsely_enable_related_api_proxy should be true.","wp-parsely")),r=n):Array.isArray(y)&&!(null==y?void 0:y.length)&&(r=(0,i.__)("No recommendations found.","wp-parsely"))),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{boost:t,limit:s,sort:p,isEditMode:l}),!w&&(0,o.jsx)("span",{className:"parsely-recommendations-loading",children:(0,i.__)("Loading…","wp-parsely")}),r&&(0,o.jsx)("span",{className:"parsely-recommendations-error",children:r}),w&&!!(null==y?void 0:y.length)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{title:d}),(0,o.jsx)(R,{imagestyle:a,openlinksinnewtab:c,recommendations:y,showimages:u})]})]})}var A=function(e){var r=e.attributes,n=r.boost,t=r.imagestyle,a=r.limit,l=r.openlinksinnewtab,c=r.showimages,u=r.sort,p=r.title,d=e.setAttributes;return(0,o.jsx)(s.InspectorControls,{children:(0,o.jsxs)(x.PanelBody,{title:"Settings",initialOpen:!0,children:[(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.TextControl,{label:(0,i.__)("Title","wp-parsely"),value:p,onChange:function(e){return d({title:e})}})}),(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.RangeControl,{label:(0,i.__)("Maximum Results","wp-parsely"),min:1,max:25,onChange:function(e){return d({limit:e})},value:a})}),(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.ToggleControl,{label:(0,i.__)("Open Links in New Tab","wp-parsely"),checked:l,onChange:function(){return d({openlinksinnewtab:!l})}})}),(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.ToggleControl,{label:(0,i.__)("Show Images","wp-parsely"),help:c?(0,i.__)("Showing images","wp-parsely"):(0,i.__)("Not showing images","wp-parsely"),checked:c,onChange:function(){return d({showimages:!c})}})}),c&&(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.RadioControl,{label:(0,i.__)("Image style","wp-parsely"),selected:t,options:[{label:(0,i.__)("Original image","wp-parsely"),value:"original"},{label:(0,i.__)("Thumbnail from Parse.ly","wp-parsely"),value:"thumbnail"}],onChange:function(e){d({imagestyle:"original"===e?"original":"thumbnail"})}})}),(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.SelectControl,{label:(0,i.__)("Sort Recommendations","wp-parsely"),value:u,options:[{label:(0,i.__)("Score","wp-parsely"),value:"score"},{label:(0,i.__)("Publication Date","wp-parsely"),value:"pub_date"}],onChange:function(e){return d({sort:e})}})}),(0,o.jsx)(x.PanelRow,{children:(0,o.jsx)(x.SelectControl,{label:(0,i.__)("Boost","wp-parsely"),value:n,options:[{label:(0,i.__)("Page views","wp-parsely"),value:"views"},{label:(0,i.__)("Page views on mobile devices","wp-parsely"),value:"mobile_views"},{label:(0,i.__)("Page views on tablet devices","wp-parsely"),value:"tablet_views"},{label:(0,i.__)("Page views on desktop devices","wp-parsely"),value:"desktop_views"},{label:(0,i.__)("Unique page visitors","wp-parsely"),value:"visitors"},{label:(0,i.__)("New visitors","wp-parsely"),value:"visitors_new"},{label:(0,i.__)("Returning visitors","wp-parsely"),value:"visitors_returning"},{label:(0,i.__)("Total engagement time in minutes","wp-parsely"),value:"engaged_minutes"},{label:(0,i.__)("Engaged minutes spent by total visitors","wp-parsely"),value:"avg_engaged"},{label:(0,i.__)("Average engaged minutes spent by new visitors","wp-parsely"),value:"avg_engaged_new"},{label:(0,i.__)("Average engaged minutes spent by returning visitors","wp-parsely"),value:"avg_engaged_returning"},{label:(0,i.__)("Total social interactions","wp-parsely"),value:"social_interactions"},{label:(0,i.__)("Count of Facebook shares, likes, and comments","wp-parsely"),value:"fb_interactions"},{label:(0,i.__)("Count of Twitter tweets and retweets","wp-parsely"),value:"tw_interactions"},{label:(0,i.__)("Count of Pinterest pins","wp-parsely"),value:"pi_interactions"},{label:(0,i.__)("Page views where the referrer was any social network","wp-parsely"),value:"social_referrals"},{label:(0,i.__)("Page views where the referrer was facebook.com","wp-parsely"),value:"fb_referrals"},{label:(0,i.__)("Page views where the referrer was twitter.com","wp-parsely"),value:"tw_referrals"},{label:(0,i.__)("Page views where the referrer was pinterest.com","wp-parsely"),value:"pi_referrals"}],onChange:function(e){return d({boost:e})}})})]})})},N=JSON.parse('{"u2":"wp-parsely/recommendations","Y4":{"boost":{"type":"string","default":"views"},"imagestyle":{"type":"string","default":"original"},"limit":{"type":"number","default":3},"openlinksinnewtab":{"type":"boolean","default":false},"showimages":{"type":"boolean","default":true},"sort":{"type":"string","default":"score"},"title":{"type":"string","default":"Related Content"}}}'),T=function(){return T=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},T.apply(this,arguments)},L=N.u2,I=N.Y4;(0,l.registerBlockType)(L,{apiVersion:2,icon:function(){return(0,o.jsxs)(x.SVG,{height:24,viewBox:"0 0 60 65",width:24,xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)(x.Path,{fill:"#5ba745",d:"M23.72,51.53c0-.18,0-.34-.06-.52a13.11,13.11,0,0,0-2.1-5.53A14.74,14.74,0,0,0,19.12,43c-.27-.21-.5-.11-.51.22l-.24,3.42c0,.33-.38.35-.49,0l-1.5-4.8a1.4,1.4,0,0,0-.77-.78,23.91,23.91,0,0,0-3.1-.84c-1.38-.24-3.39-.39-3.39-.39-.34,0-.45.21-.25.49l2.06,3.76c.2.27,0,.54-.29.33l-4.51-3.6a3.68,3.68,0,0,0-2.86-.48c-1,.16-2.44.46-2.44.46a.68.68,0,0,0-.39.25.73.73,0,0,0-.14.45S.41,43,.54,44a3.63,3.63,0,0,0,1.25,2.62L6.48,50c.28.2.09.49-.23.37l-4.18-.94c-.32-.12-.5,0-.4.37,0,0,.69,1.89,1.31,3.16a24,24,0,0,0,1.66,2.74,1.34,1.34,0,0,0,1,.52l5,.13c.33,0,.41.38.1.48L7.51,58c-.31.1-.34.35-.07.55a14.29,14.29,0,0,0,3.05,1.66,13.09,13.09,0,0,0,5.9.5,25.13,25.13,0,0,0,4.34-1,9.55,9.55,0,0,1-.08-1.2,9.32,9.32,0,0,1,3.07-6.91"}),(0,o.jsx)(x.Path,{fill:"#5ba745",d:"M59.7,41.53a.73.73,0,0,0-.14-.45.68.68,0,0,0-.39-.25s-1.43-.3-2.44-.46a3.64,3.64,0,0,0-2.86.48l-4.51,3.6c-.26.21-.49-.06-.29-.33l2.06-3.76c.2-.28.09-.49-.25-.49,0,0-2,.15-3.39.39a23.91,23.91,0,0,0-3.1.84,1.4,1.4,0,0,0-.77.78l-1.5,4.8c-.11.32-.48.3-.49,0l-.24-3.42c0-.33-.24-.43-.51-.22a14.74,14.74,0,0,0-2.44,2.47A13.11,13.11,0,0,0,36.34,51c0,.18,0,.34-.06.52a9.26,9.26,0,0,1,3,8.1,24.1,24.1,0,0,0,4.34,1,13.09,13.09,0,0,0,5.9-.5,14.29,14.29,0,0,0,3.05-1.66c.27-.2.24-.45-.07-.55l-3.22-1.17c-.31-.1-.23-.47.1-.48l5-.13a1.38,1.38,0,0,0,1-.52A24.6,24.6,0,0,0,57,52.92c.61-1.27,1.31-3.16,1.31-3.16.1-.33-.08-.49-.4-.37l-4.18.94c-.32.12-.51-.17-.23-.37l4.69-3.34A3.63,3.63,0,0,0,59.46,44c.13-1,.24-2.47.24-2.47"}),(0,o.jsx)(x.Path,{fill:"#5ba745",d:"M46.5,25.61c0-.53-.35-.72-.8-.43l-4.86,2.66c-.45.28-.56-.27-.23-.69l4.66-6.23a2,2,0,0,0,.28-1.68,36.51,36.51,0,0,0-2.19-4.89,34,34,0,0,0-2.81-3.94c-.33-.41-.74-.35-.91.16l-2.28,5.68c-.16.5-.6.48-.59-.05l.28-8.93a2.54,2.54,0,0,0-.66-1.64S35,4.27,33.88,3.27,30.78.69,30.78.69a1.29,1.29,0,0,0-1.54,0s-1.88,1.49-3.12,2.59-2.48,2.35-2.48,2.35A2.5,2.5,0,0,0,23,7.27l.27,8.93c0,.53-.41.55-.58.05l-2.29-5.69c-.17-.5-.57-.56-.91-.14a35.77,35.77,0,0,0-3,4.2,35.55,35.55,0,0,0-2,4.62,2,2,0,0,0,.27,1.67l4.67,6.24c.33.42.23,1-.22.69l-4.87-2.66c-.45-.29-.82-.1-.82.43a18.6,18.6,0,0,0,.83,5.07,20.16,20.16,0,0,0,5.37,7.77c3.19,3,5.93,7.8,7.45,11.08A9.6,9.6,0,0,1,30,49.09a9.31,9.31,0,0,1,2.86.45c1.52-3.28,4.26-8.11,7.44-11.09a20.46,20.46,0,0,0,5.09-7,19,19,0,0,0,1.11-5.82"}),(0,o.jsx)(x.Path,{fill:"#5ba745",d:"M36.12,58.44A6.12,6.12,0,1,1,30,52.32a6.11,6.11,0,0,1,6.12,6.12"})]})},category:"widgets",edit:function(e){return(0,o.jsx)("div",T({},(0,s.useBlockProps)(),{children:(0,o.jsxs)(b,{clientId:e.clientId,children:[(0,o.jsx)(A,T({},e)),(0,o.jsx)(S,T({},e.attributes,{isEditMode:!0}))]})}))},example:{attributes:{preview:!0}},attributes:T(T({},I),{title:{type:"string",default:(0,i.__)("Related Content","wp-parsely")}}),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var r=e.idBase,n=e.instance;return!!(null==n?void 0:n.raw)&&"Parsely_Recommended_Widget"===r},transform:function(e){var r=e.instance;return(0,l.createBlock)("wp-parsely/recommendations",{name:r.raw.name})}}]}})},418:function(e){var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(r){l=r(i);for(var p=0;p<l.length;p++)t.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},251:function(e,r,n){n(418);var t=n(196),a=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),r.Fragment=o("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,o={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,t)&&!s.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:i.current}}r.jsx=c,r.jsxs=c},893:function(e,r,n){e.exports=n(251)},196:function(e){e.exports=window.React}},n={};function t(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,t),o.exports}t.m=r,e=[],t.O=function(r,n,a,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={878:0,570:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,o,i=n[0],l=n[1],s=n[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var u=s(t)}for(r&&r(n);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},n=self.webpackChunkwp_parsely=self.webpackChunkwp_parsely||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var a=t.O(void 0,[570],(function(){return t(764)}));a=t.O(a)}();