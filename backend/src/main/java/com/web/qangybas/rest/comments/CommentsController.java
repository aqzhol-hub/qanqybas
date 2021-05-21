package com.web.qangybas.rest.comments;

import com.web.qangybas.entities.Comments;
import com.web.qangybas.entities.Posts;
import com.web.qangybas.entities.Users;
import com.web.qangybas.rest.comments.CommentsDTO.AddCommentRequest;
import com.web.qangybas.rest.posts.postsDTO.CreatePostRequest;
import com.web.qangybas.services.CommentsService;
import com.web.qangybas.services.PostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Set;

@RestController
@RequestMapping(value = "/comments")
@CrossOrigin("*")
public class CommentsController {
    @Autowired
    private CommentsService commentsService;

    @Autowired
    private PostsService postsService;

    private boolean listContainsUser(Set<Users> users, Users user){
        for (Users loopUser:users) {
            if (loopUser.getEmail().equals(user.getEmail())){
                return true;
            }
        }
        return false;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<?> addPost(@RequestBody AddCommentRequest addCommentRequest) {
        Posts commentedPost = postsService.findById(addCommentRequest.getPostId());
        Users authenticatedUser = (Users) getCurrentUser();

        if (listContainsUser(commentedPost.getFollowers(), authenticatedUser)){
            Comments comments = new Comments(
                    null,
                    addCommentRequest.getName(),
                    null,
                    authenticatedUser,
                    commentedPost);

            return ResponseEntity.ok(commentsService.saveComments(comments));
        }
        return ResponseEntity.ok(400);
    }

    private UserDetails getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            return (UserDetails) authentication.getPrincipal();
        }
        return null;
    }
}
