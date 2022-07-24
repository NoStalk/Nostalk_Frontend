import "./App.css";
import SideBar from "./Pages/SideBar";
import { Routes, Route } from "react-router-dom";
import {
  AccountInfo,
  Contests,
  Friends,
  Homepage,
  Leaderboard,
  Profile,
  Submissions,
  Login,
} from "./Pages";
import AuthRequired from "./components/AuthRequired";
import useAuth from "./hooks/useAuth";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

function App() {
  const user = useAuth();

  return (
    <div className="App">
      {user.isLoggedIn && <SideBar />}

      <Routes>
        <Route path="/linkedin" element={<LinkedInCallback />} />
        <Route element={<AuthRequired />}>
          <Route path="/" element={<Homepage isLoggedIn={user.isLoggedIn} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accountinfo" element={<AccountInfo />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/submissions" element={<Submissions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
