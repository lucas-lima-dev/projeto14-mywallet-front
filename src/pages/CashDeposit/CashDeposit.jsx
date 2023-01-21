import { PageContainer, Form } from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

export default function CashDeposit() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function deposit(e) {
    e.preventDefault();
    
    const body = {value,description}

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/deposit`, body);
       setValue("")
       setDescription("")
       navigate("/home")

        
    } catch (error) {
        alert(error.response.data.message)
    }
  }

  return (
    <PageContainer>
      <Header>
      <h1>Nova entrada</h1>
      </Header>
      <Form onSubmit={deposit}>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input
          type="string"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Salvar entrada</button>
      </Form>
    </PageContainer>
  );
}
