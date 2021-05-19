package com.web.qangybas.services;

import com.web.qangybas.entities.Pictures;

import java.util.List;

public interface PicturesService {
    void savePictures(List<Pictures> picturesList);
    void savePicture(Pictures picture);

    List<Pictures> findByPlaceID(Long placeId);
}
