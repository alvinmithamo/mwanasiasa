import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://x.com/ppk_kenya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-ppk-grey hover:text-ppk-green"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://facebook.com/ppk_kenya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-ppk-grey hover:text-ppk-green"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://instagram.com/ppk_kenya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-ppk-grey hover:text-ppk-green"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://youtube.com/ppk_kenya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-ppk-grey hover:text-ppk-green"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
}

export default SocialMedia;