import{b9 as k,_ as N,s as L,v as b,r as C,o as u,e as w,w as n,b as t,f as z,U as V,m as U,c as m,i as y,F as S,b7 as M,R as O,V as f,X as v,d as h,W as c,k as I,N as D}from"./index-7b37f28a.js";import{_ as $}from"./AppBaseCard.vue_vue_type_style_index_0_lang-764d25b8.js";import{C as E}from"./Chat-127d4b0d.js";import{O as J}from"./OrganizationChart-bfb9b6f3.js";import"./chat-icon-2658168f.js";import"./VSheet-beabeb52.js";import"./DynamicForm-9e8c830e.js";import"./customizer-3521e2ce.js";import"./VDatePicker-b7697b5c.js";class P extends k{constructor(a,s){super(a,s),this.contexts=null;const l=window.$tenantName||window.$mode,r=JSON.stringify(a.organizaionChart),i=JSON.stringify(a.userList);this.previousMessages=[{role:"system",content:`이제부터 너는 우리 회사의 조직도 차트를 생성하거나 신규 사원 추가, 퇴사 직원 삭제, 부서 이동, 역할 변경 등 인사 관리 기능을 담당하는 인사 관리자야. 대화를 통해 알게 된 정보와 기존 조직도 차트, 직원 목록을 통해 조직도 차트를 생성하거나 신규 사원 추가, 퇴사 직원 삭제, 부서 이동, 역할 변경 등 인사 관리 기능을 수행해야 해. 추가, 삭제, 이동 같은 인사 관리 기능을 수행하고 나면 해당 결과는 무조건 조직도 차트에 반영해야 해.

            ※ 중요한 주의사항
            - 모든 리턴 값은 예시로 제공되는 JSON 포맷으로 리턴되어야 하고 절대 JSON key 값을 바꾸면 안돼. 그리고 반드시 markdown 으로 three backtick 으로 묶어서 표시해줘.
            - 어떤 요청이 들어와도 조직도 차트는 무조건 생성해서 리턴해줘.
            예시)
            \`\`\`
            {
                "organizationChart": {
                    "id": "root", // root 는 절대 변경되지 말아야해
                    "data": {
                        "id": "root",
                        "img": "",
                        "name": "${l}" // 회사 이름
                    },
                    "children": [
                        {
                            "id": "String-based unique id of the team",
                            "data": {
                                "id": "String-based unique id of the team",
                                "img": "",
                                "name": "team name",
                                "isTeam": true // 부서 혹은 팀인 경우 항상 true
                            },
                            "children": [
                                {
                                    "id": "String-based unique id of the activity user",
                                    "data": {
                                        "id": "String-based unique id of the activity user",
                                        "name": "user name",
                                        "email": "user email",
                                        "img": "/src/assets/images/profile/defaultUser.png",   // 사용자 이미지가 없는 경우 기본값으로 사용할 이미지
                                        "pid": "team id",
                                        "role": "user role"
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
            \`\`\`
            
            - 기존 조직도: 
            ${r}
            
            - 가입된 직원 목록:
            ${i}
                        
            - 신규 사원의 입사
            : 이름, 이메일 (유일키), 직급, 소속팀, 역할, 프로필 이미지 등 입사자의 정보를 입력 받아야해. 입력 받은 정보로 직원 목록에서 가입된 사람인지 확인하고 만약 가입된 유저가 아니라면 회원가입 처리를 위해 이름과 이메일을 다음과 같은 json 포맷을 리턴해줘:
            예시)
            \`\`\`
            {
                "newUsers": [
                    {
                        "name": "user name",   // 입력 받은 정보가 없으면 빈 값으로 리턴
                        "email": "user email"   // 입력 받은 정보가 없으면 빈 값으로 리턴
                    }
                ]
            }
            \`\`\`
            
            
            - 팀 등록 수정 삭제
            : 팀명, 상위팀명, 소속 직원 명단을 받아야 해.
            
            
            - 역할 등록 수정 삭제
            : 역할명, 역할설명, 역할 지정된 직원 명단
            
            
            - 직원 퇴사
            : 예를 들어 '개발팀 홍길동님이 퇴사하셨어' 라고 하면 조직도 차트에서 해당 하는 사람을 찾아 삭제하고 유저 리스트에서 그 사람의 정보를 찾아 이름과 이메일을 다음과 같은 json 포맷을 리턴해줘:
            예시)
            \`\`\`
            {
                "deleteUsers": [
                    {
                        "name": "user name",
                        "email": "user email"
                    }
                ]
            }
            \`\`\`
            
            
            - 해당 담당직원 찾기
            : 예를 들어 '교육부서의 회계담당을 찾아줘' 라고 하면 교수팀 내 회계 역할을 갖춘 사람을 찾아서 명단을 리턴해주면 돼.
            `}]}createPrompt(){return this.client.newMessage}}const B={mixins:[L],components:{AppBaseCard:$,Chat:E,OrganizationChart:J},data:()=>({organizationChart:{},userList:[],chatInfo:{title:"organizationChartDefinition.cardTitle",text:"organizationChartDefinition.organizationChartExplanation"},userDialog:!1,newUserList:[],organizationChartId:null}),async created(){await this.init();const e=window.$tenantName||window.$mode;this.generator=new P(this,{isStream:!0,preferredLanguage:"Korean"}),this.organizationChart&&!this.organizationChart.id&&(this.organizationChart={id:"root",data:{id:"root",img:"",name:e},children:[]})},methods:{uuid(){function e(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},async loadData(e){const a=await this.getData("configuration",{match:{key:"organization"}});a&&a.value&&(this.organizationChartId=a.uuid,a.value.chart&&(this.organizationChart=a.value.chart,this.organizationChart||(this.organizationChart=[]))),await this.getChatList("organization_chart_chat"),this.userList=await this.storage.list("users")},beforeSendMessage(e){this.sendMessage(e);const a=this.createMessageObj(e),s={id:"organization_chart_chat",uuid:this.uuid(),messages:a};this.putObject("chats",s)},afterModelCreated(e){let a=this.messages[this.messages.length-1];if(a.jsonContent){let s;try{s=b(a.jsonContent)}catch(l){console.log(l),s=JSON.parse(a.jsonContent)}s&&!s.modifications&&s.organizationChart&&this.drawChart(s)}},drawChart(e){e&&e.organizationChart&&(this.organizationChart=e.organizationChart)},async afterGenerationFinished(e){let a=this.messages[this.messages.length-1];if(a.jsonContent){let r;try{r=JSON.parse(a.jsonContent)}catch{try{r=b(a.jsonContent)}catch(g){console.log(g);return}}if(r&&r.modifications&&r.modifications.forEach(i=>{i.action=="replace"?this.jsonPathReplace(this,i.targetJsonPath,i.value):i.action=="add"?this.jsonPathAdd(this,i.targetJsonPath,i.value):i.action=="delete"&&this.jsonPathDelete(this,i.targetJsonPath)}),r&&r.newUsers)this.newUserList=r.newUsers,this.userDialog=!0;else if(r&&r.deleteUsers)this.deleteUser(r.deleteUsers);else{var l={key:"organization",value:{chart:this.organizationChart}};this.drawChart(this.organizationChart),this.organizationChartId&&(l.uuid=this.organizationChartId),await this.putObject("configuration",l)}}const s=this.messages[this.messages.length-1];var l={id:"organization_chart_chat",uuid:this.uuid(),messages:s};this.putObject("chats",l)},afterModelStopped(e){const a=this.messages[this.messages.length-1],s={id:"organization_chart_chat",uuid:this.uuid(),messages:a};this.putObject("chats",s)},async createNewUser(e){e&&e.length>0&&(e.forEach(async a=>{let s={username:a.name,email:a.email,password:"000000"};const l=await this.storage.createUser(s);l.user&&(s={id:l.user.id,username:a.name,email:a.email},await this.putObject("users",s))}),this.userList=await this.storage.list("users")),this.newUserList=[],this.userDialog=!1},async deleteUser(e){e&&e.length>0&&(e.forEach(async a=>{const s={match:{email:a.email,username:a.name}};await this.storage.delete("users",s)}),this.userList=await this.storage.list("users"))},async updateNode(){var e={key:"organization",value:{chart:this.organizationChart}};this.organizationChartId&&(e.uuid=this.organizationChartId),await this.putObject("configuration",e)}}},A=h("신규 입사자 가입"),T=h("가입"),q=h("닫기"),F=h("신규 입사자 가입"),G=h("가입"),W=h("닫기");function R(e,a,s,l,r,i){const g=C("Chat"),j=C("OrganizationChart"),_=C("AppBaseCard");return u(),w(_,null,{leftpart:n(()=>[t(g,{name:e.$t(e.chatInfo.title),messages:e.messages,chatInfo:e.chatInfo,userInfo:e.userInfo,disableChat:e.disableChat,onSendMessage:i.beforeSendMessage,onSendEditedMessage:e.sendEditedMessage,onStopMessage:e.stopMessage},null,8,["name","messages","chatInfo","userInfo","disableChat","onSendMessage","onSendEditedMessage","onStopMessage"]),t(v,{modelValue:e.userDialog,"onUpdate:modelValue":a[2]||(a[2]=o=>e.userDialog=o),"max-width":"500"},{default:n(()=>[t(z,null,{default:n(()=>[t(V,null,{default:n(()=>[A]),_:1}),t(U,{class:"overflow-y-auto"},{default:n(()=>[(u(!0),m(S,null,y(e.newUserList,(o,p)=>(u(),m("div",{key:p,class:"py-2"},[t(c,{modelValue:o.name,"onUpdate:modelValue":d=>o.name=d,label:"이름"},null,8,["modelValue","onUpdate:modelValue"]),t(c,{modelValue:o.email,"onUpdate:modelValue":d=>o.email=d,label:"이메일"},null,8,["modelValue","onUpdate:modelValue"]),t(I)]))),128))]),_:1}),t(M,null,{default:n(()=>[t(O),t(f,{color:"primary",onClick:a[0]||(a[0]=o=>i.createNewUser(e.newUserList))},{default:n(()=>[T]),_:1}),t(f,{color:"error",onClick:a[1]||(a[1]=o=>e.userDialog=!1)},{default:n(()=>[q]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),rightpart:n(()=>[(u(),w(j,{node:e.organizationChart,key:e.organizationChart.id,userList:e.userList,onUpdateNode:i.updateNode},null,8,["node","userList","onUpdateNode"]))]),mobileLeftContent:n(()=>[t(g,{name:e.$t(e.chatInfo.title),messages:e.messages,chatInfo:e.chatInfo,userInfo:e.userInfo,disableChat:e.disableChat,onSendMessage:i.beforeSendMessage,onSendEditedMessage:e.sendEditedMessage,onStopMessage:e.stopMessage},null,8,["name","messages","chatInfo","userInfo","disableChat","onSendMessage","onSendEditedMessage","onStopMessage"]),t(v,{modelValue:e.userDialog,"onUpdate:modelValue":a[5]||(a[5]=o=>e.userDialog=o),"max-width":"500"},{default:n(()=>[t(z,null,{default:n(()=>[t(V,null,{default:n(()=>[F]),_:1}),t(U,null,{default:n(()=>[(u(!0),m(S,null,y(e.newUserList,(o,p)=>(u(),m("div",{key:p,class:"py-2"},[t(c,{modelValue:o.name,"onUpdate:modelValue":d=>o.name=d,label:"이름"},null,8,["modelValue","onUpdate:modelValue"]),t(c,{modelValue:o.email,"onUpdate:modelValue":d=>o.email=d,label:"이메일"},null,8,["modelValue","onUpdate:modelValue"]),t(I)]))),128))]),_:1}),t(M,null,{default:n(()=>[t(O),t(f,{color:"primary",onClick:a[3]||(a[3]=o=>i.createNewUser(e.newUserList))},{default:n(()=>[G]),_:1}),t(f,{color:"error",onClick:a[4]||(a[4]=o=>e.userDialog=!1)},{default:n(()=>[W]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const K=N(B,[["render",R]]),se=D({setup(e){return(a,s)=>(u(),w(z,{elevation:"10"},{default:n(()=>[t(K)]),_:1}))}});export{se as default};
