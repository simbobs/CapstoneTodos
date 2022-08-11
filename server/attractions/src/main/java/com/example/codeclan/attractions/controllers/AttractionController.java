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
            @RequestParam(name = "isIndoors", required = false) boolean isIndoors,
            @RequestParam(name = "adultEntryPrice", required = false) Double adultEntryPrice,
            @RequestParam(name = "childEntryPrice", required = false) Double childEntryPrice,
            @RequestParam(name = "concessionEntryPrice", required = false) Double concessionEntryPrice,
            @RequestParam(name = "isWheelchairAccessible", required = false) boolean isWheelchairAccessible,
            @RequestParam(name = "freeEntryForCarers", required = false) boolean freeEntryForCarers,
            @RequestParam(name = "isEpilepsyFriendly", required = false) boolean isEpilepsyFriendly,
            @RequestParam(name = "hasQuietRoom", required = false) boolean hasQuietRoom,
            @RequestParam(name = "hasLift", required = false) boolean hasLift,
            @RequestParam(name = "hasParking", required = false) boolean hasParking,
            @RequestParam(name = "hasHeadphones", required = false) boolean hasHeadphones,
            @RequestParam(name = "isLoud", required = false) boolean isLoud,
            @RequestParam(name = "isBusy", required = false) boolean isBusy,
            @RequestParam(name = "hasBSLSigner", required = false) boolean hasBSLSigner,
            @RequestParam(name = "hasMakatonSigner", required = false) boolean hasMakatonSigner,
            @RequestParam(name = "hasDisabledToilets", required = false) boolean hasDisabledToilets){

        if (isWheelchairAccessible == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByIsWheelchairAccessible(true), HttpStatus.OK);
        }
        if (freeEntryForCarers == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByFreeEntryForCarers(true), HttpStatus.OK);
        }
        if (childEntryPrice != null && city != null){
            List<Attraction> foundAttractions = attractionRepository.findAttractionsByChildEntryPriceAndLocationCity(childEntryPrice, city);
            return new ResponseEntity<>(foundAttractions, HttpStatus.OK);
        }
        if (adultEntryPrice != null){
            return new ResponseEntity<>(attractionRepository.findFreeAttractionsByAdultEntryPrice(adultEntryPrice), HttpStatus.OK);
        }
        if (childEntryPrice != null){
            return new ResponseEntity<>(attractionRepository.findFreeAttractionsByChildEntryPrice(childEntryPrice), HttpStatus.OK);
        }
        if (concessionEntryPrice != null){
            return new ResponseEntity<>(attractionRepository.findFreeAttractionsByConcessionEntryPrice(concessionEntryPrice), HttpStatus.OK);
        }
        if (attractionType != null){
            return new ResponseEntity<>(attractionRepository.findAttractionsByAttractionType(attractionType), HttpStatus.OK);
        }
        if (isEpilepsyFriendly == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByIsEpilepsyFriendly(true), HttpStatus.OK);
        }
        if (hasQuietRoom == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasQuietRoom(true), HttpStatus.OK);
        }
        if (hasLift == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasLift(true), HttpStatus.OK);
        }
        if (hasParking == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasParking(true), HttpStatus.OK);
        }
        if (isIndoors == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByIsIndoors(true), HttpStatus.OK);
        }
        if (hasHeadphones == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasHeadphones(true), HttpStatus.OK);
        }
        if (isLoud == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByIsLoud(true), HttpStatus.OK);
        }
        if (isBusy == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByIsBusy(true), HttpStatus.OK);
        }
        if (hasBSLSigner == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasBSLSigner(true), HttpStatus.OK);
        }
        if (hasMakatonSigner == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasMakatonSigner(true), HttpStatus.OK);
        }
        if (hasDisabledToilets == true){
            return new ResponseEntity<>(attractionRepository.findAttractionsByHasDisabledToilets(true), HttpStatus.OK);
        }
        if (city != null) {
            return new ResponseEntity<>(attractionRepository.findAttractionsByLocationCity(city), HttpStatus.OK);
        }

        return new ResponseEntity<>(attractionRepository.findAll(), HttpStatus.OK);
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
