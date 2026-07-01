import React from "react";

const Header = () => {
  return (
    <div className="bg-[url('/header_img.png')] mx-auto h-[34vw] rounded-2xl bg-no-repeat my-[30px] relative">
      <div className="absolute mt-[10vw] m-10 text-white animate-fade-in duration-200">
        <h2 className="font-bold text-8xl">Order your <br /> favorite food here</h2>
        <p className="text-2xl mt-4">
          Choose the food that you want and make <br /> the you feeling fresh and
          healty make you good.
        </p>
        <button className="mt-10 bg-orange-400 p-4 rounded-full font-bold">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
