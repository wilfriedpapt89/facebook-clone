import React from 'react'
import {RiVideoAddFill} from "react-icons/ri"
import {BiSearch} from "react-icons/bi"
import {CgMoreAlt} from "react-icons/cg"
import Contacts from './Contacts'

const RightSideBar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
            <p className="flex flex-grow text-lg font-semibold">Contacts</p>
            <div className="flex space-x-1 px-2">
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt />
                </div>
            </div>
        </div>
        <Contacts src="https://images.pexels.com/photos/13007364/pexels-photo-13007364.png?auto=compress&cs=tinysrgb&w=600&lazy=load" name="Wilfried ARAKAZA" />
        <Contacts src="https://images.pexels.com/photos/8434712/pexels-photo-8434712.jpeg?auto=compress&cs=tinysrgb&w=600" name="Robert SHAKA" />
        <Contacts src="https://images.pexels.com/photos/5961126/pexels-photo-5961126.jpeg?auto=compress&cs=tinysrgb&w=600" name="Carlos ITEKA" />
        <Contacts src="https://images.pexels.com/photos/6006080/pexels-photo-6006080.jpeg?auto=compress&cs=tinysrgb&w=600" name="Axel ISHIMWE" />
        <Contacts src="https://images.pexels.com/photos/6342547/pexels-photo-6342547.jpeg?auto=compress&cs=tinysrgb&w=600" name="Nicole NIMPAYE" />
    </div>
  )
}

export default RightSideBar