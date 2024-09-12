import * as React from "react";
import { PieChart } from "@mui/x-charts";

const PieCharts = () => {
  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={450}
        height={324}
      />
    </>
  );
};

export default PieCharts;
