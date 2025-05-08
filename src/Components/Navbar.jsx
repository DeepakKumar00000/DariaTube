
import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  // Hide menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setBlogDropdown(false);
      setPagesDropdown(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="top-0 left-0 w-full z-50 bg-[#101928] text-white h-20 shadow-md">
        <div className="container mx-auto h-full flex items-center justify-between px-4">

          {/* Logo */}
          <Link to="/" className="flex">
            <img src="/LOGO2.png" alt="Logo" className="h-20 w-28" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-bold text-[19px] items-center">
            <li><a href="#" className="hover:text-[#FF6427]">Home</a></li>
            <li><a href="#" className="hover:text-[#FF6427]">Team</a></li>

            {/* Blog Dropdown (Desktop) */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#FF6427]">
                Blog <ChevronDown size={20} />
              </div>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-[#FF6427] rounded-md shadow-lg py-2 w-40 text-sm z-10">
                <li><a href="#" className="block px-4 py-2 hover:bg-pink-500">Blog</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-pink-500">Single Blog</a></li>
              </ul>
            </li>

            {/* Pages Dropdown (Desktop) */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#FF6427]">
                Pages <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-[#FF6427] rounded-md shadow-lg py-2 w-40 text-sm z-10">
                <li><a href="#" className="block px-4 py-2 hover:bg-pink-500">Elements</a></li>
              </ul>
            </li>

            <li><a href="#" className="hover:text-[#FF6427]">Contact</a></li>
          </ul>

        
{/*           <div className="hidden md:block">
            <button
              onClick={() => navigate('/login')}
              className="bg-[#FF6427] text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-500"
            >
              Login
            </button>
          </div> */}

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden z-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {menuOpen && (
          <div className="fixed top-20 right-0 bg-[#C5D0E9]/90 px-6 py-6 text-[18px] font-semibold text-black shadow-lg z-40 transition-transform duration-300 ease-in-out rounded-l-lg max-w-[250px] w-fit">
            <a href="#" className="block text-right hover:text-[#FF6427]">Home</a>
            <a href="#" className="block text-right hover:text-[#FF6427]">Team</a>

            {/* Mobile Blog Dropdown */}
            <div className="text-right">
              <p
                onClick={() => setBlogDropdown(!blogDropdown)}
                className="cursor-pointer hover:text-[#FF6427] flex justify-end items-center gap-1"
              >
                Blog <ChevronDown size={16} />
              </p>
              {blogDropdown && (
                <ul className="pr-2 space-y-1 text-sm text-black">
                  <li><a href="#" className="block">Blog</a></li>
                  <li><a href="#" className="block">Single Blog</a></li>
                </ul>
              )}
            </div>

            {/* Mobile Pages Dropdown */}
            <div className="text-right">
              <p
                onClick={() => setPagesDropdown(!pagesDropdown)}
                className="cursor-pointer hover:text-[#FF6427] flex justify-end items-center gap-1"
              >
                Pages <ChevronDown size={16} />
              </p>
              {pagesDropdown && (
                <ul className="pr-2 space-y-1 text-sm text-black">
                  <li><a href="#" className="block ">Elements</a></li>
                </ul>
              )}
            </div>

            <a href="#" className="block text-right hover:text-[#FF6427]">Contact</a>

            <div className="text-right">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/login');
                }}
                className="mt-2 bg-[#FF6427] text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-500"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
