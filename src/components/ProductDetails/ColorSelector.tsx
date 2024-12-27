import React, { useState } from 'react';

const colors = [
  { id: 'blue', value: '#3B82F6' },
  { id: 'green', value: '#10B981' },
  { id: 'orange', value: '#F97316' },
  { id: 'navy', value: '#1E293B' },
];

export const ColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-sm font-medium text-gray-900">Colors</span>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => setSelectedColor(color.id)}
            className={`w-8 h-8 rounded-full ${
              selectedColor === color.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
}