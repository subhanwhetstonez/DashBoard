import localFont from "next/font/local";
import "./globals.css";
import { Box } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nike",
  description: "I don't know What this is",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Add this line */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            m: "auto",
            paddingTop: 12,
          }}
        >
          <Box>
            <img src="NikeLogo.jpg" width={180} height={180} />
          </Box>
          <Box sx={{ width: "100%" }}>{children}</Box>
        </Box>
      </body>
    </html>
  );
}
