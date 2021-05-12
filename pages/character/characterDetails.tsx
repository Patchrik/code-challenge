import React from "react";
//third party
import { Grid } from "@material-ui/core";
//styles
import styles from "../../styles/Home.module.css";
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
  // context defs
  const { setPersonId } = usePerson();
  //capitalize first letter of string function
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <Grid direction="column" xs={5} item>
      {data &&
        // map over returned data
        data?.map((person: PersonObject) => {
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
                </Grid>
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CharacterDetails;
