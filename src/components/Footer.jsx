import React from 'react';

const Footer = () => {
  return (
    <footer className ="footer py-4 bg-dark text-white">
    <div className="container text-center">
        <p>© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
        <p>Follow us on:
            <a href="#" className="text-white">Facebook</a> | 
            <a href="#" className="text-white">Twitter</a> |
            <a href="#" className="text-white">LinkedIn</a>
        </p>
    </div>
</footer>
  );
};

export default Footer;