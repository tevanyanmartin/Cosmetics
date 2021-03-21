import "../../styles.css";
import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="nav">
      <Link to="/" id="logo"></Link>
      <Link to="/new">
        <p>New</p>
      </Link>
      <Link to="/lips">
        <p>Lips</p>
      </Link>
      <Link to="/face">
        <p>Face</p>
      </Link>
      <Link to="/eyes">
        <p>Eyes</p>
      </Link>
      <Link to="/brushes">
        <p>Brushes</p>
      </Link>
      <Link to="/skin">
        <p>Skin</p>
      </Link>
      <Link to="/bestSellers">
        <p>BEST-SELLERS</p>
      </Link>
      <Link to="/brands">
        <p>Brands</p>
      </Link>
    </nav>
  );
}
export default Nav;
