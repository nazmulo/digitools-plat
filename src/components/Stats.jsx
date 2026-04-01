import React from "react";

const Stats = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">50K+</h3>
          <p className="mt-2">Active Users</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">200+</h3>
          <p className="mt-2">Premium Tools</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">4.9</h3>
          <p className="mt-2">Average Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;