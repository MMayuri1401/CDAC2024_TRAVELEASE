package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Booking;
import com.travelspring.crud.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository repository;
	
	public Booking saveBooking(Booking evnt)
	{
		return repository.save(evnt);
	}
	
	public List<Booking> getBookings() {
        return repository.findAll();
    }
	
	public String deleteBooking(int id) {
        repository.deleteById(id);
        return "Booking removed";
    }
	
	public Booking getBookingById(int id) {
        return repository.findById(id).orElse(null);
    }
	
	
	public List<Booking> findBycustIdBooking(int id) {
        return repository.findBycustId(id);
    }
	
	
	public Booking updateBooking(Booking obj) {
		Booking existingBooking = repository.findById(obj.bookingId).orElse(null);
		existingBooking.setEventName(obj.eventName);
		existingBooking.setBookingDate(obj.bookingDate);
		existingBooking.setGuideName(obj.guideName);	
		existingBooking.setVehicleName(obj.vehicleName);
		existingBooking.setStartDate(obj.startDate);
		existingBooking.setEndDate(obj.endDate);
		existingBooking.setAdults(obj.adults);	
		existingBooking.setChilds(obj.childs);
		existingBooking.setTotalPrice(obj.totalPrice);	
		existingBooking.setStatus(obj.status);
        return repository.save(existingBooking);
    }

}
