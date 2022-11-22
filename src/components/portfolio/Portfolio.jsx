import React from "react";
import "./portfolio.css";
import Nillys from "../../assets/Nillys.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container protfolio__container">
        <article className="portfolio__item">
          <img src={Nillys} alt="" />
          <h3>Nilly's Burger Shop</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.nillysburgershop.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Nilly's Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
