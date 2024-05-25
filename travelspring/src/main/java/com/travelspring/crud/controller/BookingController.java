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

import com.travelspring.crud.entity.Booking;
import com.travelspring.crud.service.BookingService;

@RestController
public class BookingController {
	@Autowired
	private BookingService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addBooking")
	public Booking saveVehicle(@RequestBody Booking evnt) {
		return service.saveBooking(evnt);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/bookings")
    public List<Booking> findAllBooking() {
        return service.getBookings();
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/bookingsByCust/{id}")
    public List<Booking> findBycustIdBooking(@PathVariable int id) {
        return service.findBycustIdBooking(id);
    }
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deletebooking/{id}")
    public String deleteBooking(@PathVariable int id) {
        return service.deleteBooking(id);
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/GetBookingById/{id}")
    public Booking findBookingById(@PathVariable int id) {
		return service.getBookingById(id);
    }

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateBooking")
    public Booking updateBooking(@RequestBody Booking obj) {
        return service.updateBooking(obj);
    }
}
