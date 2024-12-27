import React from 'react';
import { SupportCard } from './SupportCard';
import { PhoneIcon, LocationIcon, EmailIcon } from './SupportIcons';

export const SupportSection = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            We help small businesses with big ideas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SupportCard
            icon={<PhoneIcon />}
            email="georgia.young@example.com"
          />
          <SupportCard
            icon={<LocationIcon />}
            email="georgia.young@example.com"
            isDark
          />
          <SupportCard
            icon={<EmailIcon />}
            email="georgia.young@example.com"
          />
        </div>
      </div>
    </div>
  );
};