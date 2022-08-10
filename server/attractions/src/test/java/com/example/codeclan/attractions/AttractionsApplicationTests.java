package com.example.codeclan.attractions;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
import com.example.codeclan.attractions.repositories.AttractionRepository;
import com.example.codeclan.attractions.repositories.LocationRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
		Location inverness = new Location("Inverness");
		locationRepository.save(inverness);
		Attraction nessieLand = new Attraction("Nessieland",
				"Nessieland is an unmissable experience…Come and find out for yourself… Disabled access. Dogs welcome. Facilities. Accessible Friendly.",
				"Loch Ness Lodge Hotel, Drumnadrochit IV63 6TU",
				7.00,
				4.00,
				6.00,
				true,
				"10.00 - 17.00 (7 days)",
				true,
				"https://i.ibb.co/MPPJbKX/dundee.jpg",
				inverness,
				AttractionType.ENTERTAINMENT);
		attractionRepository.save(nessieLand);
	}

	@Test
	public void canFindAttractionsByCity(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByLocationCity("Edinburgh");
		assertEquals("Edinburgh", foundAttractions.get(0).getLocation().getCity());
		assertEquals(3, foundAttractions.size());
	}

	@Test
	public void canFindAttractionByType(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByAttractionType(AttractionType.ZOO);
		assertEquals(AttractionType.ZOO, foundAttractions.get(0).getAttractionType());
		assertEquals(2, foundAttractions.size());
	}

//	@Test
//	public void canFindByEpilepsyFriendly(){
//		List<Attraction> foundAttractions = attractionRepository.findAttractionsByWheelchairAccessible(true);
//		assertEquals(9, foundAttractions.size());
//	}

//	@Test
//	public void canFindByIsIndoors(){
//		List<Attraction> foundAttractions = attractionRepository.findAttractionsByIsIndoors(true);
//		assertEquals(10, foundAttractions.size());
//	}

	@Test
	public void canFindByFreeEntryForChildren(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByChildEntryPrice(0.00);
		assertEquals(0.00, foundAttractions.get(0).getChildEntryPrice());
		assertEquals(6, foundAttractions.size());
	}



}
