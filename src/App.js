import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Main, Modify, View, Write, Mypage } from "./pages";
import { Header } from "./components";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);

    return (
        <div className="App">
            <Header user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Main user={user} />} />
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
                <Route path="/modify" element={<Modify user={user} />} />
                <Route path="/view" element={<View user={user} />} />
                <Route path="/write" element={<Write user={user} />} />
                <Route path="/mypage" element={<Mypage user={user} />} />
            </Routes>
        </div>
    );
}

export default App;
