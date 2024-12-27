import React from "react";
import { SupportCard } from "./SupportCard";
import { PhoneIcon, LocationIcon, EmailIcon } from "./SupportIcons";

export const SupportSection = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
        <h3 className="text-[#252B42] font-bold text-[14px] mb-4">
          VISIT OUR OFFICE
        </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            We help small businesses with big ideas
          </h2>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <SupportCard
            icon={<PhoneIcon />}
            email="georgia.young@example.com"
            title="Contact Us"
            buttonLabel="Submit Request"
          />
          <SupportCard
            icon={<LocationIcon />}
            email="123 Main Street, LA California, USA"
            title="Find Us"
            buttonLabel="View Map"
            isDark
            isViewMap
          />
          <SupportCard
            icon={<EmailIcon />}
            email="support@example.com"
            title="Email Us"
            buttonLabel="Send Email"
          />
        </div>
      </div>
    </div>
  );
};
