// components/Footer.tsx
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Column 1</h3>
          {/* Add content for the first column */}
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Column 2</h3>
          {/* Add content for the second column */}
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Column 3</h3>
          {/* Add content for the third column */}
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
        {/* Add social media icons and links */}
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
