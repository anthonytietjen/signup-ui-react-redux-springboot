package com.crowdstreettakehome.server.thirdpartyapi;

import com.crowdstreettakehome.server.dto.ThirdPartyThingDTO;
import com.crowdstreettakehome.server.utils.HttpUtils;

public class ThirdPartyApi {
  //TODO Move this to a config file
  private String thirdPartyURL = "http://example.come/request";

  public Boolean PostThirdPartyThing(ThirdPartyThingDTO thirdPartyThingDTO){
    Boolean success = HttpUtils.PostJson(thirdPartyURL, thirdPartyThingDTO);
    return success;
  }
}
