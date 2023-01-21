import Header from "../../components/Header/Header";
import {
  CashFlow,
  CashFlowContainer,
  CashFlowUserInfo,
  PageContainer,
  LeaveHomePage,
  DepositCashIcon,
  WithDrawCashIcon,
} from "./styled";
import { Link } from "react-router-dom";
import CashInfo from "../../components/CashInfo/CashInfo";

export default function Home() {
  return (
    <PageContainer>
      <Header>
        <h1>Olá, Fulano</h1>
      </Header>

      <Link to={"/"}>
        <LeaveHomePage />
      </Link>

      <CashFlowUserInfo>
        <CashInfo/>
        {/* <h1>Não há registros de entrada ou saída</h1> */}
      </CashFlowUserInfo>
      <CashFlowContainer>
        <Link to={"/deposit"}>
          <CashFlow>
            <DepositCashIcon />
            <p>
              Nova <br />
              entrada
            </p>
          </CashFlow>
        </Link>
        <Link to={"/withdraw"}>
          <CashFlow>
            <WithDrawCashIcon />
            <p>
              Nova <br />
              saída
            </p>
          </CashFlow>
        </Link>
      </CashFlowContainer>
    </PageContainer>
  );
}
