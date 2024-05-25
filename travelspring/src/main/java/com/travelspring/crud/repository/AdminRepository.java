package com.travelspring.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.travelspring.crud.entity.Admin;

@Repository
public interface AdminRepository  extends JpaRepository<Admin, String>{
	
}
