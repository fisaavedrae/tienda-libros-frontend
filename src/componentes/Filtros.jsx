import React from "react";
import PropTypes from "prop-types";

const Filtros = (props) => {
  return (
    <>
      <div className="div">
        <h1>Generos</h1>
        <ul>
          <li>Ficción</li>
          <li>Ciencia ficción</li>
          <li>Romance</li>
          <li>Fábula</li>
          <li>Fantasía</li>
          <li>Misterio</li>
          <li>Clásico</li>
        </ul>
      </div>
    </>
  );
};

Filtros.propTypes = {};

export default Filtros;
