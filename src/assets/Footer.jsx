import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-6 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 uppercase mb-4">
            <a href="#top" className="text-fuchsia-800 hover:underline">Manish</a>
          </h2>
          <p className="text-[16px]">
            "Crafting beautiful, user-friendly websites. <br /> Let's create something amazing together."
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 uppercase mb-4">Skills</h2>
          <ul className="space-y-2 text-[16px]">
            <li>Web Designer</li>
            <li>Web Developer</li>
            <li>Full Stack Developer</li>
            <li>E-Commerce</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 uppercase mb-4">Contact</h2>
          <p className="text-[16px] mb-2">Email: <br /> manishnirmal2962002@gmail.com</p>
          <p className="text-[16px]">Phone: <br /> +91 6263843794</p>
        </div>

        {/* Follow Me Section */}
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 uppercase mb-4">Follow Me</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/manishnirmal2962002" target="_blank" rel="noopener noreferrer" className="text-white hover:text-fuchsia-800 transition duration-300">
              <AiFillGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/manish-nirmal-satna-india/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-fuchsia-800 transition duration-300">
              <FaLinkedin size={26} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-fuchsia-800 transition duration-300">
              <FaInstagram size={26} />
            </a>
            <a href="#" className="text-white hover:text-fuchsia-800 transition duration-300">
              <FaFacebook size={26} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
