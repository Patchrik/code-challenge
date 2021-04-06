import React from "react";
//context
import { useTheme } from "../context/themeContext";
//components
import Search from "./search";
import ModeBtn from "./modeBtn";
import CharacterDetails from "./character/characterDetails";
//third party
import { Grid } from "@material-ui/core";
//styles
import styles from "../styles/Home.module.css";
//api
import { useQuery } from "react-query";
import { getSearchPerson } from "./api/api";

const Home = () => {
  const { light, setLight } = useTheme();
  const [search, setSearch] = React.useState<string>("");

  //useQuery for character data
  const { data, error, status }: any = useQuery(
    ["characterSearch", { search }],
    () => getSearchPerson(search),
    {
      enabled: !!search,
    }
  );

  // console.log({ data });

  // return if error
  if (error) return "An error has occurred: " + error.message;

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
          <CharacterDetails light={light} data={data} />
        </Grid>
      )}
    </div>
  );
};

export default Home;
