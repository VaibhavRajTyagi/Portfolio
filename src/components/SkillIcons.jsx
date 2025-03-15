import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const iconStyle = "min-w-12 min-h-12 mx-4 md:mx-8";

const SkillIcons = () => {
  return (
    <div className="skills mt-16 mx-auto overflow-hidden relative w-full whitespace-nowrap">
      <div className="skillicons flex">
        <FontAwesomeIcon className={iconStyle} icon={faHtml5} />
        <FontAwesomeIcon className={iconStyle} icon={faCss} />
        <FontAwesomeIcon className={iconStyle} icon={faJs} />
        <FontAwesomeIcon className={iconStyle} icon={faReact} />
        <FontAwesomeIcon className={iconStyle} icon={faNode} />
        <SiMongodb className={iconStyle} />
        <SiExpress className={iconStyle} />
        <SiTailwindcss className={iconStyle} />
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
