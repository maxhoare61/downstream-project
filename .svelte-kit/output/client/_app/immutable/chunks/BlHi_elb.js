import{b as ae,h as C,a as re,v as F,H as ne,r as G,s as b,c as k,f as H,I as D,d as U,e as W,p as ie,A as Z,B as J,C as K,D as fe,F as le,G as te,J as se,K as ue,M as ve,N as _e,O as de,P,Q as O,R as ce,T as oe,V as he,W as z,q as Ee,X as y,Y as pe,Z as Ae,_ as Te}from"./xe0Jbztq.js";function Ce(l,e){return e}function Ie(l,e,r,u){for(var v=[],_=e.length,t=0;t<_;t++)fe(e[t].e,v,!0);var p=_>0&&v.length===0&&r!==null;if(p){var c=r.parentNode;le(c),c.append(r),u.clear(),g(l,e[0].prev,e[_-1].next)}te(v,()=>{for(var T=0;T<_;T++){var d=e[T];p||(u.delete(d.k),g(l,d.prev,d.next)),se(d.e,!p)}})}function Ne(l,e,r,u,v,_=null){var t=l,p={flags:e,items:new Map,first:null},c=(e&z)!==0;if(c){var T=l;t=C?b(ce(T)):T.appendChild(oe())}C&&re();var d=null,I=!1,m=ue(()=>{var a=r();return he(a)?a:a==null?[]:Z(a)});ae(()=>{var a=F(m),i=a.length;if(I&&i===0)return;I=i===0;let s=!1;if(C){var N=t.data===ne;N!==(i===0)&&(t=G(),b(t),k(!1),s=!0)}if(C){for(var o=null,h,E=0;E<i;E++){if(H.nodeType===8&&H.data===ve){t=H,s=!0,k(!1);break}var A=a[E],n=u(A,E);h=$(H,p,o,null,A,n,E,v,e),p.items.set(n,h),o=h}i>0&&b(G())}if(!C){var f=_e;xe(a,p,t,v,e,(f.f&D)!==0,u)}_!==null&&(i===0?d?U(d):d=W(()=>_(t)):d!==null&&ie(d,()=>{d=null})),s&&k(!0),F(m)}),C&&(t=H)}function xe(l,e,r,u,v,_,t,p){var q,V,Y,B;var c=(v&Te)!==0,T=(v&(y|O))!==0,d=l.length,I=e.items,m=e.first,a=m,i,s=null,N,o=[],h=[],E,A,n,f;if(c)for(f=0;f<d;f+=1)E=l[f],A=t(E,f),n=I.get(A),n!==void 0&&((q=n.a)==null||q.measure(),(N??(N=new Set)).add(n));for(f=0;f<d;f+=1){if(E=l[f],A=t(E,f),n=I.get(A),n===void 0){var j=a?a.e.nodes_start:r;s=$(j,e,s,s===null?e.first:s.next,E,A,f,u,v),I.set(A,s),o=[],h=[],a=s.next;continue}if(T&&ge(n,E,f,v),n.e.f&D&&(U(n.e),c&&((V=n.a)==null||V.unfix(),(N??(N=new Set)).delete(n))),n!==a){if(i!==void 0&&i.has(n)){if(o.length<h.length){var R=h[0],x;s=R.prev;var L=o[0],M=o[o.length-1];for(x=0;x<o.length;x+=1)Q(o[x],R,r);for(x=0;x<h.length;x+=1)i.delete(h[x]);g(e,L.prev,M.next),g(e,s,L),g(e,M,R),a=R,s=M,f-=1,o=[],h=[]}else i.delete(n),Q(n,a,r),g(e,n.prev,n.next),g(e,n,s===null?e.first:s.next),g(e,s,n),s=n;continue}for(o=[],h=[];a!==null&&a.k!==A;)(_||!(a.e.f&D))&&(i??(i=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}o.push(n),s=n,a=n.next}if(a!==null||i!==void 0){for(var w=i===void 0?[]:Z(i);a!==null;)(_||!(a.e.f&D))&&w.push(a),a=a.next;var S=w.length;if(S>0){var ee=v&z&&d===0?r:null;if(c){for(f=0;f<S;f+=1)(Y=w[f].a)==null||Y.measure();for(f=0;f<S;f+=1)(B=w[f].a)==null||B.fix()}Ie(e,w,ee,I)}}c&&Ee(()=>{var X;if(N!==void 0)for(n of N)(X=n.a)==null||X.apply()}),J.first=e.first&&e.first.e,J.last=s&&s.e}function ge(l,e,r,u){u&y&&K(l.v,e),u&O?K(l.i,r):l.i=r}function $(l,e,r,u,v,_,t,p,c,T){var d=(c&y)!==0,I=(c&pe)===0,m=d?I?de(v):P(v):v,a=c&O?P(t):t,i={i:a,v:m,k:_,a:null,e:null,prev:r,next:u};try{return i.e=W(()=>p(l,m,a),C),i.e.prev=r&&r.e,i.e.next=u&&u.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),u!==null&&(u.prev=i,u.e.prev=i.e),i}finally{}}function Q(l,e,r){for(var u=l.next?l.next.e.nodes_start:r,v=e?e.e.nodes_start:r,_=l.e.nodes_start;_!==u;){var t=Ae(_);v.before(_),_=t}}function g(l,e,r){e===null?l.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{Ne as e,Ce as i};
