import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function AboutMe() {
     const [data , setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/akshatpanchal18')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setData(data)
        })
    },[])
  return (
    <div>
        <Wrapper>
        <div className="container">

  {/* <!-- Header Section --> */}
  <div className="header">
    <img src={data.avatar_url} alt="Profile Photo" />
    <div className="info">
      <h1 className="name">Akshat Panchal</h1>
      <p className="title">Software Engineer & Web Developer</p>
      <p className="title"> Github:<a href="https://github.com/akshatpanchal18">{data.login}</a></p>
    </div>
  </div>

  {/* <!-- About Section --> */}
  <div className="about">
    <h2>About Me</h2>
    <p>
      I am a passionate software engineer with a keen interest in building high-quality, scalable web applications. With experience in both frontend and backend technologies, I am always eager to learn and apply new technologies to solve real-world problems.
    </p>
  </div>

  {/* <!-- Education Section --> */}
  <h2 className="section-title">Education</h2>
  <ul className="details-list">
    <li>
      <h3>Bachelor of Engineering in Computer Engineering</h3>
      <p className="date">Gujarat Technological University, 2020 - 2024</p>
      <p>CGPA: 7.40 / 10</p>
    </li>
    {/* <li>
      <h3>High School Diploma</h3>
      <p className="date">ABC High School, 2013 - 2015</p>
    </li> */}
  </ul>

  {/* <!-- Experience Section --> */}
  <h2 className="section-title">Experience</h2>
  <ul className="details-list">
    <li>
      <h3>Web Developer at Right Info Service</h3>
      <p className="date">Jan 2024 - April 2024</p>
      <p>Developing web applications and collaborating with a cross-functional team to deliver innovative software solutions.</p>
    </li>
    <li>
      <h3>Intern at Tech Nishal</h3>
      <p className="date">Aug 2023 - Sept 2023</p>
      <p>Worked on web application projects in ReactJS, gaining hands-on experience in software development and project management.</p>
    </li>
  </ul>

  {/* <!-- Skills Section --> */}
  <h2 className="section-title">Skills</h2>
  <div className="skills">
    <span className="skill">JavaScript</span>
    <span className="skill">React</span>
    <span className="skill">Node.js</span>
    <span className="skill">HTML & CSS</span>
    <span className="skill">SQL</span>
    <span className="skill">Git</span>
  </div>

  {/* <!-- Projects Section --> */}
  <h2 className="section-title">Projects</h2>
  <div className="projects">
    <div className="project">
      <h3>Project 1: Portfolio Website</h3>
      <p>Created a responsive personal portfolio website using HTML, CSS, and JavaScript. The website showcases projects, skills, and contact information.</p>
    </div>
    <div className="project">
      <h3>Project 2: E-commerce App</h3>
      <p>Developed a full-stack e-commerce application with React for the frontend and Node.js for the backend, complete with user authentication and payment processing.</p>
    </div>
  </div>

  {/* <!-- Achievements and Certifications Section --> */}
  <h2 className="section-title">Achievements & Certifications</h2>
  <ul className="details-list">
    <li>
      <h3>Certified JavaScript Developer</h3>
      <p className="date">Issued by C-dac Academy, March 2021</p>
    </li>
    <li>
      <h3>RunnerUp of Web Hackathon by L.D Engineering</h3>
      <p className="date">Secured 2nd place, October 2023</p>
    </li>
  </ul>

  {/* <!-- Contact/Download Resume Button --> */}
  {/* <a href="#" className="button">Download Resume</a> */}

</div>

        </Wrapper>
    </div>
  )
}
const Wrapper = styled.section`
//* General Styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;
}

.container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Header Section */
.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.header img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #5000ca; /* Changed color */
}

.header .info {
  flex: 1;
}

.header .name {
  font-size: 32px;
  font-weight: 700;
  color: #5000ca; /* Changed color */
  margin: 0;
}

.header .title {
  font-size: 18px;
  color: #555;
  margin-top: 5px;
}

/* About Section */
.about {
  margin: 30px 0;
}

.about h2 {
  font-size: 24px;
  color: #5000ca; /* Changed color */
  margin-bottom: 10px;
}

.about p {
  font-size: 16px;
  line-height: 1.6;
  color: #5000ca; /* Changed color */
}

/* Section Titles */
.section-title {
  font-size: 24px;
  color: #5000ca; /* Changed color */
  margin: 30px 0 10px;
  border-bottom: 2px solid #5000ca; /* Changed color */
  padding-bottom: 5px;
}

/* Education, Experience, and Achievements/Certifications Lists */
.details-list {
  list-style-type: none;
  padding: 0;
}

.details-list li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.details-list h3 {
  font-size: 18px;
  margin: 0;
  color: #333;
}

.details-list .date {
  font-size: 14px;
  color: #999;
}

/* Projects Section */
.projects {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.project h3 {
  font-size: 18px;
  color: #333;
  margin: 0 0 5px;
}

/* Skills Section */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.skill {
  background-color: #5000ca; /* Changed color */
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
}

/* Button */
.button {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 20px;
  background-color: #5000ca; /* Changed color */
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.3s;
  width: fit-content;
}

.button:hover {
  background-color: #3c00a2; /* Slightly darker shade of #5000ca */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header img {
    width: 120px;
    height: 120px;
  }

  .header .name {
    font-size: 26px;
  }

  .header .title {
    font-size: 16px;
  }

  .about h2, .section-title {
    font-size: 20px;
  }

  .about p, .details-list h3, .project h3 {
    font-size: 15px;
  }

  .skills {
    justify-content: center;
  }

  .button {
    width: 100%;
    text-align: center;
  }
}

`
export default AboutMe