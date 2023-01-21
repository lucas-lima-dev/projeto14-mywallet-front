import { CashFlowInfoContainer, PageContainer,Date, Description,Value, TotalContainer, Saldo, Valor } from "./styled";

export default function CashInfo({wallet}) {
    const total = wallet.reduce((total,transaction)=>{
        if(transaction.type === "entry"){
            return total += Number(transaction.value)
        }
        return total -= Number(transaction.value)
    },0)
    return(
        <PageContainer>
            {wallet.map(w => (
                <CashFlowInfo 
                date = {w.date}
                description = {w.description}
                value = {w.value}
                />
            ))}
            
            <Total total={total}/>
        </PageContainer>
    )
}

function CashFlowInfo({date,description,value}){
    return(
        <CashFlowInfoContainer>
            <Date>{date}</Date>
            <Description>{description}</Description>
            <Value>{value}</Value>
        </CashFlowInfoContainer>
    )
}

function Total({total}) {
    return (
        <TotalContainer>
            <Saldo>SALDO</Saldo>
            <Valor>{total}</Valor>
        </TotalContainer>
    )
}