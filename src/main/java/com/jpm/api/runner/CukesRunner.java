package com.jpm.api.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumberHtmlReport" },

		features = { "src/main/resources/features" }, 
		glue = { "com.jpm.api.stepdefinitions" }, 
		tags = { "@API_Test" }
)

public class CukesRunner extends BaseRunner {

}