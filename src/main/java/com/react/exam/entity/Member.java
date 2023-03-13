package com.react.exam.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "member")
public class Member {

    @Id
    private String _id;
    private String email;
    private String name;
    private String passwd;
    private String savedate;


}
