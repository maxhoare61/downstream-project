var Fn=Array.isArray,Qt=Array.prototype.indexOf,qn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Yn=Array.prototype,nn=Object.getPrototypeOf;const Hn=()=>{};function jn(t){return t()}function rn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,B=8,ut=16,A=32,U=64,K=128,O=256,$=512,h=1024,x=2048,k=4096,P=8192,F=16384,en=32768,wt=65536,Bn=1<<17,ln=1<<19,Tt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function mt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function $n(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function zn(){J=!0}const Wn=1,Xn=2,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,vn="[",pn="[!",hn="]",At={},ar=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function ur(t){return xt(ot(t))}function dn(t,n=!1){var e;const r=ot(t);return n||(r.equals=gt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function or(t,n=!1){return xt(dn(t,n))}function xt(t){return u!==null&&u.f&y&&(m===null?Sn([t]):m.push(t)),t}function ir(t,n){return Rt(t,Jt(()=>Xt(t))),n}function Rt(t,n){return u!==null&&Q()&&u.f&(y|ut)&&(m===null||!m.includes(t))&&cn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Vt(),Dt(t,x),Q()&&_!==null&&_.f&h&&!(_.f&(A|U))&&(g===null?In([t]):g.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&x||!e&&a===_||(w(a,n),o&(h|O)&&(o&y?Dt(a,k):rt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function fr(t){S=t}let T;function M(t){if(t===null)throw St(),At;return T=t}function _r(){return M(N(T))}function cr(t){if(S){if(N(T)!==null)throw St(),At;T=t}}function vr(t=1){if(S){for(var n=t,r=T;n--;)r=N(r);T=r}}function pr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,It,Ot;function hr(){if(ht===void 0){ht=window;var t=Element.prototype,n=Node.prototype;It=vt(n,"firstChild").get,Ot=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function lt(t){return It.call(t)}function N(t){return Ot.call(t)}function dr(t,n){if(!S)return lt(t);var r=lt(T);if(r===null)r=T.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),M(e),e}return M(r),r}function Er(t,n){if(!S){var r=lt(t);return r instanceof Comment&&r.data===""?N(r):r}return T}function yr(t,n=1,r=!1){let e=S?T:t;for(var l;n--;)l=e,e=N(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=et();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function wr(t){t.textContent=""}function yn(t){var n=y|x;_===null?n|=O:_.f|=Tt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??_};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(t){const n=yn(t);return n.equals=gt,n}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):I(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Nt(t){var n,r=_;W(wn(t));try{kt(t),n=Kt(t)}finally{W(r)}return n}function Ct(t){var n=Nt(t),r=(D||t.f&O)&&t.deps!==null?k:h;w(t,r),t.equals(n)||(t.v=n,t.wv=Vt())}function it(t){kt(t),j(t,0),w(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){_===null&&u===null&&on(),u!==null&&u.f&O&&un(),_t&&an()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var l=(t&U)!==0,s=_,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=C;try{dt(!0),nt(a),a.f|=en}catch(v){throw I(a),v}finally{dt(o)}}else n!==null&&rt(a);var c=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|K))===0;if(!c&&!l&&e&&(s!==null&&Tn(a,s),u!==null&&u.f&y)){var p=u;(p.children??(p.children=[])).push(a)}return a}function mr(t){const n=q(B,null,!1);return w(n,h),n.teardown=t,n}function gr(t){bt();var n=_!==null&&(_.f&A)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:_,reaction:u})}else{var e=Pt(t);return e}}function Ar(t){return bt(),ft(t)}function xr(t){const n=q(U,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Pt(t){return q(yt,t,!1)}function Rr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,Rt(r.l.r2,!0),Jt(n))})}function Dr(){var t=f;ft(()=>{if(Xt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&w(r,k),L(r)&&nt(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return q(B,t,!0)}function Sr(t){return mn(t)}function mn(t,n=0){return q(B|ut|n,t,!0)}function Ir(t,n=!0){return q(B|A,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=u;Et(!0),z(null);try{n.call(null)}finally{Et(r),z(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}Lt(t,n&&!r),qt(t),j(t,0),w(t,F);var a=t.transitions;if(a!==null)for(const c of a)c.stop();Ft(t);var o=t.parent;o!==null&&o.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];Yt(t,r,!0),xn(r,()=>{I(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&A)!==0;Yt(e,n,s?r:!1),e=l}}}function Or(t){Ht(t,!0)}function Ht(t,n){if(t.f&P){t.f^=P,t.f&h||(t.f^=h),L(t)&&(w(t,x),rt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&wt)!==0||(r.f&A)!==0;Ht(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let Z=!1,st=[];function jt(){Z=!1;const t=st.slice();st=[],rn(t)}function kr(t){Z||(Z=!0,queueMicrotask(jt)),st.push(t)}function Rn(){Z&&jt()}const Bt=0,Dn=1;let V=!1,G=Bt,Y=!1,H=null,C=!1,_t=!1;function dt(t){C=t}function Et(t){_t=t}let R=[],b=0;let u=null;function z(t){u=t}let _=null;function W(t){_=t}let m=null;function Sn(t){m=t}let d=null,E=0,g=null;function In(t){g=t}let Ut=1,X=0,D=!1,f=null;function Vt(){return++Ut}function Q(){return!J||f!==null&&f.l===null}function L(t){var p;var n=t.f;if(n&x)return!0;if(n&k){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&$)!==0,o=e&&_!==null&&!D,c=r.length;if(a||o){for(l=0;l<c;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=$)}for(l=0;l<c;l++)if(s=r[l],L(s)&&Ct(s),s.wv>t.wv)return!0}(!e||_!==null&&!D)&&w(t,h)}return!1}function On(t,n){for(var r=n;r!==null;){if(r.f&K)try{r.fn(t);return}catch{r.f^=K}r=r.parent}throw V=!1,t}function kn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&K)===0)}function tt(t,n,r,e){if(V){if(r===null&&(V=!1),kn(n))throw t;return}r!==null&&(V=!0);{On(t,n);return}}function Gt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Gt(s,n,r+1):n===s&&(r===0?w(s,x):s.f&h&&w(s,k),rt(s))}}function Kt(t){var ct;var n=d,r=E,e=g,l=u,s=D,a=m,o=f,c=t.f;d=null,E=0,g=null,u=c&(A|U)?null:t,D=!C&&(c&O)!==0,m=null,f=t.ctx,X++;try{var p=(0,t.fn)(),v=t.deps;if(d!==null){var i;if(j(t,E),v!==null&&E>0)for(v.length=E+d.length,i=0;i<d.length;i++)v[E+i]=d[i];else t.deps=v=d;if(!D)for(i=E;i<v.length;i++)((ct=v[i]).reactions??(ct.reactions=[])).push(t)}else v!==null&&E<v.length&&(j(t,E),v.length=E);if(Q()&&g!==null&&!(t.f&(y|k|x)))for(i=0;i<g.length;i++)Gt(g[i],t);return l!==null&&X++,p}finally{d=n,E=r,g=e,u=l,D=s,m=a,f=o}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=Qt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(d===null||!d.includes(n))&&(w(n,k),n.f&(O|$)||(n.f^=$),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function nt(t){var n=t.f;if(!(n&F)){w(t,h);var r=_,e=f;_=t;try{n&ut?gn(t):Lt(t),qt(t),Ft(t);var l=Kt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var s=t.deps,a}catch(o){tt(o,t,r,e||t.ctx)}finally{_=r}}}function $t(){if(b>1e3){b=0;try{fn()}catch(t){if(H!==null)tt(t,H,null);else throw t}}b++}function Zt(t){var n=t.length;if(n!==0){$t();var r=C;C=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];zt(l,s),Cn(s)}}finally{C=r}}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|P)))try{L(e)&&(nt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function bn(){if(Y=!1,b>1001)return;const t=R;R=[],Zt(t),Y||(b=0,H=null)}function rt(t){G===Bt&&(Y||(Y=!0,queueMicrotask(bn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(U|A)){if(!(r&h))return;n.f^=h}}R.push(n)}function zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&A)!==0,a=s&&(l&h)!==0,o=r.next;if(!a&&!(l&P))if(l&B){if(s)r.f^=h;else try{L(r)&&nt(r)}catch(i){tt(i,r,null,r.ctx)}var c=r.first;if(c!==null){r=c;continue}}else l&yt&&e.push(r);if(o===null){let i=r.parent;for(;i!==null;){if(t===i)break t;var p=i.next;if(p!==null){r=p;continue t}i=i.parent}}r=o}for(var v=0;v<e.length;v++)c=e[v],n.push(c),zt(c,n)}function Wt(t){var n=G,r=R;try{$t();const l=[];G=Dn,R=l,Y=!1,Zt(r);var e=t==null?void 0:t();return Rn(),(R.length>0||l.length>0)&&Wt(),b=0,H=null,e}finally{G=n,R=r}}async function Nr(){await Promise.resolve(),Wt()}function Xt(t){var v;var n=t.f,r=(n&y)!==0;if(r&&n&F){var e=Nt(t);return it(t),e}if(u!==null){m!==null&&m.includes(t)&&_n();var l=u.deps;t.rv<X&&(t.rv=X,d===null&&l!==null&&l[E]===t?E++:d===null?d=[t]:d.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var c=a;o=c,a=c.parent}else{var p=a;(v=p.deriveds)!=null&&v.includes(o)||(p.deriveds??(p.deriveds=[])).push(o);break}return r&&(s=t,L(s)&&Ct(s)),t.v}function Jt(t){const n=u;try{return u=null,t()}finally{u=n}}const Pn=-7169;function w(t,n){t.f=t.f&Pn|n}function Cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function br(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=_,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];W(s.effect),z(s.reaction),Pt(s.fn)}}finally{W(r),z(e)}}f=n.p,n.m=!0}return{}}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Ln as $,N as A,fr as B,M as C,T as D,lt as E,nn as F,tn as G,ln as H,zn as I,J,hr as K,Vn as L,At as M,_r as N,hn as O,St as P,Gn as Q,wr as R,pt as S,qn as T,xr as U,Ir as V,_ as W,z as X,W as Y,u as Z,mr as _,Ar as a,Fn as a0,Er as a1,vr as a2,Mn as a3,Yn as a4,ot as a5,$n as a6,vt as a7,ar as a8,Zn as a9,Jn as aA,wt as aB,Wt as aC,Nr as aD,ur as aE,ir as aF,Hn as aG,sn as aH,Kn as aa,Bn as ab,nr as ac,gt as ad,A as ae,U as af,Qn as ag,tr as ah,rr as ai,Un as aj,Tr as ak,er as al,dn as am,lr as an,sr as ao,pn as ap,pr as aq,P as ar,Or as as,An as at,En as au,Yt as av,xn as aw,I as ax,Xn as ay,Wn as az,gr as b,f as c,jn as d,Pt as e,rn as f,Xt as g,Pr as h,yn as i,Dr as j,br as k,Rr as l,dr as m,cr as n,Rt as o,Cr as p,kr as q,ft as r,yr as s,Sr as t,Jt as u,or as v,et as w,mn as x,S as y,vn as z};
