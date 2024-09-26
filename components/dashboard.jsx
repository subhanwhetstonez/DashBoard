"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Typography,
  Toolbar,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  AppBar,
} from "@mui/material";
import ProfileBar from "./profilebar";
import {
  ApartmentRounded,
  BusinessCenterRounded,
  CalendarTodayRounded,
  CrisisAlertRounded,
  FeedRounded,
  FingerprintRounded,
  Groups2Rounded,
  HailRounded,
  ImportContactsRounded,
  PersonRounded,
  School,
} from "@mui/icons-material";

const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const icons = [
    <ApartmentRounded />,
    <ApartmentRounded />,
    <Groups2Rounded />,
    <PersonRounded />,
    <School />,
    <ImportContactsRounded />,
    <BusinessCenterRounded />,
    <CalendarTodayRounded />,
    <FingerprintRounded />,
    <CrisisAlertRounded />,
  ];

  const drawer = (
    <div>
      <Toolbar>
        <img
          src="NikeLogo.jpg"
          alt=""
          width={50}
          style={{ borderRadius: 32, border: "2px solid black" }}
        />
        <div style={{ marginLeft: 12 }}>
          <h4 style={{ fontWeight: "800", fontSize: 12 }}>ACA FOLLOW-UP</h4>
          <p style={{ fontSize: 10, color: "gray" }}>STAY IN THE KNOW</p>
        </div>
      </Toolbar>
      <Divider />
      <div style={{ padding: 12 }}>
        <p style={{ fontSize: 15, fontWeight: 600 }}>Dashboard</p>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src="profile.png" width={35} />
              </ListItemIcon>
              <p style={{ fontSize: 15 }}>Overveiw</p>
            </ListItemButton>
          </ListItem>
        </List>
        <p style={{ fontSize: 15, fontWeight: 600 }}>School Setup</p>
        <List>
          {[
            "School",
            "Academic managment",
            "Users",
            "Students",
            "Teachers",
            "Subjects",
            "Classes",
            "Schedules",
            "Attendence",
            "Criteria",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <p style={{ fontSize: 14 }}>{text}</p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <p style={{ fontSize: 15, fontWeight: 600 }}>ACA Hub</p>
        <List>
          {["Feeds", "Parents Hub"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <FeedRounded /> : <HailRounded />}
                </ListItemIcon>
                <p style={{ fontSize: 14 }}>{text}</p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ProfileBar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
