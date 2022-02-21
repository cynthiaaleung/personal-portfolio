import "./projects.scss";
import { worksData } from "../../works-data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {

  const [currentSlide, setCurrentSlide] = useState(0);

  /* 
  when left arrow is clicked, check if currentSlide index larger than 0 (if false, then means it is the first slide, so setCurrentSlide to index 7 which is the last slide). Similar logic for right arrow.
  */
  const handleClick = (direction) => {
    direction === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7) 
      : setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      {/* -100vw will show next slide */}
      <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        {worksData.map(d=> (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}
                  </p>
                  <a href={d.link}><FontAwesomeIcon icon={faGithub} /> GitHub Link</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
        <img 
          src="assets/right-arrow.png" 
          alt="" className="arrow left" 
          onClick={()=>handleClick("left")}
        />
        <img 
          src="assets/right-arrow.png" 
          alt="" className="arrow right"
          onClick={()=>handleClick("right")}
        />
    </div>
  )
}
