package com.react.exam.repository;

import com.react.exam.dto.MemberResponseDto;
import com.react.exam.entity.Member;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MemberRepository extends MongoRepository<Member, String> {
    MemberResponseDto findByEmailAndPasswd(final String email, final String passwd);
}
