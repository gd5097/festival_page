package com.example.back_end_festival.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @GetMapping("/")
    public String HelloWorld(){
        return "startpage";
    }

}
