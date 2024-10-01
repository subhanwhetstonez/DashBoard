"use client";
import { useEffect } from "react";
import Cards from "@/components/card";
import { Box, Paper } from "@mui/material";
import React from "react";
import BasicTable4 from "@/components/maintable";
import AboveTable from "@/components/abovetable";
import AutoHeightGrid from "@/components/maintable";

const page = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("key");
      setValue(storedValue);
    }
  }, []);
  
  return (
    <>
      <Box
        sx={{
          mt: 16,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          width: "84%",
          gap: 2,
          mb: 6,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box item width={"33%"}>
            <Cards
              title="Total Rooms"
              numbered="26"
              desnumber="21"
              sharenumber="5"
            />
          </Box>
          <Box item width={"33%"}>
            <Cards
              title="Classrooms"
              numbered="21"
              desnumber="21"
              sharenumber="0"
            />
          </Box>
          <Box item width={"33%"}>
            <Cards
              title="Facilities"
              numbered="5"
              desnumber="0"
              sharenumber="5"
            />
          </Box>
        </Box>
        <Paper>
          <Box item sx={{ p: 3 }}>
            <AboveTable />
            <AutoHeightGrid />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default page;
