package com.travelspring.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelspring.crud.entity.Events;
import com.travelspring.crud.entity.Guide;
import com.travelspring.crud.repository.EventsRepository;
import com.travelspring.crud.repository.GuideRepository;

@Service
public class GuideService {
	@Autowired
	private GuideRepository repository;
	
	public Guide saveGuide(Guide evnt)
	{
		return repository.save(evnt);
	}
	
	public List<Guide> getGuide() {
        return repository.findAll();
    }
	
	public String deleteGuide(int id) {
        repository.deleteById(id);
        return "Guide removed";
    }
	
	public Guide getGuideById(int id) {
        return repository.findById(id).orElse(null);
    }
	
	public Guide updateGuide(Guide guide) {
		Guide existingGuide = repository.findById(guide.guideId).orElse(null);
		existingGuide.setGuideAddress(guide.guideAddress);
		existingGuide.setGuideAddress(guide.guideAddress);
		existingGuide.setGuideNumber(guide.guideNumber);
		existingGuide.setGuidePrice(guide.guidePrice);
        return repository.save(existingGuide);
    }

}
