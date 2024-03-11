import React from "react";
import PropTypes from "prop-types";

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
  return (
    <>
      <div className="container">
        <h1>Generos</h1>
        <ul className="list-group list-group-flush ">
          {generos.map((genero) => (
            <>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="div">{genero}</div>
                <div className="div">(3)</div>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="container mt-3">
        <h1>Autores</h1>
        <ul className="list-group list-group-flush ">
          {autores.map((autor) => (
            <>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="div">{autor}</div>
                <div className="div">(3)</div>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="container mt-3">
        <h1>Editoriales</h1>
        <ul className="list-group list-group-flush ">
          {editoriales.map((editorial) => (
            <>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="div">{editorial}</div>
                <div className="div">(3)</div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

Filtros.propTypes = {};

export default Filtros;
