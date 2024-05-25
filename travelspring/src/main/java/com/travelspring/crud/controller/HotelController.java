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

import com.travelspring.crud.entity.Hotels;
import com.travelspring.crud.service.HotelService;

@RestController
public class HotelController {
	@Autowired
	private HotelService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addHotel")
	public Hotels saveHotel(@RequestBody Hotels evnt) {
		return service.saveHotel(evnt);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/hotels")
    public List<Hotels> findAllHotels() {
        return service.getHotel();
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deletehotel/{id}")
    public String deleteHotel(@PathVariable int id) {
        return service.deleteHotel(id);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/GetHotelById/{id}")
    public Hotels findHotelById(@PathVariable int id) {
		return service.getHotelById(id);
    }

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateHotel")
    public Hotels updateVehicle(@RequestBody Hotels obj) {
        return service.updateHotel(obj);
    }
}
