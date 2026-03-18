"use client";
import FroiFramesCSS from "./froiframes.module.css";
import goBeach from "../../../assets/images/goBeach.jpeg";
import Link from "next/link";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
const FroiFrames = () => {
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
    <div className={FroiFramesCSS.projectWrapper}>
      <div className={FroiFramesCSS.projectTitleContainer}>
        <div className={FroiFramesCSS.projectTitle}>
          Froi<div style={{ color: "gold" }}>Frames</div>
        </div>
      </div>
      <div className={FroiFramesCSS.projectDetailsContainer}>
        <img src={goBeach.src} className={FroiFramesCSS.goBeachImg} />
        {slide === 1 && (
          <div className={FroiFramesCSS.projectDescription}>
            <div className={FroiFramesCSS.projectText}>
              A photo album with Amazon S3 storage buckets and Amazon CloudFront
              to store and quickly retrieve pictures
            </div>
            <div>
              <Link href="https://froiframes.com/">
                <button type="button" className={FroiFramesCSS.btn}>
                  FroiFrames
                </button>
              </Link>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div className={FroiFramesCSS.projectDescription}>
            <div className={FroiFramesCSS.projectText}>
              Tools used to develop FroiFrames:
              <li>Next.js</li>
              <li>Amazon S3</li>
              <li>Amazon Cloudfront</li>
              <li>Render</li>
              <li>Netlify</li>
            </div>
          </div>
        )}
        <div className={FroiFramesCSS.arrowContainer}>
          <button
            className={FroiFramesCSS.prevArrow}
            onClick={() => handleSlide("-")}
          >
            <MdNavigateBefore />
          </button>
          <button
            className={FroiFramesCSS.nextArrow}
            onClick={() => handleSlide("+")}
          >
            <MdNavigateNext />
          </button>
        </div>
        <div className={FroiFramesCSS.dotsContainer}>
          <div
            className={
              slide === 1 ? FroiFramesCSS.dotActive : FroiFramesCSS.dot
            }
            onClick={() => {
              setSlide(1);
            }}
          ></div>
          <div
            className={
              slide === 2 ? FroiFramesCSS.dotActive : FroiFramesCSS.dot
            }
            onClick={() => {
              setSlide(2);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FroiFrames;
