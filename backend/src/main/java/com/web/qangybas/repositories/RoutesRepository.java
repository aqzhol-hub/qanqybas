package com.web.qangybas.repositories;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Routes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface RoutesRepository  extends JpaRepository<Routes, Long> {
}
