package com.alexberemart.olympicMedals.rest;

import com.alexberemart.core.rest.AbstractRestService;
import com.alexberemart.olympicMedals.model.vo.Country;
import com.alexberemart.olympicMedals.model.vo.Result;
import com.alexberemart.olympicMedals.services.CountryServices;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Service
@Path("country")
@Produces(MediaType.APPLICATION_JSON)
public class CountryService extends AbstractRestService {

    @Autowired
    CountryServices countryServices;

    @GET
    public Response getResults() throws Exception {
        return ok(countryServices.findAll());
    }

    @POST
    public Response saveResult(JsonNode jsonNode) throws Exception {
        final Country country = new ObjectMapper().readValue(jsonNode, new TypeReference<Country>() {});
        return ok(countryServices.saveCountry(country));
    }

}
