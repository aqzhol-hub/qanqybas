package com.web.qangybas.services.impl;

import com.web.qangybas.repositories.RoleRepository;
import com.web.qangybas.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesServiceImplementation implements RolesService {
    @Autowired
    RoleRepository repository;
}
