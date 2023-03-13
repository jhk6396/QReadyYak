package com.react.exam.controller;

import com.react.exam.dto.ItemSaveDto;
import com.react.exam.entity.Item;
import com.react.exam.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ItemController {

    private final ItemRepository itemRepository;

    @PutMapping("item/{id}")
    public void update(@RequestBody ItemSaveDto dto, @PathVariable String id){
        Item item = dto.toEntity();
        item.set_id(id);

        itemRepository.save(item);
    }

    @DeleteMapping("item/{id}")
    public int deleteById(@PathVariable String id) {
        itemRepository.deleteById(id);

        return 1;
    }

    @GetMapping("/item/{id}")
    public Item findById(@PathVariable String id) {
        return itemRepository.findById(id).get();
    }

    @GetMapping("/item")
    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    @PostMapping("/item")
    public Item save(@RequestBody ItemSaveDto dto) {
        Item itemEntity = itemRepository.save(dto.toEntity());

        return itemEntity;
    }
}
