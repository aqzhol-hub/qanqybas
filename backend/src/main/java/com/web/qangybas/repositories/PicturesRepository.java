package com.web.qangybas.repositories;

import com.web.qangybas.entities.Pictures;
import com.web.qangybas.entities.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface PicturesRepository extends JpaRepository<Pictures, Long> {
    List<Pictures> findAllByPlaces_Id(Long placeId);
}
