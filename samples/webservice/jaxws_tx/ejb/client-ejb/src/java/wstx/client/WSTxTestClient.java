package wstx.client;

import java.io.*;
import java.net.*;
import javax.annotation.Resource;

import java.util.HashSet;
import java.util.Set;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.NotSupportedException;
import javax.transaction.RollbackException;
import javax.transaction.SystemException;
import javax.transaction.UserTransaction;
import javax.xml.ws.WebServiceRef;

public class WSTxTestClient extends HttpServlet {

	@WebServiceRef(wsdlLocation = "http://localhost:8088/StoreNumberService/StoreNumber?wsdl")
	private wstx.client.StoreNumberService service;

	@Resource
	UserTransaction ut;

	protected void processRequest(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		wstx.client.StoreNumber port = service.getStoreNumberPort();
		boolean failed = false;
		
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<body>");
		out.println("WS-TX Test Client</br>");
		out.flush();		
		out.println("Calling WS-TX Web Service implemented with EJB</br>");
		out.flush();		
		out.println("Transaction Commit Test : </br>");
		out.flush();
		
		try {			
			final long value = 10;
			port.init();
			try {
				ut.begin();
				port.store(value);
			} finally {
				try {
					out.println("Commit : </br>");
					out.flush();
               
					ut.commit();         
			   	//  ut.rollback();

				} catch (Exception e) {
				}
			}

		} catch (Exception ex) {
			ex.printStackTrace(out);
		}
		
		out.println("</body>");
		out.println("</html>");
		out.close();
	}
	
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	public String getServletInfo() {
		return "Short description";
	}
}
