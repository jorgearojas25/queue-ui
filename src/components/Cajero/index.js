import React from "react";
import { CajeroC, CajeroText } from "./CajeroComponents";

function Cajero({ name, numeroProceso, procesoActual }) {
  return (
    <CajeroC>
      <CajeroText>Hola soy el cajero</CajeroText>
      <CajeroText>
        Bienvenido {name} numero de proceso: {numeroProceso} procesos
        pendientes: {numeroProceso - procesoActual}
      </CajeroText>
    </CajeroC>
  );
}

export default Cajero;
