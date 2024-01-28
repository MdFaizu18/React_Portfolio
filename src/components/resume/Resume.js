import React, { useState, useEffect, useRef } from 'react';
import Title from '../layouts/Title';
import Skills from './Skills';

const Resume = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(true);
  const resumeRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold based on your needs
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && animateSkills) {
        setShowSkills(true);
        setAnimateSkills(false);
        observer.unobserve(resumeRef.current);
      }
    }, options);

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, [animateSkills]);

  return (
    <section
      id="resume"
      ref={resumeRef}
      className={`w-full py-20 border-b-[1px] border-b-black ${showSkills ? 'animate-skills' : ''
        }`}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Experience in more projects" des="My Skills" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {/* Your content */}
        </ul>
      </div>

      {showSkills && <Skills />}
    </section>
  );
};

export default Resume;
