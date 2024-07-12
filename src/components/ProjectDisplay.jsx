import React, { useContext } from "react";
import calc from "./Images/calc.jpg";
import timer from "./Images/timer.png";
import todoapp from "./Images/todoapp.jpeg";
import passwordGenerator from "./Images/passwordGenerator.png";
import myntraclone from "./Images/myntraclone.jpeg";
import cineflix from "./Images/cineflix.jpg";
import fitnessapp from "./Images/fitnessapp.jpg";
import { Link as ScrollLink, Element } from "react-scroll";
import todo from "./Images/todo.png";
import pic from "./Images/pic.png";
import textApp from "./Images/textApp.png";
import backGroundChanger from "./Images/backGroundChanger.png";
import { context } from "../App";

export default function ProjectDisplay({ selectedTab, search }) {
  const { Theme } = useContext(context);

  return (
    <>
      {selectedTab === "JavaScript" ? (
        <Element>
          <div
            className={`grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 ${
              !Theme ? "text-black" : "text-gray-200"
            } `}
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <div className="border" data-aos="zoom-in" data-aos-delay="600">
              <img
                src={calc}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #Calculator #Javascript
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  Simple Calculator in Javascript
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/calculatorProj"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/calculatorProj/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="700">
              <img
                src={timer}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #Timer #Stopwatch #Javascript
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  Stopwatch built in Javascript
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/timer"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/timer/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="800">
              <img
                src={todoapp}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #todo #Javascript
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  TodoApp coded in Javascript
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!{" "}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/todoapp"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/todoapp/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="500">
              <img
                src={myntraclone}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #Clone #Javascript #Myntra
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  Functional Myntra Clone in Javascript
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/myntra"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/myntra/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="800">
              <img
                src={pic}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #IMDB #Clone #Javascript #LocalStorage
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  IMDB Clone using Javascript
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/imdb.github.io"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/imdb.github.io/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Element>
      ) : (
        <Element>
          <div
            className={`grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 ${
              !Theme ? "text-black" : "text-gray-200"
            } `}
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <div className="border" data-aos="zoom-in" data-aos-delay="600">
              <img
                src={backGroundChanger}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #BackgroundChanger #React #Vite
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  Simple Background Changer in React
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/bg-Changer"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/bg-Changer/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="700">
              <img
                src={passwordGenerator}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #Password #PasswordGenerator #React
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  Password Generator built in React
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/passwordGen/settings/pages"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/passwordGen/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="800">
              <img
                src={todo}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #Todo #React #TodoApp #localStorage
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  TodoApp in React with Storage facility
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/todoAppReact"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/todoAppReact/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="500">
              <img
                src={textApp}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #TextApp #OnlineConverter #React #DarkMode
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  Text converter built in React having Dark mode
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/TextUtils"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://souptik18.github.io/TextUtils/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="800">
              <img
                src={fitnessapp}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #FitnessWebsite #Gym #React
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  FitnessApp in React using Appwrite as BaaS
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/fitnessAPP"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://fitness-app-souptik018.vercel.app/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border" data-aos="zoom-in" data-aos-delay="1100">
              <img
                src={cineflix}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #MovieClone #Netflix #React
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">
                  MovieClone in react using Appwrite as BaaS (inspired from
                  Netflix)
                </p>
                <p className="mt-4 w-full text-sm leading-normal">
                  The code is deployed in the github <br /> Click the link below
                  to open the repository or you can also view the direct
                  deployed link too!
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://github.com/Souptik18/CineFlix"
                      target="_blank"
                    >
                      Github Repo
                    </a>
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <a
                      href="https://cine-flix-souptik018.vercel.app/"
                      target="_blank"
                    >
                      Deployment
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Element>
      )}
    </>
  );
}
