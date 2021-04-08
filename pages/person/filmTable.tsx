import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  Theme,
  createStyles,
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

//custom styled table cells
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme?.palette?.action?.hover,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

//custom styled table rows
const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: theme?.palette?.action?.hover,
      },
    },
  })
)(TableRow);

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
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Director</StyledTableCell>
              <StyledTableCell>Producer(s)</StyledTableCell>
              <StyledTableCell>Release Date</StyledTableCell>
              <StyledTableCell>Episode</StyledTableCell>
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
                StyledTableCell={StyledTableCell}
                StyledTableRow={StyledTableRow}
              />
            );
          })}
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default FilmTable;
