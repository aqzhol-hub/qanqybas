package com.web.qangybas.rest.posts.postsDTO;

import com.web.qangybas.entities.Posts;
import com.web.qangybas.entities.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetPostsUserRequests implements Serializable {
    private Users users;
    private Posts posts;
}
