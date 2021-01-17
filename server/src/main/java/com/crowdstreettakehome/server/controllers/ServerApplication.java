package com.crowdstreettakehome.server;

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
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@PostMapping("/request")
	public String request(@RequestBody PostRequest request){
    Thing thing = new Thing(request.body);
    thing.Save();
		return thing.getId();
  }

  @PostMapping("/callback/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void callback(@PathVariable("id") String id){
    Thing thing = Thing.getById(id);
    thing.setStatus("STARTED"); //TODO Get text from body
    thing.Save();
  }

  @PutMapping("/callback/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void callback(@PathVariable("id") String id, @RequestBody CallbackPut request){
    Thing thing = Thing.getById(id);
    thing.setStatus(request.status);
    thing.setDetail(request.detail);
    thing.Save();
  }

  @GetMapping("/status/{id}")
  public ThingDTO status(@PathVariable("id") String id){
    Thing thing = Thing.getById(id);
    ThingDTO thingDTO = new ThingDTO();
    thingDTO.id = thing.getId();
    thingDTO.body = thing.getBody();
    thingDTO.status = thing.getStatus();
    thingDTO.detail = thing.getDetail();
    return thingDTO;
  }

}
