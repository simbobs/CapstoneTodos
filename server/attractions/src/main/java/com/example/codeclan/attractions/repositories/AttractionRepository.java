package com.example.codeclan.attractions.repositories;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.w3c.dom.Attr;

import java.util.List;

@Repository
public interface AttractionRepository extends JpaRepository <Attraction, Long> {


    List<Attraction> findAttractionsByAttractionType(AttractionType attractionType);
    List<Attraction> findAttractionsByIsWheelchairAccessible(boolean isWheelchairAccessible);
    List<Attraction> findAttractionsByIsIndoors(boolean isIndoors);
    List<Attraction> findFreeAttractionsByAdultEntryPrice(Double adultEntryPrice);
    List<Attraction> findFreeAttractionsByChildEntryPrice(Double childEntryPrice);
    List<Attraction> findFreeAttractionsByConcessionEntryPrice(Double concessionEntryPrice);
    List<Attraction> findAttractionsByFreeEntryForCarers(boolean freeEntryForCarers);
    List<Attraction> findAttractionsByIsEpilepsyFriendly(boolean isEpilepsyFriendly);
    List<Attraction> findAttractionsByHasQuietRoom(boolean hasQuietRoom);
    List<Attraction> findAttractionsByHasLift(boolean hasLift);
    List<Attraction> findAttractionsByHasParking(boolean hasParking);
    List<Attraction> findAttractionsByHasHeadphones(boolean hasHeadphones);
    List<Attraction> findAttractionsByIsLoud(boolean isLoud);
    List<Attraction> findAttractionsByIsBusy(boolean isBusy);
    List<Attraction> findAttractionsByHasBSLSigner(boolean hasBSLSigner);
    List<Attraction> findAttractionsByHasMakatonSigner(boolean hasMakatonSigner);
    List<Attraction> findAttractionsByHasDisabledToilets(boolean hasDisabledToilets);
    List<Attraction> findAttractionsByChildEntryPriceAndLocationCity(Double childEntryPrice, String city);
    List<Attraction> findAttractionsByLocationCity(String city);

}
