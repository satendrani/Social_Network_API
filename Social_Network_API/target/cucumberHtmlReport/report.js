$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CommentsValidate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#This feature file will test comments API"
    },
    {
      "line": 2,
      "value": "#Author: Satendra Dixit (F628535)"
    }
  ],
  "line": 5,
  "name": "To verify Comments API with Rest Assured",
  "description": "",
  "id": "to-verify-comments-api-with-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "To verify Rest service - GET Method with different ID : 2",
  "description": "",
  "id": "to-verify-comments-api-with-rest-assured;to-verify-rest-service---get-method-with-different-id-:-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@API_Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "To initiate Rest service to get response with code as \"comments/2\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Respose status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "response should includes the following",
  "rows": [
    {
      "cells": [
        "name",
        "email"
      ],
      "line": 12
    },
    {
      "cells": [
        "quo vero reiciendis velit similique earum",
        "Jayne_Kuhic@sydney.com"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments/2",
      "offset": 55
    }
  ],
  "location": "SocialNetOperationStepDef.to_initiate_Rest_service_to_get_response_with_code_as(String)"
});
formatter.result({
  "duration": 9801328599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetOperationStepDef.respose_status_code_should_be(Integer)"
});
formatter.result({
  "duration": 8157800,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetOperationStepDef.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 2247916099,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To verify Rest service - GET Method with different ID : 3",
  "description": "",
  "id": "to-verify-comments-api-with-rest-assured;to-verify-rest-service---get-method-with-different-id-:-3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@API_Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "To initiate Rest service to get response with code as \"comments/3\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Respose status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "response should includes the following",
  "rows": [
    {
      "cells": [
        "name",
        "email"
      ],
      "line": 21
    },
    {
      "cells": [
        "odio adipisci rerum aut animi",
        "Nikita@garfield.biz"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments/3",
      "offset": 55
    }
  ],
  "location": "SocialNetOperationStepDef.to_initiate_Rest_service_to_get_response_with_code_as(String)"
});
formatter.result({
  "duration": 460142300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetOperationStepDef.respose_status_code_should_be(Integer)"
});
formatter.result({
  "duration": 196800,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetOperationStepDef.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 248977800,
  "status": "passed"
});
formatter.uri("PostsValidate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#This feature file will test Make-POSTs api"
    },
    {
      "line": 2,
      "value": "#Author: Satendra Dixit"
    }
  ],
  "line": 5,
  "name": "To verify Make Posts API with Rest Assured",
  "description": "",
  "id": "to-verify-make-posts-api-with-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "To verify Rest service - GET Method",
  "description": "",
  "id": "to-verify-make-posts-api-with-rest-assured;to-verify-rest-service---get-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@API_Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "To initiate Rest service to get response with code as \"posts/6\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Respose status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "response should includes the following",
  "rows": [
    {
      "cells": [
        "title",
        "body"
      ],
      "line": 12
    },
    {
      "cells": [
        "dolorem eum magni eos aperiam quia",
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts/6",
      "offset": 55
    }
  ],
  "location": "SocialNetOperationStepDef.to_initiate_Rest_service_to_get_response_with_code_as(String)"
});
formatter.result({
  "duration": 415996300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetOperationStepDef.respose_status_code_should_be(Integer)"
});
formatter.result({
  "duration": 360599,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetOperationStepDef.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 106285600,
  "status": "passed"
});
formatter.uri("UsersValidate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#This feature file will test Users api"
    },
    {
      "line": 2,
      "value": "#Author: Satendra Dixit"
    }
  ],
  "line": 5,
  "name": "To verify Users API with Rest Assured",
  "description": "",
  "id": "to-verify-users-api-with-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "To verify Rest service - GET Method",
  "description": "",
  "id": "to-verify-users-api-with-rest-assured;to-verify-rest-service---get-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@API_Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "To initiate Rest service to get response with code as \"users/3\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Respose status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "response should includes the following",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "company.name"
      ],
      "line": 12
    },
    {
      "cells": [
        "Clementine Bauch",
        "Nathan@yesenia.net",
        "Romaguera-Jacobson"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users/3",
      "offset": 55
    }
  ],
  "location": "SocialNetOperationStepDef.to_initiate_Rest_service_to_get_response_with_code_as(String)"
});
formatter.result({
  "duration": 582717301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetOperationStepDef.respose_status_code_should_be(Integer)"
});
formatter.result({
  "duration": 251300,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetOperationStepDef.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 352446700,
  "status": "passed"
});
});