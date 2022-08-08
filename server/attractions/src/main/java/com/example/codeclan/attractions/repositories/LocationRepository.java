package com.example.codeclan.attractions.repositories;

import com.example.codeclan.attractions.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository <Location, Long> {
}
