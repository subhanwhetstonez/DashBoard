"use client";
import React from "react";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import {
  createTheme,
  CssBaseline,
  Grid,
  Grid2,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Home, Search, Segment } from "@mui/icons-material";
import LineGraph from "@/components/homecom/chart";
import PieCharts from "@/components/homecom/pie";

const NAVIGATION = [
  {
    kind: "header",
    title: "different Components",
  },
  {
    segment: "home",
    title: "Home",
    icon: <Home />,
  },
  {
    segment: "about",
    title: "About",
    icon: <Search />,
  },
];

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#616161",
    },
    secondary: {
      main: "#ff3d00",
    },
    text: {
      disabled: "#ff2d2d",
      hint: "rgba(18,158,255,0.61)",
      primary: "rgba(98,98,98,0.66)",
      secondary: "rgba(76,76,76,0.54)",
    },
    divider: "rgba(0,0,0,0.13)",
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

const page = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppProvider navigation={NAVIGATION} theme={theme}>
          <DashboardLayout>
            <Grid2 container spacing={2} sx={{ p: "12px" }}>
              <Grid2 size={8}>
                <Paper sx={{ p: "12px" }}>
                  <LineGraph />
                  <Typography textAlign={"center"}>
                    Progress of Project
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 size={3.8}>
                <Paper sx={{ p: "12px" }}>
                  <PieCharts />
                </Paper>
              </Grid2>
              <Grid2></Grid2>
              <Grid2></Grid2>
              <Grid2></Grid2>
              <Grid2></Grid2>
            </Grid2>
          </DashboardLayout>
        </AppProvider>
      </ThemeProvider>
    </>
  );
};

export default page;
