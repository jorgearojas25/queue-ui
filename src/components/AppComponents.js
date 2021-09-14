import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #d4d2d5;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const CajeroContainer = styled.section`
  width: 60%;
`;

export const OptionsBar = styled.div`
  width: 60%;
  height: 5vw;
  position: sticky;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-flow: row nowrap;
`;

export const OptionButton = styled.button`
  width: 10%;
`;

export const ProcesosContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 2vw;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const EncolaContainer = styled.section`
  width: 28%;
  background-color: #aa968a;
  margin: 1%;
`;

export const ProcesadosContainer = styled.section`
  width: 28%;
  background-color: #bfafa6;
  margin: 1%;
`;
