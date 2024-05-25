package com.travelspring.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travelspring.crud.entity.Customer;
import com.travelspring.crud.entity.Events;
import com.travelspring.crud.entity.Vehicle;
import com.travelspring.crud.service.CustomerService;
import com.travelspring.crud.service.EventsService;

@RestController
public class EventsController {
	@Autowired
	private EventsService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addEvents")
	public Events saveCustomer(@RequestBody Events evnt) {
		return service.saveEvents(evnt);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/events")
    public List<Events> findAllEvents() {
        return service.getEvents();
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deleteevent/{id}")
    public String deleteEvent(@PathVariable int id) {
        return service.deleteEvent(id);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/GetEventById/{id}")
    public Events findVehicleById(@PathVariable int id) {
		return service.getEventById(id);
    }
}
