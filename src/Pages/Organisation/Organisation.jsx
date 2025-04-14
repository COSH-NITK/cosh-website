import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Organisation.scss";
import defaultImage from "../../Assets/default_image.svg";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import il1 from "../../Assets/il_collaborate1.svg";
import il2 from "../../Assets/il_collaborate2.svg";
import getOpenSourceData from "../../Helper/getOpenSourceData";
import Loading from "../../Components/Loading/Loading";

function Organisation() {
  let { slug } = useParams();
  const [organisation, setOrganisation] = useState([]);

  // const organisationDetails = [
  //   {
  //     id: 1,
  //     name: 'Inkscape',
  //     categories: 'End-user applications',
  //     technology: ['React', 'C++', 'Python', 'C'],
  //     desc: 'Inkscape is a professional vector graphics editor for Windows, Mac OS X and Linux. It\'s free and open source.',
  //     year: ['2022'],
  //     link: "https://inkscape.org/",
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'Postman',
  //     categories: 'API Development',
  //     technology: ['API', 'Javascript', 'Node.js'],
  //     desc: 'Postman is a popular API client that makes it easy for developers to create, share, test and document APIs.',
  //     year: ['2021'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'OpenMRS',
  //     categories: 'Healthcare',
  //     technology: ['Java', 'React', 'MySQL'],
  //     desc: 'OpenMRS is a collaborative open-source project to develop software to support the delivery of health care in developing countries.',
  //     year: ['2020'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'Liquid Galaxy',
  //     categories: 'Spatial Computing',
  //     technology: ['Python', 'C++', 'HTML/CSS'],
  //     desc: 'Liquid Galaxy is an immersive visualization system that uses multiple screens to provide a panoramic view of data.',
  //     year: ['2022'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 5,
  //     name: 'SymPy',
  //     categories: 'Mathematics',
  //     technology: ['Python', 'C'],
  //     desc: 'SymPy is a Python library for symbolic mathematics.',
  //     year: ['2021'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 6,
  //     name: 'FOSSASIA',
  //     categories: 'Open Tech Development',
  //     technology: ['Python', 'JavaScript', 'Angular'],
  //     desc: 'FOSSASIA is an organization developing software applications for social change using a wide-range of technologies.',
  //     year: ['2020'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 7,
  //     name: 'Homebrew',
  //     categories: 'Package Management',
  //     technology: ['Ruby', 'Shell'],
  //     desc: 'Homebrew is a package manager for macOS that simplifies the installation of software on Apple\'s macOS operating system.',
  //     year: ['2022'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 8,
  //     name: 'Public Lab',
  //     categories: 'Environmental Science',
  //     technology: ['JavaScript', 'React', 'Python'],
  //     desc: 'Public Lab is a community where you can learn how to investigate environmental concerns using inexpensive DIY techniques.',
  //     year: ['2021'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  //   {
  //     id: 9,
  //     name: 'Systers',
  //     categories: 'Women in Computing',
  //     technology: ['Python', 'Java', 'C++'],
  //     desc: 'Systers is an international community for all women involved in the technical aspects of computing.',
  //     year: ['2020'],
  //     projects: [
  //       {
  //         id: 1,
  //         name: "Porting Inkscape to React",
  //         desc: "Porting Inkscape to React for better performance and maintainability.",
  //         year: 2022,
  //       },
  //       {
  //         id: 2,
  //         name: "Adding new features to Inkscape",
  //         desc: "Adding new features to Inkscape to improve the user experience.",
  //         year: 2022,
  //       },
  //     ],
  //     people: [
  //       {
  //         id: 1,
  //         name: "Steve Johnson",
  //         project: "Porting Inkscape to React",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/stevejohnson",
  //         linkedin_link: "https://linkedin.com/in/stevejohnson",
  //         twitter_link: "https://twitter.com/stevejohnson",
  //       },
  //       {
  //         id: 2,
  //         name: "Emily Davis",
  //         project: "Adding new features to Inkscape",
  //         link: "https://inkscape.org/",
  //         image: "https://randomuser.me/api/portraits/men/1.jpg",
  //         github_link: "https://github.com/emilydavis",
  //         linkedin_link: "https://linkedin.com/in/emilydavis",
  //         twitter_link: "https://twitter.com/emilydavis",
  //       },
  //     ]
  //   },
  // ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    // Find the organisation by slug (ID)
    const res = await getOpenSourceData();
    const oss_details = res[0];
    const organisationRef = oss_details.organisations;

    const org = organisationRef.find(
      (org) => `${org.name.toLowerCase().replace(/ /g, "-")}` === slug
    );
    if (org) {
      setOrganisation(org);
      setIsLoading(false);
    } else {
      console.error("Organisation not found");
    }
    setIsLoading(false);
  }, [slug]);

  if (!organisation) return <p>Organisation not found.</p>;

  return isLoading ? (
    <Loading />
  ) : (
    <div className="organisation">
      <div className="organisation-header">
        <div>
          <div className="org-name">
            <a target="_blank" href={`${organisation.link}`} rel="noreferrer">
              {organisation.name}
            </a>
          </div>

          <p className="description">{organisation.description}</p>
        </div>
        <img
          className="org-image"
          src={organisation.image || defaultImage}
          alt={`${organisation.name} Logo`}
        />
      </div>

      <h1 className="hero-header">Students</h1>

      <div className="organisation-hero">
        {/* <img src={il1} className="il2" alt="Illustration" /> */}
        <div className="organisation-participants">
          {organisation.people.map((person) => (
            <div key={person.id} className="person-card">
              <div className="person-info">
                <img src={person.image || defaultImage} alt="" />
                <h3 className="">{person.name}</h3>
                <a
                  target="_blank"
                  href={person.link}
                  className="project-name"
                  rel="noreferrer"
                >
                  {person.project}
                </a>
                <p className="project-year">{person.year}</p>
                <div className="social-links">
                  {person.github_link && (
                    <a
                      href={person.github_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {person.linkedin_link && (
                    <a
                      href={person.linkedin_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiLinkedin />
                    </a>
                  )}
                  {person.twitter_link && (
                    <a
                      href={person.twitter_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiTwitter />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organisation;
