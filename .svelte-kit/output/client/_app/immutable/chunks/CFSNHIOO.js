import{S as D,C as K,D as Z,E as P,F as j,z as g,G as T,U as v,g as b,H as C,I as z,h as H,J as V,K as $,M as J,P as Q,N as W,b as M,O as X,R as k,Q as U,T as p,n as ee,V as re,W as ne,X as te,f as Y,Y as ae,Z as ie,_ as fe}from"./CXh6Pbic.js";function E(a,u=null,y){if(typeof a!="object"||a===null||D in a)return a;const o=H(a);if(o!==K&&o!==Z)return a;var f=new Map,c=V(a),I=P(0);c&&f.set("length",P(a.length));var w;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var t=f.get(e);return t===void 0?(t=P(r.value),f.set(e,t)):g(t,E(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(v));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,v),q(I)}return!0},get(i,e,r){var _;if(e===D)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=T(i,e))!=null&&_.writable)&&(t=P(E(n?i[e]:v,w)),f.set(e,t)),t!==void 0){var s=b(t);return s===v?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===D)return!0;var r=f.get(e),t=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||C!==null&&(!t||(s=T(i,e))!=null&&s.writable)){r===void 0&&(r=P(t?E(i[e],w):v),f.set(e,r));var n=b(r);if(n===v)return!1}return t},set(i,e,r,t){var h;var n=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var R=f.get(_+"");R!==void 0?g(R,v):_ in i&&(R=P(v),f.set(_+"",R))}n===void 0?(!s||(h=T(i,e))!=null&&h.writable)&&(n=P(void 0),g(n,E(r,w)),f.set(e,n)):(s=n.v!==v,g(n,E(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!s){if(c&&typeof e=="string"){var O=f.get("length"),S=Number(e);Number.isInteger(S)&&S>=O.v&&g(O,S+1)}q(I)}return!0},ownKeys(i){b(I);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==v});for(var[r,t]of f)t.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){z()}})}function q(a,u=1){g(a,a.v+u)}let A=!1;function se(a){var u=A;try{return A=!1,[a(),A]}finally{A=u}}function G(a){for(var u=C,y=C;u!==null&&!(u.f&(X|k));)u=u.parent;try{return U(u),a()}finally{U(y)}}function le(a,u,y,o){var F;var f=(y&p)!==0,c=!ee||(y&re)!==0,I=(y&ne)!==0,w=(y&ie)!==0,i=!1,e;I?[e,i]=se(()=>a[u]):e=a[u];var r=D in a||te in a,t=I&&(((F=T(a,u))==null?void 0:F.set)??(r&&u in a&&(l=>a[u]=l)))||void 0,n=o,s=!0,_=!1,R=()=>(_=!0,s&&(s=!1,w?n=M(o):n=o),n);e===void 0&&o!==void 0&&(t&&c&&$(),e=R(),t&&t(e));var d;if(c)d=()=>{var l=a[u];return l===void 0?R():(s=!0,_=!1,l)};else{var O=G(()=>(f?Y:ae)(()=>a[u]));O.f|=J,d=()=>{var l=b(O);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(y&Q))return d;if(t){var S=a.$$legacy;return function(l,m){return arguments.length>0?((!c||!m||S||i)&&t(m?d():l),l):d()}}var h=!1,B=!1,L=fe(e),N=G(()=>Y(()=>{var l=d(),m=b(L);return h?(h=!1,B=!0,m):(B=!1,L.v=l)}));return f||(N.equals=W),function(l,m){if(arguments.length>0){const x=m?b(N):c&&I?E(l):l;return N.equals(x)||(h=!0,g(L,x),_&&n!==void 0&&(n=x),M(()=>b(N))),l}return b(N)}}export{E as a,le as p};
