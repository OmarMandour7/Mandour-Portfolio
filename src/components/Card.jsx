"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreen } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "Shoes Online Store UI",
    desc: "E-Commerce Shoes Store built with React, Bootstrap, and Dark Mode support. Includes product listing, modern UI, and responsive design.  ",
    img: "/Demo1.jpg",
    link: "https://github.com/OmarMandour7/megzzStore",
    demo: "https://megzz-store.vercel.app/",
  },
  {
    id: 2,
    title: "Dashboard Website",
    desc: "An Admin Dashboard built with React, Next.js, Axios, React Query, and TailwindCSS.Includes authentication, and responsive design for all devices." ,
    img: "/Demo2.jpg",
    link: "https://github.com/OmarMandour7/mandour-dashboard-ui",
    demo: "https://mandour-dashboard.netlify.app/",
  },
  {
    id: 3,
    title: "Movie Website",
    desc: "A Movie App built with React, Axios, TailwindCSS, and TMDB API. Browse movies, search by category, and view detailed information. ",
    img: "/Demo3.jpg",
    link: "https://github.com/OmarMandour7/Movies",
    demo: "https://mandour-movie.netlify.app/",
  },
  {
    id: 4,
    title: "React Commerce",
    desc: "A Full E-Commerce Website built with React.js, Bootstrap, Axios, and FakeBackend.  Features product catalog, cart system, and responsive layout. ",
    img: "/Demo4.jpg",
    link: "https://github.com/OmarMandour7/E-Commerce",
    demo: "",
  },

];

function Card() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-12 md:mx-0 max-w-3xl items-center justify-center ">
      {items.map((item) => (
        <div key={item.id} className="flex">
          <div className="card shadow-xl m-2 bg-opacity-20 bg-white">
            <Image
  src={item.img}
  alt={item.title}
  width={500}
  height={300}
  className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-t-xl"
/>

            <div className="card-body">
              <h2 className="card-title text-white">{item.title}</h2>
              <p className="text-white">{item.desc}</p>
              <div className="card-actions justify-center">
                <Link href={item.link} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg ring-1 ring-black bg-black text-white bg-opacity-60 hover:scale-[1.15] font-semibold rounded-full flex">
                    Github <FaGithub className="text-xl" />
                  </button>
                </Link>
                <Link href={item.demo} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-white bg-opacity-40 hover:scale-[1.15] font-semibold rounded-full flex">
                    Demo <PiProjectorScreen className="text-xl mx-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
