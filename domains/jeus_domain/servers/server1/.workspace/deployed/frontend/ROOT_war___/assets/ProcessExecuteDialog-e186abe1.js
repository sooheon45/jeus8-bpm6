import{_ as h,cA as V,B as g,o as d,e as p,w as o,b as s,d as m,t as N,U as _,ao as x,c as y,i as C,Q as E,W as u,F as D,m as k,V as f,b7 as w,f as B}from"./index-7b37f28a.js";const b={components:{BpmnRoleParameterContexts:V},props:{definitionId:String,roles:Array},data:()=>({newProcess:{id:"",label:""},uengine:null,isNewDef:!1,addDialog:!1,updateDialog:!1,roleName:"",roleEndpoint:"",resourceNames:"",roleMappings:[]}),computed:{},watch:{},created(){let e=this;this.uengine=g.createBackend(),this.roles&&this.roles.forEach(function(t){e.roleMappings.push({roleName:t,roleEndpoint:"",resourceNames:""})})},methods:{closeDialog(){this.$emit("close")},async executeProcess(){var e=this;e.$try({context:e,action:async()=>{let t=[];e.roleMappings.forEach(c=>{let r=c.roleEndpoint.split(","),l=c.resourceNames.split(",");r=r.map(a=>a.trim()).filter(a=>a!==""),l=l.map(a=>a.trim()),r.length>0&&t.push({name:c.roleName,endpoints:r,resourceNames:l})});let i={processDefinitionId:e.definitionId};t.length>0&&(i.roleMappings=t),i.correlationKeyValue=this.uuid(),await e.uengine.start(i),e.closeDialog()},successMsg:this.$t("successMsg.processExecutionCompleted")})},uuid(){function e(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}},P=m("실행"),U=m("닫기");function $(e,t,i,c,r,l){return d(),p(B,{style:{width:"100%",height:"100%"}},{default:o(()=>[s(_,null,{default:o(()=>[m(N(e.$t("successMsg.runningTheProcess")),1)]),_:1}),s(k,null,{default:o(()=>[s(x,null,{default:o(()=>[(d(!0),y(D,null,C(e.roleMappings,a=>(d(),p(E,null,{default:o(()=>[s(u,{label:"Role Name",readonly:"",modelValue:a.roleName,"onUpdate:modelValue":n=>a.roleName=n},null,8,["modelValue","onUpdate:modelValue"]),s(u,{label:"Role Endpoint",modelValue:a.roleEndpoint,"onUpdate:modelValue":n=>a.roleEndpoint=n},null,8,["modelValue","onUpdate:modelValue"]),s(u,{label:"Resource Names",modelValue:a.resourceNames,"onUpdate:modelValue":n=>a.resourceNames=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),256))]),_:1})]),_:1}),s(w,{class:"justify-center"},{default:o(()=>[s(f,{color:"primary",variant:"flat",class:"cp-process-save",onClick:l.executeProcess},{default:o(()=>[P]),_:1},8,["onClick"]),s(f,{color:"error",variant:"flat",onClick:t[0]||(t[0]=a=>l.closeDialog())},{default:o(()=>[U]),_:1})]),_:1})]),_:1})}const R=h(b,[["render",$]]);export{R as P};