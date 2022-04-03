import React, { useEffect, useState } from 'react';
import '../App.css'
import { AnimatePresence, motion } from "framer-motion";

import { routes } from "./routes";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";

function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const leftalign = document.querySelectorAll(".link");
    const iconSize = document.querySelector(".logo")
    if (leftalign) {
      for (let i = 0; i < leftalign.length; i++) {
        leftalign[i].style.justifyContent = "left";
        leftalign[i].style.paddingLeft = "1vw";
        leftalign[i].style.paddingRight = "1vw";


      }
    }
    if (iconSize&&isOpen)
      iconSize.style.fontSize = "3.5rem";
    if (iconSize && !isOpen)
      iconSize.style.fontSize = "2rem";
      
    
  }, [isOpen]);
  return (
    <div className='mainContainer'>
      <motion.div animate={{width: isOpen ? "10vw" : "2.5vw" }} className="sidebar" onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
        <div className='logo'>
          <FaLaptopCode />
       </div>
       
        <section className='routes'>
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link" >
              <div className='icon' style={{fontSize: "4vh"}}>
                {route.icon}
              </div>
              
              <AnimatePresence>
                {isOpen && <motion.div className="link_text">
                    {route.name}
                  </motion.div>}
                  
                </AnimatePresence>
                
            </NavLink>
          ))}
        </section>
      </motion.div>
      {/* <main>
          {children}  
        </main> */}
    </div>
  )
}

export default SideBar