import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles["title"]}>ATLAS</p>
      <p className={styles["copyright"]}>
        Copyright Atlas - 2023. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
