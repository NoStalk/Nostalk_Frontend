import React, { useEffect, useState } from 'react'
import "./App.css";
import SideBar from './Pages/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup } from "./Pages";

import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'
import { logInUser } from './features/userDataSlice'
import AuthRequired from './components/AuthRequired';
import useAuth from './hooks/useAuth';


function App() {

  const [isLoggedIn] = useAuth();



  return (
    <div className="App" >
      {isLoggedIn && <SideBar />}

      <Routes>
        <Route path="/" element={< Homepage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={< Login />} />
        <Route element={<AuthRequired />}>
          <Route path="/accountinfo" element={< AccountInfo />} />
          <Route path="/contests" element={< Contests />} />
          <Route path="/friends" element={< Friends />} />
          <Route path="/leaderboard" element={< Leaderboard />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/submissions" element={< Submissions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
