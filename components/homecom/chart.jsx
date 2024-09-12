import * as React from "react";
import { LineChart } from "@mui/x-charts";

export default function LineGraph() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 3, 6, 3.5, 10, 4, 6, 0],
        },
      ]}
      width={1000}
      height={300}
    />
  );
}
