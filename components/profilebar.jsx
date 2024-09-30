import {
  NotificationsNoneOutlined,
  MessageOutlined,
  AccountCircleOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { AppBar, Badge, Box, Button, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../components/theme";

const ProfileBar = () => {
  const storedData = JSON.parse(localStorage.getItem("formData"));

  const drawerWidth = 220;
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(96% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            mr: 2,
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  width: "fit-content",
                  ml: 1,
                }}
              >
                <img
                  src="NikeLogo.jpg"
                  width={60}
                  style={{
                    borderRadius: 12,
                    border: "2px solid",
                    borderColor: theme.palette.secondary.main,
                  }}
                />
                <Box>
                  <h4>Academic Year</h4>
                  <p style={{ fontSize: 13 }}>A.Y 24-25</p>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  fontSize: 14,
                  width: "fit-content",
                  height: "fit-content",
                  bgcolor: theme.palette.secondary.main,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                First Trimester
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Button variant="contained">
                  EN <KeyboardArrowDown />
                </Button>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneOutlined />
                </Badge>
                <Badge badgeContent={24} color="secondary">
                  <MessageOutlined />
                </Badge>
              </Box>
              <hr />
              <Box sx={{ display: "flex" }}>
                <Box sx={{ textAlign: "center" }}>
                  <p style={{ fontWeight: 800, fontSize: 20 }}>
                    {storedData.firstname}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      backgroundColor: "gray",
                      borderRadius: 8,
                      padding: 2,
                    }}
                  >
                    SuperAdmin
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      backgroundColor: "#7f5bff7a",
                      borderRadius: 8,
                      padding: 2,
                      paddingRight: 6,
                      paddingLeft: 6,
                      marginTop: 4,
                      marginBottom: 4,
                    }}
                  >
                    Boys Section
                  </p>
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    alignItems: "center",
                    display: "flex",
                    ml: 2,
                    cursor: "pointer",
                  }}
                >
                  <img src="userw.png" width={55} />
                  <KeyboardArrowDown />
                </Box>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default ProfileBar;
