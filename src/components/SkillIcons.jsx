import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const iconStyle = "text-4xl md:text-5xl mx-4 md:mx-8";
const SkillIcons = () => {
  return (
    <div className="skills mt-16 md:mx-20 overflow-hidden px-2 md:px-10">
      <div className="skillicons flex items-center animate-slide">
        <FontAwesomeIcon className={iconStyle} icon={faHtml5} />
        <FontAwesomeIcon className={iconStyle} icon={faCss} />
        <FontAwesomeIcon className={iconStyle} icon={faJs} />
        <FontAwesomeIcon className={iconStyle} icon={faReact} />
        <FontAwesomeIcon className={iconStyle} icon={faNode} />
        <SiMongodb className={iconStyle} />
        <SiExpress className={iconStyle} />
        <SiTailwindcss className={iconStyle} />
      </div>
    </div>
  );
};

export default SkillIcons;
