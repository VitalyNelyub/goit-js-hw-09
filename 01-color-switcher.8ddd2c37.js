!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,l=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,y=function(){return l.Date.now()};function p(t,e,n){var r,i,u,a,f,c,d=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=r,o=i;return r=i=void 0,d=e,a=t.apply(o,n)}function h(t){return d=t,f=setTimeout(T,e),l?j(t):a}function O(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-d>=u}function T(){var t=y();if(O(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?b(n,u-(t-d)):n}(t))}function w(t){return f=void 0,p&&r?j(t):(r=i=void 0,a)}function M(){var t=y(),n=O(t);if(r=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,e),j(c)}return void 0===f&&(f=setTimeout(T,e)),a}return e=g(e)||0,m(n)&&(l=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),M.cancel=function(){void 0!==f&&clearTimeout(f),d=0,r=c=i=f=void 0},M.flush=function(){return void 0===f?a:w(y())},M}function m(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=m(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=u.test(t);return c||a.test(t)?f(t.slice(2),c?2:8):i.test(t)?NaN:+t}var j=document.querySelector("button[data-start]"),h=document.querySelector("button[data-stop]");j.addEventListener("click",(function(t){t.target==j&&(j.disabled=!0,h.disabled=!1,O=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),h.addEventListener("click",(function(t){t.target==h&&(clearInterval(O),h.disabled=!0,j.disabled=!1)}));var O=null;h.disabled=!0}();
//# sourceMappingURL=01-color-switcher.8ddd2c37.js.map
