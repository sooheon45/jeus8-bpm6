package helloejb;

import javax.naming.Context;
import javax.naming.InitialContext;
import java.util.Hashtable;

import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.event.*;

import javax.swing.*;

public class HelloClient extends JFrame {
   public static void main(String[] args)
   {
      new HelloClient();
   }

   public HelloClient() {
        try {
            Hashtable env = new Hashtable();
            env.put(Context.INITIAL_CONTEXT_FACTORY, "jeus.jndi.JNSContextFactory");
            Context context = new InitialContext(env);
            Hello hello = (Hello) context.lookup("helloejb.Hello");

   	    JLabel label = new JLabel(hello.sayHello());
      	    label.setFont(new Font("Helevetica", Font.BOLD, 15));
            getContentPane().setLayout(new BorderLayout());
            getContentPane().add(label, BorderLayout.CENTER);
            setSize(500, 250);
            setVisible(true);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
   }
}