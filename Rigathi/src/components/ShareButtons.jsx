import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function ShareButtons({ url, title }) {
  return (
    <div className="flex space-x-4">
      <TwitterShareButton url={url} title={title}>
        <FaTwitter size={24} className="text-ppk-grey hover:text-ppk-green" />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={title}>
        <FaFacebook size={24} className="text-ppk-grey hover:text-ppk-green" />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp size={24} className="text-ppk-grey hover:text-ppk-green" />
      </WhatsappShareButton>
    </div>
  );
}

export default ShareButtons;