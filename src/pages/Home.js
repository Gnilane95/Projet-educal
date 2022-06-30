import React from 'react'
import Cards from '../components/Cards'
import {FcApproval} from 'react-icons/fc'
import OnlineCourses from '../components/OnlineCourses';
import SectionSkilline from "../components/SectionSkiline";
import SectionTools from "../components/SectionTools";
import SectionProud from '../components/SectionProud';
import SectionJason from '../components/SectionJason';
import SectionDesign from '../components/SectionDesign';
import Footer from '../components/Footer';

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
    return (
      <div>
        <main className="py-20 ">
          {/* Bloc card "scholercity..." */}
          <img
            src="img/yellow-bg.png"
            alt=""
            className="absolute  ml-96 mt-10"
          />
          <div className="relative">
            <h2 className="text-center ">
              <p className="text-[#0e1133] font-black text-5xl leading-tight capitalize ">
                Why an scholercity out <br /> of the ordinary
              </p>
            </h2>
            <p className="text-center text-[#0e1133]">
              You don't have to struggle alone, you've got your assistance and
              help.
            </p>
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
          {/* End Bloc card "scholercity..." */}
          {/* Bloc  "achieve..." */}
          <div className="flex align-items-center px-96 py-48 gap-24">
            <img src="img/about.jpg" alt="about" className="w-72 rounded-lg" />
            <img
              src="img/yellow-bg.png"
              alt=""
              className="absolute w-56 ml-80 mt-20"
            />
            <div className="pt-6 relative">
              <h2 className="text-[#0e1133] font-black text-3xl capitalize ">
                <span className="text-2.5xl">Achieve your</span> <br /> goals
                with educal
              </h2>
              <p className="pt-5 text-[#6d6e75]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                nobis consequuntur repellendus similique at? Cumque, aliquam
                odio nihil ipsum repellendus .
              </p>
              <ul className="pt-5">
                <li className="flex justify-items-center font-semibold text-[#0e1133] gap-2">
                  <FcApproval /> Upskill your organization.
                </li>
                <li className="flex justify-items-center font-semibold text-[#0e1133] gap-2">
                  <FcApproval />
                  Acces more then 100K online courses
                </li>
                <li className="flex justify-items-center font-semibold text-[#0e1133] gap-2">
                  <FcApproval />
                  Learn the latest skills
                </li>
              </ul>
              <button className="border-2 p-2 px-6 mt-5 rounded-md font-semibold text-[#0e1133]">
                Apply now
              </button>
            </div>
          </div>
          {/* End Bloc  "achieve..." */}
          {/* Bloc card "Online courses..." */}
          <OnlineCourses />
          {/* End bloc card "Online courses..." */}
          {/* Bloc card "Skilline..." */}
          <SectionSkilline />
          {/* End bloc card "Skilline..." */}
          {/* Bloc card "Skilline..." */}
          <SectionTools />
          {/* End bloc card "Skilline..." */}
          {/* SEction  "Proud..." */}
          <SectionProud />
          {/* End bloc "Proud..." */}
          {/* SEction  "Jason Response..." */}
          <SectionJason />
          {/* End bloc "Jason Response..." */}
          {/* SEction  "design..." */}
          <SectionDesign />
          {/* End bloc "design..." */}
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
}
