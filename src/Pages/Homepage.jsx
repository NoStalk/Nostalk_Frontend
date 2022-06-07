import React, {useState, useEffect} from "react";
import "../App.css";
import Navdiv from "../components/Navdiv";
import { Text } from "@chakra-ui/react";
import { Typography } from "antd";
import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const { Title } = Typography;

const Homepage = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView)
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
        }
      })
    else {
      animation.start({
        x: '-100vw',
      })
    }
  }, [inView]);
  

  return (
    <div className="homepage ">
      <div className="homepage-first">
        <div className="homepage-upperContainer">
          <h1
            style={{
              marginLeft: "3%",
            }}
          >
            NOSTALK
          </h1>
          <Navdiv />
        </div>
        <div className="homepage-lowerContainer" ref={ref}>
          <Typography level={3}></Typography>
          {/* <h2 style={{ height: "fit-content", margin: "3% 0% 0% 3%" }}>
          Keep Track of your entire interview preparation{" "}
        </h2> */}

          <motion.div
            className="herotext"
            style={{
              margin: "0% 10% 0% 0%",
              display: "flex",
              flexDirection: "column",
              fontFamily: "Courgette",
            }}
            animate={animation}
          >
            <Title>Keep Track of your Interview preparation</Title>
            <Title>Structured and Efficient Interview Preparation</Title>
            <Title>Better time Management</Title>

            <Title></Title>
          </motion.div>

          <motion.div animate={animation}>
            <img
              src="./stats.svg"
              alt="stats"
              className="stats"
              style={{ opacity: "0.9", maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </div>

      <img
        src="./background/waves.svg"
        alt="wave"
        style={{
          display: "flex",
          transform: "rotate(180deg)",
          border: "transparent",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="homepage-second"
      >
        <div className="homepage-second-text">
          <Title style={{ marginBottom: "10%" }}>
            Statistics of every question on every website that you have ever
            solved.
          </Title>
          <Title style={{ marginBottom: "10%" }}>
            Key insights from competitive programming websites like codeforces,
            codechef, atcoder.
          </Title>
          <Title>Analyse your interview preparation from Leetcode.</Title>
        </div>

        <img
          src="./illustrations/Data.svg"
          alt="data"
          style={{ opacity: "0.9", width: "50%", height: "50%" }}
        />
      </motion.div>
      <div className="homepage-third"></div>
      <div className="homepage-fourth"></div>

      <div className="homepage-fifth"></div>
    </div>
  );
};

export default Homepage;
