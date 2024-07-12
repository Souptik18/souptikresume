import React, { useContext } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { context } from "../App";
import aboutPagepic from "./Images/aboutPagepic.jpeg";
import aboutProfile from "./Images/aboutProfile.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from "typewriter-effect";

function About() {
  const { Theme } = useContext(context);
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <div
              className={`text-2xl font-bold ${
                !Theme ? "text-black" : "text-white"
              } md:text-4xl md:leading-10`}
            >
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "The journey of a thousand miles begins with a single <span style='color:red'>step .</span>"
                    )
                    .start()
                    .pauseFor(2800)
                    .deleteChars(6)
                    .typeString("<span style='color:red'>decision .</span>")
                    .pauseFor(2800)
                    .deleteChars(10)
                    .typeString("<span style='color:red'>choice .</span>")
                    .pauseFor(2800)
                    .deleteChars(8)
                    .typeString("<span style='color:red'>action .</span>")
                    .pauseFor(2800)
                    .deleteChars(9)
                    .typeString("<span style='color:red'>thought .</span>")
                    .pauseFor(2800)
                    .deleteChars(9)
                    .typeString("<span style='color:red'>moment .</span>")
                    .pauseFor(2800)
                    .start();
                }}
              />
            </div>

            <br />
            <Element>
              <div data-aos="fade-up" data-aos-delay="800">
                <p className="text-base text-gray-400 md:text-lg">
                  <i>
                    Hi! I'm Souptik a keen interested learner of the technology
                    industry.
                  </i>
                  <br />
                  With a background in both <b>Web Development</b> and{" "}
                  <b>Consulting</b>, which is crucial for any project
                  implementation, I am dedicated to continuous learning and
                  bringing fresh perspectives to every project. Let’s
                  collaborate to create outstanding digital experiences.
                </p>
                <div className="flex justify-center py-12 pb-20 sm:w-full md:w-full">
                  <div
                    className="rounded-md w-full sm:w-full md:w-4/12 p-4"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                  >
                    <img
                      src={aboutProfile}
                      alt="Souptik Sarkar"
                      className="h-[400px] w-full rounded-lg object-cover"
                    />
                    <p className="mt-6 w-full px-2 text-xl font-semibold text-gray-400">
                      Souptik Sarkar
                    </p>
                    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                      Tech Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </Element>
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Experience / Education →
              </p>
            </div>
          </div>
          <Element>
            <div
              data-aos="slide-down"
              data-aos-duration="2000"
              className="mt-16 flex items-center"
            >
              <div className="space-y-6 md:w-3/4">
                <p
                  className={`text-3xl font-bold ${
                    !Theme ? "text-black" : "text-white"
                  } md:text-4xl`}
                >
                  Associate Consultant
                </p>
                <p className="max-w-4xl text-base text-gray-400 md:text-xl">
                  Worked as an Associate Consultant at HighRadius Technologies
                  Pvt Ltd,
                  <br /> Hyderabad July 2022 - November - 2022 <br />
                  Responsible for providing expert guidance in implementing
                  innovative financial technology solutions and collaborating
                  with clients to optimize and streamline their financial
                  processes.
                </p>
              </div>
            </div>
            <div
              data-aos="slide-down"
              data-aos-duration="2000"
              className="mt-16 flex items-center"
            >
              <div className="space-y-6 md:w-3/4">
                <p
                  className={`text-3xl font-bold ${
                    !Theme ? "text-black" : "text-white"
                  } md:text-4xl`}
                >
                  Intern Consultant
                </p>
                <p className="max-w-4xl text-base text-gray-400 md:text-xl">
                  Worked as an intern in HighRadius Technologies Pvt Ltd,
                  engaged in hands-on learning and supporting the implementation
                  of cutting-edge financial technology solutions contributing to
                  the exploration and development of industry best practices
                </p>
              </div>
            </div>
            <div
              data-aos="slide-down"
              data-aos-duration="2000"
              className="mt-16 flex items-center"
            >
              <div className="space-y-6 md:w-3/4">
                <p
                  className={`text-3xl font-bold ${
                    !Theme ? "text-black" : "text-white"
                  } md:text-4xl`}
                >
                  Engineering
                </p>
                <p className="max-w-4xl text-base text-gray-400 md:text-xl">
                  B.TECH in Electronics and Computer Science Engineering at KIIT
                  University , Bhubaneshwar CGPA - 8.3
                </p>
              </div>
            </div>
          </Element>
          <hr className="mt-20" />
          <Element>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
              className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row mt-10 mb-20"
            >
              {" "}
              <div className="space-y-6">
                <p
                  className={`text-sm font-semibold md:text-base ${
                    !Theme ? "text-black" : "text-white"
                  }`}
                >
                  Stepping into limitless possibilities
                </p>
                <p
                  className={`text-3xl font-bold ${
                    !Theme ? "text-black" : "text-white"
                  } md:text-4xl`}
                >
                  I'm just getting started
                </p>
                <p className="text-base text-gray-500 md:text-lg">
                  Exploring the expansive realm of Web development with a
                  passion for innovation and creativity, ready to embark on a
                  transformative journey.
                </p>
                <button
                  onClick={() => {
                    toast.success("Awesome!!", {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      draggable: true,
                      theme: "dark",
                      progress: undefined,
                    });
                  }}
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Click to React
                </button>
              </div>
              <div className="md:mt-0 mt-10 w-full">
                <img
                  src={aboutPagepic}
                  alt="Getting Started"
                  className="rounded-lg"
                />
              </div>
            </div>
          </Element>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default About;
