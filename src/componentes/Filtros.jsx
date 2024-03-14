import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MyContext } from "./context/MyContext.jsx";

const autores = [
  "Paulo Coelho",
  "Oscar Wilde",
  "Douglas Crockford",
  "Robert Louis Stevenson",
  "F. Scott Fitzgerald",
  "Mary Shelley",
  "Patrick Rothfuss",
  "Jane Austen",
  "Robert C. Martin",
  "Harper Lee",
  "Miguel de Cervantes",
  "J.R.R. Tolkien",
  "Arthur Conan Doyle",
  "George Orwell",
  "Ernest Hemingway",
  "Carlos Ruiz Zafón",
  "Dan Brown",
  "J.K. Rowling",
  "J.D. Salinger",
  "León Tolstói",
  "Herman Melville",
  "Brian W. Kernighan, Dennis M. Ritchie",
  "Torcuato Luca de Tena",
  "Victor Hugo",
  "Gabriel García Márquez",
  "Daniel Defoe",
  "Eric Matthes",
];
const generos = [
  "Ficción",
  "Ciencia ficcion",
  "Romance",
  "Fábula",
  "Clásico",
  "Aventura",
  "Programación",
  "Misterio",
  "Fantasía",
];
const editoriales = [
  "Bloomsbury Publishing",
  "Editorial Planeta",
  "Longmans, Green & Co.",
  "Editorial Sudamericana",
  "J.B. Lippincott & Co.",
  "T. Egerton, Whitehall",
  "Juan de la Cuesta",
  "George Allen & Unwin",
  "Prentice Hall",
  "Kurt Wolff Verlag",
  "DAW Books",
  "A. Lacroix, Verboeckhoven & Cie",
  "Secker & Warburg",
];
const Filtros = (props) => {
  const {
    productos,

    setOpenVistaRapida,
    idProductoVistaRapida,
    setIdProductoVistaRapida,
    agregarCarrito,
    formatPrecio,
    filtros,
    setFiltros,
  } = useContext(MyContext);

  const handleFiltroPrecio = (valor) => {
    console.log("entre");
    setFiltros({ ...filtros, maxPrice: valor }); // filtros["maxPrice"] = valor;
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
            <button className="btn btn-filtros">Filtrar</button>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Generos</h1>
        <ul className="list-group list-group-flush ">
          {generos.map((genero, index) => (
            <li
              key={index}
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
