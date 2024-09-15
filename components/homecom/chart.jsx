import * as React from "react";
import { LineChart } from "@mui/x-charts";
import { Box } from "@mui/material";

export default function LineGraph() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 3, 6, 3.5, 8.5, 4, 5, 0],
        },
      ]}
      width={"900"}
      height={312}
    />
  );
}
