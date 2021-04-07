import React from "react";
import { useRouter } from "next/router";
//third party
import { Grid, Button } from "@material-ui/core";
//styles
import styles from "../../styles/Home.module.css";
//components
import Film from "../components/film";
import Ship from "../components/ship";
import Species from "../components/species";
//context
import { usePerson } from "../../context/personContext";

//interface
interface CharacterDetailsProps {
  light: boolean;
  data: any[];
}

//types
type PersonObject = {
  url: string;
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  skin_color: string;
  hair_color: string;
  eye_color: string;
  species: any[];
  films: any[];
  starships: any[];
};

const CharacterDetails = ({ light, data }: CharacterDetailsProps) => {
  //define router
  const router = useRouter();
  // context defs
  const { setPersonId } = usePerson();
  //capitalize first letter of string function
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  //states
  const [dataView] = React.useState<string>("details");

  return (
    <Grid direction="column" xs={5} item style={{}}>
      {data &&
        // map over returned data
        data.map((person: PersonObject) => {
          //get personId
          const personUrlSections = person?.url.split("/").filter(Boolean);
          const personId = personUrlSections[personUrlSections.length - 1];
          setPersonId(personId);
          return (
            <Grid
              container
              direction="column"
              style={{
                border: light ? "2px solid blue" : "2px solid red",
                borderRadius: "6px",
                backgroundColor: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "25px",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              {/* person information */}
              <Grid
                direction="row"
                container
                xs={12}
                style={{ fontWeight: "bold", paddingTop: "10px" }}
                justify="center"
                key={person?.url}
              >
                <Grid
                  item
                  direction="column"
                  xs={4}
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    paddingTop: "5px",
                  }}
                >
                  {person?.name ? capitalizeFirstLetter(person?.name) : null}
                </Grid>
                <Grid
                  item
                  direction="column"
                  xs={4}
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    paddingTop: "5px",
                  }}
                >
                  Birth Year: {person?.birth_year ? person?.birth_year : null}
                </Grid>
                {/* more info btn */}
                <Grid
                  item
                  direction="column"
                  xs={4}
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                >
                  {light ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        router.push({
                          pathname: `/person/[name]`,
                          query: { name: person?.name },
                        });
                      }}
                    >
                      More Info
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        router.push({
                          pathname: `/person/[name]`,
                          query: { name: person?.name },
                        });
                      }}
                    >
                      More Info
                    </Button>
                  )}
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
                  {person?.height ? `${person?.height} in` : null}
                </Grid>
                <Grid item direction="row" xs={12}>
                  <span style={{ fontWeight: "bold" }}>Weight:</span>{" "}
                  {person?.mass ? `${person?.mass} lbs` : null}
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
                  {/* maps over species component */}
                  {person?.species.map((specie: string) => {
                    const speciesUrlSection = specie.split("/").filter(Boolean);
                    const speciesId =
                      speciesUrlSection[speciesUrlSection.length - 1];
                    return (
                      <Species
                        id={speciesId}
                        light={light}
                        dataView={dataView}
                      />
                    );
                  })}
                </Grid>
              </Grid>
              {person?.films?.length > 0 ? (
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
                      {/* maps over film component */}
                      {person?.films.map((film: string) => {
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
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className={styles?.strike}>
                    <span style={{ fontWeight: "bold" }}>Films</span>
                  </div>
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
                    <Grid item direction="column" xs={12}>
                      {person?.name
                        ? capitalizeFirstLetter(person?.name)
                        : null}{" "}
                      did not appear in any films.
                    </Grid>
                  </Grid>
                </>
              )}
              {person?.starships?.length > 0 ? (
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
                      {/* map over starships component */}
                      {person?.starships.map((ship: string) => {
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
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className={styles?.strike}>
                    <span style={{ fontWeight: "bold" }}>Starships Flown</span>
                  </div>
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
                    <Grid item direction="column" xs={12}>
                      {person?.name
                        ? capitalizeFirstLetter(person?.name)
                        : null}{" "}
                      has no recorded starship(s).
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CharacterDetails;
