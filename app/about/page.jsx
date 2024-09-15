import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Container,
} from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Container>
        <Card
          sx={{
            m: "12px",
            p: "12px",
          }}
        >
          <Typography variant="h2" color="tomato" fontWeight={900}>
            About Us
          </Typography>
          <Typography variant="p" color="grey" fontWeight={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            impedit quod dolor quisquam cumque facilis repudiandae animi quae
            ullam vel asperiores id at doloribus mollitia aut nulla aspernatur
            dolore necessitatibus?
          </Typography>
        </Card>
      </Container>
    </>
  );
};

export default AboutPage;
