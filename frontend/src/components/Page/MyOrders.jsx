import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      <div className="space-y-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-lg p-4 shadow-sm bg-white"
          >
            {/* Left Icon */}
            <div className="flex items-center gap-4">
              <img
                src={assets.parcel_icon}
                alt="parcel"
                className="w-10 h-10"
              />

              {/* Order Items */}
              <p className="text-sm text-gray-600 max-w-md">
                {order.items.map((item, i) => (
                  <span key={i}>
                    {item.name} x {item.quantity}
                    {i !== order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>

            {/* Middle Info */}
            <div className="text-sm text-gray-700">
              <p className="font-medium">${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-gray-600">{order.status}</span>
            </div>

            {/* Button */}
            <button onClick={fetchOrders}
            className="px-4 py-2 bg-pink-100 text-pink-600 rounded-md text-sm hover:bg-pink-200 transition">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;