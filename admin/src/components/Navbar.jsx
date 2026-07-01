import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex mt-2 justify-between w-[80%] m-auto mb-2 items-center'>
      <img className='w-35' src={assets.logo} alt="" />
      <img className='w-12 h-14' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar