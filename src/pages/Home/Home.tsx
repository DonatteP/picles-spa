import dog from "../../assets/dog.svg";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { ButtonVariant } from "../../components/common/Button/Button.constants";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgDog}>
        <img  src={dog} width="278px" />
      </div>
      <Link to="/pets">
        <Button variant={ButtonVariant.Default}>Quero Adotar</Button>
      </Link>
      <Link to="/admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </Link>
    </div>
  );
}
