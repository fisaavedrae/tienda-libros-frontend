import React from "react";
import PropTypes from "prop-types";
import "../assets/css/paginacion.css";

const Paginacion = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination gap-2">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link pagina-actual" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

Paginacion.propTypes = {};

export default Paginacion;
