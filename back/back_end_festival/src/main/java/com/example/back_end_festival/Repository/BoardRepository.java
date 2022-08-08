package com.example.back_end_festival.Repository;

import com.example.back_end_festival.Entity.BoardEntity;
import org.springframework.data.repository.CrudRepository;

public interface BoardRepository extends CrudRepository<BoardEntity, Long> {
}
