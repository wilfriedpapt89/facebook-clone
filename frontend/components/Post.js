import Image from 'next/image'
import React from 'react'
import {FiThumbsUp} from "react-icons/fi"
import {FaRegCommentAlt} from "react-icons/fa"
import {RiShareForwardLine} from "react-icons/ri"

const Post = ({post}) => {
  return (
    <div className="flex flex-col" key={post.id}>
        <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
        <Image src={post.profilePic} height={40} width={40}/>
        <div> 
            <p className="font-medium">{post.name}</p>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
        
        </div>
        <p className="py-4">{post.post}</p>
        </div>
        {/* If any image */}
        {post.image != null && (<div className="relative h-60 md:h-96 bg-white">
            <Image src={post.image} layout="fill" objectFit="cover"/>
        </div>)}
        
        {/*Footer*/}
        <div className="flex items-center justify-center p-2 bg-white">
            <div className="flex flex-grow justify-center items-center space-x-1 hover:bg-gray-100 hover:cursor-pointer rounded-xl hover:text-blue-600">
                <FiThumbsUp className="h-4"/>
                <p className="text-sm sm:text-base">Like</p>
            </div>
            <div className="flex flex-grow justify-center items-center space-x-1 hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                <RiShareForwardLine className="h-4"/>
                <p className="text-sm sm:text-base">Share</p>
            </div>
            <div className="flex flex-grow justify-center items-center space-x-1 hover:bg-gray-100 hover:cursor-pointer rounded-xl">
                <FaRegCommentAlt className="h-4"/>
                <p className="text-sm sm:text-base">Comment</p>
            </div>
        </div>
    </div>
  );
};

export default Post