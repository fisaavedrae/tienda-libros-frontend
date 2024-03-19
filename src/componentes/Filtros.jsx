import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { MyContext } from "./context/MyContext.jsx";

import Spinner from "./Spinner.jsx";
//import autores from "../assets/autores.js";
//import generos from "../assets/generos.js";
//import editoriales from "../assets/editoriales.js";

const Filtros = (props) => {
  const {
    productos,
    formatPrecio,
    filtros,
    setFiltros,
    ReadAPI,
    setLibrosFiltrados,
  } = useContext(MyContext);

  const [autores, setAutores] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [editoriales, setEditoriales] = useState([]);

  const [isLoadingAutores, setIsLoadingAutores] = useState(false);
  const [isLoadingGeneros, setIsLoadingGeneros] = useState(false);
  const [isLoadingEditoriales, setIsLoadingEditoriales] = useState(false);

  useEffect(() => {
    cargarFiltros();
  }, []);
  async function cargarFiltros() {
    console.log("filtros", filtros);
    try {
      setIsLoadingAutores(false);
      const response = await fetch("http://localhost:3000/autores");
      const data = await response.json();
      //console.log("readapi autores");
      setAutores(data);
      setIsLoadingAutores(true);
    } catch (error) {
      console.log(error);
    }
    try {
      setIsLoadingEditoriales(false);
      const response = await fetch("http://localhost:3000/editoriales");
      const data = await response.json();
      //console.log("readapi autores");
      setEditoriales(data);
      setIsLoadingEditoriales(true);
    } catch (error) {
      console.log(error);
    }
    try {
      setIsLoadingGeneros(false);
      const response = await fetch("http://localhost:3000/generos");
      const data = await response.json();
      //console.log("readapi autores");
      setGeneros(data);
      setIsLoadingGeneros(true);
    } catch (error) {
      console.log(error);
    }
  }
  const handleLimpiarFiltros = (valor) => {
    setFiltros({
      ...filtros,
      id_genero: "-1",
      id_autor: valor,
      id_editorial: valor,
    });

    handleFiltrar();
  };
  const handleFiltroPrecio = (valor) => {
    //console.log("entre");
    setFiltros({ ...filtros, maxPrice: valor });
  };

  const handleFiltroGenero = (valor) => {
    console.log("entre a filtrar generio");
    setFiltros({ ...filtros, id_genero: valor });
    handleFiltrar();
  };

  const handleFiltroAutor = (valor) => {
    //console.log("entre");
    setFiltros({ ...filtros, id_autor: valor });
    handleFiltrar();
  };

  const handleFiltroEditorial = (valor) => {
    //console.log("entre");
    setFiltros({ ...filtros, id_editorial: valor });
    handleFiltrar();
  };

  const handleFiltrar = () => {
    // console.log("entre");
    console.log("antes filtro:", productos);
    ReadAPI();
    //const libros = filtrarLibros(productos);
    console.log("despues filtro: ", productos);
    setLibrosFiltrados(productos);
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
        {(filtros.id_genero !== "-1" ||
          filtros.id_autor !== "-1" ||
          filtros.id_editorial !== "-1") && (
          <span
            className="badge text-bg-dark position-relative"
            onClick={() => handleLimpiarFiltros("-1")}
          >
            Limpiar filtros
            <span className="position-absolute ms-2 top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
              <i className="fa fa-xmark"></i>
              <span className="visually-hidden">New alerts</span>
            </span>
          </span>
        )}
      </div>
      <div className="container">
        <h1>Generos</h1>
        {!isLoadingGeneros && <Spinner />}
        <ul className="list-group list-group-flush ">
          {generos.map((genero, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="div">
                <Link
                  className="link-filtros"
                  onClick={() => handleFiltroGenero(genero.id_genero)}
                >
                  {genero.genero}
                </Link>
              </div>
              <div className="div">({genero.cantidad_libros})</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-3">
        <h1>Autores</h1>
        {!isLoadingAutores && <Spinner />}
        <ul className="list-group list-group-flush ">
          {autores.map((autor, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="div">
                <Link
                  className="link-filtros"
                  onClick={() => handleFiltroAutor(autor.id_autor)}
                >
                  {autor.nombre}
                </Link>
              </div>
              <div className="div">({autor.cantidad_libros})</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-3">
        <h1>Editoriales</h1>
        {!isLoadingEditoriales && <Spinner />}
        <ul className="list-group list-group-flush ">
          {editoriales.map((editorial, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="div">
                <Link
                  className="link-filtros"
                  onClick={() => handleFiltroEditorial(editorial.id_editorial)}
                >
                  {editorial.nombre}
                </Link>
              </div>
              <div className="div">({editorial.cantidad_libros})</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Filtros.propTypes = {};

export default Filtros;
