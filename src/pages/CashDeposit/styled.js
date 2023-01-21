import styled from "styled-components";

export const PageContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background: #8c11be;
  min-height: 100vh;
  
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
    align-self: center;
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 4.63636px;
    border: none;
    cursor: pointer;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
  }
`;