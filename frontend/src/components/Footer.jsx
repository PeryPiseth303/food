import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-500 w-full h-[300px] mt-30 flex justify-between text-white" id="footer">
      <div className="max-w-100 m-10 ml-50 ">
        <img className="w-40" src={assets.logo} alt="" />
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          eligendi atque voluptates in suscipit repellendus officia qui nobis?
          Laudantium, incidunt hic nesciunt corrupti vero aperiam id ex animi
          illo tempore.
        </p>
        <div className="flex space-x-2 mt-4">
          <img className="cursor-pointer"src={assets.facebook_icon} alt="" />
          <img className="cursor-pointer"src={assets.twitter_icon} alt="" />
          <img className="cursor-pointer"src={assets.linkedin_icon} alt="" />
        </div>
      </div>

      <div className="max-w-100 m-10">
        <p>COMPANY</p>
        <ul className="mt-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>

      <div className="max-w-100 m-10 mr-50 ">
        <h2 >GETR IN TOUCH</h2>
        <p className="mt-4">+855 964-076-840</p>
        <p>seth@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
