import React from 'react'
import { BiHome } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { HiOutlineQrCode } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='navbar'>
      <BiHome  className='homenav'/>
      <FaHeart className='likenav'/>
      <HiOutlineQrCode className='qrnav'/>
      <HiOutlineCalendarDays className='calnav'/>
    </div>
  )
}

export default Navbar
