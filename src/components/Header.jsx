import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/components/Header.css";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header>
      <h1 className="header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i class="fas fa-shopping-cart"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
