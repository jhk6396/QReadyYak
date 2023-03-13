package com.react.exam.controller;

import com.react.exam.dto.MemberRequestDto;
import com.react.exam.dto.MemberResponseDto;
import com.react.exam.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RequestMapping("/member")
@RestController
public class memberController {

    private final MemberService memberService;

    @PostMapping("/login")
    public MemberResponseDto login(@RequestBody final MemberRequestDto params) {
        return memberService.findBy(params);
    }
}
