********************************************************************************
                  TmaxSoft Web Application Server JEUS 8 Samples
********************************************************************************

I. 예제 실행 방법
   본 예제들은 Ant를 사용해서 컴파일하고 실행하도록 되어 있습니다.

   먼저, JEUS_HOME 환경변수를 JEUS가 설치된 디렉토리로 지정해야 합니다.

   각 예제별로 약간의 차이는 있지만, 대부분 다음과 같이 예제를 실행시킵니다.

   * JEUS_HOME : JDK7이상 설정 :build.properties
   * jeus.domain : app-server.properties
   * jeus.server : app-server.properties

   * javac 인코딩 설정
   javac.encoding=UTF-8 : build.properties

   * Build, deploy 및 실행
     > ant 혹은 ant all

   * Build
     > ant build

   * Deploy
     > ant deploy

   * 클라이언트 실행
     > ant run

   * Undeploy
     > ant undeploy

   * 생성된 디렉토리 및 파일 삭제
     > ant clean

   이외에 별도의 과정이 필요한 경우에는 각 모듈 디렉토리에 있는 readme.txt 파일을 참고하십시오.


II. JEUS_HOME/samples 디렉토리 구성

  JEUS_HOME/samples
   |
   +- common            : 공통 build scripts 디렉토리
   +- build.properties  : 환경 설정. 대부분 기본 값이 아래 파일에 지정되며, 다른 값을 사용하고자 할 때 사용. 
   |                      (참고: common/build.properties, common/app-server.properties) 

