import React from 'react'
import Cards from '../components/Cards'

export default function Home() {
  const datas = [
    {
      bg: "bg-[#3b60ff]",
      src: "img/svgexport-7.png",
      title: "4,000 Online courses",
      description: "Arse over tite morish wind up gormless butty.!",
      id: 1,
    },
    {
      bg: "bg-[#f2277e]",
      src: "img/svgexport-8.png",
      title: "Job placement support",
      description: "Arse over tite morish wind up gormless butty.!",
      id: 2,
    },
    {
      bg: "bg-[#8007e6]",
      src: "img/svgexport-9.png",
      title: "Lifetime Slack chat support",
      description: "Arse over tite morish wind up gormless butty.!",
      id: 3,
    },
    {
      bg: "bg-[#0cae74]",
      src: "img/svgexport-10.png",
      title: "Research and innovation",
      description: "Arse over tite morish wind up gormless butty.!",
      id: 4,
    },
  ];
  const datascourses = [
    {

    }
  ]
  return (
    <main className="py-20">
      <div>
        <h1 className="text-center ">
          <p className="text-[#0e1133] font-black text-5xl ">
            Why an Scholercity Out <br /> Of the Ordinary
          </p>
          <img src="img/yellow-bg.png" alt="" className=" " />
        </h1>
        <h2 className="text-center text-[#0e1133]">
          You don't have to struggle alone, you've got your assistance and help.
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-4 px-36 mt-6">
          {datas.map((data) => {
            return (
              <Cards
                bg={data.bg}
                src={data.src}
                title={data.title}
                description={data.description}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
      <div className="flex align-items-center px-96 py-48 gap-24">
        <img src="img/about.jpg" alt="about" className="w-72 rounded-lg" />
        <div className="pt-6">
          <h2 className="text-[#0e1133] font-black text-3xl capitalize">
            <span className='text-2.5xl'>Achieve your</span> <br /> goals with educal
          </h2>
          <p className="pt-5 text-[#6d6e75]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            nobis consequuntur repellendus similique at? Cumque, aliquam odio
            nihil ipsum repellendus .
          </p>
          <ul className="pt-5">
            <li>Upskill your organization.</li>
            <li>Acces more then 100K online courses</li>
            <li>Learn the latest skills</li>
          </ul>
          <button className='border-2 p-2 px-6 mt-5 rounded-md'>Apply now</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <h3>Become a product Manager learn the skills and job.</h3>
        <img src="" alt="" /> <span>Jim Séchen</span>
        <p>Free <span>Knows details</span> </p>

      </div>
    </main>
  );
}
