package com.travelspring.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travelspring.crud.entity.Admin;
import com.travelspring.crud.entity.Booking;
import com.travelspring.crud.entity.Customer;
import com.travelspring.crud.model.CustReq;
import com.travelspring.crud.service.CustomerService;

@RestController
public class CustomerController {
	@Autowired
	private CustomerService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addCustomer")
	public Customer saveCustomer(@RequestBody Customer customer) {
		return service.saveCustomer(customer);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getcustomers")
    public List<Customer> findAllCustomers() {
        return service.getCustomers();
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/userlogin")
	public String findCustomerById(@RequestBody CustReq customer) {
        return service.getUserName(customer);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/GetCustomerById/{id}")
    public Customer findCustomerById(@PathVariable int id) {
		return service.getCustomerById(id);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateCustomer")
    public Customer updateCustomer(@RequestBody Customer obj) {
        return service.updateCustomer(obj);
    }
	
}
