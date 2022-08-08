package com.example.codeclan.attractions.controllers;

import com.example.codeclan.attractions.models.Favourite;
import com.example.codeclan.attractions.repositories.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FavouriteController {

    @Autowired
    FavouriteRepository favouriteRepository;

    @GetMapping(value = "/favourites")
    public ResponseEntity<List<Favourite>> getAllFavourites(){
        return new ResponseEntity<>(favouriteRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/favourites/{id}")
    public ResponseEntity getFavourite(@PathVariable Long id){
        return new ResponseEntity<>(favouriteRepository.findById(id), HttpStatus.OK);
    }

//    @PostMapping(value = "/favourites")
//    public ResponseEntity<Favourite> postFavourite(@RequestBody Favourite favourite){
//        favouriteRepository.save(favourite);
//        return new ResponseEntity<>(favourite, HttpStatus.CREATED);
//    }

//    @DeleteMapping(value = "/favourites/{id}")
//    public ResponseEntity<Favourite> deleteLocation(@PathVariable Long id){
//        Favourite found = favouriteRepository.getOne(id);
//        favouriteRepository.delete(found);
//        return new ResponseEntity<>(null, HttpStatus.OK);
//    }
}
