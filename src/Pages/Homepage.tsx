import React, { useState, useEffect } from "react";
import "../App.css";
import Navdiv from "../components/Navdiv";
import { Text } from "@chakra-ui/react";
import { Typography } from "antd";
import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const { Title } = Typography;


type HomePageProps = { isLoggedIn: boolean }

const Homepage = (props: HomePageProps) => {
  const isLoggedIn = props.isLoggedIn;
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();
  useEffect(() => {

    if (inView)
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    else {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const { ref: ref2, inView: inView2 = inView } = useInView({
    threshold: 0.2,
  });
  const animationSecond = useAnimation();
  useEffect(() => {
    if (inView2)
      animationSecond.start({
        scale: 1,
        transition: {
          duration: 1,
        },
      });
    else
      animationSecond.start({
        scale: 0.5,
      });
  }, [inView2]);

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.2,
  });
  const animationThird = useAnimation();
  useEffect(() => {
    if (inView3)
      animationThird.start({
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    else
      animationThird.start({
        y: "-400vh",
      });
  }, [inView3]);

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.2,
  });
  const animationFourth = useAnimation();
  useEffect(() => {
    if (inView4)
      animationFourth.start({
        x: 0,
        transition: {
          duration: 0.5,
        },
      });
    else
      animationFourth.start({
        x: "-400vw",
      });
  }, [inView4]);

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
          {!isLoggedIn && <Navdiv />}
        </div>
        <div className="homepage-lowerContainer" ref={ref}>
          <Typography.Title level={3}></Typography.Title>
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
          backgroundColor: "#15161b",
        }}
      />
      <motion.div ref={ref2} className="homepage-second">
        <motion.div className="homepage-second-text">
          <Title style={{ marginBottom: "10%" }}>
            Statistics of every question on every website that you have ever
            solved.
          </Title>
          <Title style={{ marginBottom: "10%" }}>
            Key insights from competitive programming websites like codeforces,
            codechef, atcoder.
          </Title>
          <Title>Analyse your interview preparation from Leetcode.</Title>
        </motion.div>

        <motion.img
          animate={animationSecond}
          src="./illustrations/Data.svg"
          alt="data"
          style={{ opacity: "0.9", width: "50%", height: "50%" }}
        />
      </motion.div>
      <img
        src="./background/divider23.svg"
        alt="divider2-3"
        style={{
          display: "flex",
          backgroundColor: "#090a0a",
          border: "transparent",
        }}
      />
      <div ref={ref3} className="homepage-third">
        <div className="homepage-third-text" style={{ marginRight: "7%" }}>
          <Title>
            Stay Upto Date with all the coding contests as well as hiring
            challenges.
          </Title>
        </div>
        <motion.img
          animate={animationThird}
          src="./illustrations/calendar.svg"
          alt="contests"
          style={{
            opacity: "0.9",
            width: "50%",
            height: "50%",
            marginLeft: "2%",
          }}
        />
      </div>

      <img
        src="./illustrations/divider34.svg"
        alt="divider2-3"
        style={{
          display: "flex",
          backgroundColor: "#11002c",
          border: "transparent",
        }}
      />

      <div className="homepage-fourth" ref={ref4}>
        <div className="homepage-fourth-text" style={{ marginRight: "7%" }}>
          <Title>
            Compete with your friends and track your progress using the NOSTALK
            leaderboards.
          </Title>
        </div>
        <motion.img
          animate={animationFourth}
          src="./illustrations/rankings.svg"
          alt="contests"
          style={{
            opacity: "0.9",
            width: "50%",
            height: "50%",
            marginLeft: "2%",
          }}
        />
      </div>

      {/* <div className="homepage-fifth"></div> */}

    </div>
  );
};

export default Homepage;
