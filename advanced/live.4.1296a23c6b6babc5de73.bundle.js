(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){var a=n(138);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(a,r);a.locals&&(e.exports=a.locals)},138:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t),n.d(t,"CommentsList",function(){return v});var a=n(2),r=n.n(a),c=n(332),s=n(333);n(137);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l,m=c.a.ul({}),u=c.a.li({enter:{opacity:1},exit:{opacity:0}}),f=new s.a,v=Object(a.memo)(function(){var e=i(Object(a.useState)([]),2),t=e[0],n=e[1];return Object(a.useEffect)(function(){l||((l=new WebSocket("ws://".concat(window.location.hostname,":").concat(void 0))).onmessage=function(e){var t=e.data,a=JSON.parse(t);if(Array.isArray(a)&&0!==a.length)if("Rate limit exceeded"===a[0].message);else if("hello:)"===a[0].message);else{var r=a.reverse().map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){o(e,t,n[t])})}return e}({},e,{createdAt:f.format(e.createdAt)})});n(function(e){return e.concat(r)})}})},[]),r.a.createElement("div",{className:"comments-list"},r.a.createElement("div",{className:"comments-list-title"},r.a.createElement("span",null,"Private Mode"),r.a.createElement("span",{className:"comments-list-total"},t.length," comments")),r.a.createElement(m,{className:"comments-list-ul"},r.a.createElement("div",null,t.map(function(e){var t=e.id,n=e.avatar,a=e.text,c=e.screenName,s=e.createdAt;return r.a.createElement(u,{key:t,className:"comments-list-li"},n&&r.a.createElement("img",{src:n,className:"comments-list-li-avatar"}),r.a.createElement("div",{className:"comments-list-li-body"},r.a.createElement("div",{className:"comments-list-li-body-info"},r.a.createElement("span",{className:"comments-list-li-screen-name"},"@",c),r.a.createElement("span",{className:"comments-list-li-time-ago"},s)),r.a.createElement("span",{className:"comments-list-li-comment"},a)))}))))})}}]);