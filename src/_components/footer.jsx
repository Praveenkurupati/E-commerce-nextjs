// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-300 text-gray-600">
      <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 bg-black w-full md:w-[80%] justify-center text-white py-8 px-4 md:px-12 flex flex-col items-center shadow-lg rounded-lg">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-6">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="flex flex-col md:flex-row w-full md:max-w-lg">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 w-full md:w-2/3 rounded-l-md border-none outline-none text-black mb-4 md:mb-0"
          />
          <button className="bg-white text-black p-3 w-full md:w-auto md:rounded-r-md rounded-md md:rounded-l-none">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="container mx-auto py-20 px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mt-[80px]">
        <div>
          <h4 className="font-bold mb-4">SHOP.CO</h4>
          <p className="mb-4">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Github">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">HELP</h4>
          <ul>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Delivery Details</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">FAQ</h4>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Manage Deliveries</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">RESOURCES</h4>
          <ul>
            <li>
              <a href="#">Free eBooks</a>
            </li>
            <li>
              <a href="#">Development Tutorial</a>
            </li>
            <li>
              <a href="#">How to - Blog</a>
            </li>
            <li>
              <a href="#">Youtube Playlist</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 py-6 text-center">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="mt-4 flex justify-center space-x-4">
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/paypal.png" alt="Paypal" className="h-6" />
          <img src="/apple-pay.png" alt="Apple Pay" className="h-6" />
          <img src="/google-pay.png" alt="Google Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
