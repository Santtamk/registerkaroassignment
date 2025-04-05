import React from "react";
import {
  AtSign,
  BookOpen,
  Command,
  Display,
  Layers,
  RefreshCcw,
} from "@geist-ui/icons";

const OurServices = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="ourServices"
    >
      <div className="text-center text-3xl text-orange-300 mb-5">
        Our Services
      </div>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b border-orange-300 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-16 sm:h-16">
              <Command color="orange" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900">
              Company Formation
            </h6>
          </div>
        </div>
        <div className="p-8 border-b border-orange-300 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-16 sm:h-16">
              <AtSign color="orange" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900">
              Company Secretarial Services
            </h6>
          </div>
        </div>
        <div className="p-8 border-b border-orange-300 sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-16 sm:h-16">
              <Display color="orange" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900">
              Virtual Office Address
            </h6>
          </div>
        </div>
        <div className="p-8 border-b border-orange-300 lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-16 sm:h-16">
              <RefreshCcw color="orange" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900">
              Payroll Services
            </h6>
          </div>
        </div>
        <div className="p-8 border-b border-orange-300 sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-16 sm:h-16">
              <BookOpen color="orange" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900">
              Bookkeeping Services
            </h6>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-16 sm:h-16">
              <Layers color="orange" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900">
              VAT Registration, Preparation & Filing
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
