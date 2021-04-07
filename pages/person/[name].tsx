import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
//components
import ModeBtn from "../modeBtn";
import PersonTable from "./personTable";
import Film from "../components/film";
import Ship from "../components/ship";
import Vehicle from "../components/vehicle";
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
  const [dataView, setDataView] = React.useState<string>("table");

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
      <Grid container direction="row" style={{ paddingTop: "25px" }}>
        <Grid
          container
          justify="center"
          alignContent="center"
          xs={7}
          style={{ paddingLeft: "25px" }}
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
              <PersonTable
                data={data}
                light={light}
                capitalizeFirstLetter={capitalizeFirstLetter}
                dataView={dataView}
              />
              {data?.films?.length > 0 && (
                <Grid
                  item
                  direction="row"
                  xs={12}
                  style={{
                    border: light ? "2px solid blue" : "2px solid red",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    marginTop: "50px",
                  }}
                >
                  <TableContainer>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>Title</TableCell>
                          <TableCell>Director</TableCell>
                          <TableCell>Producer(s)</TableCell>
                          <TableCell>Release Date</TableCell>
                          <TableCell>Episode</TableCell>
                        </TableRow>
                      </TableHead>

                      {data?.films?.map((film: string) => {
                        const filmUrlSections = film.split("/").filter(Boolean);
                        const filmId =
                          filmUrlSections[filmUrlSections.length - 1];
                        return (
                          <Film
                            id={filmId}
                            light={light}
                            key={`Film-${filmId}`}
                            dataView={dataView}
                          />
                        );
                      })}
                    </Table>
                  </TableContainer>
                </Grid>
              )}
              {data?.starships?.length > 0 && (
                <Grid
                  item
                  direction="row"
                  xs={12}
                  style={{
                    border: light ? "2px solid blue" : "2px solid red",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    marginTop: "50px",
                  }}
                >
                  <TableContainer>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Model</TableCell>
                          <TableCell>Class</TableCell>
                          <TableCell>Hyperdrive Rating</TableCell>
                          <TableCell>Max Speed</TableCell>
                          <TableCell>Length</TableCell>
                          <TableCell>Passengers</TableCell>
                          <TableCell>Crew</TableCell>
                          <TableCell>Manufacturer</TableCell>
                        </TableRow>
                      </TableHead>

                      {data?.starships?.map((ship: string) => {
                        const shipUrlSections = ship.split("/").filter(Boolean);
                        const shipId =
                          shipUrlSections[shipUrlSections.length - 1];
                        return (
                          <Ship
                            id={shipId}
                            light={light}
                            key={`Ship-${shipId}`}
                            dataView={dataView}
                          />
                        );
                      })}
                    </Table>
                  </TableContainer>
                </Grid>
              )}
              {data?.vehicles?.length > 0 && (
                <Grid
                  item
                  direction="row"
                  xs={12}
                  style={{
                    border: light ? "2px solid blue" : "2px solid red",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    marginTop: "50px",
                  }}
                >
                  <TableContainer>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Model</TableCell>
                          <TableCell>Class</TableCell>
                          <TableCell>Cost</TableCell>
                          <TableCell>Max Speed</TableCell>
                          <TableCell>Length</TableCell>
                          <TableCell>Passengers</TableCell>
                          <TableCell>Crew</TableCell>
                          <TableCell>Manufacturer</TableCell>
                        </TableRow>
                      </TableHead>

                      {data?.vehicles?.map((vehicle: string) => {
                        const vehicleUrlSections = vehicle
                          .split("/")
                          .filter(Boolean);
                        const vehicleId =
                          vehicleUrlSections[vehicleUrlSections.length - 1];
                        return (
                          <Vehicle
                            id={vehicleId}
                            light={light}
                            key={`Vehicle-${vehicleId}`}
                            dataView={dataView}
                            capitalizeFirstLetter={capitalizeFirstLetter}
                          />
                        );
                      })}
                    </Table>
                  </TableContainer>
                </Grid>
              )}
            </>
          )}
        </Grid>
        <ModeBtn light={light} setLight={setLight} />
      </Grid>
    </div>
  );
};

export default PersonDetails;
