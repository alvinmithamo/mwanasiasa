import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <footer className="bg-ppk-grey text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">People’s Party of Kenya</h3>
          <p>Pamoja Tujenge Kenya Mpya!</p>
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 my-4">
          <li><Link to="/" className="hover:text-ppk-green">Home</Link></li>
          <li><Link to="/about" className="hover:text-ppk-green">About</Link></li>
          <li><Link to="/manifesto" className="hover:text-ppk-green">Manifesto</Link></li>
          <li><Link to="/news" className="hover:text-ppk-green">News</Link></li>
          <li><Link to="/contact" className="hover:text-ppk-green">Contact</Link></li>
        </ul>
        <SocialMedia />
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2025 People’s Party of Kenya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;