package com.web.qangybas.services.impl;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Places;
import com.web.qangybas.repositories.PlacesRepository;
import com.web.qangybas.services.PlacesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlacesServiceImplementation implements PlacesService {
    @Autowired
    PlacesRepository repository;

    @Override
    public Places savePlace(Places place) {
        return repository.save(place);
    }

    @Override
    public Places findById(Long id) {
        return repository.findByIdEquals(id);
    }

    @Override
    public List<Places> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Places> findByCity(City city) {
        return repository.findAllByCity(city);
    }
}
