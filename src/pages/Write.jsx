import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const InputWrapper = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const ButtonWrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export default ({ user, boardList, setBoardList }) => {
    const id = boardList[boardList.length - 1].id + 1;
    const board = () => {
        const title = document.querySelector(".title").value;
        const content = document.querySelector(".content").value;

        setBoardList([
            ...boardList,
            { id, title, content, author: user.username },
        ]);
    };

    return (
        <Wrapper>
            <InputWrapper>
                <input className="title" type="text" />
                <textarea className="content" cols="30" rows="10"></textarea>
            </InputWrapper>
            <ButtonWrapper>
                <Link to="/">취소하기</Link>
                <Link to={`/view/${id}`} onClick={board}>
                    작성하기
                </Link>
            </ButtonWrapper>
        </Wrapper>
    );
};
