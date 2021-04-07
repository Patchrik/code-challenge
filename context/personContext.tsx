import React from "react";

// person context type
type PersonContextType = {
  personId: string;
  setPersonId: (value: string) => Promise<void>;
};

// define personContext
const PersonContext = React.createContext<Partial<PersonContextType>>({});

PersonContext.displayName = "PersonContext";

// create person provider
export const PersonProvider: React.FC<any> = (props) => {
  const [personId, setPersonId] = React.useState<string>("");

  // person provider value
  const value = {
    personId,
    setPersonId,
  };

  // return provider w/ value as props
  return <PersonContext.Provider value={value} {...props} />;
};

// export usePerson to access PersonProvider values
export const usePerson = () => {
  const context = React.useContext<Partial<PersonContextType>>(PersonContext);
  if (context === undefined) {
    throw new Error("setLight must be used within a usePerson");
  }
  return context;
};
