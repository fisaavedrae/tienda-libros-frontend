import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./componentes/context/MyContext.jsx";
import "./App.css";

import HomePage from "./pages/Home.jsx";
import Carrito from "./pages/Carrito.jsx";
import Pago from "./pages/Pago.jsx";
import DetalleLibro from "./pages/DetalleLibro.jsx";
import CerrarSesion from "./pages/CerrarSesion.jsx";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Ordenes from "./pages/Ordenes.jsx";
import Admin from "./pages/Admin.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import MyAccount from "./pages/MyAccount.jsx";

import jsonLibros from "./assets/libros.json";

function App() {
  const [total, setTotal] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [productos, setProductos] = useState([]);
  const [librosFiltrados, setLibrosFiltrados] = useState([]);
  const [carro, setCarro] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openVistaRapida, setOpenVistaRapida] = useState(false);
  const [idProductoVistaRapida, setIdProductoVistaRapida] = useState(10);
  const [prefijoImagen, setPrefijoImagen] = useState(
    "https://fidatech.net/felipe/fotos-libros/"
  );
  const [filtros, setFiltros] = useState({
    autor: "all",
    editorial: "all",
    genero: "all",
    maxPrice: 100000,
  });

  const agregarCarrito = (cant, obj) => {
    setTotal(Number(total) + Number(cant) * Number(obj.precio));
    const indice = carro.findIndex((item) => item.id === obj.id);

    if (indice !== -1) {
      carro[indice].qty = Number(obj.qty) + Number(cant);
      //console.log("carro antes de eliminar", carro);
      setCarro([...carro]);
    } else {
      obj.qty = Number(cant);
      carro.push(obj);
      setCarro(carro);
    }
  };

  const formatPrecio = (precio) => {
    const precioCLP = new Intl.NumberFormat("es-CL").format(precio);
    return "$ " + precioCLP;
  };

  async function ReadAPI() {
    try {
      //const response = await fetch("https://dummyjson.com/products");
      //const data = await response.json();
      console.log("readapi");
      setProductos(jsonLibros);
      setLibrosFiltrados(jsonLibros);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <MyContext.Provider
        value={{
          total,
          setTotal,
          productos,
          setProductos,
          carro,
          setCarro,
          orderProducts,
          setOrderProducts,
          totalOrder,
          setTotalOrder,
          open,
          setOpen,
          openVistaRapida,
          setOpenVistaRapida,
          idProductoVistaRapida,
          setIdProductoVistaRapida,
          agregarCarrito,
          formatPrecio,
          filtros,
          setFiltros,
          prefijoImagen,
          setPrefijoImagen,
          ReadAPI,
          librosFiltrados,
          setLibrosFiltrados,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Libro/:id" element={<DetalleLibro />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Pago" element={<Pago />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/CerrarSesion" element={<CerrarSesion />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MiCuenta" element={<MyAccount />} />
          <Route path="/Ordenes" element={<Ordenes />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
