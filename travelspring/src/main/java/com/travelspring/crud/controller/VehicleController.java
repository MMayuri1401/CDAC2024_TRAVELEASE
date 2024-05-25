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
import com.travelspring.crud.entity.Vehicle;
import com.travelspring.crud.service.CustomerService;
import com.travelspring.crud.service.EventsService;
import com.travelspring.crud.service.GuideService;
import com.travelspring.crud.service.VehicleService;

@RestController
public class VehicleController {
	@Autowired
	private VehicleService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addVehicle")
	public Vehicle saveVehicle(@RequestBody Vehicle evnt) {
		return service.saveVehicle(evnt);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/vehicles")
    public List<Vehicle> findAllVehicle() {
        return service.getVehicle();
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deletevehicle/{id}")
    public String deleteVehicle(@PathVariable int id) {
        return service.deleteVehicle(id);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/GetVehicleById/{id}")
    public Vehicle findVehicleById(@PathVariable int id) {
		return service.getVehicleById(id);
    }

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateVehicle")
    public Vehicle updateVehicle(@RequestBody Vehicle obj) {
        return service.updateVehicle(obj);
    }
}
