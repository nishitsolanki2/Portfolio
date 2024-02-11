import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import bg from "../../assets/image1.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intorContent">
        <span className="hello">
          Hello,
          <br />{" "}
        </span>
        <span className="introText">
          I'm <span className="introName">Nishit</span> <br />
          Website Designer
        </span>{" "}
        <p className="introPara">
          I'm a skilled and passionate web designer with experience in creating{" "}
          <br /> visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn"  
    onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}>
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
