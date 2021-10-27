import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CSVLink } from "react-csv";
import convertJsonToCsv from "../../helperFunctions/jsontocsv";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../components/Title";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import Piechart from "../../components/Piechart";
import { useDataContext } from "../../hooks/useDataContext";

export default function Homepage() {
  const { data, filterDataByCohort, resetFilter } = useDataContext();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "row" }}>
            <button onClick={() => filterDataByCohort(1)}>cohort 1</button>
            <button onClick={() => filterDataByCohort(2)}>cohort 2</button>
            <button onClick={() => filterDataByCohort(3)}>cohort 3</button>
            <button onClick={() => filterDataByCohort(4)}>cohort 4</button>
            <button onClick={() => filterDataByCohort(5)}>cohort 5</button>
            <button onClick={() => filterDataByCohort(6)}>cohort 6</button>
            <button onClick={() => filterDataByCohort(7)}>cohort 7</button>
            <button onClick={() => resetFilter()}>All cohorts</button>
            <CSVLink
              data={convertJsonToCsv(data)}
              filename={"graduate_responses.csv"}
            >
              Download CSV
            </CSVLink>
          </Paper>
        </Grid>
        {/* selection */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          ></Paper>
        </Grid>
        {/* pie chart */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Piechart chartData={data} text="Employment status" />
          </Paper>
        </Grid>
        {/* all graduates */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <React.Fragment>
              <Title>Current data</Title>
              <Table size="small">
                <TableHead sx={{ p: 2, fontWeight: "bold" }}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Cohort</TableCell>
                    <TableCell>Employed</TableCell>
                    <TableCell>Current Employer</TableCell>
                    <TableCell>Current Salary (£)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.graduatename}</TableCell>
                      <TableCell>{row.cohort}</TableCell>
                      <TableCell>
                        {String(
                          getMostRecentResponse(row.responses).isemployed
                        )}
                      </TableCell>
                      <TableCell>
                        {getMostRecentResponse(row.responses).currentemployer}
                      </TableCell>
                      <TableCell>
                        {getMostRecentResponse(row.responses).currentsalary}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
