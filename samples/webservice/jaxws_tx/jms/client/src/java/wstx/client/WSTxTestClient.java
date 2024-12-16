package wstx.client;

import java.io.*;
import java.net.*;
import javax.annotation.Resource;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.transaction.UserTransaction;
import javax.xml.ws.WebServiceRef;

public class WSTxTestClient extends HttpServlet {    
    @WebServiceRef
    private wstx.client.WSTxTestService service;
    
    @Resource
    UserTransaction ut;
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>WS-TX Test Client</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>WS-TX Test Client</h1>");
        out.flush();
        
        checkTransaction(out);
        out.println("<br/><br/>");
        out.flush();

        out.println("</body>");
        out.println("</html>");
        out.close();
    }
    
    private void checkTransaction(PrintWriter out) {
        try {
            wstx.client.WSTxTest port = service.getWSTxTestPort();
            
            // Commit Test Block
            out.println("<br/><br/>");
            out.println("<h2>Commit Test</h2>");
            out.flush();
            try {
            	out.println("1. Initialize Queue<br/>");
                out.flush();
            	
                port.initQueue();
            
            	out.println("2. Begin UserTransaction<br/>");
                out.flush();
                //TX start
                ut.begin();

                boolean result;
                String message = "CommitTestMessage[id=" + new Object().hashCode() + "]";
                try {
                	out.println("3. Send putMessage : " + message + "<br/>");
                    out.flush();
                    
                    port.putMessage(message);
                } finally {
                    try {
                    	out.println("4. Commit UserTransaction<br/>");
                        out.flush();
                        
                        ut.commit();
                    } catch (Exception e) { }
                }
                
            	out.println("5. Verify message<br/>");
                out.flush();
                
                result = port.verifyMessage(message);
                out.println("6. Result : " + result + "<br/>");
                
                if(result) out.println("<b>Commit succeeded</b><br/>");
                else out.println("<b>Commit failed</b><br/>");                
            } catch (Exception e) {
                out.println("<b>unexpected exception in Commit test</b><br/>");
                e.printStackTrace(out);
            }
            
            out.println("<br/><br/>");
            out.println("<h2>Rollback Test</h2>");
            out.flush();
            
            // Rollback Test Block
            try {
            	out.println("7. Initialize Queue<br/>");
                out.flush();
            	
                port.initQueue();
            
            	out.println("8. Begin UserTransaction<br/>");
                out.flush();
                //TX start
                ut.begin();

                boolean result;
                String message = "RollbackTestMessage[id=" + new Object().hashCode() + "]";
                try {
                	out.println("9. Send putMessage : " + message + "<br/>");
                    out.flush();
                    
                    port.putMessage(message);
                } finally {
                    try {
                    	out.println("10. Rollback UserTransaction<br/>");
                        out.flush();
                        
                        ut.rollback();
                    } catch (Exception e) { }
                }
                
            	out.println("11. Verify message<br/>");
                out.flush();
                
                result = port.verifyMessage(message);
                out.println("12. Result : " + result + "<br/>");
                
                if(!result) out.println("<b>Rollback succeeded</b><br/>");
                else out.println("<b>Rollback failed</b><br/>");                
            } catch (Exception e) {
                out.println("<b>unexpected exception in Rollback test</b><br/>");
                e.printStackTrace(out);
            }
            
            out.flush();
        } catch (Exception ex) {
            ex.printStackTrace(out);
        }
    }
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    public String getServletInfo() {
        return "WS-Tx Test Client";
    }
}
