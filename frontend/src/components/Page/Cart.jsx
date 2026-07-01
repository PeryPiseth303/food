import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,url
  } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="mt-20">
      <div className="grid grid-cols-6 items-center text-center font-semibold">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className="my-4" />

      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index}>
              <div className="grid grid-cols-6 items-center text-center py-4">
                <img className="w-20 mx-auto" src={url+"/image/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${cartItems[item._id] * item.price}</p>
                <p
                  className="cursor-pointer"
                  onClick={() => removeFromCart(item._id)}
                >
                  X
                </p>
              </div>
              <hr />
            </div>
          );
        }
      })}

      <div className="flex justify-between mt-30">

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
          <button className="mt-10 bg-red-400 text-white p-3 rounded-2xl cursor-pointer"
          onClick={()=>navigate('/order')}>
            PROCEED TO CHECKOUT
          </button>
        </div>



        <div>
          <p>if you have a promo code, Enter it here</p>
          <div>
            <input className="bg-gray-300 rounded-lg p-3 w-120" type="text" placeholder="promo code" />
            <button className="text-white bg-gray-950 p-3 rounded-lg">Submit</button>
          </div>
        </div>


      </div>


    </div>
  );
};

export default Cart;
