import React from 'react'
import "./App.css";
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountInfo, Contests, Friends, Homepage, Leaderboard, Profile, Submissions, Login, Signup} from "./components/index";
import { Container } from "@mui/material";

function App() {
  return (
    
    <div className='App'>
      
        <SideBar>
          
            <Routes>
              <Route exact path="/" element={<Homepage />}/>
              <Route exact path="/accounteinfo" element={<AccountInfo />}/>
              <Route exact path="/contests" element={<Contests />}/>
              <Route exact path="/friends" element={<Friends />}/>
              <Route exact path="/leaderboard" element={<Leaderboard />}/>
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/submissions" element={<Submissions />}/>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup/>} />
          </Routes>
        </SideBar>

         
     </div>

   
  
  )
}

export default App
