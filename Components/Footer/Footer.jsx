import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaRegCircle } from "react-icons/fa6";
import {} from "../../App.css"
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <section>
    <div class="bottom-bar text-2xl">
    <span>
       <NavLink to=""> <TiHome /></NavLink>
    </span>
    <span>
       <NavLink> <IoSearch /></NavLink>
    </span>
    <span>
       <NavLink> <FaRegSquarePlus /></NavLink>
    </span>
    <span>
       <NavLink> <TfiVideoClapper /></NavLink>
    </span>
    <span>
      <NavLink to="/Profile"> <FaRegCircle /> </NavLink> 
      </span>
    </div>
    </section>
  )
}

export default Footer
