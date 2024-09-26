"use client";
import { theme } from "@/components/theme";
import { Container, Box, Button, ThemeProvider } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button variant="contained" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Register
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default page;
