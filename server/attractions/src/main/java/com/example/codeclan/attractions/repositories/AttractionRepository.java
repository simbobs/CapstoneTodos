package com.example.codeclan.attractions.repositories;

import com.example.codeclan.attractions.models.Attraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttractionRepository extends JpaRepository <Attraction, Long> {

}
