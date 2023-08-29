package com.ltts.system.UserController;


@RestController
@RequestMapping("/users")

public class UserController {
	
	@Autowired
    private UserService userService;
    
    // Implement endpoints for user registration, login, etc.

}
