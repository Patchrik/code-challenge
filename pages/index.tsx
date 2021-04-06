import React from "react";
//context
import { useTheme } from "../context/themeContext";
//components
import Search from "./search";
import ModeBtn from "./modeBtn";
//third party
import { Grid } from "@material-ui/core";
//styles
import styles from "../styles/Home.module.css";
//api
import { useQuery } from "react-query";
import { getSearchPerson, getPersonFilms } from "./api/people";

const Home = () => {
  const { light, setLight } = useTheme();
  const [search, setSearch] = React.useState<string>("");
  const newFilmsArr = [];
  const [filmDataObject, setFilmDataObject] = React.useState<any>(null);
  const newStarshipArr = [];

  console.log({ filmDataObject });

  //useQuery for character data
  const { data, error, status }: any = useQuery(
    ["characterSearch", { search }],
    () => getSearchPerson(search),
    {
      enabled: !!search,
    }
  );
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  // return if error
  if (error) return "An error has occurred: " + error.message;

  const filmArr = data?.map((person: any) => {
    if (person?.films?.length > 0) {
      return person?.films;
    }
  });

  if (filmArr) {
    filmArr?.forEach((film: any) => {
      film?.forEach((item: string) => {
        newFilmsArr.push(item?.split("/")[5]);
      });
    });
  }

  // if (newFilmsArr.length > 0) {
  //   newFilmsArr.forEach((film: any) => {
  //     const { data: fData, error: fError }: any = useQuery(
  //       ["getFilmsById", { film }],
  //       () => getPersonFilms(film),
  //       {
  //         enabled: !!film,
  //         onSuccess: () => {
  //           setFilmDataObject(fData);
  //           if (newFilmsArr.length > 0) {
  //             newFilmsArr.pop();
  //           }
  //         },
  //         onError: () => {
  //           throw new Error(`getFilmsById ERROR: ${fError?.message}`);
  //         },
  //       }
  //     );
  //   });
  // }

  const starshipArr = data?.map((person: any) => {
    if (person?.starships?.length > 0) {
      return person?.starships;
    }
  });

  if (starshipArr) {
    starshipArr?.forEach((ship: any) => {
      ship?.forEach((item: string) => {
        newStarshipArr.push(item?.split("/")[5]);
      });
    });
  }

  console.log({ newStarshipArr });

  return (
    <div className={styles.imgContainer}>
      <Grid direction="row" container style={{ paddingTop: "25px" }}>
        {/* search bar and custom loading spinner */}
        <Search light={light} setSearch={setSearch} status={status} />
        {/* dark/light btn */}
        <ModeBtn light={light} setLight={setLight} />
      </Grid>
      {data && (
        <Grid
          direction="row"
          container
          justify="flex-start"
          alignContent="center"
          style={{ paddingTop: "50px", paddingLeft: "50px" }}
        >
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
            }}
          >
            {data &&
              data?.map((person: any) => {
                return (
                  <>
                    <Grid
                      direction="row"
                      container
                      xs={12}
                      style={{ fontWeight: "bold", paddingTop: "10px" }}
                      justify="center"
                    >
                      <Grid
                        item
                        direction="column"
                        xs={5}
                        style={{ textAlign: "center", fontSize: "16px" }}
                      >
                        {person?.name
                          ? capitalizeFirstLetter(person?.name)
                          : null}
                      </Grid>
                      <Grid
                        item
                        direction="column"
                        xs={5}
                        style={{ textAlign: "center", fontSize: "16px" }}
                      >
                        Birth Year:{" "}
                        {person?.birth_year ? person?.birth_year : null}
                      </Grid>
                    </Grid>
                    <div className={styles?.strike}>
                      <span style={{ fontWeight: "bold" }}>
                        About{" "}
                        {person?.name
                          ? capitalizeFirstLetter(person?.name)
                          : null}
                      </span>
                    </div>
                    <Grid
                      container
                      direction="column"
                      xs={12}
                      style={{ paddingTop: "10px" }}
                    >
                      <Grid item direction="row" xs={12}>
                        Gender:{" "}
                        {person?.gender
                          ? capitalizeFirstLetter(person?.gender)
                          : null}
                      </Grid>
                      <Grid item direction="row" xs={12}>
                        Height: {person?.height ? person?.height : null}
                      </Grid>
                      <Grid item direction="row" xs={12}>
                        Weight: {person?.mass ? person?.mass : null}
                      </Grid>
                      <Grid item direction="row" xs={12}>
                        Skin Color:{" "}
                        {person?.skin_color
                          ? capitalizeFirstLetter(person?.skin_color)
                          : null}
                      </Grid>
                      <Grid item direction="row" xs={12}>
                        Hair Color:{" "}
                        {person?.hair_color
                          ? capitalizeFirstLetter(person?.hair_color)
                          : null}
                      </Grid>
                      <Grid item direction="row" xs={12}>
                        Eye Color:{" "}
                        {person?.eye_color
                          ? capitalizeFirstLetter(person?.eye_color)
                          : null}
                      </Grid>
                    </Grid>
                    {person?.films?.length > 0 && (
                      <div className={styles?.strike}>
                        <span style={{ fontWeight: "bold" }}>Films</span>
                      </div>
                    )}
                    {person?.starships?.length > 0 && (
                      <div className={styles?.strike}>
                        <span style={{ fontWeight: "bold" }}>
                          Starships Flown
                        </span>
                      </div>
                    )}
                  </>
                );
              })}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Home;
