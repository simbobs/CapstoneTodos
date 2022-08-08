package com.example.codeclan.attractions.components;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
import com.example.codeclan.attractions.repositories.AttractionRepository;
import com.example.codeclan.attractions.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test") //Run every time EXCEPT Tests

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AttractionRepository attractionRepository;

    @Autowired
    LocationRepository locationRepository;

    AttractionType attractionType;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Location glasgow = new Location("Glasgow");
        locationRepository.save(glasgow);

        Location edinburgh = new Location("Edinburgh");
        locationRepository.save(edinburgh);

        Location stirling = new Location("Stirling");
        locationRepository.save(stirling);

        Location dundee = new Location("Dundee");
        locationRepository.save(dundee);

        Location aberdeen = new Location("Aberdeen");
        locationRepository.save(aberdeen);

        Attraction vAndA = new Attraction("V&A Dundee",
                "The V&A Dundee is the first design museum in Scotland and the first Victoria and Albert museum outside London.",
                "1 Riverside Esplanade, Dundee DD1 4EZ",
                0.00,
                0.00,
                0.00,
                true,
                "10.00 - 17.00 (7 days)",
                true,
                "https://i.ibb.co/MPPJbKX/dundee.jpg",
                dundee,
                AttractionType.MUSEUM);
        attractionRepository.save(vAndA);

//        Attraction discoveryPoint = new Attraction("Discovery Point",
//                "Follow in the footsteps of Captain Scott and his heroic team by hopping onboard the RRS Discovery, the famous Antarctic expedition ship built in Dundee.",
//                "Discovery Quay, Dundee DD1 4XA",
//                9.95,
//                5.50,
//                7.80,
//                true,
//                "10.00 - 18.00 (11.00 on Sundays)",
//                true,
//                "https://i.ibb.co/pwRStdv/discovery.jpg",
//                dundee,
//                AttractionType.MUSEUM);
//        attractionRepository.save(discoveryPoint);

//        Attraction dundeeScienceCentre = new Attraction("Dundee Science Centre",
//                "Dundee Science Centre is the only UK science centre based on the 5 senses and it's a terrific spot for curious kids of all ages.",
//                "14 Greenmarket, Dundee, DD1 4QB",
//                6.00,
//                4.50,
//                5.00,
//                true,
//                "9.00 - 17.30",
//                true,
//                "https://i.ibb.co/PZYXPfw/dundee-Science-Centre.jpg",
//                dundee,
//                AttractionType.MUSEUM);
//        attractionRepository.save(dundeeScienceCentre);

    }


}
