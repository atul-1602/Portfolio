import "../style/Contact.css";
import React, { useEffect } from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email2.png";
import AOS from "aos";
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  return (
    <>
      <div className="contact" id="contact" data-AOS="fade-up"> 
        <div className="Heading">
          <div className="left">Contact </div>
          <div className="right"> Me</div>
        </div>
        <div className="social">
          <div className=" con" data-AOS="fade-up" >
            <div className="social-img">
              <img src={email} alt="/" />
            </div>
            <div className="info">
              <h4>email</h4>
              <p> <a href="www.gmail.com" target={"blank"}></a>atulchauhan1602@gmail.com</p>
            </div>
          </div>

          <div className=" con" data-AOS="fade-up" >
            <div className="social-img">
              <img src={github} alt="/" />
            </div>
            <div className="info">
              <h4>github</h4>
              <p>
                <a href=" https://github.com/atul-1602" target={"blank"}>atul-1602
                </a>
              </p>
            </div>
          </div>
          <div className=" con" data-AOS="fade-up" >
            <div className="social-img">
              <img src={linkedin} alt="/" />
            </div>
            <div className="info">
              <h4>linkedin</h4>
              <p>
                <a
                  href="https://www.linkedin.com/in/atul-chauhan-35a499131"
                  target={"blank"}
                >atul-chauhan
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="form" data-AOS="zoom-in-up" data-AOS-duration='1000'>
          <h3>Send <span> Email</span></h3>
          <div className="input">
            <input required="true" type="text" placeholder="Name" />
            <input required="true" type="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
          </div>
          <button className="form-btn">Send</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
