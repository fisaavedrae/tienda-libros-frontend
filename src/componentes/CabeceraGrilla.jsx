import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";

const CabeceraGrilla = ({ cantidadLibros }) => {
  const [orden, setOrden] = useState("");
  const { productos, setProductos } = useContext(MyContext);
  const handleClick = (clave) => {
    //alert("ingreze");
    //setOrden(clave);
    //console.log("orden : " + orden + " busqueda realizada: " + orden);
    //const resultadoOrden = [...productos];
    //if (orden === "asc") {
    //  resultadoOrden.reverse();
    //} else if (orden === "desc") {
    //  resultadoOrden.reverse();
    //}
    //setProductos(resultadoOrden);
  };
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
          <option value="1" onClick={handleClick("precio-menor")}>
            precio menor
          </option>
          <option value="2" onClick={handleClick("precio-mayor")}>
            precio mayor
          </option>
          <option value="3" onClick={handleClick("asc")}>
            Titulo a-z
          </option>
          <option value="4" onClick={handleClick("desc")}>
            Titulo z-a
          </option>
        </select>
      </div>
    </div>
  );
};

CabeceraGrilla.propTypes = {
  cantidadLibros: PropTypes.number,
};

export default CabeceraGrilla;
