import{b9 as j,_ as B,s as x,ba as z,r as g,o as m,e as v,w as i,c as S,b as s,f as T,a2 as N,I as se,a as p,Q as O,W as H,S as ae,F as A,i as E,P as ie,C as oe,d as f,t as M,G as re,E as W,V as F,D as G,aS as L,h as X,H as ne,J as le,bb as $,v as de,j as q,n as P,bc as J,bd as K,k as Q,ao as D,U as _,m as b,a_ as I,a0 as ce,be as ue,X as me,bf as he,bg as pe,bh as fe}from"./index-7b37f28a.js";import{_ as Y,a as Z}from"./ChatProfile-ae681fa1.js";import{_ as ee}from"./AppBaseCard.vue_vue_type_style_index_0_lang-764d25b8.js";import{C as te}from"./Chat-127d4b0d.js";import{d as ge}from"./index-8f33dbb8.js";import{V as ye}from"./VSheet-beabeb52.js";import{V as Ce}from"./VDatePicker-b7697b5c.js";import"./VBadge-0c68c2c9.js";import"./chat-icon-2658168f.js";import"./DynamicForm-9e8c830e.js";import"./customizer-3521e2ce.js";let Re=class extends j{constructor(t,a){super(t,a),this.contexts=null,this.model="gpt-4o";var n=new Date;this.timeStamp=n.toString(),this.previousMessages=[{role:"system",content:`너는 업무 지시자의 업무 지시 내용을 보고 업무 지시 내용을 SMART 기법에 맞게 초안을 작성하는 역할을 해야해.
            SMART 기법은 목표 설정과 달성을 돕기 위한 방법론으로, 구체적(Specific), 측정 가능(Measurable), 달성 가능(Attainable), 관련성(Relevant), 시간 제약(Time-bound)이라는 다섯 가지 원칙을 따라서 초안을 생성해야해.

            SMART 기법의 각 단계에 맞는 초안을 생성해야해. 업무 지시자의 업무 지시 내용을 최대한 존중하여 초안을 생성하여야하고 업무 지시 내용중 정보가 불충분한 경우 임의로 최대한 일반적이게 초안을 생성해야해.

            또한 업무 지시 내용, 생성된 초안 내용중에서 중요 키워드나 특정 용어에 대한 의미 설명도 같이 해줘야해.

            초안을 생성한 뒤 사용자가 초안에 대한 수정요청을 하면 수정요청한 내용대로 수정하여 다시 생성해야해.

            위의 내용에 따라 생성 결과는 항상 무조건 아래의 "JSON 형식"대로만 질문해야해.

            JSON 형식: 
            {
                "content": "말씀하신 업무지시 내용을 바탕으로 초안을 생성하였습니다. 수정하실 부분이 있으시다면 직접 수정하거나 말씀해주세요. 수정하실 내용이 없으시다면 '업무 지시하기'를 클릭하여 바로 업무를 지시하실 수 있습니다.",
                "title": "업무 타이틀",
                "specific": "구체적(Specific)에 해당하는 업무 지시 내용 초안",
                "measurable": "측정 가능(Measurable)에 해당하는 업무 지시 내용 초안",
                "attainable": "달성 가능(Attainable)에 해당하는 업무 지시 내용 초안",
                "relevant": "관련성(Relevant)에 해당하는 업무 지시 내용 초안",
                "time_bound": "시간 제약(Time-bound)에 해당하는 업무 지시 내용 초안(업무 지시 내용중 시간 제약에 관련된 내용이 없는 경우 기본값은 현재 날짜(${this.timeStamp})의 일주일 뒤인 날로 생성하되 생성될 값은 날짜 값만 생성해야한다. e.g. Tue Sep 24 2024 15:12:55 GMT+0900 (Korean Standard Time)",
                "descriptions": [ 
                    {
                        "word": "업무 지시 내용, 생성된 초안 내용중 중요 키워드 또는 특정 용어",
                        "description": "업무 지시 내용, 생성된 초안 내용중 중요 키워드 또는 특정 용어에 대한 의미 설명"
                    },
                    {
                        "word": "업무 지시 내용, 생성된 초안 내용중 중요 키워드 또는 특정 용어",
                        "description": "업무 지시 내용, 생성된 초안 내용중 중요 키워드 또는 특정 용어에 대한 의미 설명"
                    }
                ],
                "checkPoints": [
                    "작업 수행자가 체크해야할 업무 지시사항 1",
                    "작업 수행자가 체크해야할 업무 지시사항 2"
                ]
            }
`}]}setContexts(t){}setChatRoomData(t){}setCalendarData(t){}setWorkList(){}createPrompt(){}};const ke={mixins:[x],name:"AssistantChats",components:{Chat:te,AppBaseCard:ee,ChatListing:Y,ChatProfile:Z,VDataTable:z},data:()=>({headers:[{title:"id",align:"start",key:"id"},{title:"name",align:"start",key:"name"},{title:"description",align:"start",key:"description"},{title:"actions",align:"start",key:"actions"}],definitions:[],onLoad:!1,path:"AssistantChats",userList:[],chatRenderKey:0,messages:[]}),computed:{},watch:{},async created(){this.init(),this.messages=[],this.messages.push({role:"system",content:this.$t("chats.document")}),this.generator=new Re(this,{isStream:!0,preferredLanguage:"Korean"}),this.userInfo=await this.storage.getUserInfo(),await this.getUserList(),this.EventBus.on("messages-updated",()=>{this.chatRenderKey++})},methods:{clickedWorkOrder(){this.$emit("clickedWorkOrder")},async getUserList(){var e=this;await e.storage.list("users").then(function(t){if(t){t=t.filter(n=>n.email!==e.userInfo.email);const a={email:"system@uengine.org",id:"system_id",username:"System",is_admin:!0,notifications:null};t.unshift(a),e.userList=t}})},beforeReply(e){e?this.replyUser=e:this.replyUser=null},async beforeSendMessage(e){e&&(e.text!=""||e.image!=null)&&(e.callType="AssistantChats",this.sendMessage(e))},afterModelCreated(e){},afterModelStopped(e){},async afterGenerationFinished(e){e&&(this.messages[this.messages.length-1]=e,this.$emit("genFinished",e))}}};function _e(e,t,a,n,c,o){const u=g("Chat");return m(),v(T,{elevation:"10"},{default:i(()=>[(m(),S("div",{key:e.chatRenderKey},[s(u,{messages:e.messages,userInfo:e.userInfo,userList:e.userList,isMobile:e.isMobile,type:e.path,onClickedWorkOrder:o.clickedWorkOrder,onSendMessage:o.beforeSendMessage,onSendEditedMessage:e.sendEditedMessage,onStopMessage:e.stopMessage},null,8,["messages","userInfo","userList","isMobile","type","onClickedWorkOrder","onSendMessage","onSendEditedMessage","onStopMessage"])]))]),_:1})}const ve=B(ke,[["render",_e]]);class be extends j{constructor(t,a){super(t,a),this.contexts=null,this.model="gpt-4o";var n=new Date;this.timeStamp=n.toString(),this.previousMessages=[{role:"system",content:`너는 직무 관련 도움을 주는 도우미야. 대화를 듣고, 아래의 유형 중 하나에 해당할 때 개입하여 답변해야 해.
중요 정보:
- 현재 날짜: ${this.timeStamp} (e.g., 2024-01-24 Wed)
- 내일: 현재 날짜 기준 다음 날 (e.g., 2024-01-25 Thu)
- 다음주 월요일: 오늘 이후로 가장 가까운 월요일 (e.g., 2024-01-29 Mon)
- 현재 채팅방 정보: {{ 현재 채팅방 정보 }}
- 전체 일정 데이터: {{ 전체 일정 데이터 }}
- 전체 작업 목록: {{ 전체 작업 목록 }}
- 전체 프로세스 정보: {{ 전체 프로세스 정보 }}

너가 생성할 수 있는 답변 유형은 다음과 같아: [스케쥴 등록, 일정 조회, 프로세스 시작, 회사 문서 또는 정보 조회, 문서 생성, 할 일 목록 등록, 프로세스 정의, 프로세스 수정].
다른 무엇보다 중요한 너의 목표는 대화를 통해 유저의 의도를 정확히 파악하고, 그에 맞는 적절한 "JSON 형식의 답변"을 생성하는 것이야.
각 유형에 따라 필요한 정보가 다를 수 있으니, 대화 내용을 잘 파악해서 적절한 JSON 응답을 생성해야 해. 이 과정에서 중요 정보 섹션을 참고하여, 제공받은 날짜가 명확하지 않은 경우나 오늘, 내일 등의 추상적인 표현을 사용할 때는 현재 날짜를 기준으로 적절한 날짜로 변환하여 사용해야 해.

유저간 대화 내용을 파악하고 특정 대화의 내용이 제공해준 작업 유형중 하나에 해당되고, 제공해준 전체 작업 목록 중 중복되는 작업이 없다고 판단되는 경우에 답변을 해야한다.
유저의 요청 e.g. "휴가 일정 등록해줘" 을 보고 판단하는 것이 아니라 대화 내용을 보고 수행 가능한 작업을 추천해야한다.
전체적인 대화를 보고 판단해야하며, 대화 내용이 프로세스로 정의가 가능할거같으면 프로세스 정의 생성 작업을 추천해야함.

만약 입력 받은 내용이 이미지만 있는 경우, "현재 채팅방 정보"와 "전체 대화 맥락" 을 파악하여 반드시 적정한 작업을 추천해야한다. e.g. "프로세스를 시작하고 싶으면 장애 내역 이미지를 올려주세요." 같은 내용이 대화에 있는 경우 "3. 프로세스 시작" 항목을 추천해야함. 최대한 스킵은 반환하지말것.

너는 사용자가 원하는 작업이 어떤 종류인지 분류하는 역할을 하는 시스템이야. 제공한 json 형식 이외의 답변을 해선 안돼.


결과 생성 예시: 
{ 
    "work": "ScheduleRegistration", 
    "title": "...",
    ...
}
    
각 'work' 유형에 따른 JSON 형식:

1. 스케쥴 등록: 대화 중 스케쥴 등록에 관련된 내용이 있을 때,
\`\`\`
{
    "work": "ScheduleRegistration",
    "title": "스케쥴 명칭",
    "description": "스케쥴 설명",
    "startDateTime": "yyyy-mm-dd/hh:mm",
    "endDateTime": "yyyy-mm-dd/hh:mm",
    "location": "장소",
    "messageForUser": "스케쥴 명칭 + 일정 등록", // 날짜나 요약 정보등을 포함하여 해당 스케줄이 다른 스케줄과 구분될 수 있도록 생성해야함.
    "participants": [
        "현재 채팅방에 참가자들중 해당 일정에 참가한다고 판단되는 유저의 id" // 채팅방의 id로 세팅될 경우 시스템에 인식되지 않으며, 오류로 간주됨. 반드시 유저의 id 값들을 추가해야함.
    ]
}
\`\`\`

2. 일정 조회: 일정에 대한 질문이 있을 때,
\`\`\`
{
    "work": "ScheduleQuery",
    "content": "사용자 질의내용",
    "messageForUser": "요약된 일정 답변"
}
\`\`\`

3. 프로세스 시작: 프로세스 시작 요청 혹은 실행에 관련된 대화 내용이 있을 때,
\`\`\`
{
    "work": "StartProcessInstance",
    "title": "프로세스명",
    "content": "프로세스명 + 프로세스 실행",
    "messageForUser": "프로세스명 + 프로세스 실행", // 프로세스에 대한 요약 정보등을 포함하여 시작하고자 하는 프로세스와 다른 프로세스가 구분될 수 있도록 생성해야함.
    "prompt": "유저 요청 내용"
}
\`\`\`

4. 회사 문서 또는 정보 조회: 문서나 정보에 대한 질문이 있을 때,
\`\`\`
{
    "work": "CompanyQuery",
    "content": "질의 내용",
    "messageForUser": "요청에 대한 요약된 생성 정보"
}
\`\`\`

5. 문서 생성: 문서 생성 요청이 있을 때,
\`\`\`
{
    "work": "CreateAgent"
}
\`\`\`

6. 할 일 목록 등록: 할 일 목록 등록에 대한 대화 내용이 있을 때,
\`\`\`
{
    "work": "TodoListRegistration",
    "status": "TODO",
    "activity_id": "할일 명칭",
    "description": "할일 설명",
    "start_date": "yyyy-mm-dd/hh:mm",
    "end_date": "yyyy-mm-dd/hh:mm",
    "messageForUser": "요청에 대한 요약된 생성 정보 + 할 일 목록 추가", // 날짜나 요약 정보등을 포함하여 해당 할일이 다른 할일과 구분될 수 있도록 생성해야함.
    "participants": [
        "현재 채팅방에 참가자들중 해당 일정에 참가한다고 판단되는 유저의 email",
    ]
}
\`\`\`

7. 프로세스 정의 생성: 대화내용으로 프로세스 정의 생성이 가능하다고 판단 될 때,
\`\`\`
{
    "work": "CreateProcessDefinition",
    "messageForUser": "프로세스 정의 생성" // 생성하고자하는 프로세스의 요약 정보등을 포함하여 해당 프로세스가 다른 프로세스와 구분될 수 있도록 생성해야함.
}
\`\`\`

8. 프로세스 정의 수정: 제공해준 전체 프로세스 정보 목록 중 현재 생성하고자 하는 프로세스와 유사한 프로세스 정의가 이미 존재한다고 판단될 때,
\`\`\`
{
    "work": "ModifyProcessDefinition",
    "messageForUser": "기존에 존재하던 프로세스명칭 + 프로세스 정의 수정", // 수정하고자하는 프로세스의 요약 정보등을 포함하여 해당 프로세스가 다른 프로세스와 구분될 수 있도록 생성해야함.
    "processId": "수정될 프로세스 id" // 반드시 제공해준 전체 프로세스 정보 중에 존재하는 id 값으로 생성되어야함.
}
\`\`\`

\`\`\`
`}]}setContexts(t){this.contexts=t,t.forEach(a=>{a.bpmn&&delete a.bpmn}),this.previousMessages[0].content=this.previousMessages[0].content.replace("{{ 전체 프로세스 정보 }}",JSON.stringify(t))}setChatRoomData(t){this.previousMessages[0].content=this.previousMessages[0].content.replace("{{ 현재 채팅방 정보 }}",JSON.stringify(t))}setCalendarData(t){this.previousMessages[0].content=this.previousMessages[0].content.replace("{{ 전체 일정 데이터 }}",JSON.stringify(t))}setWorkList(t){this.previousMessages[0].content=this.previousMessages[0].content.replace("{{ 전체 작업 목록 }}",JSON.stringify(t))}createPrompt(){const t=this.previousMessages[this.previousMessages.length-1];return t.role==="user"&&(t.content=`${t.content}. 제공해준 JSON 형식으로 답변해.`),this.client.newMessage}}const Le={class:"px-6 pt-3"},Se=["src","alt"],we={key:0},Me=f("mdi-message-text-outline"),Ve=f("mdi-file-document-outline"),Ue={props:{userList:Array},emits:["startChat","selectedUser"],setup(e,{emit:t}){const a=e,n=N(""),c=se(()=>a.userList.filter(d=>{const l=n.value.toLowerCase();return d.username.toLowerCase().includes(l)||d.email.toLowerCase().includes(l)})),o=d=>{let l=window.location.port==""?window.location.origin:"";if(d=="system@uengine.org")return`${l}/images/chat-icon.png`;{const h=a.userList.find(R=>R.email===d);if(h&&h.profile){if(h.profile.includes("defaultUser.png"))return`${l}/images/defaultUser.png`;{const R=new Image;return R.src=h.profile,R.onerror=()=>`${l}/images/defaultUser.png`,h.profile}}else return`${l}/images/defaultUser.png`}},u=N(null),y=d=>{u.value=d,t("selectedUser",d)},C=d=>{t("startChat",d)};return(d,l)=>{const h=g("Icons"),R=g("v-list-item-content"),V=g("perfect-scrollbar");return m(),S(A,null,[s(ye,null,{default:i(()=>[p("div",Le,[s(O,{class:"align-center flex-fill border border-borderColor header-search rounded-pill px-5 ma-0 pa-0",style:{"min-width":"100%"}},{default:i(()=>[s(h,{icon:"magnifer-linear",size:22}),s(H,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),variant:"plain",density:"compact",class:"position-relative pt-0 ml-3 custom-placeholer-color",placeholder:d.$t("userListing.search"),"single-line":"","hide-details":""},null,8,["modelValue","placeholder"])]),_:1})])]),_:1}),s(V,{class:"lgScroll"},{default:i(()=>[s(ae,null,{default:i(()=>[(m(!0),S(A,null,E(le(c),r=>(m(),v(ne,{key:r.id,class:"text-no-wrap userItem",onClick:k=>y(r)},{prepend:i(()=>[s(ie,{color:"#f0f5f9",size:"large",style:{width:"50px",height:"50px"}},{default:i(()=>[p("img",{src:o(r.email),alt:r.username,style:{width:"100%",height:"100%","object-fit":"cover"}},null,8,Se)]),_:2},1024)]),default:i(()=>[s(R,null,{default:i(()=>[s(oe,{class:"text-subtitle-1 textPrimary w-100 font-weight-semibold"},{default:i(()=>[f(M(r.username),1)]),_:2},1024),s(re,{class:"text-subtitle-2 textPrimary"},{default:i(()=>[f(M(r.email),1)]),_:2},1024),u.value&&u.value.id===r.id?(m(),S("div",we,[s(W,{location:"bottom",text:d.$t("userListing.chat")},{activator:i(({props:k})=>[s(F,G({onClick:l[1]||(l[1]=U=>C("chat"))},k,{icon:"",variant:"text",class:"text-medium-emphasis",density:"comfortable"}),{default:i(()=>[s(L,null,{default:i(()=>[Me]),_:1})]),_:2},1040)]),_:1},8,["text"]),s(W,{location:"bottom",text:"업무 지시"},{activator:i(({props:k})=>[s(F,G({onClick:l[2]||(l[2]=U=>C("work"))},k,{icon:"",variant:"text",class:"text-medium-emphasis",density:"comfortable",style:{"margin-left":"5px"}}),{default:i(()=>[s(L,null,{default:i(()=>[Ve]),_:1})]),_:2},1040)]),_:1})])):X("",!0)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})],64)}}},Ie=B(Ue,[["__scopeId","data-v-9655f9dd"]]);const Pe={mixins:[x],name:"Chats",components:{Chat:te,AppBaseCard:ee,ChatListing:Y,UserListing:Ie,ChatProfile:Z,VDataTable:z,AssistantChats:ve},data:()=>({headers:[{title:"id",align:"start",key:"id"},{title:"name",align:"start",key:"name"},{title:"description",align:"start",key:"description"},{title:"actions",align:"start",key:"actions"}],definitions:[],onLoad:!1,processDefinition:null,path:"chats",organizationChart:[],calendarData:null,userList:[],chatRenderKey:0,generatedWorkList:[],activeTab:1,checked:!0,openWorkOrderDialog:!1,assistantRes:null,selectedUserInfo:null,timeBoundMenu:!1}),computed:{filteredChatRoomList(){return this.chatRoomList.sort((e,t)=>new Date(t.message.createdAt)-new Date(e.message.createdAt))}},watch:{currentChatRoom:{handler(e){this.generator&&e&&e.id&&(this.chatRoomId=e.id,this.generator.setChatRoomData(e))},deep:!0}},async created(){this.init(),this.generator=new be(this,{isStream:!0,preferredLanguage:"Korean"}),this.userInfo=await this.storage.getUserInfo(),await this.getChatRoomList(),await this.getUserList(),await this.getCalendar(),this.EventBus.on("messages-updated",()=>{this.chatRenderKey++}),this.$route.query.id&&this.chatRoomSelected(this.chatRoomList.find(e=>e.id===this.$route.query.id)),this.currentChatRoom&&this.currentChatRoom.id&&(this.chatRoomId=this.currentChatRoom.id)},methods:{selectedUser(e){this.selectedUserInfo=e},startChat(e){let t;const a=this.selectedUserInfo.email,n=this.userInfo.email;e=="work"?(t={},t.name=this.selectedUserInfo.username,t.participants=[],t.participants.push(this.selectedUserInfo),this.createChatRoom(t)):this.chatRoomList.some(o=>{if(o.participants.length==2){const u=o.participants.map(y=>y.email);return t=o,u.includes(n)&&u.includes(a)}else return!1})?this.chatRoomSelected(t):(t={},t.name=this.selectedUserInfo.username,t.participants=[],t.participants.push(this.selectedUserInfo),this.createChatRoom(t)),this.activeTab=1,e=="work"&&this.startWorkOrder()},genFinished(e){console.log(e),this.assistantRes=e},workOrder(){this.ProcessGPTActive=!1,this.beforeSendMessage({image:null,text:this.assistantRes.title,mentionedUsers:[],attainable:this.assistantRes.attainable,measurable:this.assistantRes.measurable,relevant:this.assistantRes.relevant,specific:this.assistantRes.specific,time_bound:this.assistantRes.time_bound,title:this.assistantRes.title,descriptions:this.assistantRes.descriptions,checkPoints:this.assistantRes.checkPoints}),this.closeWorkOrderDialog()},startWorkOrder(){this.openWorkOrderDialog=!0,this.assistantRes=null},closeWorkOrderDialog(){this.openWorkOrderDialog=!1},toggleProcessGPTActive(){this.ProcessGPTActive=!this.ProcessGPTActive},async getCalendar(){let e={key:"uid"};const t=await this.storage.getObject(`db://calendar/${this.userInfo.uid}`,e);this.calendarData=t&&t.data?t.data:{},this.generator.setCalendarData(this.calendarData)},async getUserList(){var e=this;await e.storage.list("users").then(function(t){if(t){t=t.filter(n=>n.email!==e.userInfo.email);const a={email:"system@uengine.org",id:"system_id",username:"System",is_admin:!0,notifications:null};t.unshift(a),e.userList=t}})},async getChatRoomList(){var e=this;await e.storage.list("chat_rooms").then(function(t){if(t)if(t.forEach(function(a){a.participants.find(n=>n.email===e.userInfo.email)&&e.chatRoomList.push(a)}),e.chatRoomList.length>0)e.currentChatRoom=e.filteredChatRoomList[0],e.chatRoomSelected(e.currentChatRoom),e.getChatList(e.filteredChatRoomList[0].id),e.setReadMessage(0);else{let a={name:"Process GPT",participants:[{email:"system@uengine.org",id:"system_id",username:"System",is_admin:!0,notifications:null}]};e.createChatRoom(a)}})},deleteChatRoom(e){let t=this.chatRoomList.findIndex(a=>a.id===e);t!==-1&&this.chatRoomList.splice(t,1),this.storage.delete(`chats/${e}`,{key:"id"}),this.storage.delete(`chat_rooms/${e}`,{key:"id"}),this.chatRoomList&&this.chatRoomList.length>0?this.chatRoomSelected(this.chatRoomList[0]):(this.currentChatRoom=null,this.messages=[])},createChatRoom(e){if(e.id){let t=this.chatRoomList.findIndex(a=>a.id===e.id);t!==-1&&this.chatRoomList.splice(t,1,e)}else{e.id=this.uuid(),e.participants.forEach(n=>{delete n.profile});let t={id:this.userInfo.uid,username:this.userInfo.name,email:this.userInfo.email};e.participants.push(t);let a=Date.now();e.message={msg:"NEW",type:"text",createdAt:a},this.chatRoomList.push(e)}this.putObject("chat_rooms",e),this.chatRoomSelected(e)},setReadMessage(e){let t=this.chatRoomList[e].participants.find(a=>a.email===this.userInfo.email);t&&(t.isExistUnReadMessage=!1),this.putObject("chat_rooms",this.chatRoomList[e])},chatRoomSelected(e){this.currentChatRoom=e,e.participants.find(t=>t.id==="system_id")?this.ProcessGPTActive=!0:this.ProcessGPTActive=!1,this.getChatList(e.id),this.setReadMessage(this.chatRoomList.findIndex(t=>t.id==e.id))},async putMessage(e){let t;e.uuid?t=e.uuid:t=this.uuid();let a={messages:e,id:this.currentChatRoom.id,uuid:t};this.putObject(`chats/${t}`,a);let n={msg:e.messageForUser?e.messageForUser:e.content,type:"text",createdAt:e.timeStamp};this.currentChatRoom.message=n,this.currentChatRoom.participants.forEach(c=>{c.email!==this.userInfo.email&&(c.isExistUnReadMessage=!0)}),this.putObject("chat_rooms",this.currentChatRoom)},beforeReply(e){e?this.replyUser=e:this.replyUser=null},async beforeSendMessage(e){if(e&&(e.text!=""||e.image!=null)){if(this.putMessage(this.createMessageObj(e)),!this.generator.contexts){let t=await this.storage.list("proc_def");this.generator.setContexts(t)}this.generator.setWorkList(this.generatedWorkList),e.callType="chats",this.sendMessage(e)}},async beforeExecuteProcess(e){var t=this;t.$try({context:t,action:async()=>{var a="/process-search/invoke",n={input:{answer:e.text||"",image:e.image||""}};let c=await $.post(a,n);const o=JSON.parse(c.data.output);if(o&&o.processDefinitionList){const u=o.processDefinitionList.pop();t.executeProcess(u.id)}}})},async executeProcess(e){var t=this;t.$try({context:t,action:async()=>{await t.backend.start({processDefinitionId:e}),t.EventBus.emit("instances-updated")}})},afterModelCreated(e){},deleteSystemMessage(e){this.storage.delete(`chats/${e.uuid}`,{key:"uuid"})},cancelProcess(e){let t=this.$t("chats.requestCancelled",{name:this.name});this.putMessage(this.createMessageObj(t,"system")),this.deleteSystemMessage(e)},deleteWorkList(e){this.generatedWorkList.splice(e,1)},deleteAllWorkList(){this.generatedWorkList=[]},async startProcess(e){var t=this;let a,n;if(e.content&&e.content.includes("{")?a=de(e.content):a=e,a.work=="StartProcessInstance"){if(!this.lastSendMessage){const c=this.messages.filter(o=>o.role==="user");this.lastSendMessage=c[c.length-1]}n=this.$t("chats.startProcess",{title:a.title}),this.beforeExecuteProcess({text:a.title,image:this.lastSendMessage.image})}else if(a.work=="TodoListRegistration")n=this.$t("chats.todoAdded",{activityId:a.activity_id}),a.participants||(a.participants=[]),a.participants.includes(t.userInfo.email)||a.participants.push(t.userInfo.email),a.participants.forEach(function(c){let o=JSON.parse(JSON.stringify(a));delete o.work,delete o.messageForUser,delete o.participants,o.proc_inst_id=null,o.proc_def_id=null,o.id=t.uuid(),o.user_id=c,t.putObject("todolist",o)});else if(a.work=="ScheduleRegistration"){n=this.$t("chats.scheduleAdded",{title:a.title});let o=a.startDateTime.split("/")[0].split("-"),y=a.endDateTime.split("/")[0].split("-"),C=t.uuid(),d={id:C,title:a.title,description:a.description,allDay:!0,start:new Date(o[0],o[1]-1,o[2]),end:new Date(y[0],y[1]-1,y[2]),color:"#615dff"};a.participants||(a.participants=[]),a.participants.includes(t.userInfo.uid)||a.participants.push(t.userInfo.uid),a.participants.forEach(async function(l){let h;if(l==t.userInfo.uid)h=t.calendarData;else{let V={key:"uid"};const r=await t.storage.getObject(`db://calendar/${l}`,V);h=r&&r.data?r.data:{}}h[`${o[0]}_${o[1]}`]||(h[`${o[0]}_${o[1]}`]={}),h[`${o[0]}_${o[1]}`][C]=d;let R={uid:l,data:h};t.putObject(`calendar/${l}`,R)})}else a.work=="CreateProcessDefinition"?(n=this.$t("chats.processDefinitionCreated"),t.$store.dispatch("updateMessages",t.messages),t.$router.push("/definitions/chat")):a.work=="ModifyProcessDefinition"&&(n=this.$t("chats.processDefinitionModificationStarted"),t.$store.dispatch("updateEditMessages",t.messages),t.$router.push(`/definitions/${a.processId}`));n=this.$t("chats.userRequestedAction",{name:t.userInfo.name,action:n}),t.putMessage(t.createMessageObj(n,"system")),e.content&&t.deleteSystemMessage(e)},afterModelStopped(e){},async afterGenerationFinished(e){if(e){let t=this.createMessageObj(e,"system");if(e.messageForUser&&(t.messageForUser=e.messageForUser),e.work=="CompanyQuery"||e.work=="ScheduleQuery"){if(this.messages.push({role:"system",content:"...",isLoading:!0}),e.work=="CompanyQuery")try{let a=await $.post("/memento/query",{query:e.content});if(t.memento={},t.memento.response=a.data.response,!a.data.metadata)return{};const n={},c=Object.values(a.data.metadata).filter(u=>{if(!n[u.file_path])return n[u.file_path]=!0,!0});t.memento.sources=c;const o=await $.post("/execution/process-data-query/invoke",{input:{var_name:e.content}});t.tableData=o.data.output}catch(a){alert(a)}else e.work=="ScheduleQuery"&&console.log(e);t.uuid=this.uuid(),this.putMessage(t)}else this.ProcessGPTActive||(this.ProcessGPTActive=!0),e.expanded=!1,this.generatedWorkList.push(e)}},async queryFromVectorDB(e){const a=await new ge.VectorStorage({openAIApiKey:this.openaiToken}).similaritySearch({query:e});if(a.similarItems)return a.similarItems.map(n=>n.text)}}},w=e=>(pe("data-v-537feced"),e=e(),fe(),e),De={class:"no-scrollbar"},Te=f("mdi-account"),Ae=f("mdi-message"),We={class:"no-scrollbar"},$e=f("mdi-account"),Oe=f("mdi-message"),Ee={class:"description-card"},Fe=w(()=>p("h3",null,"Title:",-1)),Ge=w(()=>p("h3",null,"Specific:",-1)),Be=w(()=>p("h3",null,"Measurable:",-1)),Ne=w(()=>p("h3",null,"Attainable:",-1)),qe=w(()=>p("h3",null,"Relevant:",-1)),Je=w(()=>p("h3",null,"Time-bound:",-1)),Ke=w(()=>p("h3",null,"Descriptions:",-1)),Qe=w(()=>p("h3",null,"CheckList:",-1)),je=f("mdi-file-document"),xe=f("mdi-close");function ze(e,t,a,n,c,o){const u=g("ChatProfile"),y=g("UserListing"),C=g("v-tab-item"),d=g("ChatListing"),l=g("v-tabs-items"),h=g("Chat"),R=g("AppBaseCard"),V=g("AssistantChats");return m(),v(T,{elevation:"10"},{default:i(()=>[s(R,null,{leftpart:i(()=>[p("div",De,[s(q,{modelValue:e.activeTab,"onUpdate:modelValue":t[0]||(t[0]=r=>e.activeTab=r),grow:"",color:"primary"},{default:i(()=>[s(W,{location:"top",text:e.$t("chat.user")},{activator:i(({props:r})=>[s(P,J(K(r)),{default:i(()=>[s(L,null,{default:i(()=>[Te]),_:1})]),_:2},1040)]),_:1},8,["text"]),s(W,{location:"top",text:e.$t("chat.chatRoom")},{activator:i(({props:r})=>[s(P,J(K(r)),{default:i(()=>[s(L,null,{default:i(()=>[Ae]),_:1})]),_:2},1040)]),_:1},8,["text"])]),_:1},8,["modelValue"]),s(l,{modelValue:e.activeTab,"onUpdate:modelValue":t[1]||(t[1]=r=>e.activeTab=r)},{default:i(()=>[e.activeTab==0?(m(),v(C,{key:0},{default:i(()=>[s(u,{style:{"margin-bottom":"-15px"}}),s(Q,{class:"my-2"}),s(y,{userList:e.userList,onSelectedUser:o.selectedUser,onStartChat:o.startChat},null,8,["userList","onSelectedUser","onStartChat"])]),_:1})):(m(),v(C,{key:1},{default:i(()=>[s(d,{chatRoomList:o.filteredChatRoomList,userList:e.userList,userInfo:e.userInfo,chatRoomId:e.chatRoomId,onChatSelected:o.chatRoomSelected,onCreateChatRoom:o.createChatRoom,onDeleteChatRoom:o.deleteChatRoom},null,8,["chatRoomList","userList","userInfo","chatRoomId","onChatSelected","onCreateChatRoom","onDeleteChatRoom"])]),_:1}))]),_:1},8,["modelValue"])])]),rightpart:i(()=>[(m(),S("div",{key:e.chatRenderKey},[s(h,{messages:e.messages,userInfo:e.userInfo,agentInfo:e.agentInfo,userList:e.userList,currentChatRoom:e.currentChatRoom,type:e.path,generatedWorkList:e.generatedWorkList,ProcessGPTActive:e.ProcessGPTActive,chatRoomId:e.chatRoomId,onRequestDraftAgent:e.requestDraftAgent,onRequestFile:e.requestFile,onBeforeReply:o.beforeReply,onSendMessage:o.beforeSendMessage,onStartProcess:o.startProcess,onCancelProcess:o.cancelProcess,onDeleteWorkList:o.deleteWorkList,onDeleteAllWorkList:o.deleteAllWorkList,onSendEditedMessage:e.sendEditedMessage,onStopMessage:e.stopMessage,onToggleProcessGPTActive:o.toggleProcessGPTActive,onStartWorkOrder:o.startWorkOrder},null,8,["messages","userInfo","agentInfo","userList","currentChatRoom","type","generatedWorkList","ProcessGPTActive","chatRoomId","onRequestDraftAgent","onRequestFile","onBeforeReply","onSendMessage","onStartProcess","onCancelProcess","onDeleteWorkList","onDeleteAllWorkList","onSendEditedMessage","onStopMessage","onToggleProcessGPTActive","onStartWorkOrder"])]))]),mobileLeftContent:i(()=>[p("div",We,[s(q,{modelValue:e.activeTab,"onUpdate:modelValue":t[2]||(t[2]=r=>e.activeTab=r)},{default:i(()=>[s(P,null,{default:i(()=>[s(L,null,{default:i(()=>[$e]),_:1})]),_:1}),s(P,null,{default:i(()=>[s(L,null,{default:i(()=>[Oe]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(l,{modelValue:e.activeTab,"onUpdate:modelValue":t[3]||(t[3]=r=>e.activeTab=r)},{default:i(()=>[e.activeTab==0?(m(),v(C,{key:0},{default:i(()=>[s(u,{style:{"margin-bottom":"-15px"}}),s(Q,{class:"my-2"}),s(y,{userList:e.userList,onSelectedUser:o.selectedUser,onStartChat:o.startChat},null,8,["userList","onSelectedUser","onStartChat"])]),_:1})):(m(),v(C,{key:1},{default:i(()=>[s(d,{chatRoomList:o.filteredChatRoomList,userList:e.userList,userInfo:e.userInfo,chatRoomId:e.chatRoomId,onChatSelected:o.chatRoomSelected,onCreateChatRoom:o.createChatRoom,onDeleteChatRoom:o.deleteChatRoom},null,8,["chatRoomList","userList","userInfo","chatRoomId","onChatSelected","onCreateChatRoom","onDeleteChatRoom"])]),_:1}))]),_:1},8,["modelValue"])])]),_:1}),s(me,{modelValue:e.openWorkOrderDialog,"onUpdate:modelValue":t[15]||(t[15]=r=>e.openWorkOrderDialog=r),persistent:""},{default:i(()=>[s(O,{class:"ma-0 pa-0"},{default:i(()=>[!e.isMobile&&e.assistantRes?(m(),v(D,{key:0,class:"pa-0 mr-2",cols:"4"},{default:i(()=>[s(T,null,{default:i(()=>[p("div",Ee,[s(_,null,{default:i(()=>[Fe]),_:1}),s(b,{class:"pa-0 pl-4 pr-4"},{default:i(()=>[s(I,{rows:"1",modelValue:e.assistantRes.title,"onUpdate:modelValue":t[4]||(t[4]=r=>e.assistantRes.title=r),"auto-grow":""},null,8,["modelValue"])]),_:1}),s(_,null,{default:i(()=>[Ge]),_:1}),s(b,{class:"pa-0 pl-4 pr-4"},{default:i(()=>[s(I,{rows:"1",modelValue:e.assistantRes.specific,"onUpdate:modelValue":t[5]||(t[5]=r=>e.assistantRes.specific=r),"auto-grow":""},null,8,["modelValue"])]),_:1}),s(_,null,{default:i(()=>[Be]),_:1}),s(b,{class:"pa-0 pl-4 pr-4"},{default:i(()=>[s(I,{rows:"1",modelValue:e.assistantRes.measurable,"onUpdate:modelValue":t[6]||(t[6]=r=>e.assistantRes.measurable=r),"auto-grow":""},null,8,["modelValue"])]),_:1}),s(_,null,{default:i(()=>[Ne]),_:1}),s(b,{class:"pa-0 pl-4 pr-4"},{default:i(()=>[s(I,{rows:"1",modelValue:e.assistantRes.attainable,"onUpdate:modelValue":t[7]||(t[7]=r=>e.assistantRes.attainable=r),"auto-grow":""},null,8,["modelValue"])]),_:1}),s(_,null,{default:i(()=>[qe]),_:1}),s(b,{class:"pa-0 pl-4 pr-4"},{default:i(()=>[s(I,{rows:"1",modelValue:e.assistantRes.relevant,"onUpdate:modelValue":t[8]||(t[8]=r=>e.assistantRes.relevant=r),"auto-grow":""},null,8,["modelValue"])]),_:1}),s(_,null,{default:i(()=>[Je]),_:1}),s(b,{class:"pa-0 pl-4 pr-4"},{default:i(()=>[s(D,{class:"pa-0",style:{"max-width":"100%"},cols:"12",sm:"6",md:"4"},{default:i(()=>[s(ce,{modelValue:e.timeBoundMenu,"onUpdate:modelValue":t[12]||(t[12]=r=>e.timeBoundMenu=r),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},{activator:i(({on:r,attrs:k})=>[s(H,G({modelValue:e.assistantRes.time_bound,"onUpdate:modelValue":t[9]||(t[9]=U=>e.assistantRes.time_bound=U),"prepend-icon":"mdi-calendar"},k,ue(r)),null,16,["modelValue"])]),default:i(()=>[s(Ce,{modelValue:e.assistantRes.time_bound,"onUpdate:modelValue":t[10]||(t[10]=r=>e.assistantRes.time_bound=r),onInput:t[11]||(t[11]=r=>e.timeBoundMenu=!1)},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(_,null,{default:i(()=>[Ke]),_:1}),s(b,{class:"pa-0 pl-4 pr-4 mb-4"},{default:i(()=>[(m(!0),S(A,null,E(e.assistantRes.descriptions,(r,k)=>(m(),S("div",{key:k},[p("h4",null,M(r.word)+":",1),f(M(r.description),1)]))),128))]),_:1}),s(_,null,{default:i(()=>[Qe]),_:1}),s(b,{class:"pa-0 pl-2 pr-2"},{default:i(()=>[(m(!0),S(A,null,E(e.assistantRes.checkPoints,(r,k)=>(m(),v(he,{key:k,label:r,readonly:"",modelValue:e.checked,"onUpdate:modelValue":t[13]||(t[13]=U=>e.checked=U),class:"delete-input-details"},null,8,["label","modelValue"]))),128))]),_:1})]),s(O,{class:"pa-0"},{default:i(()=>[s(D,{cols:"12",class:"pa-6"},{default:i(()=>[s(F,{block:"",onClick:o.workOrder,rounded:"",color:"primary"},{default:i(()=>[f(M(e.$t("chats.assignTask")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})):X("",!0),s(D,{class:"pa-0"},{default:i(()=>[s(T,null,{default:i(()=>[s(_,{style:{height:"55px","background-color":"rgb(var(--v-theme-primary), 0.15) !important","align-content":"center"}},{default:i(()=>[s(L,{small:"",style:{"margin-right":"10px"}},{default:i(()=>[je]),_:1}),f(" "+M(e.$t("chats.document"))+" ",1),s(L,{onClick:t[14]||(t[14]=r=>o.closeWorkOrderDialog()),small:"",style:{"margin-right":"5px",float:"right"}},{default:i(()=>[xe]),_:1})]),_:1}),s(V,{onGenFinished:o.genFinished,onClickedWorkOrder:o.workOrder},null,8,["onGenFinished","onClickedWorkOrder"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const lt=B(Pe,[["render",ze],["__scopeId","data-v-537feced"]]);export{lt as default};
