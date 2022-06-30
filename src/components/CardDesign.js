import React from 'react'
import { MdUpdate } from "react-icons/md";

export default function CardDesign({ src, theme, title, src2, date, name, textcolor, bg  }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl ">
      <img className="rounded-t-lg " src={src} alt="home page" />
      <div className=" px-8 py-5">
        <p
          className={`${bg} ${textcolor} bg-opacity-20 px-1 text-sm text-center  rounded-md text-white font-semibold 
          absolute  `}
        >
          {theme}
        </p>
        <h3 className="text-[#2a3a57] font-bold pt-6 text-2xl">{title}</h3>
        <div className="flex items-center justify-between pt-8 pb-8">
          <div className='flex items-center gap-3'>
            <img
              className="rounded-full border border-white shadow-lg shadow-gray-500"
              src={src2}
              alt=""
            />
            <span className="text-[#6d6e75] font-medium">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdUpdate />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
