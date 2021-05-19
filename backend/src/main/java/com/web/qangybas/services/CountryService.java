package com.web.qangybas.services;

import com.web.qangybas.entities.Country;

import java.util.List;

public interface CountryService {
    List<Country> findAll();
    Country saveCountry(Country country);
}
