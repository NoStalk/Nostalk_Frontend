import React, { useState } from 'react'
import "./App.css";
import SideBar from './Pages/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup } from "./Pages";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App" >
      {isLoggedIn && <SideBar />}

      <Routes>
        <Route path="/" element={< Homepage isLoggedIn={isLoggedIn} />} />
        <Route path="/accounteinfo" element={< AccountInfo />} />
        <Route path="/contests" element={< Contests />} />
        <Route path="/friends" element={< Friends />} />
        <Route path="/leaderboard" element={< Leaderboard />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/submissions" element={< Submissions />} />
        <Route path="/login" element={< Login />} />
      </Routes>
    </div>
  );
}

export default App;
