import PropTypes from "prop-types";
import React, { useContext } from "react";
import "../assets/css/hover.css";
import { MyContext } from "./context/MyContext.jsx";
import { useNavigate } from "react-router-dom";
import Paginacion from "./Paginacion.jsx";
import Filtros from "./Filtros.jsx";
import CabeceraGrilla from "./CabeceraGrilla.jsx";

const GrillaLibros = (props) => {
  const {
    productos,
    librosFiltrados,
    setOpenVistaRapida,
    idProductoVistaRapida,
    setIdProductoVistaRapida,
    agregarCarrito,
    formatPrecio,
  } = useContext(MyContext);
  const handleVistaRapida = (id) => {
    console.log("entre");

    setIdProductoVistaRapida(id);
    setOpenVistaRapida(true);
  };

  const navigate = useNavigate();
  const irAProducto = (id) => {
    navigate(`/Libro/${id}`);
  };

  return (
    <>
      <div id="contenedor-libros" className="container ">
        <div id="filtros" className="container">
          <Filtros />
        </div>
        <div id="libros">
          <div className="GrillaProductos">
            <CabeceraGrilla cantidadLibros={librosFiltrados.length} />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {librosFiltrados.map((product, index) => (
                <div key={index} className="col">
                  <div className="card">
                    <div className="hovereffect">
                      <img
                        src={
                          "https://fidatech.net/felipe/fotos-libros/" +
                          product.urlimg
                        }
                        className="card-img-top"
                        alt={product.titulo}
                      />
                      <div className="overlay d-flex flex-column justify-content-end align-items-center">
                        <div className="d-flex flex-row justify-content-between gap-3 fs-3 ">
                          <i
                            className="fa-solid fa-cart-shopping mb-4"
                            onClick={() => agregarCarrito(1, product)}
                          />
                          <i
                            className="fa-solid fa-magnifying-glass-plus"
                            onClick={() => irAProducto(product.id)}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.titulo}</h5>
                      <p className="card-text">
                        {formatPrecio(product.precio)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Paginacion />
        </div>
      </div>
    </>
  );
};

GrillaLibros.propTypes = {};

export default GrillaLibros;
