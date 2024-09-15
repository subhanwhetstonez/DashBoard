// components/NavigationMenu.jsx
import React from "react";
import About from "./About";
import { Home, Search } from "@mui/icons-material";

const NAVIGATION = [
  {
    kind: "header",
    title: "Different Components",
  },
  {
    segment: "/home", // Assume Home component is imported
    title: "Home",
    icon: <Home />, // Assume you have an icon component
  },
  {
    segment: <About />, // Assume About component is imported
    title: "About",
    icon: <Search />,
  },
];

function NavigationMenu() {
  return (
    <nav>
      {NAVIGATION.map((item, index) => (
        <div key={index}>
          {item.kind === "header" ? (
            <h2>{item.title}</h2>
          ) : (
            <>
              <div>{item.icon}</div>
              <div>{item.title}</div>
              <div>{item.segment}</div> {/* Render the React component */}
            </>
          )}
        </div>
      ))}
    </nav>
  );
}

export default NavigationMenu;
