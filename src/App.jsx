import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import ProfileSummary from './components/ProfileSummary';
import Experience from './components/Experience';
import Skills from './components/skills/Skills';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails';
import { PrintProvider } from './components/print/PrintProvider';
import ResumeContent from './components/ResumeContent';

function App() {
  return (
    <PrintProvider documentTitle="Mohamed_Baseer_Resume">
      <div className="min-h-screen bg-gray-100">
        <ResumeContent />
      </div>
    </PrintProvider>
  );
}

export default App;