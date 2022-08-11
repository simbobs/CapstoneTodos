package com.example.codeclan.attractions;

import com.example.codeclan.attractions.enums.AttractionType;
import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Location;
import com.example.codeclan.attractions.models.User;
import com.example.codeclan.attractions.repositories.AttractionRepository;
import com.example.codeclan.attractions.repositories.LocationRepository;
import com.example.codeclan.attractions.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.w3c.dom.Attr;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AttractionsApplicationTests {

	@Autowired
	AttractionRepository attractionRepository;

	@Autowired
	LocationRepository locationRepository;

	@Autowired
	UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createUserAndAddAttractionAndSave(){
		User cammy = new User("Cammy","123ABC");
		userRepository.save(cammy);
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
				false,
				"https://i.ibb.co/MPPJbKX/dundee.jpg",
				inverness,
				AttractionType.ENTERTAINMENT);
		attractionRepository.save(nessieLand);
		cammy.addAttraction(nessieLand);
		userRepository.save(cammy);
		assertEquals(1, cammy.getAttractions().size());
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
				false,
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

	@Test
	public void canFindByIsIndoors(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByIsIndoors(true);
		assertEquals(true, foundAttractions.get(0).getIsIndoors());
		assertEquals(10, foundAttractions.size());
	}

	@Test
	public void canFindByFreeEntryForAdults(){
		List<Attraction> foundAttractions = attractionRepository.findFreeAttractionsByAdultEntryPrice(0.00);
		assertEquals(0.00, foundAttractions.get(0).getAdultEntryPrice());
		assertEquals(7, foundAttractions.size());
	}

	@Test
	public void canFindByFreeEntryForChildren(){
		List<Attraction> foundAttractions = attractionRepository.findFreeAttractionsByChildEntryPrice(0.00);
		assertEquals(0.00, foundAttractions.get(0).getChildEntryPrice());
		assertEquals(8, foundAttractions.size());
	}

	@Test
	public void canFindByFreeConcessionEntryPrice(){
		List<Attraction> foundAttractions = attractionRepository.findFreeAttractionsByConcessionEntryPrice(0.00);
		assertEquals(0.00, foundAttractions.get(0).getConcessionEntryPrice());
		assertEquals(7, foundAttractions.size());
	}

	@Test
	public void canFindByIsWheelchairAccessible(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByIsWheelchairAccessible(true);
		assertEquals(true, foundAttractions.get(0).getIsWheelchairAccessible());
		assertEquals(13, foundAttractions.size());
	}

	@Test
	public void canFindByFreeEntryForCarers(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByFreeEntryForCarers(true);
		assertEquals(true, foundAttractions.get(0).getFreeEntryForCarers());
		assertEquals(15, foundAttractions.size());
	}

	@Test
	public void canFindByIsEpilepsyFriendly(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByIsEpilepsyFriendly(true);
		assertEquals(true, foundAttractions.get(0).getIsEpilepsyFriendly());
		assertEquals(8, foundAttractions.size());
	}

	@Test
	public void canFindByHasQuietRoom(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasQuietRoom(true);
		assertEquals(true, foundAttractions.get(0).getHasQuietRoom());
		assertEquals(7, foundAttractions.size());
	}

	@Test
	public void canFindByHasLift(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasLift(true);
		assertEquals(true, foundAttractions.get(0).getHasLift());
		assertEquals(8, foundAttractions.size());
	}

	@Test
	public void canFindByHasParking(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasParking(true);
		assertEquals(true, foundAttractions.get(0).getHasParking());
		assertEquals(14, foundAttractions.size());
	}

	@Test
	public void canFindByHasHeadphones(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasHeadphones(true);
		assertEquals(true, foundAttractions.get(0).getHasHeadphones());
		assertEquals(9, foundAttractions.size());
	}

	@Test
	public void canFindByIsLoud(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByIsLoud(true);
		assertEquals(true, foundAttractions.get(0).getIsLoud());
		assertEquals(6, foundAttractions.size());
	}

	@Test
	public void canFindByIsBusy(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByIsBusy(true);
		assertEquals(true, foundAttractions.get(0).getIsBusy());
		assertEquals(11, foundAttractions.size());
	}

	@Test
	public void canFindByHasBSLSigner(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasBSLSigner(true);
		assertEquals(true, foundAttractions.get(0).getHasBSLSigner());
		assertEquals(1, foundAttractions.size());
	}

	@Test
	public void canFindByHasMakatonSigner(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasMakatonSigner(true);
		assertEquals(true, foundAttractions.get(0).getHasMakatonSigner());
		assertEquals(1, foundAttractions.size());
	}

	@Test
	public void canFindByHasDisabledToilets(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByHasDisabledToilets(true);
		assertEquals(true, foundAttractions.get(0).getHasDisabledToilets());
		assertEquals(11, foundAttractions.size());
	}

	@Test
	public void canFindByHasChildEntryPriceAndLocationCity(){
		List<Attraction> foundAttractions = attractionRepository.findAttractionsByChildEntryPriceAndLocationCity(0.00, "Edinburgh");
		assertEquals(2, foundAttractions.size());
	}
}
