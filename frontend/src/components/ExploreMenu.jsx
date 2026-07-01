import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="mt-10" id="menu">
      <div>
        <h2 className="text-4xl">Explore our menu</h2>
        <p className="mt-2 text-xl"> Choose the food that you want and make the you feeling fresh and
        healty make you good.</p>
      </div>
      <div className="flex mt-10 space-x-13">
        {menu_list.map((item,index)=>{
            return(
            <div onClick={()=>setCategory((pre)=>pre===item.menu_name?"All":item.menu_name)} key={index}>
                <img className={category===item.menu_name?"border-4 border-red-300 rounded-full p-1 w-32":""} src={item.menu_image} alt="" />
                <p className="ml-10 mt-2">{item.menu_name}</p>
            </div>
        )})}
      </div>
    </div>
  );
};

export default ExploreMenu;
