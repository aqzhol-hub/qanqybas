package com.web.qangybas.rest.user;

import com.web.qangybas.entities.Users;
import com.web.qangybas.rest.user.userDTO.UserProfileResponse;
import com.web.qangybas.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping(value = "/profile")
    public ResponseEntity<?> userProfile(@RequestParam(name = "id", defaultValue="") Long id){
        System.out.println("___------))))))______+_+_)_)+_)+");
        Users authUser = (Users) getCurrentUser();
        System.out.println(authUser);
        return ResponseEntity.ok(authUser);
//        boolean isAuthUser = true;
//
//        if (id!=null){
//            Users otherUser = userService.findByID(id);
//            assert otherUser!=null;
//            if (!otherUser.getEmail().equals(authUser.getEmail())){
//                isAuthUser = false;
//            }
//            authUser = otherUser;
//        }
//        authUser.setPassword("");
//
//        return ResponseEntity.ok(new UserProfileResponse(authUser, isAuthUser));
    }

    private UserDetails getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            return (UserDetails) authentication.getPrincipal();
        }
        return null;
    }
}
