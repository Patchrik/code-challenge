import React from "react";
import { useRouter } from "next/router";
//third party
import { Grid, Button } from "@material-ui/core";
//styles
import Home from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MovieIcon from "@material-ui/icons/Movie";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "../styles/Home.module.css";
//context
import { usePerson } from "../context/personContext";

// btn interface
interface ModeProps {
  light: boolean;
  setLight: (value: boolean) => void;
  dataView?: string;
  personData?: PersonDataType;
}

//types
type PersonDataType = {
  films: any[];
  starships: any[];
  vehicles: any[];
};

const ModeBtn = ({ light, setLight, dataView, personData }: ModeProps) => {
  const [hideBtns, setHideBtns] = React.useState<boolean>(false);
  //define router
  const router = useRouter();
  //context defs
  const {
    personToggle,
    setPersonToggle,
    filmToggle,
    setFilmToggle,
    shipToggle,
    setShipToggle,
    vehicleToggle,
    setVehicleToggle,
  } = usePerson();

  return (
    <Grid
      direction="column"
      container
      xs={5}
      style={{
        paddingRight: "25px",
        position: "absolute",
        top: "35px",
        right: "5px",
      }}
      className={styles?.zIndex}
      justify="flex-end"
      alignContent="flex-end"
    >
      {/* toggle btn sidebar */}
      {hideBtns && (
        <>
          {light ? (
            <Button
              color="primary"
              style={{ alignSelf: "flex-end" }}
              onClick={() => setHideBtns(false)}
            >
              <ChevronRightIcon fontSize="small" />
            </Button>
          ) : (
            <Button
              color="secondary"
              style={{ alignSelf: "flex-end" }}
              onClick={() => setHideBtns(false)}
            >
              <ChevronRightIcon fontSize="small" />
            </Button>
          )}
        </>
      )}
      {!hideBtns && (
        <>
          {light ? (
            <Button
              color="primary"
              style={{ alignSelf: "flex-end" }}
              onClick={() => setHideBtns(true)}
            >
              <KeyboardArrowDownIcon fontSize="small" />
            </Button>
          ) : (
            <Button
              color="secondary"
              style={{ alignSelf: "flex-end" }}
              onClick={() => setHideBtns(true)}
            >
              <KeyboardArrowDownIcon fontSize="small" />
            </Button>
          )}
        </>
      )}
      {!hideBtns ? (
        <>
          {light ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setLight && setLight(false)}
              style={{ marginTop: "5px" }}
            >
              Dark Side
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => setLight && setLight(true)}
              style={{ marginTop: "5px" }}
            >
              Light Side
            </Button>
          )}
          {/* home btn */}
          {dataView === "table" && (
            <>
              {light ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    router.push({
                      pathname: `/`,
                    });
                  }}
                  style={{ marginTop: "10px" }}
                >
                  <Home /> Home
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    router.push({
                      pathname: `/`,
                    });
                  }}
                  style={{ marginTop: "10px" }}
                >
                  <Home /> Home
                </Button>
              )}
            </>
          )}
          {/* toggle person btn */}
          {dataView === "table" && personData !== null && (
            <>
              {light ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setPersonToggle(!personToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <PersonIcon /> Show Person
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setPersonToggle(!personToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <PersonIcon /> Show Person
                </Button>
              )}
            </>
          )}
          {/* toggle films btn */}
          {dataView === "table" && personData?.films.length > 0 && (
            <>
              {light ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setFilmToggle(!filmToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <MovieIcon /> Show Films
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setFilmToggle(!filmToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <MovieIcon /> Show Films
                </Button>
              )}
            </>
          )}
          {/* toggle starships btn */}
          {dataView === "table" && personData?.starships.length > 0 && (
            <>
              {light ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setShipToggle(!shipToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <AirplanemodeActiveIcon /> Show Ships
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setShipToggle(!shipToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <AirplanemodeActiveIcon /> Show Ships
                </Button>
              )}
            </>
          )}
          {/* toggle vehicles btn */}
          {dataView === "table" && personData?.vehicles.length > 0 && (
            <>
              {light ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setVehicleToggle(!vehicleToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <MotorcycleIcon /> Show Vehicles
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setVehicleToggle(!vehicleToggle)}
                  style={{ marginTop: "10px" }}
                >
                  <MotorcycleIcon /> Show Vehicles
                </Button>
              )}
            </>
          )}
        </>
      ) : null}
      {/* light mode toggle btn */}
    </Grid>
  );
};

export default ModeBtn;
