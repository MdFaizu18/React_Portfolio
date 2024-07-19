import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faReact } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import CloudIcon from '@mui/icons-material/Cloud';
// import { faRedux } from '@fortawesome/free-brands-svg-icons';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-1">
          <a className="bannerIcon" target="_blank" href='https://www.instagram.com/faizu_the_fire/'>
            <InstagramIcon />
            </a>
          <a className="bannerIcon" href='tel:+919345266656'>
              <WhatsAppIcon />
            </a>
          <a className="bannerIcon" target='_blank' href='https://www.linkedin.com/in/mohammed-faizulla-34124a24a/'>
              <FaLinkedinIn />
            </a>
          <a className="bannerIcon" target="_blank" href='https://github.com/MdFaizu18'>
            <GitHubIcon />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-2">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <FontAwesomeIcon icon={faJs} /> 
            </span>
            <span className="bannerIcon">
            <CloudIcon />
            </span>
            <span className="bannerIcon" style={{fontSize:'24px'}}>
            <FontAwesomeIcon icon={faDatabase} /> 
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media