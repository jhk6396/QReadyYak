package com.react.exam.dto;

import com.react.exam.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class MemberResponseDto {
    private String email;
    private String name;
    private String passwd;
    private String savedate;

    public MemberResponseDto(Member member){
        this.email = member.getEmail();
        this.name = member.getName();
        this.passwd = member.getPasswd();
        this.savedate = member.getSavedate();

    }
}
