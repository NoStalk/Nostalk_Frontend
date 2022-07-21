import React, { useEffect, useState } from 'react'
import "./App.css";
import SideBar from './Pages/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup } from "./Pages";

import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'
import { logInUser, userData } from './features/userDataSlice'
import AuthRequired from './components/AuthRequired';
import useAuth from './hooks/useAuth';
import axios from 'axios';


function App() {

  const { isLoggedIn, logIn } = useAuth();

  useEffect(() => {
    if (!process.env.REACT_APP_BACKEND_URL) {
      console.error(new Error('REACT_APP_BACKEND_URL enviroment variable not set'))
      return;
    }
    if (isLoggedIn) {
      return;
    }
    try {

      axios.get<userData>(process.env.REACT_APP_BACKEND_URL + '/refresh', { withCredentials: true })
        .then(response => {
          logIn(response.data);
        })
    }
    catch (error) {
      console.error(error);
    }
  }, [])

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
