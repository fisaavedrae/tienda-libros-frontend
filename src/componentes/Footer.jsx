import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
        <p className="text-center text-body-secondary">
          © 2024 Desarrollado por Ricardo Barrientos y{" "}
          <a href="https://fidatech.net/felipe">Felipe Saavedra</a>
        </p>
      </footer>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
