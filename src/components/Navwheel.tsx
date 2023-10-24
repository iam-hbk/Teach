import { WheelData } from "@/utils/data";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface WheelProps {
  data: WheelData;
}
const NavWheel = ({ data }: WheelProps) => {
  const segmentDegree = 360 / data.length;
  const renderSegments = () => {
    return data.map((segment, idx) => (
      <Segment
        key={idx}
        degree={idx * segmentDegree}
        color={segment.color}
        link={segment.link}
      />
    ));
  };
  return (
    <div className="relative w-[600px] h-[600px] bg-gray-100 rounded-full">
      {/* Center */}
      <div className="w-52 h-52 bg-white border rounded-full flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-2xl font-bold">T.E.A.C.H.</div>
        <div className="text-lg">Academic</div>
        <div className="text-lg">Competencies</div>
        <div className="text-lg">Model</div>
      </div>

      {/* Segments */}
      {renderSegments()}
    </div>
  );
};

export default NavWheel;

interface SegmentProps {
  degree: number;
  color: string;
  link: string;
}

const Segment: React.FC<SegmentProps & PropsWithChildren> = ({
  degree,
  color,
  link,
  children,
}) => {
  return (
    <Link
      href={link}
      style={{
        width: 250,
        height: 50,
        position: "absolute",
        bottom: 0,
        left: 0,
        background: color,
        transformOrigin: "50% 100%",
        transform: `rotate(${degree}deg)`,
        clipPath: `path('M 50 50 L 100 50 A 50 50 0 0 0 0 50 L 50 50')`,
      }}
    >
      {children}
    </Link>
  );
};
