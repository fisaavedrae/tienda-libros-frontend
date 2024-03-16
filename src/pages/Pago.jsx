import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../componentes/context/MyContext.jsx";
import "../assets/css/carro.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const Pago = (props) => {
  const [pagado, setPagado] = useState(false);
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

  function handleCheckout() {
    setPagado(true);
    setCarro([]);
    setTotal(0);
  }
  return (
    <>
      <Header />
      <div className="container">
        {!pagado && (
          <div className="container">
            <div className="container">
              <button
                className="btn btn-pago text-uppercase w-100"
                onClick={() => handleCheckout()}
              >
                pagar
              </button>
            </div>
            <div className="divider mt-3"></div>
            <div className="container w-75 d-flex flex-column gap-3 mt-3">
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
                    <th scope="col" className="text-uppercase w-25 text-center">
                      cantidad
                    </th>
                    <th scope="col" className="text-uppercase text-nowrap">
                      total
                    </th>
                  </tr>
                </thead>
                {carro.map((libro, index) => (
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
                      <td>{formatPrecio(Number(libro.precio))}</td>
                      <td className="text-center">{libro.qty}</td>
                      <td className="w-50 text-nowrap">
                        {formatPrecio(Number(libro.qty) * Number(libro.precio))}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}
        {pagado && (
          <div className="container mt-5 mb-5 text-center align-items-center">
            <div className=" orden-creada">
              <h2>Se ha generado la orden N° 00000012</h2>
              <p>Gracias por su compra</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

Pago.propTypes = {};

export default Pago;
