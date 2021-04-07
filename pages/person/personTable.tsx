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
}

const PersonTable = ({
  data,
  light,
  capitalizeFirstLetter,
  dataView,
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
              <TableCell>Name</TableCell>
              <TableCell>Birth Year</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Eye Color</TableCell>
              <TableCell>Hair Color</TableCell>
              <TableCell>Skin Color</TableCell>
              <TableCell>Species</TableCell>
            </TableRow>
          </TableHead>

          {/* table body */}
          <TableBody>
            <TableRow key={data?.url}>
              <TableCell>
                {data?.name ? capitalizeFirstLetter(data?.name) : "Unknown"}
              </TableCell>
              <TableCell>
                {data?.birth_year
                  ? capitalizeFirstLetter(data?.birth_year)
                  : "Unknown"}{" "}
              </TableCell>
              <TableCell>
                {data?.height ? capitalizeFirstLetter(data?.height) : "Unknown"}{" "}
              </TableCell>
              <TableCell>
                {data?.mass ? capitalizeFirstLetter(data?.mass) : "Unknown"}{" "}
              </TableCell>
              <TableCell>
                {data?.eye_color
                  ? capitalizeFirstLetter(data?.eye_color)
                  : "Unknown"}{" "}
              </TableCell>
              <TableCell>
                {data?.hair_color
                  ? capitalizeFirstLetter(data?.hair_color)
                  : "Unknown"}{" "}
              </TableCell>
              <TableCell>
                {data?.skin_color
                  ? capitalizeFirstLetter(data?.skin_color)
                  : "Unknown"}{" "}
              </TableCell>
              {/* map over species if length > 0 */}
              {data?.species?.length === 0 ? (
                <TableCell>Human</TableCell>
              ) : null}
              {data?.species?.length > 0 &&
                data?.species?.map((specie: any) => {
                  const speciesUrlSection = specie?.split("/").filter(Boolean);
                  const speciesId =
                    speciesUrlSection[speciesUrlSection.length - 1];
                  return (
                    <Species id={speciesId} light={light} dataView={dataView} />
                  );
                })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PersonTable;
