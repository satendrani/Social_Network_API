package com.jpm.api.stepdefinitions;

import com.jpm.api.utilities.ConfigFileReader;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class BaseStepDefinitions {
	
	String projectPath = System.getProperty("user.dir");
	private final String propertyFilePath = projectPath + "\\configs\\config.properties";
	ConfigFileReader config = new ConfigFileReader(propertyFilePath);
	
	public static String path;

	// Sets Base URI
	public void setBaseURI() {
		RestAssured.baseURI = config.getProperty("url");
	}

	// Returns response
	public static Response getResponse() {
		return RestAssured.get(path);
	}

}
