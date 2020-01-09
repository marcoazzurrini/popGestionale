import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mainNav">
      <div className="mainNav__content">
        <Link to="/">
          <p className="mainNav__brand">
            Pop<span className="mainNav__brand--grey">Gestionale</span>
          </p>
        </Link>

        <Link to="/new-access/" className="btn btn-primary btn-lg">
          <p>
            Nuovo accesso{" "}
            <span role="img" aria-label="search">
              📁
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
