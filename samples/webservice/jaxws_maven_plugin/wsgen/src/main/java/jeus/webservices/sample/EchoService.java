package jeus.webservices.sample;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService(serviceName = "EchoService")
public class EchoService {

    @WebMethod(operationName = "echo")
    public String echo(@WebParam(name = "echo_arg") String txt) {
        return txt;
    }

}
