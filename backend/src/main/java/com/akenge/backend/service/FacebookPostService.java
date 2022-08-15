package com.akenge.backend.service;

import com.akenge.backend.domain.FacebookPost;

import java.util.List;

public interface FacebookPostService {

    public FacebookPost saveMyPost(FacebookPost facebookPost);
    public List<FacebookPost> getAllMyPost();
}
