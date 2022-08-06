import Image from 'next/image'
import React from 'react'
import {ImUsers} from "react-icons/im"
import SidebarItem from './SidebarItem'
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import {BsStopwatch} from "react-icons/bs"

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
        
        <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" 
        className="rounded-full cursor-pointer" height={40} width={40}/>
        <p className="hidden sm:inline-flex font-medium">Wilfried ARAKAZA</p>
        </div>
        <SidebarItem Icon={ImUsers} value="Friends"/>
        <SidebarItem Icon={MdGroups} value="Groups"/>
        <SidebarItem Icon={AiOutlineShop} value="Marketplace" />
        <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
        <SidebarItem Icon={BsStopwatch} value="Memories" />
        <SidebarItem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  )
}

export default Sidebar