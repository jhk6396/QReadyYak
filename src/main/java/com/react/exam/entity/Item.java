package com.react.exam.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "shoppingListItem")
public class Item {

    @Id
    private String _id;
    private String desc;
    private String id;
    private String priority;

}
