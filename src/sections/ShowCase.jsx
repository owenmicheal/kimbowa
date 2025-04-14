import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const sectionReferance = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionReferance.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <section ref={sectionReferance} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LeftSide */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ask-Dev" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides made simple with a Powerfull User-Friendly App
                Called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                A Web App built in react, material-Ui and React-Router Dom
              </p>
            </div>
          </div>

          {/* RightSide */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="UgImdb" />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefeb]">
                <img src="/images/project3.png" alt="Najji Shoe" />
              </div>
              <h2>NAjjishoe - Shoe selling Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
