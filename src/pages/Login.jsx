import React from "react";
import PropTypes from "prop-types";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const Login = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Login</h1>
        <div className="container w-50 border rounded mt-3 py-5 px-5">
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email </label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center mt-5">
              <button type="submit" className="btn btn-filtros">
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
