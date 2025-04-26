import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ppk-green text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          People’s Party of Kenya
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        <ul
          className={`md:flex md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static bg-ppk-green w-full md:w-auto left-0 top-16 p-4 md:p-0`}
        >
          <li><Link to="/" className="block py-2 hover:text-ppk-grey">Home</Link></li>
          <li><Link to="/about" className="block py-2 hover:text-ppk-grey">About</Link></li>
          <li><Link to="/manifesto" className="block py-2 hover:text-ppk-grey">Manifesto</Link></li>
          <li><Link to="/news" className="block py-2 hover:text-ppk-grey">News</Link></li>
          <li><Link to="/contact" className="block py-2 hover:text-ppk-grey">Contact</Link></li>
          <li><Link to="/donate" className="block py-2 hover:text-ppk-grey">Donate</Link></li>
          <li><Link to="/membership" className="block py-2 hover:text-ppk-grey">Join Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;