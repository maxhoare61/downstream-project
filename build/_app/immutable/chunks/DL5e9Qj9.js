import{ah as g,Q as S,O as b,P as D,ai as p,c,s as R,a as I,f as u,aj as L,ak as V,al as H,am as M,an as P,ao as Y,M as j,e as k,w as C,h as w,a1 as $,A as Q,l as W}from"./DwA5C2Sx.js";import{a as q,r as A,h}from"./YE37X6u0.js";import{r as z}from"./BCNvZDCa.js";import{b as B}from"./XY3dAnIK.js";const F=["touchstart","touchmove"];function G(t){return F.includes(t)}function x(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function J(t,e){return N(t,e)}function ee(t,e){g(),e.intro=e.intro??!1;const r=e.target,_=w,l=u;try{for(var a=S(r);a&&(a.nodeType!==8||a.data!==b);)a=D(a);if(!a)throw p;c(!0),R(a),I();const d=N(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==L)throw V(),p;return c(!1),d}catch(d){if(d===p)return e.recover===!1&&H(),g(),M(r),c(!1),J(t,e);throw d}finally{c(_),R(l),z()}}const i=new Map;function N(t,{target:e,anchor:r,props:_={},events:l,context:a,intro:d=!0}){g();var m=new Set,v=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!m.has(n)){m.add(n);var f=G(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};v(P(q)),A.add(v);var y=void 0,O=Y(()=>{var o=r??e.appendChild(j());return k(()=>{if(a){C({});var s=W;s.c=a}l&&(_.$$events=l),w&&B(o,null),y=t(o,_)||{},w&&($.nodes_end=u),a&&Q()}),()=>{var f;for(var s of m){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}A.delete(v),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return E.set(y,O),y}let E=new WeakMap;function te(t,e){const r=E.get(t);return r?(E.delete(t),r(e)):Promise.resolve()}export{ee as h,J as m,x as s,te as u};
