import React,{useEffect} from "react";
import "../style/Education.css";
import kvs from "../images/kv.png";
import gcet from "../images/galgotia.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'
const Education = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  return (
    <>
      <div className="education" id="education" >
        <div className="Eheading">
          <div>
            My<span>Education </span>{" "}
          </div>
        </div>
        <div className="my-education"  data-AOS="fade-up">
          <div className="college"  data-AOS="fade-up">
            <div className="img">
              <img src={gcet} alt="/" />
            </div>
            <div className="about">
              <h5>2020-24</h5>
              <p>
                Galgotias College of Engineering & Technology <br />
                Computer Science and Engineering <br />
                Sgpa:8.5/10
              </p>
            </div>
          </div>
          <div className="college"  data-AOS="fade-up">
            <div className="img">
              <img src={kvs} alt="/" />
            </div>
            <div className="about">
              <h5>2019</h5>
              <p>
                Kendriya Vidyalaya R.R.C. Fatehgarh <br />
                PCM <br />
                93.8% 12th | 10 cgpa 10th
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
