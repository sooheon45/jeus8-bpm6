import{N as z,aa as N,a2 as v,at as R,a1 as $,aM as b,as as B,I as r,r as D,o as i,c as y,a as g,J as s,K as d,aw as c,h as w,b as o,w as u,V as M,k as Z,A as I,e as U,m as A,T as E,F as L,d as T}from"./index-7b37f28a.js";const W={class:"right-part"},F=T(" Menu "),K=z({setup(S){const{lgAndUp:p}=N(),a=v(!1),_=R(),m=v(window.innerWidth<=1279);function h(){m.value=window.innerWidth<=1279}$(()=>{window.addEventListener("resize",h)}),b(()=>{window.removeEventListener("resize",h)});const l=B(),e=l==null?void 0:l.appContext.config.globalProperties.$globalState,V=r(()=>e!=null&&e.state.isZoomed?"chat-display-none":"chat-display-block"),k=r(()=>e!=null&&e.state.isZoomed?"width: 100%;":e!=null&&e.state.isRightZoomed?"display:none":""),C=r(()=>{const t=_.path;return/^\/definitions\//.test(t)&&m.value?"leftpart":"rightpart"});return(t,n)=>{const x=D("Menu2Icon");return i(),y(L,null,[g("div",{class:I(["d-flex mainbox",s(V)]),style:d(t.$globalState.state.isRightZoomed?"height:100vh;":"height:calc(100vh - 155px)")},[s(p)?(i(),y("div",{key:0,class:"left-part",style:d(s(k))},[c(t.$slots,"leftpart")],4)):w("",!0),g("div",W,[o(M,{block:"",onClick:n[0]||(n[0]=f=>a.value=!a.value),variant:"text",class:"d-lg-none d-md-flex d-sm-flex",style:d([{"z-index":"1","background-color":"white"},t.$globalState.state.isRightZoomed?"display:none;":""])},{default:u(()=>[o(x,{size:"20",class:"mr-2 cp-dialog-open cp-def-menu"}),F]),_:1},8,["style"]),o(Z,{class:"d-lg-none d-block"}),c(t.$slots,s(C))])],6),s(p)?w("",!0):(i(),U(E,{key:0,temporary:"",modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=f=>a.value=f),width:"320",top:"",style:{top:"123px"}},{default:u(()=>[o(A,{class:"pa-0"},{default:u(()=>[c(t.$slots,"mobileLeftContent")]),_:3})]),_:3},8,["modelValue"]))],64)}}});export{K as _};