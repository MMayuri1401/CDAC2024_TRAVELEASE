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
@Table(name = "Guide")

public class Guide {
	@Id
    @GeneratedValue
    public int guideId;
	public String guideName;
	public String guideAddress;
	public String guideNumber;
	public String guidePrice;
	
	public int getGuideId() {
		return guideId;
	}
	public void setGuideId(int guideId) {
		this.guideId = guideId;
	}
	
	public String getGuideName() {
		return guideName;
	}
	public void setGuideName(String guideName) {
		this.guideName = guideName;
	}
	
	public String getGuideAddress() {
		return guideAddress;
	}
	public void setGuideAddress(String guideAddress) {
		this.guideAddress = guideAddress;
	}
	
	public String getGuideNumber() {
		return guideNumber;
	}
	public void setGuideNumber(String guideNumber) {
		this.guideNumber = guideNumber;
	}
	
	public String getGuidePrice() {
		return guidePrice;
	}
	public void setGuidePrice(String guidePrice) {
		this.guidePrice = guidePrice;
	}
	
}
