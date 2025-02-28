import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import MyProjects from "./MyProjects.jsx";
import Home from "./Home.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [activeLink, setActiveLink] = useState("/home"); // Track active link

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
    if (window.innerWidth >= 700) {
      setIsOpen(false); // Close menu on resize if in desktop mode
    }
  };
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="border-gray-200 dark:border-gray-700 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="src/assets/logo.jpg"
              className="h-8 rounded-full"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">
              Dev Sai
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden ${""}`}
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Navigation Links */}
          <div
            className={`w-full ${
              isMobile ? (isOpen ? "block" : "hidden") : "flex"
            } md:items-center md:w-auto`}
            id="navbar-hamburger"
          >
            <ul
              className={`flex ${
                isMobile ? "flex-col" : "flex-row"
              } font-medium mt-4 rounded-lg bg-white bg-opacity-50 dark:border-gray-700 ${
                isMobile ? "" : "md:space-x-8 md:mt-0"
              }`}
            >
              <li>
                <Link
                  to="/home"
                  className={`block py-2 px-3 rounded-sm text-black ${
                    activeLink === "/home" ? "bg-white" : "text-black"
                  } dark:text-white-400 dark:hover:bg-gray-200 dark:hover:text-black`}
                  onClick={() => handleLinkClick("/home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/main"
                  className={`block py-2 px-3 rounded-sm text-black ${
                    activeLink === "/main" ? "bg-white" : "text-black"
                  } dark:text-white-400 dark:hover:bg-gray-200 dark:hover:text-black`}
                  onClick={() => handleLinkClick("/main")}
                >
                  My Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 rounded-sm text-black ${
                    activeLink === "/about" ? "bg-white" : "text-black"
                  } dark:text-white-400 dark:hover:bg-gray-200 dark:hover:text-black`}
                  onClick={() => handleLinkClick("/about")}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`block py-2 px-3 rounded-sm text-black ${
                    activeLink === "/projects" ? "bg-white" : "text-black"
                  } dark:text-white-400 dark:hover:bg-gray-200 dark:hover:text-black`}
                  onClick={() => handleLinkClick("/projects")}
                >
                  My Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<Footer />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </>
  );
};

export default Header;
