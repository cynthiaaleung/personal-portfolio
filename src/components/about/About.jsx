import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import "./about.scss";

export default function About() {

  return (
    <div className="about" id="about">
      <div className="about-left">
        <h1 className="about-title">
          About Me
        </h1>
        <p className="about-desc">
        I am a Full Stack Web Developer with a background in Economics and Banking. I am passionate about creating apps with amazing aesthetics that empower and add convenience to users. In my spare time, you can find me playing the piano or hanging out with my friends!
        </p>
        <p className="stack">
          Tech Stack
        </p>
        <p className="about-desc">
        JavaScript, React, Node, Express, jQuery, AJAX, HTML, CSS, SASS, Ruby, Rails, PostgreSQL
        </p>
        <div className="contact">
          <a href="https://github.com/cynthiaaleung"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/cynthiaaleung"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="arrow">
        <a href="#portfolio" className="about-arrow">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
      </div>
      <div className="about-right">
        <div className="about-card bg">
        </div>
        <div className="about-card">
          <img src="assets/me.png" alt="" className="about-img" />
        </div>
      </div>
    </div>
  )
}