import React from 'react';
import SkillTag from './SkillTag';

const SkillGroup = ({ category, skills }) => (
  <div>
    <h3 className="text-lg font-medium text-blue-600 mb-3">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillTag key={index}>{skill}</SkillTag>
      ))}
    </div>
  </div>
);

export default SkillGroup;