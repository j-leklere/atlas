import styles from "./Header.module.css";
// import HeaderMenu from "./HeaderMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  // faMagnifyingGlass,
  // faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <a href="/" className={styles["header-logo"]}>
        <h1>ATLAS</h1>
        {/* <img className={styles["logo"]} src={logo} alt="" /> */}
      </a>

      {/* <HeaderMenu /> */}

      <div className={styles["header-icons"]}>
        {/* <a href="/">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a> */}
        {/* <a href="/">
          <FontAwesomeIcon icon={faUser} />
        </a> */}
        <a href="/">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </header>
  );
}

export default Header;
