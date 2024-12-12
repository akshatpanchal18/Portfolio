import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaFacebook,FaInstagram,FaGithub,FaTwitter,FaLinkedin, FaWhatsapp ,FaEnvelope} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

function Footer() {
  // const [data , setData]=useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/akshatpanchal18')
  //       .then((res)=>res.json())
  //       .then((data)=>{
  //           console.log(data);
  //           setData(data)
  //       })
  //   },[])
  return (
    <>
    <Wraper>
    <footer className="footer">
  <div className="footer-contact">
    <div className="contact-item">
      <IoCall className="contact-icon"/>
      <div>
        <p className="contact-text">+1 728365413</p>
        <p className="contact-subtext">Mon-Fri 9am-6pm</p>
      </div>
    </div>
    <div className="contact-item">
      <MdAttachEmail className="contact-icon"/>
      <div>
        <p className="contact-text">info@akshat.com</p>
        <p className="contact-subtext">Online support</p>
      </div>
    </div>
    <div className="contact-item">
      <FaMapLocationDot className="contact-icon"  />
      <div>
        <p className="contact-text">Gujarat, India</p>
        <p className="contact-subtext">Ahmedabad-382470, Guj</p>
      </div>
    </div>
  </div>

  <div className="footer-social">
    <div className="img">
    <img src="/logo.png" alt="" />
    </div>
    <div>
    <p className="social-text">Connect with us on</p>
    <div className="social-icons">
      {/* <a href="#" target='_blanck'><FaFacebook className='icon'/></a>
      <a href="#" target='_blanck'><FaInstagram className='icon'/></a> */}
      <a href="#" target='_blanck'><FaWhatsapp  className='icon'/></a> 
      <a href="https://github.com/akshatpanchal18" target='_blanck'><FaGithub className='icon'/></a>
      <a href="http://www.linkedin.com/in/akshat-panchal08" target='_blanck'><FaLinkedin className='icon'/></a>
      <a href="akshatpanchal08@gmail.com" target='_blanck'><FaEnvelope className='icon'/></a>
      {/* <a href="#" target='_blanck'><FaTwitter className='icon'/></a> */}
    </div>
    </div>
    <div>
    <Button href="/Akshat Panchal.pdf" download>
      Download Resume
  </Button>
    </div>
  </div>

 

  <div className="footer-copyright">
    <p>&copy; 2024. All rights reserved./created by <strong> Akshat Panchal </strong></p>
  </div>
</footer>


    </Wraper>
    </>
  )
}
const Button = styled.a`
margin-top:2rem;
  padding: 10px 20px;
  background-color: #5000ca;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #280261;
    transform:scale(0.9);
  }
`;
const Wraper= styled.section`

/* General styling */
.footer {
  background-color: #111;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

/* Contact section styling */
.footer-contact {
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  border-bottom: 1px solid #333;
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  color: #5000ca; /* Purple color for icons */
}

.contact-text {
  font-weight: bold;
  font-size: 16px;
}
.contact-text:hover{
color:#5000ca;
transition:0.2s ease-in;
}
.contact-subtext {
  color: #999;
  font-size: 14px;
}

/* Social media section styling */
.footer-social {
  padding: 10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:1000px
  margin:0 auto;
}
.img img{
width:200px;
}
.social-text {
  margin-bottom: 10px;
  font-size: 16px;
}

.social-icons a {
  margin: 0 8px;
  display: inline-block;
}

.social-icons .icon {
  font-size:2rem;
  color:white;
  transition: transform 0.2s ease;
}

.social-icons a:hover .icon {
color:#5000ca;
// background:white;
  transform: scale(1.1);
}
.footer-copyright {
  margin-top: 15px;
  font-size: 14px;
  color: #aaa;
}
/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-contact {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .contact-item {
    margin-bottom: 10px;
  }
    .footer-social {
    flex-direction: column;
    gap: 20px;
    }
}

`
export default Footer