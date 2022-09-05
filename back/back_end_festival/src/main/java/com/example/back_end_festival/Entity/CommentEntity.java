package com.example.back_end_festival.Entity;

import lombok.*;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Long boardId;
    @Column
    private String content;
    @Column
    private String curTime;

}
