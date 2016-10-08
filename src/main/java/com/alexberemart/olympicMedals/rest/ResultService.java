package com.alexberemart.olympicMedals.rest;

import com.alexberemart.core.rest.AbstractRestService;
import com.alexberemart.olympicMedals.model.vo.Result;
import com.alexberemart.olympicMedals.services.ResultServices;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Service
@Path("result")
@Produces(MediaType.APPLICATION_JSON)
public class ResultService extends AbstractRestService {

    @Autowired
    ResultServices resultServices;

    @GET
    public Response getResults() throws Exception {
        return ok(resultServices.findAll());
    }

    @POST
    public Response saveResult(JsonNode jsonNode) throws Exception {
        final Result result = new ObjectMapper().readValue(jsonNode, new TypeReference<Result>() {});
        return ok(resultServices.saveResult(result));
    }

}
