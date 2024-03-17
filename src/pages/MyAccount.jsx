import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const MyAccount = (props) => {
  const usuario = [
    {
      id: 1,
      nombre: "Marcelo Salas",
      email: "MarceloSalas@lazio.it",
      direccion: "San Martin 1234, Renca",
      ciudad: "Santiago",
    },
  ];
  return (
    <>
      <Header />
      <div className=" row mb-3">
        <div className="col-md-3 themed-grid-col py-4 px-5">
          <h1 className="text-uppercase">Navegación</h1>
          <div className="d-flex flex-column">
            <Link to="/MiCuenta">Mi Cuenta</Link>
            <Link to="/Ordenes">Mis Ordenes</Link>
          </div>
        </div>
        <div className="col-md-9 themed-grid-col py-4 px-5">
          <h1 className="text-uppercase ms-2">Mis Cuenta</h1>
          <div className="container d-flex flex-column  gap-5">
            <div className="div d-flex gap-5">
              <div className="div d-flex flex-column">
                <h2 className="fs-6">Nombre </h2>
                <span className="fw-light">{usuario[0].nombre}</span>
              </div>
              <div className="div d-flex flex-column">
                <h2 className="fs-6">Email </h2>
                <span className="fw-light">{usuario[0].email}</span>
              </div>
            </div>
            <div className="div d-flex gap-5">
              <div className="div d-flex flex-column">
                <h2 className="fs-6">Dirección </h2>
                <span className="fw-light">{usuario[0].direccion}</span>
              </div>
              <div className="div d-flex flex-column">
                <h2 className="fs-6">Ciudad </h2>
                <span className="fw-light">{usuario[0].ciudad}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

MyAccount.propTypes = {};

export default MyAccount;
