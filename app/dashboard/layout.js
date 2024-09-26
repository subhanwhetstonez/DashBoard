import DAshBoard from "@/components/dashboard";
import { Box } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F5F5F5" }}>
        <DAshBoard />
        <Box
          sx={{
            width: { xs: "90%" },
            position: "relative",
            display: "flex",
            justifyContent: "end",
            m: { sm: "auto", xl: "auto" },
            marginLeft: { md: "320px", xs: "0px" },
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
