import React from 'react'
import "./App.css";
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup } from "./components/index";


function App() {
  return (
    
    <div className='App'>
       
     <SideBar>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/accounteinfo" element={<AccountInfo />}/>
              <Route path="/contests" element={<Contests />}/>
              <Route path="/friends" element={<Friends />}/>
              <Route path="/leaderboard" element={<Leaderboard />}/>
              <Route path="/profile" element={<Profile />} />
              <Route path="/submissions" element={<Submissions />}/>
          </Routes>
      </SideBar>

      <Homepage>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
       </Homepage>
       
      </div>

   
  
  )
}

export default App
