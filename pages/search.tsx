import React from "react";
//third party
import {
  Grid,
  TextField,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CachedIcon from "@material-ui/icons/Cached";
import debounce from "lodash/debounce";
//styles
import styles from "../styles/Home.module.css";

// search props interface
interface SearchProps {
  light: boolean;
  status: string;
  setSearch: (value: string) => void;
}

const Search = ({ light, setSearch, status }: SearchProps) => {
  // Handle / Debounce Character Search
  const handleCharacterSearch = (search: string) => {
    debounceCharacterSearch(search);
  };
  const debounceCharacterSearch = React.useCallback(
    debounce((_searchVal: string) => {
      setSearch && setSearch(_searchVal);
    }, 500),
    []
  );

  return (
    <>
      {/* search bar */}
      <Grid
        direction="column"
        container
        xs={6}
        style={{
          paddingLeft: "25px",
        }}
        justify="flex-start"
        alignContent="flex-start"
        className={styles?.zIndex}
      >
        <FormControl
          style={{ width: "100%", background: "white", borderRadius: "6px" }}
        >
          <TextField
            type="input"
            name="characterSearch"
            variant="outlined"
            placeholder="Start Typing to Search for a Star Wars Character..."
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ color: light ? "blue" : "red" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleCharacterSearch(event?.target?.value)}
          />
        </FormControl>
      </Grid>
      {/* custom loading icon */}
      <Grid
        direction="column"
        container
        xs={1}
        style={{ paddingRight: "25px", color: "white" }}
        className={styles?.zIndex}
      >
        <Grid direction="row" xs={12}>
          {status === "loading" && (
            <div style={{ paddingTop: "15px", paddingLeft: "5px" }}>
              <CachedIcon
                className={styles?.rotate}
                style={{ color: light ? "blue" : "red" }}
              />
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
