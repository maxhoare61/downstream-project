import{S as D,ad as K,ae as z,R as y,af as G,a9 as g,ag as T,U as v,o as b,z as q,ah as V,w as Z,V as $,ai as H,aj as Q,ak as J,al as W,u as U,am as X,an as k,ao as F,ap as p,a0 as ee,aq as re,ar as ae,as as ne,v as M,K as te,at as ie,Q as fe}from"./DMmpiZGU.js";function S(t,u=null,o){if(typeof t!="object"||t===null||D in t)return t;const P=Z(t);if(P!==K&&P!==z)return t;var f=new Map,c=$(t),w=y(0);c&&f.set("length",y(t.length));var m;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&G();var n=f.get(e);return n===void 0?(n=y(r.value),f.set(e,n)):g(n,S(r.value,m)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(v));else{if(c&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&g(n,a)}g(r,v),Y(w)}return!0},get(i,e,r){var _;if(e===D)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(_=T(i,e))!=null&&_.writable)&&(n=y(S(a?i[e]:v,m)),f.set(e,n)),n!==void 0){var s=b(n);return s===v?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=f.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===D)return!0;var r=f.get(e),n=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||q!==null&&(!n||(s=T(i,e))!=null&&s.writable)){r===void 0&&(r=y(n?S(i[e],m):v),f.set(e,r));var a=b(r);if(a===v)return!1}return n},set(i,e,r,n){var R;var a=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,v):_ in i&&(I=y(v),f.set(_+"",I))}a===void 0?(!s||(R=T(i,e))!=null&&R.writable)&&(a=y(void 0),g(a,S(r,m)),f.set(e,a)):(s=a.v!==v,g(a,S(r,m)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,r),!s){if(c&&typeof e=="string"){var E=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=E.v&&g(E,O+1)}Y(w)}return!0},ownKeys(i){b(w);var e=Reflect.ownKeys(i).filter(a=>{var s=f.get(a);return s===void 0||s.v!==v});for(var[r,n]of f)n.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){V()}})}function Y(t,u=1){g(t,t.v+u)}let N=!1;function se(t){var u=N;try{return N=!1,[t(),N]}finally{N=u}}function j(t){for(var u=q,o=q;u!==null&&!(u.f&(X|k));)u=u.parent;try{return F(u),t()}finally{F(o)}}function le(t,u,o,P){var C;var f=(o&p)!==0,c=!ee||(o&re)!==0,w=(o&ae)!==0,m=(o&ie)!==0,i=!1,e;w?[e,i]=se(()=>t[u]):e=t[u];var r=D in t||ne in t,n=w&&(((C=T(t,u))==null?void 0:C.set)??(r&&u in t&&(l=>t[u]=l)))||void 0,a=P,s=!0,_=!1,I=()=>(_=!0,s&&(s=!1,m?a=U(P):a=P),a);e===void 0&&P!==void 0&&(n&&c&&H(),e=I(),n&&n(e));var d;if(c)d=()=>{var l=t[u];return l===void 0?I():(s=!0,_=!1,l)};else{var E=j(()=>(f?M:te)(()=>t[u]));E.f|=Q,d=()=>{var l=b(E);return l!==void 0&&(a=void 0),l===void 0?a:l}}if(!(o&J))return d;if(n){var O=t.$$legacy;return function(l,h){return arguments.length>0?((!c||!h||O||i)&&n(h?d():l),l):d()}}var R=!1,B=!1,L=fe(e),A=j(()=>M(()=>{var l=d(),h=b(L);return R?(R=!1,B=!0,h):(B=!1,L.v=l)}));return f||(A.equals=W),function(l,h){if(arguments.length>0){const x=h?b(A):c&&w?S(l):l;return A.equals(x)||(R=!0,g(L,x),_&&a!==void 0&&(a=x),U(()=>b(A))),l}return b(A)}}export{S as a,le as p};
