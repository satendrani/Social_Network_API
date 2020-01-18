#This feature file will test Make-POSTs API
#Author: Satendra Dixit (F628535)


Feature: To verify Make Posts API with Rest Assured

@API_Test
	Scenario: To verify Rest service - GET Method
	Given To initiate Rest service to get response with code as "posts/6"
	Then Respose status code should be "200"
	And response should includes the following
				| title 				     		 | body 																		|
				| dolorem eum magni eos aperiam quia | ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae | 