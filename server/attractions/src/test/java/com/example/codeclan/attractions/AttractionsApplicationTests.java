package com.example.codeclan.attractions;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
import com.example.codeclan.attractions.repositories.AttractionRepository;
import com.example.codeclan.attractions.repositories.LocationRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AttractionsApplicationTests {

	@Autowired
	AttractionRepository attractionRepository;

	@Autowired
	LocationRepository locationRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createLocationAndThenSave(){
		Location dundee = new Location("Dundee");
		locationRepository.save(dundee);
	}

	@Test
	public void createAttractionAndThenSave(){
		Location dundee = new Location("Dundee");
		locationRepository.save(dundee);
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
	}

}
