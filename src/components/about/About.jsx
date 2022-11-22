import React from "react";
import "./about.css";
import { AiOutlineFolder } from "react-icons/ai";
import DisneyME from "../../assets/DisneyME.png";
const About = () => {
  return (
    <section id="about">
      <h5> Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={DisneyME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineFolder className="about__icon" />
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            Helloo I'm Froilan Buendia and I'm an aspiring Software Engineer
            pursuing a Bachelor's Degree in Computer Science at California State
            Univeristy of Long Beach. Some of my hobbies include working out,
            playing basketball and the ukulele, and listening to music.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
