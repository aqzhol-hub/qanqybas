package com.web.qangybas.rest.places;

import com.web.qangybas.dto.JwtResponse;
import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Pictures;
import com.web.qangybas.entities.Places;
import com.web.qangybas.entities.Tags;
import com.web.qangybas.rest.places.placesDTO.CityPlaceResponse;
import com.web.qangybas.rest.places.placesDTO.PlacePictureResponse;
import com.web.qangybas.rest.places.placesDTO.PlacesCityTagResponse;
import com.web.qangybas.rest.places.placesDTO.PlacesRequest;
import com.web.qangybas.services.CityService;
import com.web.qangybas.services.PicturesService;
import com.web.qangybas.services.PlacesService;
import com.web.qangybas.services.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/place")
@CrossOrigin("*")
public class PlacesController {
    @Autowired
    CityService cityService;

    @Autowired
    PicturesService picturesService;

    @Autowired
    TagsService tagsService;

    @Autowired
    PlacesService placesService;

    @PostMapping(value = "/add")
    public ResponseEntity<?> addPlace(@RequestBody PlacesRequest placesRequest) {
        System.out.println(placesRequest);

        City placeCity = cityService.findByID(placesRequest.getCityId());
        List<Tags> placeTags = tagsService.findAllByID(placesRequest.getTags());
        Places place = new Places(null, placesRequest.getName(), placesRequest.getDescription(), placesRequest.getRating(), placeTags, placeCity);
        Places savedPlace = placesService.savePlace(place);

        for (String url: placesRequest.getImages()){
            picturesService.savePicture(new Pictures(null, url, null, savedPlace));
        }

        return ResponseEntity.ok(picturesService.findByPlaceID(savedPlace.getId()));
    }

    @GetMapping(value = "/pre/add")
    public ResponseEntity<?> preAddPlace(){
        List<City> cities = cityService.findAll();
        List<Tags> tags = tagsService.findAll();

        PlacesCityTagResponse response = new PlacesCityTagResponse(tags, cities);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> allPlaces(){
        List<Places> places = placesService.findAll();
        return ResponseEntity.ok(places);
    }

    @GetMapping(value = "/by-city")
    public ResponseEntity<?> cityPlaces(){
        List<CityPlaceResponse> responses = new ArrayList<>();
        for (City city: cityService.findAll()) {
            List<Places> places = placesService.findByCity(city);
            List<PlacePictureResponse> placeresp = new ArrayList<>();

            for (Places p: places){
                List<Pictures> pictures = picturesService.findByPlaceID(p.getId());
                placeresp.add(new PlacePictureResponse(p, pictures));
            }
            responses.add(new CityPlaceResponse(city.getName(),placeresp));
        }
        return ResponseEntity.ok(responses);
    }

    @GetMapping(value = "/get")
    public ResponseEntity<?> getPlace(@RequestParam(name = "id") Long id){
        Places place = placesService.findById(id);
        List<Pictures> pictures = picturesService.findByPlaceID(place.getId());

        return ResponseEntity.ok(new PlacePictureResponse(place, pictures));
    }
}