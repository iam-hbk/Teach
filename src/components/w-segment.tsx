// WheelSegment.tsx
import data,{ TWheelSegment } from '@/utils/data'; 

interface WheelSegmentProps {
  segment: TWheelSegment;
  segmentIndex: number; // To calculate the rotation
}

const WheelSegment: React.FC<WheelSegmentProps> = ({ segment, segmentIndex }) => {
  // Calculating rotation for each segment
  const rotateDegree = segmentIndex * (360 / data.length);
  
  return (
    <div
      className={`absolute h-full w-full flex justify-center items-center`}
      style={{
        transform: `rotate(${rotateDegree}deg)`,
        backgroundColor: segment.color,
      }}
    >
      {/* This is the clickable area for the main segment */}
      <a
        href={segment.link}
        className="z-10"
        style={{
          transform: `rotate(-${rotateDegree}deg)`, // Counter rotate the text
        }}
      >
        {segment.title}
      </a>

      {/* Sub-segments */}
      {segment.subSegments.map((subSegment, index) => (
        <div
          key={subSegment.title}
          className={`absolute h-full w-full flex justify-center items-center`}
          style={{
            transform: `rotate(${index * (360 / segment.subSegments.length)}deg)`,
            backgroundColor: subSegment.color,
          }}
        >
          <a
            href={subSegment.link}
            className="z-10"
            style={{
              transform: `rotate(-${index * (360 / segment.subSegments.length)}deg)`, // Counter rotate the text
            }}
          >
            {subSegment.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default WheelSegment;