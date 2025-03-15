import { GraduationCap } from "lucide-react";
import PropTypes from "prop-types";
import SkillIcons from "./SkillIcons";

const Education = [
  {
    year: "2022-2024",
    degree: "Master Of Computer Application",
    institution: "College Of Engineering, Roorkee",
    score: "Score: 6.8/10",
  },
  {
    year: "2019-2022",
    degree: "Bachelor of Computer Application",
    institution: "INMANTEC Institutions, Ghaziabad",
    score: "Score: 6.8/10",
  },
  {
    year: "2018-2019",
    degree: "Higher Secondary Education",
    institution: "Kendriya Vidyalaya No.2, Roorkee",
    score: "Score: 88%",
  },
  {
    year: "2015-2016",
    degree: "Secondary Education",
    institution: "Kendriya Vidyalaya No.2, Roorkee",
    score: "Score: 8.2/10",
  },
];

const EducationCard = ({ year, degree, institution, score }) => {
  return (
    <div className="edu-div relative px-4 py-3 -mx-4 md:mr-10 rounded-xl transition-colors duration-300 hover:bg-white/[0.02]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 md:gap-3">
            <h3 className="text-sm md:text-base font-medium font-geist text-blue-500 dark:text-white/90">
              {degree}
            </h3>
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-900 px-2 py-0.5 text-xs md:text-sm font-medium dark:text-white/70 font-playfair">
              {score}
            </span>
          </div>
          <p className="text-sm md:text-base font-playfair dark:text-white/50">
            {institution}
          </p>
        </div>
        <p className="text-sm md:text-base font-medium dark:text-white/40 font-playfair">
          {year}
        </p>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  year: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

function EducationTimeline() {
  return (
    <>
      <div className="education flex justify-center items-center text-center">
        <GraduationCap className="h-6 w-6 text-gray-400 mr-2" />
        <h1 className="font-oswald text-xl text-center">Education</h1>
      </div>
      <div className="details w-full">
        <div className="verticalpadding mt-8 mx-5 sm:mx-10 md:mx-56">
          {Education.map((edu, index) => {
            return <EducationCard key={index} {...edu} />;
          })}
          <SkillIcons />
        </div>
      </div>
    </>
  );
}

export default EducationTimeline;
