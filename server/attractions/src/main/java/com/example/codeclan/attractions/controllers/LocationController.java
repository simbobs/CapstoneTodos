package com.example.codeclan.attractions.controllers;

import com.example.codeclan.attractions.models.Location;
import com.example.codeclan.attractions.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "/locations")
    public ResponseEntity<List<Location>> getAllLocations(){
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/locations/{id}")
    public ResponseEntity getLocation(@PathVariable Long id){
        return new ResponseEntity<>(locationRepository.findById(id), HttpStatus.OK);
    }

//    @PostMapping(value = "/locations")
//    public ResponseEntity<Location> postLocation(@RequestBody Location location){
//        locationRepository.save(location);
//        return new ResponseEntity<>(location, HttpStatus.CREATED);
//    }

//    @PatchMapping(value = "/locations/{id}")
//    public ResponseEntity<Location> updateLocation(@RequestBody Location location){
//        locationRepository.save(location);
//        return new ResponseEntity<>(location, HttpStatus.OK);
//    }

//    @DeleteMapping(value = "/locations/{id}")
//    public ResponseEntity<Location> deleteLocation(@PathVariable Long id){
//        Location found = locationRepository.getOne(id);
//        locationRepository.delete(found);
//        return new ResponseEntity<>(null, HttpStatus.OK);
//    }
}
