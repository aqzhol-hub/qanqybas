package com.web.qangybas.repositories;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Posts;
import com.web.qangybas.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Repository
@Transactional
public interface PostsRepository  extends JpaRepository<Posts, Long> {
    Posts findByIdEquals(Long id);
    List<Posts> findAllByAuthorEquals(Users author);
}
