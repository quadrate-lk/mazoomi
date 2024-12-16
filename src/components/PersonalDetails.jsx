import React from 'react';
import Section from './common/Section';

const PersonalDetails = () => {
  const details = [
    { label: "Civil Status", value: "Married" },
    { label: "Date of Birth", value: "10.08.1977" },
    { label: "Passport No.", value: "N9427327" },
    { label: "National Identity No.", value: "772231997V" }
  ];

  return (
    <Section title="Personal Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-gray-600">{detail.label}</span>
            <span className="font-medium">{detail.value}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PersonalDetails;