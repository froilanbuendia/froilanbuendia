"use client";
import ProjectsCSS from "./projects.module.css";
import NillysLogo from "../../assets/images/Nillys.png";
import Target from "../../assets/images/target.png";
import Timer from "../../assets/images/timer.png";
import Database from "../../assets/images/database.webp";
import SortRacer from "../../assets/images/prog5.png";
import MisspelledWords from "../../assets/images/prog6.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="projects" className={ProjectsCSS.projectsContainer}>
      <div className={ProjectsCSS.projectsTitle}>My Projects</div>
      <div className={ProjectsCSS.projectsWrapper}>
        <div data-aos="fade-up" className={ProjectsCSS.box}>
          <div className={ProjectsCSS.project}>
            <img src={NillysLogo.src} alt="" className={ProjectsCSS.img} />

            <div className={ProjectsCSS.projectDescription}>
              Contributued to the development of the official website for
              Nilly's Burger Shop in Artesia, CA
            </div>
            <a
              href="https://www.nillysburgershop.com/"
              className={ProjectsCSS.nillysBtn}
            >
              <div className={ProjectsCSS.btn}> Nilly's Burger Shop</div>
              <div className={ProjectsCSS.scrollerContainer}>
                <div className={ProjectsCSS.scroller}>
                  <div className={ProjectsCSS.scroller__inner}>
                    <div className={ProjectsCSS.skills}>TypeScript</div>
                    <div className={ProjectsCSS.skills}>React</div>
                    <div className={ProjectsCSS.skills}>Google Maps API</div>
                    <div className={ProjectsCSS.skills}>Netlify</div>
                    <div className={ProjectsCSS.skills}>Git</div>
                    <div className={ProjectsCSS.skills}>TypeScript</div>
                    <div className={ProjectsCSS.skills}>React</div>
                    <div className={ProjectsCSS.skills}>Google Maps API</div>
                    <div className={ProjectsCSS.skills}>Netlify</div>
                    <div className={ProjectsCSS.skills}>Git</div>
                    <div className={ProjectsCSS.skills}>TypeScript</div>
                    <div className={ProjectsCSS.skills}>React</div>
                    <div className={ProjectsCSS.skills}>Google Maps API</div>
                    <div className={ProjectsCSS.skills}>Netlify</div>
                    <div className={ProjectsCSS.skills}>Git</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className={ProjectsCSS.box}>
          <div className={ProjectsCSS.project}>
            <img src={Target.src} alt="" className={ProjectsCSS.img} />
            <div className={ProjectsCSS.projectDescription}>
              Designed and develped a full-Stack Application where users can
              practice their aim for FPS games.
            </div>
            <a
              href="https://github.com/froilanbuendia/aim-trainer"
              className={ProjectsCSS.aimtrainerBtn}
            >
              <div className={ProjectsCSS.btn}> Aim Trainer</div>
              <div className={ProjectsCSS.scrollerContainer}>
                <div className={ProjectsCSS.scroller}>
                  <div className={ProjectsCSS.scroller__inner}>
                    <div className={ProjectsCSS.skillsAim}>Javascript</div>
                    <div className={ProjectsCSS.skillsAim}>React</div>
                    <div className={ProjectsCSS.skillsAim}>Vite</div>
                    <div className={ProjectsCSS.skillsAim}>Firebase</div>
                    <div className={ProjectsCSS.skillsAim}>Docker</div>
                    <div className={ProjectsCSS.skillsAim}>Git</div>
                    <div className={ProjectsCSS.skillsAim}>Express.js</div>
                    <div className={ProjectsCSS.skillsAim}>Node.js</div>
                    <div className={ProjectsCSS.skillsAim}>CI/CD Pipeline</div>
                    <div className={ProjectsCSS.skillsAim}>Javascript</div>
                    <div className={ProjectsCSS.skillsAim}>React</div>
                    <div className={ProjectsCSS.skillsAim}>Vite</div>
                    <div className={ProjectsCSS.skillsAim}>Firebase</div>
                    <div className={ProjectsCSS.skillsAim}>Docker</div>
                    <div className={ProjectsCSS.skillsAim}>Git</div>
                    <div className={ProjectsCSS.skillsAim}>Express.js</div>
                    <div className={ProjectsCSS.skillsAim}>Node.js</div>
                    <div className={ProjectsCSS.skillsAim}>CI/CD Pipeline</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className={ProjectsCSS.box}>
          <div className={ProjectsCSS.project}>
            <img src={Timer.src} alt="" className={ProjectsCSS.img} />

            <div className={ProjectsCSS.projectDescription}>
              A Google Chrome Extension that tracks user’s time and blocks
              websites to improve productivity.
            </div>
            <a
              href="https://github.com/JHowellLB/ProTasker"
              className={ProjectsCSS.protaskerBtn}
            >
              <div className={ProjectsCSS.btn}> ProTasker</div>
              <div className={ProjectsCSS.scrollerContainer}>
                <div className={ProjectsCSS.scroller}>
                  <div className={ProjectsCSS.scroller__inner}>
                    <div className={ProjectsCSS.skillsProtasker}>
                      Typescript
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>React</div>
                    <div className={ProjectsCSS.skillsProtasker}>Next.js</div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      Express.js
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>Node.js</div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      CI/CD Pipeline
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      Typescript
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>React</div>
                    <div className={ProjectsCSS.skillsProtasker}>Next.js</div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      Express.js
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>Node.js</div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      CI/CD Pipeline
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      Typescript
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>React</div>
                    <div className={ProjectsCSS.skillsProtasker}>Next.js</div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      Express.js
                    </div>
                    <div className={ProjectsCSS.skillsProtasker}>Node.js</div>
                    <div className={ProjectsCSS.skillsProtasker}>
                      CI/CD Pipeline
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className={ProjectsCSS.box}>
          <div className={ProjectsCSS.project}>
            <img src={Database.src} alt="" className={ProjectsCSS.img} />
            <div className={ProjectsCSS.projectDescription}>
              Designed and developed a full-stack application to help organize
              payments for tenants.
            </div>
            <a
              href="https://github.com/fmartinezj/Apartment_Management"
              className={ProjectsCSS.apartmentBtn}
            >
              <div className={ProjectsCSS.btn}> Apartment Manager</div>
              <div className={ProjectsCSS.scrollerContainer}>
                <div className={ProjectsCSS.scroller}>
                  <div className={ProjectsCSS.scroller__inner}>
                    <div className={ProjectsCSS.skillsApartment}>
                      Javascript
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>React</div>
                    <div className={ProjectsCSS.skillsApartment}>Node.js</div>
                    <div className={ProjectsCSS.skillsApartment}>
                      Express.js
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>
                      PostgreSQL
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>Django</div>
                    <div className={ProjectsCSS.skillsApartment}>
                      Javascript
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>React</div>
                    <div className={ProjectsCSS.skillsApartment}>Node.js</div>
                    <div className={ProjectsCSS.skillsApartment}>
                      Express.js
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>
                      PostgreSQL
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>Django</div>
                    <div className={ProjectsCSS.skillsApartment}>
                      Javascript
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>React</div>
                    <div className={ProjectsCSS.skillsApartment}>Node.js</div>
                    <div className={ProjectsCSS.skillsApartment}>
                      Express.js
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>
                      PostgreSQL
                    </div>
                    <div className={ProjectsCSS.skillsApartment}>Django</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className={ProjectsCSS.box}>
          <div className={ProjectsCSS.project}>
            <img src={SortRacer.src} alt="" className={ProjectsCSS.img} />
            <div className={ProjectsCSS.projectDescription}>
              Implemented many sorting algorithms with threads in C++ to compare
              and contrast runtimes to non-thread implementations
            </div>
            <a
              href="https://github.com/froilanbuendia/CECS_325/tree/master/prog_5"
              className={ProjectsCSS.sortracerBtn}
            >
              <div className={ProjectsCSS.btn}>Sort Racer with Linux</div>
              <div className={ProjectsCSS.scrollerContainer}>
                <div className={ProjectsCSS.scroller}>
                  <div className={ProjectsCSS.scroller__inner}>
                    <div className={ProjectsCSS.skillsC}>C++</div>
                    <div className={ProjectsCSS.skillsC}>Linux</div>
                    <div className={ProjectsCSS.skillsC}>Multithreads</div>
                    <div className={ProjectsCSS.skillsC}>Bash</div>
                    <div className={ProjectsCSS.skillsC}>Algorithms</div>
                    <div className={ProjectsCSS.skillsC}>Git</div>
                    <div className={ProjectsCSS.skillsC}>C++</div>
                    <div className={ProjectsCSS.skillsC}>Linux</div>
                    <div className={ProjectsCSS.skillsC}>Multithreads</div>
                    <div className={ProjectsCSS.skillsC}>Bash</div>
                    <div className={ProjectsCSS.skillsC}>Algorithms</div>
                    <div className={ProjectsCSS.skillsC}>Git</div>
                    <div className={ProjectsCSS.skillsC}>C++</div>
                    <div className={ProjectsCSS.skillsC}>Linux</div>
                    <div className={ProjectsCSS.skillsC}>Multithreads</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className={ProjectsCSS.box}>
          <div className={ProjectsCSS.project}>
            <img src={MisspelledWords.src} alt="" className={ProjectsCSS.img} />
            <div className={ProjectsCSS.projectDescription}>
              Introduction to regular expressions to find all misspelled words
              and their frequency with a provided book and word definition.
            </div>
            <a
              href="https://github.com/froilanbuendia/CECS_325/tree/master/prog_6"
              className={ProjectsCSS.misspelledwordsBtn}
            >
              <div className={ProjectsCSS.btn}>Misspelled Words</div>
              <div className={ProjectsCSS.scrollerContainer}>
                <div className={ProjectsCSS.scroller}>
                  <div className={ProjectsCSS.scroller__inner}>
                    <div className={ProjectsCSS.skillsC}>C++</div>
                    <div className={ProjectsCSS.skillsC}>Linux</div>
                    <div className={ProjectsCSS.skillsC}>Bash</div>
                    <div className={ProjectsCSS.skillsC}>
                      Regular Expressions
                    </div>
                    <div className={ProjectsCSS.skillsC}>Git</div>
                    <div className={ProjectsCSS.skillsC}>C++</div>
                    <div className={ProjectsCSS.skillsC}>Linux</div>
                    <div className={ProjectsCSS.skillsC}>Bash</div>
                    <div className={ProjectsCSS.skillsC}>
                      Regular Expressions
                    </div>
                    <div className={ProjectsCSS.skillsC}>Git</div>
                    <div className={ProjectsCSS.skillsC}>C++</div>
                    <div className={ProjectsCSS.skillsC}>Linux</div>
                    <div className={ProjectsCSS.skillsC}>Bash</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
