package rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/hello")
public class MyResource {

    @GET
    @Produces("*/*")
    public String getMessage() {
        return "Hello World";
    }
     
}
