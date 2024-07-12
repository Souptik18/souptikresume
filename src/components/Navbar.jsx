import React, { useContext, useState } from "react";
import roundProfile from "./Images/roundProfile.jpg";
import { context } from "../App";
import { NavLink } from "react-router-dom";
import darkThemePic from "./Images/darkThemePic.png";

function Navbar() {
  const { toggleTheme } = useContext(context);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isNavMenuOpen ? "true" : "false"}
                onClick={toggleNavMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${
                    isNavMenuOpen ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`block h-6 w-6 ${
                    isNavMenuOpen ? "block" : "hidden"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-normal"
                        : "text-blue-400 rounded-md px-3 py-2 text-sm font-medium"
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-blue-400 rounded-md px-3 py-2 text-sm font-medium"
                    }
                    aria-current="page"
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-blue-400 rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-blue-400 rounded-md px-3 py-2 text-sm font-medium"
                    }
                    aria-current="page"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-slate-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleTheme}
              >
                <img src={darkThemePic} className="w-6" alt="" />
              </button>
              <div className="relative ml-3">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleProfileMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={roundProfile}
                    alt=""
                  />
                </button>
                {isProfileOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="https://courses.souptik.in"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      My Courses
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${
          isNavMenuOpen ? "block" : "hidden"
        } sm:hidden bg-stone-200`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            to="/"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
