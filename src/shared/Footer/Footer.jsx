import React from 'react';

const Footer = () => {
    return (
        <footer className="footer border-t-2 footer-center text-gray-100 p-6">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Rafi</p>
        </aside>
      </footer>
    );
};

export default Footer;