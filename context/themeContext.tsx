import React from "react";

type ThemeContextType = {
  light: boolean;
  setLight: (value: boolean) => Promise<void>;
};

const ThemeContext = React.createContext<Partial<ThemeContextType>>({});

ThemeContext.displayName = "ThemeContext";

export const ThemeProvider: React.FC<any> = (props) => {
  const [light, setLight] = React.useState<boolean>(false);

  const value = {
    light,
    setLight,
  };

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => {
  const context = React.useContext<Partial<ThemeContextType>>(ThemeContext);
  if (context === undefined) {
    throw new Error("setLight must be used within a useTheme");
  }
  return context;
};
