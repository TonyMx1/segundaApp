import { useState } from "react";

export function Lista() {
  const luz = ['apagado', 'encendido al 25%', 'encendido al 50%', 'encendido al 75%', 'encendido al 100%'];
  const [porc, setPorc] = useState(0);

  const incrementar = () => {
    if (porc === luz.length - 1) {
      setPorc(0);
    } else {
      setPorc(porc + 1);
    }
  };

  const regresar = () => {
    if (porc === 0) {
      setPorc(luz.length - 1);
    } else {
      setPorc(porc - 1);
    }
  };

  const resetear = () => setPorc(0);

  return (
    <>
      <div>
        <div>El porcentaje actual es: {luz[porc]}</div>
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={regresar}>Disminuir</button>
        <button onClick={resetear}>Resetear</button>
      </div>
    </>
  );
}
