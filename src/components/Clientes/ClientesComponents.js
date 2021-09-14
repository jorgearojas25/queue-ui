import styled from "styled-components";

export const ClienteC = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${({ estaAtendido }) =>
    estaAtendido ? "#6e6a6f" : "#6c698d"};
  margin-top: 2vw;
  width: 70%;
  padding: 5% 5% 5% 5%;
`;

export const ClienteText = styled.p`
  font-size: 24;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding-top: 2%;
`;
