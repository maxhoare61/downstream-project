var Fn=Array.isArray,Wt=Array.prototype.indexOf,qn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Yn=Array.prototype,Jt=Object.getPrototypeOf;const jn=()=>{};function Hn(t){return t()}function Qt(t){for(var r=0;r<t.length;r++)t[r]()}const y=2,yt=4,X=8,ut=16,A=32,H=64,G=128,O=256,K=512,h=1024,x=2048,k=4096,P=8192,F=16384,tn=32768,wt=65536,Bn=1<<17,nn=1<<19,Tt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function mt(t){return t===this.v}function rn(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function $n(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function zn(){J=!0}const Wn=1,Xn=2,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,fn="[",_n="[!",cn="]",At={},ar=Symbol();function ot(t,r){var n={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return n}function ur(t){return xt(ot(t))}function vn(t,r=!1){var e;const n=ot(t);return r||(n.equals=gt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(n),n}function or(t,r=!1){return xt(vn(t,r))}function xt(t){return u!==null&&u.f&y&&(m===null?Rn([t]):m.push(t)),t}function pn(t,r){return u!==null&&Q()&&u.f&(y|ut)&&(m===null||!m.includes(t))&&on(),hn(t,r)}function hn(t,r){return t.equals(r)||(t.v,t.v=r,t.wv=Ut(),Rt(t,x),Q()&&_!==null&&_.f&h&&!(_.f&(A|H))&&(g===null?Dn([t]):g.push(t))),r}function Rt(t,r){var n=t.reactions;if(n!==null)for(var e=Q(),l=n.length,s=0;s<l;s++){var a=n[s],o=a.f;o&x||!e&&a===_||(T(a,r),o&(h|O)&&(o&y?Rt(a,k):rt(a)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function ir(t){S=t}let w;function L(t){if(t===null)throw Dt(),At;return w=t}function fr(){return L(N(w))}function _r(t){if(S){if(N(w)!==null)throw Dt(),At;w=t}}function cr(t=1){if(S){for(var r=t,n=w;r--;)n=N(n);w=n}}function vr(){for(var t=0,r=w;;){if(r.nodeType===8){var n=r.data;if(n===cn){if(t===0)return r;t-=1}else(n===fn||n===_n)&&(t+=1)}var e=N(r);r.remove(),r=e}}var ht,St,It;function pr(){if(ht===void 0){ht=window;var t=Element.prototype,r=Node.prototype;St=vt(r,"firstChild").get,It=vt(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function lt(t){return St.call(t)}function N(t){return It.call(t)}function hr(t,r){if(!S)return lt(t);var n=lt(w);if(n===null)n=w.appendChild(et());else if(r&&n.nodeType!==3){var e=et();return n==null||n.before(e),L(e),e}return L(n),n}function dr(t,r){if(!S){var n=lt(t);return n instanceof Comment&&n.data===""?N(n):n}return w}function Er(t,r=1,n=!1){let e=S?w:t;for(var l;r--;)l=e,e=N(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var a=et();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function yr(t){t.textContent=""}function dn(t){var r=y|x;_===null?r|=O:_.f|=Tt;var n=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:mt,f:r,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??_};return n!==null&&(n.children??(n.children=[])).push(e),e}function wr(t){const r=dn(t);return r.equals=gt,r}function Ot(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&y?it(e):I(e)}}}function En(t){for(var r=t.parent;r!==null;){if(!(r.f&y))return r;r=r.parent}return null}function kt(t){var r,n=_;z(En(t));try{Ot(t),r=Gt(t)}finally{z(n)}return r}function Nt(t){var r=kt(t),n=(D||t.f&O)&&t.deps!==null?k:h;T(t,n),t.equals(r)||(t.v=r,t.wv=Ut())}function it(t){Ot(t),j(t,0),T(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){_===null&&u===null&&sn(),u!==null&&u.f&O&&ln(),_t&&en()}function yn(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function B(t,r,n,e=!0){var l=(t&H)!==0,s=_,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:r,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(n){var o=C;try{dt(!0),nt(a),a.f|=tn}catch(v){throw I(a),v}finally{dt(o)}}else r!==null&&rt(a);var c=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|G))===0;if(!c&&!l&&e&&(s!==null&&yn(a,s),u!==null&&u.f&y)){var p=u;(p.children??(p.children=[])).push(a)}return a}function Tr(t){Ct();var r=_!==null&&(_.f&A)!==0&&f!==null&&!f.m;if(r){var n=f;(n.e??(n.e=[])).push({fn:t,effect:_,reaction:u})}else{var e=bt(t);return e}}function mr(t){return Ct(),ft(t)}function gr(t){const r=B(H,t,!0);return(n={})=>new Promise(e=>{n.outro?mn(r,()=>{I(r),e(void 0)}):(I(r),e(void 0))})}function bt(t){return B(yt,t,!1)}function Ar(t,r){var n=f,e={effect:null,ran:!1};n.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,pn(n.l.r2,!0),bn(r))})}function xr(){var t=f;ft(()=>{if(Cn(t.l.r2)){for(var r of t.l.r1){var n=r.effect;n.f&h&&T(n,k),q(n)&&nt(n),r.ran=!1}t.l.r2.v=!1}})}function ft(t){return B(X,t,!0)}function Rr(t){return wn(t)}function wn(t,r=0){return B(X|ut|r,t,!0)}function Dr(t,r=!0){return B(X|A,t,!0,r)}function Pt(t){var r=t.teardown;if(r!==null){const n=_t,e=u;Et(!0),Z(null);try{r.call(null)}finally{Et(n),Z(e)}}}function Ft(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)it(r[n])}}function qt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;I(n,r),n=e}}function Tn(t){for(var r=t.first;r!==null;){var n=r.next;r.f&A||I(r),r=n}}function I(t,r=!0){var n=!1;if((r||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}n=!0}qt(t,r&&!n),Ft(t),j(t,0),T(t,F);var a=t.transitions;if(a!==null)for(const c of a)c.stop();Pt(t);var o=t.parent;o!==null&&o.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function mn(t,r){var n=[];Mt(t,n,!0),gn(n,()=>{I(t),r&&r()})}function gn(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function Mt(t,r,n){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&r.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&A)!==0;Mt(e,r,s?n:!1),e=l}}}function Sr(t){Yt(t,!0)}function Yt(t,r){if(t.f&P){t.f^=P,t.f&h||(t.f^=h),q(t)&&(T(t,x),rt(t));for(var n=t.first;n!==null;){var e=n.next,l=(n.f&wt)!==0||(n.f&A)!==0;Yt(n,l?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let $=!1,st=[];function jt(){$=!1;const t=st.slice();st=[],Qt(t)}function Ir(t){$||($=!0,queueMicrotask(jt)),st.push(t)}function An(){$&&jt()}const Ht=0,xn=1;let U=!1,V=Ht,M=!1,Y=null,C=!1,_t=!1;function dt(t){C=t}function Et(t){_t=t}let R=[],b=0;let u=null;function Z(t){u=t}let _=null;function z(t){_=t}let m=null;function Rn(t){m=t}let d=null,E=0,g=null;function Dn(t){g=t}let Bt=1,W=0,D=!1,f=null;function Ut(){return++Bt}function Q(){return!J||f!==null&&f.l===null}function q(t){var p;var r=t.f;if(r&x)return!0;if(r&k){var n=t.deps,e=(r&O)!==0;if(n!==null){var l,s,a=(r&K)!==0,o=e&&_!==null&&!D,c=n.length;if(a||o){for(l=0;l<c;l++)s=n[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=K)}for(l=0;l<c;l++)if(s=n[l],q(s)&&Nt(s),s.wv>t.wv)return!0}(!e||_!==null&&!D)&&T(t,h)}return!1}function Sn(t,r){for(var n=r;n!==null;){if(n.f&G)try{n.fn(t);return}catch{n.f^=G}n=n.parent}throw U=!1,t}function In(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&G)===0)}function tt(t,r,n,e){if(U){if(n===null&&(U=!1),In(r))throw t;return}n!==null&&(U=!0);{Sn(t,r);return}}function Vt(t,r,n=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Vt(s,r,n+1):r===s&&(n===0?T(s,x):s.f&h&&T(s,k),rt(s))}}function Gt(t){var ct;var r=d,n=E,e=g,l=u,s=D,a=m,o=f,c=t.f;d=null,E=0,g=null,u=c&(A|H)?null:t,D=!C&&(c&O)!==0,m=null,f=t.ctx,W++;try{var p=(0,t.fn)(),v=t.deps;if(d!==null){var i;if(j(t,E),v!==null&&E>0)for(v.length=E+d.length,i=0;i<d.length;i++)v[E+i]=d[i];else t.deps=v=d;if(!D)for(i=E;i<v.length;i++)((ct=v[i]).reactions??(ct.reactions=[])).push(t)}else v!==null&&E<v.length&&(j(t,E),v.length=E);if(Q()&&g!==null&&!(t.f&(y|k|x)))for(i=0;i<g.length;i++)Vt(g[i],t);return l!==null&&W++,p}finally{d=r,E=n,g=e,u=l,D=s,m=a,f=o}}function On(t,r){let n=r.reactions;if(n!==null){var e=Wt.call(n,t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&y&&(d===null||!d.includes(r))&&(T(r,k),r.f&(O|K)||(r.f^=K),j(r,0))}function j(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)On(t,n[e])}function nt(t){var r=t.f;if(!(r&F)){T(t,h);var n=_,e=f;_=t;try{r&ut?Tn(t):qt(t),Ft(t),Pt(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,a}catch(o){tt(o,t,n,e||t.ctx)}finally{_=n}}}function Kt(){if(b>1e3){b=0;try{an()}catch(t){if(Y!==null)tt(t,Y,null);else throw t}}b++}function $t(t){var r=t.length;if(r!==0){Kt();var n=C;C=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Zt(l,s),kn(s)}}finally{C=n}}}function kn(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(F|P)))try{q(e)&&(nt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function Nn(){if(M=!1,b>1001)return;const t=R;R=[],$t(t),M||(b=0,Y=null)}function rt(t){V===Ht&&(M||(M=!0,queueMicrotask(Nn))),Y=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(H|A)){if(!(n&h))return;r.f^=h}}R.push(r)}function Zt(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,s=(l&A)!==0,a=s&&(l&h)!==0,o=n.next;if(!a&&!(l&P))if(l&X){if(s)n.f^=h;else try{q(n)&&nt(n)}catch(i){tt(i,n,null,n.ctx)}var c=n.first;if(c!==null){n=c;continue}}else l&yt&&e.push(n);if(o===null){let i=n.parent;for(;i!==null;){if(t===i)break t;var p=i.next;if(p!==null){n=p;continue t}i=i.parent}}n=o}for(var v=0;v<e.length;v++)c=e[v],r.push(c),Zt(c,r)}function zt(t){var r=V,n=R;try{Kt();const l=[];V=xn,R=l,M=!1,$t(n);var e=t==null?void 0:t();return An(),(R.length>0||l.length>0)&&zt(),b=0,Y=null,e}finally{V=r,R=n}}async function Or(){await Promise.resolve(),zt()}function Cn(t){var v;var r=t.f,n=(r&y)!==0;if(n&&r&F){var e=kt(t);return it(t),e}if(u!==null){m!==null&&m.includes(t)&&un();var l=u.deps;t.rv<W&&(t.rv=W,d===null&&l!==null&&l[E]===t?E++:d===null?d=[t]:d.push(t))}else if(n&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var c=a;o=c,a=c.parent}else{var p=a;(v=p.deriveds)!=null&&v.includes(o)||(p.deriveds??(p.deriveds=[])).push(o);break}return n&&(s=t,q(s)&&Nt(s)),t.v}function bn(t){const r=u;try{return u=null,t()}finally{u=r}}const Pn=-7169;function T(t,r){t.f=t.f&Pn|r}function kr(t,r=!1,n){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!r&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function Nr(t){const r=f;if(r!==null){const a=r.e;if(a!==null){var n=_,e=u;r.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),bt(s.fn)}}finally{z(n),Z(e)}}f=r.p,r.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&pt in n&&at(n)}}}function at(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],r)}catch{}const n=Jt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Xt(n);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Ln as $,pn as A,or as B,Mn as C,Yn as D,ot as E,$n as F,vt as G,_ as H,Zn as I,Fn as J,Kn as K,Vn as L,Bn as M,gt as N,A as O,nr as P,z as Q,H as R,pt as S,Qn as T,ar as U,tr as V,rr as W,Un as X,wr as Y,er as Z,vn as _,Tr as a,Z as a0,u as a1,pr as a2,lt as a3,fn as a4,N as a5,At as a6,ir as a7,L as a8,fr as a9,zt as aA,Or as aB,ur as aC,jn as aD,rn as aE,w as aa,cn as ab,Dt as ac,Gn as ad,yr as ae,qn as af,gr as ag,et as ah,Dr as ai,lr as aj,sr as ak,wn as al,_n as am,vr as an,P as ao,Sr as ap,mn as aq,hn as ar,Mt as as,gn as at,I as au,Xn as av,Wn as aw,Jn as ax,cr as ay,wt as az,bn as b,f as c,Qt as d,Cr as e,dn as f,Cn as g,zn as h,bt as i,ft as j,dr as k,J as l,Nr as m,hr as n,_r as o,kr as p,Ir as q,Hn as r,Er as s,Rr as t,mr as u,S as v,Jt as w,Xt as x,Ar as y,xr as z};
