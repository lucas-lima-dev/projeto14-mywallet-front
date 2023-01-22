import styled from "styled-components";

export const PageContainer = styled.div`
padding-top:5px;
  
`;

export const CashFlowInfoContainer = styled.div`
display:flex;
margin-top:23px;
  /*  topo | direita | inferior | esquerda*/
`

export const Date = styled.p`
margin-left:12px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #C6C6C6;
`
export const Description = styled.p`
margin-left:12px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #000000;
`
export const Value = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
position:absolute;
right:11px;
color: ${props => props.type === 'entry' ? "#03AC00" : "#C70000"};

`

export const TotalContainer = styled.div`

display:flex;
position:fixed;
bottom:165px;
`
export const Saldo = styled.p`
margin-left:12px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;

color: #000000;
`
export const Valor = styled.p`
margin-left:210px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;


color: ${props => props.total > 0 ? "#03AC00" : "#C70000"};
`