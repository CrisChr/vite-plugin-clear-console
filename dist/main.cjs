"use strict";const c=/(vue|svelte|js|[jt]sx?)$/;function i(t){const e=t.split(".");return e[e.length-1]}function p(t={consoleType:["log"]}){const{consoleType:e}=t;return{name:"vite-plugin-clear-console",apply:"build",enforce:"post",transform(n,r){if(/node_modules/.test(r))return n;if(!c.test(i(r)))return;let s=n,l=[];return e.forEach(o=>{l.push(new RegExp(`console.${o}()`))}),l.forEach(o=>{s=s.replace(o,"").trim()}),s}}}module.exports=p;
