import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 my-10 min-h-screen ml-4 overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="flex-auto w-full md:w-80 flex flex-col justify-center text-center items-center gap-1">
          <div
            data-aos={"fade-left"}
            className="w-[180px] md:w-[290px] lg:w-[350px] hidden md:block"
          >
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
            />
          </div>

          <div data-aos={"slide-up"} className="text-center mt-10">
            <div className="text-center mt-2 text-3xl xs:text-xl md:text-2xl font-bold">
              Follow Me
            </div>

            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                title="Github"
                onClick={() =>
                  window.open("https://github.com/roshan1124", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>

              <div
                title="Instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/bunnyyyyy_011",
                    "_blank"
                  )
                }
              >
                <InstagramIcon className="cursor-pointer hover:scale-105" />
              </div>

              <div
                title="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/roshanvadapalli/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
              </div>

              {/* <div
                title="Facebook"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/daniel.jebarson.9",
                    "_blank"
                  )
                }
              >
                <FacebookIcon className="cursor-pointer hover:scale-105" />
              </div> */}
            </div>

            <div className="mt-6 italic text-sm font-medium text-blue-500">
              <span className="pl-1">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2025 Roshan Vadapalli</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
