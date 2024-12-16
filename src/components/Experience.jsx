import React from 'react';
import Section from './common/Section';

const Experience = () => {
  const responsibilities = [
    "Managed banking operations, including cheque deposits, withdrawals, and various financial transactions",
    "Coordinated secure delivery of documents between business partners and clients (B2B and B2C)",
    "Optimized inter-departmental communication",
    "Provided administrative support, including filing and data entry",
    "Assisted in meeting preparations and reception duties",
    "Managed sensitive documents and maintained filing systems",
    "Ensured smooth office operations"
  ];

  return (
    <Section title="Professional Experience">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-blue-600">
          Office Assistant & Administrative Support
        </h3>
        <p className="text-gray-600">ABDULLAH BIN KHALIFA AL THANI, Qatar</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {responsibilities.map((item, index) => (
          <li key={index} className="ml-4">{item}</li>
        ))}
      </ul>
    </Section>
  );
};

export default Experience;