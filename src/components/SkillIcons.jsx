import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <FontAwesomeIcon className={iconStyle} icon={faHtml5} />
      <FontAwesomeIcon className={iconStyle} icon={faCss} />
      <FontAwesomeIcon className={iconStyle} icon={faJs} />
      <FontAwesomeIcon className={iconStyle} icon={faReact} />
      <FontAwesomeIcon className={iconStyle} icon={faNode} />
      <SiMongodb className={iconStyle} />
      <SiExpress className={iconStyle} />
      <SiTailwindcss className={iconStyle} />
    </>
  );
};

const iconStyle = "min-w-12 min-h-12 mx-4 md:mx-8";

const SkillIcons = () => {
  return (
    <div className="skills mt-16 mx-4 md:mx-auto overflow-hidden relative max-w-full">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/70 to-transparent dark:from-black dark:via-black/70 z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/70 to-transparent dark:from-black dark:via-black/70 z-10"></div>
      
      <div className="skillicons inline-flex">
        <Skills />
        <Skills />
      </div>
    </div>
  );
};

export default SkillIcons;
