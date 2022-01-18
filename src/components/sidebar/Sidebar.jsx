import "./sidebar.scss";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
      </ul>
    </div>
  )
}
