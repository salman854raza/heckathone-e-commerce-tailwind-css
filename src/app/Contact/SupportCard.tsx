import React from "react";

interface SupportCardProps {
  icon: React.ReactNode;
  email: string;
  isDark?: boolean;
  title: string;
  buttonLabel: string;
  isViewMap?: boolean;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  email,
  isDark = false,
  title,
  buttonLabel,
  isViewMap = false,
}) => {
  return (
    <div
      className={`py-16 px-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105 ${
        isDark ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      {/* Enlarged Icon */}
      <div className="flex justify-center mb-6 text-8xl text-blue-500">{icon}</div>

      {/* Email/Address */}
      <p
        className={`text-lg font-medium mb-2 ${
          isViewMap ? "whitespace-pre-line" : ""
        }`}
      >
        {isViewMap ? "123 Main Street,\nLA California, USA" : email}
      </p>

      <p className="text-sm text-gray-500 mb-6">
        Reach out for quick support or assistance.
      </p>

      {/* Dynamic Title */}
      <h1 className="text-xl font-bold py-8">{title}</h1>

      {/* Button */}
      <button
        className={`px-6 py-3 border-2 rounded-full text-sm font-semibold transition-colors ${
          isViewMap
            ? "border-blue-500 text-blue-500 hover:bg-green-500 hover:text-white"
            : "bg-blue-50 text-blue-500 hover:bg-green-500 hover:text-white"
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
