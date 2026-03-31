import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
          <p className="text-purple-100 mb-8">
            Join thousands of professionals who already use DigiTools.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#products"
              className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold"
            >
              Explore Products
            </a>
            <a
              href="#pricing"
              className="border border-white px-6 py-3 rounded-full font-semibold"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-slate-950 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">DigiTools</h3>
            <p className="text-slate-400">
              Premium digital tools for creators, professionals, and businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-slate-500 mt-12 border-t border-slate-800 pt-6">
          © 2026 DigiTools. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;