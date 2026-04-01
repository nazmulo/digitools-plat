import Banner from "../assets/banner.png"
import Star from "../assets/Group 5.png"
import playImage from"../assets/Play.png"

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="flex bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-5 ">
          <img src={Star} /> New: AI Powered Tools Available
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
            className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Explore Products
          </a>

          <button className="btn bg-transparent border-none p-0 ">
                        <div className="p-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-xl hover:shadow-indigo-400/50 transition duration-300">
                          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                            <img  src={playImage} alt="video play icon" />
                            <span className="gradient-text ">Watch Demo</span>
                          </div>
                        </div>
                      </button>
        </div>
      </div>

      <div>
        <img
          src={Banner}
          alt="Digital Tools"
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;