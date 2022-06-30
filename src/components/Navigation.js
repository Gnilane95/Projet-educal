import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
export default function Navigation() {
    const items = [
      {
        title: "Home",
        slug: "/",
        id: 1,
      },
      {
        title: "Courses",
        slug: "/courses",
        id: 2,
      },
      {
        title: "Blog",
        slug: "/blog",
        id: 3,
      },
      {
        title: "Contact",
        slug: "/contact",
        id: 4,
      },
    ];
  return (
    <header className="bg-bluehero  h-screen relative">
      <div className="">
        <Navcontainer className="flex justify-between py-8 px-36">
          <div>
            <Link to="/" className="flex w-18">
              <img className="w-6" src="img/logo-icon.png" alt="Logo Educal" />
              <img
                className="w-16"
                src="img/logo-text-2.png"
                alt="Logo Educal"
              />
            </Link>
          </div>
          <div className="flex gap-24 items-center">
            <ul className="flex gap-4">
              {items.map((item) => (
                <Link
                  className="items flex font-semibold"
                  to={item.slug}
                  key={item.id}
                >
                  <li> {item.title} </li>
                  <FaAngleDown className="mt-2 font-light" />
                </Link>
              ))}
            </ul>
            <div>
              <button className="bg-btnblue text-white px-10 py-2 rounded-md font-semibold">
                Sign-up
              </button>
            </div>
          </div>
        </Navcontainer>
        <div className="  ">
          <img
            src="img/why-shape-pink.png"
            alt=""
            className="w-14 ml-20 mt-36"
          />
          <img
            src="img/yellow-bg.png"
            alt=""
            className="absolute mt-24 ml-64"
          />
          <h1 className="absolute text-textblue font-black text-5xl ml-44  leading-tight">
            Launch your <br /> Own online learning <br /> Platform
          </h1>
          <h3 className="absolute text-textblue font-bold text-xl ml-44 mt-48">
            Unlimited acces to all 60+ instructors.
          </h3>
          <p className="absolute text-textblue ml-44 mt-56">
            2 passes (with access to all classes) for $240{" "}
          </p>

          <img
            src="img/why-shape-green.png"
            alt=""
            className="-rotate-90 absolute left-0 w-36 mt-36"
          />
          <img
            src="img/hero-shape-purple.png"
            alt=""
            className="absolute right-0 mr-36 top-80 w-1/3"
          />
          <img
            className="absolute bottom-0 right-0 w-96 mr-48"
            src="img/hero.png"
            alt="Educal"
          />
        </div>
      </div>
    </header>
  );
}
const Navcontainer = styled.nav`
  
  
`;
