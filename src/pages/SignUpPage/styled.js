import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #8c11be;
  min-height: 100vh;
  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-top: 159px;
  }

  p {
    margin-top: 25px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 34px 13px 34px;
  /*  topo | direita | inferior | esquerda*/
  input {
    box-sizing: border-box;
    background-color: #ffffff;
    width: 326px;
    height: 58px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 13px;
    position: relative;
    ::placeholder {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      position: absolute;
      top: 16px;
      left: 15px;
      color: #000000;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 4.63636px;
    border: none;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  p {
    font-size: 15px;
    font-family: "Raleway";
    line-height: 18px;
    font-weight: 700;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
  }
`;
