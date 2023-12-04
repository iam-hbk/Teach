
// Wheel.tsx
import React from 'react';
import data from '@/utils/data';
import WheelSegment from '@/components/w-segment';

const Wheel: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {data.map((segment, index) => (
        <WheelSegment key={segment.title} segment={segment} segmentIndex={index} />
      ))}
    </div>
  );
};

export default Wheel;
