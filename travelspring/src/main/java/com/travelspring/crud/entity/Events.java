package com.travelspring.crud.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="events")
public class Events {
	@Id
	@GeneratedValue
	public int eventId;	
	public String eventName;
	public String eventDesc;
	public String adultPrice;
	public String childPrice;
}
