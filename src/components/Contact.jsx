import React, { useContext, useEffect, useState } from "react";
import contactPic from "./Images/contactPic.jpeg";
import { Element } from "react-scroll";
import { context } from "../App";

function Contact() {
  const { Theme } = useContext(context);
  const [greeting, setGreeting] = useState("Hey Early Bird");
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 0 && time < 6) {
      setGreeting("Hey Early Bird");
    } else if (time >= 6 && time < 12) {
      setGreeting("Good Morning");
    } else if (time >= 12 && time < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    return message.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const messageIsValid = validateMessage(message);

    if (nameIsValid && emailIsValid && messageIsValid) {
      // Form is valid, submit the form
      setResult("Form submitted successfully!");
      // Reset form and errors
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } else {
      // Set errors
      setErrors({
        name: nameIsValid ? "" : "Please enter a valid name.",
        email: emailIsValid ? "" : "Please enter a valid email.",
        message: messageIsValid ? "" : "Message cannot be empty.",
      });
      setResult("Please fix the errors above.");
    }
  };

  return (
    <>
      <div data-aos="fade-in" data-aos-duration="2000">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p
              className={`mb-10 text-center text-2xl ${
                !Theme ? "text-black" : "text-white"
              } italic`}
            >
              "In a connected world, <br />
              Your network is your net worth."
            </p>
            <div
              className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <p className="text-center text-xs font-semibold leading-normal md:text-sm">
                Share your thoughts
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="200"
                className="flex items-center justify-center border-2 border-gray-800 px-8 py-10 rounded-xl hover:scale-105 transition transform duration-500 ease-in-out"
              >
                <div
                  className={`px-2 md:px-12 ${
                    !Theme ? "text-black" : "text-white"
                  }`}
                >
                  <p
                    className="text-2xl font-bold md:text-4xl"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    Get in touch
                  </p>
                  <p
                    className="mt-4 text-lg"
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    {greeting} <br />
                    Please fill in the form to ping me
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className={`mt-8 space-y-4 ${
                      !Theme ? "text-black" : "text-white"
                    }`}
                    data-aos="fade-right"
                    data-aos-delay="800"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="5"
                      className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Submit Form
                    </button>
                  </form>
                  <span
                    className="text-sm"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  >
                    {result}
                  </span>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                className="flex items-center justify-center"
              >
                <img
                  alt="Contact us"
                  className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                  src={contactPic}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
