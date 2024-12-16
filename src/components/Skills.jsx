import React from 'react';
import Section from './Section';

const Skills = () => {
  const skillsList = [
    {
      category: "Languages",
      skills: ["Arabic", "English", "Hindi", "Malayalam", "Tamil"]
    },
    {
      category: "Professional",
      skills: [
        "Administrative Support",
        "Office Management",
        "Leadership & Teamwork",
        "Time Management",
        "Banking Operations",
        "Negotiation",
        "Problem-Solving",
        "Strategic Planning",
        "Document & Data Analysis"
      ]
    }
  ];

  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsList.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium text-blue-600 mb-3">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;