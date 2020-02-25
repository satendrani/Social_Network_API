package com.jpm.api.stepdefinitions;

import static org.hamcrest.Matchers.equalTo;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;

import static org.junit.Assert.assertEquals;
import java.util.List;

public class SocialNetOperationStepDef extends BaseStepDefinitions {

	private Response response;

	@Given("^To initiate Rest service to get response with code as \"([^\"]*)\"$")
	public void to_initiate_Rest_service_to_get_response_with_code_as(String recivingArg) throws Throwable {
		// Set Request parameters

		// Set Base URI
		setBaseURI();
		path = recivingArg;

		// Get response
		response = getResponse();
		System.out.println("************The Response value as --" + response.prettyPrint());
	}

	@Then("^Respose status code should be \"([^\"]*)\"$")
	public void respose_status_code_should_be(Integer arg1) throws Throwable {
		// To verify the response status code
		assertEquals("Status Check Failed!", 200, response.getStatusCode());

	}

	@Then("^response should includes the following$")
	public void response_includes_the_following(DataTable arg1) throws Throwable {

		// This method to verify response body
		List<List<String>> data = arg1.raw();
		System.out.println("*************** Actual Data Table - data value as-- " + data);

		for (int i = 0; i < data.get(1).size(); i++) 
			response.then().body(data.get(0).get(i), equalTo(data.get(1).get(i).trim()));

		/*
		 * response.then().body("postId", equalTo(data.get(1).get(0)));
		 * response.then().body("id", equalTo(data.get(1).get(1)));
		 * response.then().body("email", equalTo(data.get(1).get(2)));
		 */
	}

}