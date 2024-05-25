package com.travelspring.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelspring.crud.entity.Hotels;
@Repository
public interface HotelRepository  extends JpaRepository<Hotels, Integer>{

}
