package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Events;
import com.travelspring.crud.entity.Vehicle;
import com.travelspring.crud.repository.EventsRepository;

@Service
public class EventsService {
	@Autowired
	private EventsRepository repository;
	
	public Events saveEvents(Events evnt)
	{
		return repository.save(evnt);
	}
	
	public List<Events> getEvents() {
        return repository.findAll();
    }
	
	public String deleteEvent(int id) {
        repository.deleteById(id);
        return "event removed";
    }
	
	public Events getEventById(int id) {
        return repository.findById(id).orElse(null);
    }
}
