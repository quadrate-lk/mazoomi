import React from 'react';
import SectionTitle from './SectionTitle';

const Section = ({ title, children, className = '' }) => {
  return (
    <section className={`bg-white shadow-md rounded-lg p-6 mb-8 ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};

export default Section;