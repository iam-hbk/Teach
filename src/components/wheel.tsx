"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import segments, { WheelSegment, WheelSubSegment } from "@/utils/data";
import { useCallback } from "react";
import {
  Wheel,
  SVG,
  SubSegmentPath,
  SegmentPath,
  SegmentText,
} from "./wheel_parts";
import {
  createArcPath,
  createTextArcPath,
  getFontSize,
  splitTextIntoLines,
  polarToCartesian,
} from "./wheel_utils";

const NavigationWheel = () => {
  // Create a router instance
  const router = useRouter();
  // Calculate the angles for segments and subsegments
  const segmentCount = useMemo(() => segments.length, []);
  const segmentAngle = useMemo(() => 360 / segmentCount, [segmentCount]);

  // Define radius values for segments and sub-segments
  const segmentInnerRadius = 100;
  const segmentOuterRadius = 145;
  const subSegmentInnerRadius = 145;
  const subSegmentOuterRadius = 290;

  const segmentTextRadius = useMemo(
    () => (segmentInnerRadius + segmentOuterRadius) / 2,
    [],
  );

  const subSegmentTextRadius = useMemo(
    () => (subSegmentInnerRadius + subSegmentOuterRadius) / 2,
    [],
  );
  // Calculate the total text length for each segment
  const getTotalTextLength = useCallback((segment: WheelSegment) => {
    return segment.subSegments.reduce(
      (totalLength, subSegment) => totalLength + subSegment.title.length,
      0,
    );
  }, []);

  // Calculate the subsegment angle for each subsegment proportionally to their text length
  const getSubSegmentAngle = useCallback(
    (segment: WheelSegment, subSegment: WheelSubSegment) => {
      const totalTextLength = getTotalTextLength(segment);
      return (subSegment.title.length / totalTextLength) * segmentAngle;
    },
    [segmentAngle, getTotalTextLength],
  );

  // Function to handle click event and navigate to the given URL
  const handleClick = (url: string) => router.push(url);

  // Create a state variable to store the hovered subsegment
  const [hoveredSubSegment, setHoveredSubSegment] = useState<any>(undefined);

  // Define mouse enter and leave event handlers for subsegments
  const handleMouseEnter = useCallback(
    (segmentIndex: number, subSegmentIndex: number) => {
      setHoveredSubSegment({ segmentIndex, subSegmentIndex });
    },
    [],
  );
  const handleMouseLeave = useCallback(() => {
    setHoveredSubSegment(null);
  }, []);
  // Function to calculate the new radius values for sub-segments when hovered
  const getHoveredRadiusValues = (isHovered: any) => {
    const hoverScale = 1.1; // Change this value to adjust the hover effect size
    return {
      innerRadius: isHovered
        ? subSegmentInnerRadius * hoverScale
        : subSegmentInnerRadius,
      outerRadius: isHovered
        ? subSegmentOuterRadius * hoverScale
        : subSegmentOuterRadius,
    };
  };
  // Add state for the hovered segment
  const [hoveredSegment, setHoveredSegment] = useState(null);

  // Define mouse enter and leave event handlers for segments
  const handleMainSegmentMouseEnter = useCallback((segmentIndex: any) => {
    setHoveredSegment(segmentIndex);
  }, []);

  const handleMainSegmentMouseLeave = useCallback(() => {
    setHoveredSegment(null);
  }, []);

  // Function to calculate the rotation center for text
  const calculateRotationCenter = (startAngle: number, endAngle: number) => {
    const midAngle = (startAngle + endAngle) / 2;
    return polarToCartesian(segmentTextRadius, midAngle);
  };

  // Render the navigation wheel component
  return (
    <Wheel>
      <SVG viewBox="0 0 600 600">
        {/* Draw the central circle with "TEACH" text */}
        <circle cx="300" cy="300" r="100" fill="white" />
        <text x="300" y="250" textAnchor="middle" dy=".3em" fontSize="24">
          {/* <Image
            src={'/images/teach_logo.svg'}
            alt="Teach Logo"
            width={100}
            height={100}
          /> */}
          TEACH
        </text>
        <text x="300" y="290" textAnchor="middle" dy=".2em" fontSize="20">
          Academic
        </text>
        <text x="300" y="310" textAnchor="middle" dy=".2em" fontSize="20">
          Competencies
        </text>
        <text x="300" y="330" textAnchor="middle" dy=".2em" fontSize="20">
          Model
        </text>
        {/* Loop through segments to create the outer layer */}
        {segments.map((segment, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          const isHovered = hoveredSegment === index;

          //rotation center for text
          const { x: rotationCenterX, y: rotationCenterY } =
            calculateRotationCenter(startAngle, endAngle);
          const shouldRotate = startAngle >= 144 && endAngle <= 216;
          //   console.log("[SEGMENT]:", segment.title, startAngle, endAngle);
          return (
            <g key={index}>
              {/* Draw each segment with its color and title */}
              <SegmentPath
                d={createArcPath(
                  segmentInnerRadius,
                  segmentOuterRadius,
                  startAngle,
                  endAngle,
                )}
                fill={isHovered ? segment.color : "white"}
                onClick={() => handleClick(segment.link)}
                onMouseEnter={() => handleMainSegmentMouseEnter(index)}
                onMouseLeave={handleMainSegmentMouseLeave}
                className={isHovered ? "hovered" : ""}
              />
              <path
                id={`textPath-${index}`}
                d={createTextArcPath(segmentTextRadius, startAngle, endAngle)}
                fill="none"
              />
              <SegmentText
                fontSize="16"
                fill={segment.color}
                onMouseEnter={() => handleMainSegmentMouseEnter(index)}
                onMouseLeave={handleMainSegmentMouseLeave}
              >
                <textPath
                  href={`#textPath-${index}`}
                  startOffset="50%"
                  textAnchor="middle"
                  transform={
                    // shouldRotate
                    `rotate(180, ${rotationCenterX}, ${rotationCenterY})`
                    //   : ""
                  }
                  onMouseEnter={() =>
                    console.log("[sssss]", startAngle, shouldRotate, endAngle)
                  }
                  onClick={() => handleClick(segment.link)}
                >
                  {segment.title}
                </textPath>
              </SegmentText>
              {/* Loop through subsegments to create the inner layer */}
              {segment.subSegments.map((subSegment, subIndex) => {
                const isHovered =
                  hoveredSubSegment &&
                  hoveredSubSegment.segmentIndex === index &&
                  hoveredSubSegment.subSegmentIndex === subIndex;

                const { innerRadius, outerRadius } =
                  getHoveredRadiusValues(isHovered);

                const subSegmentAngle = getSubSegmentAngle(segment, subSegment);
                const subStartAngle =
                  startAngle +
                  segment.subSegments
                    .slice(0, subIndex)
                    .reduce(
                      (accumulatedAngle, sub) =>
                        accumulatedAngle + getSubSegmentAngle(segment, sub),
                      0,
                    );
                const subEndAngle = subStartAngle + subSegmentAngle;

                const textPosition = polarToCartesian(
                  subSegmentTextRadius,
                  subStartAngle + subSegmentAngle / 2,
                );
                const lines = splitTextIntoLines(subSegment.title, 18); // Change the maximum length as needed

                const rotation = subStartAngle + subSegmentAngle / 2 - 90;
                const fontSize = getFontSize(subSegment.title.length);
                return (
                  <g key={subIndex}>
                    {/* Draw each subsegment with its title */}
                    <SubSegmentPath
                      d={createArcPath(
                        innerRadius,
                        outerRadius,
                        subStartAngle,
                        subEndAngle,
                      )}
                      fill={subSegment.color}
                      onClick={() => handleClick(subSegment.link)}
                      onMouseEnter={() => handleMouseEnter(index, subIndex)}
                      onMouseLeave={handleMouseLeave}
                    />
                    <text
                      x={textPosition.x}
                      y={textPosition.y}
                      textAnchor="middle"
                      dy=".3em"
                      fontSize={fontSize}
                      fill="white"
                      transform={`rotate(${rotation}, ${textPosition.x}, ${textPosition.y})`}
                      onClick={() => handleClick(subSegment.link)}
                      onMouseEnter={() => handleMouseEnter(index, subIndex)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* {subSegment.title} */}
                      {lines.map((line, lineIndex) => (
                        <tspan
                          key={lineIndex}
                          x={textPosition.x}
                          dy={lineIndex === 0 ? "0" : "1.2em"}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </SVG>
    </Wheel>
  );
};

export default NavigationWheel;
