package com.akenge.backend.controller;

import com.akenge.backend.domain.FacebookPost;
import com.akenge.backend.service.FacebookPostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/facebookpost")
@CrossOrigin("http://localhost:3000")
public class FacebookCPostController {

    private final FacebookPostService facebookPostService;

    public FacebookCPostController(FacebookPostService facebookPostService) {
        this.facebookPostService = facebookPostService;
    }

    @PostMapping("saveMyPost")
    public ResponseEntity<FacebookPost> addPost(@RequestParam Map<String, String> requestParam){

        String post = requestParam.get("post");
        String name = requestParam.get("name");
        String email = requestParam.get("email");
        String file = requestParam.get("file");
        String profilePic = requestParam.get("");

        FacebookPost facebookPost = new FacebookPost(post,name,email,file,profilePic, new Date().toString());

        FacebookPost savedFacebookPost = facebookPostService.saveMyPost(facebookPost);
        if(savedFacebookPost != null)
            return ResponseEntity.ok(facebookPost);
        else
            return ResponseEntity.status(500).body(facebookPost);
    }

    @GetMapping()
    public List<FacebookPost> getAllPost(){
        return facebookPostService.getAllMyPost();
    };
}
