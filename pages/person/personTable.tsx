import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  withStyles,
  Theme,
  createStyles,
  TableCell,
} from "@material-ui/core";
//components
import Species from "../components/species";

// data type
type DataObject = {
  url: string;
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  species: any[];
};

// person interface
interface PersonTableProps {
  data: DataObject;
  light: boolean;
  capitalizeFirstLetter: (value: string) => string;
  dataView: string;
  StyledTableCell?: any;
  StyledTableRow?: any;
}

const PersonTable = ({
  data,
  light,
  capitalizeFirstLetter,
  dataView,
  StyledTableCell,
  StyledTableRow,
}: PersonTableProps) => {
  // return person table
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
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Birth Year</StyledTableCell>
              <StyledTableCell>Height</StyledTableCell>
              <StyledTableCell>Mass</StyledTableCell>
              <StyledTableCell>Eye Color</StyledTableCell>
              <StyledTableCell>Hair Color</StyledTableCell>
              <StyledTableCell>Skin Color</StyledTableCell>
              <StyledTableCell>Species</StyledTableCell>
            </TableRow>
          </TableHead>

          {/* table body */}
          <TableBody>
            <StyledTableRow key={data?.url}>
              <StyledTableCell>
                {data?.name ? capitalizeFirstLetter(data?.name) : "Unknown"}
              </StyledTableCell>
              <StyledTableCell>
                {data?.birth_year
                  ? capitalizeFirstLetter(data?.birth_year)
                  : "Unknown"}{" "}
              </StyledTableCell>
              <StyledTableCell>
                {data?.height ? capitalizeFirstLetter(data?.height) : "Unknown"}{" "}
              </StyledTableCell>
              <StyledTableCell>
                {data?.mass ? capitalizeFirstLetter(data?.mass) : "Unknown"}{" "}
              </StyledTableCell>
              <StyledTableCell>
                {data?.eye_color
                  ? capitalizeFirstLetter(data?.eye_color)
                  : "Unknown"}{" "}
              </StyledTableCell>
              <StyledTableCell>
                {data?.hair_color
                  ? capitalizeFirstLetter(data?.hair_color)
                  : "Unknown"}{" "}
              </StyledTableCell>
              <StyledTableCell>
                {data?.skin_color
                  ? capitalizeFirstLetter(data?.skin_color)
                  : "Unknown"}{" "}
              </StyledTableCell>
              {/* map over species if length > 0 */}
              {data?.species?.length === 0 ? (
                <StyledTableCell>Human</StyledTableCell>
              ) : null}
              {data?.species?.length > 0 &&
                data?.species.map((specie: any) => {
                  const speciesUrlSection = specie.split("/").filter(Boolean);
                  const speciesId =
                    speciesUrlSection[speciesUrlSection.length - 1];
                  return (
                    <Species id={speciesId} light={light} dataView={dataView} />
                  );
                })}
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PersonTable;
