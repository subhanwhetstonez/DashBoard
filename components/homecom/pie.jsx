import * as React from "react";
import { PieChart } from "@mui/x-charts";
import { Box } from "@mui/material";

const PieCharts = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "HTML" },
            { id: 1, value: 15, label: "CSS" },
            { id: 2, value: 20, label: "JS" },
          ],
        },
      ]}
      width={"400"}
      height={336}
    />
  );
};

export default PieCharts;
