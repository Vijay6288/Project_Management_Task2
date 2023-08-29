package com.ltts.system.Repository;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByUsername(String username);
	
	


}
