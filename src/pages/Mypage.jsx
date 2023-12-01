import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
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

export default ({ user }) => {
    return (
        <Wrapper>
            <LoginStyle>
                <TitleStyle>user name</TitleStyle>
                <div>{user.username}</div>
            </LoginStyle>
        </Wrapper>
    );
};
