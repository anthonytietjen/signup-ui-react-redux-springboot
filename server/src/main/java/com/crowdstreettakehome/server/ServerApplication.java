package com.crowdstreettakehome.server;

import java.util.UUID;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
    String id = UUID.randomUUID().toString();
    //TODO Implement this
		return id;
  }

  @PostMapping("/callback/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void callback(@PathVariable("id") String id){
    //TODO Implement this
  }

  @PutMapping("/callback/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void callback(@RequestBody CallbackPut request){
    //TODO Implement this
  }

}
