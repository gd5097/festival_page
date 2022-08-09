package com.example.back_end_festival.Dto;

import com.example.back_end_festival.Entity.BoardEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class BoardDTO {

    private Long id;
    private String title;
    private String content;

    private String curTime;

    private Long see = 0L;

    // form 태그에 받은 데이터(dto)를 Entity 로 변환시켜주는 함수
    public BoardEntity toEntity() {
        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")); // 현재 시각을 now 변수로 받는다.
        return new BoardEntity(id, title, content, now, see); // form 태그에서 받은 데이터를 Entity 데이터로 변환해준다.
    }
}
