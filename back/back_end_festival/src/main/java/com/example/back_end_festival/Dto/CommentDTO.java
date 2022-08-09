package com.example.back_end_festival.Dto;

import com.example.back_end_festival.Entity.CommentEntity;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CommentDTO {
    private Long id;
    private Long boardId;
    private String content;
    private String curTime;

    public CommentEntity toEntity(Long boardId, String content) {
        String curTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")); // 현재 시각을 now 변수로 받는다.
        return new CommentEntity(id, boardId, content, curTime);
    }
}
