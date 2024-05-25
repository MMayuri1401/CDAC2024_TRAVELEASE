package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Admin;
import com.travelspring.crud.entity.Booking;
import com.travelspring.crud.entity.Customer;
import com.travelspring.crud.model.CustReq;
import com.travelspring.crud.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	
	public String getUserName(CustReq obj) {
		String result="";
		List <Customer> req = customerRepository.findAll();
		 for(Customer obj1:req)  {
			  if(obj.emailId.equals(obj1.emailId) && obj.password.equals(obj1.password)) {
				  result= Integer.toString(obj1.custId);
				  break;
			  }
			  else {
				  result= "Invalid";
			  }
			}  
		return result;
	}
	
	public Customer saveCustomer(Customer customer)
	{
		return customerRepository.save(customer);
	}
	
	public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }
	
	public Customer getCustomerById(int id) {
        return customerRepository.findById(id).orElse(null);
    }
	
	public Customer updateCustomer(Customer obj) {
		Customer existingCustomer = customerRepository.findById(obj.custId).orElse(null);
		existingCustomer.setCustName(obj.custName);
		existingCustomer.setEmailId(obj.emailId);
		existingCustomer.setMobileNo(obj.mobileNo);	
		existingCustomer.setCustAddress(obj.custAddress);
		existingCustomer.setPassword(obj.password);
        return customerRepository.save(existingCustomer);
    }
	
}
