import localFont from "next/font/local";
import "./globals.css";
import DAshBoard from "@/components/dashboard";
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
  title: "Warner Spencer",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DAshBoard />
        <Box
          sx={{
            width: { xs: "90%", xl: "80%" },
            position: "relative",
            display: "flex",
            justifyContent: "end",
            m: { sm: "auto" },
            marginLeft: { xl: "320px", md: "320px", xs: "0px" },
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
