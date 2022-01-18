import "./sidebar.scss";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <ul>
        {/* on click for any li component, sidebar will be hidden */}
        <li onClick={() => {setMenuOpen(false)}}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => {setMenuOpen(false)}}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => {setMenuOpen(false)}}>
          <a href="#works">Works</a>
        </li>
      </ul>
    </div>
  )
}
