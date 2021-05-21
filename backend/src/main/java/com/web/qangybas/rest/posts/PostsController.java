package com.web.qangybas.rest.posts;

import com.web.qangybas.entities.Posts;
import com.web.qangybas.entities.Users;
import com.web.qangybas.rest.posts.postsDTO.CreatePostRequest;
import com.web.qangybas.rest.posts.postsDTO.FollowAcceptRequest;
import com.web.qangybas.rest.posts.postsDTO.GetPostResponse;
import com.web.qangybas.rest.posts.postsDTO.GetPostsUserRequests;
import com.web.qangybas.services.PlacesService;
import com.web.qangybas.services.PostsService;
import com.web.qangybas.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/posts")
@CrossOrigin("*")
public class PostsController {

    @Autowired
    PostsService postsService;

    @Autowired
    UserService userService;

    @Autowired
    PlacesService placesService;

    private boolean listContainsUser(Set<Users> users, Users user){
        for (Users loopUser:users) {
            if (loopUser.getEmail().equals(user.getEmail())){
                return true;
            }
        }
        return false;
    }

    @GetMapping(value = "get-by-place")
    public ResponseEntity<?> getByPlace(@RequestParam(name = "place_id") Long id){
        return ResponseEntity.ok(postsService.findByPlace(id));
    }

    @PostMapping(value = "/add")
    public ResponseEntity<?> addPost(@RequestBody CreatePostRequest createPostRequest) {
        System.out.println("createPostRequest " + createPostRequest);
        Posts post = new Posts(
                null,
                createPostRequest.getName(),
                createPostRequest.getDescription(),
                createPostRequest.getVisitDate(),
                null,
                (Users) getCurrentUser(),
                placesService.findById(createPostRequest.getPlaceId()),
                Collections.<Users>emptySet(),
                Collections.<Users>emptySet()
        );

        Posts savedPost = postsService.savePost(post);
        return ResponseEntity.ok(savedPost);
    }

    @GetMapping(value = "/get")
    public ResponseEntity<?> getPost(@RequestParam(name = "id") Long id) {
        Users authenticatedUser = (Users) getCurrentUser();
        Posts posts = postsService.findById(id);

        boolean isAuthor = false;
        boolean isRequestUser = false;
        boolean isFollower = false;

        isAuthor = posts.getAuthor().getEmail().equals(authenticatedUser.getEmail());
        isRequestUser = listContainsUser(posts.getUserRequests(), authenticatedUser);
        isFollower = listContainsUser(posts.getFollowers(), authenticatedUser);

        return ResponseEntity.ok(new GetPostResponse(isAuthor, isRequestUser, isFollower, posts));
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> allPost() {
        return ResponseEntity.ok(postsService.findAll());
    }

    @GetMapping(value = "/requests")
    public ResponseEntity<?> postRequests(){
        Users authenticatedUser = (Users) getCurrentUser();

        List<Posts> myPosts = postsService.findByAuthor(authenticatedUser);

        List<GetPostsUserRequests> userRequests = new ArrayList<>();
        for (Posts post : myPosts){
            if (!post.getUserRequests().isEmpty()) {
                for (Users user : post.getUserRequests()) {
                    userRequests.add(new GetPostsUserRequests(user, post));
                }
            }
        }

        return ResponseEntity.ok(userRequests);
    }

    @PostMapping(value = "/follow")
    public ResponseEntity<?> followPost(@RequestParam(name = "post_id") Long id) {
        Users authenticatedUser = (Users) getCurrentUser();
        Posts post = postsService.findById(id);

        if (
            !post.getAuthor().getEmail().equals(authenticatedUser.getEmail()) &&
            !listContainsUser(post.getUserRequests(), authenticatedUser) &&
            !listContainsUser(post.getFollowers(), authenticatedUser)
            ){

            Set<Users> userRequests = post.getUserRequests();
            userRequests.add(authenticatedUser);
            post.setUserRequests(userRequests);
            postsService.savePost(post);
        }

        return ResponseEntity.ok(200);
    }

    @PostMapping(value = "/unfollow")
    public ResponseEntity<?> unfollowPost(@RequestParam(name = "post_id") Long id) {
        Posts post = postsService.findById(id);
        Users authenticatedUser = (Users) getCurrentUser();

        Set<Users> userRequests = post.getUserRequests();
        Set<Users> userRequestsCopy = new HashSet<>();
        userRequestsCopy.addAll(userRequests);

        for (Users loopUser: userRequestsCopy) {
            if (loopUser.getEmail().equals(authenticatedUser.getEmail())){
                userRequests.remove(loopUser);
                break;
            }
        }

        postsService.savePost(post);
        return ResponseEntity.ok(200);
    }

    @PostMapping(value = "/accept-follow")
    public ResponseEntity<?> acceptFollowPost(@RequestParam(name = "post_id") Long postId, @RequestParam(name = "follower_id") Long followerId) {
        Users authenticatedUser = (Users) getCurrentUser();
        Posts post = postsService.findById(postId);
        Users follower = userService.findByID(followerId);



        if(post.getUserRequests().contains(follower) && post.getAuthor().getEmail().equals(authenticatedUser.getEmail())){
            Set<Users> userRequests = post.getUserRequests();
            userRequests.remove(follower);
            post.setUserRequests(userRequests);

            Set<Users> followers = post.getFollowers();
            followers.add(follower);
            postsService.savePost(post);
        }

        return ResponseEntity.ok(200);
    }

    @PostMapping(value = "/discard-follow")
    public ResponseEntity<?> discardFollowPost(@RequestParam(name = "post_id") Long postId, @RequestParam(name = "follower_id") Long followerId) {
        Users authenticatedUser = (Users) getCurrentUser();
        Posts post = postsService.findById(postId);
        Users follower = userService.findByID(followerId);

        if(post.getUserRequests().contains(follower) && post.getAuthor().getEmail().equals(authenticatedUser.getEmail())){
            Set<Users> userRequests = post.getUserRequests();
            userRequests.remove(follower);
            post.setUserRequests(userRequests);
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
