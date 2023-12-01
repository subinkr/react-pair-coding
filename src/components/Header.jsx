import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    box-sizing: border-box;
    align-items: center;
    position: absolute;
    background-color: white;
`;

const TitleStyle = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const LoginStyle = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`;

export default ({ user }) => {
    return (
        <HeaderStyle>
            <TitleStyle>title</TitleStyle>
            {user.username ? (
                <LoginStyle>
                    <Link to={"/mypage"}>mypage</Link>
                    <Link to={"/"}>logout</Link>
                </LoginStyle>
            ) : (
                <Link to={"/login"}>login</Link>
            )}
        </HeaderStyle>
    );
};
