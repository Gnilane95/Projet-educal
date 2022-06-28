import React from 'react'

export default function SectionTools() {
  return (
    <div>
      <div className="flex items-center px-72 gap-6">
        <div className="">
          <p className="capitalize text-[#3b60ff] font-medium">Why chooses me</p>
          <h2 className="text-[#0e1133] font-black text-4xl capitalize">
            Tools for teachers and Learners
          </h2>
          <p className="pt-5 text-[#6d6e75]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            nobis consequuntur repellendus similique at? Cumque, aliquam odio
            nihil ipsum repellendus .
          </p>
          <button className="border-2 p-2 px-6 mt-5 rounded-md font-semibold text-[#0e1133]">
            Apply now
          </button>
        </div>
        <img src="img/why.png" alt="about" className="w-2/3 rounded-lg" />
      </div>
    </div>
  );
}
