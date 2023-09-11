import{u as i}from"./useEcharts-fc1e9364.js";import{i as f,w as r}from"./index-0275a767.js";import"./liquidFillView-2acfc97b.js";import{d as a,i as s,T as c,o as d,c as m}from"./index-889a8c82.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./api-97f196df.js";const u=a({name:"waterChart"}),p=a({...u,setup(y){const t=s();return c(()=>{let o=f(t.value),e=.5,l=[e,e,e],n={title:[{text:"预约量",x:"25%",y:30,textAlign:"center",textStyle:{color:"#a1a1a1",fontSize:16,fontFamily:"Microsoft Yahei",fontWeight:"100",textAlign:"center"}},{text:"实时客流量",x:"75%",y:30,textAlign:"center",textStyle:{color:"#a1a1a1",fontSize:16,fontFamily:"Microsoft Yahei",fontWeight:"100",textAlign:"center"}},{text:(e*100).toFixed(0)+"%",left:"25%",top:"38%",textAlign:"center",textStyle:{fontSize:"50",fontWeight:"300",color:"#a06a0a",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#fff",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}},{text:(e*100).toFixed(0)+"%",left:"75%",top:"38%",textAlign:"center",textStyle:{fontSize:"50",fontWeight:"300",color:"#02456d",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#fff",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}}],series:[{type:"liquidFill",radius:"50%",z:6,center:["25%","50%"],color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"rgba(251, 173, 23, 0)"},{offset:.5,color:"rgba(251, 173, 23, .2)"},{offset:0,color:"rgba(251, 173, 23, 1)"}],globalCoord:!1}],data:l,backgroundStyle:{borderWidth:1,color:"transparent"},label:{normal:{formatter:""}},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0}},{name:"第二层白边",type:"pie",z:3,radius:["0%","55%"],center:["25%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:100,itemStyle:{normal:{color:new r(0,0,0,1,[{offset:0,color:"#fefefe"},{offset:1,color:"#e7e8ea"}])}}},{value:0,itemStyle:{normal:{color:"transparent"}}}]},{name:"最外绿边",type:"pie",z:1,radius:["0%","58%"],center:["25%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:100,itemStyle:{color:"#fdc56e"}},{value:0,itemStyle:{normal:{color:"transparent"}}}]},{type:"liquidFill",radius:"50%",z:6,center:["75%","50%"],color:["#c1dce7","#90d3f0","#009bdb"],data:[.6,{value:.5,direction:"left"},.4,.3],backgroundStyle:{borderWidth:1,color:"transparent"},label:{normal:{formatter:""}},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0}},{name:"第二层白边",type:"pie",z:3,radius:["0%","55%"],center:["75%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:100,itemStyle:{normal:{color:new r(0,0,0,1,[{offset:0,color:"#fefefe"},{offset:1,color:"#e7e8ea"}])}}},{value:0,itemStyle:{normal:{color:"transparent"}}}]},{name:"最外蓝边",type:"pie",z:1,radius:["0%","58%"],center:["75%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:100,itemStyle:{color:"#07a2e3"}},{value:0,itemStyle:{normal:{color:"transparent"}}}]}]};i(o,n)}),(o,e)=>(d(),m("div",{ref_key:"echartsRef",ref:t,class:"card content-box"},null,512))}});const w=x(p,[["__scopeId","data-v-59186470"]]);export{w as default};
