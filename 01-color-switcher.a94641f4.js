!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,y=function(){return d.Date.now()};function p(t,e,n){var r,i,u,f,c,a,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function h(t){return l=t,c=setTimeout(T,e),d?j(t):f}function O(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-l>=u}function T(){var t=y();if(O(t))return w(t);c=setTimeout(T,function(t){var n=e-(t-a);return s?b(n,u-(t-l)):n}(t))}function w(t){return c=void 0,p&&r?j(t):(r=i=void 0,f)}function M(){var t=y(),n=O(t);if(r=arguments,i=this,a=t,n){if(void 0===c)return h(a);if(s)return c=setTimeout(T,e),j(a)}return void 0===c&&(c=setTimeout(T,e)),f}return e=m(e)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(m(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),M.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=a=i=c=void 0},M.flush=function(){return void 0===c?f:w(y())},M}function g(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=g(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=u.test(t);return a||f.test(t)?c(t.slice(2),a?2:8):i.test(t)?NaN:+t}var j=document.querySelector("button[data-start]"),h=document.querySelector("button[data-stop]");console.log(j),console.log(h),j.addEventListener("click",(function(t){t.target==j&&(console.log("Я кнопка старта генерации фона"),document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))))})),h.addEventListener("click",(function(t){t.target==h&&console.log("Я кнопка остановки генерации фона")}))}();
//# sourceMappingURL=01-color-switcher.a94641f4.js.map
