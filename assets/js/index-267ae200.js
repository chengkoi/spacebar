import{g as r}from"./user-8e0c2c60.js";import{T as i}from"./index-cef87c88.js";import{d as f,Q as c,r as p,o as g,c as v,b as e,u as _,a as m,w as t,e as l,R as u,p as I,g as F}from"./index-889a8c82.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const q=d=>(I("data-v-f2afdcf9"),d=d(),F(),d),C={class:"content-box"},T={class:"descriptions-box card"},N=q(()=>m("span",{class:"text"}," 树形筛选器 🍓🍇🍈🍉",-1)),S=f({name:"treeFilter"}),w=f({...S,setup(d){const o=c({departmentId:"1"}),b=s=>{u.success(`你选择了 id 为 ${s} 的数据🤔`),o.departmentId=s},n=c({departmentId:["11"]}),h=s=>{u.success(`你选择了 id 为 ${JSON.stringify(s)} 的数据🤔`),n.departmentId=s};return(s,y)=>{const a=p("el-descriptions-item"),x=p("el-descriptions");return g(),v("div",C,[e(i,{label:"name",title:"部门列表(单选)","request-api":_(r),"default-value":o.departmentId,onChange:b},null,8,["request-api","default-value"]),e(i,{title:"部门列表(多选)",multiple:"",label:"name","request-api":_(r),"default-value":n.departmentId,onChange:h},null,8,["request-api","default-value"]),m("div",T,[N,e(x,{title:"配置项 📚",column:1,border:""},{default:t(()=>[e(a,{label:"requestApi"},{default:t(()=>[l(" 请求分类数据的 api ")]),_:1}),e(a,{label:"data"},{default:t(()=>[l(" 分类数据，如果有分类数据，则不会执行 api 请求 ")]),_:1}),e(a,{label:"title"},{default:t(()=>[l(" treeFilter 标题 ")]),_:1}),e(a,{label:"id"},{default:t(()=>[l(" 选择的id，默认为 “id” ")]),_:1}),e(a,{label:"label"},{default:t(()=>[l(" 显示的label，默认为 “label” ")]),_:1}),e(a,{label:"multiple"},{default:t(()=>[l(" 是否为多选，默认为 false ")]),_:1}),e(a,{label:"defaultValue"},{default:t(()=>[l(" 默认选中的值 ")]),_:1})]),_:1})])])}}});const A=V(w,[["__scopeId","data-v-f2afdcf9"]]);export{A as default};
