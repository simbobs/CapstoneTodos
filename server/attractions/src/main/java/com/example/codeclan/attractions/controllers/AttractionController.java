package com.example.codeclan.attractions.controllers;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
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

//    @GetMapping(value = "/attractions")
//    public ResponseEntity<List<Attraction>> getAllAttractions(){
//        return new ResponseEntity<>(attractionRepository.findAll(), HttpStatus.OK);
//    }

    @GetMapping(value = "/attractions/{id}")
    public ResponseEntity getAttraction(@PathVariable Long id){
        return new ResponseEntity(attractionRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/attractions")
    public ResponseEntity <List<Attraction>> findAttractionsByCity(
            @RequestParam(name = "city", required = false) String city,
            @RequestParam(name = "attraction_type", required = false) AttractionType attractionType,
//            @RequestParam(name = "indoors", required = false) boolean indoors,
            @RequestParam(name = "child_entry_price", required = false) Double childEntryPrice){
        if (childEntryPrice != null){
            return new ResponseEntity<>(attractionRepository.findAttractionsByChildEntryPrice(childEntryPrice), HttpStatus.OK);
        }
        if (attractionType != null){
            return new ResponseEntity<>(attractionRepository.findAttractionsByAttractionType(attractionType), HttpStatus.OK);
        } return new ResponseEntity<>(attractionRepository.findAll(), HttpStatus.OK);

//        if(indoors != false){
//            return new ResponseEntity<>(attractionRepository.findAttractionsByIsIndoors(indoors), HttpStatus.OK);
//        }




    }



//    @PostMapping(value = "/attractions")
//    public ResponseEntity<Attraction> postAttraction(@RequestBody Attraction attraction){
//        attractionRepository.save(attraction);
//        return new ResponseEntity<>(attraction, HttpStatus.CREATED);
//    }

//    @PatchMapping(value = "/attractions/{id}")
//    public ResponseEntity<Attraction> updateAttraction(@RequestBody Attraction attraction){
//        attractionRepository.save(attraction);
//        return new ResponseEntity<>(attraction, HttpStatus.OK);
//    }

//    @DeleteMapping(value = "/attractions/{id}")
//    public ResponseEntity<Attraction> deleteAttraction(@PathVariable Long id){
//        Attraction found = attractionRepository.getOne(id);
//        attractionRepository.delete(found);
//        return new ResponseEntity<>(null, HttpStatus.OK);
//    }
}
