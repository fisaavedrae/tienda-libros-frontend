import React from "react";
import PropTypes from "prop-types";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../assets/css/form.css";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    ("use strict");
    console.log("entre a validar formß");

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
      <div className="container  col-md-6 offset-md-3">
        <h1>Login</h1>
        <div className="container  border rounded mt-3 py-5 px-5">
          <form
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                id="validationCustom01"
                required
              />
              <label htmlFor="validationCustom01" className="ms-1">
                Email{" "}
              </label>
              <div className="invalid-feedback">Debe ingresar su correo.</div>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword" className="ms-1">
                Password
              </label>
              <div className="invalid-feedback">Debe ingresar su password</div>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center mt-5">
              <button
                type="submit"
                className="btn btn-filtros text-uppercase fw-light"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

Login.propTypes = {};

export default Login;
