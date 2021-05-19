package com.web.qangybas.services.impl;

import com.web.qangybas.entities.Tags;
import com.web.qangybas.repositories.TagsRepository;
import com.web.qangybas.services.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagsServiceImplementation implements TagsService {

    @Autowired
    TagsRepository repository;

    @Override
    public List<Tags> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Tags> findAllByID(List<Long> id) {
        return repository.findAllByIdIn(id);
    }

    @Override
    public void saveTag(Tags tags) {
        repository.save(tags);
    }
}
