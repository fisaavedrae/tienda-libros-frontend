import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./context/MyContext.jsx";
import SideCart from "./SideCart.jsx";
import Search from "./Search.jsx";
import jsonLibros from "../assets/libros.json";
const Header = ({
  ishome = true,
  isSearch = true,
  isCarrito = true,
  isAdmin = true,
  isUser = true,
}) => {
  const { carro, setProductos, setIsLoading } = useContext(MyContext);

  useEffect(() => {
    ReadAPI();
  }, []);

  async function ReadAPI() {
    try {
      //const response = await fetch("https://dummyjson.com/products");
      //const data = await response.json();
      console.log("readapi");
      setProductos(jsonLibros);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg sticky-top  ">
          <div className="container-fluid">
            <p className="navbar-brand">Tienda Libros</p>
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
                <ul className="nav justify-content-end gap-3">
                  {ishome && (
                    <li className="nav-item">
                      <Link to="/">
                        <i className="fa-solid fa-house"></i>
                      </Link>
                    </li>
                  )}
                  {isSearch && (
                    <li className="nav-item">
                      <i
                        className="fa-solid fa-magnifying-glass"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSearch"
                        aria-controls="offcanvasSearch"
                      ></i>
                    </li>
                  )}
                  {isCarrito && (
                    <li className="nav-item">
                      <i
                        className="fa-solid fa-cart-shopping position-relative icono-header"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                      >
                        <span
                          id="circuloCarro"
                          className="position-absolute top-0 start-100 translate-middle p-1  border border-light rounded-circle"
                        >
                          {carro.length}
                          <span className="visually-hidden">
                            productos en el carro
                          </span>
                        </span>
                      </i>
                    </li>
                  )}
                  {isAdmin && (
                    <li className="nav-item">
                      <Link to="/Admin">
                        <i className="fa-solid fa-gear"></i>
                      </Link>
                    </li>
                  )}
                  {isUser && (
                    <li className="nav-item dropdown">
                      <i
                        className="fa-solid fa-user "
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                      ></i>
                      <ul className="dropdown-menu dropdown-menu-end ">
                        <li>
                          <Link className="dropdown-item" to={"/Login"}>
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/Registro"}>
                            Crear cuenta
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/Ordenes"}>
                            Mis Ordenes
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/CerrarSesion"}>
                            Cerrar Sesion
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Search />
      <SideCart />
    </>
  );
};

Header.propTypes = {
  ishome: PropTypes.bool,
  isSearch: PropTypes.bool,
  isCarrito: PropTypes.bool,
  isAdmin: PropTypes.bool,
  isUser: PropTypes.bool,
};

export default Header;
