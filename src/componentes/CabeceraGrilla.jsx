import PropTypes from "prop-types";

const CabeceraGrilla = ({ cantidadLibros }) => {
  return (
    <div
      id="cabecera-grilla"
      className="container d-flex flex-row justify-content-between align-items-center border-bottom border-top mb-3 pt-3 pb-3"
    >
      <p>Mostrando {cantidadLibros} Libros</p>
      <div className="d-flex flex-row justify-content-between">
        <select
          className="form-select form-select-sm"
          aria-label="Small select example"
        >
          <option selected>Ordenar por</option>
          <option value="1">precio menor</option>
          <option value="2">precio mayor</option>
          <option value="3">Titulo a-z</option>
          <option value="4">Titulo z-a</option>
        </select>
      </div>
    </div>
  );
};

CabeceraGrilla.propTypes = {
  cantidadLibros: PropTypes.number,
};

export default CabeceraGrilla;
