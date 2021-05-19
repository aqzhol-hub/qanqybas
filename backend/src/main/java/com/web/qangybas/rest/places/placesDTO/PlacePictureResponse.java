package com.web.qangybas.rest.places.placesDTO;

import com.web.qangybas.entities.Pictures;
import com.web.qangybas.entities.Places;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlacePictureResponse {
    Places place;
    List<Pictures> picturesList;
}
