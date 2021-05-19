package com.web.qangybas.repositories;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Places;
import com.web.qangybas.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface PlacesRepository extends JpaRepository<Places, Long> {
    List<Places> findAllByCity(City city);
    Places findByIdEquals(Long id);
}