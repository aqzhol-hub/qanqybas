package com.web.qangybas.rest.location;

import com.web.qangybas.entities.City;
import com.web.qangybas.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/city")
@CrossOrigin("*")
public class CityController {
    @Autowired
    CityService cityService;

    @PostMapping(value = "/add")
    public ResponseEntity<?> addCity(@RequestBody City city) {
        City savedCity = cityService.addCity(city);
        return ResponseEntity.ok(savedCity);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> allCity() {
        return ResponseEntity.ok(cityService.findAll());
    }
}
