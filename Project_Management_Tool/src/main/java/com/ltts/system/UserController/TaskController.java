package com.ltts.system.UserController;


@RestController
@RequestMapping("/tasks")

public class TaskController {
	
	
	  @Autowired
	    private TaskService taskService;

	    // Implement endpoints for task creation, assignment, completion, etc

}
