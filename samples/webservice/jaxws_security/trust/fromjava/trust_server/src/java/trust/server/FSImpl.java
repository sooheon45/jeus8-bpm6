package trust.server;

/*
@javax.jws.WebService(endpointInterface = "trust.server.IFinancialService",
        wsdlLocation = "WEB-INF/wsdl/PingService.wsdl",
        targetNamespace = "http://tempuri.org/",
        serviceName = "FinancialService",
        portName = "IFinancialService_Port")
*/
@javax.jws.WebService(targetNamespace = "http://tempuri.org/")
public class FSImpl {

    public String getAccountBalance(Department dept) {
        String company = dept.getCompanyName();
        System.out.println("your company : " + company);

        String department = dept.getDepartmentName();
        System.out.println("your department : " + department);

        String balance = "500,000,000";

        return balance;
    }
}
