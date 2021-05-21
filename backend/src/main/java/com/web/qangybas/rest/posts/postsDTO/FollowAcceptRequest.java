package com.web.qangybas.rest.posts.postsDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowAcceptRequest implements Serializable {
    private Long followerId;
    private Long postId;
}
