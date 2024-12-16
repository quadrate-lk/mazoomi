import React from 'react';

const Section = ({ title, children, className = '' }) => {
  return (
    <section className={`bg-white shadow-md rounded-lg p-6 mb-8 ${className}`}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;