import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
//components
import Film from "../components/film";

// data type
type DataObject = {
  films: Array<any>;
};

// film interface
interface FilmTableProps {
  data: DataObject;
  light: boolean;
  dataView: string;
}

const FilmTable = ({ data, light, dataView }: FilmTableProps) => {
  // return film table
  return (
    <Grid
      item
      direction="row"
      xs={12}
      style={{
        border: light ? "2px solid blue" : "2px solid red",
        borderRadius: "6px",
        backgroundColor: "white",
      }}
    >
      <TableContainer>
        <Table stickyHeader>
          {/* table header */}
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Producer(s)</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Episode</TableCell>
            </TableRow>
          </TableHead>

          {/* map over data / return table body */}
          {data?.films?.map((film: string) => {
            const filmUrlSections = film.split("/").filter(Boolean);
            const filmId = filmUrlSections[filmUrlSections.length - 1];
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
  );
};

export default FilmTable;
