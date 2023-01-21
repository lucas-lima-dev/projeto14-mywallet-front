import Header from "../../components/Header";
import { CashFlow, CashFlowContainer, CashFlowUserInfo, PageContainer,LeaveHomePage,DepositCashIcon,WithDrawCashIcon } from "./styled";

export default function Home() {
    return (
        <PageContainer>
            <Header>
                <h1>Olá, Fulano</h1>
            </Header>
            <LeaveHomePage/>

            
            <CashFlowUserInfo>

            </CashFlowUserInfo>
            <CashFlowContainer>
                <CashFlow>
                    <DepositCashIcon/>
                    <p>Nova <br/>entrada</p>
                </CashFlow>
                <CashFlow>
                    <WithDrawCashIcon/>
                    <p>Nova <br/>saída</p>
                </CashFlow>
            </CashFlowContainer>
        </PageContainer>
    )
}