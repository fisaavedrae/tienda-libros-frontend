import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";
import "../assets/css/carro.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const Pago = (props) => {
  const {
    productos,
    setProductos,
    carro,
    setCarro,
    total,
    setTotal,
    formatPrecio,
    prefijoImagen,
  } = useContext(MyContext);

  function handleCheckout() {}
  return (
    <>
      <Header />
      <div className="container">
        <div className="container mt-5 mb-5 text-center align-items-center">
          <div className=" orden-creada">
            <h2>Se ha generado la orden N° 00000012</h2>
            <p>Gracias por su compra</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Pago.propTypes = {};

export default Pago;
