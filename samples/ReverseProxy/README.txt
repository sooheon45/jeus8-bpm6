#################################
#
# JEUS Reverse  Proxy Guide 
#
#################################

---------------------------------------
# ����
---------------------------------------
  ���콺���� reverse proxy ����� �����ϱ� ���� "�� ���ø����̼�"�Դϴ�. Reverse proxy��
Ŭ���̾�Ʈ�� ��û�� �޾Ƽ� �ٸ� ������ ��û�� �����ϰ� �� ������ Ŭ���̾�Ʈ���� ������
�ִ� �����̴�. �� �� reverse proxy ������ ���� �������� ���߸鼭 �ش� ���񽺸� �߰�
�� �ִ� ������ �Ѵ�. ������ ��ȭ�� ���ο� �־ ������ ���ܵ� ��쿡 �ܺο��� ������
������ ���� �������� ���񽺸� �̿��ϰ� ���� �� �ַ� ���ȴ�. 

---------------------------------------
# �����
---------------------------------------
1. Proxy�� server ����
   WEB-INF/config/sample.xml�� ������ �����ؼ� proxy�� ������ ������ ���� data.xml ������ �����. 
   sample.xml�� �����ؼ� data.xml�� ������ ���� ������ ������ �����Ѵ�. ������ ������
   <single-server> Ȥ�� <cluster-server> �±׸� �߰� Ȥ�� �����Ѵ�. �� ������ <domain-name>, 
   <path>, <rewrite>, <directory-rule> Ȥ�� <accept-everything-rule>�� �����Ѵ�. 

2. Context-path ����
   WEB-INF/jeus-web-dd.xml ������ <jeus-web-dd><context-path>�� �����ϸ� proxy ���񽺸� ������
   context-path�� ������ �� �ִ�. "/"�� �ָ� �ش� ������ �Ʒ��� ��� ��û�� ���ؼ� ����ȴ�. 

3. Application deploy
   ���� ������ ���� �� ���ø����̼��� ���콺�� deploy�Ѵ�. deploy�� "JEUS Server ���̵�"�� "JEUS WEBContainer ���̵�"
   �� �����ϱ� �ٶ���. 


---------------------------------------
# ���� ��
---------------------------------------
1. Proxy ������ host name�� www.proxy.com�̰� ��� ��û�� ���ؼ� www.server1.com/content �� proxy�ϰ� ���� ���

   <single-server>
	<domain-name>www.server1.com</directory>
	<path>/content</path>
	<rewriting>true</rewriting>
   	<accept-everything-rule/>
   </single-server>

   www.proxy.com/index.html �� ��û�ϸ� www.server1.com/content/index.html �� ������ �����ش�. 



2. - www.proxy.com/remote ���� ��û�� www.server1.com �� proxy �Ѵ�.
   - www.proxy.com/intenal �� www.server2.com:8080 �� proxy �Ѵ�. 
   - �ٸ� ��û�� ���ؼ� www.server3.com �� proxy �Ѵ�.

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
# �ֿ� ����
---------------------------------------
 - WEB-INF/web.xml: reverse proxy ����� �ϴ� filter�� ����. server ������ �ִ� file ����.
 - WEB-INF/jeus-web-dd.xml: <jeus-web-dd><context-path> �������� ���񽺸� �����ϴ� path ����.
 - WEB-INF/config/data.xml: reverse proxy �� �ϴ� ������ ����.
 - WEB-INF/config/proxy-config.dtd: data.xml�� ���� ��Ű���� ������ ����.
 - WEB-INF/config/sample.xml: data.xml�� ���� ������ ���� ����.

