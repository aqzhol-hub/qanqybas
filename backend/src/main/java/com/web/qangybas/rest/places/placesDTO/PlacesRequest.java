package com.web.qangybas.rest.places.placesDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlacesRequest implements Serializable {
    private Long cityId;
    private String description;
    private String name;
    private Double rating;
    private List<String> images;
    private List<Long> tags;
}