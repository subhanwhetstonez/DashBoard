"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Card,
  Container,
  Paper,
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  ThemeProvider,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { DashboardLayout } from "@toolpad/core";

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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Home() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <main>
            <div>
              <Paper
                elevation={4}
                width="fit"
                sx={{
                  p: "36px",
                  m: "12px",
                  textAlign: "justify",
                }}
              >
                <Typography variant="h2">Warner Spencer</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  voluptatibus explicabo, unde voluptate ex quas libero
                  similique suscipit alias pariatur nam quasi neque! Quaerat,
                  totam odit. Tenetur quod animi aliquid.
                </Typography>
              </Paper>
              <ImageList
                variant="quilted"
                cols={4}
                rowHeight={121}
                sx={{ mx: "260px" }}
              >
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}
