import PropTypes from "prop-types";
import React, { useContext } from "react";
import "../assets/css/hover.css";
import { MyContext } from "./context/MyContext.jsx";
import { useNavigate } from "react-router-dom";
import Paginacion from "./Paginacion.jsx";
import Filtros from "./Filtros.jsx";

const GrillaLibros = (props) => {
  const {
    productos,

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
        <div id="filtros">
          <Filtros />
        </div>
        <div id="libros">
          <div className="GrillaProductos">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {productos.map((product) => (
                <>
                  <div className="col">
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
                        <div className="overlay">
                          <h2>Hover effect 1</h2>
                          <a
                            className="info"
                            href="#"
                            onClick={() => agregarCarrito(product)}
                          >
                            <i className="fa-solid fa-cart-shopping" />
                          </a>
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
                </>
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
