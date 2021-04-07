import React from "react";
import { ThemeProvider } from "./themeContext";
import { PersonProvider } from "./personContext";

const ContextProviders: React.FC<any> = ({ children }) => {
  // export theme provider
  return (
    <ThemeProvider>
      <PersonProvider>{children}</PersonProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
