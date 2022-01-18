import "./navbar.scss";
import { LocationCity, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    // when menuOpen is true, add "active" to className -> "navbar active"
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">hello!</a>
          <div className="itemContainer">
            <LocationCity className="icon"/>
            <span>Vancouver, BC </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>cynthiaa.leung@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {/* onclick, set state to opposite of what setMenu currently is */}
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line2"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
