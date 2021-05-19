package com.web.qangybas.rest.posts;

import com.web.qangybas.entities.Posts;
import com.web.qangybas.entities.Users;
import com.web.qangybas.repositories.PostsRepository;
import com.web.qangybas.rest.places.placesDTO.PlacesRequest;
import com.web.qangybas.rest.posts.postsDTO.FollowAcceptRequest;
import com.web.qangybas.services.PostsService;
import com.web.qangybas.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping(value = "/posts")
@CrossOrigin("*")
public class PostsController {

    @Autowired
    PostsService postsService;

    @Autowired
    UserService userService;

    @PostMapping(value = "/add")
    public ResponseEntity<?> addPost(@RequestBody Posts posts) {
        Posts savedPost = postsService.savePost(posts);
        return ResponseEntity.ok(savedPost);
    }

    @GetMapping(value = "/get")
    public ResponseEntity<?> getPost(@RequestParam(name = "id") Long id) {
        return ResponseEntity.ok(postsService.findById(id));
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> allPost() {
        return ResponseEntity.ok(postsService.findAll());
    }

    @PostMapping(value = "/follow")
    public ResponseEntity<?> followPost(@RequestParam(name = "id") Long id) {
        Posts post = postsService.findById(id);
        Users authenticatedUser = (Users) getCurrentUser();
        if (!post.getAuthor().equals(authenticatedUser)){
            Set<Users> userRequests = post.getUserRequests();
            userRequests.add(authenticatedUser);
            post.setUserRequests(userRequests);
            postsService.savePost(post);
        }

        return ResponseEntity.ok(200);
    }

    @PostMapping(value = "/unfollow")
    public ResponseEntity<?> unfollowPost(@RequestParam(name = "id") Long id) {
        Posts post = postsService.findById(id);
        Users authenticatedUser = (Users) getCurrentUser();
        if (post.getAuthor().equals(authenticatedUser)){
            Set<Users> userRequests = post.getUserRequests();
            userRequests.remove(authenticatedUser);
            post.setUserRequests(userRequests);
            postsService.savePost(post);
        }

        return ResponseEntity.ok(200);
    }

    @PostMapping(value = "/accept-follow")
    public ResponseEntity<?> acceptFollowPost(@RequestBody FollowAcceptRequest followAcceptRequest) {
        Posts post = postsService.findById(followAcceptRequest.getPostId());
        Users user = userService.findByID(followAcceptRequest.getUserId());

        if(post.getUserRequests().contains(user)){
            Set<Users> userRequests = post.getUserRequests();
            userRequests.remove(user);
            post.setUserRequests(userRequests);

            Set<Users> followers = post.getFollowers();
            followers.add(user);

            postsService.savePost(post);
        }

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
