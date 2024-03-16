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
      <div className="container w-75 d-flex flex-column gap-3 mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase">
                Orden
              </th>
              <th scope="col" className="text-uppercase w-50 ">
                fecha de compra
              </th>
              <th scope="col" className="text-uppercase w-25">
                cantidad libros
              </th>
              <th scope="col" className="text-uppercase text-nowrap">
                total
              </th>
              <th scope="col" className="text-uppercase text-nowrap">
                ver
              </th>
            </tr>
          </thead>
          {jsonOrdenes.map((orden, index) => (
            <tbody key={index}>
              <tr>
                <td scope="row">{orden.id_orden}</td>
                <td>{orden.fecha_orden}</td>
                <td>{orden.libros.length}</td>
                <td className="text-center">
                  {formatPrecio(Number(orden.total))}
                </td>
                <td>
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
      <Footer />
    </>
  );
};

Ordenes.propTypes = {};

export default Ordenes;
