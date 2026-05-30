import React from "react";
import { Link } from "react-router-dom"; // Routing ke liye
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import resume from "./manish nirmal fullstack.pdf";
import img from "./Manish Nirmal.jpg";

function About() {
  return (
    <div id="About" className="">
      <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">

        {/* Image Section */}
        <img
          data-aos="fade-down"
          src={img}
          width={290}
          height={290}
          alt=""
          className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        />

        {/* Text Section */}
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
          >
            About me
          </h1>

          <p data-aos="fade-left">
            Hi, I'm Manish Nirmal! I'm a passionate UI-UX Designer and
            Frontend Developer. I specialize in creating beautiful,
            user-friendly websites and designs that leave a lasting impression.
            My journey as a software developer started with a deep love for
            design and technology. Over time, I have honed my skills in
            React.js, Tailwind CSS, JavaScript, and Figma. I am always eager to
            learn new technologies, solve real-world problems, and bring
            creative ideas to life. Let's build something amazing together!
          </p>

          {/* Buttons */}
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">

                {/* Resume Button */}
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                    Resume
                  </button>
                </a>

                {/* Experience Button */}
                <Link to="/experience">
                  <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                    Experience
                  </button>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
