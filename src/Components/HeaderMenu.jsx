import React from "react";
import styles from "./HeaderMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function HeaderMenu({ onClick, isOpen }) {
  return (
    <nav className={`${isOpen ? styles["nav-open"] : ""} ${styles.nav}`}>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/destacados" activeClassName="active">
            Destacados
          </NavLink>
        </li>
        <li>
          <NavLink to="/remeras" activeClassName="active">
            Remeras
          </NavLink>
        </li>
      </ul>
      <button
        className={`${styles["header-button"]} ${isOpen ? styles["open"] : ""}`}
        onClick={onClick}
      >
        <span className={`${isOpen ? styles["hidden"] : ""}`}>Menú</span>{" "}
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </nav>
  );
}

export default HeaderMenu;
