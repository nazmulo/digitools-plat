import Man from "../assets/user.png";
import Pack from "../assets/package.png";
import Rocket from "../assets/rocket.png";

const Steps = () => {
  return (
    <section id="steps" className="max-w-7xl mx-auto px-5 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <div className="flex justify-center"><img src={Man} alt="" /></div>
          <h3 className="text-xl font-bold mb-3">Create Account</h3>
          <p className="text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <div className="flex justify-center"><img src={Pack} alt="" /></div>
          <h3 className="text-xl font-bold mb-3">Choose Products</h3>
          <p className="text-gray-500">Browse our catalog and select the toolsthat fit your needs.</p>
        </div>  
    

        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <div className="flex justify-center"><img src={Rocket} alt="" /></div>
          <h3 className="text-xl font-bold mb-3">Start Creating</h3>
          <p className="text-gray-500">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;