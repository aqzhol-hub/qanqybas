package com.web.qangybas.services.impl;

import com.web.qangybas.repositories.RoutesRepository;
import com.web.qangybas.services.RoutesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoutesServiceImplementation implements RoutesService {
    @Autowired
    RoutesRepository repository;
}
