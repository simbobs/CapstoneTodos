package com.example.codeclan.attractions.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
//    @JsonIgnoreProperties({"user"})
//    @OneToMany(mappedBy = "user")
//    private List<Attraction> favourites;
    //    @JsonIgnoreProperties({"comments"})
//    @OneToMany(mappedBy = "comments")
//    private List<Comment> comments;
    @Column(name = "password")
    private String password;

    @JsonIgnoreProperties({"users"})
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "attractions_users",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "attraction_id", nullable = false, updatable = false)}
    )
    private List<Attraction> attractions;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
        this.attractions = new ArrayList<>();
    }

    public User() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Attraction> getAttractions() {
        return attractions;
    }

    public void setAttractions(List<Attraction> attractions) {
        this.attractions = attractions;
    }

    public void addAttraction(Attraction attraction) {
        this.attractions.add(attraction);
    }
}
