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

@WebService()
@Stateless
@TransactionManagement(CONTAINER)
@TransactionAttribute(NOT_SUPPORTED)
public class StoreNumber {

	private DataSource dataSource;
	private final String dataSourceName = "oraclexa";
	private String tableName = "testTable";
	private String query;
	
	Statement statement = null;
	ResultSet result = null;	
	Connection connection;

	public StoreNumber() {
	}
	
	private Statement getStatement() throws NamingException, SQLException{
		try {
			Context initialContext = new InitialContext();
			dataSource = (DataSource) initialContext.lookup(dataSourceName);
			connection = dataSource.getConnection();
			statement = connection.createStatement();
		}catch (NamingException e){
			System.out.println("Fail to look up DataSource.");
			throw e;
		}
      return statement; 

	}

	@WebMethod(action = "init")
	public void init() {
		try {		
			statement = getStatement();
			statement.executeUpdate("create table " + tableName +  " (tid int)");
			connection.close();
		} catch (Exception e) {
			System.out.println("fail during initialization.");
		} 
	}

	@WebMethod(action = "store")
	@TransactionAttribute(REQUIRED)
	public String store(@WebParam(name = "id") Long id) {		
		try {						
			statement = getStatement();
			statement.executeUpdate("insert into " + tableName +" (tid) values (" + id + ")");
			connection.close();
		} catch (Exception ex) {
			return "failure";
		} 
		return "success";
	}
}