import React from "react";
import {
  AppContainer,
  ProcesadosContainer,
  EncolaContainer,
  ProcesosContainer,
  CajeroContainer,
  OptionsBar,
  OptionButton,
} from "./components/AppComponents";
import Cajero from "./components/Cajero";
import Cliente from "./components/Clientes";
import useCountDown from "react-countdown-hook";
import Chance from "chance";

function App() {
  const test = [
    {
      id: 1,
      name: "jorge",
      procesos: 5,
      procesoActual: 0,
      estaAtendido: false,
    },
    {
      id: 1,
      name: "jorge",
      procesos: 5,
      procesoActual: 0,
      estaAtendido: false,
    },
    {
      id: 1,
      name: "jorge",
      procesos: 6,
      procesoActual: 0,
      estaAtendido: false,
    },
    {
      id: 1,
      name: "jorge",
      procesos: 4,
      procesoActual: 0,
      estaAtendido: false,
    },
  ];
  const chance = new Chance();
  const [usuarios, setUsuarios] = React.useState([]);

  const [atendidos, setAtendidos] = React.useState([]);

  const [usuarioActual, setUsuarioActual] = React.useState({});

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(6000, 1000);

  const createUsers = () => {
    return {
      id: chance.guid(),
      name: chance.first(),
      procesos: chance.natural({ min: 1, max: 10 }),
      procesoActual: 0,
      estaAtendido: false,
    };
  };

  const iniciar = React.useCallback(() => {
    setUsuarios(
      Array(5)
        .fill({}, 0, 5)
        .map((user) => createUsers())
    );
    //setUsuarios(test);
    setAtendidos([]);
    start(6000);
  }, []);

  const agregar = () => {
    const newUser = createUsers();
    setUsuarios([...usuarios, newUser]);
  };

  const pausar = React.useCallback(() => {
    pause();
  }, []);

  const reaundar = React.useCallback(() => {
    resume();
  }, []);

  React.useEffect(() => {
    if (usuarios[0] && timeLeft) {
      console.log(timeLeft / 1000);
      //usuario en caja
      setUsuarioActual(usuarios[0]);

      //validacion numero proceso
      if (timeLeft / 1000 === 1 && !usuarios[0].estaAtendido) {
        const user = usuarios.shift();
        setUsuarios([...usuarios, user]);
        start(6000);
        return;
      }

      //proceso usuario
      usuarios[0].procesoActual += 1;
      setUsuarioActual(usuarios[0]);

      //aprobar
      if (usuarios[0].procesoActual === usuarios[0].procesos) {
        usuarios[0].estaAtendido = true;
        const user = usuarios.shift();
        setAtendidos([...atendidos, user]);
        start(6000);
        return;
      }
    }
  }, [timeLeft]);

  return (
    <AppContainer>
      <OptionsBar>
        <OptionButton onClick={iniciar}>Iniciar</OptionButton>
        <OptionButton onClick={agregar}>Agregar</OptionButton>
        <OptionButton onClick={pausar}>Pausar</OptionButton>
        <OptionButton onClick={reaundar}>Reanudar</OptionButton>
      </OptionsBar>
      <CajeroContainer>
        <Cajero
          name={usuarioActual.name}
          numeroProceso={usuarioActual.procesos}
          procesoActual={usuarioActual.procesoActual}
        />
      </CajeroContainer>
      <ProcesosContainer>
        <EncolaContainer>
          {usuarios.map((user) => (
            <Cliente
              name={user.name}
              estaAtendido={user.estaAtendido}
              estaEnCabeza={user.estaEnCabeza}
              numeroProcesos={user.procesos}
              procesoActual={user.procesoActual}
            />
          ))}
        </EncolaContainer>
        <ProcesadosContainer>
          {atendidos.map((user) => (
            <Cliente
              name={user.name}
              estaAtendido={user.estaAtendido}
              estaEnCabeza={user.estaEnCabeza}
              numeroProcesos={user.procesos}
              procesoActual={user.procesoActual}
            />
          ))}
        </ProcesadosContainer>
      </ProcesosContainer>
    </AppContainer>
  );
}

export default App;
