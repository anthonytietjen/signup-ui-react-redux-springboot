package com.crowdstreettakehome.server;

import java.util.Dictionary;
import java.util.UUID;

import com.crowdstreettakehome.server.dto.ThirdPartyThingDTO;
import com.crowdstreettakehome.server.thirdpartyapi.ThirdPartyApi;

public class Thing {
  private String callbackPath = "/callback/{id}"; // TODO: Get this from a config file
  private ThingDTO dto;

  //region Constructors
  public Thing(String body){
    this.dto = new ThingDTO();
    this.dto.id = UUID.randomUUID().toString();
    this.dto.body = body;
  }

  public Thing(ThingDTO thingDTO){
    this.dto = thingDTO;
  }
  //endregion Constructors

  //region Action methods
  public static Thing getById(String id){
    ThingDTO dto = ThingStorage.getStorage().get(id);
    return new Thing(dto);
  }

  public void save(){
    ThingStorage.getStorage().put(this.dto.id, this.dto);
  }

  public Boolean PostToThirdParty(){
    ThirdPartyApi thirdPartyApi = new ThirdPartyApi();
    ThirdPartyThingDTO thirdPartyThingDTO = new ThirdPartyThingDTO(this.dto.body, callbackPath);
    Boolean success = thirdPartyApi.PostThirdPartyThing(thirdPartyThingDTO);
    return success;
  }
  //endregion Action methods

  //region Getters and Setters

  public String getId(){
    return this.dto.id;
  }

  public void setBody(String body){
    this.dto.body = body;
  }

  public String getBody(){
    return this.dto.body;
  }

  public void setDetail(String detail){
    this.dto.detail = detail;
  }

  public String getDetail(){
    return this.dto.detail;
  }

  public void setStatus(String status){
    this.dto.status = status;
  }

  public String getStatus(){
    return this.dto.status;
  }
  //endregion Getters and Setters
}