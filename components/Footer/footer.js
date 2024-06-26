import React from "react";
import { FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <footer class="bg-black text-white border-t border-[#ec0e89] ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://www.hnccbits.com/" class="flex items-center">
                <img
                  src="../assets/hncc-logo.png"
                  class="h-16 me-3"
                  alt="HnCC logo"
                />
                <span class="self-center text-base sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Hackathon and Coding Club
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul class="text-white dark:text-gray-400 font-medium flex flex-col justify-evenly">
                  <li class="mb-2">
                    <FooterLink title={"Home"} navigateTo={"#navbar"} />
                  </li>
                  <li className="mb-2">
                    <FooterLink title={"Events"} navigateTo={"#events"} />
                  </li>
                  <li>
                    <FooterLink title={"Gallery"} navigateTo={"#gallery"} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">
              Designed with ❤️ by
              <a href="https://www.hnccbits.com/" class="hover:underline">
                {" "}
                Team HnCC.
              </a>
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0 ">
              <a
                href="https://www.facebook.com/hnccbits/"
                className="pr-3 text-white hover:text-white dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>

              <a href="https://www.instagram.com/hnccbits/" className="">
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/hnccbits/"
                class="text-white hover:text-white dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function FooterLink({ title, navigateTo }) {
  return (
    <div class="mb-4 w-[78px] cursor-pointer h-[22px] relative group overflow-hidden">
      <a href={navigateTo}>
        <div className="absolute font-squid duration-300 group-hover:bottom-[0%] ease-out -bottom-[115%] left-0">
          <span className="block uppercase">{title}</span>
          <span className="block uppercase">{title}</span>
        </div>
      </a>
    </div>
  );
}

export default footer;
