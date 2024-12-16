package jmxclient;

import java.util.Hashtable;
import java.util.Iterator;
import java.util.Set;

import javax.management.MBeanServerConnection;
import javax.management.ObjectName;
import javax.management.remote.JMXConnector;
import javax.management.remote.JMXConnectorFactory;
import javax.management.remote.JMXServiceURL;
import javax.naming.Context;

/**
 * JMX Client which uses JMX Remote API
 */
public class JMXClientUsingJmxUrl {
	private static final String URL_PATH = "/JeusMBeanServer";

    public static void main(String args[]) throws Exception {
        if(args.length < 4) {
            System.out.println("Required arguments: " 
                + "hostname port username password");
            return;
        }
        
        // Step 1. Setting Environments
        String address = args[0];
        int port = Integer.parseInt(args[1]);
        String username = args[2];
        String password = args[3];
        
        Hashtable env = new Hashtable();
        env.put(JMXConnectorFactory.PROTOCOL_PROVIDER_PACKAGES, "jeus.management.remote.protocol");
        env.put(Context.SECURITY_PRINCIPAL, username);
        env.put(Context.SECURITY_CREDENTIALS, password);        
        
        // Step 2. Getting MBeanServerConnection
        JMXServiceURL serviceURL = new JMXServiceURL("jmxmp", address, port, URL_PATH);
        JMXConnector connector = JMXConnectorFactory.connect(serviceURL, env);
        MBeanServerConnection mbeanServer = connector.getMBeanServerConnection();

        // Step 3. Query
        ObjectName jeusScope = new ObjectName("JEUS:*");
        Set objectNames = mbeanServer.queryNames(jeusScope, null);

        // Step 4. Handling the Query Result
        for(Iterator i = objectNames.iterator(); i.hasNext();) {
            System.out.println("[MBean] " + i.next());
        }
    }
}
