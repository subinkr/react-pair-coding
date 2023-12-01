import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
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

export default ({ user, setUser, userList, setUserList }) => {
    const login = () => {
        const username = document.querySelector(".username").value;
        const password = document.querySelector(".password").value;
        const userCheck = userList.find((item) => {
            return item.username === username && item.password === password;
        });
        if (userCheck) {
            alert("로그인 되었습니다!");
            setUser(userCheck);
        } else {
            alert("잘못된 아이디, 비밀번호 입니다");
        }
    };
    const signup = () => {
        const username = document.querySelector(".username").value;
        const password = document.querySelector(".password").value;
        const userCheck = userList.find((item) => {
            return item.username === username;
        });

        if (userCheck) {
            alert("이미 존재하는 아이디입니다!");
        } else {
            alert("회원가입 되었습니다~");
            setUserList([...userList, { username, password }]);
        }
    };

    const Redirect = () => {
        if (user.username) return <Navigate to={"/"} />;
        return (
            <LoginWrapper>
                <LoginStyle>
                    <TitleStyle>LOGIN</TitleStyle>
                    <input type="text" className="username" />
                    <input type="password" className="password" />
                    <Button onClick={login}>LOGIN</Button>
                    <Button onClick={signup}>SIGN UP</Button>
                </LoginStyle>
            </LoginWrapper>
        );
    };
    return <Redirect />;
};
