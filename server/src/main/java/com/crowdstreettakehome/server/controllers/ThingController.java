package com.crowdstreettakehome.server.controllers;

import java.util.ArrayList;

import com.crowdstreettakehome.server.bll.Thing;
import com.crowdstreettakehome.server.dal.ThingStorage;
import com.crowdstreettakehome.server.dto.CallbackPut;
import com.crowdstreettakehome.server.dto.PostRequest;
import com.crowdstreettakehome.server.dto.StatusResponse;
import com.crowdstreettakehome.server.dto.ThingDTO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;

@SpringBootApplication
@RestController
public class ThingController {

	public static void main(String[] args) {
		SpringApplication.run(ThingController.class, args);
	}

  //region Controller actions
	@PostMapping("/request")
	public String request(@RequestBody PostRequest request){
    //TODO: Consider error handling for:
    // - if Save fails but PostToThirdParty succeeds
    // - if Save succeeds but PostToThirdParty fails
    // - etc.
    Thing thing = new Thing(request.body);    
    Boolean savedToThirdParty = thing.PostToThirdParty();

    // If the api fails, don't save to our own store or it would be orphaned.
    // TODO: Talk to product owner to confirm whether to keep this behavior
    if(savedToThirdParty){
      thing.save();
      return thing.getId();
    } else {
      return "ERROR";
    }
  }

  @PostMapping("/callback/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void callback(@PathVariable("id") String id, @RequestBody String status){
    //TODO: Consider error handling for:
    // - if the id in the request isn't in the store
    // - if the status in the request is an un-allowed value
    // - if Save fails
    // - etc.
    Thing thing = Thing.getById(id);
    thing.setStatus(status);
    thing.updateTimeStamp();
    thing.save();
  }

  @PutMapping("/callback/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void callback(@PathVariable("id") String id, @RequestBody CallbackPut request){
    //TODO: Consider error handling for:
    // - if the parameters in the request are missing or invalid
    // - if the status in the request is an un-allowed value
    // - if Save fails
    // - etc.
    Thing thing = Thing.getById(id);
    thing.setStatus(request.status);
    thing.setDetail(request.detail);
    thing.updateTimeStamp();
    thing.save();
  }

  @GetMapping("/status/{id}")
  public StatusResponse status(@PathVariable("id") String id){
    //TODO: Consider error handling for:
    // - if a record for the given id isn't in the store
    // - etc.
    Thing thing = Thing.getById(id);
    StatusResponse response = buildStatusResponseFromThingDTO(thing);
    return response;
  }

  @GetMapping("/dump")
  public ArrayList<ThingDTO> dump(){
    // This is only here for the take-home project demo purposes
    // A production app wouldn't have this
    ArrayList<ThingDTO> dump = ThingStorage.dumpAsList();
    return dump;
  }
  //endregion Controller actions

  //region Utility methods
  private StatusResponse buildStatusResponseFromThingDTO (Thing thing){
    StatusResponse response = new StatusResponse();
    response.body = thing.getBody();
    response.status = thing.getStatus();
    response.detail = thing.getDetail();
    response.timeStampCreatedUTC = thing.getTimeStampCreatedUTC();
    response.timeStampUpdatedUTC = thing.getTimeStampUpdatedUTC();
    return response;
  }
  //endregion Utility methods

}
