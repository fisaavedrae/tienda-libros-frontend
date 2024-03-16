import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MyContext } from "./context/MyContext.jsx";
import autores from "../assets/autores.js";
import generos from "../assets/generos.js";
import editoriales from "../assets/editoriales.js";

const Filtros = (props) => {
  const {
    productos,
    setProductos,
    setOpenVistaRapida,
    idProductoVistaRapida,
    setIdProductoVistaRapida,
    agregarCarrito,
    formatPrecio,
    filtros,
    setFiltros,
    ReadAPI,
    librosFiltrados,
    setLibrosFiltrados,
  } = useContext(MyContext);

  const handleFiltroPrecio = (valor) => {
    console.log("entre");
    setFiltros({ ...filtros, maxPrice: valor }); // filtros["maxPrice"] = valor;
  };

  const handleFiltroGenero = (valor) => {
    console.log("entre");
    setFiltros({ ...filtros, genero: valor }); // filtros["maxPrice"] = valor;
    handleFiltrar();
  };

  const handleFiltroAutor = (valor) => {
    console.log("entre");
    setFiltros({ ...filtros, autor: valor }); // filtros["maxPrice"] = valor;
    handleFiltrar();
  };

  const handleFiltroEditorial = (valor) => {
    console.log("entre");
    setFiltros({ ...filtros, editorial: valor }); // filtros["maxPrice"] = valor;
    handleFiltrar();
  };

  const handleFiltrar = () => {
    console.log("entre");
    console.log("antes filtro:", productos);
    const libros = filtrarLibros(productos);
    console.log("despues filtro: ", libros);
    setLibrosFiltrados(libros);
  };

  const filtrarLibros = (libros) => {
    console.log("entre");
    console.log("filtros: ", filtros);
    return libros.filter((libro) => {
      return (
        libro.precio <= filtros.maxPrice &&
        (filtros.autor === "all" || libro.autor === filtros.autor) &&
        (filtros.editorial === "all" ||
          libro.editorial === filtros.editorial) &&
        (filtros.genero === "all" || libro.genero === filtros.genero)
      );
    });
  };
  return (
    <>
      <div className="container mb-4">
        <h1>Filtro por precio</h1>
        <div className="div">
          <input
            type="range"
            min="0"
            max="100000"
            className="form-range"
            id="customRange1"
            onChange={(e) => {
              handleFiltroPrecio(e.target.value);
            }}
          />
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span>Precio maximo: {formatPrecio(filtros.maxPrice)}</span>
            <button className="btn btn-filtros" onClick={handleFiltrar}>
              Filtrar
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-4 d-flex  gap-4">
        {filtros.genero !== "all" && (
          <span
            className="badge text-bg-dark position-relative"
            onClick={() => handleFiltroGenero("all")}
          >
            {filtros.genero}
            <span className="position-absolute ms-2 top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
              <i className="fa fa-xmark"></i>
              <span className="visually-hidden">New alerts</span>
            </span>
          </span>
        )}
        {filtros.autor !== "all" && (
          <span
            className="badge text-bg-dark position-relative"
            onClick={() => handleFiltroAutor("all")}
          >
            {filtros.autor}
            <span className="position-absolute ms-2 top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
              <i className="fa fa-xmark"></i>
              <span className="visually-hidden">New alerts</span>
            </span>
          </span>
        )}
        {filtros.editorial !== "all" && (
          <span
            className="badge text-bg-dark position-relative"
            onClick={() => handleFiltroEditorial("all")}
          >
            {filtros.editorial}
            <span className="position-absolute ms-2 top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
              <i className="fa fa-xmark"></i>
              <span className="visually-hidden">New alerts</span>
            </span>
          </span>
        )}
      </div>
      <div className="container">
        <h1>Generos</h1>
        <ul className="list-group list-group-flush ">
          {generos.map((genero, index) => (
            <li
              key={index}
              onClick={() => handleFiltroGenero(genero)}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="div">{genero}</div>
              <div className="div">(3)</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-3">
        <h1>Autores</h1>
        <ul className="list-group list-group-flush ">
          {autores.map((autor, index) => (
            <li
              key={index}
              onClick={() => handleFiltroAutor(autor)}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="div">{autor}</div>
              <div className="div">(3)</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-3">
        <h1>Editoriales</h1>
        <ul className="list-group list-group-flush ">
          {editoriales.map((editorial, index) => (
            <li
              key={index}
              onClick={() => handleFiltroEditorial(editorial)}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="div">{editorial}</div>
              <div className="div">(3)</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Filtros.propTypes = {};

export default Filtros;
