package com.example.back_end_festival.Entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor // 모든 생성자를 대신해주는 어노테이션
@NoArgsConstructor // 기본 생성자를 대신해주는 어노테이션
@ToString
@Setter
@Getter
public class BoardEntity {

    @Id // 대푯값 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 대푯값인 id를 자동 생성해주는 어노테이션
    private Long id; // 작성 번호

    @Column
    private String title; // 글 제목
    @Column
    private String content; // 글 내용
    @Column
    private String curTime;  // 작성 일시

}
