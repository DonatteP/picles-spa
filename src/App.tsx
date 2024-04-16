import { useState } from "react";
import { Button } from "./components/common/Button";
import "./App.css";
import { ButtonVariant } from "./components/common/Button/Button.constants";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    {count}
      <Button variant={ButtonVariant.Default} onClick={() => setCount(count + 1)}>Quero Adotar</Button>
      <Button variant={ButtonVariant.Outlined} onClick={() => setCount(count + 1)}>
        Tenho um abrigo
      </Button>
    </>
  );
}
