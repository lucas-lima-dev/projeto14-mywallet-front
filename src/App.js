import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUpPage/SignUp";
import AuthContext from "./contexts/AuthenticationContext";
import UserContext from "./contexts/UserContext";
import CashDeposit from "./pages/CashDeposit/CashDeposit";
import CashWithdraw from "./pages/CashWithdraw/CashWithdraw";
import Home from "./pages/HomePage/Home";

export default function App() {
    const [token, setToken] = useState("");
    const [userImg, setUserImg] = useState("");
    return (
      <StyledApp>
        <AuthContext.Provider value={{ token, setToken }}>
          <UserContext.Provider value={{userImg,setUserImg}}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/deposit" element={<CashDeposit/>} />
                <Route path="/withdraw" element={<CashWithdraw/>} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </AuthContext.Provider>
      </StyledApp>
    );
  }
  
  const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;