import{p as V,y as A,r as I,c as u,o as g,a as v,h as o,w as e,V as w,d as n,b as l,F as M,l as s,B as d,C as f,D as m,G as b,e as x,f as S}from"./index-DBQDfDii.js";const O={key:0},E=["href"],$=["href"],j={key:1},P={key:2},R={__name:"DocumentationUserHome",setup(U){const c=A(),r=I(k()),T=u(()=>`https://github.com/${r.value.testing_framework.project}/tree/${r.value.testing_framework.reference}`),_=u(()=>`https://github.com/${r.value.testing_database.project}/tree/${r.value.testing_database.reference}`),y=u(()=>r.value.testing_framework.reference),C=u(()=>r.value.testing_database.reference),L=u(()=>{const p=`/generated/${c.current_documentation_version}/user/validation_provenance.json`;return fetch(p).then(t=>{t.json().then(a=>{r.value=a},()=>{r.value=k()})}),!1}),N=u(()=>r.value.testing_framework.reference!=="unknown"&&r.value.testing_database.reference!=="unknown");function i(p){return`/documentation/${c.current_documentation_version}/user/${p}/index`}function k(){return{testing_framework:{reference:"unknown",project:"unknown"},testing_database:{reference:"unknown",project:"unknown"}}}return(p,t)=>(g(),v(M,null,[o(w,null,{default:e(()=>[o(s,null,{default:e(()=>t[0]||(t[0]=[n("h1",null,"Users' Guides",-1)])),_:1})]),_:1}),o(w,null,{default:e(()=>[o(s,{col:"12",md:"4",id:"install"},{default:e(()=>[o(d,{anchor:"bottom","open-delay":"200"},{activator:e(({props:a})=>[o(f,m({block:""},a,{class:"big-button",to:i("installation")}),{default:e(()=>[o(b,{color:"white","x-large":""},{default:e(()=>t[1]||(t[1]=[l("mdi-cogs")])),_:1}),t[2]||(t[2]=n("br",null,null,-1)),t[3]||(t[3]=l(" INSTALLATION "))]),_:2},1040,["to"])]),default:e(()=>[t[4]||(t[4]=n("span",null," Information on installing libCellML, and testing your installation. ",-1))]),_:1})]),_:1}),o(s,{col:"12",md:"4",id:"tutorials"},{default:e(()=>[o(d,{anchor:"bottom","open-delay":"200"},{activator:e(({props:a})=>[o(f,m({block:""},a,{class:"big-button",to:i("tutorials")}),{default:e(()=>[o(b,{color:"white","x-large":""},{default:e(()=>t[5]||(t[5]=[l("mdi-school")])),_:1}),t[6]||(t[6]=n("br",null,null,-1)),t[7]||(t[7]=l(" TUTORIALS "))]),_:2},1040,["to"])]),default:e(()=>[t[8]||(t[8]=n("span",null," A collection of tutorials demonstrating in context how libCellML can be used to create, manipulate, validate, and solve CellML models. ",-1))]),_:1})]),_:1}),o(s,{col:"12",md:"4",id:"howto"},{default:e(()=>[o(d,{anchor:"bottom","open-delay":"200"},{activator:e(({props:a})=>[o(f,m({block:""},a,{class:"big-button",to:i("howto")}),{default:e(()=>[o(b,{color:"white","x-large":""},{default:e(()=>t[9]||(t[9]=[l("mdi-account-box-multiple-outline")])),_:1}),t[10]||(t[10]=n("br",null,null,-1)),t[11]||(t[11]=l(" HOW TO "))]),_:2},1040,["to"])]),default:e(()=>[t[12]||(t[12]=n("span",null," A list of useful code examples showing specific actions. ",-1))]),_:1})]),_:1}),o(s,{col:"12",md:"4",id:"profiles"},{default:e(()=>[o(d,{anchor:"bottom","open-delay":"200"},{activator:e(({props:a})=>[o(f,m({block:""},a,{class:"big-button",to:i("common_users")}),{default:e(()=>[o(b,{color:"white","x-large":""},{default:e(()=>t[13]||(t[13]=[l("mdi-account-group")])),_:1}),t[14]||(t[14]=n("br",null,null,-1)),t[15]||(t[15]=l(" USAGE SCENARIOS "))]),_:2},1040,["to"])]),default:e(()=>[t[16]||(t[16]=n("span",null," A collection of code snippets arranged according to the requirements of different user groups. ",-1))]),_:1})]),_:1}),o(s,{col:"12",md:"4",id:"issues"},{default:e(()=>[o(d,{anchor:"bottom","open-delay":"200"},{activator:e(({props:a})=>[o(f,m({block:""},a,{class:"big-button",to:i("runtime_codes")}),{default:e(()=>[o(b,{color:"white","x-large":""},{default:e(()=>t[17]||(t[17]=[l("mdi-clipboard-text-play")])),_:1}),t[18]||(t[18]=n("br",null,null,-1)),t[19]||(t[19]=l(" RUN-TIME CODES "))]),_:2},1040,["to"])]),default:e(()=>[t[20]||(t[20]=n("span",null," A collection of codes returned during run-time and their interpretation. ",-1))]),_:1})]),_:1}),o(s,{col:"12",md:"4",id:"asides"},{default:e(()=>[o(d,{anchor:"bottom","open-delay":"200"},{activator:e(({props:a})=>[o(f,m({block:""},a,{class:"big-button",to:i("asides")}),{default:e(()=>[o(b,{color:"white","x-large":""},{default:e(()=>t[21]||(t[21]=[l("mdi-information")])),_:1}),t[22]||(t[22]=n("br",null,null,-1)),t[23]||(t[23]=l(" GENERAL INFORMATION "))]),_:2},1040,["to"])]),default:e(()=>[t[24]||(t[24]=n("span",null," General information about special functionality and best practice. ",-1))]),_:1})]),_:1})]),_:1}),t[29]||(t[29]=n("div",{class:"notes"},[n("br"),n("p",null," This links above provide installation instructions, tutorials, code examples, user guides for the most common use cases, and general discussions and information about the CellML model structure itself. The following resource might be helpful too: "),n("ul",null,[n("li",null,[n("a",{href:"https://www.cellml.org/specifications/cellml_2.0",target:"_blank"},"CellML 2.0 Normative Specification"),l(" The official specification of the CellML language. Note that this also contains informative sections, CellML code examples, and thoughts about the structure of CellML models. ")])])],-1)),o(w,null,{default:e(()=>[o(s,null,{default:e(()=>[t[28]||(t[28]=n("h1",null,"Validation Provenance",-1)),N.value?(g(),v("p",O,[t[25]||(t[25]=l(" This documentation was validated with ")),n("a",{href:T.value,target:"_blank"},x(y.value),9,E),t[26]||(t[26]=l(" of the testing framework and ")),n("a",{href:_.value,target:"_blank"},x(C.value),9,$),t[27]||(t[27]=l(" of the test database. "))])):(g(),v("p",j," There is no known validation of this documentation with the libCellML library. ")),L.value?(g(),v("p",P)):S("",!0)]),_:1})]),_:1})],64))}},D=V(R,[["__scopeId","data-v-693945fe"]]);export{D as default};