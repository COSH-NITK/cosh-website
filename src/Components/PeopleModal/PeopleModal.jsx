import React from "react";
import "./PeopleModal.scss";
import default_people from "../../Assets/default_people.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const PeopleModal = ({ details, showModal, setShowModal }) =>
  showModal ? (
    <div className="mainDiv">
      <div className="peopleModal">
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="closeBtn"
        >
          <IoMdClose />
        </button>
        <h2 className="title">{details.name || "Name"}</h2>
        <img src={details.image || default_people} alt="" />
        <div className="socialMedia">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
        </div>
        <div className="project">
          {details.projects.map((project) => (
            <div key={project.id} className="projectCard">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="buttons">
                <button>More Details</button>
                <button>Organisation</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;

export default PeopleModal;
