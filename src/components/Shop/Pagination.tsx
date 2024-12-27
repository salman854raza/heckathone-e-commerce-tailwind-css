import React from 'react';

export const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center gap-2">
      <PaginationButton label="First" />
      <PaginationButton label="1" isActive />
      <PaginationButton label="2" />
      <PaginationButton label="3" />
      <PaginationButton label="Next" />
    </div>
  );
};

interface PaginationButtonProps {
  label: string;
  isActive?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ label, isActive }) => (
  <button
    className={`px-4 py-2 rounded ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {label}
  </button>
);