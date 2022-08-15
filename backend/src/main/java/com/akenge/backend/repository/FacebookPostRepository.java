package com.akenge.backend.repository;

import com.akenge.backend.domain.FacebookPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacebookPostRepository extends JpaRepository<FacebookPost, Long> {


    List<FacebookPost> findAllByEmail(String email);
}
