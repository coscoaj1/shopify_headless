import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between p-4 mx-auto border-t border-gray-300 max-w-7xl">
      <p className="text-gray-700">Copyright 2022 Vital Gear Shop</p>
      <div className="flex gap-4">
        <FaFacebook className="w-6 h-6 text-gray-700" />
        <FaInstagramSquare className="w-6 h-6 text-gray-700" />
        <FaTwitter className="w-6 h-6 text-gray-700" />
      </div>
    </footer>
  );
}

export default Footer;
