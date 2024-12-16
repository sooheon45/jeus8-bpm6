#################################
#
# JEUS Reverse  Proxy Guide 
#
#################################

---------------------------------------
# 개요
---------------------------------------
  제우스에서 reverse proxy 기능을 제공하기 위한 "웹 어플리케이션"입니다. Reverse proxy란
클라이언트의 요청을 받아서 다른 서버로 요청을 전달하고 그 내용을 클라이언트에게 전달해
주는 서비스이다. 이 때 reverse proxy 서버는 실제 서버들을 감추면서 해당 서비스를 중계
해 주는 역할을 한다. 서버가 방화벽 내부에 있어서 접근이 차단된 경우에 외부에서 서버의
정보를 알지 못하지만 서비스를 이용하고 싶을 때 주로 사용된다. 

---------------------------------------
# 사용방법
---------------------------------------
1. Proxy할 server 설정
   WEB-INF/config/sample.xml의 내용을 수정해서 proxy될 서버의 내용을 담은 data.xml 파일을 만든다. 
   sample.xml을 복사해서 data.xml을 파일을 만든 다음에 내용을 수정한다. 수정할 내용은
   <single-server> 혹은 <cluster-server> 태그를 추가 혹은 수정한다. 각 서버의 <domain-name>, 
   <path>, <rewrite>, <directory-rule> 혹은 <accept-everything-rule>을 지정한다. 

2. Context-path 설정
   WEB-INF/jeus-web-dd.xml 파일의 <jeus-web-dd><context-path>를 수정하면 proxy 서비스를 제공할
   context-path를 설정할 수 있다. "/"로 주면 해당 서버의 아래의 모든 요청에 대해서 적용된다. 

3. Application deploy
   위의 설정이 끝난 이 애플리케이션을 제우스에 deploy한다. deploy는 "JEUS Server 가이드"나 "JEUS WEBContainer 가이드"
   를 참조하기 바란다. 


---------------------------------------
# 설정 예
---------------------------------------
1. Proxy 서버의 host name이 www.proxy.com이고 모든 요청에 대해서 www.server1.com/content 을 proxy하고 싶을 경우

   <single-server>
	<domain-name>www.server1.com</directory>
	<path>/content</path>
	<rewriting>true</rewriting>
   	<accept-everything-rule/>
   </single-server>

   www.proxy.com/index.html 을 요청하면 www.server1.com/content/index.html 의 내용을 보여준다. 



2. - www.proxy.com/remote 로의 요청은 www.server1.com 을 proxy 한다.
   - www.proxy.com/intenal 을 www.server2.com:8080 을 proxy 한다. 
   - 다른 요청에 대해서 www.server3.com 을 proxy 한다.

   <single-server>
	<domain-name>www.server1.com</domain-name>
	<rewriting>true</rewriting>
	<directory-rule>/content</directory-rule>
   </single-server>
 
   <single-server>
	<domain-name>www.server2.com:8080</domain-name>
	<rewriting>true</rewriting>
	<directory-rule>/internal</directory-rule>
   </single-server>

   <single-server>
	<domain-name>www.server3.com</domain-name>
	<rewriting>true</rewriting>
	<accept-everything-rule/>
   </single-server>


---------------------------------------
# 주요 파일
---------------------------------------
 - WEB-INF/web.xml: reverse proxy 기능을 하는 filter를 설정. server 내용이 있는 file 지정.
 - WEB-INF/jeus-web-dd.xml: <jeus-web-dd><context-path> 설정으로 서비스를 제공하는 path 지정.
 - WEB-INF/config/data.xml: reverse proxy 를 하는 서버를 설정.
 - WEB-INF/config/proxy-config.dtd: data.xml에 대한 스키마를 정의한 파일.
 - WEB-INF/config/sample.xml: data.xml에 대한 간단한 샘플 파일.

