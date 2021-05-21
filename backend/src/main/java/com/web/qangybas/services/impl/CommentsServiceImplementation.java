package com.web.qangybas.services.impl;

import com.web.qangybas.entities.Comments;
import com.web.qangybas.entities.Posts;
import com.web.qangybas.repositories.CommentsRepository;
import com.web.qangybas.services.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImplementation implements CommentsService {
    @Autowired
    CommentsRepository repository;

    @Override
    public List<Comments> findByPost(Posts posts) {
        return repository.findAllByPostsEqualsOrderByAddedDateAsc(posts);
    }

    @Override
    public Comments saveComments(Comments comments) {
        return repository.save(comments);
    }

    @Override
    public void removeComments(Comments comments) {
        repository.delete(comments);
    }

    @Override
    public Comments findById(Long id) {
        return repository.findByIdEquals(id);
    }
}
