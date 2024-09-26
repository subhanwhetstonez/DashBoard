import React from "react";
import { Card, Divider, Box } from "@mui/material";
import { AssignmentOutlined } from "@mui/icons-material";

const Cards = (props) => {
  const { title, numbered, desnumber, sharenumber } = props;
  return (
    <div>
      <Card sx={{ p: 2, borderRadius: 3 }}>
        <h4>{title}</h4>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", my: 1 }}>
          <AssignmentOutlined />
          <h3>{numbered}</h3>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <h4 style={{ fontSize: 15, color: "#787878" }}>{desnumber}</h4>
            <p style={{ fontSize: 14, color: "#787878" }}>Designated</p>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <h4 style={{ fontSize: 15, color: "#787878" }}>{sharenumber}</h4>
            <p style={{ fontSize: 14, color: "#787878" }}>Shared</p>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Cards;
