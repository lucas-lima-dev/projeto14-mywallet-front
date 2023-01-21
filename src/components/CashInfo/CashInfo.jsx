import { CashFlowInfoContainer, PageContainer,Date, Description,Value, TotalContainer, Saldo, Valor } from "./styled";

export default function CashInfo() {
    return(
        <PageContainer>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <CashFlowInfo/>
            <Total/>
        </PageContainer>
    )
}

function CashFlowInfo(){
    return(
        <CashFlowInfoContainer>
            <Date>30/11</Date>
            <Description>Almoço mae</Description>
            <Value>30,00</Value>
        </CashFlowInfoContainer>
    )
}

function Total() {
    return (
        <TotalContainer>
            <Saldo>SALDO</Saldo>
            <Valor>2849,96</Valor>
        </TotalContainer>
    )
}