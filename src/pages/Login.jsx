import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginStyle = styled.div`
    width: 400px;
    height: 500px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 16px;
`;

const TitleStyle = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const Input = styled.input`
    height: 30px;
`;

const Button = styled.button`
    height: 40px;
    font-size: 17px;
`;

export default ({ user, setUser }) => {
    const login = () => {
        const username = document.querySelector(".username");
        const password = document.querySelector(".password");
    };
    const signup = () => {
        const username = document.querySelector(".username");
        const password = document.querySelector(".password");
    };
    return (
        <LoginWrapper>
            <LoginStyle>
                <TitleStyle>LOGIN</TitleStyle>
                <Input type="text" className="username" />
                <Input type="password" className="password" />
                <Button onClick={login}>LOGIN</Button>
                <Button onClick={signup}>SIGN UP</Button>
            </LoginStyle>
        </LoginWrapper>
    );
};
