const HeroSection = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                We take care of ALL your business compliance needs
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      {/* <circle cx="1" cy="1" r=".7"></circle> */}
                    </pattern>
                  </defs>
                </svg>
              </span>
              Register<span className="text-orange-300">Karo</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, registrations, tax filings,
              and other legal matters.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-orange-300 h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2"></div>
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y divide-orange-300 sm:divide-orange-300 rounded shadow-2xl sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center ">
            <p className="font-thin text-4xl tracking-wide text-gray-800 pb-2">
              500<span className="text-orange-300">+</span>
            </p>
            <p className="font-thin text-2xl tracking-wide text-gray-800">
              Businesses Incorporated Every Month
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <p className="font-thin text-4xl tracking-wide text-gray-800 pb-2">
              20,000<span className="text-orange-300">+</span>
            </p>
            <p className="font-thin text-2xl tracking-wide text-gray-800">
              Clients all over India
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <p className="font-thin text-4xl tracking-wide text-gray-800 pb-2">
              250<span className="text-orange-300">+</span>
            </p>
            <p className="font-thin text-2xl tracking-wide text-gray-800">
              Professionals Network
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
