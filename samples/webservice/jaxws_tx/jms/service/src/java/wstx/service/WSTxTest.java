package wstx.service;

import javax.annotation.Resource;
import javax.jms.MessageProducer;
import javax.jms.TextMessage;
import javax.jms.XAConnection;
import javax.jms.XAConnectionFactory;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageConsumer;
import javax.jms.Queue;
import javax.jms.Session;
import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService()
public class WSTxTest {
    @Resource(mappedName = "connectionFactory")
    private XAConnectionFactory connectionFactory;
    
    @Resource(mappedName = "queue")
    private Queue queue;

    @WebMethod
    public void initQueue()  {
        Session session = null;
        XAConnection connection = null;
        
        try {
            connection = makeConnection();
            session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
            MessageConsumer msgConsumer = session.createConsumer(queue);
            Message message = null;
            connection.start();
            while (true) {
                Message result = msgConsumer.receive(1000);
                if (result == null) {
                    break;
                }
            }
        } catch (JMSException je) {
            je.printStackTrace();
        } finally {
            try {
                if (session != null) session.close();
                endConnection(connection);
            } 
            catch (JMSException e) {}
        }
    }
    
    @WebMethod
    public void putMessage(String message) {
        Session session = null;
        XAConnection connection = null;
        
        try {
            connection = makeConnection();
            session = connection.createXASession();
            MessageProducer publisher = session.createProducer(queue);
            TextMessage jmsMessage = session.createTextMessage();
            jmsMessage.setText(message);
            publisher.send(jmsMessage);
        } catch (Throwable t) {
        } finally {
            try {
                if (session != null) session.close();
                endConnection(connection);
            } 
            catch (JMSException e) {}
        }
    }

    @WebMethod
    public boolean verifyMessage(String message) {
        try {
            Message jmsMessage = getMessage();

            if(message == null) return false;
            if(jmsMessage instanceof TextMessage) {
                if(message.equals(((TextMessage) jmsMessage).getText())) return true;
            }
        } catch (JMSException je) {
            je.printStackTrace();
        }
        
        return false;
    }

    private XAConnection makeConnection() {
        try {
            return connectionFactory.createXAConnection();
        } catch (Throwable t) {
            t.printStackTrace();
        }
        
        return null;
    }
    
    private void endConnection(XAConnection connection) throws RuntimeException {
        if (connection != null) {
            try {
                connection.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    
    private Message getMessage() throws JMSException {
        Message result = null;
        Session session = null;
        XAConnection connection = null;
        try {
            connection = makeConnection();
            session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
            MessageConsumer msgConsumer = session.createConsumer(queue);
            Message message = null;
            connection.start();
            result = msgConsumer.receive(10000);
        } finally {
            if (session != null) {
                try {
                    session.close();
                    endConnection(connection);
                } catch (JMSException e) {
                }
            }
            return result;
        }
    }
}
