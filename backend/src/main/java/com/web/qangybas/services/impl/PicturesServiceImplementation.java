package com.web.qangybas.services.impl;

import com.web.qangybas.entities.Pictures;
import com.web.qangybas.repositories.PicturesRepository;
import com.web.qangybas.services.PicturesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PicturesServiceImplementation implements PicturesService {
    @Autowired
    PicturesRepository repository;

    @Override
    public void savePictures(List<Pictures> picturesList) {
        for (Pictures p: picturesList) {
            repository.save(p);
        }
    }

    @Override
    public void savePicture(Pictures picture) {
        repository.save(picture);
    }

    @Override
    public List<Pictures> findByPlaceID(Long placeId) {
        return repository.findAllByPlaces_Id(placeId);
    }
}
