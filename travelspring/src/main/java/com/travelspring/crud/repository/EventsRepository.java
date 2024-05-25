package com.travelspring.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelspring.crud.entity.Events;
@Repository
public interface EventsRepository  extends JpaRepository<Events, Integer>{

}
