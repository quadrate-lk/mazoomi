import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { usePrintContext } from './print/PrintProvider';

const Header = () => {
  const { handlePdfDownload } = usePrintContext();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 print:bg-white print:text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <img
            src="https://ik.imagekit.io/mhvgbp9xk/screenshots/mazoomi%20photo.png?updatedAt=1734350105154"
            alt="Mohamed Baseer"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 md:mb-0"
          />
          <div className="md:ml-4 text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold">MOHAMED MAZOOMY M BASEER</h1>
            <p className="text-blue-200 print:text-blue-600">Office Assistant & Administrative Support</p>
          </div>
        </div>
        <button
          onClick={handlePdfDownload}
          className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center hover:bg-blue-50 transition-colors print:hidden"
          aria-label="Download Resume"
        >
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Download Resume
        </button>
      </div>
    </header>
  );
};

export default Header;