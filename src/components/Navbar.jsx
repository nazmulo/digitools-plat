import cart from "../assets/shopping-cart.png"

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-3xl max-sm:mr-4 font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">DigiTools</h1>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#products">Products</a></li>
          <li><a href="#steps">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#footer">Contact</a></li>
          <li><a href="#footer">Terminals</a></li>
          <li><a href="#footer">FAQ</a></li>
        </ul>

        <div className="text-lg font-semibold flex">
          <img src={cart} /> <span className="text-purple-600">{cartCount}</span>
        </div>
        <a
          href="#"
          className="text-gray-700 max-sm:hidden hover:text-purple-600 font-medium transition-colors"
        >
          Login
        </a>
        <button className="cursor-pointer bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600  text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;