// Helper function to convert polar coordinates to Cartesian coordinates
const polarToCartesian = (radius: number, angleInDegrees: number) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  const x = 300 + radius * Math.cos(angleInRadians);
  const y = 300 + radius * Math.sin(angleInRadians);

  return { x, y };
};
// Helper function to create a path for segments and subsegments
const createArcPath = (
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number,
) => {
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  const start = polarToCartesian(innerRadius, startAngle);
  const end = polarToCartesian(innerRadius, endAngle);
  const outerStart = polarToCartesian(outerRadius, startAngle);
  const outerEnd = polarToCartesian(outerRadius, endAngle);

  return `M ${start.x},${start.y} A ${innerRadius},${innerRadius} 0 ${largeArcFlag},1 ${end.x},${end.y} L ${outerEnd.x},${outerEnd.y} A ${outerRadius},${outerRadius} 0 ${largeArcFlag},0 ${outerStart.x},${outerStart.y} Z`;
};

// Helper function to calculate the font size for subsegment text based on its length
const getFontSize = (textLength: number) => {
  const maxLength = 20; // Adjust this value based on the maximum text length you expect
  const minFontSize = 8; // Minimum font size for the text
  const maxFontSize = 12; // Maximum font size for the text

  if (textLength <= maxLength) {
    return maxFontSize;
  }

  const fontSize =
    maxFontSize -
    ((textLength - maxLength) / maxLength) * (maxFontSize - minFontSize);
  return Math.max(fontSize, minFontSize);
};
// Helper function to create an arc path for segment text
const createTextArcPath = (
  radius: number,
  startAngle: number,
  endAngle: number,
) => {
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  const start = polarToCartesian(radius, startAngle);
  const end = polarToCartesian(radius, endAngle);

  return `M ${start.x},${start.y} A ${radius},${radius} 0 ${largeArcFlag},1 ${end.x},${end.y}`;
};

// Add a function to split text into multiple lines
const splitTextIntoLines = (text: string, maxLength: number) => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    if (currentLine.length + words[i].length + 1 <= maxLength) {
      currentLine += " " + words[i];
    } else {
      lines.push(currentLine);
      currentLine = words[i];
    }
  }

  lines.push(currentLine);
  return lines;
};

export {
  createArcPath,
  createTextArcPath,
  getFontSize,
  splitTextIntoLines,
  polarToCartesian,
};
