import React, {useState} from 'react';

import { motion } from "framer-motion";
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import './AvatarCircle.scss';

function AvatarCircle({
    image,
    name = 'Aadil',
    email,
    linkedin,
}) {

    const [isMouse, toggleMouse] = useState(false);
    const toggleMouseMenu = () => {
        toggleMouse(!isMouse);
    };
    const subMenuAnimate = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.3
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
        //   translateY: 20,
          transition: {
            duration: 0.3,
            delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
      };

  return <span className="avatarCircleDiv">
      <motion.div
            className="menu-item"
            onMouseEnter={toggleMouseMenu}
            onMouseLeave={toggleMouseMenu}
          >
            {/* <a href="/">Menu Item</a> */}
            <img src={image} alt="" />
            <div className="label2">
                <motion.div
                className="sub-menu"
                initial="exit"
                animate={isMouse ? "enter" : "exit"}
                variants={subMenuAnimate}
                >
                <p>{name}</p>
                <div className="iconRow">
                {
                    !email ? null :
                    <a href = {"mailto: "+email}><AiFillMail size="20" /></a>

                }
                {
                    !linkedin ? null :
                    <a href = {linkedin} target="_blank"><AiFillLinkedin size="20" /></a>

                }
                </div>
                </motion.div>
            </div>
          </motion.div>
    </span>;
}

export default AvatarCircle;
