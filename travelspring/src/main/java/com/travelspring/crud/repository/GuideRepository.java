package com.travelspring.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelspring.crud.entity.Guide;
@Repository
public interface GuideRepository  extends JpaRepository<Guide, Integer>{

}
