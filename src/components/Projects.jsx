import React, { useContext, useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import { context } from "../App";
import { Link as ScrollLink, Element } from "react-scroll";

function Projects() {
  const [selectedTab, setSelectedTab] = useState("JavaScript");
  const [search, setSearch] = useState();
  const { Theme } = useContext(context);

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Element>
        <div className="mb-24" data-aos="fade-in" data-aos-delay="500">
          <div className="mx-auto max-w-7xl px-2">
            <div
              className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p
                className={`text-3xl font-bold ${
                  !Theme ? "text-black" : "text-white"
                } md:text-5xl md:leading-10`}
              >
                Projects done so far
              </p>
              <p
                className={`max-w-4xl text-base ${
                  !Theme ? "text-black" : "text-gray-400"
                } md:text-xl`}
              >
                “Software engineering is not just about writing code. It’s about
                solving problems and making lives better.”
              </p>
            </div>
            <div className="mt-10 flex w-full justify-between space-y-4 flex-row">
              <div
                className="flex w-full items-end border-b border-gray-300"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <div
                  className={`cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 ${
                    selectedTab === "JavaScript" &&
                    `first:border-b-2 first:border-black`
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <button
                    className={`${
                      selectedTab === "JavaScript"
                        ? "text-green-500"
                        : "text-green-600"
                    }`}
                    onClick={() => handleSelectedTab("JavaScript")}
                  >
                    JavaScript
                  </button>
                </div>
                <div
                  className={`cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 ${
                    selectedTab === "React" && `border-b-2 border-black`
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <button
                    className={`${
                      selectedTab === "React"
                        ? "text-green-500"
                        : "text-green-600"
                    }`}
                    onClick={() => handleSelectedTab("React")}
                  >
                    React
                  </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <ProjectDisplay selectedTab={selectedTab} search={search} />
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Projects;
