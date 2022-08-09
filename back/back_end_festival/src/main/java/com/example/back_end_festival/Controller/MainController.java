package com.example.back_end_festival.Controller;

import com.example.back_end_festival.Dto.BoardDTO;
import com.example.back_end_festival.Entity.BoardEntity;
import com.example.back_end_festival.Repository.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;

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
    public String entire_board(Model model){
        // 1. Repository 에서 모든 BoardEntity형의 모든 Entity를 ArrayList 형으로 가져온다. -> Repository에서 ArrayList 형 변환 필수
        ArrayList<BoardEntity> boardEntityList = boardRepository.findAll();
        // 2. boardEntityList를 model로 받는다.
        model.addAttribute("boardEntityList", boardEntityList);
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
        return "redirect:/board/" + saved.getId(); // /board/{id} 로 이동을 하게 되면 해당 글에 대한 상세 페이지(single_page.html)로 이동!
    }

    // 글을 작성했을 때, 그 글의 내용을 보여주는 페이지 입니다.
    @GetMapping("/board/{id}")
    public String show(@PathVariable Long id, Model model){

        // 1. DB에 있는 데이터를 상세 페이지로 보내기 위해서 Repository에 접근하여 Entity 데이터를 가지고 온다.
        BoardEntity boardEntity = boardRepository.findById(id).orElse(null);
        // 2. 불러온 boardEntity 데이터를 이용하기 위해서 Model 에 저장한다.
        model.addAttribute("boardEntity", boardEntity);

        return "board_html/single_page";
    }

    // 해당 글을 수정할 때, 작성하는 페이지입니다. --> GetMapping 을 이용합니다.
    @GetMapping("/board/{id}/modify")
    public String modify(@PathVariable Long id, Model model){
        // 기존에 저장되어있던 정보들을 Repository에서 가져와서 Entity 데이터로 들고 옵니다.
        BoardEntity boardEntity = boardRepository.findById(id).orElse(null);
        // Model 로 데이터를 받습니다.
        model.addAttribute("boardEntity", boardEntity);

        return "board_html/modify_page";
    }

    // 수정된 새로운 정보들을 PostMapping으로 받아서 처리하는 작업
    @PostMapping("/board/update")
    public String update(BoardDTO dto){
        // dto로 정보를 받아서 Entity 데이터로 변경한다.
        BoardEntity boardEntity = dto.toEntity();
        // 기존에 있던 데이터를 불러온다. --> 데이터가 없다면 orElse() 를 통해 null 값을 저장한다.
        BoardEntity tmp = boardRepository.findById(boardEntity.getId()).orElse(null);
        // 만약 tmp에 데이터가 존재한다면 새로운 데이터를 DB에 저장해준다.
        if (tmp != null) {
            boardRepository.save(boardEntity);
        }

        // 수정된 결과를 보기 위해서 해당 글의 url로 redirect 해준다.
        return "redirect:/board/" + boardEntity.getId();
    }

    // 해당 글을 삭제하는 작업입니다.
    @GetMapping("/board/{id}/delete")
    public String delete(@PathVariable Long id, RedirectAttributes rttr){

        // 삭제 대상을 DB에서 Repository 를 통해서 가지고 옵니다.
        BoardEntity tmp = boardRepository.findById(id).orElse(null);
        // 대상을 삭제합니다.
        if (tmp != null){
            boardRepository.delete(tmp);
            rttr.addFlashAttribute("msg","삭제가 완료되었습니다.");
        }

        // 다시 게시판 목록으로 redirect 해준다.
        return "redirect:/board/entire_page";
    }



}
