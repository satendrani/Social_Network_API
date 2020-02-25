#This feature file will test Users API
#Author: Satendra Dixit (F628535)
Feature: To verify Users API with Rest Assured

  @API_Test
  Scenario: To verify Rest service - GET Method
    Given To initiate Rest service to get response with code as "users/3"
    Then Respose status code should be "200"
    And response should includes the following
      | name             | email              | company.name       |
      | Clementine Bauch | Nathan@yesenia.net | Romaguera-Jacobson |
