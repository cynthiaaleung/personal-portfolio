import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio, allPortfolio } from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "allProjects",
      title: "All Projects",
    }
  ]

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/featured-EatsyPeasy.png" alt="EatsyPeasy" />
          <h3>EatsyPeasy</h3>
        </div>
        <div className="item">
          <img src="assets/featured-Gnome-Sweet-Gnome.png" alt="Gnome-Sweet-Gnome" />
          <h3>Gnome Sweet Gnome</h3>
        </div>
        <div className="item">
          <img src="assets/featured-Scheduler.png" alt="Scheduler" />
          <h3>Scheduler</h3>
        </div>
      </div>
    </div>
  )
}
