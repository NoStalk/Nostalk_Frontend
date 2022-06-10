import React, { useState } from 'react'
import "./App.css";
import SideBar from './Pages/SideBar';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup} from "./Pages";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  
  
  return (
    <div className="App">
      {isLoggedIn && <SideBar />}

      <Routes>
        <Route exact path="/" element={<Homepage isLoggedIn={isLoggedIn}/>} />
        <Route exact path="/accounteinfo" element={<AccountInfo />} />
        <Route exact path="/contests" element={<Contests />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/submissions" element={<Submissions />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App
