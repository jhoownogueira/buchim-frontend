import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to{
    opacity: 1;
}`;

export const HomeContainer = styled.header`
  background-color: ${(props) => props.theme.buchim_base_dark};
  width: 200px;
  height: 100px;
`;

export const QuadradoVermelho = styled.div`
  background-color: ${(props) => props.theme.sup_fire_red100};
  border-radius: 0.2rem;
  width: 100px;
  height: 100px;
  margin: 2rem;
  animation: infinite 1s ${fadeIn};
`;

export const QuadradoAmarelo = styled.div`
  background-color: ${(props) => props.theme.sup_solar_yellow100};
  border-radius: 0.2rem;
  width: 100px;
  height: 100px;
  animation: infinite 1s ${fadeIn};
  margin: 2rem;
`;
