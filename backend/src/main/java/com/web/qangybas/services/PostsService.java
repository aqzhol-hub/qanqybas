package com.web.qangybas.services;

import com.web.qangybas.entities.Places;
import com.web.qangybas.entities.Posts;

import java.util.List;

public interface PostsService {
    Posts savePost(Posts posts);
    Posts findById(Long id);
    List<Posts> findAll();
}
