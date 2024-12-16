./service
./client
위 두 디렉토리 안에는 servlet 과 JMS 를 이용한 샘플이 들어 있다.
JMS 환경설정을 위해서 domain.xml에 다음과 같이 connectionFactory와 Queue를 설정해준다.

    <jms-engine>   
        ....
        <connection-factory>
            <type>queue</type>
            <name>connectionFactory</name>
        </connection-factory>
        ....
        <destination>
            <type>queue</type>
            <name>queue</name>
        </destination>
        ....
    </jms-engine>   

