import React from "react";
import "./PeopleModal.scss";
import default_people from "../../Assets/default_people.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const PeopleModal = ({ details, showModal, setShowModal }) => {
  const degree = showModal ? details.degree_details : null;
  const degreeText = degree ? `${degree.admission_year}-${(degree.admission_year + degree.duration_in_years)%100} (${degree.degree_name}, Major: ${degree.major}${degree.minor ? `, Minor: ${degree.minor}` : ""})` : "";

  return showModal ? (
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
        <p className="degree">{degreeText}</p>
        <div className="socialMedia">
          {details.github_link && (
            <a href={details.github_link} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}
          {details.linkedin_link && (
            <a href={details.linkedin_link} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}
          {details.twitter_link && (
            <a href={details.twitter_link} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          )}
        </div>
        <div className="project">
          {details.projects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="projectContent">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
              </div>

              <div className="buttons">
                <a href={project.link} target="_blank" rel="noreferrer">Project Link</a>
                <a href={project.org_link} target="_blank" rel="noreferrer">Org Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;}

export default PeopleModal;
