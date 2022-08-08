import Image from 'next/image'
import {HiOutlineSearch,HiOutlineHome} from "react-icons/hi"
import {RiFlag2Line} from "react-icons/ri"
import {MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md"
import {AiOutlineShop, AiFillMessage, AiFillBell} from "react-icons/ai"
import {IoGameControllerOutline} from "react-icons/io5"
import {CgMenuGridO} from "react-icons/cg"
import {useSession, signOut} from "next-auth/react"

import React from 'react'

const Header = () => {

   const{data : session} = useSession();
  return (
    <div className=" bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
        {/* Left elements */}
        <div className="flex min-w-fit">
<Image src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" height={40} width={40}/>
        </div>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
         <HiOutlineSearch size={20} />
            <input className="hidden lg:inline-flex focus:outline-none" type="text" placeholder="Search facebook"/>
                    </div>
        {/* Center element */}
        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
             <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                <HiOutlineHome className="mx-auto" size={25}/>
             </div>
            </div>
        </div>
        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
             <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                <RiFlag2Line className="mx-auto" size={25}/>
             </div>
            </div>
        </div>
        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
             <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                <MdOutlineOndemandVideo className="mx-auto" size={25}/>
             </div>
            </div>
        </div>

        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
             <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                <AiOutlineShop className="mx-auto" size={25}/>
             </div>
            </div>
        </div>

        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
             <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                <IoGameControllerOutline className="mx-auto" size={25}/>
             </div>
            </div>
        </div>
        {/* right elements */}
        <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image onClick={signOut} className="rounded-full cursor-pointer" src={session?.user.image} height={40} width={40}/>
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">{session?.user.name.split(" ")[0]}</p>
        <CgMenuGridO className="hidden lg:inline-flex h-10 w-10 bg-gray-200 
        text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/>
         <AiFillMessage className="hidden lg:inline-flex h-10 w-10 bg-gray-200 
        text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/>
         <AiFillBell className="hidden lg:inline-flex h-10 w-10 bg-gray-200 
        text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/>
         <MdOutlineExpandMore className="hidden lg:inline-flex h-10 w-10 bg-gray-200 
        text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/>
        </div>
        </div>
  )
}

export default Header