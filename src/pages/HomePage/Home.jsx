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
import { useContext, useState, useEffect, useMemo } from "react";
import UserContext from "../../contexts/UserContext";
import AuthContext from "../../contexts/AuthenticationContext";
import axios from "axios";


export default function Home() {
  const { token } = useContext(AuthContext);
  
  const { userName } = useContext(UserContext);
  
  
  const [wallet, setWallet] = useState([]);
  
  const config = useMemo(()=>{
    return {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
  },[token])
  

  useEffect(() => {
    
    const getWalletInfo = async ()=>{
      const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/home`,config)
      console.log(data)
      setWallet(data)
      
    }

    try {
      getWalletInfo()
    } catch (error) {
      alert(error.response.data.message);
    }
  }, [config]);

  return (
    <PageContainer>
      <Header>
      {/* <h1>Olá, Fulano</h1> */}
        <h1>Olá, {userName}</h1>
      </Header>

      <Link to={"/"}>
        <LeaveHomePage />
      </Link>

      <CashFlowUserInfo>
        {wallet.length>0 ? (
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

