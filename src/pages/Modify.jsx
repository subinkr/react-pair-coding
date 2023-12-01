import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
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
    const id = parseInt(useParams().id);
    const board = boardList.find((item) => item.id === id);

    const modify = () => {
        const title = document.querySelector(".title").value;
        const content = document.querySelector(".content").value;

        console.log(title, content);

        const boardIdx = boardList.findIndex((item) => item.id === id);
        const leftArray = boardList.slice(0, boardIdx);
        const rightArray = boardList.slice(boardIdx + 1);

        setBoardList([
            ...leftArray,
            { id, title, content, author: user.username },
            ...rightArray,
        ]);
    };

    const Redirect = () => {
        if (!user.username || user.username !== board.author)
            return <Navigate to={"/"} />;
        return (
            <Wrapper>
                <InputWrapper>
                    <input className="title" type="text" />
                    <textarea
                        className="content"
                        cols="30"
                        rows="10"
                    ></textarea>
                </InputWrapper>
                <ButtonWrapper>
                    <Link to="/">취소하기</Link>
                    <Link to={`/view/${id}`} onClick={modify}>
                        수정하기
                    </Link>
                </ButtonWrapper>
            </Wrapper>
        );
    };

    useEffect(() => {
        if (!user.username || user.username !== board.author) return;

        const title = document.querySelector(".title");
        const content = document.querySelector(".content");
        title.value = board.title;
        content.value = board.content;
    }, []);

    return <Redirect />;
};
