package com.web.qangybas.services;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Tags;

import java.util.List;

public interface CityService {
    List<City> findAll();
    City findByID(Long id);
    City addCity(City city);
}
