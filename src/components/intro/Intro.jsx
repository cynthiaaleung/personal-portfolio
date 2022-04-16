import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer"]
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/portrait.png" alt="portrait"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Cynthia Leung</h1>
          <h3>Full Stack <span ref={textRef}></span></h3>
        </div>
        <a href="#about">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}
