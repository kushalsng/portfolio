import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { Download } from 'lucide-react'


const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [showResumeButton, setShowResumeButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 400) {
        setShowResumeButton(true);
      } else {
        setShowResumeButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex items-center justify-between mx-auto max-w-7xl">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white font-bold text-[18px] cursor-pointer'>Kushal Singh</p>
        </Link>
        <ul className='gap-10 hidden sm:flex flex-row list-none'>
          {showResumeButton && (
            <li
              key={'download-resume'}
              className={`hidden sm:inline-block rounded-lg  text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href="/Kushal Singh Resume.pdf" download="Kushal Singh Resume.pdf" className='flex items-center gap-2'>
                <Download size={18} />Resume
              </a>
            </li>
          )}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end item-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer '
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='gap-10 flex justify-end items-start flex-col gap-4'>
              {showResumeButton && (
                <li
                  key={"download-resume"}
                  className={`text-secondary font-poppins text-[16  px] font-medium cursor-pointer`}
                >
                  <a href="/Kushal Singh Resume.pdf" download="Kushal Singh Resume.pdf" className='flex items-center gap-2'>
                    Resume <Download size={16} />
                  </a>
                </li>
              )}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins text-[16  px] font-medium cursor-pointer`}
                  onClick={() => { setActive(link.title); setToggle(!toggle) }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar