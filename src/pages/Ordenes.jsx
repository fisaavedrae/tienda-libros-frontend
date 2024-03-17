import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";
import jsonOrdenes from "../assets/ordenes.json";
import "../assets/css/carro.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import DetalleOrden from "../componentes/DetalleOrden.jsx";

const Ordenes = (props) => {
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
          <h1 className="text-uppercase ms-2">Mis Ordenes</h1>
          <table className="table-sm">
            <thead>
              <tr>
                <th scope="col" className="text-uppercase fs-6 fw-medium">
                  Orden
                </th>
                <th scope="col" className="text-uppercase  fs-6 fw-medium ">
                  fecha de compra
                </th>
                <th scope="col" className="text-uppercase  fs-6 fw-medium">
                  cantidad libros
                </th>
                <th
                  scope="col"
                  className="text-uppercase text-nowrap fs-6 fw-medium"
                >
                  total
                </th>
                <th
                  scope="col"
                  className="text-uppercase text-nowrap fs-6 fw-medium"
                >
                  ver
                </th>
              </tr>
            </thead>
            {jsonOrdenes.map((orden, index) => (
              <tbody key={index}>
                <tr>
                  <td scope="row" className="fs-6 fw-light">
                    {orden.id_orden}
                  </td>
                  <td className="fs-6 fw-light">{orden.fecha_orden}</td>
                  <td className="fs-6 fw-light">{orden.libros.length}</td>
                  <td className="text-center text-nowrap fs-6 fw-light">
                    {formatPrecio(Number(orden.total))}
                  </td>
                  <td className="fs-6 fw-light">
                    <i
                      className="fa-solid fa-eye icono-ver"
                      data-bs-toggle="modal"
                      data-bs-target={"#exampleModal" + orden.id_orden}
                    ></i>
                    <DetalleOrden
                      id_orden={orden.id_orden}
                      libros={orden.libros}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

Ordenes.propTypes = {};

export default Ordenes;
