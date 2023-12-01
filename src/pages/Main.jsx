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

const Table = styled.table`
    width: 600px;
    height: 500px;
    border-collapse: collapse;
`;

const Tr = styled.tr`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;

const Author = styled.td`
    width: 30%;
    box-sizing: border-box;
`;

const Title = styled.td`
    width: 70%;
    box-sizing: border-box;
    text-align: start;
`;

export default ({ user, boardList }) => {
    return (
        <>
            <Wrapper>
                <Table>
                    <thead>
                        <Tr>
                            <Title>title</Title>
                            <Author>author</Author>
                        </Tr>
                    </thead>
                    <tbody>
                        {boardList.map((item, index) => {
                            return (
                                <Tr key={`main-${index}`}>
                                    <Link to={`/view/${item.id}`}>
                                        <Title>{item.title}</Title>
                                    </Link>
                                    <Author>{item.author}</Author>
                                </Tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Link to="/write">글쓰기</Link>
            </Wrapper>
        </>
    );
};
