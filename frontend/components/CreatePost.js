import React, { useRef, useState } from 'react'
import {useSession} from "next-auth/react"
import Image from 'next/image';
import {HiOutlineVideoCamera} from "react-icons/hi"
import {IoMdPhotos} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"
import {RiDeleteBin6Line} from "react-icons/ri"
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addPost } from '../public/src/features/postSlice';


function CreatePost() {
    const Facebook_CLONE_ENDPOINT = "http://localhost:8080/api/v1/facebookpost";
    const { data: session, status } = useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const [imageToPost, setImageToPost] = useState(null);
    const dispatch = useDispatch();
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImageToPost(e.target.result);
            };
        }
    };
    const removeImage = () => {
        setImageToPost(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value)
            return;
        const formData = new FormData();
        formData.append("file", imageToPost);
        formData.append("post", inputRef.current.value);
        formData.append("name", session?.user.name);
        formData.append("email", session?.user.email);
        formData.append("profilePic", session?.user.image);

        axios.post(Facebook_CLONE_ENDPOINT, formData,{
            headers : {Accept: "application/json" },

        }).then( (response) => {
            inputRef.current.value = "";
            dispatch(addPost(response.data));
            removeImage();
        }).catch( (error) => {
            console.log(error);
        });
    };

    return (
        <div className="bg-white text-gray-500 rounded-md shadow-md p-2">
            <div className="flex p-4 space-x-2 items-center">
                <Image className="rounded-full cursor-pointer" src={session?.user.image} height={40} width={40} />
                <form className="flex flex-1">
                    <input ref={inputRef} className="flex-grow rounded-full focus:outline-none focus:shadow-md h-12 bg-gray-200 font-medium px-4" type="text" placeholder={`What's on your mind, ${session?.user.name.split(" ")[0]}`} />
                    <button hidden onClick={handleSubmit}></button>
                </form>
            </div>
            {imageToPost && (
                <div
                    onClick={removeImage}
                    className="flex items-center space-x-4 py-2 px-4 filter cursor-pointer transition duration-150 hover:brightness-110">
                    <img src={imageToPost} className="h-10 object-contain" />
                    <RiDeleteBin6Line className="h-8 hover:text-red-600" />
                </div>
            )}
            <div className="flex justify-evenly py-2">
                <div className=" flex rounded-full items-center hover:cursor-pointer hover:bg-gray-100 justify-center-pointer p-1 space-x-1">
                    <HiOutlineVideoCamera size={20} className="text-red-500" />
                    <p className="text-gray-500">Live video</p>
                </div>
                <div
                    onClick={handleClick}
                    className="flex rounded-full items-center hover:cursor-pointer hover:bg-gray-100 justify-center-pointer p-1 space-x-1">
                    <IoMdPhotos size={20} className="text-green-500" />
                    <p className="text-gray-500">Photo/Video</p>
                    <input onChange={addImageToPost} type="file" hidden ref={hiddenFileInput} accept="image/*" />
                </div>
                <div className="flex rounded-full items-center hover:cursor-pointer hover:bg-gray-100 justify-center-pointer p-1 space-x-1">
                    <BsEmojiSmile size={20} className="text-yellow-500" />
                    <p className="text-gray-500">Felling/Activity</p>
                </div>

            </div>
        </div>
    );
}

export default CreatePost