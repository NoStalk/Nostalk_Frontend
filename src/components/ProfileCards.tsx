import React from "react";
import ReactCountryFlag from "react-country-flag";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import { FcBullish, FcApproval, FcRatings } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";

const icons = [IoMdPeople, FcBullish, FcApproval, FcRatings];

type ProfileCardProps = {
  country: boolean;
  toptext: string;
  bottomtext: string;
};
function ProfileCards(props: ProfileCardProps) {
  const country = props.country;
  const toptext = props.toptext;
  const bottomtext = props.bottomtext;
  return (
    <div
      style={{
        backgroundColor: "#121212",
        width: "18%",
        height: "100%",
        borderRadius: "10px",
        fontFamily: "Inter",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      {/* <img src="./illustrations/profile.svg" alt="profile" /> */}

      {country && <IoMdPeople className="profile-card-icons" />}
      {toptext === "Acceptance" && (
        <FcApproval className="profile-card-icons" />
      )}
      {toptext === "Streak" && <FcBullish className="profile-card-icons" />}
      {toptext === "Questions" && <FcRatings className="profile-card-icons" />}

      <div
        className="card-content"
        style={{
          padding: "2.6rem 1rem 1.5rem 1rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{toptext}</p>
        <p style={{ marginTop: "-9%", fontWeight: "lighter", opacity: "0.6" }}>
          {bottomtext}
        </p>
      </div>
      {country && (
        <ReactCountryFlag
          countryCode="IN"
          svg
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            margin: "0rem 1rem 2.8rem 0rem",
            height: "20%",
            width: "20%",
          }}
        />
      )}
      {!country && (
        <Stat
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            margin: "0rem 1rem 2rem 0rem",
          }}
        >
          <StatHelpText style={{ color: "green" }}>
            <StatArrow type="increase" style={{ color: "green" }} />
            23%
          </StatHelpText>
        </Stat>
      )}
    </div>
  );
}

export default ProfileCards;
