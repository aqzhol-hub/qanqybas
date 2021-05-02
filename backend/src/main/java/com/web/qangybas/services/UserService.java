package com.web.qangybas.services;

import com.web.qangybas.entities.Users;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    Users saveUser(Users user);
    Users findByEmail(String email);
}