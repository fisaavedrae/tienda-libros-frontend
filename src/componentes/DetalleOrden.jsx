import React from "react";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { MyContext } from "../componentes/context/MyContext.jsx";

const DetalleOrden = ({ id_orden, libros }) => {
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
      <div
        className="modal fade"
        id={"exampleModal" + id_orden}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Detalle orden {id_orden}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container  d-flex flex-column gap-3 mt-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-uppercase">
                        imagen
                      </th>
                      <th scope="col" className="text-uppercase w-50 ">
                        titulo
                      </th>
                      <th scope="col" className="text-uppercase w-25">
                        precio
                      </th>
                      <th
                        scope="col"
                        className="text-uppercase w-25 text-center"
                      >
                        cant
                      </th>
                      <th scope="col" className="text-uppercase text-nowrap">
                        total
                      </th>
                    </tr>
                  </thead>
                  {libros.map((libro, index) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">
                          <img
                            className="img-fluid w-100"
                            src={prefijoImagen + libro.urlimg}
                            alt="microfono"
                          />
                        </th>
                        <td>{libro.titulo}</td>
                        <td className="text-nowrap">
                          {formatPrecio(Number(libro.precio))}
                        </td>
                        <td className="text-center">{libro.cantidad}</td>
                        <td className="w-50 text-nowrap">
                          {formatPrecio(
                            Number(libro.cantidad) * Number(libro.precio)
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetalleOrden.propTypes = {
  id_orden: PropTypes.number,
  libros: PropTypes.array,
};

export default DetalleOrden;
