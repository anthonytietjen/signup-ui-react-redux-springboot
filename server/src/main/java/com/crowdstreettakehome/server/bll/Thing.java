package com.crowdstreettakehome.server;

import java.util.Dictionary;
import java.util.UUID;

public class Thing {
  private ThingDTO dto;

  // Constructor
  public Thing(String body){
    this.dto = new ThingDTO();
    this.dto.id = UUID.randomUUID().toString();
    this.dto.body = body;
  }

  // Constructor
  public Thing(ThingDTO thingDTO){
    this.dto = thingDTO;
  }

  // Get by id
  public static Thing getById(String id){
    ThingDTO dto = ThingStorage.getStorage().get(id);
    return new Thing(dto);
  }

  // Action methods

  public void Save(){
    ThingStorage.getStorage().put(this.dto.id, this.dto);
  }

  // Getters and setters

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
}