package com.web.qangybas.services;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Pictures;
import com.web.qangybas.entities.Places;

import java.util.List;

public interface PlacesService {
    Places savePlace(Places place);
    Places findById(Long id);
    List<Places> findAll();
    List<Places> findByCity(City city);
}
