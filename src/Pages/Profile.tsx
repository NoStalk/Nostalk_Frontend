import React from 'react'
import '../App.css'
import { Avatar } from '@mui/material';
import ProfileCards from './../components/ProfileCards';
import DropDown from './../components/DropDown';

const Profile = () => {
  return (
    <div className="profile">
      <div className="top-panel">
        <h1 style={{ fontFamily: "Inter" }}>NOSTALK</h1>
        <div
          className="top-right"
          style={{
            width: "20%",
            margin: "0.8rem 4rem 0rem 0rem",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <DropDown />
        </div>
      </div>
      <div className="card-panel">
        <ProfileCards toptext={"ZEUS"} bottomtext={"India"} country={true} />
        <ProfileCards
          toptext={"Acceptance"}
          bottomtext={"69%"}
          country={false}
        />
        <ProfileCards
          toptext={"Streak"}
          bottomtext={"69 days"}
          country={false}
        />
        <ProfileCards
          toptext={"Questions"}
          bottomtext={"69%"}
          country={false}
        />

        {/* <div className="card-totalacc">
          <ProfileCards />
        </div>
        <div className="card-streak">
          <ProfileCards />
        </div>
        <div className="card-totalq">
          <ProfileCards />
        </div> */}
      </div>
      <div className="data-panel"></div>
      <div className="submission-panel"></div>
      <div className="contest-panel"></div>
      <div className="activity-panel"></div>
    </div>
  );
}

export default Profile