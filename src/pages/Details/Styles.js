import styled from "styled-components";
import backgroundImg from '../../Images/background.png';
import backgroundFisioterapiaGeral from '../../Images/FisioTerapiaGeral.png';
import backgroundReabilitaçãoMuscular from '../../Images/ReabilitaçãoMuscular.png';
import backgroundTratamentoDeLesões from '../../Images/TratamentoDeLesões.png';
import backgroundPilates from '../../Images/Pilates.png';

export const ContainerFirst = styled.div`
  position: relative;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  h2, p {
    position: relative; /* Adicione isso para garantir que o z-index funcione */
    z-index: 1;
    color: white;
  }

  h2 {
    line-height: 2;
    font-size: 50px;
  }

  p {
    line-height: 2;
    font-size: 25px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  button {
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  transition: background 0.3s ease; /* Adiciona uma transição suave */
  z-index: 2; /* Garante que o botão esteja em uma camada superior */
}


  /* Quando o botão for hover, muda o background para branco */
  button:hover {
    background: lightgray;
  }
`;

export const ContainerSecond = styled.div`
  position: relative;
  background: url(${backgroundFisioterapiaGeral}) no-repeat center center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h2, p {
    position: relative; /* Adicione isso para garantir que o z-index funcione */
    z-index: 1;
    color: white;
  }

  h2 {
    line-height: 2;
    font-size: 50px;
  }

  p {
    line-height: 2;
    font-size: 25px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  button {
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  transition: background 0.3s ease; /* Adiciona uma transição suave */
  z-index: 2; /* Garante que o botão esteja em uma camada superior */
}


  /* Quando o botão for hover, muda o background para branco */
  button:hover {
    background: lightgray;
  }
`;
export const ContainerThree = styled.div`
position: relative;
  background: url(${backgroundReabilitaçãoMuscular}) no-repeat center center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h2, p {
    position: relative; /* Adicione isso para garantir que o z-index funcione */
    z-index: 1;
    color: white;
  }

  h2 {
    line-height: 2;
    font-size: 50px;
  }

  p {
    line-height: 2;
    font-size: 25px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  button {
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  transition: background 0.3s ease; /* Adiciona uma transição suave */
  z-index: 2; /* Garante que o botão esteja em uma camada superior */
}


  /* Quando o botão for hover, muda o background para branco */
  button:hover {
    background: lightgray;
  }
`;
export const ContainerFor = styled.div`
position: relative;
  background: url(${backgroundPilates}) no-repeat center center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h2, p {
    position: relative; /* Adicione isso para garantir que o z-index funcione */
    z-index: 1;
    color: white;
  }

  h2 {
    line-height: 2;
    font-size: 50px;
  }

  p {
    line-height: 2;
    font-size: 25px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  button {
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  transition: background 0.3s ease; /* Adiciona uma transição suave */
  z-index: 2; /* Garante que o botão esteja em uma camada superior */
}


  /* Quando o botão for hover, muda o background para branco */
  button:hover {
    background: lightgray;
  }
`;