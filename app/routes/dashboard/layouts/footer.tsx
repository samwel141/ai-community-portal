import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-8 bg-secondary text-white flex items-center justify-center">
      <p className="text-center text-sm">
        &copy; {currentYear} Elimelech Virtuosos International. { " "} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
