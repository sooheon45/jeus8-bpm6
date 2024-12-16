WS-TX EJB 샘플을 실행하기 위하여 다음 단계가 요구됩니다.
domain.xml 파일에 JDBC XA 리소스를 설정하십시오.
JDBC 드라이버를 직접 사용할 수 있지만 여기에서는 데이터 소스를 사용합니다.


설정 예시>

            <database>
                <vendor>oracle</vendor>
                <export-name>oraclexa</export-name>
                <data-source-class-name>oracle.jdbc.xa.client.OracleXADataSource</data-source-class-name>
                <data-source-type>XADataSource</data-source-type>
                <database-name>ora9i</database-name>
                <property>
                    <name>driverType</name>
                    <type>java.lang.String</type>
                    <value>thin</value>
                </property>
                <port-number>1521</port-number>
                <server-name>127.0.0.1</server-name>
                <user>yourname</user>
                <password>yourpassword</password>
                <connection-pool>
                   <pooling>
                      <min>2</min>
                      <max>5</max>
                      <period>3600000</period>
                   </pooling>
                   <wait-free-connection>
                      <enable-wait>true</enable-wait>
                      <wait-time>30000</wait-time>
                   </wait-free-connection>
                </connection-pool>
             </database>


자세한 데이터 소스 설정은 JEUS 매뉴얼을 참조하십시오.


위 설정 이후,

1. wstx-services 를 디플로이 한다.

2. service 디렉토리에서 ant 실행 

3. client 디렉토리에서 ant 실행
