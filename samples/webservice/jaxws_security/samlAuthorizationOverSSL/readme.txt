1. 유닉스 환경: "export WSIMPORT_OPTS=-Djavax.net.ssl.trustStore=./mytruststore -Djavax.net.ssl.trustStorePassword=jeus123"
   윈도우 환경: "set WSIMPORT_OPTS=-Djavax.net.ssl.trustStore=.\mytruststore -Djavax.net.ssl.trustStorePassword=jeus123"

2. 'keystore' 와 'truststore' 파일을 'JEUS_HOME/domains/DOMAIN_NAME/config' 디렉토리에 복사한다.

3. SSL 설정을 domain.xml 에 추가한다.

예시)

<domain xmlns="http://www.tmaxsoft.com/xml/ns/jeus">
    ...
    <servers>
        <server>
            ...
            <listeners>
                ...
                <listener>
                    <name>https-server</name>
                    <listen-port>8089</listen-port>
                    <listen-address>0.0.0.0</listen-address>
                    <keep-alive-timeout>600000</keep-alive-timeout>
                    <ssl>
                        <keystore-file>keystore</keystore-file>
                        <keystore-pass>jeus123</keystore-pass>
                        <truststore-file>truststore</truststore-file>
                        <truststore-pass>jeus123</truststore-pass>   
                    </ssl>
                </listener>
            </listeners>
            <web-engine>
                ...
                <web-connections>
                    ...
                    <http-listener>
                        <name>https1</name>
                        <server-listener-ref>https-server</server-listener-ref>
                        <thread-pool>
                            <min>10</min>
                            <max>20</max>
                        </thread-pool>
                    </http-listener>
                </web-connections>
            </web-engine>            
            ...
        <server>
    <servers>
<domain/>    
