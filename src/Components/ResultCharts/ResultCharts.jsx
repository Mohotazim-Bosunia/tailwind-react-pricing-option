import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
const resultData = [
  { id: 1, name: "Rahim", physics: 78, chemistry: 72, math: 85 },
  { id: 2, name: "Karim", physics: 88, chemistry: 81, math: 90 },
  { id: 3, name: "Ayesha", physics: 91, chemistry: 89, math: 95 },
  { id: 4, name: "Nusrat", physics: 67, chemistry: 70, math: 75 },
  { id: 5, name: "Tanvir", physics: 74, chemistry: 68, math: 80 },
  { id: 6, name: "Sadia", physics: 85, chemistry: 90, math: 88 },
  { id: 7, name: "Imran", physics: 60, chemistry: 65, math: 70 },
  { id: 8, name: "Mim", physics: 92, chemistry: 94, math: 96 },
  { id: 9, name: "Rafi", physics: 79, chemistry: 76, math: 82 },
  { id: 10, name: "Lamia", physics: 83, chemistry: 87, math: 89 },
];

const ResultCharts = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"math"}></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
        <Line dataKey={"physics"} stroke="black"></Line>
      </LineChart>
    </div>
  );
};

export default ResultCharts;
