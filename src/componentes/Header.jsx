import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./context/MyContext.jsx";
import SideCart from "./SideCart.jsx";
import Search from "./Search.jsx";

const Header = (props) => {
  const { setOpen, carro } = useContext(MyContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tienda Libros
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-flex flex-row justify-content-end items-end gap-3 w-100">
              <Link to="/">
                <i className="fa-solid fa-house"></i>
              </Link>
              <i
                className="fa-solid fa-magnifying-glass"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSearch"
                aria-controls="offcanvasSearch"
              ></i>

              <i
                className="fa-solid fa-cart-shopping position-relative icono-header"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-white border border-light rounded-circle">
                  {carro.length}
                  <span className="visually-hidden">productos en el carro</span>
                </span>
              </i>

              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
      </nav>
      <Search />
      <SideCart />
    </>
  );
};

Header.propTypes = {};

export default Header;
