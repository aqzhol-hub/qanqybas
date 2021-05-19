package com.web.qangybas.services.impl;

import com.web.qangybas.entities.Posts;
import com.web.qangybas.repositories.PostsRepository;
import com.web.qangybas.services.PostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostsServiceImplementation implements PostsService {
    @Autowired
    PostsRepository repository;

    @Override
    public Posts savePost(Posts posts) {
        return repository.save(posts);
    }

    @Override
    public Posts findById(Long id) {
        return repository.findByIdEquals(id);
    }

    @Override
    public List<Posts> findAll() {
        return repository.findAll();
    }
}
