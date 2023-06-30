import styles from "./Header.module.css";
import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="/" className={styles["header-logo"]}>
        <h1>ATLAS</h1>
      </a>

      <HeaderMenu onClick={handleMenuClick} isOpen={isMenuOpen} />
      {/* {isMenuOpen && (
        <div className="menu">
          <NavLink to="/" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/destacados" activeClassName="active">
            Destacados
          </NavLink>
          <NavLink to="/remeras" activeClassName="active">
            Remeras
          </NavLink>
        </div>
      )} */}

      <div className={styles["header-icons"]}>
        <a href="/">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </header>
  );
}

export default Header;
