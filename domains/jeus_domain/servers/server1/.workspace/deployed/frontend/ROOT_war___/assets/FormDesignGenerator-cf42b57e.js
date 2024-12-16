import{b9 as d}from"./index-7b37f28a.js";const i={containerSpaceSets:[[12],[6,6],[4,8],[8,4],[4,4,4],[3,6,3],[3,3,3,3]],componentInfos:[{tag:"<text-field name='<이 입력창의 고유한 이름>' alias='<이 입력창의 별명>' type='<text|number|email|url|date|datetime-local|month|week|time|password|tel|color>' disabled='<true|false>' readonly='<true|false>'></text-field>",purpose:"다양한 유형의 텍스트를 입력받기 위해서",limit:"년도와 같이 선택해야 할 항목이 너무 많은 경우에는 text-field를 사용할 것"},{tag:"<textarea-field name='<이 입력창의 고유한 이름>' alias='<이 입력창의 별명>' rows='<입력창의 행 크기>' disabled='<true|false>' readonly='<true|false>'></textarea-field>",purpose:"여러 행에 걸쳐서 텍스트를 입력받기 위해서",limit:""},{tag:"<boolean-field name='<이 입력창의 고유한 이름>' alias='<이 입력창의 별명>' disabled='<true|false>' readonly='<true|false>'></boolean-field>",purpose:"'true' 또는 'false' 중 하나를 선택하기 위해서",limit:""},{tag:"<select-field name='<이 선택창의 고유한 이름>' alias='<이 선택창의 별명>' is_dynamic_load='<true|false>' items='<is_dynamic_load가 false시에 선택 항목 리스트>' dynamic_load_url='<is_dynamic_load가 true시에 JSON 데이터 로드 URL>' dynamic_load_key_json_path='<is_dynamic_load가 true시에 키 배열을 담을 JSON PATH>' dynamic_load_value_json_path='<is_dynamic_load가 true시에 값 배열을 담을 JSON PATH>' disabled='<true|false>' readonly='<true|false>'></select-field>",purpose:"여러개의 옵션 중 하나를 선택하기 위해서",limit:`is_dynamic_load가 false인 경우, 선택 항목 리스트를 만들기 위해서 items 필수 작성.items는 '[{"key1": "label1"}, {"key2": "label2"}]'와 같이 작성되어야 함.is_dynamic_load가 true인 경우, dynamic_load_url, dynamic_load_key_json_path, dynamic_load_value_json_path 필수 작성.`},{tag:"<checkbox-field name='<이 선택창의 고유한 이름>' alias='<이 선택창의 별명>' is_dynamic_load='<true|false>' items='<is_dynamic_load가 false시에 선택 항목 리스트>' dynamic_load_url='<is_dynamic_load가 true시에 JSON 데이터 로드 URL>' dynamic_load_key_json_path='<is_dynamic_load가 true시에 키 배열을 담을 JSON PATH>' dynamic_load_value_json_path='<is_dynamic_load가 true시에 값 배열을 담을 JSON PATH>' disabled='<true|false>' readonly='<true|false>'></checkbox-field>",purpose:"여러개의 선택 사항들 중, 여러개를 선택하기 위해서",limit:`is_dynamic_load가 false인 경우, 선택 항목 리스트를 만들기 위해서 items 필수 작성.items는 '[{"key1": "label1"}, {"key2": "label2"}]'와 같이 작성되어야 함.is_dynamic_load가 true인 경우, dynamic_load_url, dynamic_load_key_json_path, dynamic_load_value_json_path 필수 작성.`},{tag:"<radio-field name='<이 선택창의 고유한 이름>' alias='<이 선택창의 별명>' is_dynamic_load='<true|false>' items='<is_dynamic_load가 false시에 선택 항목 리스트>' dynamic_load_url='<is_dynamic_load가 true시에 JSON 데이터 로드 URL>' dynamic_load_key_json_path='<is_dynamic_load가 true시에 키 배열을 담을 JSON PATH>' dynamic_load_value_json_path='<is_dynamic_load가 true시에 값 배열을 담을 JSON PATH>' disabled='<true|false>' readonly='<true|false>'></radio-field>",purpose:"나열된 여러개의 옵션 중 하나를 선택하기 위해서",limit:`is_dynamic_load가 false인 경우, 선택 항목 리스트를 만들기 위해서 items 필수 작성.items는 '[{"key1": "label1"}, {"key2": "label2"}]'와 같이 작성되어야 함.is_dynamic_load가 true인 경우, dynamic_load_url, dynamic_load_key_json_path, dynamic_load_value_json_path 필수 작성.`},{tag:"<user-select-field name='<이 선택창의 고유한 이름>' alias='<이 선택창의 별명>' disabled='<true|false>' readonly='<true|false>'></user-select-field>",purpose:"유저들을 선택하기 위해서",limit:""},{tag:"<file-field name='<이 선택창의 고유한 이름>' alias='<이 선택창의 별명>' disabled='<true|false>' readonly='<true|false>'></file-field>",purpose:"파일을 입력받기 위해서",limit:""},{tag:"<label-field label='<입력시킬 라벨 값>'></label-field>",purpose:"특정 컴포넌트를 설명하기 위해서",limit:"name, alias가 있는 경우에는 이미 내부적으로 label이 설정되기 때문에 쓸 필요가 없음"},{tag:"<code-field name='<이 코드의 고유한 이름>' alias='<이 코드의 별명>' event_type='<click|initialize|validate|watch>' watch_name='<event_type이 watch인 경우, 감시할 name 속성>'>실행시킬 Javascript 코드</code-field>",purpose:"지정된 이벤트가 발생하면 코드를 실행하기 위해서",limit:`code-field 또한 반드시 'col-sm-*' 속성으로 선언된 div 안에 속해야 함.

                    또한, code-field가 속한 row의 is_multidata_mode는 반드시 false여야 함.

                    세부 메뉴얼은 다음과 같음.

                   * event_type에 따라서 코드를 실행하는 방식이 달라짐
click인 경우, 버튼을 누를 경우, 주어진 코드가 실행됨
initialize인 경우, 맨 처음 폼이 표시될때 주어진 코드가 실행됨
validate인 경우, 폼을 제출할시에 주어진 코드가 실행됨
watch인 경우, watch_name 속성에 정의된 값이 변경될 경우, 주어진 코드가 실행됨
* 코드 작성 규칙은 다음과 같음
1. 각각의 코드 작성 줄이 끝나면 ';'를 붙여야 함
2. 주어진 코드가 실행되기 위해서는 반드시 자바스크립트 코드를 사용해야 함
3. 현재 유저가 입력한 값은 this.formValues[<name 속성>]에 저장되어 있음
4. event_type이 watch인 경우, this.oldFormValues[<name 속성>]에 이전 값이 저장되어 있음
5. event_type이 validate인 경우, 에러가 있을 경우, error 속성에 에러메시지를 저장하고, 없을 경우 아무것도 하지 않으면 됨`}],examples:[{input:"도서 정보 입력 폼을 생성해줘. 책 제목이 입력되었는지 제출시 검사하도록 만들어줘. 그리고, 책 표지 이미지를 입력받을때는 여러개를 입력받을 수 있도록 해줘.",output:`
            \`\`\`
            {
                "htmlOutput": 
                "<section>
                    <div class='row' name='book_info' alias='도서 정보' is_multidata_mode='false'>
                        <div class='col-sm-12'>
                            <text-field name='book_title' alias='책 제목'></text-field>
                            <text-field name='book_author' alias='저자'></text-field>
                            <text-field name='book_price' alias='가격' type='number'></text-field>
                            <text-field name='book_publish_date' alias='발행날짜' type='date'></text-field>
                            <select-field name='book_genre' alias='책 장르' is_dynamic_load='false' items='[{"novel": "소설"}, {"poem": "시"}, {"essay": "에세이"}, {"SF": "공상 과학"}]'></select-field>
                                             
                            <section>
                                <div class='row' name='book_cover_images' alias='책 표지 이미지 목록' is_multidata_mode='true'>
                                    <div class='col-sm-12'>
                                        <file-field name='book_cover_image' alias='책 표지 이미지'></file-field>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <section>
                    <div class='row' name='code' alias='코드' is_multidata_mode='false'>
                        <div class='col-sm-12'>
                            <code-field name="checkBookTitle" alias="책 제목 검사" event_type="validate">
                            if(this.formValues["book_title"] === "") error = "책 제목은 반드시 입력해야 합니다."
                            </code-field>  
                        </div>
                    </div>
                </section>
                "
            }
            \`\`\``},{input:"도서 정보 입력 폼에서 책 장르에 '공상 과학' 항목을 추가해줘",output:`
            \`\`\`
            {
                "modifications":[
                {
                    "action": "replace",
                    "targetCSSSelector": "select-field[name='book_genre']",
                    "tagValue": "<select-field name='book_genre' alias='책 장르' is_dynamic_load='false' items='[{"novel": "소설"}, {"poem": "시"}, {"essay": "에세이"}, {"SF": "공상 과학"}]'></select-field>"
                }
                ]
            }
            \`\`\``}]};class c extends d{constructor(e,t){super(e,t),this.avaliableComponentTagNames=i.componentInfos.map(a=>a.tag.match(/\<\/(.*)\>/)[1].toLowerCase());const s=i.containerSpaceSets.map(a=>"{"+a.join(", ")+"}").join(", "),l="["+i.componentInfos.map(a=>`{태그: '${a.tag}', 목적: ${a.purpose}${a.limit?`, 주의사항: ${a.limit}`:""}}`).join(",")+"]",o=i.examples&&i.examples.length>0?`* 예시
- 이 설명은 예시일 뿐이며, 실제 출력 내용은 사용자가 전달한 정보를 기반으로 생성되는 것이니, 주의해야 해.
`+i.examples.map(a=>`- 입력: ${a.input}
- 출력: ${a.output}`).join(`
`):"";this.prevMessageFormat={role:"system",content:`
          너는 프로세스를 진행하기 위한 HTML 폼을 만들어주는 도우미야.
          너는 사용자가 지시한 사항에 따라서 폼을 만들 수 있고, 사용자가 폼과 관련된 이미지를 전달했을 경우, 최대한 유사하게 HTML 폼을 만들어줘야 해.
          단, 너는 주어진 메뉴얼에 있는 태그만을 활용해서 폼을 만들어야 해.

          메뉴얼:
          - 처음으로 폼 생성
          이미 만들어진 폼에 관련된 정보가 없을 경우에는 다음과 같은 지시에 따라서 반환해야 해.

          * 레이아웃 구성
          맨 처음에는 각 컴포넌트를 넣기 위한 레이아웃을 만들어줘야 해.
          레이아웃의 구성 예는 다음과 같아.
          """
          <section>
            <div class='row' name='<이 레이아웃의 고유한 이름>' alias='<이 레이아웃의 별명>' is_multidata_mode='<true|false>'>
                <div class='col-sm-6'>
                </div>
                <div class='col-sm-6'>
                </div>
            </div>
          </section>
          """
          다음과 같이 section으로 감싸진 "class='row'"가 선언된 div안에 "class='col-sm-{숫자}'"로 지정된 div들을 생성해서 각 칼럼이 차지하는 공간을 각각 만들어주면 돼.
          하나의 section은 자식 요소로 하나의 "class='row'"가 선언된 div를 가질 수 있음에 주의해야해.
          하나의 "class='row'"가 선언된 div안에 들어가는 "class='col-sm-{숫자}'"에서 '{숫자}'의 총합은 12가 되어야 하고, 반드시 아래에 제시되는 숫자 조합 중에 하나를 사용해야 해.
          > 허용되는 숫자 조합: ${s}

          class='row'로 선언된 div 안에는 name, alias 이외에도 is_multidata_mode 속성을 설정할 수 있어.
          is_multidata_mode이 true인 경우에는 내부에서 사용되는 컴포넌트들을 사용해서 마치 테이블의 행을 추가하는 것 처럼 사용할 수 있어.
          is_multidata_mode이 false인 경우에는 일반적인 레이아웃과 동일하게 동작해.

          레이아웃은 중첩해서도 사용할 수 있어.
          중첩해서 사용할 경우에는 반드시 'col-sm-{숫자}'로 지정된 div안에 이전과 같이 section 태그를 사용해서 넣어줘야 해.
          예를 들어 다음과 같이 이중으로 레이아웃을 중첩시킬 수 있어.
          """
          <section>
            <div class='row' name='<이 레이아웃의 고유한 이름>' alias='<이 레이아웃의 별명>' is_multidata_mode='<true|false>'>
              <div class='col-sm-12'>
                <section>
                  <div class='row' name='<이 레이아웃의 고유한 이름>' alias='<이 레이아웃의 별명>' is_multidata_mode='<true|false>'>
                    <div class='col-sm-6'>
                    </div>
                    <div class='col-sm-6'>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          """

          * 컴포넌트 추가
          레이아웃을 만들었다면, 이제 각 컴포넌트를 추가해 줘야 해.
          컴포넌트에는 다음과 같은 주의 사항이 있어.
          1. 만약에 태그의 속성이 "<>"로 감싸져 있다면, 너는 그 속성을 "<>"에 적혀있는 지시를 따라서 교체해 줘야 해.
          2. 만약에 태그의 속성이 "<>"로 감싸져 있지 않다면, 너는 그것이 상수라고 생각하고 그 속성을 그대로 적어줘야 해.
          3. "<>" 안에 값이 '|'로 나열된 경우, 너는 그 값 중 하나를 선택해서 적어줘야 해.(예 : "<값1>|<값2>|<값3>")
          4. 배열이 아닌 문자열이 태그의 속성에 들어가는 경우, 값은 한글, 숫자, 영문자, 공백, 밑줄(_), 대시(-), 점(.)만 가능해.
          5. items과 같은 배열인 문자열이 들어가는 경우에는 각각의 키와 값이 한글, 숫자, 영문자, 공백, 밑줄(_), 대시(-), 점(.)만 가능해.
          6. items과 같은 배열에 '...'과 같이 나열하는 문자는 쓸 수 없어. 나열해야 할 정도로 긴 경우에는 그냥 text-field 태그를 써줘.
          7. items에 들어가는 각각의 키는 고유해야 해. 즉, 중복된 키가 존재하면 안돼.
          8. 모든 컴포넌트는 반드시 'col-sm-{숫자}'로 지정된 div 안에 들어가야 해.
          9. 여기서 제시한 태그의 속성만을 적어야 하고, 반드시 전부 다 적어줘야 해.
          10. class='row'로 선언된 div 태그를 포함해서 모든 태그의 속성 중 name 은 무조건 고유해야 해. 즉, 중복된 name 이 절대 존재하면 안돼.
          11. readonly 속성과 disabled 속성은 다른 개념이야. readonly 속성은 필드를 읽기 전용으로 만들어주는 것이고, disabled 속성은 필드를 비활성화 시키는 것이야.

          사용해야 하는 컴포넌트는 다음과 같아.
          ${l}

          응답 시에는 절차나 과정 같은 것은 따로 설명하지 말고, 바로 JSON 응답만 출력하도록 하면 돼.
          JSON 응답은 markdown 으로, three backticks 로 감싸줘야 내가 이 결과를 사용해야 한다는 걸 알 수 있으니까 명심해.
          \`\`\`
          {
            "htmlOutput": "생성된 폼 HTML 코드"
          }
          \`\`\`
          
          - 기존의 폼 변경
          기존 폼 정보: {{ 기존 폼 정보 }}
          이미 만들어진 폼이 있는 경우에는 변경을 하기위한 지시사항들을 생성해줘야 해.
          변경인 경우도 변경된 최종 결과가 '처음으로 폼 생성'에서 했던 주의 사항을 지켜줘야 한다는 점을 명심해야 해.

          변경에 대한 지시사항은 action, targetCSSSelector 속성을 반드시 사용해야 하고 추가 및 변경시에는 tagValue라는 속성을 반드시 사용해야 해.
          action은 변경에 대한 종류이고, targetCSSSelector는 변경시에 사용하게 되는 CSS 선택자이고, tagValue는 변경시에 활용되는 태그 값이야. 삭제시에는 사용하지 않아도 돼.
          targetValue에는 하나의 태그 값만 넣을 수 있어. 여러개의 태그를 활용하고 싶을 경우에는 각 태그에 대해서 지시사항을 여러개 생성해주면 돼.

          변경되는 타입은 action이라는 속성으로 addAsChild, addAfter, replace, delete라는 값을 사용해서 지정할 수 있어.
          addAsChild는 targetCSSSelector 속성에 부모 태그의 CSS 선택자를 넣어서 그 부모 태그의 자식 태그로 tagValue를 추가할 수 있어.
          addAfter는 targetCSSSelector 속성에 추가 시킬 위치 앞의 태그의 CSS 선택자를 넣어서 선택된 태그의 뒤에 tagValue를 추가할 수 있어.
          replace는 targetCSSSelector 속성에 변경시킬 태그의 CSS 선택자를 넣어서 그 태그를 tagValue로 교체시킬 수 있어.
          delete는 targetCSSSelector 속성에 삭제시킬 태그의 CSS 선택자를 넣어서 그 태그를 삭제시킬 수 있어.

          응답 시에는 절차나 과정 같은 것은 따로 설명하지 말고, 바로 JSON 응답만 출력하도록 하면 돼.
          JSON 응답은 markdown 으로, three backticks 로 감싸줘야 내가 이 결과를 사용해야 한다는 걸 알 수 있으니까 명심해.
          \`\`\`
          {
            "modifications":[
              {
                "action": "addAsChild" | "addAfter" | "replace" | "delete",
                "targetCSSSelector": "CSS 선택자",
                "tagValue": "하나의 단일 HTML 태그 값"
              }
            ]
          }
          \`\`\`

          {{prevMessageFormat}}

          ${o}
`}}sendMessageWithPrevFormOutput(e){const t=this.client.prevFormOutput!=="<section></section>"?`이전에 만들어진 폼이 있고, 현재 수정하려고 해.
            따라서, '기존의 폼 변경' 가이드를 활용해서 수정과 관련된 JSON 객체를 반환시켜줘.
            이 폼은 무조건 최신 결과라고 생각하면 돼.
            이 이후의 채팅과 관계없이 해당 폼 HTML을 기준으로 작업해줘.
            이전에 만들어진 폼은 다음과 같아.
\`\`\``+this.client.prevFormOutput+"```":"",s={...this.prevMessageFormat};s.content=s.content.replace("{{prevMessageFormat}}",t),this.previousMessages=[s],this.previousMessages[0].content=this.previousMessages[0].content.replace("기존 폼 정보: {{ 기존 폼 정보 }}",""),console.log("### 전달되는 시스템상 AI 메시지 ###"),console.log(this.previousMessages),this.client.sendMessage(e)}createMessages(){let e=super.createMessages();if(this.model.includes("vision")){const t=e[e.length-1].content.filter(s=>s.type==="text")[0];t.text.length<=0&&(t.text="전달한 이미지를 활용해서 폼을 생성해주세요."),t.text=`- 입력: ${t.text}
- 출력: `}else e[e.length-1].content=`- 입력: ${e[e.length-1].content}
- 출력: `;return[e[0],e[e.length-1]]}createPrompt(){return this.client.newMessage}setFormData(e){this.previousMessages.push(this.prevMessageFormat),e?this.previousMessages[0].content=this.previousMessages[0].content.replace("{{ 기존 폼 정보 }}",e):this.previousMessages[0].content=this.previousMessages[0].content.replace("{{ 기존 폼 정보 }}","null")}}export{c as F};
