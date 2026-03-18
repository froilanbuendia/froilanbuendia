"use client";
import NillysCSS from "./nillys.module.css";
import Link from "next/link";
import NillysLogo from "../../../assets/images/Nillys.png";
import NillysSelf from "../../../assets/images/nillysSelf.jpeg";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
const Nillys = () => {
  const [slide, setSlide] = useState(1);
  const handleSlide = (arrow: string) => {
    if (arrow == "-" && slide != 1) {
      setSlide(slide - 1);
    } else if (arrow == "-") {
      setSlide(2);
    } else if (arrow == "+" && slide != 2) {
      setSlide(slide + 1);
    } else {
      setSlide(1);
    }
  };
  return (
    <div className={NillysCSS.projectWrapper}>
      <div className={NillysCSS.projectTitleContainer}>
        <img src={NillysLogo.src} />
      </div>
      <div className={NillysCSS.projectDetailsContainer}>
        <img src={NillysSelf.src} className={NillysCSS.nillysSelfImg} />
        {slide === 1 && (
          <div className={NillysCSS.projectDescription}>
            <div className={NillysCSS.projectText}>
              Contributed to the development of the website for Nilly’s Burger
              Shop to help customers order online, contact or find the shop, and
              learn more about Nilly’s.
            </div>
            <div>
              <Link href="https://nillysburgershop.com/">
                <button type="button" className={NillysCSS.btn}>
                  Nilly’s Burger Shop
                </button>
              </Link>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div className={NillysCSS.projectDescription}>
            <div className={NillysCSS.projectText}>
              <div>
                Tools I used to help develop the website:
                <li>React</li>
                <li>Typescript</li>
                <li>Google Maps API</li>
                <li>Netlify</li>
              </div>
              <br />I currently work here as a team member preparing and
              delivering food in a fast pace environment.
            </div>
          </div>
        )}
        <div className={NillysCSS.arrowContainer}>
          <button
            className={NillysCSS.prevArrow}
            onClick={() => handleSlide("-")}
          >
            <MdNavigateBefore />
          </button>
          <button
            className={NillysCSS.nextArrow}
            onClick={() => handleSlide("+")}
          >
            <MdNavigateNext />
          </button>
        </div>
        <div className={NillysCSS.dotsContainer}>
          <div
            className={slide === 1 ? NillysCSS.dotActive : NillysCSS.dot}
            onClick={() => {
              setSlide(1);
            }}
          />
          <div
            className={slide === 2 ? NillysCSS.dotActive : NillysCSS.dot}
            onClick={() => {
              setSlide(2);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nillys;
