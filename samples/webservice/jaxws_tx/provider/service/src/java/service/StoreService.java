package service;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.annotation.Resource;
import javax.jws.WebService;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.transaction.RollbackException;
import javax.transaction.xa.XAResource;
import javax.transaction.Transaction;
import javax.transaction.UserTransaction;
import static javax.ejb.TransactionManagementType.CONTAINER;
import static javax.ejb.TransactionAttributeType.*;

import javax.sql.DataSource;
import oracle.jdbc.xa.client.*;
import java.sql.*;
import javax.sql.XAConnection;
import javax.sql.XADataSource;

import javax.xml.ws.Provider;
import javax.xml.ws.Service;
import javax.xml.ws.ServiceMode;
import javax.xml.ws.WebServiceProvider;

import java.io.ByteArrayInputStream;

import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMResult;
import javax.xml.transform.stream.StreamSource;

import org.w3c.dom.Node;


@Stateless
@TransactionManagement(CONTAINER)
@TransactionAttribute(NOT_SUPPORTED)
@ServiceMode(value = Service.Mode.PAYLOAD)
@WebServiceProvider(wsdlLocation = "WEB-INF/wsdl/StoreNumberService.wsdl", targetNamespace = "http://service/", serviceName = "StoreNumberService", portName = "StoreNumberPort")
public class StoreService implements Provider<Source> {

	private DataSource dataSource;
	private final String dataSourceName = "oraclexa";
	private String tableName = "NumTable";
	private String query;

	Statement statement = null;
	ResultSet result = null;
	Connection connection;

	public StoreService() {
	}

	@TransactionAttribute(REQUIRED)
	public Source invoke(Source source) {
		try {
			String body = null;
			String methodName = null;

			DOMResult dom = new DOMResult();
			Transformer trans = TransformerFactory.newInstance().newTransformer();
			trans.transform(source, dom);
			Node node = dom.getNode();
			Node root = node.getFirstChild();
			methodName = root.getNodeName();
			if (methodName.equals("ns2:init")) {
				init();
				body = "<ns2:initResponse xmlns:ns2=\"http://service/\"/>";

			} else if (methodName.equals("ns2:store")) {
				long id = Long.decode(root.getFirstChild().getFirstChild().getNodeValue());
				body =	"<ns2:storeResponse xmlns:ns2=\"http://service/\">"
						+ "<return>" + store(id) + "</return>"
						+ "</ns2:storeResponse>"; 
			}

			Source outputSource = new StreamSource(new ByteArrayInputStream(body.getBytes()));
			return outputSource;
		} catch (Exception e) {
			return null;
		}
	}

	private Statement getStatement() throws NamingException, SQLException {
		try {
			Context initialContext = new InitialContext();
			dataSource = (DataSource) initialContext.lookup(dataSourceName);
			connection = dataSource.getConnection();
			statement = connection.createStatement();
		} catch (NamingException e) {
			throw e;
		}
		return statement;

	}

	private void init() {
		try {
			statement = getStatement();
			System.out.println("finish in acquiring statement.");

			statement.executeUpdate("create table " + tableName + " (tid int)");
			System.out.println("finish in creating table.");

			connection.close();
		} catch (Exception e) {
			System.out.println("fail during initialization.");
		}
	}

	private String store(long id) {
		try {
			statement = getStatement();
			statement.executeUpdate("insert into " + tableName	+ " (tid) values (" + id + ")");
			connection.close();
		} catch (Exception ex) {
		}
		return "success";
	}
}
