import React, { useEffect } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "./Manish Nirmal.jpg"

function Banner() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="relative lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 flex flex-col-reverse lg:flex-row justify-between items-center lg:text-start lg:gap-28">
      {/* Left Side Content */}
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white z-10">
        <h1 data-aos="fade-right" className="text-[42px] md:text-[52px] font-semibold mb-8 leading-normal uppercase">
          Welcome to <span className="text-fuchsia-500">my website</span>
        </h1>
        <p data-aos="fade-left" className="max-w-md">
        Hi there! I'm <span className="text-fuchsia-500">Manish Nirmal</span >— a passionate <span className="text-fuchsia-500">UI/UX Designer and Software Developer.</span>
        This is my portfolio website where you can discover my journey, skills, and projects
        in the world of software development.
        </p>

        {/* Social Icons */}
        <div className="flex mt-8 gap-4">
          {[
            { href: "https://github.com/manishnirmal2962002", icon: <AiFillGithub /> },
            { href: "https://www.linkedin.com/in/manish-nirmal-satna-india/", icon: <FaLinkedin /> },
            { href: "#", icon: <FaInstagram /> },
            { href: "#", icon: <FaFacebook /> },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full p-2 glow"
            >
              {React.cloneElement(item.icon, { className: "text-[28px]" })}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div data-aos="fade-up" className="z-10">
        <img
          src={img}
          width={290}
          height={290}
          alt="Profile"
          className=" border-2 p-1 border-fuchsia-500 img_glow"
        />
      </div>
    </div>
  );
}

export default Banner;
