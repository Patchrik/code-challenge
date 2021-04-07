import React from "react";
//third party
import { Grid } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
//components
import ModeBtn from "../modeBtn";
import PersonTable from "./personTable";
import FilmTable from "./filmTable";
import ShipTable from "./shipTable";
import VehicleTable from "./vehicleTable";
//context
import { useTheme } from "../../context/themeContext";
import { usePerson } from "../../context/personContext";
//styles
import style from "../../styles/Home.module.css";
//api
import { useQuery } from "react-query";
import { getPersonDetails } from "../api/api";

const PersonDetails = () => {
  //define contexts
  const { light, setLight } = useTheme();
  const { personId } = usePerson();
  const [dataView] = React.useState<string>("table");

  //person query
  const { data, status, error } = useQuery(
    [`person-${personId}`, { personId }],
    () => getPersonDetails("people", personId, error),
    {
      enabled: !!personId,
    }
  );

  //capitalize first letter of string function
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className={style?.imgContainer}>
      <Grid
        container
        direction="row"
        style={{ paddingTop: "25px", paddingBottom: "25px" }}
      >
        <Grid
          container
          justify="center"
          alignContent="center"
          xs={7}
          style={{ paddingLeft: "25px" }}
          direction="row"
        >
          {status === "loading" ? (
            <Grid item direction="row" xs={12}>
              <CachedIcon
                className={style?.rotate}
                style={{ color: light ? "blue" : "red" }}
              />
            </Grid>
          ) : (
            <>
              {/* person table */}
              {data && (
                <>
                  <span
                    style={{
                      color: light ? "blue" : "red",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Character Information
                  </span>
                  <PersonTable
                    data={data}
                    light={light}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                    dataView={dataView}
                  />
                </>
              )}
              {/* films table */}
              {data?.films?.length > 0 && (
                <Grid
                  style={{
                    marginTop: "50px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: light ? "blue" : "red",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Film Information
                  </span>
                  <FilmTable data={data} light={light} dataView={dataView} />
                </Grid>
              )}
              {/* starships table */}
              {data?.starships?.length > 0 && (
                <Grid
                  style={{
                    marginTop: "50px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: light ? "blue" : "red",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Starship Information
                  </span>
                  <ShipTable data={data} light={light} dataView={dataView} />
                </Grid>
              )}
              {/* vehicles table */}
              {data?.vehicles?.length > 0 && (
                <Grid
                  style={{
                    marginTop: "50px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: light ? "blue" : "red",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Vehicle Information
                  </span>
                  <VehicleTable
                    data={data}
                    light={light}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                    dataView={dataView}
                  />
                </Grid>
              )}
            </>
          )}
        </Grid>
        <ModeBtn light={light} setLight={setLight} dataView={dataView} />
      </Grid>
    </div>
  );
};

export default PersonDetails;
