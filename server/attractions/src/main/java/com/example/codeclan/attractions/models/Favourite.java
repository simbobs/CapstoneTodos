package com.example.codeclan.attractions.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "favourites")
public class Favourite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "favourites_list")
    private List<Attraction> favourites;

    public Favourite(){
        this.favourites = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Attraction> getFavourites() {
        return favourites;
    }

    public void setFavourites(ArrayList<Attraction> favourites) {
        this.favourites = favourites;
    }

    public void addToFavourites(Attraction attraction){
        this.favourites.add(attraction);
    }
}
