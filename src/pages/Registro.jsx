import React from "react";
import PropTypes from "prop-types";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const Registro = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    ("use strict");
    console.log("entre a validar fomr");

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            console.log(form);
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  };
  return (
    <>
      <Header isSearch={false} isCarrito={false} isAdmin={false} />
      <div className="container-fluid col-md-6 offset-md-3">
        <h1>Crear cuenta</h1>
        <div className="container  border rounded mt-3 py-5 px-5">
          <form
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Dan Brown"
                id="inputNombre"
                required
              />
              <label htmlFor="inputNombre" className="ms-1">
                Nombre completo
              </label>
              <div className="invalid-feedback">
                Debe ingresar su Nombre Completo.
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="nombre@ejemplo.com"
                id="inputEmail"
                required
              />
              <label htmlFor="inputEmail" className="ms-1">
                Email
              </label>
              <div className="invalid-feedback">Debe ingresar su correo.</div>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="inputPassword" className="ms-1">
                Password
              </label>
              <div className="invalid-feedback">Debe ingresar su password</div>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputDireccion"
                placeholder="Los rios 123, Providencia"
                required
              />
              <label htmlFor="inputDireccion" className="ms-1">
                Dirección
              </label>
              <div className="invalid-feedback">Debe ingresar su direccion</div>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputCiudad"
                placeholder="Santiago"
                required
              />
              <label htmlFor="inputCiudad" className="ms-1">
                Ciudad
              </label>
              <div className="invalid-feedback">Debe ingresar su ciudad</div>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center mt-5">
              <button
                type="submit"
                className="btn btn-filtros text-uppercase fw-light"
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

Registro.propTypes = {};

export default Registro;
