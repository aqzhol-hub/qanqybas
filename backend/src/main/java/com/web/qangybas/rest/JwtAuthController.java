package com.web.qangybas.rest;

import com.web.qangybas.dto.JwtRequest;
import com.web.qangybas.dto.JwtResponse;
import com.web.qangybas.entities.Users;
import com.web.qangybas.jwt.JWTTokenGenerator;
import com.web.qangybas.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthController {

    @Autowired
    private JWTTokenGenerator jwtTokenGenerator;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody JwtRequest request) throws Exception{

        authenticate(request.getEmail(), request.getPassword());
        final UserDetails userDetails =
                userService.loadUserByUsername(request.getEmail());

        final String token = jwtTokenGenerator.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));

    }

    @RequestMapping(value = "/registration")
    public ResponseEntity<?> registration(@RequestBody Users user) throws Exception{
        System.out.println(userService.findByEmail(user.getEmail()));
        if (userService.findByEmail(user.getEmail()) == null){
            Users registeredUser = userService.saveUser(user);
            registeredUser.setPassword("");
            return ResponseEntity.ok(registeredUser);
        }
        return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/checkAuth")
    public ResponseEntity<?> checkAuth() throws Exception{
        UserDetails user = getCurrentUser();
        if (user!=null){
            return ResponseEntity.ok(200);
        }
        return (ResponseEntity<?>) ResponseEntity.notFound();
    }

    public void authenticate(String email, String password) throws Exception{
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        }catch (DisabledException e){
            throw new Exception("USER_DISABLED", e);
        }catch (BadCredentialsException e){
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }


    private UserDetails getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            return (UserDetails) authentication.getPrincipal();
        }
        return null;
    }

}