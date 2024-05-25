package com.travelspring.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.travelspring.crud.entity.Admin;
import com.travelspring.crud.service.AdminService;

@RestController
public class AdminController {
	@Autowired
	private AdminService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/adminlogin/{name}")
	public Admin findProductById(@PathVariable String name) {
        return service.getUserName(name);
    }
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/adminlist")
    public List<Admin> findAllProducts() {
        return service.getAdmin();
    }
	
}