package com.web.qangybas.rest.posts.postsDTO;

import com.web.qangybas.entities.Posts;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetPostResponse implements Serializable {
    private boolean isAuthor;
    private boolean isRequestUser;
    private boolean isFollower;
    private Posts posts;
}
