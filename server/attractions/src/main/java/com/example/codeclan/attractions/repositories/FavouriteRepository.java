package com.example.codeclan.attractions.repositories;

import com.example.codeclan.attractions.models.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavouriteRepository extends JpaRepository <Favourite, Long> {
}
