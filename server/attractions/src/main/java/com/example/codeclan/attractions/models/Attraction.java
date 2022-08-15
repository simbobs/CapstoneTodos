package com.example.codeclan.attractions.models;

import com.example.codeclan.attractions.enums.AttractionType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "attractions")
public class Attraction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;

    @JsonBackReference(value="attractionComments")
    @OneToMany(mappedBy="attraction", fetch=FetchType.LAZY)
    private List<Comment> comments = new ArrayList<>();

    @Column(name = "description", length = 1024)
    private String description;
    @Column(name = "address")
    private String address;
    @Column(name = "adult_entry_price")
    private double adultEntryPrice;
    @Column(name = "child_entry_price")
    private double childEntryPrice;
    @Column(name = "concession_entry_price")
    private double concessionEntryPrice;
    @Column(name = "free_entry_for_carers")
    private boolean freeEntryForCarers;
    @Column(name = "opening_hours")
    private String openingHours;
    @Column(name = "is_indoors")
    private boolean isIndoors;
    @Column(name = "image")
    private String image;
    @Column(name = "bus_routes")
    private ArrayList<String> busRoutes;
    @Column(name = "is_wheelchair_accessible")
    private boolean isWheelchairAccessible;
    @Column(name = "is_epilepsy_friendly")
    private boolean isEpilepsyFriendly;
    @Column(name = "has_quiet_room")
    private boolean hasQuietRoom;
    @Column(name = "has_lift")
    private boolean hasLift;
    @Column(name = "has_parking")
    private boolean hasParking;
    @Column(name = "has_headphones")
    private boolean hasHeadphones;
    @Column(name = "is_loud")
    private boolean isLoud;
    @Column(name = "is_busy")
    private boolean isBusy;
    @Column(name = "hasBSLSigner")
    private boolean hasBSLSigner;
    @Column(name = "hasMakatonSigner")
    private boolean hasMakatonSigner;
    @Column(name = "hasDisabledToilets")
    private boolean hasDisabledToilets;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = true)
    private Location location;

    @JsonBackReference(value="users-attractions")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "attractions_users",
            joinColumns = {@JoinColumn(name = "attraction_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)}
    )
    private List<User> users;
    @Enumerated(EnumType.STRING)
    @Column(name = "attraction_type")
    private AttractionType attractionType;

    public Attraction(String name, String description, String address, double adultEntryPrice, double childEntryPrice, double concessionEntryPrice, boolean freeEntryForCarers, String openingHours, boolean isIndoors, String image, Location location, AttractionType attractionType) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.adultEntryPrice = adultEntryPrice;
        this.childEntryPrice = childEntryPrice;
        this.concessionEntryPrice = concessionEntryPrice;
        this.freeEntryForCarers = freeEntryForCarers;
        this.openingHours = openingHours;
        this.isIndoors = isIndoors;
        this.image = image;
        this.location = location;
        this.users = new ArrayList<>();
        this.attractionType = attractionType;
        this.busRoutes = new ArrayList<>();
        this.isWheelchairAccessible = false;
        this.isEpilepsyFriendly = false;
        this.hasQuietRoom = false;
        this.hasLift = false;
        this.hasParking = false;
        this.hasHeadphones = false;
        this.isLoud = false;
        this.isBusy = false;
        this.hasBSLSigner = false;
        this.hasMakatonSigner = false;
        this.hasDisabledToilets = false;
    }

    // All accessibility items added above as properties but not passed through constructor. All set to false initially and we will set to true later when creating an instance of Attraction.

    // Getters and setters for each property below.

    public Attraction(){

    }

    public AttractionType getAttractionType() {
        return attractionType;
    }

    public void setAttractionType(AttractionType attractionType) {
        this.attractionType = attractionType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getAdultEntryPrice() {
        return adultEntryPrice;
    }

    public void setAdultEntryPrice(double adultEntryPrice) {
        adultEntryPrice = adultEntryPrice;
    }

    public double getChildEntryPrice() {
        return childEntryPrice;
    }

    public void setChildEntryPrice(double childEntryPrice) {
        childEntryPrice = childEntryPrice;
    }

    public double getConcessionEntryPrice() {
        return concessionEntryPrice;
    }

    public void setConcessionEntryPrice(double concessionEntryPrice) {
        concessionEntryPrice = concessionEntryPrice;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public boolean getFreeEntryForCarers() {
        return freeEntryForCarers;
    }

    public void setFreeEntryForCarers(boolean freeEntryForCarers) {
        this.freeEntryForCarers = freeEntryForCarers;
    }

    public String getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public boolean getIsIndoors() {
        return isIndoors;
    }

    public void setIndoors(boolean indoors) {
        isIndoors = indoors;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ArrayList<String> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(ArrayList<String> busRoutes) {
        this.busRoutes = busRoutes;
    }

    public boolean getIsWheelchairAccessible() {
        return isWheelchairAccessible;
    }

    public void setWheelchairAccessible(boolean wheelchairAccessible) {
        isWheelchairAccessible = wheelchairAccessible;
    }

    public boolean getIsEpilepsyFriendly() {
        return isEpilepsyFriendly;
    }

    public void setEpilepsyFriendly(boolean epilepsyFriendly) {
        isEpilepsyFriendly = epilepsyFriendly;
    }

    public boolean getHasQuietRoom() {
        return hasQuietRoom;
    }

    public void setHasQuietRoom(boolean hasQuietRoom) {
        this.hasQuietRoom = hasQuietRoom;
    }

    public boolean getHasLift() {
        return hasLift;
    }

    public void setHasLift(boolean hasLift) {
        this.hasLift = hasLift;
    }

    public boolean getHasParking() {
        return hasParking;
    }

    public void setHasParking(boolean hasParking) {
        this.hasParking = hasParking;
    }

    public boolean getHasHeadphones() {
        return hasHeadphones;
    }

    public void setHasHeadphones(boolean hasHeadphones) {
        this.hasHeadphones = hasHeadphones;
    }

    public boolean getIsLoud() {
        return isLoud;
    }

    public void setLoud(boolean loud) {
        isLoud = loud;
    }

    public boolean getIsBusy() {
        return isBusy;
    }

    public void setBusy(boolean busy) {
        isBusy = busy;
    }

    public boolean getHasBSLSigner() {
        return hasBSLSigner;
    }

    public void setHasBSLSigner(boolean hasBSLSigner) {
        this.hasBSLSigner = hasBSLSigner;
    }

    public boolean getHasMakatonSigner() {
        return hasMakatonSigner;
    }

    public void setHasMakatonSigner(boolean hasMakatonSigner) {
        this.hasMakatonSigner = hasMakatonSigner;
    }


    public boolean getHasDisabledToilets() {
        return hasDisabledToilets;
    }

    public void setHasDisabledToilets(boolean hasDisabledToilets) {
        this.hasDisabledToilets = hasDisabledToilets;
    }

    public void addBusRoute(String bus){
        this.busRoutes.add(bus);
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUsers(User user){
        this.users.add(user);
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment){this.comments.add(comment);}
}
