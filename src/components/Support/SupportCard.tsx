import React from 'react';

interface SupportCardProps {
  icon: React.ReactNode;
  email: string;
  isDark?: boolean;
}

export const SupportCard: React.FC<SupportCardProps> = ({ icon, email, isDark = false }) => {
  return (
    <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <p className="text-sm mb-2">{email}</p>
      <p className="text-sm mb-4">Get Support</p>
      <button 
        className={`px-4 py-2 rounded-full text-sm transition-colors ${
          isDark 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-blue-50 text-blue-500 hover:bg-blue-100'
        }`}
      >
        Submit Request
      </button>
    </div>
  );
};