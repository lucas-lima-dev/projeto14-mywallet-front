import { PageContainer, Form, StyledLink } from "./styled";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../contexts/AuthenticationContext";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(AuthContext);
  const {setUserName} = useContext(UserContext)
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    

    const body = { email, password };

    
    try {
      const {data:{token,name}} = await axios.post(`${process.env.REACT_APP_API_URL}/`, body);
      setToken(token)
      setUserName(name)
      setEmail("");
      setPassword("");
      navigate("/home")
    } catch (error) {
      alert(error.response.data);
    }
    // axios
    //   .post(URL, body)
    //   .then((res) => {
    //     setToken(res.data.token);
    //     navigate("/home");
    //     setEmail("");
    //     setPassword("");
    //   })

    //   .catch((err) => alert(err.response.data.message));
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
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </Form>
      <StyledLink to={"/sign-up"}>
        <p>Primeira vez? Cadastre-se!</p>
      </StyledLink>
    </PageContainer>
  );
}
