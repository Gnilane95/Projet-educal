import React from 'react'
import { Link } from "react-router-dom";

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
      }
    ];
  return (
    <header>
      <nav>
        <div>
          <Link>
            <img src="logo (1).png" alt="Logo Educal" />
          </Link>
        </div>
        <div>
          <ul>
            {items.map ((item)=>(
            <Link className='items' to={item.slug} key={item.id} >
              <li> {item.title} </li>
            </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
