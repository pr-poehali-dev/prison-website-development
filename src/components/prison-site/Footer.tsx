
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-8 text-center text-gray-500 text-sm">
      <p>Вернуться на <Link to="/" className="text-blue-600 hover:underline">главную страницу</Link></p>
    </div>
  );
};

export default Footer;
