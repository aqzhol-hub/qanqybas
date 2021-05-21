package com.web.qangybas.repositories;

import com.web.qangybas.entities.City;
import com.web.qangybas.entities.Comments;
import com.web.qangybas.entities.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface CommentsRepository  extends JpaRepository<Comments, Long> {
    List<Comments> findAllByPostsEqualsOrderByAddedDateAsc(Posts posts);
    Comments findByIdEquals(Long id);
}