import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function SectionTools() {
  return (
    <div className=''>
      <img src="img/yellow-bg.png" alt="" className="absolute  ml-96 mt-44" />
      <div className="flex items-center px-72 gap-6 relative">
        <div className="">
          <p className="capitalize text-[#3b60ff] font-medium">
            Why chooses me
          </p>
          <h2 className="text-textblue font-black text-4xl capitalize">
            Tools for teachers and Learners
          </h2>
          <p className="pt-5 text-[#6d6e75] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            nobis consequuntur repellendus similique at? Cumque, aliquam odio
            nihil ipsum repellendus .
          </p>
          <div className="flex items-center mt-5">
            <button className="bg-btnblue text-white px-10 py-4 rounded-md font-semibold">
              Join for free
            </button>

            <button className="text-textblue font-bold pl-10 capitalize pr-2">
              Learn more
            </button>
            <FaArrowRight />
          </div>
        </div>
        <img src="img/why.png" alt="about" className="w-2/3 rounded-lg" />
      </div>
    </div>
  );
}
