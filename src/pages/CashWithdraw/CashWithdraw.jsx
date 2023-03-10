import { PageContainer, Form } from "./styled";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import AuthContext from "../../contexts/AuthenticationContext";

export default function CashWithdraw() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  async function deposit(e) {
    e.preventDefault();

    const body = { value, description,type:"output" };

    const config = { 
      headers:{
        authorization:`Bearer ${token}`
      }
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/wallet`, body, config);
      setValue("");
      setDescription("");
      navigate("/home");
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <PageContainer>
      <Header>
        <h1>Nova saída</h1>
      </Header>
      <Form onSubmit={deposit}>
        <input
          type="number"
          min = {0}
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
        <button type="submit">Salvar saída</button>
      </Form>
    </PageContainer>
  );
}
