function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("7Y9D8");const i=document.querySelector(".form"),l=document.querySelector("input[name=delay]"),d=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]");function f(n,t){setTimeout((()=>{Math.random()>.3?e(u).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`):e(u).Notify.warning(`❌ Rejected promise ${n} in ${t}ms`)}),t)}i.addEventListener("submit",(function(e){let n=l.value;e.preventDefault();for(let e=1;e<=a.value;e++){f(e,n),n=Number(n)+Number(d.value)}}));
//# sourceMappingURL=03-promises.ad4e9ce4.js.map
