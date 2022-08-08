package com.example.codeclan.attractions.models;

import javax.persistence.*;

@Entity
@Table(name = "accessibility")
public class Accessibility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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

    public Accessibility(boolean isWheelchairAccessible, boolean isEpilepsyFriendly, boolean hasQuietRoom, boolean hasLift, boolean hasParking, boolean hasHeadphones, boolean isLoud, boolean isBusy, boolean hasBSLSigner) {
        this.isWheelchairAccessible = isWheelchairAccessible;
        this.isEpilepsyFriendly = isEpilepsyFriendly;
        this.hasQuietRoom = hasQuietRoom;
        this.hasLift = hasLift;
        this.hasParking = hasParking;
        this.hasHeadphones = hasHeadphones;
        this.isLoud = isLoud;
        this.isBusy = isBusy;
        this.hasBSLSigner = hasBSLSigner;
    }

    public Accessibility(boolean hasBSLSigner){

        this.hasBSLSigner = hasBSLSigner;
    }

    public boolean isWheelchairAccessible() {
        return isWheelchairAccessible;
    }

    public void setWheelchairAccessible(boolean wheelchairAccessible) {
        isWheelchairAccessible = wheelchairAccessible;
    }

    public boolean isEpilepsyFriendly() {
        return isEpilepsyFriendly;
    }

    public void setEpilepsyFriendly(boolean epilepsyFriendly) {
        isEpilepsyFriendly = epilepsyFriendly;
    }

    public boolean isHasQuietRoom() {
        return hasQuietRoom;
    }

    public void setHasQuietRoom(boolean hasQuietRoom) {
        this.hasQuietRoom = hasQuietRoom;
    }

    public boolean isHasLift() {
        return hasLift;
    }

    public void setHasLift(boolean hasLift) {
        this.hasLift = hasLift;
    }

    public boolean isHasParking() {
        return hasParking;
    }

    public void setHasParking(boolean hasParking) {
        this.hasParking = hasParking;
    }

    public boolean isHasHeadphones() {
        return hasHeadphones;
    }

    public void setHasHeadphones(boolean hasHeadphones) {
        this.hasHeadphones = hasHeadphones;
    }

    public boolean isLoud() {
        return isLoud;
    }

    public void setLoud(boolean loud) {
        isLoud = loud;
    }

    public boolean isBusy() {
        return isBusy;
    }

    public void setBusy(boolean busy) {
        isBusy = busy;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isHasBSLSigner() {
        return hasBSLSigner;
    }

    public void setHasBSLSigner(boolean hasBSLSigner) {
        this.hasBSLSigner = hasBSLSigner;
    }

    public boolean isHasMakatonSigner() {
        return hasMakatonSigner;
    }

    public void setHasMakatonSigner(boolean hasMakatonSigner) {
        this.hasMakatonSigner = hasMakatonSigner;
    }
}
