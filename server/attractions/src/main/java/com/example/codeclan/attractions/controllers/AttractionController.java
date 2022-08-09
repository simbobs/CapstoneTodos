package com.example.codeclan.attractions.controllers;

import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.repositories.AttractionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class AttractionController {

    @Autowired
    AttractionRepository attractionRepository;

    @GetMapping(value = "/attractions")
    public ResponseEntity<List<Attraction>> getAllAttractions(){
        return new ResponseEntity<>(attractionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/attractions/{id}")
    public ResponseEntity getAttraction(@PathVariable Long id){
        return new ResponseEntity(attractionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/attractions")
    public ResponseEntity<Attraction> postAttraction(@RequestBody Attraction attraction){
        attractionRepository.save(attraction);
        return new ResponseEntity<>(attraction, HttpStatus.CREATED);
    }

    @PutMapping(value = "/attractions/{id}")
    public ResponseEntity<Attraction> updateAttraction(@RequestBody Attraction attraction){
        attractionRepository.save(attraction);
        return new ResponseEntity<>(attraction, HttpStatus.OK);
    }

    @DeleteMapping(value = "/attractions/{id}")
    public ResponseEntity<Attraction> deleteAttraction(@PathVariable Long id){
        Attraction found = attractionRepository.getOne(id);
        attractionRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
