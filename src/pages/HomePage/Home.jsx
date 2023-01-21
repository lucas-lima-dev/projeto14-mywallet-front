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
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import AuthContext from "../../contexts/AuthenticationContext";
import axios from "axios";

export default async function Home() {
  const { token } = useContext(AuthContext);
  const { userName } = useContext(UserContext);
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const wallet = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
      };

      setWallet(wallet);
    } catch (error) {
      alert(error.response.data.message);
    }
  }, []);

  return (
    <PageContainer>
      <Header>
        <h1>`Olá, ${userName}`</h1>
      </Header>

      <Link to={"/"}>
        <LeaveHomePage />
      </Link>

      <CashFlowUserInfo>
        {wallet ? (
          <CashInfo wallet={wallet} />
        ) : (
          <h1>Não há registros de entrada ou saída</h1>
        )}
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
