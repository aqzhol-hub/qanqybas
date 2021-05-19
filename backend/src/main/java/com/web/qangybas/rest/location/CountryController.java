package com.web.qangybas.rest.location;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Country;
import com.web.qangybas.services.CityService;
import com.web.qangybas.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/country")
@CrossOrigin("*")
public class CountryController {
    @Autowired
    CountryService countryService;

    @PostMapping(value = "/add")
    public ResponseEntity<?> addCountry(@RequestBody Country country) {
        return ResponseEntity.ok(countryService.saveCountry(country));
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> allCountry() {
        return ResponseEntity.ok(countryService.findAll());
    }
}
