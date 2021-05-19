package com.web.qangybas.services.impl;

import com.web.qangybas.repositories.CommentsRepository;
import com.web.qangybas.services.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentsServiceImplementation implements CommentsService {
    @Autowired
    CommentsRepository repository;
}
