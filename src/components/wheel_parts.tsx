import styled from "@emotion/styled";

// Create styled components for container and SVG element
const Wheel = styled.div`
  width: 500px;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  overflow: hidden;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

// Create a styled component for subsegments
const SubSegmentPath = styled.path`
  transition:
    d 0.3s,
    fill 0.3s;
  &:hover {
    cursor: pointer;
    fill-opacity: 0.8;
  }
`;
// Create a styled component for segments
const SegmentPath = styled.path`
  transition:
    transform 0.3s,
    fill 0.3s;
  transform-origin: 300px 300px;

  &:hover,
  &.hovered {
    cursor: pointer;
    fill-opacity: 0.8;
    transform: scale(1.1);
  }
`;

// Create a new styled component for the segment text
const SegmentText = styled.text`
  transition: fill 0.3s;

  &:hover {
    cursor: pointer;
    fill: white;
  }
`;
export { Wheel, SVG, SubSegmentPath, SegmentPath, SegmentText };
