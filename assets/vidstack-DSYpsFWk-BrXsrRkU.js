var f=i=>{throw TypeError(i)};var c=(i,t,s)=>t.has(i)||f("Cannot "+s);var a=(i,t,s)=>(c(i,t,"read from private field"),s?s.call(i):t.get(i)),e=(i,t,s)=>t.has(i)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),h=(i,t,s,u)=>(c(i,t,"write to private field"),u?u.call(i,s):t.set(i,s),s),m=(i,t,s)=>(c(i,t,"access private method"),s);import{aV as l,au as p}from"./app-Bo8qm1DI.js";var o,r,n,d;class F{constructor(t){e(this,n);e(this,o);e(this,r);h(this,r,t)}start(){l(a(this,o))&&m(this,n,d).call(this)}stop(){p(a(this,o))&&window.cancelAnimationFrame(a(this,o)),h(this,o,void 0)}}o=new WeakMap,r=new WeakMap,n=new WeakSet,d=function(){h(this,o,window.requestAnimationFrame(()=>{l(a(this,o))||(a(this,r).call(this),m(this,n,d).call(this))}))};export{F as R};
