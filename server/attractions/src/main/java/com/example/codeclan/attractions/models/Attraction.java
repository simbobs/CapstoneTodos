package com.example.codeclan.attractions.models;

import com.example.codeclan.attractions.enums.AttractionType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "attractions")
public class Attraction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "address")
    private String address;
    @Column(name = "adult_entry_price")
    private double AdultEntryPrice;
    @Column(name = "child_entry_price")
    private double ChildEntryPrice;
    @Column(name = "concession_entry_price")
    private double ConcessionEntryPrice;
    @Column(name = "free_entry_for_carers")
    private boolean freeEntryForCarers;
    @Column(name = "opening_hours")
    private String openingHours;
    @Column(name = "is_indoors")
    private boolean isIndoors;
    @Column(name = "image")
    private String image;
    private ArrayList<String> busRoutes;
    // does this have a column and is it passed into the constructor??
    // many accessibilities to one attraction?? @ManyToOne or have I got this the wrong way around?
    private Accessibility accessibility;

    @JsonIgnoreProperties({"locations"})
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;
    private AttractionType attractionType;

    public Attraction(String name, String description, String address, double AdultEntryPrice, double ChildEntryPrice, double ConcessionEntryPrice, boolean freeEntryForCarers, String openingHours, boolean isIndoors, String image, Location location, AttractionType attractionType) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.AdultEntryPrice = AdultEntryPrice;
        this.ChildEntryPrice = ChildEntryPrice;
        this.ConcessionEntryPrice = ConcessionEntryPrice;
        this.freeEntryForCarers = freeEntryForCarers;
        this.openingHours = openingHours;
        this.isIndoors = isIndoors;
        this.image = image;
        this.attractionType = attractionType;
    }

    public Attraction(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getAdultEntryPrice() {
        return AdultEntryPrice;
    }

    public void setAdultEntryPrice(double adultEntryPrice) {
        AdultEntryPrice = adultEntryPrice;
    }

    public double getChildEntryPrice() {
        return ChildEntryPrice;
    }

    public void setChildEntryPrice(double childEntryPrice) {
        ChildEntryPrice = childEntryPrice;
    }

    public double getConcessionEntryPrice() {
        return ConcessionEntryPrice;
    }

    public void setConcessionEntryPrice(double concessionEntryPrice) {
        ConcessionEntryPrice = concessionEntryPrice;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public boolean isFreeEntryForCarers() {
        return freeEntryForCarers;
    }

    public void setFreeEntryForCarers(boolean freeEntryForCarers) {
        this.freeEntryForCarers = freeEntryForCarers;
    }

    public String getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public boolean isIndoors() {
        return isIndoors;
    }

    public void setIndoors(boolean indoors) {
        isIndoors = indoors;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ArrayList<String> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(ArrayList<String> busRoutes) {
        this.busRoutes = busRoutes;
    }
}
