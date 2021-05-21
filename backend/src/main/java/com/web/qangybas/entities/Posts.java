package com.web.qangybas.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "t_posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Posts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", columnDefinition="text", length=10485760)
    private String description;

    @Column(name = "visitDate")
    private String visitDate;

    @Column(name="addedDate", columnDefinition="timestamp NOT NULL DEFAULT NOW()", insertable = false, updatable = false)
    private Timestamp addedDate;

    @ManyToOne(fetch = FetchType.EAGER)
    private Users author;

    @ManyToOne(fetch = FetchType.EAGER)
    private Places places;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Users> followers;

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Users> userRequests;
}
