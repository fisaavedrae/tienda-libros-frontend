import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";
import PropTypes from "prop-types";
import "../assets/css/paginacion.css";

const Paginacion = ({ cantidadLibros }) => {
  const {
    total,
    setTotal,
    productos,
    carro,
    setCarro,
    prefijoImagen,
    formatPrecio,
    agregarCarrito,
    filtros,
    setCurrentPage,
    currentPage,
    setFiltros,
    ReadAPI,
  } = useContext(MyContext);

  const paginationNumbers = [];
  console.log("cantidadLibros", cantidadLibros);
  for (let i = 1; i <= Math.ceil(cantidadLibros / filtros.limits); i++) {
    paginationNumbers.push(i);
  }

  const handlePagination = (pageNumber) => {
    setFiltros({ ...filtros, page: pageNumber });
    ReadAPI();
  };
  return (
    <>
      <div className="container d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="paginations gap-2">
            <li className="page-items">
              <a className="page-link" href="#">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            {paginationNumbers.map((number, index) => (
              <li key={index} className="page-items">
                <Link
                  className={
                    filtros.page == number
                      ? "page-link pagina-actual"
                      : "page-link"
                  }
                  onClick={() => handlePagination(number)}
                >
                  {number}
                </Link>
              </li>
            ))}

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

Paginacion.propTypes = {
  cantidadLibros: PropTypes.number,
};

export default Paginacion;
