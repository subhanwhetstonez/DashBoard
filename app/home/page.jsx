"use client";
import React from "react";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import {
  createTheme,
  CssBaseline,
  Grid2,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  Container,
} from "@mui/material";
import { Home, Search, Segment } from "@mui/icons-material";
import LineGraph from "@/components/homecom/chart";
import PieCharts from "@/components/homecom/pie";
import Calender from "@/components/homecom/calender";
import AboutPage from "@/components/About";

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
        <Container>
          <Grid container spacing={2} sx={{ p: "12px" }}>
            <Grid item xl={8}>
              <Paper sx={{ p: "12px" }}>
                <LineGraph />
                <Typography textAlign={"center"}>
                  Progress of Project
                </Typography>
              </Paper>
            </Grid>
            <Grid item xl={4}>
              <Paper sx={{ p: "12px" }}>
                <PieCharts />
              </Paper>
            </Grid>
            <Grid item xl={4}>
              <Paper>
                <Calender />
              </Paper>
            </Grid>
            <Grid item xl={4}>
              <Paper sx={{ p: "12px" }}>
                <Typography variant="h4">Tackle Writers' Block</Typography>
                <Typography variant="p" sx={{ fontSize: "12px" }}>
                  A random paragraph can also be an excellent way for a writer
                  to tackle writers' block. Writing block can often happen due
                  to being stuck with a current project that the writer is
                  trying to complete. By inserting a completely random paragraph
                  from which to begin, it can take down some of the issues that
                  may have been causing the writers' block in the first place.{" "}
                </Typography>
              </Paper>
            </Grid>
            <Grid></Grid>
            <Grid></Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default page;
