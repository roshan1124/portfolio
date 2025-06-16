import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const scroll = (section) => {
    if (section === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center">
      <h1
        className="head text-5xl font-semibold tracking-[3px] pb-2 "
        data-aos="zoom-in-up"
      >
        Welcome
      </h1>
      <div
        className="text-4xl text-yellow-500 pb-16"
        data-aos-delay="700"
        data-aos="zoom-in"
      >
        {" "}
        <Typewriter
          options={{
            strings: [
              "✋I'm Roshan Vadapalli",
"I'm learning to build websites with HTML, CSS, and JS 🌐",
"I'm exploring the world of AI and Machine Learning 🤖",
"I'm practicing Java and Data Structures daily 💻",
"I'm passionate about solving problems with DSA 🔍",
"I'm building cool things using simple web tech 🛠️",
"I'm learning how to train machines with ML 📊",
"I'm improving my logic skills through Java & DSA 🧠",
"I'm working on mini projects using HTML, CSS & JS ✨",
"I'm trying out basic ML models with Python 🤓",
"I'm exploring how AI works step by step 🧬",
"I'm writing clean code with core Java ☕",
"I'm building strong coding fundamentals 💪",
"I'm turning ideas into simple web pages 💡",
"I'm curious about how data can teach machines 📚",
"I'm learning frontend and loving the process ❤️",

            ],
            delay: 150,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            stringSplitter: stringSplitter,
          }}
        />
      </div>
      <button
        className="py-2 mx-auto px-7 bg-transparent border-2 w-fit border-blue-500 rounded-sm  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800"
        data-aos="zoom-out-up"
        data-aos-delay="1400"
      >
        <NavLink
          to="#contact"
          onClick={() => {
            scroll("contact");
          }}
        >
          <p title="Contact"> Contact Me</p>
        </NavLink>
      </button>
      <div
        className=" cursor-pointer w-fit left-[48%] lg:left-[62%] absolute bottom-16"
        data-aos="flip-up"
        data-aos-offset="20"
        data-aos-delay="2000"
      >
        <NavLink
          to="#about"
          onClick={() => {
            scroll("about");
          }}
        >
          <div className="text-slate-400">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              className="motion-safe:animate-bounce"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
            </svg>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
