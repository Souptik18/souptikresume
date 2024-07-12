import React, { useContext } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import nightMode from "./Images/nightMode.png";
import coverPic from "./Images/coverPic.jpeg";
import tailwind from "./Images/tailwind.png";
import minimalist from "./Images/minimalist.png";
import react from "./Images/react.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import landingPageVideo from "./Images/landingPageVideo.gif";
import Typewriter from "typewriter-effect";
import { context } from "../App";

function LandingPage() {
  const { Theme } = useContext(context);

  return (
    <>
      <Element>
        <div
          data-aos="fade-zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="w-full"
        >
          <div className="relative w-full bg-dark mt-8">
            <div
              className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div
                className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6"
                data-aos="fade-right"
                data-aos-delay="700"
                data-aos-duration="1400"
              >
                <h1
                  className={`mt-8 text-3xl font-bold tracking-tight ${
                    !Theme ? "text-black" : "text-white"
                  } md:text-4xl lg:text-6xl`}
                >
                  <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Simplicity is the ultimate  <span style='color:red'>sophistication .</span>"
                        )
                        .pauseFor(2800)
                        .deleteChars(16)
                        .typeString("<span style='color:red'>clarity .</span>")
                        .pauseFor(2800)
                        .deleteChars(9)
                        .typeString("<span style='color:red'>beauty .</span>")
                        .pauseFor(2800)
                        .deleteChars(8)
                        .typeString("<span style='color:red'>strength .</span>")
                        .pauseFor(2800)
                        .deleteChars(10)
                        .typeString("<span style='color:red'>wisdom .</span>")
                        .pauseFor(2800)
                        .deleteChars(9)
                        .typeString("<span style='color:red'>elegance .</span>")
                        .pauseFor(2800)
                        .start();
                    }}
                  />
                </h1>
              </div>
              <div
                className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 m-1"
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out"
              >
                <img
                  className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                  src={coverPic}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
            <Element name="features">
              <div
                className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <div
                  data-aos="flip-left"
                  data-aos-delay="600"
                  data-aos-duration="1200"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <img src={minimalist} alt="" />
                  </div>
                  <h3
                    className={`mt-8 text-lg font-semibold ${
                      Theme ? "text-gray-400 " : "text-black"
                    }`}
                  >
                    Minimalist
                  </h3>
                  <p
                    className={`mt-4 text-sm ${
                      Theme ? "text-gray-400 " : "text-black"
                    }`}
                  >
                    Kept the Website Simple.
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="700"
                  data-aos-duration="1400"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                    <img src={react} alt="" />
                  </div>
                  <h3
                    className={`mt-8 text-lg font-semibold ${
                      Theme ? "text-gray-400 " : "text-black"
                    }`}
                  >
                    Fast &amp; Easy to Load
                  </h3>
                  <p
                    className={`mt-4 text-sm ${
                      Theme ? "text-gray-400 " : "text-black"
                    }`}
                  >
                    Thanks to React!
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="800"
                  data-aos-duration="1600"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <img src={nightMode} alt="" />
                  </div>
                  <h3
                    className={`mt-8 text-lg font-semibold ${
                      Theme ? "text-gray-400" : " text-black"
                    }`}
                  >
                    Light &amp; Dark Version
                  </h3>
                  <p
                    className={`mt-4 text-sm ${
                      Theme ? "text-gray-400" : " text-black"
                    }`}
                  >
                    You can change the theme easily.
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-delay="900"
                  data-aos-duration="1800"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                    <img src={tailwind} className="w-12 h-12" alt="" />
                  </div>
                  <h3
                    className={`mt-8 text-lg font-semibold ${
                      Theme ? "text-gray-400" : " text-black"
                    }`}
                  >
                    Tailwind
                  </h3>
                  <p
                    className={`mt-4 text-sm ${
                      Theme ? "text-gray-400" : " text-black"
                    }`}
                  >
                    Used Tailwind for styling.
                  </p>
                </div>
              </div>
            </Element>
          </div>
        </div>
        <Element name="teamwork">
          <div
            className="relative w-full bg-dark mb-24"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="mx-auto max-w-7xl lg:px-8">
              <div
                className="flex flex-col justify-center px-4 py-10 lg:px-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
              >
                <h1
                  className={`mt-8 max-w-4xl text-3xl font-bold tracking-tight ${
                    !Theme ? "text-black" : "text-white"
                  } md:text-4xl lg:text-6xl`}
                >
                  Believing in Teamwork
                </h1>
                <p
                  className={`mt-8 max-w-3xl text-lg  ${
                    Theme ? "text-gray-400" : " text-black"
                  } `}
                >
                  Believing in the power of teamwork and effective leadership is
                  essential for success in any endeavor. <br />I excel in both
                  teamwork and leadership, fostering collaboration and guiding
                  others towards common goals. My abilities drive synergy,
                  creativity, and productivity within the team, ensuring success
                  in our endeavors.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => {
                      toast.success("Yay Lets Go!! ✌️", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    }}
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Click to React
                  </button>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </Element>
        <Element>
          <div
            className="rounded-lg bg-gray-200 p-4 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80 mb-24"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img
              src={landingPageVideo}
              alt="gif video"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="1200"
            />
          </div>
        </Element>
      </Element>
    </>
  );
}

export default LandingPage;
