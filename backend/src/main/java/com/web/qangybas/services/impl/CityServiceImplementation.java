package com.web.qangybas.services.impl;

import com.web.qangybas.entities.City;
import com.web.qangybas.repositories.CityRepository;
import com.web.qangybas.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImplementation implements CityService {
    @Autowired
    CityRepository repository;

    @Override
    public List<City> findAll() {
        return repository.findAll();
    }

    @Override
    public City findByID(Long id) {
        return repository.findByIdEquals(id);
    }

    @Override
    public City addCity(City city) {
        return repository.save(city);
    }
}
