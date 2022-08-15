package com.akenge.backend.domain;

import javax.persistence.*;

@Entity
public class FacebookPost {

    public FacebookPost() {
    }

    public FacebookPost(String post, String name, String email, String image, String profilePic, String timeStamp) {
        this.post = post;
        this.name = name;
        this.email = email;
        this.image = image;
        this.profilePic = profilePic;
        this.timeStamp = timeStamp;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    private String post;
    private String name;
    private String email;
    @Lob
    private String image;
    private String profilePic;
    private String timeStamp;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }
}
