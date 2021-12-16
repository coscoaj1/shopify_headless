import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto flex justify-between border-t border-gray-300 p-4">
      <p className="text-gray-700">Copyright 2021 Gourmet Cat Food</p>
      <div className="flex gap-4">
        <FaFacebook className="w-6 h-6 text-gray-700" />
        <FaInstagramSquare className="w-6 h-6 text-gray-700" />
        <FaTwitter className="w-6 h-6 text-gray-700" />
      </div>
    </footer>
  );
}

export default Footer;
