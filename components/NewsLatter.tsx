import React from "react";

const NewsLatter = () => {
  return (
    <div
      className="relative w-full h-[50vh] flex flex-col items-center justify-center px-4 text-center bg-cover bg-center my-12"
      style={{ backgroundImage: "url('map.png')" }}
    >
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-2xl font-bold md:text-4xl">
          Stay Updated on Epic Adventures!
        </h2>
        <p className="mt-2  md:text-xl">
          Subscribe now and never miss a trek update.
        </p>
        <form className="mt-4 flex space-x-1 items-center w-full max-w-md mx-auto">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-ocean-green-500"
          />
          <button className=" md:mt-0 md:ml-2 px-6 py-3 bg-ocean-green-500 text-white font-semibold rounded-lg hover:bg-ocean-green-600 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
