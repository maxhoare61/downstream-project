import{S as A,ag as j,ah as G,N as y,ai as z,a0 as g,aj as D,U as l,o as b,z as x,ak as K,w as Z,R as $,al as H,am as V,an as J,ao as Q,u as C,ap as W,aq as X,ar as M,as as k,ac as p,at as ee,au as re,av as ae,v as U,G as ne,aw as te,M as ie}from"./BO0ceATm.js";import{c as fe}from"./nJR29r1M.js";function S(t,v=null,o){if(typeof t!="object"||t===null||A in t)return t;const P=Z(t);if(P!==j&&P!==G)return t;var f=new Map,c=$(t),m=y(0);c&&f.set("length",y(t.length));var w;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&z();var n=f.get(e);return n===void 0?(n=y(r.value),f.set(e,n)):g(n,S(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(c&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&g(n,a)}g(r,l),F(m)}return!0},get(i,e,r){var _;if(e===A)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(_=D(i,e))!=null&&_.writable)&&(n=y(S(a?i[e]:l,w)),f.set(e,n)),n!==void 0){var u=b(n);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===A)return!0;var r=f.get(e),n=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||x!==null&&(!n||(u=D(i,e))!=null&&u.writable)){r===void 0&&(r=y(n?S(i[e],w):l),f.set(e,r));var a=b(r);if(a===l)return!1}return n},set(i,e,r,n){var R;var a=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,l):_ in i&&(I=y(l),f.set(_+"",I))}a===void 0?(!u||(R=D(i,e))!=null&&R.writable)&&(a=y(void 0),g(a,S(r,w)),f.set(e,a)):(u=a.v!==l,g(a,S(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,r),!u){if(c&&typeof e=="string"){var E=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=E.v&&g(E,O+1)}F(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(a=>{var u=f.get(a);return u===void 0||u.v!==l});for(var[r,n]of f)n.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){K()}})}function F(t,v=1){g(t,t.v+v)}function Y(t){for(var v=x,o=x;v!==null&&!(v.f&(W|X));)v=v.parent;try{return M(v),t()}finally{M(o)}}function ve(t,v,o,P){var B;var f=(o&k)!==0,c=!p||(o&ee)!==0,m=(o&re)!==0,w=(o&te)!==0,i=!1,e;m?[e,i]=fe(()=>t[v]):e=t[v];var r=A in t||ae in t,n=m&&(((B=D(t,v))==null?void 0:B.set)??(r&&v in t&&(s=>t[v]=s)))||void 0,a=P,u=!0,_=!1,I=()=>(_=!0,u&&(u=!1,w?a=C(P):a=P),a);e===void 0&&P!==void 0&&(n&&c&&H(),e=I(),n&&n(e));var d;if(c)d=()=>{var s=t[v];return s===void 0?I():(u=!0,_=!1,s)};else{var E=Y(()=>(f?U:ne)(()=>t[v]));E.f|=V,d=()=>{var s=b(E);return s!==void 0&&(a=void 0),s===void 0?a:s}}if(!(o&J))return d;if(n){var O=t.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||O||i)&&n(h?d():s),s):d()}}var R=!1,q=!1,T=ie(e),N=Y(()=>U(()=>{var s=d(),h=b(T);return R?(R=!1,q=!0,h):(q=!1,T.v=s)}));return f||(N.equals=Q),function(s,h){if(arguments.length>0){const L=h?b(N):c&&m?S(s):s;return N.equals(L)||(R=!0,g(T,L),_&&a!==void 0&&(a=L),C(()=>b(N))),s}return b(N)}}export{S as a,ve as p};
