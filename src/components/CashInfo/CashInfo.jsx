import {
  CashFlowInfoContainer,
  PageContainer,
  Date,
  Description,
  Value,
  TotalContainer,
  Saldo,
  Valor,
} from "./styled";

export default function CashInfo({ wallet }) {
  const total = wallet.reduce((total, transaction) => {
    if (transaction.type === "entry") {
      return (total += Number(transaction.value));
    }
    return (total -= Number(transaction.value));
  }, 0);

  return (
    <>
      <PageContainer>
        {wallet.map((w) => (
          <CashFlowInfo
            key={w._id}
            date={w.date}
            description={w.description}
            value={w.value}
            type={w.type}
          />
        ))}
      </PageContainer>
      <Total total={total}/>
    </>
  );
}

function CashFlowInfo({ date, description, value,type }) {
  return (
    <CashFlowInfoContainer>
      <Date>{date}</Date>
      <Description>{description}</Description>
      <Value type={type}>{type === "entry" ? "+ " + value : "- " + value }</Value>
    </CashFlowInfoContainer>
  );
}

function Total({ total }) {
  return (
    <TotalContainer>
      <Saldo>SALDO</Saldo>
      <Valor total={total}>
      {total > 0 ? "+ " + total :  total }
    </Valor>
    </TotalContainer>
  );
}
