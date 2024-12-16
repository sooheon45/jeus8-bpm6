********************************************************************************
                  TmaxSoft Web Application Server JEUS 8 Samples
********************************************************************************

I. ���� ���� ���
   �� �������� Ant�� ����ؼ� �������ϰ� �����ϵ��� �Ǿ� �ֽ��ϴ�.

   ����, JEUS_HOME ȯ�溯���� JEUS�� ��ġ�� ���丮�� �����ؾ� �մϴ�.

   �� �������� �ణ�� ���̴� ������, ��κ� ������ ���� ������ �����ŵ�ϴ�.

   * JEUS_HOME : JDK7�̻� ���� :build.properties
   * jeus.domain : app-server.properties
   * jeus.server : app-server.properties

   * javac ���ڵ� ����
   javac.encoding=UTF-8 : build.properties

   * Build, deploy �� ����
     > ant Ȥ�� ant all

   * Build
     > ant build

   * Deploy
     > ant deploy

   * Ŭ���̾�Ʈ ����
     > ant run

   * Undeploy
     > ant undeploy

   * ������ ���丮 �� ���� ����
     > ant clean

   �̿ܿ� ������ ������ �ʿ��� ��쿡�� �� ��� ���丮�� �ִ� readme.txt ������ �����Ͻʽÿ�.


II. JEUS_HOME/samples ���丮 ����

  JEUS_HOME/samples
   |
   +- common            : ���� build scripts ���丮
   +- build.properties  : ȯ�� ����. ��κ� �⺻ ���� �Ʒ� ���Ͽ� �����Ǹ�, �ٸ� ���� ����ϰ��� �� �� ���. 
   |                      (����: common/build.properties, common/app-server.properties) 

