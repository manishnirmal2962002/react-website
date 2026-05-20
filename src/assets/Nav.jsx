import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="relative z-50">
        <div className='h-10vh flex justify-between items-center text-white lg:py-5 px-6 md:px-20 py-4 border-b border-slate-800'>
          {/* Logo */}
          <div className='flex items-center flex-1'>
            <span className='text-3xl font-bold'>Manish Nirmal</span>
          </div>

          {/* Desktop Menu */}
          <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
            <ul className='flex gap-10 mr-16 text-[18px]'>
              {["Home", "About", "Skills", "Project", "Contact"].map((item, i) => (
                <li key={i} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
                  <Link spy={true} smooth={true} to={item}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='block lg:hidden'>
            <button className='transition text-2xl' onClick={handleClick}>
              {click ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {click && (
          <div className='lg:hidden block absolute top-16 left-0 right-0 bg-slate-900 text-white transition z-50'>
            <ul className='text-center text-xl p-20'>
              {["Home", "About", "Skills", "Project", "Contact"].map((item, i) => (
                <li key={i} onClick={closeMenu} className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                  <Link spy={true} smooth={true} to={item}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
