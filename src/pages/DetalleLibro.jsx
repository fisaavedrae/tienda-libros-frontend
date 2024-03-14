import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";
import PropTypes from "prop-types";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const DetalleLibro = (props) => {
  const {
    total,
    setTotal,
    productos,
    carro,
    setCarro,
    prefijoImagen,
    formatPrecio,
    agregarCarrito,
  } = useContext(MyContext);
  const { id } = useParams();
  const [cant, setCant] = useState(1);

  const libro = productos.find(
    (producto) => Number(producto.id) === Number(id)
  );
  const product = productos.find(
    (producto) => Number(producto.id) === Number(id)
  );
  console.log("id", id);
  console.log(product);
  console.log(productos);
  return (
    <>
      <Header />

      <div className="container d-flex gap-5">
        <div className="div">
          <img src={prefijoImagen + libro.urlimg} alt="" />
        </div>
        <div className="div">
          <h2>{libro.titulo}</h2>
          <h2 className="mt-4">{formatPrecio(libro.precio)}</h2>
          <div className="divider mt-4"></div>
          <div className="container mt-5">{libro.resenia}</div>
          <div className="d-flex gap-2 align-items-center mt-5">
            <span>Cant</span>
            <input type="number" />
            <button
              onClick={() => {
                agregarCarrito(1, libro);
              }}
              className="btn btn-filtros"
            >
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

DetalleLibro.propTypes = {};

export default DetalleLibro;
