package com.akenge.backend.service;

import com.akenge.backend.domain.FacebookPost;
import com.akenge.backend.repository.FacebookPostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacebookPostServiceImpl implements FacebookPostService{


   private final FacebookPostRepository  facebookPostRepository;

    public FacebookPostServiceImpl(FacebookPostRepository facebookPostRepository) {
        this.facebookPostRepository = facebookPostRepository;
    }

    @Override
    public FacebookPost saveMyPost(FacebookPost facebookPost) {
       FacebookPost savedFacebookPost = facebookPostRepository.save(facebookPost);
        return savedFacebookPost;
    }

    @Override
    public List<FacebookPost> getAllMyPost() {
        List<FacebookPost> allMyFacebookPosts = facebookPostRepository.findAll();
        return allMyFacebookPosts;
    }
}
