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
@Table(name = "Vehicle")

public class Vehicle {
	@Id
    @GeneratedValue
    public int vehicleId;
	public String vehicleName;
	public String vehicleNumber;
	public String vehicleSeats;
	public String vehicleRate;
	
	public int getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}
	public String getVehicleName() {
		return vehicleName;
	}
	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public String getVehicleSeats() {
		return vehicleSeats;
	}
	public void setVehicleSeats(String vehicleSeats) {
		this.vehicleSeats = vehicleSeats;
	}
	public String getVehicleRate() {
		return vehicleRate;
	}
	public void setVehicleRate(String vehicleRate) {
		this.vehicleRate = vehicleRate;
	}
	
	
	
}
