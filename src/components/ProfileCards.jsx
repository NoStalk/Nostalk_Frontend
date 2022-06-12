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
function ProfileCards(props) {
  const country = props.country;
  const toptext = props.toptext;
  const bottomtext = props.bottomtext;

  return (
    <div
      style={{
        backgroundColor: "#1b1d23",
        width: "18%",
        height: "100%",
        borderRadius: "25px",
        fontFamily: "Inter",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      {/* <img src="./illustrations/profile.svg" alt="profile" /> */}
      <div
        className="icon-box"
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#4695bd",
          borderRadius: "100%",
          position: "absolute",
          right: "0px",
        }}
      >
        <img
          src="./illustrations/profile.svg"
          alt="profile"
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#4695bd",
            borderRadius: "100%",
            position: "absolute",
            right: "0px",
          }}
        />
      </div>
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
          <StatHelpText>
            <StatArrow type="increase" style={{ color: "green" }} />
            23%
          </StatHelpText>
        </Stat>
      )}
    </div>
  );
}

export default ProfileCards;
