package com.web.qangybas.rest.posts.postsDTO;

import com.web.qangybas.entities.Places;
import com.web.qangybas.entities.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePostRequest implements Serializable {
    private String name;
    private String description;
    private String visitDate;
    private Long placeId;
}
