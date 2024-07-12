import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import errorPic from "./Images/errorPic.png";
import { context } from "../App";
function ErrorPage() {
  const { Theme } = useContext(context);

  return (
    <>
      <div
        className={`mx-auto w-full max-w-7xl px-2 md:px-4 ${
          !Theme ? "text-black" : "text-white"
        }`}
      >
        <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
          <div className="lg:flex lg:items-center lg:space-x-10">
            <img
              src={errorPic}
              alt="question-mark"
              className="h-[300px] w-auto"
            />
            <div>
              <p className="mt-6 text-sm font-semibold">404 error</p>
              <h1
                className={`mt-3 text-2xl font-semibold ${
                  !Theme ? "text-black" : "text-white"
                } md:text-3xl`}
              >
                We can't find that page
              </h1>
              <p
                className={`mt-4 text-gray-500 ${
                  !Theme ? "text-black" : "text-white"
                }`}
              >
                Chill and Take a deep breath and let's steer back to calmer
                waters together.
              </p>
              <div
                className={`mt-6 flex items-center space-x-3 ${
                  !Theme ? "text-black" : "text-white"
                }`}
              >
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-800 px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  <NavLink to="/">Go back</NavLink>
                </button>
                <button
                  type="button"
                  className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <NavLink to="/contact"> Contact us</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default ErrorPage;
