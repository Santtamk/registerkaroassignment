import { Facebook, Linkedin } from "@geist-ui/icons";
import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center w-screen  bg-white ">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-full lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-orange-300 text-gray-100 p-3 rounded-lg w-full  focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-4 ml-auto bg-gray-900 rounded-2xl">
            <div className="flex flex-col text-white gap-2">
              <h1 className="font-bold uppercase text-4xl mb-2">
                Drop in our office
              </h1>
              <p className="text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <div className="text-gray-400">
                  <p>Safe Ledger Private Limited #101,</p>
                  <p>Oxford Towers, 139,</p>
                  <p>HAL Old Airport Rd,</p>
                  <p>Kodihalli, Bengaluru,</p>
                  <p>Karnataka 560008</p>
                </div>
              </div>

              <div className="flex flex-col pt-2">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                <p className="text-gray-400">Mon-Fri: 9am - 6pm</p>
                <p className="text-gray-400">Email: demo@email.com</p>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="rounded-full bg-white h-8 w-8 mx-1 text-center pt-1 flex items-center justify-center pb-1 ">
                  <Facebook color="orange" />
                </div>
                <div className="rounded-full bg-white h-8 w-8 mx-1 text-center pt-1 flex items-center justify-center pb-1 ">
                  <Linkedin color="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
