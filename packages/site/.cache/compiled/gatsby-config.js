!function(e,n,t,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],f=u.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,t){if(!f[n]){if(!e[n]){var r="function"==typeof i[o]&&i[o];if(!t&&r)return r(n,!0);if(u)return u(n,!0);if(l&&"string"==typeof n)return l(n);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}c.resolve=function(t){var o=e[n][1][t];return null!=o?o:t},c.cache={};var d=f[n]=new s.Module(n);e[n][0].call(d.exports,c,d,d.exports,this)}return f[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:s(n)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=f,s.parent=u,s.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(s,"root",{get:function(){return i[o]}}),i[o]=s;for(var a=0;a<n.length;a++)s(n[a]);if(t){var d=s(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}}({i6vaQ:[function(e,n,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);t.default={jsxRuntime:"automatic",plugins:["gatsby-plugin-svgr","gatsby-plugin-styled-components",{resolve:"gatsby-plugin-manifest",options:{name:"Template Snap",icon:"src/assets/logo.svg",theme_color:"#6F4CFF",background_color:"#FFFFFF",display:"standalone"}}]}},{"@parcel/transformer-js/src/esmodule-helpers.js":"5hwXW"}],"5hwXW":[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach((function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}]},["i6vaQ"],"i6vaQ","parcelRequire7d4e");
//# sourceMappingURL=gatsby-config.js.map
