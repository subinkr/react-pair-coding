import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Main, Modify, View, Write, Mypage } from "./pages";
import { Header } from "./components";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);
    const [boardList, setBoardList] = useState([
        { id: 1, title: "title", content: "content", author: "eee" },
        { id: 2, title: "title", content: "content", author: "eee" },
        { id: 3, title: "title", content: "content", author: "eee" },
        { id: 4, title: "title", content: "content", author: "eee" },
    ]);

    return (
        <div className="App">
            <Header user={user} setUser={setUser} />
            <Routes>
                <Route
                    path="/"
                    element={<Main user={user} boardList={boardList} />}
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            user={user}
                            setUser={setUser}
                            userList={userList}
                            setUserList={setUserList}
                        />
                    }
                />
                <Route
                    path="/modify/:id"
                    element={
                        <Modify
                            user={user}
                            boardList={boardList}
                            setBoardList={setBoardList}
                        />
                    }
                />
                <Route
                    path="/view/:id"
                    element={
                        <View
                            user={user}
                            boardList={boardList}
                            setBoardList={setBoardList}
                        />
                    }
                />
                <Route
                    path="/write"
                    element={
                        <Write
                            user={user}
                            boardList={boardList}
                            setBoardList={setBoardList}
                        />
                    }
                />
                <Route path="/mypage" element={<Mypage user={user} />} />
            </Routes>
        </div>
    );
}

export default App;
