import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <PhoneIcon className="w-5 h-5 text-blue-600 mr-2" />
          <span>+974 5089 9402</span>
        </div>
        <div className="flex items-center">
          <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-2" />
          <a href="mailto:mohamedmazoomy118@gmail.com" className="text-blue-600 hover:underline">
            mohamedmazoomy118@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="w-5 h-5 text-blue-600 mr-2" />
          <span>AL UMMA STREET, AL SADD, DOHA, QATAR</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;