import { PageContainer, Form } from "./styled";
import logo from "../../assets/LogoLogin.png";
import { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import AuthContext from "../../contexts/AuthenticationContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setToken} = useContext(AuthContext)

  function login(e) {
    e.preventDefault()
    const URL = `${BASE_URL}/auth/login`;

    const body = {email,password};

    axios
      .post(URL, body)
      .then((res) => {
        setToken(res.data.token)
        navigate("/habitos");
        setEmail("");
        setPassword("");
        
      })

      .catch((err) => alert(err.response.data.message));
  }

  return (
    <PageContainer>
      <h1>MyWallet</h1>

      <Form onSubmit={login}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          data-test="email-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-test="password-input"
        />
        <button type="submit" >Entrar</button>
      </Form>
      <Link to={"/sign-up"} >
        <p >Primeira vez? Cadastre-se!</p>
      </Link>
    </PageContainer>
  );
}
