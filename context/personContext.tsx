import React from "react";

// person context type
type PersonContextType = {
  personId: string;
  setPersonId: (value: string) => Promise<void>;
  personToggle: boolean;
  setPersonToggle: (value: boolean) => Promise<void>;
  filmToggle: boolean;
  setFilmToggle: (value: boolean) => Promise<void>;
  shipToggle: boolean;
  setShipToggle: (value: boolean) => Promise<void>;
  vehicleToggle: boolean;
  setVehicleToggle: (value: boolean) => Promise<void>;
};

// define personContext
const PersonContext = React.createContext<Partial<PersonContextType>>({});

PersonContext.displayName = "PersonContext";

// create person provider
export const PersonProvider: React.FC<any> = (props) => {
  const [personId, setPersonId] = React.useState<string>("");
  const [personToggle, setPersonToggle] = React.useState<boolean>(false);
  const [filmToggle, setFilmToggle] = React.useState<boolean>(false);
  const [shipToggle, setShipToggle] = React.useState<boolean>(false);
  const [vehicleToggle, setVehicleToggle] = React.useState<boolean>(false);

  // person provider value
  const value = {
    personId,
    setPersonId,
    personToggle,
    setPersonToggle,
    filmToggle,
    setFilmToggle,
    shipToggle,
    setShipToggle,
    vehicleToggle,
    setVehicleToggle,
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
