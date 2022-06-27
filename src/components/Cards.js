import React from 'react'

export default function Cards({ bg, src, title, description }) {
  return (
    <div className={`${bg} h-60 w-56 rounded-lg `}>
      <div className="p-9">
        <img className="w-10" src={src} alt="" />
        <div className="text-white pt-7">
          <h3 className="font-bold">{title}</h3>
          <p className="pt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
