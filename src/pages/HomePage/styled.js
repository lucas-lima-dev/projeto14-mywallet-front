import styled from "styled-components";
import { BoxArrowRight } from "styled-icons/bootstrap";
import { PlusCircle, MinusCircle } from "@styled-icons/heroicons-outline";

export const PageContainer = styled.div`
  background: #8c11be;
  min-height: 100vh;
  position: relative;
`;

export const CashFlowUserInfo = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin: 0px 25px 13px 25px;
  /*  topo | direita | inferior | esquerda*/
`;

export const CashFlowContainer = styled.div`
  display: flex;
  align-self: center;
  width: 326px;
  gap: 15px;
  margin: 0px 25px;
`;

export const CashFlow = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    position: absolute;
    bottom: 9px;
    left:10px;
    color: #ffffff;
  }
`;

export const LeaveHomePage = styled(BoxArrowRight)`
  width: 23px;
  height: 24px;
  color: #ffffff;
  position: absolute;
  top: 25px;
  left: 325px;
  cursor: pointer;
`;
export const DepositCashIcon = styled(PlusCircle)`
  width: 25px;
  height: 25px;
  color: #ffffff;
  position: absolute;
  top: 9px;
  left: 8px;
`;

export const WithDrawCashIcon = styled(MinusCircle)`
  width: 25px;
  height: 25px;
  color: #ffffff;
  position: absolute;
  top: 9px;
  left: 8px;
`;
