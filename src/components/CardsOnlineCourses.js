import React from 'react'
import { FiBook } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function CardsOnlineCourses({
  src,
  theme,
  p1,
  title,
  src2,
  name,
  price,
  price2,
  p2,
  textcolor,
  bg,
}) {
  return (
    <div className="bg-white rounded-xl mb-10 relative">
      <p
        className={`${bg} w-32 text-sm text-center px-4 rounded-md text-white font-semibold absolute mt-7 ml-7 `}
      >
        {theme}
      </p>
      <img className="rounded-t-lg " src={src} alt="home page" />
      <div className="p-8">
        <p className="flex items-center gap-2">
          <FiBook />
          <span className="text-[#6d6e75] text-md font-medium">{p1}</span>
        </p>
        <h3 className="text-[#2a3a57] font-bold text-2xl">{title}</h3>
        <div className="flex items-center pt-8 gap-4 pb-8">
          <img
            className="rounded-full border border-white shadow-lg shadow-gray-500"
            src={src2}
            alt=""
          />
          <span className="text-[#6d6e75] font-medium">{name}</span>
        </div>
        <hr className="" />
        <div className="flex justify-between  pt-4">
          <p className={`${textcolor} font-bold text-xl`}>
            {price}{" "}
            <span className="text-[#6d6e75] font-bold text-sm line-through">
              {price2}
            </span>
          </p>
          <div className="flex items-center">
            <span className=" text-[#2a3a57] font-bold pr-2">{p2}</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
