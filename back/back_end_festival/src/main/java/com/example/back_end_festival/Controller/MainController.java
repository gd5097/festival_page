package com.example.back_end_festival.Controller;

import com.example.back_end_festival.Dto.BoardDTO;
import com.example.back_end_festival.Entity.BoardEntity;
import com.example.back_end_festival.Repository.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Slf4j // 로깅을 사용하기 위한 어노테이션
public class MainController {

    @Autowired
    private BoardRepository boardRepository;

    // 메인 홈페이지 url에 접속했을 때, templetes 폴더 안에 main_page.html 문서를 보여준다.
    @GetMapping("/")
    public String main(){
        return "main_page";
    }

    // "게시판으로 이동"을 클릭했을 때 전체 게시판의 모습을 보여준다.
    @GetMapping("/board/entire_page")
    public String entire_board(){
        return "board_html/entire_page";
    }

    @GetMapping("/board/write_page")
    public String write(){
        return "board_html/write_page";
    }

    // form 형식에서 post방식으로 받은 데이터를 dto 데이터로 받는다.
    @PostMapping("/board/create") 
    public String create(BoardDTO dto){
        // 1. 받은 dto 데이터를 Entity로 변환한다.
        BoardEntity boardEntity = dto.toEntity();

        // 2. 받은 Entity 데이터를 Repository를 통해서 DB 안에 저장한다.
        BoardEntity saved = boardRepository.save(boardEntity);
        log.info(saved.toString()); // 로깅으로 데이터 확인해보기
        // 3. 해당 글로 redirect 한다.
        return "redirect:/board/" + saved.getId();
    }


}
