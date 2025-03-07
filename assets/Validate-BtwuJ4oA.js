import{p as $,H as I,r as f,I as S,c as z,o as i,a as w,d as v,b as m,h as a,w as t,J as g,n as V,f as U,V as H,l as R,C as q,z as A,G as F,F as B,i as x,s as G,e as J,q as P}from"./index-8Mi8Qyos.js";import{_ as M,a as D}from"./IssueHeading-BByq1sqv.js";import{V as j}from"./VFileInput-CkuYQs6I.js";const K={class:"validate"},O={style:{"padding-right":"0.5em","font-weight":"600"}},Q={__name:"Validate",setup(W){const k=I(),p=f([]),d=f([]),_=f(!1),b=f(!1),y=f(!1),c=f(""),C=S("$libcellml"),T=z(()=>C.state==="ready"&&d.value.length>0?void 0:!0);function h(o){p.value.splice(o,1)}function E(o){let e=new C.module.Parser(!0),l=new C.module.Validator,s=null;try{s=e.parseModel(o)}catch(r){return e.delete(),l.delete(),{issues:[{description:"Error encountered while parsing file.  Error: "+r.message}],type:"parser"}}let n=[],u=0;if(e.errorCount()){for(;u<e.errorCount();){let r=e.error(u);n.push({description:r.description()}),r.delete(),u++}return e.delete(),l.delete(),s.delete(),{issues:n,type:"parser"}}for(u=0,l.validateModel(s);u<l.errorCount();){let r=l.error(u);n.push({description:r.description(),ref:r.referenceHeading(),url:r.url()}),r.delete(),u++}return b.value=n.length>0,e.delete(),l.delete(),s.delete(),{issues:n,type:"validator"}}function L(){b.value=!1,_.value=!1,c.value="",p.value=[]}function N(){L();const o=new FileReader;o.readAsText(d.value[0],"UTF-8"),o.onload=function(e){try{let l=E(e.target.result);c.value=d.value[0].name,p.value=l.issues,y.value=!!(l.type==="parser"&&l.issues.length),_.value=!!(l.type==="validator"&&l.issues.length)}catch(l){y.value=!0,k.add({type:"error",title:"File read error:",message:"Could not validate file: "+l.message})}},o.onerror=function(e){k.add({type:"error",title:"File read error:",message:d.name})}}return(o,e)=>(i(),w("div",K,[e[7]||(e[7]=v("h1",null,"Validate CellML models",-1)),e[8]||(e[8]=v("p",null,[m(" This service will accept CellML 2.0 files and check for syntactic validity against the "),v("a",{href:"https://www.cellml.org/specifications/cellml_2.0",target:"_blank"},"CellML Normative Specification")],-1)),a(g,null,{default:t(()=>[a(j,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),"show-size":"","truncate-length":"64",label:"Upload model"},{default:t(()=>e[1]||(e[1]=[m(" >")])),_:1},8,["modelValue"])]),_:1}),a(g,null,{default:t(()=>[a(H,{justify:"center"},{default:t(()=>[a(R,{class:"col-12 col-md-4",id:"validateButton"},{default:t(()=>[a(q,{block:"",class:A("big-button"),disabled:T.value,onClick:N},{default:t(()=>[a(F,{color:"white","x-large":""},{default:t(()=>e[2]||(e[2]=[m("mdi-file-check-outline")])),_:1}),e[3]||(e[3]=v("br",null,null,-1)),e[4]||(e[4]=m(" Validate CellML 2.0 syntax "))]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),y.value?(i(),V(g,{key:0},{default:t(()=>[a(M,{title:c.value},null,8,["title"]),(i(!0),w(B,null,x(p.value,(l,s)=>(i(),V(D,{key:"parser_issue_"+s,issue:l,onDismiss:n=>h(s)},null,8,["issue","onDismiss"]))),128))]),_:1})):_.value?(i(),V(g,{key:1},{default:t(()=>[a(M,{title:c.value,issueSource:"Validation"},null,8,["title"]),(i(!0),w(B,null,x(p.value,(l,s)=>(i(),V(D,{key:"validation_issue_"+s,issue:l,onLearnButton:!0,onDismiss:n=>h(s)},null,8,["issue","onDismiss"]))),128))]),_:1})):!y.value&&!_.value&&c.value?(i(),V(g,{key:2},{default:t(()=>[a(P,{class:"noErrors",elevation:"0"},{default:t(()=>[a(G,null,{default:t(()=>[a(F,{large:""},{default:t(()=>e[5]||(e[5]=[m("mdi-check-bold")])),_:1}),v("span",O,J(c.value)+":",1),e[6]||(e[6]=v("span",null,"The model is valid!",-1))]),_:1})]),_:1})]),_:1})):U("",!0)]))}},ee=$(Q,[["__scopeId","data-v-d888ea12"]]);export{ee as default};
