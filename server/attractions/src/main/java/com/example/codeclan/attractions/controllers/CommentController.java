package com.example.codeclan.attractions.controllers;

import com.example.codeclan.attractions.models.Attraction;
import com.example.codeclan.attractions.models.Comment;
import com.example.codeclan.attractions.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    CommentRepository commentRepository;

    @GetMapping(value="/comments")
    public ResponseEntity<List<Comment>> getAllComments(){
        return new ResponseEntity<>(commentRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/comments")
    public ResponseEntity<Comment> postComment(@RequestBody Comment comment){
        commentRepository.save(comment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

}
