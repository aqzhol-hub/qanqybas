package com.web.qangybas.rest.users;

import com.web.qangybas.entities.Roles;
import com.web.qangybas.entities.Users;
import com.web.qangybas.rest.users.usersDTO.ChangePasswordRequest;
import com.web.qangybas.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin("*")
public class UsersController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping(value = "/profile")
    public ResponseEntity<?> userProfile(@RequestParam(name = "id", defaultValue="") Long id){
        Users authUser = (Users) getCurrentUser();
        authUser.setPassword("");
        return ResponseEntity.ok(authUser);
    }

    @GetMapping(value = "/get-roles")
    public ResponseEntity<?> getRoles() throws Exception{
        Users user = (Users) getCurrentUser();
        if (user!=null){
            List<Roles> rolesList = user.getRoles();
            for(Roles role: rolesList){
                if (role.getName().equals("ROLE_ADMIN")){
                    return ResponseEntity.ok(200);
                }
            }

        }
        return ResponseEntity.ok(400);
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest changePasswordRequest) throws Exception{
        userService.updatePassword((Users) getCurrentUser(), changePasswordRequest);

        return ResponseEntity.ok(200);
    }

    private UserDetails getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            return (UserDetails) authentication.getPrincipal();
        }
        return null;
    }
}
