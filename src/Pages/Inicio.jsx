// import styles from "./Inicio.module.css";
import BuzosCamperas from "../Components/BuzosCamperas";
import Carrusel from "../Components/Carrusel";
import Pantalones from "../Components/Pantalones";
import Remeras from "../Components/Remeras";

function Inicio() {
  return (
    <>
      <Carrusel />
      {/* <Destacados /> */}
      <Remeras />
      <BuzosCamperas />
      <Pantalones />
    </>
  );
}

export default Inicio;
