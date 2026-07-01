import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.data) {
      setOrders(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };


  const statusHandler = async(event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchOrders();
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">Order Page</h2>

      <div className="space-y-5">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start justify-between gap-6 border rounded-lg p-5 shadow-sm bg-white"
          >
            {/* Left side icon */}
            <img
              src={assets.parcel_icon}
              alt="parcel"
              className="w-12 h-12"
            />

            {/* Middle content */}
            <div className="flex-1 text-sm text-gray-700 space-y-2">
              {/* Items */}
              <p className="font-medium text-gray-900">
                {order.items.map((item, i) => (
                  <span key={i}>
                    {item.name} x {item.quantity}
                    {i !== order.items.length - 1 && ", "}
                  </span>
                ))}
              </p>

              {/* Name */}
              <p className="text-gray-600 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>

              {/* Address */}
              <p className="text-gray-500">
                {order.address.street}, {order.address.city},{" "}
                {order.address.state}, {order.address.country},{" "}
                {order.address.zipcode}
              </p>

              {/* Phone */}
              <p className="text-gray-500">{order.address.phone}</p>

              {/* Meta */}
              <div className="flex gap-6 text-gray-500 pt-2">
                <p>Items: {order.items.length}</p>
                <p className="font-semibold text-gray-800">
                  ${order.amount}
                </p>
              </div>
            </div>

            {/* Right side status */}
            <div>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.state}
                className="border px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-orange-300"
                defaultValue="Food Processing"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;