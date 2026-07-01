import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/search_icon.png";
import Basket from "../assets/basket_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "./context/StoreContext";
import { assets } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className="flex justify-between mt-5 items-center">
      <Link to="/"><img className="w-35" src={Logo} alt="" /></Link>

      <ul className="flex space-x-14 text-xl">
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "border-b-2" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "border-b-2" : "menu"}
        >
          Menu
        </a>
        <a
          href="#download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "border-b-2" : "mobile-app"}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "border-b-2" : "contact-us"}
        >
          Contact Us
        </a>
      </ul>

      <div className="flex space-x-12">
        <img className="w-5 h-9" src={Search} alt="" />
        <div className="relative">
          <Link to="/cart"><img src={Basket} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? <></> : "absolute w-3 h-3 bg-red-400 rounded-full bottom-5 ml-7"}></div>
        </div>

        {!token ? (
          <button
            className="border-2 rounded-4xl p-1 w-20 border-red-400 hover:bg-red-500 hover:text-white duration-300"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt=""
              className="cursor-pointer"
            />

            <ul className="absolute right-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-3 z-10 w-40">
              <li onClick={()=>navigate("/myorders")} className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>

              <hr />

              <li onClick={logout} className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
