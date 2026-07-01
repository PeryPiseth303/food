import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./context/StoreContext";
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("Sign Up");


  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }


  const onLogin = async (event) =>{
    event.preventDefault()
    let newUrl = url;
    
    if(currentState==="Login"){
      newUrl += "/api/user/login"
    }
    else{
       newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data)

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }



  return (
    <div className="fixed inset-0 z-10 bg-black/60 grid place-items-center">
      <form onSubmit={onLogin} className="bg-white w-[90%] max-w-[400px] rounded-lg p-6 flex flex-col gap-5 shadow-xl">

        <div className="flex justify-between items-center">
          <p className="text-3xl font-semibold">{currentState}</p>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-4">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="border border-gray-300 rounded px-3 py-2 outline-none"
              type="text" name="name" onChange={onChangeHandler} value={data.name}
              placeholder="Your name"
              required
            />
          )}

          <input
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            type="email" name="email" onChange={onChangeHandler} value={data.email}
            placeholder="Your email"
            required
          />

          <input
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            type="password" name="password" onChange={onChangeHandler} value={data.password}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="bg-orange-500 text-white py-3 rounded cursor-pointer hover:bg-orange-600 transition">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <input className="mt-1" type="checkbox" />
          <p>check here to share your information.</p>
        </div>

        {currentState === "Login" ? (
          <p className="text-sm text-gray-600">
            Create a new account{" "}
            <span
              className="text-orange-500 font-medium cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Already have account{" "}
            <span
              className="text-orange-500 font-medium cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
