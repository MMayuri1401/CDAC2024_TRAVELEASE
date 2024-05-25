package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Hotels;
import com.travelspring.crud.repository.HotelRepository;

@Service
public class HotelService {
	@Autowired
	private HotelRepository repository;
	
	public Hotels saveHotel(Hotels evnt)
	{
		return repository.save(evnt);
	}
	
	public List<Hotels> getHotel() {
        return repository.findAll();
    }
	
	public String deleteHotel(int id) {
        repository.deleteById(id);
        return "Hotel removed";
    }
	
	public Hotels getHotelById(int id) {
        return repository.findById(id).orElse(null);
    }
	
	public Hotels updateHotel(Hotels obj) {
		Hotels existingHotel = repository.findById(obj.hotelId).orElse(null);
		existingHotel.setHotelName(obj.hotelName);
		existingHotel.setHotelNumber(obj.hotelNumber);	
		existingHotel.setHotelLocation(obj.hotelLocation);
		existingHotel.setHotelDetails(obj.hotelDetails);
        return repository.save(existingHotel);
    }

}
