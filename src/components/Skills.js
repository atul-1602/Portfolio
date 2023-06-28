import "../style/Skills.css"
import React ,{useEffect} from 'react'
import js from "../images/javascriptjs.png"
import react from "../images/reactjs.png"
import c from "../images/c.png"
import css from "../images/css.png"
import html from "../images/html.png"
import git from "../images/git.png"
import java from "../images/java.png"
import sql from "../images/mysql.png"
import bootstrap from "../images/bootstrap.png"
import AOS from "aos";
import 'aos/dist/aos.css'
const Skills = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  return (
    <>
      <div className="skills" id="skills" >
        <div className="heading">
          <div>Technical <span>Skills</span> </div>
        </div>
        <div className="skill">
          <div className="logo"  data-AOS="fade-up">
            <img src={js} alt="/" />
            {/* JavaScript */}
            <p>JavaScript</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={react} alt="/" />
            <p>React Js</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={java} alt="/" />
            <p>Java</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={c} alt="/" />
            <p>C</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={html} alt="/" />
            <p>HTML</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={css} alt="/" />
            <p>CSS</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={git} alt="/" />
            <p>Git</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={sql} alt="/" />
            <p>mySql</p>
          </div>
          <div className="logo" data-AOS="fade-up">
            <img src={bootstrap} alt="/" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
