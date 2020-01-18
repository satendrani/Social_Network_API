#This feature file will test comments API
#Author: Satendra Dixit (F628535)


Feature: To verify Comments API with Rest Assured

@API_Test
	Scenario: To verify Rest service - GET Method with different ID : 2
	Given To initiate Rest service to get response with code as "comments/2"
	Then Respose status code should be "200"
	And response should includes the following
				| name  									| email 				 |
				| quo vero reiciendis velit similique earum | Jayne_Kuhic@sydney.com |
				
	
	@API_Test			
	Scenario: To verify Rest service - GET Method with different ID : 3
	Given To initiate Rest service to get response with code as "comments/3"
	Then Respose status code should be "200"
	And response should includes the following
				| name  									| email 				 |
				| odio adipisci rerum aut animi | Nikita@garfield.biz |