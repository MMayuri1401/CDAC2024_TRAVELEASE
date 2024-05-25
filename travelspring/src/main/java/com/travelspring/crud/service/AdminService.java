package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Admin;
import com.travelspring.crud.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository repository;
	
	public Admin getUserName(String name) {
		return repository.findById(name).orElse(null);
	}
	
	public List<Admin> getAdmin() {
        return repository.findAll();
    }
}
