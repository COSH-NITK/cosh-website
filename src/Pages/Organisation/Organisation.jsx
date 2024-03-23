import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Organisation.scss';
import defaultImage from '../../Assets/default_image.svg';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Organisation() {
  let { slug } = useParams();
  const [organisation, setOrganisation] = useState(null);

  const organisationDetails = [
    {
      id: 1,
      name: 'Inkscape',
      categories: 'End-user applications',
      technology: ['React', 'C++', 'Python', 'C'],
      desc: 'Inkscape is a professional vector graphics editor for Windows, Mac OS X and Linux. It\'s free and open source.',
      year: ['2022'],
      link: "https://inkscape.org/",
      people: [
        {
            id: 1,
            name: "Steve",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 2,
      name: 'Postman',
      categories: 'API Development',
      technology: ['API', 'Javascript', 'Node.js'],
      desc: 'Postman is a popular API client that makes it easy for developers to create, share, test and document APIs.',
      year: ['2021'],
      people: [
        {
            id: 2,
            name: "Ronald",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 3,
      name: 'OpenMRS',
      categories: 'Healthcare',
      technology: ['Java', 'React', 'MySQL'],
      desc: 'OpenMRS is a collaborative open-source project to develop software to support the delivery of health care in developing countries.',
      year: ['2020'],
      people: [
        {
            id: 3,
            name: "Orane",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 4,
      name: 'Liquid Galaxy',
      categories: 'Spatial Computing',
      technology: ['Python', 'C++', 'HTML/CSS'],
      desc: 'Liquid Galaxy is an immersive visualization system that uses multiple screens to provide a panoramic view of data.',
      year: ['2022'],
      people: [
        {
            id: 4,
            name: "Mark",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 5,
      name: 'SymPy',
      categories: 'Mathematics',
      technology: ['Python', 'C'],
      desc: 'SymPy is a Python library for symbolic mathematics.',
      year: ['2021'],
      people: [
        {
            id: 6,
            name: "Govind",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 6,
      name: 'FOSSASIA',
      categories: 'Open Tech Development',
      technology: ['Python', 'JavaScript', 'Angular'],
      desc: 'FOSSASIA is an organization developing software applications for social change using a wide-range of technologies.',
      year: ['2020'],
      people: [
        {
            id: 7,
            name: "Robert",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        },
        {
            id: 8,
            name: "Jade",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 7,
      name: 'Homebrew',
      categories: 'Package Management',
      technology: ['Ruby', 'Shell'],
      desc: 'Homebrew is a package manager for macOS that simplifies the installation of software on Apple\'s macOS operating system.',
      year: ['2022'],
      people: [
        {
            id: 9,
            name: "Kevin",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        },
        {
            id: 10,
            name: "Obito",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 8,
      name: 'Public Lab',
      categories: 'Environmental Science',
      technology: ['JavaScript', 'React', 'Python'],
      desc: 'Public Lab is a community where you can learn how to investigate environmental concerns using inexpensive DIY techniques.',
      year: ['2021'],
      people: [
        {
            id: 11,
            name: "Jessica",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
    {
      id: 9,
      name: 'Systers',
      categories: 'Women in Computing',
      technology: ['Python', 'Java', 'C++'],
      desc: 'Systers is an international community for all women involved in the technical aspects of computing.',
      year: ['2020'],
      people: [
        {
            id: 12,
            name: "Danny",
            github_link: "",
            linkedin_link: "",
            twitter_link: "",
        }
      ]
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the organisation by slug (ID)
    const org = organisationDetails.find(org => `${org.id}` === slug);
    if (org) {
      setOrganisation(org);
    } else {
      console.error("Organisation not found");
    }
    setIsLoading(false);
  }, [slug]);


  if (isLoading) return <p>Loading...</p>;

  if (!organisation) return <p>Organisation not found.</p>;

  return (
    <div className="organisation">
      <div className="organisation-header">
        <div>
         
            <div className='org-name'>
                <a target='_blank' href={`${organisation.link}`}>{organisation.name}</a>
            </div>
         
            
            <p className="description">{organisation.desc}</p>
        </div>
        <img className='org-image' src={organisation.image || defaultImage} alt={`${organisation.name} Logo`} />
      </div>
    
        <div className="organisation-people">
          <h2>People</h2>
          {organisation.people.map((person) => (
            <div key={person.id} className="person-card">
                <div className='person-info'>
                    <img src={organisation.image || defaultImage} alt="" />
                    <h3>{person.name}</h3>
                    <div className="social-links">
                        {person.github_link && <a href={person.github_link}><FiGithub /></a>}
                        {person.linkedin_link && <a href={person.linkedin_link}><FiLinkedin /></a>}
                        {person.twitter_link && <a href={person.twitter_link}><FiTwitter /></a>}
                    </div>
                </div>
            </div>
          ))}
        </div>


    </div>
  );
}

export default Organisation;
