import React, { Fragment } from "react";
import Image from "next/image";
import Profile from "../images/profile.jpg";

const SocialCard = () => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="h-screen w-96 bg-slate-900 p-6 pt-8">
          {/* image */}
          <div className="flex justify-center">
            <Image
              className="rounded-full"
              src={Profile}
              width={100}
              height={100}
            ></Image>
          </div>
          {/* image text */}
          <div>
            <h1 className="text-capitalize font-bold text-xl text-center text-white mt-4">
              Ariful Hossain Anuwar
            </h1>
            <h2 className="text-capitalize font-semibold text-center text-lime-400">
              Mymensingh,Bangladesh
            </h2>
          </div>
          {/* Profile link here */}
          <div>
            <h2 className="font-bold text-center text-xl py-4 text-white">
              Fontend Developer here
            </h2>
            <div className="bg-slate-800 text-white py-2 text text-center rounded mt-3">
              <a href="#">Github</a>
            </div>
            <div className="bg-slate-800 text-white py-2 text text-center rounded mt-3">
              <a href="#">Twitter</a>
            </div>
            <div className="bg-slate-800 text-white py-2 text text-center rounded mt-3">
              <a href="#">Youtube</a>
            </div>
            <div className="bg-slate-800 text-white py-2 text text-center rounded mt-3">
              <a href="#">Facebook</a>
            </div>
            <div className="bg-slate-800 text-white py-2 text text-center rounded mt-3">
              <a href="#">Fontend Mentor</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SocialCard;
