import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list,cartItems,url } = useContext(StoreContext);
  const navigate = useNavigate()

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }


  const placeOrder =async(event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData ={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    console.log(response.data);
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }else{
      alert("error")
    }
  }

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  })


  return (
    <form onSubmit={placeOrder} className="flex mt-30 justify-between">
      <div className="space-y-4">
        <p className="text-2xl font-bold">Delivery Information</p>

        <div className="mt-10 space-x-5">
          <input required name="firstName" value={data.firstName} onChange={onChangeHandler} className="border p-2 w-60 rounded-xl" type="text" placeholder="First name" />
          <input required name="lastName" value={data.lastName} onChange={onChangeHandler} className="border p-2 w-50 rounded-xl" type="text" placeholder="Last name" />
        </div>

        <div className="space-x-5 flex flex-col">
          <input required name="email" value={data.email} onChange={onChangeHandler} className="border p-2 w-full rounded-xl" type="email" placeholder="Email address" />
          <input required name="street" value={data.street} onChange={onChangeHandler} className="border p-2 w-full rounded-xl mt-5" placeholder="Street" />
        </div>

        <div className="space-x-5">
          <input required name="city" value={data.city} onChange={onChangeHandler} className="border p-2 w-60 rounded-xl" type="text" placeholder="City" />
          <input required name="state" value={data.state} onChange={onChangeHandler} className="border p-2 w-50 rounded-xl" type="text" placeholder="State" />
        </div>

        <div className="space-x-5">
          <input required name="zipcode" value={data.zipcode} onChange={onChangeHandler} className="border p-2 w-60 rounded-xl" type="text" placeholder="Zip code" />
          <input required name="country" value={data.country} onChange={onChangeHandler} className="border p-2 w-50 rounded-xl" type="text" placeholder="Country" />
        </div>

        <input required name="phone" value={data.phone} onChange={onChangeHandler} className="border p-2 w-full rounded-xl" type="text" placeholder="Phone" />
      </div>

      <div>
        <div className="space-y-4 w-130">
          <p className="text-2xl">Cart Totals</p>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? "0" : 2}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p>
              ${getTotalCartAmount() === 0 ? "0" : getTotalCartAmount() + 2}
            </p>
          </div>
          <button type="submit" className="mt-10 bg-red-400 text-white p-3 rounded-2xl cursor-pointer">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
