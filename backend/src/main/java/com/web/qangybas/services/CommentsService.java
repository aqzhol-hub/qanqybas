package com.web.qangybas.services;

import com.web.qangybas.entities.Comments;
import com.web.qangybas.entities.Posts;

import java.util.List;

public interface CommentsService {
    List<Comments> findByPost(Posts posts);
    Comments saveComments(Comments comments);
    void removeComments(Comments comments);
    Comments findById(Long id);
}
