import React from 'react'
import styled from "styled-components";


export default function CardsSkil({bg, title, btn}) {
  return (
    <Sectionskill>
      <div
        className={`card ${bg} text-center text-white pt-32 h-1/2 rounded-lg relative bg-cover`}
      >
        <div className="overlay top-0 "></div>
        <div className="relative z-50">
          <h2 className="font-bold text-3xl">{title}</h2>
          <button className="border-2 rounded-md p-2 mt-5">{btn}</button>
        </div>
      </div>
    </Sectionskill>
  );
}
const Sectionskill = styled.div`
  .card {
    height: 50vh;
    border-radius: 15px;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .overlay {
    background-color: #0e1133;
    border-radius: 15px;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
