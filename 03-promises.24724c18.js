function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l=r("eWCmQ");const i=document.querySelector(".form");function u(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&t(`✅ Fulfilled promise ${e} in ${n}ms`),o(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}function s(n){e(l).Notify.success(n)}function a(n){e(l).Notify.failure(n)}i.addEventListener("submit",(e=>{e.preventDefault();let n=parseInt(i.delay.value),t=parseInt(i.step.value),o=parseInt(i.amount.value);console.log(typeof o);for(let e=0;e<o;e++){let o=n+t*e,r=e+1;console.log(o,r),u(r,o).then(s).catch(a)}}));
//# sourceMappingURL=03-promises.24724c18.js.map