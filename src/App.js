import React, { useState } from 'react'
import "./App.css";
import SideBar from './Pages/SideBar';
import {  Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup} from "./Pages";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  
  if(isLoggedIn)
  return (
      
        <div className='App'>
      
        <SideBar>
          
            <Routes>
              <Route exact path="/" element={<Homepage isLoggedIn={isLoggedIn} />}/>
              <Route exact path="/accounteinfo" element={<AccountInfo />}/>
              <Route exact path="/contests" element={<Contests />}/>
              <Route exact path="/friends" element={<Friends />}/>
              <Route exact path="/leaderboard" element={<Leaderboard />}/>
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/submissions" element={<Submissions />}/>
          </Routes>
        </SideBar>

         
    </div>
    )
  else
    return (
      <Homepage isLoggedIn={isLoggedIn} className="homepage">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Homepage>
    )
}

export default App
