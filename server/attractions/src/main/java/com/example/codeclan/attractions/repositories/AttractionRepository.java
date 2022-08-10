package com.example.codeclan.attractions.repositories;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttractionRepository extends JpaRepository <Attraction, Long> {

    List<Attraction> findAttractionsByLocationCity(String city);
    List<Attraction> findAttractionsByAttractionType(AttractionType attractionType);
//    List<Attraction> findAttractionsByWheelchairAccessible(boolean isWheelchairAccessible);
//    List<Attraction> findAttractionsByIsIndoors(boolean isIndoors);
    List<Attraction> findAttractionsByChildEntryPrice(Double childEntryPrice);

}
