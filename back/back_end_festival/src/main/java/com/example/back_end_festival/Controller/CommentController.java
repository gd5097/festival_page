package com.example.back_end_festival.Controller;

import com.example.back_end_festival.Dto.CommentDTO;
import com.example.back_end_festival.Entity.CommentEntity;
import com.example.back_end_festival.Repository.CommentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

@Controller
@Slf4j
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;


    @PostMapping("/comment/{id}/create")
    public String comment_create(@PathVariable Long id, CommentDTO dto, @RequestParam String content) {
        // form 태그에서 받은 dto 데이터를 Entity 데이터로 변환한다.
        CommentEntity commentEntity = dto.toEntity(id, content); // form 태그에서 받은 dto데이터를 Entity로 변환한다.
        log.info("commentEntity");
        // 변환된 Entity 데이터를 DB에 저장한다.
        CommentEntity saved = commentRepository.save(commentEntity);
        log.info("saved");
        // DB에 저장했으니, 해당 페이지로 다시 돌아간다.
        return "redirect:/board/" + saved.getBoardId();
    }

}
