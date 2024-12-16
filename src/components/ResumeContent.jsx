import React from 'react';
import { usePrintContext } from './print/PrintProvider';
import Header from './Header';
import ContactInfo from './ContactInfo';
import ProfileSummary from './ProfileSummary';
import Experience from './Experience';
import Skills from './skills/Skills';
import Education from './Education';
import PersonalDetails from './PersonalDetails';

const ResumeContent = () => {
  const { printRef } = usePrintContext();

  return (
    <div ref={printRef} className="print-content">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ContactInfo />
        <ProfileSummary />
        <Experience />
        <Skills />
        <Education />
        <PersonalDetails />
      </main>
    </div>
  );
};

export default ResumeContent;