import{t as f,A as d,aZ as m,c as g,a_ as v,r as h,o as b,a as w,e as y,z as A}from"./index-8Mi8Qyos.js";const R=["href","download"],E={__name:"DownloadReference",props:{node:{type:void 0,default:null},componentName:{type:String}},setup(r){const s=r,{node:t}=f(s),l=d(),u=m(),i=g(()=>{let e=t.value.getAttribute("filename");if(e&&!e.startsWith("/")&&!e.startsWith("http")){const n=v(l);e=[u.getDownloadURL(n),e].join("/")}return e}),o=t.value.getAttribute("reftarget").split("/"),p=o[o.length-1],c=["reference","internal",t.value.getAttribute("reftype")],a=h("not-set");return a.value=p,(e,n)=>(b(),w("a",{href:i.value,download:a.value,class:A(c)},y(a.value),9,R))}};export{E as default};
