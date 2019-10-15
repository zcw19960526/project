package com.zcw.controller;

import com.zcw.Util.RespBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/login")
    public RespBean login(){
        RespBean respBean = new RespBean();
        respBean.setMag("没有登录");
        return respBean;
    }
}
