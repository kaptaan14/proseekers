import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} proseekers. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
