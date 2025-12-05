import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className=" fixed top-0 left-0 right-0 flex justify-center items-center gap-14 py-5 px-6 bg-gray-700/90 backdrop-blur-md text-white shadow-lg border-b border-gray-500/40 z-50">
      <Link className="text-white px-4 py-2 hover:text-cyan-400" to="/">Business Cards</Link>
      <Link className="text-white px-4 py-2 hover:text-cyan-400" to="/screen">Screen</Link>
      <Link className="text-white px-4 py-2 hover:text-cyan-400" to="/card">Card</Link>
      <Link className="text-white px-4 py-2 hover:text-cyan-400" to="/menu">Menu</Link>
    </nav>
  );
}

export default Navigation;
