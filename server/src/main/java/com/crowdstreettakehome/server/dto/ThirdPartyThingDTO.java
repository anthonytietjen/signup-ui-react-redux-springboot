package com.crowdstreettakehome.server.dto;

public class ThirdPartyThingDTO {
  public String body;
  public String callback;

  public ThirdPartyThingDTO (String body, String callback){
    this.body = body;
    this.callback = callback;
  }
}