import{s as a,g as c}from"./B1fG5muO.js";import{I as b,J as o,o as l,K as p,L as d,F as _}from"./DwA5C2Sx.js";let s=!1,i=Symbol();function y(e,n,r){const u=r[n]??(r[n]={store:null,source:b(void 0),unsubscribe:o});if(u.store!==e&&!(i in r))if(u.unsubscribe(),u.store=e,e==null)u.source.v=void 0,u.unsubscribe=o;else{var t=!0;u.unsubscribe=a(e,f=>{t?u.source.v=f:_(u.source,f)}),t=!1}return i in r?c(e):l(u.source)}function m(){const e={};function n(){p(()=>{for(var r in e)e[r].unsubscribe();d(e,i,{enumerable:!1,value:!0})})}return[e,n]}function I(e){var n=s;try{return s=!1,[e(),s]}finally{s=n}}export{y as a,I as c,m as s};
