import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="w-[300px] border-r-1 max-h-full border-t-0">
      <div className='pt-[50px] pl-[20%] flex flex-col gap-[20px] mr-5'>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-solid  p-2 rounded cursor-pointer 
          ${isActive ? "bg-orange-100 border-orange-500" : ""
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p>Add</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-solid p-2 rounded cursor-pointer
           ${isActive ? "bg-orange-100 border-orange-500" : ""
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-solid p-2 rounded cursor-pointer 
          ${isActive ? "bg-orange-100 border-orange-500" : ""
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p>Order Items</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar