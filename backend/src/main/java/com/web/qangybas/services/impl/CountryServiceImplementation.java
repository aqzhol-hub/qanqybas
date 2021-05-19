package com.web.qangybas.services.impl;

import com.web.qangybas.entities.Country;
import com.web.qangybas.repositories.CountryRepository;
import com.web.qangybas.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImplementation implements CountryService {
    @Autowired
    CountryRepository repository;

    @Override
    public List<Country> findAll() {
        return repository.findAll();
    }

    @Override
    public Country saveCountry(Country country) {
        return repository.save(country);
    }
}
