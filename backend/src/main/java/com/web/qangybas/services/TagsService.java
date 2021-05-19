package com.web.qangybas.services;

import com.web.qangybas.entities.Tags;

import java.util.List;

public interface TagsService {
    List<Tags> findAll();
    List<Tags> findAllByID(List<Long> id);
    void saveTag(Tags tags);

}
