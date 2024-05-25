package com.travelspring.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travelspring.crud.entity.Customer;
import com.travelspring.crud.entity.Events;
import com.travelspring.crud.entity.Guide;
import com.travelspring.crud.service.CustomerService;
import com.travelspring.crud.service.EventsService;
import com.travelspring.crud.service.GuideService;

@RestController
public class GuideController {
	@Autowired
	private GuideService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addGuide")
	public Guide saveGuide(@RequestBody Guide evnt) {
		return service.saveGuide(evnt);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/guides")
    public List<Guide> findAllGuide() {
        return service.getGuide();
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deleteguide/{id}")
    public String deleteGuide(@PathVariable int id) {
        return service.deleteGuide(id);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/GetGuideById/{id}")
    public Guide findGuideById(@PathVariable int id) {
        return service.getGuideById(id);
    }

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateGuide")
    public Guide updateGuide(@RequestBody Guide obj) {
        return service.updateGuide(obj);
    }
}
