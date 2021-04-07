import React from "react";

// theme context type
type ThemeContextType = {
  light: boolean;
  setLight: (value: boolean) => Promise<void>;
};

// define themeContext
const ThemeContext = React.createContext<Partial<ThemeContextType>>({});

ThemeContext.displayName = "ThemeContext";

// create theme provider
export const ThemeProvider: React.FC<any> = (props) => {
  const [light, setLight] = React.useState<boolean>(false);

  // theme provider value
  const value = {
    light,
    setLight,
  };

  // return provider w/ value as props
  return <ThemeContext.Provider value={value} {...props} />;
};

// export useTheme to access ThemeProvider values
export const useTheme = () => {
  const context = React.useContext<Partial<ThemeContextType>>(ThemeContext);
  if (context === undefined) {
    throw new Error("setLight must be used within a useTheme");
  }
  return context;
};
