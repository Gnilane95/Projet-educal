import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <header className="">
      <div className="bg-[#b8dde3] ">
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
          <div>
            <ul className="flex gap-4">
              {items.map((item) => (
                <Link className="items" to={item.slug} key={item.id}>
                  <li> {item.title} </li>
                </Link>
              ))}
            </ul>
          </div>
        </Navcontainer>
        <div className="">
          <img className="" src="img/hero.png" alt="Educal" />
        </div>
      </div>
    </header>
  );
}
const Navcontainer = styled.nav`
  
  
`;
