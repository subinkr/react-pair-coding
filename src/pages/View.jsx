import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const TitleStyle = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const ViewWrapper = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid black;
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
    const params = useParams();
    const id = parseInt(params.id);
    const board = boardList.find((item) => item.id === id);

    const drop = () => {
        const filteredBoardList = boardList.filter((item) => item.id !== id);
        setBoardList(filteredBoardList);
    };

    return (
        <Wrapper>
            <ViewWrapper>
                <TitleStyle>{board.title}</TitleStyle>
                <div>{board.content}</div>
            </ViewWrapper>
            <ButtonWrapper>
                <Link to="/">목록가기</Link>
                <Link to={`/modify/${id}`}>수정하기</Link>
                <Link to="/" onClick={drop}>
                    삭제하기
                </Link>
            </ButtonWrapper>
        </Wrapper>
    );
};
