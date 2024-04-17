import { Link } from "react-router-dom";
import { Button } from "../Button";
import { ButtonVariant } from "../Button/Button.constants";
import styles from "./Header.module.css";


interface IHeader {
  showReturn?: boolean;
}


export function Header({ showReturn }: IHeader) {
  return (
    <header className={styles.header}>
      <Link to="/admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </Link>
      {showReturn && (
        <Link to="/pets">
          <Button variant={ButtonVariant.Text}>Voltar</Button>
        </Link>
      )}
    </header>
  );
}
