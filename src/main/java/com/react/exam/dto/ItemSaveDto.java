package com.react.exam.dto;

import com.react.exam.entity.Item;
import lombok.Data;

@Data
public class ItemSaveDto {
    private String desc;
    private String priority;
    private String id;

    public Item toEntity() {
        Item item = new Item();
        item.setDesc(desc);
        item.setPriority(priority);
        item.setId(id);
        return item;
    }
}
