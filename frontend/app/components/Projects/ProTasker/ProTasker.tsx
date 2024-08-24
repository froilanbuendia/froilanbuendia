"use client";
import ProTaskerCSS from "./protasker.module.css";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Link from "next/link";
const ProTasker = () => {
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
    <div className={ProTaskerCSS.projectWrapper}>
      <div className={ProTaskerCSS.projectDetailsContainer}>
        {slide === 1 && (
          <div className={ProTaskerCSS.projectDescription}>
            <div className={ProTaskerCSS.projectText}>
              Led the design and development of a Google Chrome Extension that
              tracks user’s time and blocks individual websites to improve
              productivity.
            </div>
            <div>
              <Link href="https://csulb-my.sharepoint.com/:v:/g/personal/joshua_askam_student_csulb_edu/EYgMENGLhr5CuZrJZuD0WUIBTbbvmgWJJEP9OOVb8eb7Bg">
                <button type="button" className={ProTaskerCSS.btn}>
                  ProTasker
                </button>
              </Link>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div className={ProTaskerCSS.projectDescription}>
            <div className={ProTaskerCSS.projectText}>
              Tools used to develop ProTasker:
              <li>Figma</li>
              <li>Plasmo</li>
              <li>Typescript</li>
            </div>
          </div>
        )}
        {slide === 3 && (
          <div className={ProTaskerCSS.projectDescription}>
            <div className={ProTaskerCSS.projectText}>3</div>
          </div>
        )}
        {/* {slide === 4 && (
          <div className={ProTaskerCSS.projectDescription}>
            <div className={ProTaskerCSS.projectText}>4</div>
          </div>
        )} */}
        <div className={ProTaskerCSS.arrowContainer}>
          <button
            className={ProTaskerCSS.prevArrow}
            onClick={() => handleSlide("-")}
          >
            <MdNavigateBefore />
          </button>
          <button
            className={ProTaskerCSS.nextArrow}
            onClick={() => handleSlide("+")}
          >
            <MdNavigateNext />
          </button>
        </div>
        <div className={ProTaskerCSS.dotsContainer}>
          <div
            className={slide === 1 ? ProTaskerCSS.dotActive : ProTaskerCSS.dot}
            onClick={() => {
              setSlide(1);
            }}
          />
          <div
            className={slide === 2 ? ProTaskerCSS.dotActive : ProTaskerCSS.dot}
            onClick={() => {
              setSlide(2);
            }}
          />
        </div>
      </div>
      <div className={ProTaskerCSS.projectTitleContainer}>
        <div className={ProTaskerCSS.projectTitle}>ProTasker</div>
      </div>
    </div>
  );
};

export default ProTasker;
