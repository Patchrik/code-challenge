import React from "react";
import { ThemeProvider } from "./themeContext";

const ContextProviders: React.FC<any> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ContextProviders;
