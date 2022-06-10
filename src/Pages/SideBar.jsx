import React, { useEffect, useState } from "react";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes";
import { NavLink, Link } from "react-router-dom";
import { SiGraphql } from "react-icons/si";
import Navdiv from "../components/Navdiv";
function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };



  useEffect(() => {
    const leftalign = document.querySelectorAll(".link");
    const iconSize = document.querySelector(".logo");
    if (leftalign) {
      for (let i = 0; i < leftalign.length; i++) {
        leftalign[i].style.justifyContent = "left";
        leftalign[i].style.paddingLeft = "1vw";
        leftalign[i].style.paddingRight = "1vw";
      }
    }
    if (iconSize && isOpen) iconSize.style.fontSize = "5rem";
    if (iconSize && !isOpen) iconSize.style.fontSize = "2rem";
  }, [isOpen]);
  return (
    <>
      <div className="mainSideContainer">
        <motion.div
          animate={{
            width: isOpen ? "10vw" : "2.5vw",
            transition: {
              duration: 0.3,
              type: "spring",
              damping: 12,
            },
          }}
          className="sidebar"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="logo" style={{ color: "black" }}>
            <Link to="/">
              <SiGraphql style={{ color: "#1e4db7" }} />
            </Link>
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link">
                <div className="icon" style={{ fontSize: "3vh" }}>
                  {route.icon}
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
      </div>
      {/* <div
        className="middleContainer"
        style={{ width: isOpen ? "90vw" : "97.5vw" }}
      >
        <main className="content">{children}</main>
      </div> */}
    </>
  );
}

export default SideBar;
