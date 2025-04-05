"use client";
import Image from "next/image";
import { useState } from "react";
// import { Phone } from "@geist/icons";
import { PhoneCall } from "@geist-ui/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="RegisterKaro"
            title="RegisterKaro"
            className="inline-flex items-center"
          >
            <Image
              src="/Logo.webp"
              alt="logo"
              className="w-8 text-teal-accent-400"
              width={100}
              height={100}
            />

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Register
            </span>
            <span className=" text-xl font-bold tracking-wide text-orange-300 uppercase">
              Karo
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#ourServices"
                aria-label="Startup"
                title="Startup"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#blog"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contactUs"
                aria-label="Contact Us"
                title="Contact Us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex bg-amber-300 rounded-4xl hover:bg-green-300 ">
           
            <li>
              <a
                href="tel:+918447746183"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Call Now"
                title="Call Now"
              >
                <PhoneCall className="w-12 h-6 font-orange-300" size={16} />
                +918447746183
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="RegisterKaro"
                        title="RegisterKaro"
                        className="inline-flex items-center"
                      >
                        <Image
                          src="/Logo.webp"
                          alt="logo"
                          className="w-8 text-teal-accent-400"
                          width={100}
                          height={100}
                        />

                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
                          Register
                        </span>
                        <span className=" text-xl font-bold tracking-wide text-orange-300 uppercase">
                          Karo
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Startup"
                          title="Startup"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label=" Contact Us"
                          title=" Contact Us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact Us
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+918447746183"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-orange-300 not-first:hover:bg-green-300"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          <PhoneCall size={16} />{" "}
                          <span className="pl-3">+918447746183</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
