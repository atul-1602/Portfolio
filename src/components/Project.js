import React, { useEffect } from "react";
import "../style/Project.css";
import ImgT from "../images/travelocity.png";
import Imgw from "../images/weather.png";
import ImgN from "../images/news.png"
import Imgt from "../images/todo.png";
import ImgB from "../images/bootstrap.png"
import phtml from "../images/html.png";
import pcss from "../images/css.png";
import pjavasript from "../images/javascriptjs.png";
import preact from "../images/reactjs.png";
import pgithub from "../images/github.png";
import api from "../images/api.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="project" id="project" data-AOS="fade-up">
        <div className="project-title">
          My <span>Projects</span>
        </div>
        <div className="projects">
          <div className="Project" data-AOS="fade-up">
            <div className="project-img">
              <img src={Imgw} alt="/" />
            </div>
            <div className="project-about">
              <h4>Weather App</h4>
              <span>
                <i>Made with:</i> <img src={pjavasript} alt="/" />
                <img src={api} alt="/" />
                <img src={phtml} alt="/" /> <img src={pcss} alt="/" />
              </span>

              <p>
                Build a simple weather app software application that provides
                users with current weather conditions. It can be accessed
                through various devices such as mobile phones, computers, and
                web browsers.
              </p>
              <div className="p-Btn">
                <button className="live" id="p-btn">
                  <a
                    href="https://atul-1602.github.io/Weather-App/"
                    target={"none"}
                  >
                    Live
                  </a>
                </button>
                <button className="code" id="p-btn">
                  <a href="https://github.com/atul-1602" target={"none"}>
                    <img src={pgithub} alt="/" /> <span>Code</span>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="Project" data-AOS="fade-up">
            <div className="project-img">
              {/* <div className="travelimg"></div> */}
              <img src={ImgT} alt="/" />
            </div>
            <div className="project-about">
              <h4>TRAVELOcity</h4>
              <span>
                <i>Made with:</i> <img src={preact} alt="/" />
                <img src={phtml} alt="/" /> <img src={pcss} alt="/" />
              </span>
              <p>
                Build travel app software application that enables users to
                order travel online. Users can browse through menus, customize
                their orders.This apps often feature a user-friendly interface,
                secure payment options, and loyalty programs to retain
                customers.
              </p>
              <div className="p-Btn">
                <button className="live" id="p-btn">
                  <a
                    href="https://travelocity-8yo68rpqr-atul-1602.vercel.app/"
                    target={"none"}
                  >
                    Live
                  </a>
                </button>
                <button className="code" id="p-btn">
                  <a href="https://github.com/atul-1602" target={"none"}>
                    <img src={pgithub} alt="/" />
                    <span>Code</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="Project" data-AOS="fade-up">
            <div className="project-img">
              {/* <div className="newsimg"></div> */}
              <img src={ImgN} alt="/" />
               
            </div>
            <div className="project-about">
              <h4>News Hub</h4>
              <span>
                <i>Made with:</i> <img src={pjavasript} alt="/" />
                 <img src={preact} alt="/" />
                 <img src={api} alt="/" />
                 <img src={ImgB} alt="/" />
              </span>
              <p>
                Build a News Hub software application that provides real time news.
                News related to Business, Software, Sports, Health, Technology,etc.
                </p>
              <div className="p-Btn">
                <button className="live" id="p-btn">
                  <a
                    href="https://github.com/atul-1602/News-Hub"
                    target={"none"}
                  >
                    Live
                  </a>
                </button>
                <button className="code" id="p-btn">
                  <a href="https://github.com/atul-1602/News-Hub" target={"none"}>
                    <img src={pgithub} alt="/" />
                    <span>Code</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="Project" data-AOS="fade-up">
            <div className="project-img">
              {/* <div className="todoimg"></div> */}
              <img src={Imgt} alt="/" />
            </div>
            <div className="project-about">
              <h4>TODO LIST</h4>
              <span>
                <i>Made with:</i> <img src={pjavasript} alt="/" />
                <img src={preact} alt="/" />{" "}
              </span>
              <p>
                Build a TODO APP software application that helps users manage
                their tasks and organize their schedules. Users can create lists
                of tasks, set due dates and reminders, prioritize their work,
                and mark completed items.
              </p>
              <div className="p-Btn">
                <button className="live" id="p-btn">
                  <a
                    href="https://github.com/atul-1602"
                    target={"none"}
                  >
                    Live
                  </a>
                </button>
                <button className="code" id="p-btn">
                  <a href="https://github.com/atul-1602" target={"none"}>
                    <img src={pgithub} alt="/" />
                    <span>Code</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
