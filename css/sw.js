if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const o=e=>i(e,c),f={module:{uri:c},exports:n,require:o};s[c]=Promise.all(t.map((e=>f[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-863cfbce"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bulma.min.css",revision:"682bfeb6af6cd864a6a70580643ab33e"},{url:"material-design-iconic-font.css",revision:"612a746cc755cfd3ceace05a85ab0da5"},{url:"style.css",revision:"2f8b92dac4dfb4538e0580fb28d3bb70"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
