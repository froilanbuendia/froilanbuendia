import React from "react";
import "./portfolio.css";
import Nillys from "../../assets/Nillys.png";
import prog5 from "../../assets/prog5.png";
import prog6 from "../../assets/prog6.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Nillys} alt="" />
          </div>
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
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={prog5} alt="" />
          </div>
          <h3>Sort Racer with Linux</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/froilanbuendia/CECS_325/tree/master/prog_5/"
              className="btn btn-primary"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={prog6} alt="" />
          </div>
          <h3>Misspelled Words</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/froilanbuendia/CECS_325/tree/master/prog_5/"
              className="btn btn-primary"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
