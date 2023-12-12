import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// type Props = {};

const Footer = () => {
  return (
    <div className="FooterContainer">
      <footer className="flex flex-col space-y-5  justify-center m-2 footerContent">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <div className="bg-white-800 text-black p-2">
            <div className="container mx-auto flex justify-center items-center">
              {/* <Link to={"/"} className="text-lg hover:text-gray-900">
                Child Adoption System
              </Link> */}
            </div>
          </div>
        </nav>
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email Address"
            className="border-none rounded-l-md p-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
            Subscribe To Newsletter
          </button>
        </div>

        <p className="text-center text-gray-700 font-medium">
          © 2023 Company Ltd. All rights reservered.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
