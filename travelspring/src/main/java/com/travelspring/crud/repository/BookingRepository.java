 package com.travelspring.crud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelspring.crud.entity.Booking;
@Repository
public interface BookingRepository  extends JpaRepository<Booking, Integer>{
	List<Booking> findBycustId(int custId);
}
