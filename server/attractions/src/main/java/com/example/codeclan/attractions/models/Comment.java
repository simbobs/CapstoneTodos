package com.example.codeclan.attractions.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "name")
    private String name;
    @JsonIgnoreProperties({"comments"})
    @ManyToOne
    @JoinColumn(name="attraction_id", nullable = false)
    private Attraction attraction;
    @Column(name = "rating")
    private double rating;
    @Column(name = "review")
    private String review;


    public Comment(String name, Attraction attraction, double rating, String review) {
        this.name = name;
        this.attraction = attraction;
        this.rating = rating;
        this.review = review;
    }

    public Comment(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Attraction getAttraction() {
        return attraction;
    }

    public void setAttraction(Attraction attraction) {
        this.attraction = attraction;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}
