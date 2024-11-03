import React from 'react'
import Title from '../layouts/Title'
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import img01 from '../../assets/images/project01.png';
import img02 from '../../assets/images/project02.png';
import img03 from '../../assets/images/project03.png';
import img04 from '../../assets/images/project04.png';
// import img05 from '../../assets/images/project05.png';
import img05 from '../../assets/images/bikeservices.png'
import img06 from '../../assets/images/project06.png';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Bike Services App"
          des=" A bike services app streamlines the bike service process, providing users with curated listings, personalized recommendations, and efficient application management for bike services."
        
          src={img05}
          alt='https://github.com/MdFaizu18/BikeService'
          alt2='https://bike-services-5fd9.onrender.com/'
        />
        <ProjectsCard
          title="MIT CAMPUS VOICES"
          des=" A college feedback app allows students to provide insights on courses, instructors, and facilities, fostering continuous improvement and enhancing overall educational experiences."
          src={img02}
          alt='https://github.com/MdFaizu18/mern_campusvoices'
          alt2='https://campusvoices.vercel.app/'
        />
        <ProjectsCard
          title="Web Spyders Community"
          des="A community-driven platform built with React to provide information, resources, and support for web developers. It fosters collaboration and learning through forums, tutorials, and project showcases."
          src={img06}
          alt='https://github.com/MdFaizu18/webspyderscommunity'
          alt2='https://webspyderscommunity-xofl.onrender.com/'
        />

        <ProjectsCard
          title="SOCIAL MEDIA CLONE - (BUGGY)"
          des=" A social media clone app replicates popular platforms, fostering connection through user profiles, posts, likes, and comments, mimicking the original social experience."
          src={img04}
          alt='https://github.com/MdFaizu18/BuggyApp'
          alt2='https://buggy-app.onrender.com/'
        />
     
  
        <ProjectsCard 
        className='projectimg-one'
          title="JOB FETCHING APP"
          des=" A job-fetching app streamlines the job search process, providing users with curated listings, personalized recommendations, and efficient application management for employment opportunities."
          src={img01}
          alt='https://github.com/MdFaizu18/Jobify'
          alt2='https://jobify-5ur5.onrender.com/'
        />
        <ProjectsCard
          title="Apple ProductApp Demo"
          des=" A Bootstrap demo app showcases responsive and visually appealing web design using the Bootstrap framework, demonstrating its grid system, components, and styling features."
          src={img03}
          alt='https://github.com/MdFaizu18/Web_Spyders_App'
          alt2='https://mdfaizu18.github.io/Web_Spyders_App/'
        />
      

      </div>
    </section>
  );
}

export default Projects