import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-5 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-3">Choose the plan that fits your needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow border">
          <h3 className="text-2xl font-bold">Starter</h3>
          <p className="text-gray-500 mt-2">Perfect for getting started</p>
          <h2 className="text-5xl font-bold my-6">
            $0<span className="text-lg text-gray-500">/Month</span>
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Access to 10 free tools</li>
            <li>✅ Basic templates</li>
            <li>✅ Community support</li>
            <li>✅ 1 project per month</li>
          </ul>
          <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-full font-semibold">
            Get Started Free
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-700 to-pink-600 text-white p-8 rounded-2xl shadow-xl">
          <p className="inline-block bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-bold mb-4">
            Most Popular
          </p>
          <h3 className="text-2xl font-bold">Pro</h3>
          <p className="mt-2 text-purple-100">Best for professionals</p>
          <h2 className="text-5xl font-bold my-6">
            $29<span className="text-lg text-purple-100">/Month</span>
          </h2>
          <ul className="space-y-2">
            <li>✅ Access to all premium tools</li>
            <li>✅ Unlimited templates</li>
            <li>✅ Priority support</li>
            <li>✅ Unlimited projects</li>
          </ul>
          <button className="w-full mt-8 bg-white text-purple-700 py-3 rounded-full font-semibold">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow border">
          <h3 className="text-2xl font-bold">Enterprise</h3>
          <p className="text-gray-500 mt-2">For teams and businesses</p>
          <h2 className="text-5xl font-bold my-6">
            $99<span className="text-lg text-gray-500">/Month</span>
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Everything in Pro</li>
            <li>✅ Team collaboration</li>
            <li>✅ Dedicated support</li>
            <li>✅ Custom branding</li>
          </ul>
          <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-full font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;