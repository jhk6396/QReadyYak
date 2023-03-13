package com.react.exam.dto;

import com.react.exam.entity.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class MemberRequestDto {

    private String email;
    private String passwd;
    
    public Member toEntity(){
        Member member = new Member();
        member.setEmail(email);
        member.setPasswd(passwd);
        return member;
    }
}
