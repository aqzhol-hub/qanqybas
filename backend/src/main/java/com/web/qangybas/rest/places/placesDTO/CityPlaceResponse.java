package com.web.qangybas.rest.places.placesDTO;

import com.web.qangybas.entities.Pictures;
import com.web.qangybas.entities.Places;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CityPlaceResponse implements Serializable {
    String city;
    List<PlacePictureResponse> places;
}
