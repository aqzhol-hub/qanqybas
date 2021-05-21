package com.web.qangybas.services;

import com.web.qangybas.entities.Users;
import com.web.qangybas.rest.users.usersDTO.ChangePasswordRequest;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    Users saveUser(Users user);
    Users findByEmail(String email);
    Users findByID(Long id);
    Users updatePassword(Users users, ChangePasswordRequest changePasswordRequest);
}