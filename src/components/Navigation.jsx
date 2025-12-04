import { Link } from "react-router-dom";

function Navigation() {
  return (
      <nav className=" flex justify-center gap-4 fixed top-0 left-0 right-0 bg-gray-600 text-whiye py-5">
          <Link to="/">Business Cards</Link>
      <Link to="/screen">Screen</Link>
      <Link to="/card">Card</Link>
      <Link to="/menu">Menu</Link>
      
          
    </nav>
  );
}

export default Navigation;