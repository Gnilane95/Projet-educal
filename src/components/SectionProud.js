import React from 'react'
import CardProud from './CardProud';

export default function SectionProud() {
    const proud = [
      {
        src: "img/svgexport-11.png",
        nbr: "55,267",
        title: "Students Enrolled",
        id: 1,
      },
      {
        src: "img/svgexport-12.png",
        nbr: "397",
        title: "Total Courses",
        id: 2,
      },
      {
        src: "img/svgexport-13.png",
        nbr: "3,853",
        title: "Online Learners",
        id: 3,
      },
      {
        src: "img/svgexport-14.png",
        nbr: "32k",
        title: "Foreigns followers",
        id: 4,
      },
    ];
  return (
    <div className="py-32">
      <img src="img/yellow-bg.png" alt="" className="absolute right-1/3 " />
      <div className="text-center relative">
        <h2 className="text-textblue font-black text-4xl capitalize">
          We are proud
        </h2>
        <p className="pt-5 text-textgray font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-4 justify-center mx-48 pt-10">
        {proud.map((prouds) => {
          return (
            <CardProud
              src={prouds.src}
              nbr={prouds.nbr}
              title={prouds.title}
              key={prouds.id}
            />
          );
        })}
      </div>
    </div>
  );
}
