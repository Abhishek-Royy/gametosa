import React from "react";
import { NavLink } from "react-router-dom";

import FullLogo from "../assets/fulllogo.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#061A40] text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          <div className="flex items-center mb-4">
            <a href="https://gametosa.com" className="mr-2">
              <div className="logo w-40 h-15">
                <img className="w-full h-full" src={FullLogo} alt="logo" />
              </div>
            </a>
          </div>
          <p className="text-sm font-bold">
            Gametosa is India's #1 mobile eSports Hosting and gaming platform
            that is empowering the rapidly rising community of Creators,
            YouTubers, and eSports fans. Join our thriving community of
            passionate gamers and content creators, and start earning real money
            on the platform.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h6 className="font-bold mb-2">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/" className="hover:underline">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/aboutUs.php"
                    className="hover:underline"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/blogs.php"
                    className="hover:underline"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/prime.php"
                    className="hover:underline"
                  >
                    Prime
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-2">Company</h6>
              <ul className="space-y-2">
                <li>
                  <NavLink to="../product" className="hover:underline">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/career.php"
                    className="hover:underline"
                  >
                    Career
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/faq.php"
                    className="hover:underline"
                  >
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/tutorials.php"
                    className="hover:underline"
                  >
                    Tutorials
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-2">Policies</h6>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="../html pages/terms&conditions.html"
                    className="hover:underline"
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/privacyPolicy.html"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="../html pages/refund&cancellation.php"
                    className="hover:underline"
                  >
                    Refund and Cancellation
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-6">
          <h6 className="font-bold mb-2">Follow Us</h6>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://discord.gg/XazEsnagMb"
              target="_blank"
              className="social  w-8 h-8  flex items-center justify-center"
            >
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/discord-logo-png-transparent.png"
                alt="discord"
              />
            </a>

            <a
              href="https://www.facebook.com/gametosa/"
              target="_blank"
              className="social  w-8 h-8  flex items-center justify-center"
            >
              <img
                src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/Gametosa"
              target="_blank"
              className="social  w-8 h-8  flex items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt="instagram"
              />
            </a>
            <a
              href="https://twitter.com/Gametosa?s=20&t=ECIlpZNE9Yc_0qM7MArJDQ"
              target="_blank"
              className="social  w-8 h-8  flex items-center justify-center"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/gametosa/"
              target="_blank"
              className="social  w-8 h-8  flex items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="linkedin"
              />
            </a>
          </div>
          <p className="text-base font-semibold">&copy; 2024 Gametosa | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
