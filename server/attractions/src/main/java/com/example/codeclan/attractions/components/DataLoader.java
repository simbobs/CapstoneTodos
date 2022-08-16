package com.example.codeclan.attractions.components;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Comment;
import com.example.codeclan.attractions.models.Location;
import com.example.codeclan.attractions.models.User;
import com.example.codeclan.attractions.repositories.AttractionRepository;
import com.example.codeclan.attractions.repositories.CommentRepository;
import com.example.codeclan.attractions.repositories.LocationRepository;
import com.example.codeclan.attractions.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Profile("!test") //Run every time EXCEPT Tests

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AttractionRepository attractionRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CommentRepository commentRepository;

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
                "10AM - 5PM (7 days)",
                true,
                "https://i.ibb.co/MPPJbKX/dundee.jpg",
                56.45739364245968, -2.966974304745474,
                dundee,
                AttractionType.MUSEUM);
        attractionRepository.save(vAndA);
        vAndA.addBusRoute("5A");
        vAndA.addBusRoute("73A");
        vAndA.addBusRoute("73");
        vAndA.setWheelchairAccessible(true);
        vAndA.setEpilepsyFriendly(true);
        vAndA.setHasQuietRoom(true);
        vAndA.setHasLift(true);
        vAndA.setHasParking(true);
        vAndA.setHasHeadphones(true);
        attractionRepository.save(vAndA);


        Attraction discoveryPoint = new Attraction("Discovery Point",
                "Follow in the footsteps of Captain Scott and his heroic team by hopping onboard the RRS Discovery, the famous Antarctic expedition ship built in Dundee.",
                "Discovery Quay, Dundee DD1 4XA",
                9.95,
                5.50,
                7.80,
                true,
                "10AM - 6PM (11AM on Sundays)",
                true,
                "https://i.ibb.co/pwRStdv/discovery.jpg",
                56.45704048630755, -2.9679251121868964,
                dundee,
                AttractionType.MUSEUM);
        attractionRepository.save(discoveryPoint);
        discoveryPoint.addBusRoute("5A");
        discoveryPoint.addBusRoute("16B");
        discoveryPoint.addBusRoute("73");
        discoveryPoint.addBusRoute("73A");
        discoveryPoint.setEpilepsyFriendly(true);
        discoveryPoint.setHasParking(true);
        discoveryPoint.setHasHeadphones(true);
        discoveryPoint.setHasDisabledToilets(true);
        attractionRepository.save(discoveryPoint);

        Attraction dundeeScienceCentre = new Attraction("Dundee Science Centre",
                "Dundee Science Centre is the only UK science centre based on the 5 senses and it's a terrific spot for curious kids of all ages.",
                "14 Greenmarket, Dundee, DD1 4QB",
                6.00,
                4.50,
                5.00,
                true,
                "9AM - 5:30PM",
                true,
                "https://i.ibb.co/PZYXPfw/dundee-Science-Centre.jpg",
                56.456540592560245, -2.974747443841276,
                dundee,
                AttractionType.MUSEUM);
        attractionRepository.save(dundeeScienceCentre);
        dundeeScienceCentre.addBusRoute("1");
        dundeeScienceCentre.addBusRoute("18");
        dundeeScienceCentre.setWheelchairAccessible(true);
        dundeeScienceCentre.setEpilepsyFriendly(true);
        dundeeScienceCentre.setHasLift(true);
        dundeeScienceCentre.setHasParking(true);
        dundeeScienceCentre.setHasHeadphones(true);
        dundeeScienceCentre.setBusy(true);
        dundeeScienceCentre.setHasDisabledToilets(true);
        attractionRepository.save(dundeeScienceCentre);

        Attraction aberdeenAdventureParks = new Attraction("Jump In Adventure Parks",
                "Trampoline, Soft Play and Climbing Park",
                "Craigshaw Rd, West Tullos Industrial Estate, Aberdeen AB12 3AP",
                11.95,
                11.95,
                11.95,
                true,
                "10AM - 6:30PM",
                true,
                "https://i.ibb.co/7jFXDpJ/adventure-park.jpg",
                57.124320247850086, -2.0978442149813112,
                aberdeen,
                AttractionType.ENTERTAINMENT);
        attractionRepository.save(aberdeenAdventureParks);
        aberdeenAdventureParks.addBusRoute("3");
        aberdeenAdventureParks.setEpilepsyFriendly(true);
        aberdeenAdventureParks.setHasQuietRoom(true);
        aberdeenAdventureParks.setHasParking(true);
        aberdeenAdventureParks.setLoud(true);
        aberdeenAdventureParks.setBusy(true);
        aberdeenAdventureParks.setHasDisabledToilets(true);
        attractionRepository.save(aberdeenAdventureParks);

        Attraction aberdeenScienceCentre = new Attraction("Aberdeen Science Centre",
                "Aberdeen Science Centre is a science museum in Aberdeen, Scotland. It displays exhibits and performs fun, educational and interactive shows and workshops which are aimed to be inclusive for all audiences.",
                "179 Constitution St, Aberdeen AB24 5TU",
                11.00,
                07.00,
                08.50,
                true,
                "10AM - 4:30PM",
                true,
                "https://i.ibb.co/DRKythF/science-centre.jpg",
                57.15329944314646, -2.0845910726511505,
                aberdeen,
                AttractionType.MUSEUM);
        attractionRepository.save(aberdeenScienceCentre);
        aberdeenScienceCentre.addBusRoute("13");
        aberdeenScienceCentre.setWheelchairAccessible(true);
        aberdeenScienceCentre.setEpilepsyFriendly(true);
        aberdeenScienceCentre.setHasQuietRoom(true);
        aberdeenScienceCentre.setHasLift(true);
        aberdeenScienceCentre.setHasParking(true);
        aberdeenScienceCentre.setHasHeadphones(true);
        aberdeenScienceCentre.setBusy(true);
        aberdeenScienceCentre.setHasDisabledToilets(true);
        attractionRepository.save(aberdeenScienceCentre);

        Attraction aberdeenArtGallery = new Attraction("Aberdeen Art Gallery",
                "Aberdeen Art Gallery is the main visual arts exhibition space in the city of Aberdeen, Scotland. It was founded in 1884 in a building designed by Alexander Marshall Mackenzie",
                "Art Gallery, Schoolhill, Aberdeen AB10 1FQ",
                00.00,
                00.00,
                00.00,
                true,
                "10AM - 5PM",
                true,
                "https://i.ibb.co/F00zqnV/art-gallery.jpg",
                57.14815120234907, -2.102551801486792,
                aberdeen,
                AttractionType.MUSEUM);
        attractionRepository.save(aberdeenArtGallery);
        aberdeenArtGallery.addBusRoute("1");
        aberdeenArtGallery.addBusRoute("2");
        aberdeenArtGallery.addBusRoute("17");
        aberdeenArtGallery.addBusRoute("23");
        aberdeenArtGallery.setWheelchairAccessible(true);
        aberdeenArtGallery.setEpilepsyFriendly(true);
        aberdeenArtGallery.setHasQuietRoom(true);
        aberdeenArtGallery.setHasLift(true);
        aberdeenArtGallery.setHasParking(true);
        aberdeenArtGallery.setHasHeadphones(true);
        aberdeenArtGallery.setHasDisabledToilets(true);
        attractionRepository.save(aberdeenArtGallery);

        Attraction glasgowScienceCentre = new Attraction("Glasgow Science Centre",
                "The gleaming titanium crescent overlooking the Clyde has three floors packed with hundreds of interactive exhibits that will fascinate you. The Science Mall also plays host to our interactive workshops where you can make wind powered cars, or try your hand as an electronic engineer with our super user-friendly littleBits kits. You can also visit the Science Show Theatre, the Lab and the state-of-the-art Planetarium! Our science communicators are there to help you to explore and make your experience memorable.",
                "50 Pacific Quay, Glasgow, G51 1EA, United Kingdom",
                12.50,
                10.50,
                10.50,
                true,
                "10AM - 5PM",
                true,
                "https://i.ibb.co/Y7VjXbc/glasgow-science-centre.jpg",
                55.85868047323723, -4.293760086192168,
                glasgow,
                AttractionType.MUSEUM);
        attractionRepository.save(glasgowScienceCentre);
        glasgowScienceCentre.addBusRoute("X19");
        glasgowScienceCentre.addBusRoute("90");
        glasgowScienceCentre.addBusRoute("23");
        glasgowScienceCentre.addBusRoute("26");
        glasgowScienceCentre.setWheelchairAccessible(true);
        glasgowScienceCentre.setHasQuietRoom(true);
        glasgowScienceCentre.setHasLift(true);
        glasgowScienceCentre.setHasParking(true);
        glasgowScienceCentre.setHasHeadphones(true);
        glasgowScienceCentre.setBusy(true);
        glasgowScienceCentre.setHasDisabledToilets(true);
        attractionRepository.save(glasgowScienceCentre);


        Attraction tollcrossFarm = new Attraction("Glasgow Tollcross Farm",
                "Tollcross Children's Farm is an outstanding facility which will appeal to young and old alike. Regulars in the farm are Shire Horses, Shetland Ponies, rabbits, sheep, Highland Cattle and much more!",
                "The Courtyard 254b Wellshot Road, Glasgow East End G32 7AX",
                00.00,
                00.00,
                00.00,
                true,
                "10AM - 3:30PM",
                false,
                "https://i.ibb.co/L88b0z4/glasgow-tollcross-farm.jpg",
                55.84767801991581, -4.175707343863459,
                glasgow,
                AttractionType.ZOO);
        attractionRepository.save(tollcrossFarm);
        tollcrossFarm.addBusRoute("2");
        tollcrossFarm.addBusRoute("240");
        tollcrossFarm.setWheelchairAccessible(true);
        tollcrossFarm.setEpilepsyFriendly(true);
        tollcrossFarm.setHasParking(true);
        attractionRepository.save(tollcrossFarm);

        Attraction queensPark = new Attraction("Glasgow Queens Park",
                "Queen's Park is a beautiful Paxton creation which offers something for everyone, from manicured lawns and bedding areas for the gardening enthusiast to peaceful naturalised walks rich in wildlife. The park is extremely well used and is busy all year round. A great range of sport and recreational facilities can be found here along with a boating pond and smaller nature pond.",
                "Langside Rd, Glasgow G42 9QL",
                00.00,
                00.00,
                00.00,
                true,
                "OPEN 24HRS",
                false,
                "https://i.ibb.co/8m4VKP3/glasgow-queens-park.jpg",
                55.83183436736665, -4.2704507707296715,
                glasgow,
                AttractionType.PARK);
        attractionRepository.save(queensPark);
        queensPark.addBusRoute("38");
        queensPark.addBusRoute("57");
        queensPark.addBusRoute("4");
        queensPark.setWheelchairAccessible(true);
        queensPark.setEpilepsyFriendly(true);
        queensPark.setHasParking(true);
        queensPark.setBusy(true);
        attractionRepository.save(queensPark);

        Attraction edinburghZoo = new Attraction("Edinburgh Zoo",
                "The wildest visitor attraction in Scotland, Edinburgh Zoo is home to over 1,000 rare and beautiful animals from around the world and home to the UK's only giant pandas and koalas.",
                "134 Corstorphine Rd, Corstorphine, Edinburgh EH12 6TS",
                21.95,
                00.00,
                18.10,
                true,
                "10AM - 6PM",
                false,
                "https://i.ibb.co/Qpk12Ct/edinbrugh-zoo.jpg",
                55.94255198615939, -3.26860970852669,
                edinburgh,
                AttractionType.ZOO);

        attractionRepository.save(edinburghZoo);
        edinburghZoo.setWheelchairAccessible(true);
        edinburghZoo.setHasParking(true);
        edinburghZoo.setLoud(true);
        edinburghZoo.setBusy(true);
        edinburghZoo.addBusRoute("12");
        edinburghZoo.addBusRoute("26");
        edinburghZoo.addBusRoute("31");
        edinburghZoo.addBusRoute("900");
        edinburghZoo.addBusRoute("904");
        edinburghZoo.addBusRoute("909");
        edinburghZoo.setHasDisabledToilets(true);
        attractionRepository.save(edinburghZoo);


        Attraction nationalMuseumofScotland = new Attraction("National Museum of Scotland",
                "Explore the diversity of the natural world, world cultures, art and design, science and technology and Scottish history, all under one roof at the National Museum of Scotland.",
                "Chambers Street, Edinburgh, EH1 1JF",
                00.00,
                00.00,
                00.00,
                true,
                "10AM - 5PM",
                true,
                "https://i.ibb.co/2vF6w50/edinbrugh-national-museum.jpg",
                55.947119634701586, -3.190577330366159,
                edinburgh,
                AttractionType.MUSEUM);
        attractionRepository.save(nationalMuseumofScotland);
        nationalMuseumofScotland.addBusRoute("8");
        nationalMuseumofScotland.addBusRoute("35");
        nationalMuseumofScotland.setWheelchairAccessible(true);
        nationalMuseumofScotland.setHasQuietRoom(true);
        nationalMuseumofScotland.setHasLift(true);
        nationalMuseumofScotland.setHasHeadphones(true);
        nationalMuseumofScotland.setBusy(true);
        nationalMuseumofScotland.setHasBSLSigner(true);
        nationalMuseumofScotland.setHasDisabledToilets(true);
        attractionRepository.save(nationalMuseumofScotland);

        Attraction dynamicEarth = new Attraction("Dynamic Earth",
                "Dynamic Earth is an interactive science centre and visitor attraction which enables visitors to explore Earth’s history. Visual displays, lights, sounds, movement and temperature changes create a vibrant experience.",
                "112-116 Holyrood Road, Edinburgh, EH8 8AS",
                17.50,
                10.95,
                15.20,
                true,
                "10AM - 5PM",
                true,
                "https://i.ibb.co/KLWwmj9/dynamic-earth-edinbrugh.jpg",
                55.95086328018255, -3.1745965015306115,
                edinburgh,
                AttractionType.VISITOR_CENTRE);
        attractionRepository.save(dynamicEarth);
        dynamicEarth.addBusRoute("26");
        dynamicEarth.addBusRoute("35");
        dynamicEarth.addBusRoute("43");
        dynamicEarth.addBusRoute("X18");
        dynamicEarth.addBusRoute("X22");
        dynamicEarth.addBusRoute("X25");
        dynamicEarth.addBusRoute("X38");
        dynamicEarth.addBusRoute("X62");
        dynamicEarth.setWheelchairAccessible(true);
        dynamicEarth.setHasLift(true);
        dynamicEarth.setHasParking(true);
        dynamicEarth.setHasHeadphones(true);
        dynamicEarth.setLoud(true);
        dynamicEarth.setBusy(true);
        dynamicEarth.setHasDisabledToilets(true);
        attractionRepository.save(dynamicEarth);

        Attraction thePeak = new Attraction("The Peak Stirling",
                "Swimming pool, climbing wall, ice rink, fitness and dance studio, gym and outdoor sports pitches. Disabled Parking, Cafe,Disabled toilets, Lift, Sports groups for people with additional needs. Disabled access for all facilities and carers join for free.",
                "Stirling Sports Village, Forthside Way, Stirling FK8 1QZ",
                06.00,
                03.00,
                4.50,
                true,
                "6AM - 9PM",
                true,
                "https://i.ibb.co/4t01ZKs/the-peak-stirling.jpg",
                56.11876576903853, -3.914445999676356,
                stirling,
                AttractionType.ENTERTAINMENT);
        attractionRepository.save(thePeak);
        thePeak.addBusRoute("F16");
        thePeak.setWheelchairAccessible(true);
        thePeak.setHasLift(true);
        thePeak.setHasParking(true);
        thePeak.setHasHeadphones(true);
        thePeak.setLoud(true);
        thePeak.setBusy(true);
        thePeak.setHasMakatonSigner(true);
        thePeak.setHasDisabledToilets(true);
        attractionRepository.save(thePeak);

        Attraction kingsPark = new Attraction("Kings Park",
                "Scenic park with walking paths, an open field, tennis courts, a skate park, plus playgrounds and a cafe.",
                "25 Albert Pl, Stirling FK8 2RF",
                00.00,
                00.00,
                00.00,
                true,
                "OPEN 24HRS",
                false,
                "https://i.ibb.co/YdVG58q/ba5a0abc694ea8d8736489f8dfe4aac5.jpg",
                56.11420890926524, -3.94827604112986,
                stirling,
                AttractionType.PARK);
        attractionRepository.save(kingsPark);
        kingsPark.addBusRoute("P2");
        kingsPark.setWheelchairAccessible(true);
        kingsPark.setHasParking(true);
        kingsPark.setLoud(true);
        kingsPark.setBusy(true);
        attractionRepository.save(kingsPark);

        Attraction kelpies = new Attraction("Kelpies",
                "The Kelpies are 30-metre-high horse-head sculptures depicting kelpies, located between Falkirk and Grangemouth, standing next to a new extension to the Forth and Clyde Canal, and near River Carron, in The Helix, a new parkland project built to connect 16 communities in the Falkirk Council Area, Scotland.",
                "Visitor Centre The Helix, Falkirk FK2 7ZT",
                00.00,
                00.00,
                00.00,
                true,
                "9:30PM-5PM",
                false,
                "https://i.ibb.co/BN5ny0w/kelpies.jpg",
                56.01937789991856, -3.7556842015280893,
                stirling,
                AttractionType.PARK);
        attractionRepository.save(kelpies);
        kelpies.addBusRoute("2");
        kelpies.addBusRoute("F16");
        kelpies.setWheelchairAccessible(true);
        kelpies.setHasParking(true);
        kelpies.setHasQuietRoom(true);
        kelpies.setBusy(true);
        kelpies.setLoud(true);
        kelpies.setHasDisabledToilets(true);
        attractionRepository.save(kelpies);

        User jonny = new User("Jonny","ABC123");
        userRepository.save(jonny);

        Comment comment = new Comment("Cammy", kelpies, 4.5, "I don't know what all the fuss is about.");
        commentRepository.save(comment);
    }
}
