import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavLinks = ({ className, onClick }) => (
  <ul className={className}>
    {["Home", "Tech", "Projects", "Contact"].map((item) => (
      <li key={item}>
        <a
          href={`#${item.toLowerCase()}`}
          onClick={onClick}
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          aria-label={item}
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
);

const SocialLinks = ({ className }) => (
  <ul className={className}>
    {/* LinkedIn (official blue) */}
    <li>
      <a
        href="https://www.linkedin.com/in/paras-chamoli-87b89528b"
        className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="text-[#0077B5]" /> {/* LinkedIn Blue */}
      </a>
    </li>

    {/* GitHub (official black) */}
    <li>
      <a
        href="https://github.com/Paraschamoli"
        className="text-xl opacity-70 transition-all duration-300 hover:opacity-100"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="text-black dark:text-white" /> {/* Dark/light mode aware */}
      </a>
    </li>

    {/* Gmail */}
    <li>
  <a
    href="mailto:paraschamoli2592002@gmail.com"
    className="text-[#D14836] text-xl opacity-70 transition-all duration-300 hover:opacity-100"
    aria-label="Email"
  >
    <MdEmail />
  </a>
</li>


    {/* LeetCode (official yellow gradient style) */}
    <li>
      <a
        href="https://leetcode.com/u/paraschamoli/"
        className="opacity-70 transition-all duration-300 hover:opacity-100"
        aria-label="LeetCode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-6 h-6"
        />
      </a>
    </li>
  </ul>
);



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 py-4 text-white backdrop-blur-md lg:px-16">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent transition-all duration-300 hover:opacity-100 md:text-3xl"
        aria-label="Home"
      >
        Paras
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-12">
        <NavLinks className="flex space-x-8" />
        <SocialLinks className="flex gap-5" />
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={menuOpen}
        className="block text-3xl md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-20 flex h-screen w-2/3 flex-col items-start justify-start gap-8 bg-black/90 p-8 text-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLinks
          className="flex flex-col gap-6 text-lg"
          onClick={menuOpen} // Close menu on link click
        />
        <SocialLinks className="flex gap-6" />
      </div>
    </nav>
  );
};

export default Navbar;
