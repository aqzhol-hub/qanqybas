package com.web.qangybas.repositories;

import com.web.qangybas.entities.Tags;
import com.web.qangybas.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface TagsRepository extends JpaRepository<Tags, Long> {
    List<Tags> findAllByIdIn(List<Long> id);
}