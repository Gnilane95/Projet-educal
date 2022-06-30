import React from 'react'
import CardDesign from "../components/CardDesign";
export default function SectionDesign() {
    const design = [
      {
        src: "img/blog-1.jpg",
        theme: "Art & Design",
        title: "The chalenge of global learning In public education.",
        src2: "img/teacher-1.jpg",
        name: "Jim Séchen",
        date: "April 02, 2022",
        textcolor: "text-textbluees2",
        bg: "bg-textbluees2",
        id: 1,
      },
      {
        src: "img/blog-2.jpg",
        theme: "Marketing",
        title: "Exactly how technology can make reading better",
        src2: "img/teacher-2.jpg",
        name: "Barry Tone",
        date: "July 02, 2022",
        textcolor: "text-bgmauve",
        bg: "bg-bgmauve",
        id: 2,
      },
      {
        src: "img/blog-3.jpg",
        theme: "UX Design",
        title: "New Chicago school budget relies on state pension",
        src2: "img/teacher-3.jpg",
        name: "Barry Tone",
        date: "July 02, 2022",
        textcolor: "text-textpink",
        bg: "bg-textpink",
        id: 3,
      },
    ];
  return (
    <div className="py-32">
      <div className="text-center">
        <h2 className="text-[#0e1133] font-black text-4xl capitalize">
          We share <br /> Our thoughts on design
        </h2>
        <p className="px-80 text-[#2a3a57] font-medium pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-3 pt-10 gap-10 mx-36">
        {design.map((sectdesign) => {
          return (
            <CardDesign
              src={sectdesign.src}
              theme={sectdesign.theme}
              title={sectdesign.title}
              src2={sectdesign.src2}
              date={sectdesign.date}
              name={sectdesign.name}
              textcolor={sectdesign.textcolor}
              bg={sectdesign.bg}
              key={sectdesign.id}
            />
          );
        })}
      </div>
    </div>
  );
}
