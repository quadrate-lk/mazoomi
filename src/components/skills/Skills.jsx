import React from 'react';
import Section from '../common/Section';
import SkillGroup from './SkillGroup';
import { skillsList } from './skillsData';

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsList.map((skillGroup, index) => (
          <SkillGroup
            key={index}
            category={skillGroup.category}
            skills={skillGroup.skills}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;