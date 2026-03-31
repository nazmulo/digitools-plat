import React from "react";
import Banner from "../assets/banner"

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-5">
          ✨ New: AI Powered Tools Available
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Supercharge Your <br /> Digital Workflow
        </h2>

        <p className="text-gray-500 text-lg mb-8 leading-8">
          Access premium AI tools, design assets, templates, and productivity
          software — all in one place. Start creating faster today.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#products"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Explore Products
          </a>

          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold">
            Watch Demo
          </button>
        </div>
      </div>

      <div>
        <img
          src="{Banner}"
          alt="Digital Tools"
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;