package com.jpm.api.utilities;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class BaseUtils {
    //Global Setup Variables
    public static String path;
    public static String jsonPathTerm;

	String projectPath = System.getProperty("user.dir");
//	private final String loggerFilePath = projectPath + "\\log4j.properties";
	
    //Sets base path
    public static void setBasePath(String basePathTerm) {
        RestAssured.basePath = basePathTerm;
    }

    //Reset Base URI (after test)
    public static void resetBaseURI() {
        RestAssured.baseURI = null;
    }

    //Reset base path
    public static void resetBasePath() {
        RestAssured.basePath = null;
    }

    //Sets ContentType
    public static void setContentType(ContentType Type) {
    	RestAssured.given().contentType(Type);
    }

    //Sets Json path term
    public static void setJsonPathTerm(String jsonPath) {
        jsonPathTerm = jsonPath;
    }

    //Created search query path
    public static void createSearchQueryPath(String searchTerm, String param, String paramValue) {
        path = searchTerm + "/" + jsonPathTerm + "?" + param + "=" + paramValue;
    }

    //Returns response
    public static Response getResponse() {
        return RestAssured.get(path);
    }

    //Returns JsonPath object
    public static JsonPath getJsonPath(Response res) {
        String json = res.asString();
        return new JsonPath(json);
    }
    
    
    //logger - incomplete     
    public static void logger(String message){
    	//TODO Need to work
/*		Logger logger = Logger.getLogger("devpinoyLogger");
		logger.debug(message);*/
	}
}