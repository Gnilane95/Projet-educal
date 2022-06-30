import React from 'react'
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function SectionJason() {
  return (
    <Sectionjas>
      <div className="bgrd text-center bg-[url('../public/img/course-6.jpg')] bg-cover">
        <div className="bg-bluecard overlay"></div>
        <div className="flex justify-center">
          <FaArrowLeft className="relative z-50 text-white  mt-80 mr-48" />
          <div className="text-white relative z-50 pt-52">
            <img
              src="img/testi-1.jpg"
              alt=""
              className="rounded-full mx-auto"
            />
            <p className="text-3xl font-semibold">
              "Barmy loo sloshed porkiesdo with me down <br /> the pub say
              bubble and squeak."
            </p>
            <p className="font-black text-md pt-2">Jason Response</p>
            <p className="text-sm pt-2">UX Designer</p>
          </div>
          <FaArrowRight className="relative z-50 text-white mt-80 ml-48 " />
        </div>
      </div>
    </Sectionjas>
  );
}
const Sectionjas = styled.div`
  .bgrd {
    height: 80vh;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .overlay {
    border-radius: 15px;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
