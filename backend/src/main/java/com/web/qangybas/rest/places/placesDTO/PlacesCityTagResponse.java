package com.web.qangybas.rest.places.placesDTO;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Tags;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlacesCityTagResponse implements Serializable {
    List<Tags> tagsList;
    List<City> cities;
}
