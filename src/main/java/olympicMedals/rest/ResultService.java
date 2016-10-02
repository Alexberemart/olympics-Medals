package rest;

import com.alexberemart.core.rest.AbstractRestService;
import org.springframework.beans.factory.annotation.Autowired;
import services.ResultServices;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;

@Path("result")
@Produces(MediaType.APPLICATION_JSON)
public class ResultService extends AbstractRestService {

    @Autowired
    ResultServices resultServices;

    @GET
    public Response getResults() throws Exception {
        return ok(resultServices.findAll());
    }

}
