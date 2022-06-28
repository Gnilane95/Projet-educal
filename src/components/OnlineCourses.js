import React from 'react'
import CardsOnlineCourses from "../components/CardsOnlineCourses";
import {Link} from "react-router-dom";

export default function OnlineCourses() {
    const items = [
      {
        name: "See all",
        slug: "/",
        id: 1,
      },
      {
        name: "Trending",
        slug: "/",
        id: 2,
      },
      {
        name: "Popularity",
        slug: "/",
        id: 3,
      },
      {
        name: "featured",
        slug: "/",
        id: 4,
      },
      {
        name: "Art & Design",
        slug: "/",
        id: 5,
      },
    ];
    const onlinecourses = [
      {
        src: "img/course-1.jpg",
        p1: "43 Lesson",
        title: "Become a product Manager learn  the skills and job.",
        src2: "img/teacher-1.jpg",
        name: "Jim Séchen",
        price: "Free",
        p2: "Knows details",
        textcolor: "text-[#b128ff]",
        id: 1,
      },
      {
        src: "img/course-2.jpg",
        p1: "72 Lesson",
        title: "Fundamentals of music theory Learn new",
        src2: "img/teacher-2.jpg",
        name: "Barry Tone",
        price: "$32.00",
        price2: "$68.00",
        p2: "Knows details",
        textcolor: "text-[#0fa0fd]",
        id: 2,
      },
      {
        src: "img/course-3.jpg",
        p1: "14 Lesson",
        title: "Startegy low and ordanization Foudation",
        src2: "img/teacher-3.jpg",
        name: "Elon Gate",
        price: "$46.00",
        price2: "$68.00",
        p2: "Knows details",
        textcolor: "text-[#30a820]",
        id: 3,
      },
      {
        src: "img/course-6.jpg",
        p1: "13 Lesson",
        title: "Creative writing through Storytelling",
        src2: "img/teacher-6.jpg",
        name: "Shahnewaz Sakil",
        price: "$46.00",
        price2: "$72.00",
        p2: "Knows details",
        textcolor: "text-[#dd246e]",
        id: 4,
      },
      {
        src: "img/course-4.jpg",
        p1: "22 Lesson",
        title: "The business inteligence analyst Course 2022",
        src2: "img/teacher-4.jpg",
        name: "Eleanor Fant",
        price: "$62.00",
        price2: "$97.00",
        p2: "Knows details",
        textcolor: "text-[#3b60ff]",
        id: 5,
      },
      {
        src: "img/course-5.jpg",
        p1: "18 Lesson",
        title: "Build your media and public presence",
        src2: "img/teacher-5.jpg",
        name: "Pelican Steve",
        price: "$62.00",
        price2: "$97.00",
        p2: "Knows details",
        textcolor: "text-[#fa7919]",
        id: 6,
      },
    ];
  return (
    <div className="px-36 bg-[#d7d9e3] py-32">
      <div className="">
        <h2 className="text-[#0e1133] font-black text-4xl capitalize">
          Find the right <br /> online course for you
        </h2>
      </div>
      <div className="flex justify-between">
        <p className="text-[#0e1133] pt-4">
          You don't have to struggle alone, you've got your assistance and help.
        </p>
        <ul className="flex gap-11 pt-4 font-bold text-md">
          {items.map((item) => (
            <Link className="items" to={item.slug} key={item.id}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 pt-10 gap-5">
        {onlinecourses.map((courses) => {
          return (
            <CardsOnlineCourses
              src={courses.src}
              p1={courses.p1}
              title={courses.title}
              src2={courses.src2}
              name={courses.name}
              price={courses.price}
              price2={courses.price2}
              p2={courses.p2}
              textcolor={courses.textcolor}
              key={courses.id}
            />
          );
        })}
      </div>
    </div>
  );
}
