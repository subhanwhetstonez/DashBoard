"use client";
import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import { theme } from "@/app/home/page";
import BasicTable1 from "./table1";
import BasicTable2 from "./table2";
import BasicTable3 from "./table3";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.paper", width: "100%", pb: "12px" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Fruits"
              {...a11yProps(0)}
              sx={{ bgcolor: theme.palette.primary.main }}
            />
            <Tab
              label="Vegetables"
              {...a11yProps(1)}
              sx={{ bgcolor: theme.palette.primary.main }}
            />
            <Tab
              label="Cheese"
              {...a11yProps(2)}
              sx={{ bgcolor: theme.palette.primary.main }}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.palette.secondary.main}>
          <BasicTable1 />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.palette.secondary.main}>
          <BasicTable2 />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.palette.secondary.main}>
          <BasicTable3 />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
