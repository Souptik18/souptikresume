import React, { useContext } from "react";
import { context } from "../App";

function Footer() {
  const { Theme } = useContext(context);
  return (
    <>
      <footer className="w-full">
        <div className="mx-24">
          <div
            className={`flex justify-center mt-4 ${
              !Theme ? "text-black" : "text-gray-200"
            }`}
          >
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-center ">Socials</p>
              <div className="flex space-x-8">
                <a href="https://github.com/Souptik18" target="_blank">
                  <img
                    className="w-8 h-8"
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                    alt="Github"
                  />
                  <span className="sr-only">Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/souptik22/"
                  target="_blank"
                >
                  <img
                    className="w-8 h-8"
                    src="https://img.icons8.com/?size=256&id=13930&format=png"
                    alt="LinkedIn"
                  />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://leetcode.com/u/souptik18/" target="_blank">
                  <img
                    className="w-8 h-8"
                    src="https://img.icons8.com/?size=256&id=9L16NypUzu38&format=png"
                    alt="LeetCode"
                  />
                  <span className="sr-only">LeetCode</span>
                </a>
                <a
                  href="https://stackoverflow.com/users/23342223/coder17"
                  target="_blank"
                >
                  <img
                    className="w-8 h-8"
                    src="https://cdn-icons-png.flaticon.com/512/15059/15059911.png"
                    alt="Stack Overflow"
                  />
                  <span className="sr-only">Stack Overflow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl items-center justify-between px-4 flex lg:px-0 mt-4">
          <div className="mt-4 m-4">
            <span
              className={`text-sm font-medium ${
                !Theme ? "text-black" : "text-white"
              }`}
            >
              © 2024 Souptik . All rights reserved.
            </span>
          </div>

          <div className="mt-4 m-4">
            <span className="ml-1 text-orange-600 hover:underline">
              <a href="https://courses.souptik.in" target="_blank">
                Visit Courses{" "}
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
