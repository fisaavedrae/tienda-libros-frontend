import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { MyContext } from "../componentes/context/MyContext.jsx";
import PropTypes from "prop-types";
import Header from "../componentes/Header.jsx";
import Footer from "../componentes/Footer.jsx";
import GrillaLibros from "../componentes/GrillaLibros.jsx";
import jsonLibros from "../assets/libros.json";

const Home = (props) => {
  const { productos, setProductos } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    ReadAPI();
  }, []);
  setProductos(jsonLibros);
  async function ReadAPI() {
    try {
      setIsLoading(true);
      //const response = await fetch("https://dummyjson.com/products");
      //const data = await response.json();

      setProductos(jsonLibros);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header />
      <GrillaLibros />
      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
