package com.example.back_end_festival.Repository;

import com.example.back_end_festival.Entity.BoardEntity;
import com.example.back_end_festival.Entity.CommentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface CommentRepository extends JpaRepository<CommentEntity, Long> {


}
