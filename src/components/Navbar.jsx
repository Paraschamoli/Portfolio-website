// components/Navbar.js
import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

// Debounce function for scroll events
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const NavLinks = memo(({ className, onClick }) => {
  const links = ["Home", "Tech", "Projects", "Contact"];
  
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) onClick();
  }, [onClick]);

  return (
    <ul className={className}>
      {links.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            onClick={handleClick}
            className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-[#112240] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label={`Navigate to ${item}`}
            role="button"
            tabIndex="0"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
});

NavLinks.displayName = 'NavLinks';

const SocialLinks = memo(() => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/paras-chamoli-87b89528b",
      icon: <BsLinkedin className="text-[#0A66C2]" size={20} />,
      label: "LinkedIn",
      ariaLabel: "Visit LinkedIn profile"
    },
    {
      href: "https://github.com/Paraschamoli",
      icon: <BsGithub className="text-gray-300" size={20} />,
      label: "GitHub",
      ariaLabel: "Visit GitHub profile"
    },
    {
      href: "mailto:paraschamoli2592002@gmail.com",
      icon: <MdEmail className="text-[#EA4335]" size={20} />,
      label: "Email",
      ariaLabel: "Send email"
    },
    {
      href: "https://leetcode.com/u/paraschamoli/",
      icon: <SiLeetcode className="text-[#FFA116]" size={20} />,
      label: "LeetCode",
      ariaLabel: "Visit LeetCode profile"
    }
  ];

  // Security: Validate URLs
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <ul className="flex space-x-3">
      {socialLinks.map((link) => (
        <li key={link.label}>
          {isValidUrl(link.href) ? (
            <a
              href={link.href}
              className="p-2 rounded-lg transition-all duration-300 opacity-90 hover:opacity-100 hover:bg-[#112240] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label={link.ariaLabel}
              target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer nofollow"}
              title={link.label}
            >
              {link.icon}
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
});

SocialLinks.displayName = 'SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMenu]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeMenu]);

  // Optimized scroll handler with debounce
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 20);
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus in mobile menu for accessibility
  useEffect(() => {
    if (isOpen) {
      const focusableElements = navRef.current.querySelectorAll(
        'a[href], button, textarea, input, select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a192f]/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
            aria-label="Home"
            onClick={closeMenu}
            role="button"
            tabIndex="0"
          >
            Paras
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks className="flex space-x-2" onClick={closeMenu} />
            <div className="h-6 w-px bg-gray-700" aria-hidden="true"></div>
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#112240] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-16 transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'translate-y-0 opacity-100 visible' 
              : '-translate-y-4 opacity-0 invisible'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="bg-[#0a192f]/95 backdrop-blur-md border-t border-gray-800 mx-4 rounded-b-xl shadow-2xl">
            <div className="px-6 py-8 space-y-6">
              <NavLinks 
                className="flex flex-col space-y-4" 
                onClick={closeMenu}
              />
              <div className="h-px bg-gray-800" aria-hidden="true"></div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);