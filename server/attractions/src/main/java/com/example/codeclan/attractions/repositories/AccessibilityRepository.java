package com.example.codeclan.attractions.repositories;

import com.example.codeclan.attractions.models.Accessibility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessibilityRepository extends JpaRepository <Accessibility, Long> {
}
