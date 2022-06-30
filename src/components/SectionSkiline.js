import React from 'react'
import CardsSkil from './CardsSkil';

export default function SectionSkiline() {
    const skill = [
      {
        bg: "bg-[url('../public/img/course-4.jpg')]",
        title: "Mostly Online Learning",
        btn: "Start a class today",
        id: 1,
      },
      {
        bg: "bg-[url('../public/img/what-2.jpg')]",
        title: "Become an instructor",
        btn: "Start teaching",
        id: 2,
      },
    ];
  return (
    <div className="px-36 py-32">
      <img src="img/yellow-bg.png" alt="" className="absolute mt-8 ml-96" />
      <div className="text-center relative">
        <h2 className="text-[#0e1133] font-bold text-5xl">
          What is Skilline ?
        </h2>
        <p className="px-80 text-[#2a3a57] font-medium pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid non
          est obcaecati accusamus cupiditate suscipit quam assumenda impedit
          dolorum voluptatem distinctio sapiente nemo, corrupti quaerat ad
          reprehenderit. soluta!
        </p>
      </div>
      <div className=" pt-20 grid grid-cols-2 gap-10">
        {skill.map((skills) => (
          <CardsSkil
            bg={skills.bg}
            title={skills.title}
            btn={skills.btn}
            key={skills.id}
          />
        ))}
      </div>
    </div>
  );
}

