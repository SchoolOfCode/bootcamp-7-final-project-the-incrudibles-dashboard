import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CSVLink } from "react-csv";
import convertJsonToCsv from "../../helperFunctions/jsontocsv";
import { useResponsesData } from "../../hooks/useDashboardData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../components/Title";
import getRecentResponse from "../../helperFunctions/getrecentresponse";
import Piechart from "../../components/Piechart";

export default function Homepage() {
  const { response, isLoading } = useResponsesData();
  console.log("response", response);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {!isLoading && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "row-reverse" }}>
              <CSVLink
                data={convertJsonToCsv(response)}
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
              <Piechart response={response} />
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
                    {response.payload.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.graduatename}</TableCell>
                        <TableCell>{row.cohort}</TableCell>
                        <TableCell>
                          {String(getRecentResponse(row.responses).isemployed)}
                        </TableCell>
                        <TableCell>
                          {getRecentResponse(row.responses).currentemployer}
                        </TableCell>
                        <TableCell>
                          {getRecentResponse(row.responses).currentsalary}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </React.Fragment>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
