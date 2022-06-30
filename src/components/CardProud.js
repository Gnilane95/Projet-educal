import React from 'react'

export default function CardProud({src, nbr, title}) {
  return (
    <div className="">
      <div className="">
        <div>
          <img className="w-10" src={src} alt="" />
        </div>
        <div className="">
          <p className="font-black text-2xl text-textblue">{nbr}</p>
          <p className="text-textgray font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
}
