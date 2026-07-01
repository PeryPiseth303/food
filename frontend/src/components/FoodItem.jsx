import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./context/StoreContext";

const FoodItem = ({ id, name, image, description, price }) => {

  const { cartItems, setCartItems, addToCart, removeFromCart ,url } =useContext(StoreContext);
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition relative">
      <img src={url+"/image/"+image} alt={name} className="w-full h-52 object-cover" />

      {!cartItems[id] ? (
        <img
          className="absolute top-39 ml-70"
          onClick={() => addToCart(id)}
          src={assets.add_icon_white}
          alt=""
        />
      ) : (
        <div className="flex items-center space-x-2 mt-2 m-2 absolute top-40 ml-60 bg-red-400 rounded-2xl">
          <img
            onClick={() => removeFromCart(id)}
            src={assets.remove_icon_red}
          ></img>
          <p className="text-white">{cartItems[id]}</p>
          <img onClick={() => addToCart(id)} src={assets.add_icon_green}></img>
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">{name}</h3>

          <img src={assets.rating_starts} alt="" className="w-20" />
        </div>

        <p className="text-gray-500 text-sm mt-3">{description}</p>

        <p className="text-orange-500 font-bold text-2xl mt-4">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
