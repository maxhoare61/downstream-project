import{S as T,M as $,N as j,O as P,P as G,I as g,Q as D,U as v,g as b,R as B,T as K,h as V,V as z,W as H,X as Q,Y as W,Z as X,b as U,_ as J,$ as k,a0 as Y,a1 as p,y as ee,a2 as re,a3 as ne,a4 as ae,f as q,a5 as te,a6 as ie,a7 as fe}from"./DzWE_ddi.js";function O(t,u=null,y){if(typeof t!="object"||t===null||T in t)return t;const o=V(t);if(o!==$&&o!==j)return t;var f=new Map,c=z(t),I=P(0);c&&f.set("length",P(t.length));var w;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&G();var a=f.get(e);return a===void 0?(a=P(r.value),f.set(e,a)):g(a,O(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(v));else{if(c&&typeof e=="string"){var a=f.get("length"),n=Number(e);Number.isInteger(n)&&n<a.v&&g(a,n)}g(r,v),F(I)}return!0},get(i,e,r){var _;if(e===T)return t;var a=f.get(e),n=e in i;if(a===void 0&&(!n||(_=D(i,e))!=null&&_.writable)&&(a=P(O(n?i[e]:v,w)),f.set(e,a)),a!==void 0){var s=b(a);return s===v?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=b(a))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===T)return!0;var r=f.get(e),a=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||B!==null&&(!a||(s=D(i,e))!=null&&s.writable)){r===void 0&&(r=P(a?O(i[e],w):v),f.set(e,r));var n=b(r);if(n===v)return!1}return a},set(i,e,r,a){var h;var n=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var R=f.get(_+"");R!==void 0?g(R,v):_ in i&&(R=P(v),f.set(_+"",R))}n===void 0?(!s||(h=D(i,e))!=null&&h.writable)&&(n=P(void 0),g(n,O(r,w)),f.set(e,n)):(s=n.v!==v,g(n,O(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(a,r),!s){if(c&&typeof e=="string"){var S=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=S.v&&g(S,E+1)}F(I)}return!0},ownKeys(i){b(I);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==v});for(var[r,a]of f)a.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){K()}})}function F(t,u=1){g(t,t.v+u)}let A=!1;function se(t){var u=A;try{return A=!1,[t(),A]}finally{A=u}}function Z(t){for(var u=B,y=B;u!==null&&!(u.f&(J|k));)u=u.parent;try{return Y(u),t()}finally{Y(y)}}function le(t,u,y,o){var M;var f=(y&p)!==0,c=!ee||(y&re)!==0,I=(y&ne)!==0,w=(y&ie)!==0,i=!1,e;I?[e,i]=se(()=>t[u]):e=t[u];var r=T in t||ae in t,a=I&&(((M=D(t,u))==null?void 0:M.set)??(r&&u in t&&(l=>t[u]=l)))||void 0,n=o,s=!0,_=!1,R=()=>(_=!0,s&&(s=!1,w?n=U(o):n=o),n);e===void 0&&o!==void 0&&(a&&c&&H(),e=R(),a&&a(e));var d;if(c)d=()=>{var l=t[u];return l===void 0?R():(s=!0,_=!1,l)};else{var S=Z(()=>(f?q:te)(()=>t[u]));S.f|=Q,d=()=>{var l=b(S);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(y&W))return d;if(a){var E=t.$$legacy;return function(l,m){return arguments.length>0?((!c||!m||E||i)&&a(m?d():l),l):d()}}var h=!1,C=!1,L=fe(e),N=Z(()=>q(()=>{var l=d(),m=b(L);return h?(h=!1,C=!0,m):(C=!1,L.v=l)}));return f||(N.equals=X),function(l,m){if(arguments.length>0){const x=m?b(N):c&&I?O(l):l;return N.equals(x)||(h=!0,g(L,x),_&&n!==void 0&&(n=x),U(()=>b(N))),l}return b(N)}}export{O as a,le as p};
