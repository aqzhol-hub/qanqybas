package com.web.qangybas.services.impl;

import com.web.qangybas.entities.Roles;
import com.web.qangybas.entities.Users;
import com.web.qangybas.repositories.RoleRepository;
import com.web.qangybas.repositories.UserRepository;
import com.web.qangybas.rest.users.usersDTO.ChangePasswordRequest;
import com.web.qangybas.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(s);
        if(user!=null){
            return user;
        }else{
            throw new UsernameNotFoundException("USER NOT FOUND");
        }
    }


    @Override
    public Users saveUser(Users user) {
        Roles role = roleRepository.findByName("ROLE_USER");
        List<Roles> rolesList = new ArrayList<>();
        rolesList.add(role);

        user.setRoles(rolesList);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    @Override
    public Users findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Users findByID(Long id) {
        return userRepository.findByIdEquals(id);
    }

    @Override
    public Users updatePassword(Users users, ChangePasswordRequest changePasswordRequest) {
        if(passwordEncoder.matches(changePasswordRequest.getOldPassword(), changePasswordRequest.getNewPassword())) {
            String newPassword = passwordEncoder.encode(changePasswordRequest.getNewPassword());
            users.setPassword(newPassword);
            return userRepository.save(users);
        }
        return null;
    }
}