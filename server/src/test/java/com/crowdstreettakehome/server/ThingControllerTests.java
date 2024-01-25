package com.crowdstreettakehome.server;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import com.crowdstreettakehome.server.controllers.ThingController;
import com.crowdstreettakehome.server.dto.CallbackPut;
import com.crowdstreettakehome.server.dto.PostRequest;
import com.crowdstreettakehome.server.dto.StatusResponse;

@SpringBootTest
class ThingControllerTests {

  @Autowired
  private ThingController controller;

	@Test
	void postRequest() {
    String id;
    String body = "Hello world";
    String status1 = "STARTED";
    String status2 = "PROCESSING";
    String detail = "Details go here";
    StatusResponse statusResponse;
    String timeStampUpdated1;
    String timeStampUpdated2;
    String timeStampUpdated3;

    // POST /request
    PostRequest postRequest = new PostRequest();
    postRequest.body = body;
    id = controller.request(postRequest);
    statusResponse = controller.status(id);
    timeStampUpdated1 = statusResponse.timeStampUpdatedUTC;
    assertThat(statusResponse.status).isEqualTo(null);
    assertThat(statusResponse.detail).isEqualTo(null);
    assertThat(statusResponse.body).isEqualTo(body);
    assertThat(statusResponse.timeStampCreatedUTC).isNotEqualTo(null);
    assertThat(timeStampUpdated1).isEqualTo(statusResponse.timeStampCreatedUTC);

    // POST /callback/{id}
    controller.callback(id, "STARTED");
    statusResponse = controller.status(id);
    timeStampUpdated2 = statusResponse.timeStampUpdatedUTC;
    assertThat(statusResponse.status).isEqualTo(status1);
    assertThat(statusResponse.detail).isEqualTo(null);
    assertThat(statusResponse.body).isEqualTo(body);
    assertThat(timeStampUpdated2).isNotEqualTo(timeStampUpdated1);

    // PUT /callback/{id}
    CallbackPut callbackPut = new CallbackPut();
    callbackPut.status = status2;
    callbackPut.detail = detail;
    controller.callback(id, callbackPut);
    statusResponse = controller.status(id);
    timeStampUpdated3 = statusResponse.timeStampUpdatedUTC;
    assertThat(statusResponse.status).isEqualTo(status2);
    assertThat(statusResponse.detail).isEqualTo(detail);
    assertThat(statusResponse.body).isEqualTo(body);
    assertThat(timeStampUpdated3).isNotEqualTo(timeStampUpdated2);
  }

}
