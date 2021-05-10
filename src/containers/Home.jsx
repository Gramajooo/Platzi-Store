import React from "react";
import { Helmet } from "react-helmet";
import Products from "../components/Products";
import initialState from "../initialState";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Gramajooo_" />
        <meta name="twitter:creator" content="@Gramajooo_" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://twitter.com/Gramajooo_/header_photo"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://twitter.com/Gramajooo_/header_photo"
        />
        <meta property="og:url" content="https://platzi-store-86240.web.app/" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
