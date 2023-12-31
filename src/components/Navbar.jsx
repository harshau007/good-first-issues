import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from'../assets/logo.png';
const Navbar = () => {  

    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:"home",

        },
        {
            id:2,
            link:"about",

        },
        {
            id:3,
            link:"Contributors",

        },
        {
            id:5,
            link:"New Feature XYZ",
        },
        {
            id:7,
            link:"Contact Us",

        },
    ];
    
  return (
    <div className='h-16 flex justify-between mx-auto items-center w-full md:h-24 text-white fixed px-4 z-50' style={{
      background: "white",
      borderBottom: '1px solid black'
    }}>
      <div>
        <img src={logo} alt="my logo" className='w-[50px] ml-4 mt-4 mb-4 md:w-[90px]'/>
      </div>

      <ul className='hidden md:flex gap-3'>

        {links.map(({id, link}) => (
          <li key={id} className='flex text-xl cursor-pointer capitalize px-6 p-2 text-black hover:text-[red]  hover:scale-110'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer text-gray-400 pr-3 z-50 md:hidden'>
        {
            nav ? <FaTimes size={30}/> : <FaBars size={30}/>
        }
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center w-full h-screen absolute left-0 top-0' style={{
          background: "linear-gradient(180deg, hsla(0, 0%, 0%, 1) 0%, hsla(251, 62%, 24%, 1) 100%)"
        }}>
                    
          {links.map(({id, link}) => (
            <li key={id} className='text-3xl cursor-pointer rounded-full capitalize px-4 py-6 text-[#cecddf] hover:text-[#2f1c80]  hover:scale-110'>
              <Link
                onClick={() => setNav(!nav)}
                to={link} smooth duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar