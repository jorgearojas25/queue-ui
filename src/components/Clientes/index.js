import React from "react";
import { ClienteC, ClienteText } from "./ClientesComponents";

function Cliente({
  name,
  estaEnCabeza,
  estaAtendido,
  numeroProcesos,
  procesoActual,
}) {
  return (
    <ClienteC estaAtendido={estaAtendido}>
      <ClienteText>{name}</ClienteText>
      <ClienteText>
        {estaAtendido ? "Tuvo" : "Tiene"} {numeroProcesos} procesos
      </ClienteText>
      <ClienteText>
        {estaAtendido ? null : `esta en el proceso: ${procesoActual}`}
      </ClienteText>
    </ClienteC>
  );
}

export default Cliente;
