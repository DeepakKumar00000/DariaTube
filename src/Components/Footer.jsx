import { FaFacebookF, FaTwitter, FaYoutube, FaBehance, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="bg-gradient-to-b bg-[#C5D0E9] text-gray-900 pt-10 px-4 pb-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Left section: Stay in the Laugh Loop */}
    <div>
      <h3 className="font-bold text-lg sm:text-xl whitespace-nowrap mb-2">
        Stay In The Laugh Loop
      </h3>
      <p className="text-sm mb-4">
        <span className="whitespace-nowrap">
          Subscribe for fresh jokes, show alerts, and behind-the-mic
        </span><br />
        banter. No spam. Only stand-up gold.
      </p>
      <button className="bg-[#FF6800] text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
        Join The Fun
      </button>
    </div>

 {/* Right section: shifted grid of 4 columns */}
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-6 md:ml-16">
      <div>
        <h4 className="font-bold text-lg text-[#FF6800] mb-2">Explore</h4>
        <ul className="space-y-1 text-sm">
          <li>Shows</li>
          <li>Events</li>
          <li>Venues</li>
          <li>Tickets</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg text-[#FF6800] mb-2">Connect</h4>
        <ul className="space-y-1 text-sm">
          <li>Contact Us</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg text-[#FF6800] mb-2">The Crew</h4>
        <ul className="space-y-1 text-sm">
          <li>Comedians</li>
          <li>Blog</li>
          <li>Merch</li>
          <li>Behind Scenes</li>
        </ul>
      </div>
      <div>
    <h4 className="font-bold text-lg text-[#FF6800] whitespace-nowrap mb-2">Laugh Support</h4>
        <ul className="space-y-1 text-sm">
          <li>FAQ</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Report A Heckler</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Footer bottom bar */}
  <div className="max-w-6xl mx-auto mt-10 border-t border-orange-400 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
    <p>©2025 — All rights reserved by VisionTrek Communications </p>
    <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
      <FaFacebookF />
      <FaTwitter />
      <FaYoutube />
      <FaBehance />
      <FaTwitch />
    </div>
  </div>
</footer>
  );
};
export default Footer;