import{n as c,g as p}from"./xe0Jbztq.js";const e=[];function g(n,b=c){let i=null;const o=new Set;function r(t){if(p(n,t)&&(n=t,i)){const u=!e.length;for(const s of o)s[1](),e.push(s,n);if(u){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function l(t,u=c){const s=[t,u];return o.add(s),o.size===1&&(i=b(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:l}}export{g as w};
