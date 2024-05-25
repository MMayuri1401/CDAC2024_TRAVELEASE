package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Events;
import com.travelspring.crud.entity.Guide;
import com.travelspring.crud.entity.Vehicle;
import com.travelspring.crud.repository.EventsRepository;
import com.travelspring.crud.repository.GuideRepository;
import com.travelspring.crud.repository.VehicleRepository;

@Service
public class VehicleService {
	@Autowired
	private VehicleRepository repository;
	
	public Vehicle saveVehicle(Vehicle evnt)
	{
		return repository.save(evnt);
	}
	
	public List<Vehicle> getVehicle() {
        return repository.findAll();
    }
	
	public String deleteVehicle(int id) {
        repository.deleteById(id);
        return "Vehicle removed";
    }
	
	public Vehicle getVehicleById(int id) {
        return repository.findById(id).orElse(null);
    }
	
	public Vehicle updateVehicle(Vehicle obj) {
		Vehicle existingVehicle = repository.findById(obj.vehicleId).orElse(null);
		existingVehicle.setVehicleName(obj.vehicleName);
		existingVehicle.setVehicleNumber(obj.vehicleNumber);	
		existingVehicle.setVehicleSeats(obj.vehicleSeats);
		existingVehicle.setVehicleRate(obj.vehicleRate);
        return repository.save(existingVehicle);
    }

}
