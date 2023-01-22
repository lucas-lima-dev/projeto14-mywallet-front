import { PageContainer, Form, StyledLink } from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../../constants/urls";
import axios from "axios";



export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate();
  

  async function createAccount(event) {
    event.preventDefault();

    // const URL = `${BASE_URL}/auth/sign-up`;

    const body = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
      
      alert("Cadastro realizado com sucesso");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/");
    } catch (error) {
      alert(error.response.data)
    }

    // axios
    //   .post(URL, body)
    //   .then((res) => {
    //     alert("Cadastro realizado com sucesso");
    //     navigate("/");
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    //   })

    //   .catch((err) => alert(err.response.data.message));
  }

  return (
    <PageContainer>
      <h1>MyWallet</h1>

      <Form onSubmit={createAccount}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" >
          Cadastrar
        </button>
      </Form>

      <StyledLink to={"/"}>
        <p>Já tem uma conta? Entre agora!</p>
      </StyledLink>
    </PageContainer>
  );
}
