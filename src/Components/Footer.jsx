import React from 'react';

const Footer = () => {
  return (
<footer className="bg-[#0B0D20] text-white py-6 mt-16 border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
    <p className="text-sm text-gray-400 text-center">
      © {new Date().getFullYear()} All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
