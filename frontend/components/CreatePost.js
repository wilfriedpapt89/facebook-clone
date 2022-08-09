import React from 'react'
import {useSession} from "next-auth/react"
import Image from 'next/image';
import {HiOutlineVideoCamera} from "react-icons/hi"
import {IoMdPhotos} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"

const CreatePost = () => {

    const {data:session} = useSession();
  return (
    <div className="bg-white text-gray-500 rounded-md shadow-md p-2">
        <div className="flex p-4 space-x-2 items-center">
        <Image className="rounded-full cursor-pointer" src={session?.user.image} height={40} width={40}/>
        <form className="flex flex-1">
        <input className="flex-grow rounded-full focus:outline-none focus:shadow-md h-12 bg-gray-200 font-medium px-4" type="text" placeholder={`What's on your mind, ${session?.user.name.split(" ")[0]}`}/>
        </form>
        </div>

        <div className="flex justify-evenly py-2">
            <div className=" flex rounded-full items-center hover:cursor-pointer hover:bg-gray-100 justify-center-pointer p-1 space-x-1">
                <HiOutlineVideoCamera size={20} className="text-red-500"/>
                <p className="text-gray-500">Live video</p>
            </div>
            <div className="flex rounded-full items-center hover:cursor-pointer hover:bg-gray-100 justify-center-pointer p-1 space-x-1">
                <IoMdPhotos size={20} className="text-green-500"/>
                <p className="text-gray-500">Photo/Video</p>
            </div>
            <div className="flex rounded-full items-center hover:cursor-pointer hover:bg-gray-100 justify-center-pointer p-1 space-x-1">
                <BsEmojiSmile size={20} className="text-yellow-500"/>
                <p className="text-gray-500">Felling/Activity</p>
            </div>
          
        </div>
    </div>
  )
}

export default CreatePost