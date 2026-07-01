import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="items-center justify-center flex flex-col mt-30" id="download">
      <p className="text-center text-4xl font-bold">
        For the better experiences download <br /> Tomaoto App{" "}
      </p>
      <div className="flex mt-5 space-x-5">
        <img
          className="cursor-pointer transition duration-300 transform hover:scale-105"
          src={assets.play_store}
          alt=""
        />
        <img
          className="cursor-pointer transition duration-300 transform hover:scale-105"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
