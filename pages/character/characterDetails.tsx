import React from "react";
//third party
import { Grid } from "@material-ui/core";
//styles
import styles from "../../styles/Home.module.css";
//components
import Film from "./film";
import Ship from "./ship";
import Species from "./species";

interface CharacterDetailsProps {
  light: boolean;
  data: any[];
}

const CharacterDetails = ({ light, data }: CharacterDetailsProps) => {
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <Grid
      direction="column"
      xs={5}
      item
      style={{
        border: light ? "2px solid blue" : "2px solid red",
        borderRadius: "6px",
        backgroundColor: "white",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "25px",
      }}
    >
      {data &&
        data?.map((person: any) => {
          console.log({ person });
          return (
            <>
              <Grid
                direction="row"
                container
                xs={12}
                style={{ fontWeight: "bold", paddingTop: "10px" }}
                justify="center"
                key={person?.id}
              >
                <Grid
                  item
                  direction="column"
                  xs={5}
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  {person?.name ? capitalizeFirstLetter(person?.name) : null}
                </Grid>
                <Grid
                  item
                  direction="column"
                  xs={5}
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  Birth Year: {person?.birth_year ? person?.birth_year : null}
                </Grid>
              </Grid>
              <div className={styles?.strike}>
                <span style={{ fontWeight: "bold" }}>
                  About{" "}
                  {person?.name ? capitalizeFirstLetter(person?.name) : null}
                </span>
              </div>
              <Grid
                container
                direction="column"
                xs={12}
                style={{ paddingTop: "10px" }}
              >
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Gender:</span>{" "}
                  {person?.gender
                    ? capitalizeFirstLetter(person?.gender)
                    : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Height:</span>{" "}
                  {person?.height ? person?.height : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Weight:</span>{" "}
                  {person?.mass ? person?.mass : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Skin Color:</span>{" "}
                  {person?.skin_color
                    ? capitalizeFirstLetter(person?.skin_color)
                    : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Hair Color:</span>{" "}
                  {person?.hair_color
                    ? capitalizeFirstLetter(person?.hair_color)
                    : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Eye Color:</span>{" "}
                  {person?.eye_color
                    ? capitalizeFirstLetter(person?.eye_color)
                    : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  {person?.species?.length === 0 ? (
                    <>
                      <span style={{ fontWeight: "bold" }}>Species:</span>
                      <span> Human</span>
                    </>
                  ) : null}
                  {person?.species?.map((specie: string) => {
                    const speciesUrlSection = specie
                      ?.split("/")
                      .filter(Boolean);
                    const speciesId =
                      speciesUrlSection[speciesUrlSection.length - 1];
                    return <Species id={speciesId} light={light} />;
                  })}
                </Grid>
              </Grid>
              {person?.films?.length > 0 && (
                <>
                  <div className={styles?.strike}>
                    <span style={{ fontWeight: "bold" }}>Films</span>
                  </div>
                  {person?.films && (
                    <>
                      <Grid
                        container
                        direction="row"
                        xs={12}
                        justify="center"
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        <Grid item direction="column" xs={6}>
                          Title
                        </Grid>
                        <Grid item direction="column" xs={6}>
                          Director
                        </Grid>
                      </Grid>
                      {person?.films?.map((film: string) => {
                        const filmUrlSections = film.split("/").filter(Boolean);
                        const filmId =
                          filmUrlSections[filmUrlSections.length - 1];
                        return (
                          <Film
                            id={filmId}
                            light={light}
                            key={`Film-${filmId}`}
                          />
                        );
                      })}
                    </>
                  )}
                </>
              )}
              {person?.starships?.length > 0 && (
                <>
                  <div className={styles?.strike}>
                    <span style={{ fontWeight: "bold" }}>Starships Flown</span>
                  </div>
                  {person?.starships && (
                    <>
                      <Grid
                        container
                        direction="row"
                        xs={12}
                        justify="center"
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        <Grid item direction="column" xs={2}>
                          Name
                        </Grid>
                        <Grid item direction="column" xs={2}>
                          Cost
                        </Grid>
                        <Grid item direction="column" xs={2}>
                          Crew
                        </Grid>
                        <Grid item direction="column" xs={2}>
                          Manufacturer
                        </Grid>
                        <Grid item direction="column" xs={2}>
                          Passengers
                        </Grid>
                        <Grid item direction="column" xs={2}>
                          Class
                        </Grid>
                      </Grid>
                      {person?.starships?.map((ship: string) => {
                        const shipUrlSections = ship.split("/").filter(Boolean);
                        const shipId =
                          shipUrlSections[shipUrlSections.length - 1];
                        return (
                          <Ship
                            id={shipId}
                            light={light}
                            key={`Ship-${shipId}`}
                          />
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </>
          );
        })}
    </Grid>
  );
};

export default CharacterDetails;
