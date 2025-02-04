import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TimelineNode = ({ year, degree, institution, score, last }) => (
    <div className="flex flex-col items-center">
        <div className="w-80 bg-white dark:bg-black dark:border-gray-400 dark:hover:border-white rounded-lg shadow-lg p-4 border border-blue-200 hover:border-blue-400 transition-all duration-300">
            <div className="text-sm text-blue-500 font-semibold">{year}</div>
            <h3 className="text-xl text-black dark:text-white font-bold mt-2">{degree}</h3>
            <div className="text-gray-400 mt-1">{institution}</div>
            <div className="mt-2 rounded-md p-2 text-black dark:text-white">
                <span className="font-semibold">Score:</span> {score}
            </div>
        </div>

        {!last && (
            <div className="flex flex-col items-center my-4">
                <div className="h-8 w-px bg-black dark:bg-white" />
                <FontAwesomeIcon icon={faAngleDown} className='text-black dark:text-white' />
                <div className="h-8 w-px bg-black dark:bg-white" />
            </div>
        )}
    </div>
);

const EducationTimeline = () => {
    const education = [
        {
            year: "2022-2024",
            degree: "Master Of Computer Application",
            institution: "College Of Engineering, Roorkee",
            score: "CGPA: 6.8/10",
        },
        {
            year: "2019-2022",
            degree: "Bachelor of Computer Application",
            institution: "INMANTEC Institutions, Ghaziabad",
            score: "CGPA: 6.8/10",
        },
        {
            year: "2018-2019",
            degree: "Higher Secondary Education",
            institution: "Kendriya Vidyalaya No.2, Roorkee",
            score: "88%",
        },
        {
            year: "2015-2016",
            degree: "Secondary Education",
            institution: "Kendriya Vidyalaya No.2, Roorkee",
            score: "CGPA: 8.2/10",
        }
    ];

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-400">Educational Journey</h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <TimelineNode
                        key={index}
                        {...edu}
                        last={index === education.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;