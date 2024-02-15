import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: url(${props => props.backgroundImage}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 20px;
  overflow-x: hidden;
  margin: 0 auto;
  box-sizing: border-box;

  h2, p {
    position: relative;
    z-index: 1;
    color: white;
    line-height: 1.5;
    font-size: 2rem;
    padding: 10px;
    margin: 0;
    max-width: 90vw;
  }

  p {
    font-size: 1.5rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
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
    transition: background 0.3s ease;
    z-index: 2;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button:hover {
    background: lightgray;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
    }

    button {
      font-size: 1rem;
      margin-top: 15px;
    }
  }
`;
