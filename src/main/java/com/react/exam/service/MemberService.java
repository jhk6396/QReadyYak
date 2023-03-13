package com.react.exam.service;

import com.react.exam.dto.MemberRequestDto;
import com.react.exam.dto.MemberResponseDto;
import com.react.exam.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberResponseDto findBy(final MemberRequestDto params){
        return memberRepository.findByEmailAndPasswd(params.getEmail(),params.getPasswd());
    }
}
